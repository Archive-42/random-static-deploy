<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

How to Use Managed Identities with Azure Service Bus
====================================================

### Benney Au

-   Oct 16, 2020
-   7 Min read
-   5,909 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   5,909 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

Introduction

16

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setupmanagedidentitieswithroles" class="menu-link">Set up Managed Identities with Roles</a>
-   <a href="#module-installthenetsdkforazureservicebus" class="menu-link">Install the .NET SDK for Azure Service Bus</a>
-   <a href="#module-updateyourcode" class="menu-link">Update Your Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Many cloud applications rely on asynchronous messaging to improve reliability and decouple different parts of a solution. You can use Azure Service Bus as a cloud messaging service to achieve these goals. One big advantage of Azure Service Bus is that it supports managed identities, a Microsoft Azure feature that allows your applications to authenticate or authorize themselves with Azure Service Bus. The appeal is that secrets such as connection strings are not required to be copied onto developers’ machines or checked into source control.

Microsoft has recently updated their Azure Service Bus .NET SDKs to make working with managed identities easier. In this guide, you will learn how to use managed identities to connect a .NET App Service to Azure Service Bus.

Set up Managed Identities with Roles
------------------------------------

To get started working with App Service managed identities and Service Bus, you need to create a few resources.

You can do this easily using the Azure CLI:

    1rg=my-resource-group
    2webapp=my-app-name
    3erviceplan=my-sp
    4servicebus=demo-pl-service-bus
    5
    6# create app service plan and app service
    7az appservice plan create --is-linux --sku f1 -g $rg -n $serviceplan
    8az webapp create -g $rg -p $serviceplan -n $webapp -r "dotnetcore|3.1"
    9az webapp identity assign -g $rg -n $webapp
    10APP_IDENTITY=$(az webapp identity show -n $webapp -g $rg --query "{principalId:principalId}" -o tsv)
    11
    12# create service bus and queue
    13az servicebus namespace create --sku standard -g $rg -n $servicebus
    14queue_id=$(az servicebus queue create -n test --namespace-name $servicebus -g $rg -o tsv --query "{id:id}")
    15
    16# assign roles to listen and send messages to the queue
    17az role assignment create --role "Azure Service Bus Data Receiver" --assignee $APP_IDENTITY --scope $queue_id
    18az role assignment create --role "Azure Service Bus Data Sender" --assignee $APP_IDENTITY --scope $queue_id

sh

These commands do three things: 1. Create an app service plan and Azure App Service with a system-assigned identity 2. Create a Service Bus namespace and a queue 3. Use Role-based Access Control (RBAC) to grant the newly created app service's managed identity to receive and send messages to the <span class="jsx-3120878690">`test`</span> queue

Install the .NET SDK for Azure Service Bus
------------------------------------------

Microsoft has several .NET SDKs for interacting with Azure Service Bus. The latest at the time of writing is called the Service Bus Track 2 Library and it has a NuGet package named <span class="jsx-3120878690">`Azure.Messaging.ServiceBus`</span>.

This package is currently in pre-release, and it is the easiest to integrate with managed identities.

To start using this package in an ASP.NET Core application, run the following commands from your project:

    1dotnet add package Azure.Identity
    2dotnet add package Microsoft.Extensions.Azure
    3dotnet add package Azure.Messaging.ServiceBus --version 7.0.0-preview.8

sh

Update Your Code
----------------

With all the resources created and roles assigned, you need to update your code to get everything working.

Start by updating your <span class="jsx-3120878690">`Startup.cs`</span> method and register a new <span class="jsx-3120878690">`HostedService`</span> to listen to messages and register the <span class="jsx-3120878690">`ServiceBusClient`</span>.

    1services.AddHostedService<ServiceBusHostedService>();
    2services.AddAzureClients(cfg =>
    3{
    4  cfg.AddServiceBusClient(Configuration.GetSection("ServiceBus")).WithCredential(new Azure.Identity.DefaultAzureCredential());
    5});

csharp

This code reads the Service Bus location from a configuration such as <span class="jsx-3120878690">`AppSettings.json`</span>. This is ideal especially if you have multiple environments and use different Service Bus namespaces staging and production.

Add the following configuration to your <span class="jsx-3120878690">`AppSettings.json`</span>.

    1{
    2  "ServiceBus": {
    3    "FullyQualifiedNamespace": "xxxxxxxx.servicebus.windows.net"
    4  }
    5}

json

To actually listen to messages, create the class <span class="jsx-3120878690">`ServiceBusHostedService`</span> and add the following code:

    1public class ServiceBusHostedService : IHostedService
    2{
    3    private readonly ServiceBusClient _serviceBusClient;
    4    private ServiceBusProcessor _processor;
    5
    6    public ServiceBusHostedService(ServiceBusClient serviceBusClient)
    7    {
    8        _serviceBusClient = serviceBusClient;
    9    }
    10
    11    public async Task StartAsync(CancellationToken cancellationToken)
    12    {
    13        _processor = _serviceBusClient.CreateProcessor("test");
    14
    15        _processor.ProcessMessageAsync += ProcessMessageAsync;
    16        _processor.ProcessErrorAsync += ProcessErrorAsync;
    17
    18        await _processor.StartProcessingAsync(cancellationToken);
    19    }
    20
    21    private Task ProcessErrorAsync(ProcessErrorEventArgs arg)
    22    {
    23        return Task.CompletedTask;
    24    }
    25
    26    private Task ProcessMessageAsync(ProcessMessageEventArgs arg)
    27    {
    28        // perform your business logic to process messages
    29
    30        return Task.CompletedTask;
    31    }
    32
    33    public Task StopAsync(CancellationToken cancellationToken)
    34    {
    35        return _processor.CloseAsync(cancellationToken: cancellationToken);
    36    }
    37}

csharp

Your code is now listening for new Service Bus messages in the background [using IHostedService in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-3.1&tabs=visual-studio).

To send messages, inject the <span class="jsx-3120878690">`ServiceBusClient`</span> class and call the <span class="jsx-3120878690">`CreateSender()`</span> method.

    1public ServiceBusSender _serviceBusSender { get; private set; }
    2
    3public HomeController(
    4    ILogger<HomeController> logger,
    5    ServiceBusClient serviceBusClient)
    6{
    7    _logger = logger;
    8    _serviceBusSender = serviceBusClient.CreateSender("test");
    9}
    10
    11[HttpPost("post-message")]
    12public async Task<IActionResult> Message(MyModel model)
    13{
    14    var message = new ServiceBusMessage(Azure.BinaryData.FromObjectAsync(model)));
    15    await _serviceBusSender.SendMessageAsync(message);
    16    return Accepted();
    17}

csharp

Notice that in all the code samples, no connection string or client secret was required. This authorization is handled for you. When you are working on your local development machine, you use your Azure CLI credentials or Visual Studio credentials to authorize against these protected resources. When the app is running the Azure App Service, it uses managed identities for authentication.

Conclusion
----------

Azure Service Bus provides reliable cloud messaging as a service. If you learn to use the newer SDKs, you can make your application more secure and develop features faster. To learn more about the latest developments in Azure Service Bus' .NET SDK, read [Microsoft's GitHub Repository's Service Bus issues](https://github.com/Azure/azure-sdk-for-net/labels/Service%20Bus).

16

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

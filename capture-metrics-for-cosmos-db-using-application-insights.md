<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Capture Metrics for Cosmos DB using Application Insights
========================================================

### Benney Au

-   Oct 20, 2020
-   6 Min read
-   1,591 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,591 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setuptheazureresources" class="menu-link">Set Up the Azure Resources</a>
-   <a href="#module-createaneventlistener" class="menu-link">Create an Event Listener</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

One of the more difficult aspects of working with Azure Cosmos DB is managing the request unit consumption and provisioning. If you don't use request units efficiently, your Cosmos DB instance may be significantly throttled, negatively impacting users' experience.

In this guide, you will learn how to use EventSource to capture the request charge of your Cosmos DB requests. Then, you will push these metrics to Application Insights so that they can be analyzed in the context of your application. This can be useful for pinpointing which user or feature in your application is incurring high request charges.

> To follow this guide, you will need an Azure Subscription with the latest [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).

Set Up the Azure Resources
--------------------------

To get started logging Cosmos DB metrics, create:

-   An Azure Application Insights component
-   A Cosmos DB database and container

The easiest way to do this is to use the Azure CLI:

    1$rg = 'rg-demo-ai-cosmos'
    2az group create -n $rg -l 'australiaeast'
    3
    4az extension add -n 'application-insights'
    5az monitor app-insights component create --app ai-cosmos-demo --location 'australiaeast' --kind web -g $rg
    6
    7az cosmosdb create --name cosmos-metrics-demo-pl --resource-group $rg

powershell

This code snippet uses PowerShell and the Azure CLI to create an Application Insights instance, a Cosmos DB database, and an Application Insights component.

Then you need to create a .NET Application to start recording metrics.

You can also use the CLI to help you scaffold this:

    1mkdir cosmos-metric-demo
    2cd cosmos-metric-demo
    3dotnet new sln
    4dotnet new web
    5dotnet sln add .
    6dotnet add package Microsoft.Azure.Cosmos
    7dotnet add package Microsoft.ApplicationInsights.AspnetCore

Create an Event Listener
------------------------

.NET has a feature called **Event Source** that can publish low-level events that other tools and libraries can use. These tools are not able to modify data in the context of your application, like Diagnostic Source. Some examples of event source data that can be collected include SQL requests, garbage collection (GC) statistics, and memory allocations.

Cosmos DB implements Event Source, which publishes request and response events. You can create an event listener to listen for these events and write them to Application Insights.

The snippet below demonstrates how to do this:

    1public class DocumentClientEventListener : EventListener
    2{
    3    private bool _initialised;
    4    public static AsyncLocal<RequestTelemetry> Request { get; }
    5        = new AsyncLocal<RequestTelemetry>();
    6
    7    protected override void OnEventSourceCreated(EventSource eventSource)
    8    {
    9        if (!_initialised && eventSource.Name == "DocumentDBClient")
    10        {
    11            this.EnableEvents(eventSource, EventLevel.Verbose, (EventKeywords)1);
    12            _initialised = true;
    13        }
    14    }
    15
    16    protected override void OnEventWritten(EventWrittenEventArgs eventData)
    17    {
    18        if (eventData == null || eventData.Payload == null || eventData.EventSource?.Name != "DocumentDBClient")
    19        {
    20            return;
    21        }
    22
    23        // const int cosmosDBRequestEventId = 1;
    24        const int cosmosDBResponseEventId = 2;
    25        if (eventData.EventId == cosmosDBResponseEventId)
    26        {
    27            OnCosmosDBResponseEvent(eventData, Request!.Value);
    28        }
    29
    30        static void OnCosmosDBResponseEvent(EventWrittenEventArgs eventData, RequestTelemetry? requestTelemetry)
    31        {
    32            if (requestTelemetry == null)
    33            {
    34                return;
    35            }
    36
    37            if (eventData?.Payload?.Count != 30)
    38            {
    39                return;
    40            }
    41
    42            if (eventData.Payload[22] is string requestChargeAsString
    43                && double.TryParse(requestChargeAsString, out double requestCharge))
    44            {
    45                const string key = "CosmosDBTotalRequestCharge";
    46                var metrics = requestTelemetry.Metrics;
    47                if (metrics.ContainsKey(key))
    48                {
    49                    metrics[key] += requestCharge;
    50                }
    51                else
    52                {
    53                    metrics[key] = requestCharge;
    54                }
    55            }
    56        }
    57    }
    58}

csharp

This class subscribes to the <span class="jsx-3120878690">`DocumentDBClient`</span> event source. When it sees that a response event has been published, it extracts the request charge and saves it to Application Insights' request telemetry. It uses [AsyncLocal](https://docs.microsoft.com/en-us/dotnet/api/system.threading.asynclocal-1?view=netcore-3.1), which is a special class that allows you to create request scoped variables.

You will also need to create a piece of middleware to set the request telemetry property.

    1// Startup.cs
    2app.Use((ctx, next) =>
    3{
    4    var requestTelemetry = ctx.Features.Get<RequestTelemetry>();
    5    if (requestTelemetry != null && DocumentClientEventListener.Request.Value == null)
    6    {
    7        DocumentClientEventListener.Request.Value = requestTelemetry;
    8    }
    9
    10    return next();
    11});

csharp

This snippet needs to be added to the top of the <span class="jsx-3120878690">`Configure`</span> method of your <span class="jsx-3120878690">`Startup.cs`</span>.

Finally, update <span class="jsx-3120878690">`Program.cs`</span> to see listen events when your application starts.

    1private static DocumentClientEventListener DocumentClientEventListener;
    2public static void Main(string[] args)
    3{
    4    DocumentClientEventListener = new DocumentClientEventListener();
    5    CreateHostBuilder(args).Build().Run();
    6}

csharp

When you run your application, you should see the request telemetry with a <span class="jsx-3120878690">`CosmosDBTotalRequestCharge`</span> metric that aggregates all charges for that single request. This can tell you specifically which users and routes has RU usage issues.

![Application Insights UI showing a Request Telemetry and CosmosDBTotalRequestCharge metric](../../pluralsight2.imgix.net/guides/c2ce346a-8392-447b-b722-91b131d15807_Screenshot_2020-10-18_211209.html)

> **Note**: At the time of writing, this technique only works if your <span class="jsx-3120878690">`CosmosClient`</span> is configured <span class="jsx-3120878690">`WithConnectionModeGateway()`</span> rather than a direct TCP connection.

Conclusion
----------

Monitoring and observability are important skills to have when you work with distributed systems. If you learn about lower-level APIs like Event Source, you can easily diagnose performance issues. This is especially true in large applications where you cannot easily look through all the code. Instead, you rely on metrics to help you pinpoint the root cause of the issue.

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

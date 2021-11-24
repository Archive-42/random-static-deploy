<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

How to Use Managed Identities with Azure Blob and Queue Storage
===============================================================

### Benney Au

-   Oct 16, 2020
-   7 Min read
-   5,434 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   5,434 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Blob Storage</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Engineering</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

11

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-managedidentities" class="menu-link">Managed Identities</a>
-   <a href="#module-usemanagedidentitieswithazurestorageblobs" class="menu-link">Use Managed Identities with Azure Storage Blobs</a>
-   <a href="#module-connecttomultiplestorageaccounts" class="menu-link">Connect to Multiple Storage Accounts</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Azure Blob and Queue Storage is a low-cost solution to store and access unstructured data at scale. [Queues](https://www.nuget.org/packages/Azure.Storage.Queues) integrate easily with managed identities, which are appealing because secrets such as connection strings are not required to be copied onto developers’ machines or checked into source control. In this guide, you will learn how to use managed identities to connect a .NET app service to Azure Blob Storage and Azure Queue Storage.

Managed Identities
------------------

In Azure, a managed identity allows an Azure resource to have an identity created for it automatically in Azure Active Directory (AD). This allows these resources to identify themselves to other protected Azure resources, such as storage accounts, using Azure AD authentication. This guide will look at using managed identities with Azure App Services.

Azure App Services supports both user-assigned and system-assigned managed identities. There are a few differences:

-   **System-assigned** identities are linked to the lifecycle of Azure App Service. This means that when you delete the app service, its managed identities will also be deleted for you. Only a specific app service can identify itself as a specific user identity. This means that each deployment slot receives its own system-assigned identity.
-   **User-assigned identities** are a separate resource that appears in a resource group. The same user-assigned identity can be assigned to multiple resources. This is useful if you want all your deployment slots on an app service to have the same identity to reduce the number of role assignments.

Use Managed Identities with Azure Storage Blobs
-----------------------------------------------

To start using an Azure App Service managed identities, create a new project and install a few packages.

Microsoft's newest packages make it easy to do this with minimal code. Run the following commands in the command prompt:

    1mkdir PLStorageManagedIdentity
    2cd PLStorageManagedIdentity
    3dotnet new mvc
    4dotnet add package Azure.Storage.Blobs
    5dotnet add package Azure.Identity
    6dotnet add package Microsoft.Extensions.Azure

sh

The code above creates a new MVC project and installs <span class="jsx-3120878690">`Azure.Storage.Blobs`</span>, <span class="jsx-3120878690">`Azure.Identity`</span>, and <span class="jsx-3120878690">`Microsoft.Extensions.Azure`</span>. <span class="jsx-3120878690">`Azure.Identity`</span> is a generic package that allows you to fetch tokens to authorize with differences protected Azure resources.

Then update your <span class="jsx-3120878690">`Startup.cs`</span> file to register Blob Services for dependency injection.

    1// Startup.cs
    2public void ConfigureServices(IServiceCollection services)
    3{
    4  services.AddControllersWithViews();
    5  services.AddAzureClients(cfg =>
    6  {
    7     cfg.AddBlobServiceClient(Configuration.GetSection("Blobs")).WithCredential(new Azure.Identity.DefaultAzureCredential());
    8  });
    9}

csharp

The code above will look at your configuration, such as <span class="jsx-3120878690">`AppSettings.json`</span>, to determine which Azure Storage Blob account to connect. If it is run on your development machine, it will use Visual Studio or Azure CLI to attempt to authenticate. When run in the Azure App Service, it will use the user-assigned identity discussed above.

To configure the Azure Storage Blob account, you can update <span class="jsx-3120878690">`AppSettings.json`</span> to the following:

    1{
    2  "Logging": {
    3    "LogLevel": {
    4      "Default": "Information",
    5      "Microsoft": "Warning",
    6      "Microsoft.Hosting.Lifetime": "Information"
    7    }
    8  },
    9  "AllowedHosts": "*",
    10  "Blobs": {
    11    "ServiceUri": "https://xxxxxxxx.blob.core.windows.net/"
    12  }
    13}

json

Note that no secrets like connection strings or passwords are required. You will also need to make sure your identities have the correct roles for the Azure Storage Blob account. If you need read and write access, assign the <span class="jsx-3120878690">`Storage Blob Data Contributor`</span> built-in role.

Finally, to use the newly registered blob services, update <span class="jsx-3120878690">`HomeController.cs`</span> with the following:

    1public HomeController(ILogger<HomeController> logger, BlobServiceClient blobServiceClient)
    2{
    3    _logger = logger;
    4    _blobContainerClient = blobServiceClient.GetBlobContainerClient("artifacts");
    5}
    6private readonly BlobContainerClient _blobContainerClient;
    7
    8public IActionResult Blob()
    9{
    10    var result = new { exists = _blobContainerClient.Exists() };
    11    return Json(result);
    12}

csharp

With your roles set up correctly, you can now read and write to the blob container. Queue storage and file storage services can be also be authenticated in a similar way.

Connect to Multiple Storage Accounts
------------------------------------

So far, the code above only connects to one storage account. The Azure SDK also makes it easy to connect to multiple storage accounts.

    1services.AddAzureClients(cfg =>
    2{
    3  cfg.AddBlobServiceClient(Configuration.GetSection("Blobs")).WithCredential(new Azure.Identity.DefaultAzureCredential());
    4  cfg.AddBlobServiceClient(Configuration.GetSection("Inputs")).WithName("Inputs").WithCredential(new Azure.Identity.DefaultAzureCredential());
    5});

csharp

You have created a named registration and a default registration. They are configured separately in the <span class="jsx-3120878690">`AppSettings.json`</span> file.

    1{
    2  "Blobs": {
    3    "ServiceUri": "https://xxxxxxxx.blob.core.windows.net/"
    4  },
    5  "Inputs": {
    6    "ServiceUri": "https://yyyyyyyy.blob.core.windows.net/"
    7  }
    8}

There are two separate <span class="jsx-3120878690">`ServiceUri`</span>s set. There are two configuration sections, one called <span class="jsx-3120878690">`Blobs`</span> and one called <span class="jsx-3120878690">`Inputs`</span>.

To access them in the rest of your code, you need to use the <span class="jsx-3120878690">`IAzureClientFactory`</span>.

    1public HomeController(
    2    ILogger<HomeController> logger,
    3    IAzureClientFactory<BlobServiceClient> clientFactory,
    4    BlobServiceClient blobServiceClient)
    5{
    6    _logger = logger;
    7    var client2 = clientFactory.CreateClient("Inputs");
    8    _blobContainerClient = blobServiceClient.GetBlobContainerClient("artifacts");
    9}

csharp

If you want to access the default Azure Storage Blob Account, you can directly inject <span class="jsx-3120878690">`BlobServiceClient`</span> to the constructor. If you want to access a named registration, you need to inject the <span class="jsx-3120878690">`IAzureClientFactory<T>`</span> and call its <span class="jsx-3120878690">`CreateClient("Inputs")`</span> method. This is similar to using the <span class="jsx-3120878690">`HttpClientFactory`</span>.

Conclusion
----------

Microsoft Azure has a growing list of [services that support managed identities for Azure resources](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/services-support-managed-identities). Using this feature can enhance the security of your application since you don't need to manage secrets yourself. To build on these skills, read about [How to Define Azure Role-based Access Control (RBAC)](https://app.pluralsight.com/guides/how-to-define-azure-rbac).

11

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

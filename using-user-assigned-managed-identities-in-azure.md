<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Using User-assigned Managed Identities in Azure
===============================================

### Benney Au

-   Oct 16, 2020
-   5 Min read
-   3,123 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   3,123 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-creatinguserassignedidentities" class="menu-link">Creating User-assigned Identities</a>
-   <a href="#module-linkuserassignedidentitytoanazureresource" class="menu-link">Link User-assigned Identity to an Azure Resource</a>
-   <a href="#module-updateyourcodeusingmanagedidentity" class="menu-link">Update Your Code Using Managed Identity</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Previous guides have covered using [system assigned managed identities with Azure Stroage Blobs](https://app.pluralsight.com/guides/how-to-use-managed-identity-with-azure-blob-and-queue-storage) and [using system assigned managed Identity with Azure SQL Database](https://app.pluralsight.com/guides/how-to-use-managed-identity-with-azure-sql-database). However, Azure imposes a limit of 2,000 role assignments per Azure subscription. If you have a lot of Azure resources, each with their own individual system-assigned identity and granular role assignments, you can quickly run into this role assignment limit.

In this guide, you will learn how to provision user-assigned managed identities, assign roles to them, and share them amongst various resources. This can reduce administration costs since you'll have fewer service principals to manage.

Make sure you have the latest version of the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/) to get started.

Creating User-assigned Identities
---------------------------------

An easy way to begin working with user-assigned Identities is by using the Azure CLI. It allows you to create several Azure resources in only a few lines of code. This guide uses the Azure CLI with PowerShell.

    1$rg      = "rg-pl-demo"
    2$id      = "id-blogging-app"
    3$app     = "app-blog"
    4$storage = "stblog"
    5
    6az group create -l "australiaeast" -g $rg
    7$principalId = az identity create -g $rg -n $id -o tsv --query "id"

powershell

To begin, start by creating a resource group and a managed identity inside it. Resource groups allow you to organize and manage several Azure resources together. This includes assigning permissions or deleting all the resources in a group together.

A user-assigned identity is another resource that appears inside a resource group. This is convenient since the identity will automatically be deleted if you delete the resource group. In contrast, a service principal or app registration needs to be managed separately. The code above creates the user-assigned identity and saves the automatically generated <span class="jsx-3120878690">`principalId`</span> to a variable so that you can use it later.

Link User-assigned Identity to an Azure Resource
------------------------------------------------

You can assign the identity you created to one or many resources. With the code snippet below you can create an Azure App Service Plan and App Service. Then, you use the identity you created above.

    1# create an app service plan and app service
    2$plan = "plan-blog"
    3$app  = "web-blog-pl"
    4$runtime = 'dotnetcore"|"3.1'
    5az appservice plan create -g $rg -n $plan --is-linux --sku F1
    6az webapp create -g $rg -p $plan -n $app -r $runtime
    7
    8# assign the id you created before
    9az webapp identity assign --identities $principalId -g $rg -n $app
    10
    11$storage = "stblogpl"
    12az storage account create -g $rg -n $storage -l "australiaeast" --sku "Standard_LRS"
    13
    14# assign roles
    15$principalId = az identity create -g $rg -n $id -o tsv --query "principalId"
    16az role assignment create --role "Storage Blob Data Contributor" --assignee $principalId

powershell

An App Service can have multiple user-assigned identities. In the example above, you assign one identity to the App Service and give it the <span class="jsx-3120878690">`Storage Blob Data Contributor`</span> role. When you assign this identity to another Azure resource, it will already have this role, thus reducing the total number of role assignments.

Update Your Code Using Managed Identity
---------------------------------------

As mentioned earlier, your App Service can have multiple identities assigned to it. In order for authentication to work correctly, you need to supply the <span class="jsx-3120878690">`clientId`</span> of the managed identity you created.

To do this, you can use Azure's new <span class="jsx-3120878690">`Azure.Identity`</span> nuget package.

    1services.AddAzureClients(cfg =>
    2{
    3    var managedIdentityClientId = Configuration["ManagedIdentityClientId"];
    4    var options = new DefaultAzureCredentialOptions
    5    {
    6        ManagedIdentityClientId = managedIdentityClientId
    7    };
    8    var id = new Azure.Identity.DefaultAzureCredential(options);
    9    cfg.AddBlobServiceClient(Configuration.GetSection("Storage")).WithCredential(id);
    10});

csharp

The code above reads the <span class="jsx-3120878690">`ManagedIdentityClientId`</span> from configuration such as environment variable or <span class="jsx-3120878690">`AppSettings.json`</span> file. It then uses it as a parameter for the [Azure.Identity.DefaultAzureCredential class](https://docs.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet).

<span class="jsx-3120878690">`DefaultAzureCredential`</span> is the simplest way to authenticate since it will iterate over the various authentication flows automatically. When you run this code on your development machine, it will use your Visual Studio or Azure CLI credentials. In the App Service environment it will use managed identity.

> Note: When you assign the identity and roles to it, it may take a few minutes to update. If you are having issues, try to redeploy the app and restart the App Service instance.

Conclusion
----------

User-assigned managed identities simplify security since you don't need to manage credentials. Not all resources are supported at this time, however, they enable access to a growing list of Azure resources that support Azure AD authentication. You can learn more by reading about the services that support managed identities for Azure Resources in [Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/services-support-managed-identities).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

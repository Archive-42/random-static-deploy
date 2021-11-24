<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

How to Use Managed Identities with Azure SQL Database
=====================================================

### Benney Au

-   Oct 26, 2020
-   7 Min read
-   21,766 Views

-   Oct 26, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   21,766 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

Introduction

49

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-configureyourazuredatabase" class="menu-link">Configure Your Azure Database</a>
-   <a href="#module-updateyoursqlconnectiontousemanagedidentities" class="menu-link">Update Your SQL Connection to Use Managed Identities</a>
-   <a href="#module-updateyourconnectionstring" class="menu-link">Update Your Connection String</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

*Managed identities* is a Microsoft Azure feature that allows Azure resources to authenticate or authorize themselves with other supported Azure resources. The appeal is that secrets such as database passwords are not required to be copied onto developers’ machines or checked into source control.

In this guide, you will learn how to use managed identities to connect a .NET app service to Azure SQL Database using managed identities.

> **Note**: Beginning with [Microsoft.Data.SqlClient version 2.1.0-preview2](https://github.com/dotnet/SqlClient/releases/tag/v2.1.0-preview2) the nuget package provides out of the box support for Managed Identity.

Configure Your Azure Database
-----------------------------

In order to allow managed identities to connect to Azure SQL Database, you need to enable Azure Active Directory (AD) authentication and create the managed users in the database.

To enable Azure AD authentication for your Azure SQL Server, make sure there is an Azure AD admin configured for the database server.

Then, enable authentication from your managed identity by creating a *contained user*. This differs from on-premises SQL Server instances that require both a server login and a database user. First, ensure that a system-assigned identity is set for your app service. Once an identity has been assigned to your app service, run the below SQL to create a contained user with some roles to read and write to the database.

    1create user [my-app-service] from external provider;
    2alter role db_datareader add member [my-app-service];
    3alter role db_datawriter add member [my-app-service];
    4
    5create user [my-app-service/slots/staging] from external provider;
    6alter role db_datareader add member [my-app-service/slots/staging];
    7alter role db_datawriter add member [my-app-service/slots/staging];

sql

> **Note**: <span class="jsx-3120878690">`my-app-service`</span> is a placeholder. You will need to replace it with the name of your own app service. Further, for system-assigned identities, different deployment slots have their own individual identities.

Update Your SQL Connection to Use Managed Identities
----------------------------------------------------

Now that you have created the SQL users and assigned them read and write roles, you need to change your app to use managed identities for authentication and authorization.

To start using an Azure App Service managed identity, create a new project and install a few packages.

    1mkdir PLSQLManagedIdentity
    2cd PLSQLManagedIdentity
    3dotnet new mvc
    4dotnet add package Microsoft.Azure.Services.AppAuthentication
    5dotnet add package Microsoft.Data.SqlClient

sh

The package <span class="jsx-3120878690">`Microsoft.Azure.Services.AppAuthentication`</span> is an Azure SDK that simplifies authentication.

When you run the code on your development machine, it will use the Azure CLI or Visual Studio login to authenticate. When you run the code in an Azure App Service, it will use the system-assigned identity.

Next add the class <span class="jsx-3120878690">`SqlAppAuthenticationProvider`</span> to your project.

    1/// <summary>
    2/// An implementation of SqlAuthenticationProvider that implements Active Directory Interactive SQL authentication.
    3/// </summary>
    4public class SqlAppAuthenticationProvider : SqlAuthenticationProvider
    5{
    6    private static readonly AzureServiceTokenProvider _tokenProvider = new AzureServiceTokenProvider();
    7
    8    /// <summary>
    9    /// Acquires an access token for SQL using AzureServiceTokenProvider with the given SQL authentication parameters.
    10    /// </summary>
    11    /// <param name="parameters">The parameters needed in order to obtain a SQL access token</param>
    12    /// <returns></returns>
    13    public override async Task<SqlAuthenticationToken> AcquireTokenAsync(SqlAuthenticationParameters parameters)
    14    {
    15        var authResult = await _tokenProvider.GetAuthenticationResultAsync("https://database.windows.net/").ConfigureAwait(false);
    16
    17        return new SqlAuthenticationToken(authResult.AccessToken, authResult.ExpiresOn);
    18    }
    19
    20    /// <summary>
    21    /// Implements virtual method in SqlAuthenticationProvider. Only Active Directory Interactive Authentication is supported.
    22    /// </summary>
    23    /// <param name="authenticationMethod">The SQL authentication method to check whether supported</param>
    24    /// <returns></returns>
    25    public override bool IsSupported(SqlAuthenticationMethod authenticationMethod)
    26    {
    27        return authenticationMethod == SqlAuthenticationMethod.ActiveDirectoryInteractive;
    28    }
    29}

csharp

Then in your <span class="jsx-3120878690">`Program.cs`</span>, register the new <span class="jsx-3120878690">`SqlAuthenticationProvider`</span> using the following as the first line of the main method.

    1SqlAuthenticationProvider.SetProvider(SqlAuthenticationMethod.ActiveDirectoryInteractive, new SqlAppAuthenticationProvider());

csharp

The two code snippets together will look for SQL connection strings that contain <span class="jsx-3120878690">`Authentication=Active Directory                                       Interactive`</span>. When found, they will use the <span class="jsx-3120878690">`AzureServiceTokenProvider`</span> to fetch an access token to authenticate with Azure SQL Database.

Update Your Connection String
-----------------------------

You have now set up all the pieces to authorize your app to your Azure database. Your connection string can be updated to the following:

    1Server=xxxxxxx.database.windows.net,1433;Database=yyyyyyyyy;UID=a;Authentication=Active Directory Interactive

You only need to specify the <span class="jsx-3120878690">`server`</span>, <span class="jsx-3120878690">`authentication`</span>, and the <span class="jsx-3120878690">`database`</span> name. <span class="jsx-3120878690">`UID`</span> is set to an arbitrary value since it is required for the connection string to pass validation. However, it is not used for system-assigned managed identity and Azure CLI authentication.

> **Note:** If you are using user-assigned identities and not using the global Azure region, you will need to modify the <span class="jsx-3120878690">`SqlAppAuthenticationProvider`</span> class. Refer to Microsoft's implementation of [SqlAppAuthenticationProvider](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/mgmtcommon/AppAuthentication/Azure.Services.AppAuthentication/SqlAppAuthenticationProvider.cs#L14), which allocates more memory but is more flexible as reference.

Conclusion
----------

Microsoft Azure has a growing list of [services that support managed identities for Azure resources](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/services-support-managed-identities). Using managed identities, can enhance the security of your application since you don't need to manage secrets yourself. Your app can now connect to Azure SQL Database without the need for a username or password. To build on these skills, read about [How to Define Azure Role-based Access Control (RBAC)](https://app.pluralsight.com/guides/how-to-define-azure-rbac).

49

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

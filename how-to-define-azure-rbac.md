<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

How to Define Azure Role-based Access Control (RBAC)
====================================================

### Benney Au

-   Oct 12, 2020
-   7 Min read
-   2,365 Views

-   Oct 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   2,365 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-roledefinitionandassignments" class="menu-link">Role Definition and Assignments</a>
-   <a href="#module-createroleassignmentsintheazurecli" class="menu-link">Create Role Assignments in the Azure CLI</a>
-   <a href="#module-createroledefinitionsinazurecli" class="menu-link">Create Role Definitions in Azure CLI</a>
-   <a href="#module-workwithmanagedidentities" class="menu-link">Work with Managed Identities</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Azure allows cloud administrators to manage access to their resources using role-based access control (RBAC). This allows specific permissions to be granted to users, groups, and apps. When implemented correctly, this enhances security by applying the principle of least privilege. However, when your cloud infrastructure is large with dozens of apps and hundreds of users, managing all these permissions becomes difficult to maintain in a reproducible and transparent way.

In this guide, you will learn about defining roles and assigning them using the Azure CLI. This allows you to use code to script RBAC role assignments to simplify deployment and maintenance. A basic understanding of bash is assumed knowledge for this guide.

Role Definition and Assignments
-------------------------------

In the Azure CLI, there are two components to manage:

-   **Role definitions** define a set of permissions. These permissions include which data and actions an assignee is granted or denied access to.
-   A **role assignment** is a mapping between a role definition, a scope, and an assignee. An assignee could be a user in your active directory domain, a service principal that represents your app, or a security group that contains one or many users. A scope is a property that allows administrators to limit a role definition to a subscription, resource group, or specific Azure resource.

To clarify, your Azure subscription has a set of [built-in role definitions](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#identity) already. For example, you can create a role assignment where you assign the role <span class="jsx-3120878690">`reader`</span> to the security group <span class="jsx-3120878690">`developers`</span> at the scope of your <span class="jsx-3120878690">`my-web-app`</span> resource group. This allows all the members of the <span class="jsx-3120878690">`developers`</span> security group to view resources contained in the <span class="jsx-3120878690">`my-web-app`</span> resource group but not make any changes.

Create Role Assignments in the Azure CLI
----------------------------------------

To assign roles, you need three components:

-   The role definition
-   The assignee
-   The scope of the assignment. If you don't provide a scope, it will default to the entire subscription.

To assign the <span class="jsx-3120878690">`reader`</span> scope to the <span class="jsx-3120878690">`developers`</span> security group, run the following commands:

    1# get a list of all roles definitions
    2az role definition list --query "sort_by([],&roleName)[].{name:name,roleType:roleType,roleName:roleName}" -o tsv
    3
    4# save security group object's id to a variable
    5developers_security_group=$(az ad group list --query "[?displayName=='developers'].{objectId:objectId}" -o tsv)
    6
    7# assign the role by omitting the scope. This defaults to entire subscription.
    8az role assignment create --role "Reader" --assignee $developers_security_group
    9
    10# assign the role and specify a resource group scope.
    11az role assignment create --role "Reader" --assignee $developers_security_group --scope /subscriptions/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx/resourceGroups/my-web-app

bash

Create Role Definitions in Azure CLI
------------------------------------

You can also create your own role definitions. This is useful when you have a standard set of permissions you want to give to apps at different scopes. For instance, say you have 100 resource groups, and each resource group has two apps inside it. Each app is allowed permission to read data from a storage account and Cosmos DB database inside its own resource group only. If you stick to the built-in roles, you will need to separately assign the <span class="jsx-3120878690">`Cosmos DB Account Reader Role`</span>, <span class="jsx-3120878690">`Storage Blob Data Reader`</span>, and <span class="jsx-3120878690">`Storage Queue Data Message                                       Processor`</span> permissions separately to each app.

To define your own role called <span class="jsx-3120878690">`Custom Data Reader`</span>, run the following commands:

    1az role definition create --role-definition '{
    2        "Name": "Custom Data Reader",
    3        "Description": "Read data from storage accounts and cosmos DB Databases.",
    4        "Actions": [
    5          "Microsoft.DocumentDB/*/read",
    6          "Microsoft.Storage/storageAccounts/blobServices/containers/read",
    7          "Microsoft.Storage/storageAccounts/queueServices/queues/delete",
    8          "Microsoft.Storage/storageAccounts/queueServices/queues/read",
    9          "Microsoft.Storage/storageAccounts/queueServices/queues/write"
    10        ],
    11        "DataActions": [
    12          "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read",
    13          "Microsoft.Storage/storageAccounts/queueServices/queues/messages/delete",
    14          "Microsoft.Storage/storageAccounts/queueServices/queues/messages/read",
    15          "Microsoft.Storage/storageAccounts/queueServices/queues/messages/write"
    16        ],
    17        "NotDataActions": [
    18        ],
    19        "AssignableScopes": ["/subscriptions/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"]
    20    }'
    21
    22
    23# assign the new custom role to an app or group
    24az role assignment create --role "Custom Data Reader" --assignee $developers_security_group

bash

Work with Managed Identities
----------------------------

So far you have assigned roles to security groups. This is useful since it allows you to manage permissions for multiple users at a time.

However, in a micro-services environment, you may have hundreds of apps, but individual apps need only a subset of the roles a user may have. In this case, you want to separately identify the app and assign only the roles that it needs.

Microsoft has a set of [services that support managed identities](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/services-support-managed-identities). These identities make it easy to manage permissions since you don't need to manage secrets like passwords or client credentials yourself. Like users, they can also have roles assigned to them.

To assign a role, first query the identity and then create a role assignment at the appropriate scope.

    1# query the principalId of a webapp
    2APP_IDENTITY=$(az webapp identity show -n my-web-app -g my-web-app --query "{principalId:principalId}" -o tsv)
    3
    4# assign a role to that webapp
    5az role assignment create --role "Custom Data Reader" --assignee $developers_security_group --scope /subscriptions/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx/resourceGroups/my-web-app

bash

Conclusion
----------

RBAC provides a rich set of capabilities that allow you to control access within your organization. By scripting role definitions and assignments, managing a large set of roles is simplified; you can make a widespread change in a predictable way. This also allows you to audit and review changes through source control. To further build on these skills, read more about [Azure AD Managed Identities](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/).

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

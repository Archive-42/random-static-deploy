<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

How to Define Azure Role-based Access Control (RBAC), Part Two
==============================================================

### Benney Au

-   Oct 26, 2020
-   5 Min read
-   1,074 Views

-   Oct 26, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,074 Views

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
-   <a href="#module-usingforeachtoiterateoveridentities" class="menu-link">Using ForEach to Iterate Over Identities</a>
-   <a href="#module-skippingroleassignmentsforcertainresources" class="menu-link">Skipping Role Assignments for Certain Resources</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When your cloud infrastructure is large with dozens of apps and hundreds of users, managing all these permissions becomes difficult to maintain in a reproducible and transparent way. A previous guide, [How to Define Azure Role-based Access Control (RBAC)](https://app.pluralsight.com/guides/how-to-define-azure-rbac), covered the basic usage of role definition and assignment using the Azure CLI.

In this guide, you will build on those skills to learn how to combine role assignment and resource tagging in conjunction with Powershell control flow to make hundreds of changes in a few lines of code.

Using ForEach to Iterate Over Identities
----------------------------------------

Azure provides resource groups to help you manage and secure your apps and other protected resources. This allows you to group related resources together. One common pattern is to place all the resources in a single micro-service together. This may include an Azure App Service and the Storage account it uses to save its data.

In this pattern, each Azure App Service should only have permission to access the storage account within its resource group. To do this in Powershell, use the [ForEach-Object Cmdlet](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7) to iterate over all your resource groups and the apps inside them.

    1# get all resource groups
    2$groups = az group list -o json | ConvertFrom-Json
    3
    4# iterate over all resource groups
    5$groups | foreach {
    6    $rg=$_.name
    7    $rgid = $_.id
    8
    9    # get all apps inside a resource group and iterate over them
    10    $apps=az webapp list -g $rg -o tsv --query "[].name"
    11    $apps | foreach {
    12        $app=$_
    13        $id = az webapp identity assign -g $rg -n $app -o tsv --query "principalId"
    14        az role assignment create --role "Storage Blob Data Contributor" --assignee $id --scope $rgid
    15        # get the deployment slots if any
    16        $slots = az webapp deployment slot list -g $rg -n $app -o tsv --query "[].name"
    17        # make sure an managed identity is assigned
    18        $slots | foreach {
    19            $id = az webapp identity assign -g $rg -s $_ -n $app -o tsv --query "principalId"
    20            az role assignment create --role "Storage Blob Data Contributor" --assignee $id --scope $rgid
    21        }
    22    }
    23}

powershell

The snippet above demonstrates how to use the [ForEach-Object cmdlet](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7) to assign the <span class="jsx-3120878690">`Storage Blob Data Contributor`</span> roles to each app service. Note that the applications are only authorized to access storage accounts in their own resource groups. The cmdlet has an alias, <span class="jsx-3120878690">`foreach`</span>, which makes the code slightly more terse. The advantage of this code is that it is re-entrant; when you run it the first time, it will create the system-assigned managed identities and roles. If you rerun the code and these objects have already been created, it won't throw errors.

If you are applying many of the same role assignments to different apps, you may want to create a custom role definition that combines several roles together. Custom role definitions are demonstrated in Part One of this guide, [How to Define Azure Role-based Access Control (RBAC)](https://app.pluralsight.com/guides/how-to-define-azure-rbac). This may be required since there is a hard limit of 2000 role assignments per Azure subscription.

Skipping Role Assignments for Certain Resources
-----------------------------------------------

Another useful organization feature of Azure is the ability to tag resource groups and resources. This can help with your security infrastructure since you can establish conventions and patterns that make it easier for your organization to make widespread changes. To take advantage of tags for the purpose of RBAC role assignments, write a <span class="jsx-3120878690">`JMESQuery`</span> to filter out resources. This allows you to skip role assignments for certain resources or groups.

The following code snippet demonstrates how to do this for resource groups and Azure App Services.

    1# filter out resource groups have the tag "sec:sensitive"
    2az group list -o json --query "[?tags.sec!='sensitive']" | ConvertFrom-Json
    3
    4# filter out app services have that the tag "sec:sensitive"
    5az webapp list -g rg-pl-demo --query "[?tags.sec!='sensitive'].name"

powershell

By tagging your resources correctly, you can set up different resource groups with differing security requirements. These tags can then be read by your automation scripts to consistently apply your organization's security policy.

Conclusion
----------

Naming and tagging is important for scaling your cloud infrastructure. You have used tags to define security policies, but they can be also be used in different ways, such as cost monitoring and asset organization. Learn more by reading [Microsoft's recommended best practices on naming and tagging](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

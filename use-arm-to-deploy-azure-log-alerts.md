<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Use Azure Resource Manager (ARM) to Deploy Azure Log Alerts
===========================================================

### Benney Au

-   Oct 27, 2020
-   9 Min read
-   2,328 Views

-   Oct 27, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   2,328 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-azureresourcemanagertemplates" class="menu-link">Azure Resource Manager Templates</a>
-   <a href="#module-actiongroups" class="menu-link">Action Groups</a>
-   <a href="#module-logbasedqueries" class="menu-link">Log-based Queries</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Azure Monitor captures telemetry, diagnostics, activity, and metric data about your Azure resources. This data can be very useful in determining the health of your Azure environment. However, it is only useful when the data is surfaced to administrators and users. You want to be notified so you can fix any service outages or critical bugs in your apps as soon as possible.

In this guide, you will learn how to write log queries to detect issues in your environment and deploy alert rules to notify your team of failures. This guide will use Azure Resource Manager (ARM) templates.

Azure Resource Manager Templates
--------------------------------

[ARM templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview) are a set of JSON files you can create to define different aspects of your Azure infrastructure, including action rules, alert rules, and other resources. They are useful since you can easily replicate rules and make widespread changes by changing a few items in the JSON configuration.

A common scenario is to replicate Azure resources by creating a staging environment for testing and a more stable production environment. With ARM templates, you can define your infrastructure once, easily keep your staging and production environments sychronized.

Action Groups
-------------

One of the prerequisites of defining a log-based alert rule is creating an action group. An action group is a combination of zero or more of the following events that will be triggered by an Azure alert:

-   Sending an email or an SMS to a user
-   Triggering an automation runbook
-   Triggering an Azure function
-   Triggering a logic app
-   Triggering a webhook
-   Triggering an IT service management tool such as ServiceNow

The webhook trigger provides the most flexible integration with third-party systems. You can use it to integrate with services like Slack and Opsgenie. If your Azure environment is complex and uptime is critical, then using the webhook action and integrating with a tool like [Opsgenie](https://docs.opsgenie.com/docs/microsoft-azure-integration) will give you the most flexibility. Azure Monitor can manage querying of telemetry and activity data, while Opsgenie allows you to create more sophisticated workflows such as on-call schedules, escalations, and notifications.

To define an Action Group that alerts to Opsgenie using ARM, create a <span class="jsx-3120878690">`azuredeploy.json`</span>, demonstrated below:

    1{
    2  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    3  "contentVersion": "1.0.0.0",
    4  "parameters": {
    5    "actionGroupName": {
    6      "type": "string"
    7    },
    8    "actionGroupShortName": {
    9      "type": "string"
    10    },
    11    "webhookUrl": {
    12      "type": "string"
    13    }
    14  },
    15  "resources": [
    16    {
    17      "name": "[parameters('actionGroupName')]",
    18      "type": "microsoft.insights/actionGroups",
    19      "apiVersion": "2019-06-01",
    20      "location": "Global",
    21      "tags": {
    22      },
    23      "properties": {
    24        "groupShortName": "[parameters('actionGroupShortName')]",
    25        "enabled": true,
    26        "webhookReceivers": [
    27          {
    28            "name": "opsgenie",
    29            "serviceUri": "[parameters('webhookUrl')]",
    30            "useCommonAlertSchema": true
    31          }
    32        ]
    33      }
    34    }
    35  ]
    36}

json

The ARM template above consists of two sections:

-   <span class="jsx-3120878690">`resources`</span>: The action group that has an Opsgenie webhook. Note that it is an array and you can add more.
-   <span class="jsx-3120878690">`parameters`</span>: Allows you to customize your template. This is useful for creating the same resource types with different names. You may want to add environment prefixes to your resources, such as <span class="jsx-3120878690">`staging-`</span> and <span class="jsx-3120878690">`prod-`</span>.

To deploy this ARM template you can use the Azure CLI:

    1rg=rg-alerts-pl
    2az group create -n $rg -l australiaeast
    3az group deployment create -g $rg --template-file Azuredeploy.json

bash

These commands use the bash shell to create a resource group and deploy the action group into that resource group. When you run these commands, you will be prompted to supply the values for the parameters. You can obtain the webhookUrl from [Opsgenie's Azure integration page](https://prospa.app.opsgenie.com/settings/integration/add/Azure/).

You can also supply the parameters by supplying a [parameters file described in Microsoft's documentation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/parameter-files).

Log-based Queries
-----------------

Now that you have set up integration with Opsgenie via an action group, you can start creating a log-based query. To do this, create an Application Insights instance and create a <span class="jsx-3120878690">`scheduledQuery`</span> against it.

    1rg=rg-alerts-pl
    2az extension add --name application-insights
    3az monitor app-insights create -a demo-insights-pl -l australiaeast -g $rg

bash

Then, extend the ARM template file you created earlier with a <span class="jsx-3120878690">`scheduledquery`</span> resource and a few extra parameters to customize it.

    1{
    2  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    3  "contentVersion": "1.0.0.0",
    4  "parameters": {
    5    "actionGroupName": {
    6      "type": "string",
    7      "defaultValue": "demo-ag-group"
    8    },
    9    "actionGroupShortName": {
    10      "type": "string",
    11      "defaultValue": "aaa"
    12    },
    13    "webhookUrl": {
    14      "type": "string",
    15      "defaultValue": "https://api.opsgenie.com/v1/json/azure?apiKey=xxxxxxxxxxxxxxxxxxxxxxxxx"
    16    },
    17    "alertRules": {
    18      "type": "array",
    19      "defaultValue": [{
    20        "alertRuleName": "demo-ar-exceptions",
    21        "alertDescription": "new exception occured in demo-insights-pl",
    22        "resourceName": "demo-insights-pl",
    23        "resourceGroup": "rg-alerts-pl",
    24        "query": "exceptions | union (traces | where (severityLevel > 2))"
    25      }]
    26    }
    27  },
    28  "resources": [
    29    {
    30      "name": "[parameters('actionGroupName')]",
    31      "type": "microsoft.insights/actionGroups",
    32      "apiVersion": "2019-06-01",
    33      "location": "Global",
    34      "tags": {
    35      },
    36      "properties": {
    37        "groupShortName": "[parameters('actionGroupShortName')]",
    38        "enabled": true,
    39        "webhookReceivers": [
    40          {
    41            "name": "opsgenie",
    42            "serviceUri": "[parameters('webhookUrl')]",
    43            "useCommonAlertSchema": true
    44          }
    45        ]
    46      }
    47    },
    48    {
    49      "name": "[parameters('alertRules')[copyIndex()].alertRuleName]",
    50      "type": "microsoft.insights/scheduledqueryrules",
    51      "location": "[resourceGroup().location]",
    52      "apiVersion": "2018-04-16",
    53      "dependsOn": [
    54        "[resourceId('microsoft.insights/actionGroups', parameters('actionGroupName'))]"
    55      ],
    56      "tags": {
    57      },
    58      "copy": {
    59        "name": "alertscopy",
    60        "count": "[length(parameters('alertRules'))]"
    61      },
    62      "properties": {
    63        "description": "[parameters('alertRules')[copyIndex()].alertDescription]",
    64        "enabled": "true",
    65        "source": {
    66          "query": "[parameters('alertRules')[copyIndex()].query]",
    67          "authorizedResources": [
    68          ],
    69          "dataSourceId": "[resourceId(parameters('alertRules')[copyIndex()].resourceGroup, 'microsoft.insights/components', parameters('alertRules')[copyIndex()].resourceName)]",
    70          "queryType": "ResultCount"
    71        },
    72        "schedule": {
    73          "frequencyInMinutes": 5,
    74          "timeWindowInMinutes": 5
    75        },
    76        "action": {
    77          "severity": "3",
    78          "aznsAction": {
    79            "actionGroup": [
    80              "[resourceId('microsoft.insights/actionGroups', parameters('actionGroupName'))]"
    81            ]
    82          },
    83          "throttlingInMin": 60,
    84          "throttleConsecutiveWindowCount": 0,
    85          "trigger": {
    86            "thresholdOperator": "GreaterThan",
    87            "threshold": 1
    88          },
    89          "odata.type": "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction"
    90        }
    91      }
    92    }
    93  ]
    94}

json

There are a few interesting aspects to this code:

-   You added the <span class="jsx-3120878690">`alertRules`</span> parameter, which is an array. This allows you create multiple alert rules that are connected to the same action group.
-   <span class="jsx-3120878690">`scheduledQuery`</span> uses the [copyIndex()](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions-numeric#copyindex) function to create multiple resources based on the <span class="jsx-3120878690">`alertRules`</span> array. This makes it easy to add, modify, or remove alert rules.
-   Different aspects of the alert rules are configurable. For example, you can configure the alert to only trigger if more than five exceptions have been observed or configure an alert to only trigger once every 24 hours to prevent spamming your alerting system.
-   <span class="jsx-3120878690">`defaultValue`</span> has been added to the parameters for brevity. You may prefer to omit this and keep the parameters in a separate file.

Conclusion
----------

Alerting is a powerful tool for keeping up to date on changes on status changes for your system. To learn more about how to set up and best configure these with your Opsgenie integration, read [Best Practices for Incident Management on Slack with OpsGenie](https://medium.com/opsgenie/best-practices-for-incident-management-on-slack-with-opsgenie-f5bd3d261742).

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

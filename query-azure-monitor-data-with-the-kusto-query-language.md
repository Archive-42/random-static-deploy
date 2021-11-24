<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Query Azure Monitor Data with the Kusto Query Language
======================================================

### Benney Au

-   Oct 20, 2020
-   5 Min read
-   4,862 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   4,862 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

20

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatdataisqueryable" class="menu-link">What Data is Queryable?</a>
-   <a href="#module-queryingazureactivitydata" class="menu-link">Querying Azure Activity Data</a>
-   <a href="#module-queryingdiagnosticlogtelemetry" class="menu-link">Querying Diagnostic Log Telemetry</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Azure Monitor data is queried using the Kusto Query Language (KQL). KQL is designed to be easy to author, read, and automate. With KQL, you can analyze large volumes of data for your diagnostics, monitoring, and reporting needs. In this guide, you will learn how to perform some common queries in KQL, including how to query telemetry in structured and semi-structured data.

What Data is Queryable?
-----------------------

Broadly, Azure Monitor captures three types of data from your Azure Resources. These include:

-   **Azure Diagnostics Logs** provide a history of the operations performed on specific resources. Not all Azure resources support diagnostic logs and they need to be turned on separately for each resource. If configured, you can capture failed task scheduler events for Azure Virtual Machines or authenticated requests for Azure Storage accounts.
-   **Azure Activity** stores Azure administrative logs about changes to your Azure resources by who and when. You can use this to see a history of what resources were created or all the resources that were created or deleted by a specific user.
-   **Azure Metrics** provides aggregated time series data for the health, usage, and capacity of Azure resources.

To start querying this data from the Azure Portal, navigate to the [Azure Monitor resource and click on the Logs blade](https://ms.portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/logs). Once open, select a scope for your query. You can choose between querying the Azure Monitor logs for your entire subscription, a resource group, or a specific resource.

Querying Azure Activity Data
----------------------------

Azure Activity provides details on management activities and includes information on who, what, and when resources have changed. With the Logs blade open, you can start querying data.

Access the data through the <span class="jsx-3120878690">`AzureActivity`</span> table. Filter the results by appending <span class="jsx-3120878690">`| where`</span>.

The following code snippets show some examples of how to query this table and filter the results:

    1// filter azure activity by a specific user
    2AzureActivity
    3| where Caller == "[email protected]"
    4
    5// filter azure activity by resource type
    6AzureActivity
    7| where ResourceProviderValue == "Microsoft.Web"
    8
    9// check if any app service plan scaled to 5 instances or more
    10AzureActivity
    11| where OperationName == "Autoscale scale up initiated"
    12| where parse_json(Properties).NewInstancesCount >= 5

kusto

Querying Diagnostic Log Telemetry
---------------------------------

Some Azure services can log diagnostic telemetry that is unique to the service. Microsoft's documentation on [What is monitored by Azure Monitor?](https://docs.microsoft.com/en-us/azure/azure-monitor/monitor-reference) provides details on which services are supported. These diagnostic logs also need to be enabled separately.

This section will use an Azure SQL database to demonstrate some of the information you can query from Azure Monitor.

You can run the following query to get an overview of the diagnostic logs available in your own workspace.

    1AzureDiagnostics
    2| summarize count() by ResourceType, OperationName

kusto

Output:

    1| ResourceType      | OperationName                        | Count |
    2| SERVERS/DATABASES | QueryStoreWaitStatisticsEvent        | 100   |
    3| SERVERS/DATABASES | DatabaseWaitStatistcsEvent           | 110   |
    4| SERVERS/DATABASES | QueryStoreRuntimeStatisticsEvent     | 1000  |
    5| SERVERS/DATABASES | AutomaticTuningSettingsSnapshotEvent | 100   |
    6| SERVERS/DATABASES | ErrorEvent                           | 100   |

Microsoft's documentation on [Azure SQL Database Diagnostic telemetry for export](https://docs.microsoft.com/en-us/azure/azure-sql/database/metrics-diagnostic-telemetry-logging-streaming-export-configure?tabs=azure-portal#diagnostic-telemetry-for-export) provides more details on what each of these events represent.

From here, you can narrow to a specific operation type and service.

    1AzureDiagnostics
    2| where OperationName == 'ErrorEvent'
    3| summarize count() by Message, DatabaseName_s, LogicalServerName_s

kusto

This query summarizes the number of errors by database. You can also change the time range to drill down to a specific event.

Note that some properties end with <span class="jsx-3120878690">`_s`</span>, <span class="jsx-3120878690">`_d`</span>, and <span class="jsx-3120878690">`_t`</span>. This tells you the type of data stored in that column where <span class="jsx-3120878690">`_s`</span> is string, <span class="jsx-3120878690">`_d`</span> is double, and <span class="jsx-3120878690">`_t`</span> is timestamp.

Conclusion
----------

Azure Monitor provides a rich set of capabilities for capturing, querying, alerting, and monitoring your Azure resources. The queries you write will depend on what Azure resources you are currently using. You can read more in the Microsoft documentation about [What is Monitored by Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/monitor-reference) and the [Kusto Query Language](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/) to get more insights into how your Azure subscription is operating.

20

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

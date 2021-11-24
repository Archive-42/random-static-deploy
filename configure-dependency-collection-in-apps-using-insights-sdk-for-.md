<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Configure Dependency Collection Using Insights SDK for .NET in Azure
====================================================================

### Benney Au

-   Oct 20, 2020
-   5 Min read
-   2,439 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   2,439 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Azure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-howdependencycollectionworksinnetapplications" class="menu-link">How Dependency Collection Works in .NET Applications</a>
-   <a href="#module-customizedependencycollection" class="menu-link">Customize Dependency Collection</a>
-   <a href="#module-createatelemetryprocessortoconditionallyfiltertelemetry" class="menu-link">Create a Telemetry Processor to Conditionally Filter Telemetry</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Application Insights SDK for .NET offers powerful dependency collection capabilities. However, sometimes it can log too much information. Since Application Insights and Azure Monitor charge per GB of data ingestion, if your application's dependency collection is not configured correctly, your monthly Azure bill may be much higher than what it should be.

In this guide, you will learn how to customize Application Insights SDK for .NET to toggle different dependency collection capabilities and write a custom <span class="jsx-3120878690">`TelemetryProcessor`</span> to filter out telemetry, which can reduce the amount of telemetry your application emits and lower your data ingestion costs.

How Dependency Collection Works in .NET Applications
----------------------------------------------------

.NET offers two powerful features for collecting data about your application. These include:

-   **Diagnostic Source**, a feature that allows libraries to publish messages such as instrumentation that other packages can listen to and even modify. Application Insights can automatically track dependencies to supported targets since these libraries implement Diagnostic Source publishers. Using this hook, it can read messages, enrich them with extra data, and log them.
-   **Event Source**, a similar feature that can publish low-level events that other tools and libraries can use. These tools are not able to modify data in the context of your application like Diagnostic Source. Some examples of event source data that can be collected include SQL requests, garbage collection (GC) statistics, and memory allocations.

Azure Application Insights SDKs for .NET uses these two features to track and log dependency information for your application from [supported targets](https://docs.microsoft.com/en-us/azure/azure-monitor/app/auto-collect-dependencies).

Customize Dependency Collection
-------------------------------

If you are using ASP.NET Core with the <span class="jsx-3120878690">`Microsoft.ApplicationInsights.AspnetCore`</span> package, there are a few global options you can configure to customize what information is logged.

    1services.ConfigureTelemetryModule<DependencyTrackingTelemetryModule>((module, options) =>
    2{
    3    // disable all dependency collection
    4    module.DisableDiagnosticSourceInstrumentation = false;
    5
    6    // disable command text
    7    module.EnableSqlCommandTextInstrumentation = false;
    8});

cshsarp

You can use the <span class="jsx-3120878690">`ConfigureTelementryModule`</span> to globally disable SQL Text capture and all dependency collection. The SQL text can sum to a large amount of data, especially if your application is very chatty with a database.

> **Note:** Version 2.14.0 of the SDK has [disabled command text collection by default](https://github.com/microsoft/ApplicationInsights-Announcements/issues/28).

Create a Telemetry Processor to Conditionally Filter Telemetry
--------------------------------------------------------------

Rather than customize dependency collection globally, you can use [telemetry processors](https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling) to filter telemetry conditionally.

This feature allows you to inspect all telemetry inside your application and decide whether it should be logged or not.

If your application polls another service because it implements health checks or needs to check to maintain a singleton lock or active connection to a queue, then you will be publishing a lot of meaningless dependency logs to Application Insights.

    1/// filters out dependencies like polling queues that are not attached to any larger operation.
    2public class AzureDependencyFilterTelemetryProcessor : ITelemetryProcessor
    3{
    4    private readonly ITelemetryProcessor _inner;
    5
    6    public AzureDependencyFilterTelemetryProcessor(ITelemetryProcessor inner)
    7    {
    8        _inner = inner;
    9    }
    10
    11    public void Process(ITelemetry item)
    12    {
    13        if (item is Microsoft.ApplicationInsights.DataContracts.DependencyTelemetry dependency
    14            && dependency.Success == true
    15            && dependency.Context.Operation.Name == null
    16            && (dependency.Type == "Azure Service Bus"
    17                || dependency.Type == "Azure table"
    18                || dependency.Type == "Azure blob"
    19                || dependency.Type == "Azure queue"))
    20        {
    21            return;
    22        }
    23
    24        _inner.Process(item);
    25    }
    26}

csharp

The code snippet above demonstrates how you can filter out these low-value dependency events. If your application is polling a queue to check for new messages, this task will not be part of an operation. You can use <span class="jsx-3120878690">`operation.Context.Operation.Name ==                                       null`</span> to check whether the dependency was called in the context of processing an incoming HTTP request or background message or not. If the dependency is part of an operation, then you may want to keep those dependency traces.

Finally, you need to register your the <span class="jsx-3120878690">`TelemetryProcessor`</span> with the IoC container.

    1services.AddApplicationInsightsTelemetryProcessor<AzureDependencyFilterTelemetryProcessor>();

csharp

By filtering these dependency traces, you can reduce the number of events collected by hundreds of thousands of events if your application subscribes to many different queues.

Conclusion
----------

Application Insights provides a rich set of capabilities for monitoring, logging, and diagnostics. If you are curious about some of the low-level details, you can learn more by reading [How Azure’s Application Insights correlates telemetry](https://medium.com/prospa-engineering/how-azures-application-insights-correlates-telemetry-a73731f30bbd).

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

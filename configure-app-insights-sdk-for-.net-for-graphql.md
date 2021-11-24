<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Configure Azure Application Insights SDK for .NET for GraphQL.NET Servers
=========================================================================

### Benney Au

-   Oct 19, 2020
-   7 Min read
-   1,753 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,753 Views

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
-   <a href="#module-applicationinsightsdatamodel" class="menu-link">Application Insights Data Model</a>
-   <a href="#module-logginggraphqloperationswithrequesttelemetry" class="menu-link">Logging GraphQL Operations with Request Telemetry</a>
-   <a href="#module-addingcustomdimensiontotherequesttelemetry" class="menu-link">Adding Custom Dimension to the Request Telemetry</a>
-   <a href="#module-registeringyourgraphqlexecutor" class="menu-link">Registering your GraphQLExecutor</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

GraphQL is becoming an increasingly important technology. Many large companies such as GitHub, Coursea, and of course Facebook (GraphQL's creator) have adopted it. However, since GraphQL is designed to be transport agnostic, it does not rely on HTTP status codes to communicate errors to the client. This means that you will need to update your monitoring and logging code to cater to GraphQL. In this guide, you will learn how to configure a [GraphQL.NET Server](https://github.com/graphql-dotnet/server) with Azure Application Insights to correctly report error codes and failed requests.

Application Insights Data Model
-------------------------------

Application Insights offers a programming language agnostic data model for storing and sending telemetry data from your applications. Understanding the basics of the data model is important to properly communicate failures to the Application Insights UI in the Azure Portal.

For a GraphQL Server, there are three important types of telemetry:

-   **Request Telemetry**: An incoming request to your GraphQL Server. This could be a GraphQL query, mutation, or subscription.
-   **Exception Telemetry**: Errors that occur that may cause a request to fail
-   **Dependency Telemetry**: Your server may rely on third-party systems such as other REST APIs or databases. Dependency telemetry can record information like whether these dependencies succeeded or failed and how long they took to execute.

The telemetry described above can be grouped into an operation. For a GraphQL Server, this operation will begin as a client makes a mutation, query, or subscription request. Therefore, the root of operation will be a request telemetry that may contain nested telemetry or even operations inside it. This grouping makes it easy to find related logs in a request and understand failures, such as timeouts.

Logging GraphQL Operations with Request Telemetry
-------------------------------------------------

If you are using GraphQL.NET inside an ASP.NET Core Servers, the default middleware packaged in <span class="jsx-3120878690">`Microsoft.ApplicationInsights.AspetNetCore`</span> won't be sufficient to correctly report failed GraphQL operations. Further, this middleware is endpoint-based. This means all your requests will be grouped under <span class="jsx-3120878690">`/graphql`</span>, which makes it more difficult to understand the usage patterns of your GraphQL server.

One simple way to fix this is to subclass <span class="jsx-3120878690">`GraphQL.Server.Internal.DefaultGraphQLExecuter<TSchema>`</span> and map the GraphQL query and <span class="jsx-3120878690">`ExecutionResult`</span> to the Application Insights data model. The following code snippet demonstrates how to do this.

    1public class GraphQLExecutorWithDiagnostics<TSchema> : DefaultGraphQLExecuter<TSchema>
    2        where TSchema : GraphQL.Types.ISchema
    3    {
    4        private readonly TelemetryClient _telemetryClient;
    5
    6        public GraphQLExecutorWithDiagnostics(
    7            TSchema schema,
    8            IDocumentExecuter documentExecuter,
    9            IOptions<GraphQLOptions> options,
    10            IEnumerable<IDocumentExecutionListener> listeners,
    11            IEnumerable<IValidationRule> validationRules,
    12            TelemetryClient telemetryClient)
    13            : base(schema, documentExecuter, options, listeners, validationRules)
    14        {
    15            _telemetryClient = telemetryClient;
    16        }
    17
    18        public override async Task<ExecutionResult> ExecuteAsync(
    19            string operationName,
    20            string query,
    21            Inputs variables,
    22            IDictionary<string, object> context,
    23            CancellationToken cancellationToken = default)
    24        {
    25            using var operationHolder = _telemetryClient.StartOperation<RequestTelemetry>("GRAPHQL " + operationName);
    26            var telemetry = operationHolder.Telemetry;
    27            telemetry.Context.Operation.Name = operationHolder.Telemetry.Name;
    28            telemetry.Properties["Type"] = "GRAPHQL";
    29
    30            var result = await base.ExecuteAsync(operationName, query, variables, context, cancellationToken);
    31
    32            if (result.Errors?.Any() ?? false)
    33            {
    34                telemetry.Success = false;
    35                telemetry.ResponseCode = result.Errors.First().Code ?? "Faulted";
    36            }
    37
    38            if (result.Extensions?.ContainsKey("tracing") == true)
    39            {
    40                foreach (var perf in result.Perf)
    41                {
    42                    if (perf.Subject is string perfMetricSubject)
    43                    {
    44                        operationHolder.Telemetry.Metrics[perfMetricSubject] = perf.Duration;
    45                    }
    46                }
    47            }
    48
    49            return result;
    50        }
    51    }

csharp

You have created the <span class="jsx-3120878690">`GraphQLExecutorWithDiagnostics<TSchema>`</span> class to create a request telemetry. This class has the following responsibilities:

-   Update the request telemetry to <span class="jsx-3120878690">`success = false`</span> if an error is found in the execution result.
-   Log the operation name that is sent from the client. This is useful for differentiating types of GraphQL queries. In the Application Insights UI in the Azure Portal, you will be able to filter, group, and sort by operation name.
-   Set the response code on the request telemetry if a GraphQL operation fails. Normally this is the HTTP status code for the server. However, in the case of GraphQL, you need to manually set it to the GraphQL error.
-   The <span class="jsx-3120878690">`operationHolder`</span> automatically creates a stopwatch to measure how long your request took to execute.

Adding Custom Dimension to the Request Telemetry
------------------------------------------------

So far, you have logged some basic details about a GraphQL operation, such as whether it has succeeded and any error state. You can extend this by adding custom dimensions and logging the entire GraphQL query text and error message details.

To do this, update the <span class="jsx-3120878690">`GraphQLExecutor`</span> you created earlier by adding:

    1if (result.Errors?.Any() ?? false)
    2{
    3    telemetry.Success = false;
    4    telemetry.ResponseCode = result.Errors.First().Code ?? "Faulted";
    5    telemetry.Properties["GraphQLQuery"] = result.Query;
    6    Telemetry.Properties["GraphErrorData"] = JsonSerializer.Serialize(result.Errors.First().Data);

csharp

> **Note**: There is a size limit on custom dimensions, so if it is too large it may be truncated or removed by the Application Insights SDK.

Registering your GraphQLExecutor
--------------------------------

Finally, to use your enhanced <span class="jsx-3120878690">`GraphQLExecutor`</span>, add a few lines in your <span class="jsx-3120878690">`Startup.cs`</span> to tell your IoC container how to construct your service.

    1services.AddApplicationInsightsTelemetry();
    2services.AddGraphQL(_ =>
    3{
    4    _.ExposeExceptions = false;
    5})
    6.AddSystemTextJson(deserializerSettings => { }, serializerSettings => { })
    7.AddDataLoader();
    8
    9services.RemoveAll(typeof(IGraphQLExecuter<>));
    10services.AddTransient(typeof(IGraphQLExecuter<>), typeof(GraphQLExecutorWithDiagnostics<>));

csharp

You have replaced the <span class="jsx-3120878690">`DefaultGraphQLExecuter`</span> with your own <span class="jsx-3120878690">`GraphQLExecutorWithDiagnostics`</span>.

Conclusion
----------

Application Insights provides a rich set of capabilities for monitoring, diagnostics, and logging. In order to benefit from these features, you need to make sure your application sends useful telemetry. By understanding the basics of the Application Insights data model, you can get better observability into your application.

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Persisted Queries Link with GraphQL
===================================

### Benney Au

-   Sep 29, 2020
-   4 Min read
-   1,712 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   1,712 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">GraphQL</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Query Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Development</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-howpersistedqueriesworks" class="menu-link">How Persisted Queries Works</a>
-   <a href="#module-enablingautomaticpersistedqueriesinaclient" class="menu-link">Enabling Automatic Persisted Queries in a Client</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

GraphQL provides an expressive language to specify exactly what resources and data you want to fetch. However, this can lead to a problem where clients send large payloads of query text hundreds of times larger than the REST equivalent.

This guide will demonstrate how to use *Automatic Persisted Queries* to solve this issue. A previous guide, [How to Set Up GraphQL in a React App](https://app.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app), covered how to set up a new React Project with GraphQL using Apollo Client. This guide builds on what you learned there. Here you will learn how to improve network performance by sending smaller GraphQL requests.

How Persisted Queries Works
---------------------------

Normally, when you make a GraphQL request over HTTP, you POST a large amount of text specifying all the resources and fields you want. If there are a lot of users and resources, this can lead to network performance issues. The Apollo Client and Server implements a feature called Automatic Persisted Queries. This feature works by hashing the query, i.e., applying a function over the large query text to produce a much smaller mathematically linked value—the hash. This smaller hash is then sent to the server instead of the large query text.

The first time Apollo Server receives the hash, it responds by informing the client to send whole query text. The client sends the full query text, allowing the server to associate the hash with the query text. On all future queries of the same kind, even from different users, the client sends the small hash, and the server looks up the hash and knows which is being requested without it being sent explicitly over the network. In this way, a lot of network traffic is reduced.

**Note**: Persisted Queries is not part of the [GraphQL Specification](http://spec.graphql.org/draft/). In fact, the specification is not prescriptive about what transport method is used to send the request and deliver the response. The specification only describes the query language and the execution engine. This means that all server implementations may not support Automatic Persisted Queries. [The Apollo Server](https://www.apollographql.com/docs/apollo-server/performance/apq/) provides this feature out of the box without any configuration. However, if you are using a [graphql-dotnet](https://github.com/graphql-dotnet/server) as your server, you will need to add a third-party package like [GraphQL.PersistedQueries](https://www.nuget.org/packages/GraphQL.PersistedQueries/) to add support for Automatic Persisted Queries.

Enabling Automatic Persisted Queries in a Client
------------------------------------------------

If you are using Apollo Server and Apollo Client, the only thing you need to update is your client. To do this, add <span class="jsx-3120878690">`link`</span>, which customizes the flow of data from your graphQL queries and mutations to your backend.

Run the following command to install Persisted Queries link:

    1yarn add apollo-link-persisted-queries

Then update your <span class="jsx-3120878690">`src/ApolloClient/client.js`</span> file to:

    1import { createPersistedQueryLink } from "apollo-link-persisted-queries";
    2import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
    3import { HttpLink } from "apollo-link-http";
    4
    5const httpLink = new HttpLink({
    6  uri: "https://48p1r2roz4.sse.codesandbox.io",
    7});
    8
    9export const client = new ApolloClient({
    10  cache: new InMemoryCache(),
    11  link: ApolloLink.from([createPersistedQueryLink(), httpLink]),
    12});

javascript

You have updated the link chain, placing <span class="jsx-3120878690">`createPersistedQueryLink()`</span> before the <span class="jsx-3120878690">`httpLink`</span>. The persisted link cannot be the last in your list. No other changes should be required. Finally, start React and make a query. If the server has seen your query before, the request payload will look something like this:

    1{
    2  "operationName":"GetExchangeRates",
    3  "variables":{},
    4  "extensions":{
    5    "persistedQuery": {
    6      "version":1,
    7      "sha256Hash":"a14a78df14b12400059895968ef375948d2ed45da8748495d7f75368a4ac2bd1"
    8    }
    9  }
    10}

json

Conclusion
----------

Interacting with remote data is a large component of modern web apps. Using Apollo and GraphQL, querying data from REST and GraphQL endpoints becomes much easier. You have learned how to make your queries more efficient. As a next step, you may want to explore other Apollo features such as [mutations](https://www.apollographql.com/docs/react/data/mutations/) and [subscription](javascript:void(0)).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

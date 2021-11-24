<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Use GraphQL Subscriptions in a React App
========================================

### Benney Au

-   Nov 16, 2020
-   5 Min read
-   4,276 Views

-   Nov 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   4,276 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">GraphQL</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Query Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Development</span>

Introduction

10

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-understandhowsubscriptionsaredefinedintheschema" class="menu-link">Understand How Subscriptions Are Defined in the Schema</a>
-   <a href="#module-enablewebsocketsupportinyourreactclient" class="menu-link">Enable Web Socket Support in Your React Client</a>
-   <a href="#module-subscribetoupdates" class="menu-link">Subscribe To Updates</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Modern applications are increasingly becoming real time. Some examples of real-time updates in web apps include notification updates, chat messaging applications, and financial market updates. GraphQL makes creating apps with low latency, real-time updates easy with a feature called *subscriptions*.

In this guide, you will learn how to subscribe to real-time updates from a GraphQL server using subscriptions. A previous guide, [How to Set Up GraphQL in a React App](https://app.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app), covered how to set up a new React Project with GraphQL using Apollo Client. This guide builds on what you learned there. Here, you will learn how to keep your client in sync with the backend by setting up a connection to allow your server to proactively push updates as they occur.

Understand How Subscriptions Are Defined in the Schema
------------------------------------------------------

One of the advantages of GraphQL is its strongly typed schema. This means you can see at a glance what resources are queryable and mutable. If the GraphQL backend supports it, this schema also includes information about subscriptions, which are a separate root type. If you imagined [Apollo's GraphQL ExchangeRate sandbox](https://48p1r2roz4.sse.codesandbox.io/) with subscription support, then the schema would look like the snippet below:

    1type ExchangeRate {
    2  currency: String
    3  rate: String
    4  name: String
    5}
    6
    7type Query {
    8  rates(currency: String!): [ExchangeRate]
    9}
    10
    11type Subscription {
    12  ratesUpdated(currency: String!): ExchangeRate
    13}

graphql

A root type called <span class="jsx-3120878690">`Subscription`</span> is present. This is a special optional type. It can have one or many fields. In this case, <span class="jsx-3120878690">`ratesUpdated`</span> is a field that clients can subscribe to by passing in a currency; every time that currency is updated on the server, a message is pushed to clients that are listening.

Enable Web Socket Support in Your React Client
----------------------------------------------

To subscribe to updates, use web-sockets rather than HTTP. [The IETF Standards Documentation](https://tools.ietf.org/html/rfc6455#section-1.1) describes the motivation for using web sockets over HTTP. The advantage of web sockets is a lower overhead transport protocol compared to HTTP. This is useful when your server has frequent small updates.

In order to support web-sockets in your React application using GraphQL, you need to install a package:

    1yarn add subscriptions-transport-ws

Then update your <span class="jsx-3120878690">`src/ApolloClient/client.js`</span> file to:

    1import { ApolloClient, ApolloLink, InMemoryCache, split } from "@apollo/client";
    2import { HttpLink } from "apollo-link-http";
    3import { WebSocketLink } from '@apollo/client/link/ws';
    4
    5const httpLink = new HttpLink({
    6  uri: "https://48p1r2roz4.sse.codesandbox.io",
    7});
    8
    9const wsLink = new WebSocketLink({
    10  uri: "ws://48p1r2roz4.sse.codesandbox.io",
    11  options: {
    12    reconnect: true
    13  }
    14});
    15
    16const splitLink = split(
    17  ({ query }) => {
    18    const definition = getMainDefinition(query);
    19    return (
    20      definition.kind === 'OperationDefinition' &&
    21      definition.operation === 'subscription'
    22    );
    23  },
    24  wsLink,
    25  httpLink,
    26);
    27
    28export const client = new ApolloClient({
    29  cache: new InMemoryCache(),
    30  link: ApolloLink.from([splitLink]),
    31});

javascript

You have updated the <span class="jsx-3120878690">`link`</span> option, which customizes the flow of data from your graphQL operations to your backend. In this case, use the split operation to combine two links. When a mutation or query is made, then HTTP is used as the transport method. If a subscription operation is requested, you instruct <span class="jsx-3120878690">`ApolloClient`</span> to use web-sockets instead.

Subscribe To Updates
--------------------

Now that you have the right packages and <span class="jsx-3120878690">`link`</span> configured correctly, you can start subscribing to data updates in your backend.

The below code snippet demonstrates a simple React component subscribing to currency rate changes.

    1import React from "react";
    2import { useQuery, gql, useSubscription } from "@apollo/client";
    3
    4const RATES_UPDATED = gql`
    5  subscription OnRatesUpdated($currency: string!) {
    6    ratesUpdated(postID: $currency) {
    7      currency
    8      rate
    9      name
    10    }
    11  }
    12`;
    13
    14const LatestRates = ({ currency }) => {
    15  const { data: { ratesUpdated }, loading } = useSubscription(
    16    RATES_UPDATED,
    17    { variables: { currency } }
    18  );
    19  return <h4>New rates: {!loading && ratesUpdated.rate}</h4>;
    20};
    21
    22export default LatestRates;

javascript

Notice that the code is very similar to a component with a graphQL query. There are only minor differences:

-   Instead of using the <span class="jsx-3120878690">`useQuery`</span> hook, you used the <span class="jsx-3120878690">`useSubscription`</span> hook.
-   The hook still returns <span class="jsx-3120878690">`loading`</span>, <span class="jsx-3120878690">`data`</span>, and <span class="jsx-3120878690">`error`</span> in the same way the <span class="jsx-3120878690">`useQuery`</span> hook does.
-   The subscription also starts when the component is created for the first time.

Conclusion
----------

Subscriptions are an extra tool that make your app respond in real time to backend data changes. This guide has demonstrated how to using graphQL subscriptions in a React app. You can further build on these skills by reading about the [subscribeToMore function](https://www.apollographql.com/docs/react/data/subscriptions/#usesubscription-api-reference). This function= allows you to combine making an initial query and using a subscription to listen for incremental updates.

10

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

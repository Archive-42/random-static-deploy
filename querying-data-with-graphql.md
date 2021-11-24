<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Querying Data with GraphQL
==========================

### Benney Au

-   Oct 5, 2020
-   5 Min read
-   5,079 Views

-   Oct 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   5,079 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">GraphQL</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Query Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Development</span>

Introduction

56

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-performingabasicqueryingraphiql" class="menu-link">Performing a Basic Query in GraphiQL</a>
-   <a href="#module-sendingargumentstographqlfields" class="menu-link">Sending Arguments to GraphQL Fields</a>
-   <a href="#module-usinggraphqlfragment" class="menu-link">Using GraphQL Fragment</a>
-   <a href="#module-usinggraphqldirectives" class="menu-link">Using GraphQL Directives</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

GraphQL is a query language for accessing object graphs. It is designed to be type safe and give clients the ability to request only the data they need.

In this guide, you will learn how to construct GraphQL queries. Then we will explore some unique features of GraphQL, including fragments, sending variables and GraphQL directives. Throughout this guide, you will use the [GraphQL implementation of the Star Wars API](https://github.com/graphql/swapi-graphql) to test the querying capabilities of GraphQL.

Performing a Basic Query in GraphiQL
------------------------------------

[GraphiQL](https://github.com/graphql/graphiql) is a simple UI tool that allows you to query GraphQL endpoints with the convenience of auto-complete and syntax highlighting.

To get started writing your first GraphQL query, navigate to the [Star Wars GraphiQL page](https://graphql.org/swapi-graphql). From this page, you can look at the documentation for the GraphQL endpoint, submit queries and see the output.

Submit the following query in the top left pane of GraphiQL.

    1query GetAllFilms {
    2  allFilms {
    3    films {
    4      title
    5      episodeID
    6      openingCrawl
    7      director
    8      producers
    9      releaseDate
    10    }
    11  }
    12}

graphql

This query consists of three components:

-   <span class="jsx-3120878690">`GetallFilms`</span> is the operation name that clients can set. This can be useful for debugging issues.
-   <span class="jsx-3120878690">`allFilms`</span> is field exposed endpoint on the root node. It is a complex types of <span class="jsx-3120878690">`Film`</span> that combines several scalar values into a single unit.
-   <span class="jsx-3120878690">`title`</span>, <span class="jsx-3120878690">`episodeID`</span>, <span class="jsx-3120878690">`director`</span>, etc. are fields. These are units of data that you are requesting to appear in the response data. <span class="jsx-3120878690">`allFilms`</span> is also a field that combines the fields nested inside it.

These are the fundamental building blocks of a GraphQL query. In the following sections, you will use these building blocks to perform more advanced queries.

Sending Arguments to GraphQL Fields
-----------------------------------

You have just queried all films. However, sometimes you only need a subset of this data. With the Star Wars GraphQL endpoint, you can send arguments to the <span class="jsx-3120878690">`allFilms`</span> field to filter the data.

There are two ways to send arguments. The first is inline:

    1query GetAllFilms {
    2  allFilms(first: 3) {
    3    films {
    4      title
    5      episodeID
    6      openingCrawl
    7      director
    8      producers
    9      releaseDate
    10    }
    11  }
    12}

graphql

You modified the <span class="jsx-3120878690">`allFilms`</span> field in the query to <span class="jsx-3120878690">`allFilms(first: 3)`</span>. This approach is appropriate when you don't need to change the value of your argument(s). If your argument values change frequently, it is better to define an input variable.

To do this, update your query to the following:

    1query GetAllFilms($firstFilms: Int) {
    2  allFilms(first: $firstFilms) {
    3    films {
    4      title
    5      episodeID
    6      openingCrawl
    7      director
    8      producers
    9      releaseDate
    10    }
    11  }
    12}

graphql

You will also need to set the variables. In GraphiQL, this is configured at the bottom left of the screen. Insert the following JSON to set the variables in the query operation defined above.

    1{"firstFilms": 3}

json

Using GraphQL Fragment
----------------------

As you use GraphQL to query a number of resources, your query can become quite large. One way to manage this is to split your query into small, reusable pieces called fragments. Fragments are a selection set on a specific GraphQL type and can be reused in different query operations.

The snippet below demonstrates reusing a snippet fragment on the <span class="jsx-3120878690">`Film`</span> type within the same query operation.

    1query GetAllFilms {
    2  allFilms {
    3    films {
    4      title
    5      episodeID
    6      openingCrawl
    7      director
    8      producers
    9      releaseDate
    10      id
    11    }
    12  }
    13
    14  film(id:"ZmlsbXM6MQ==") {
    15    ...FilmFragment
    16  }
    17}
    18
    19fragment FilmFragment on Film {
    20  title
    21  episodeID
    22  openingCrawl
    23  director
    24  producers
    25  releaseDate
    26  id
    27}

graphql

Using GraphQL Directives
------------------------

A powerful feature that makes GraphQL extensible is the inclusion of directives. These are declarations that are prefixed with <span class="jsx-3120878690">`@`</span>, which allows extra logic to be executed on either the server or the client.

There are two directives that are built into the Star Wars Schema: <span class="jsx-3120878690">`@include`</span> and <span class="jsx-3120878690">`@skip`</span>. Usage of <span class="jsx-3120878690">`@include`</span> of is demonstrated in the code snippet below:

    1query GetAllFilms($includeFilm: Boolean!) {
    2  allFilms {
    3    films {
    4      title
    5      episodeID
    6      openingCrawl
    7      director
    8      producers
    9      releaseDate
    10      id
    11    }
    12  }
    13
    14  film(id:"ZmlsbXM6MQ==") @include(if: $includeFilm) {
    15    ...FilmFragment
    16  }
    17}
    18
    19fragment FilmFragment on Film {
    20  title
    21  episodeID
    22  openingCrawl
    23  director
    24  producers
    25  releaseDate
    26  id
    27}

graphql

The <span class="jsx-3120878690">`film`</span> field is appended with <span class="jsx-3120878690">`@include(if: $includeFilm)`</span>. Adding this allows clients to conditionally request the film field when the <span class="jsx-3120878690">`$includeFilm`</span> variable is set to <span class="jsx-3120878690">`true`</span>, and not return this field when it is set to <span class="jsx-3120878690">`false`</span>. This approach makes it possible to retrieve different resources without modifying your query.

Conclusion
----------

GraphQL is becoming an increasingly important technology. It was developed by Facebook, and other large organizations like GitHub, Pinterest, and Coursera have adopted it. Web and integration developers will need to learn this query language to access the next generation of APIs. As a next step, you may want to explore [How to Set Up GraphQL in a React App](https://app.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app).

56

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

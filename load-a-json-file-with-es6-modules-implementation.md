<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Load a JSON File with ES6 Modules Implementation
================================================

### Gaurav Singhal

-   Sep 29, 2020
-   4 Min read
-   16,534 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   16,534 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-importjsonfileusingnpmpackage" class="menu-link">Import JSON File Using NPM Package</a>
-   <a href="#module-importjsonfileusingwebpackconfig" class="menu-link">Import JSON File Using Webpack Config</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

ES6 is a common standard for JavaScript; it’s also called *ECMAScript 2015*, with the first version released in 2011. ES6 adds extensive features to make JavaScript app development more accessible. Most JavaScript-based frameworks, libraries, and the vanilla JavaScript app follow the ECMAScript standard. During web development, accessing JSON files is an ordinary operation, and consuming JSON files is allowed using ES6 implementation.

In this guide, you will learn how to access or consume any JSON file by implementing the ES6 standard.

Import JSON File Using NPM Package
----------------------------------

JSON files contain a key-value pair, and there is a parent key that represents the parent node of the JSON file.

In React, if you want to load the JSON file without using the existing webpack settings, can make use of a third-party NPM package. One popular package is <span class="jsx-3120878690">`json-loader`</span>.

    1npm install json-loader

shell

In this guide, we will be using sample JSON data stored in the <span class="jsx-3120878690">`Data.json`</span> file.

    1{
    2  "data": {
    3    "category1": {
    4      "name": "test123",
    5      "title": "this is category 123"
    6    },
    7    "category2": {
    8      "name": "test456",
    9      "title": "this is category 456"
    10    },
    11    "category3": {
    12      "name": "test789",
    13      "title": "this is category 789"
    14    }
    15  }
    16}

json

After the above JSON file is created, it will be available to import and use into existing React components.

    1import React, { Component } from "react";
    2// Custom JSON file
    3import Data from "./data";
    4
    5export class ImportJsonFile extends Component {
    6    render() {
    7        console.log(Data) // will print the JSON file content
    8        return (
    9            <>
    10                <div>
    11                    // Use JSON data here
    12                </div>
    13            </>
    14        );
    15    }
    16}
    17
    18export default ImportJsonFile;

jsx

Notice the ES6 import statement that imports the local JSON file, which you created previously. Using the ES6 import statement along with the <span class="jsx-3120878690">`json-loader`</span>, any JSON file can be consumed into the React app.

Import JSON File Using Webpack Config
-------------------------------------

The basic webpack config rule with the <span class="jsx-3120878690">`json5-loader`</span> is configured as defined below.

If your React app uses a webpack config version &gt; 2.0.0, then there is no need to install <span class="jsx-3120878690">`json-loader`</span> because webpack uses <span class="jsx-3120878690">`json5-loader`</span> by default when its configured with the React app.

**Note:** webpack.config.js is sourced from [here](https://webpack.js.org/loaders/json5-loader/) .

    1module.exports = {
    2  module: {
    3    rules: [
    4      {
    5        test: /\.json5$/i,
    6        loader: 'json5-loader',
    7        type: 'javascript/auto',
    8      },
    9    ],
    10  },
    11};

js

In the webpack config file, the <span class="jsx-3120878690">`loader`</span> rule accepts the NPM package to load any of the JSON files in your app. One package used is called <span class="jsx-3120878690">`json5-loader`</span>.

Along with the <span class="jsx-3120878690">`loader`</span> rule, there are two other rules, one of which is <span class="jsx-3120878690">`test`</span>.

    1test: /\.json5$/i,

js

That identifies the file format of the JSON or gives a warning at the time of compilation.

There is an additional Boolean option available called <span class="jsx-3120878690">`esModule`</span>, which is used to define whether the module should be ECMAScript-supported or not.

The basic setting for <span class="jsx-3120878690">`esModule`</span> is shown below.

    1module.exports = {
    2  module: {
    3    rules: [
    4      {
    5        test: /\.json5$/i,
    6        loader: 'json5-loader',
    7        options: {
    8          esModule: true,
    9        },
    10        type: 'javascript/auto',
    11      },
    12    ],
    13  },
    14}

js

By maintaining the rules with a webpack, the React app is configured to access the JSON file from the physical app location by verifying its file extension and the default JSON loading library.

Conclusion
----------

React app uses various ES6 features, such as <span class="jsx-3120878690">`let`</span>, <span class="jsx-3120878690">`const`</span>, spread operator, arrow function, class, and literals, so your app should be well configured to support the JSON file format.

Webpack configuration is the right approach to allow JSON files to be imported into a React app with ES6 implementation Try configuring webpack on your own to access the JSON files.

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

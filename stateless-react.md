<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Create a Stateless Component for an Array of JSON Objects in React
==================================================================

### Raphael Alampay

-   Sep 25, 2020
-   5 Min read
-   6,620 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   6,620 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

3

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-populatingthetable" class="menu-link">Populating the Table</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-loadingvalues" class="menu-link">Loading Values</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Binding an array to a set of DOM elements (JSX) in React.js is a common task in app development. Often, you need to list a set of objects and their corresponding attributes, such as those found in product catalogs, member records, or lists of transactions. In this guide, we will take a look at some considerations when binding a list of objects in a React.js component's interface.

Setup
-----

Suppose that you are creating a React.js component that lists a set of products a customer can buy in a grocery store. Each product has an <span class="jsx-3120878690">`id`</span>, <span class="jsx-3120878690">`name`</span>, and <span class="jsx-3120878690">`price`</span>. Data might come from anywhere, such as an API or another component. In any case, you can expect that an array of items will look like the following:

    1[
    2  { id: 1, name: "Apple", price: 25.00 },
    3  { id: 2, name: "Oranges", price: 20.00 },
    4  { id: 3, name: "Grapes", price: 22.00 }
    5]

JSON

This type of data will be passed as a <span class="jsx-3120878690">`props`</span> attribute called <span class="jsx-3120878690">`items`</span> within your component.

First, create a component that looks like the following:

    1import React from 'react';
    2
    3export default class ItemsList extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {}
    8  }
    9
    10  render() {
    11    return (
    12      <table>
    13        <thead>
    14          <th>
    15            Item
    16          </th>
    17          <th>
    18            Price
    19          </th>
    20        </thead>
    21        <tbody>
    22        </tbody>
    23      </table>
    24    );
    25  }
    26}

javascript

Notice that you don't have any state to maintain and that this component returns a single element in the form of a <span class="jsx-3120878690">`<table>`</span>. Everything will be read from <span class="jsx-3120878690">`props`</span> instead of <span class="jsx-3120878690">`state`</span>. Within the <span class="jsx-3120878690">`<table>`</span>, React.js requires that you include a <span class="jsx-3120878690">`<tbody>`</span> before inserting rows in it. Otherwise, it will complain that <span class="jsx-3120878690">`<tr>`</span> is not a valid child element of <span class="jsx-3120878690">`<table>`</span>.

Populating the Table
--------------------

Instead of rendering the array of items directly to <span class="jsx-3120878690">`render()`</span>, create a separate function to handle the building of DOM elements:

    1renderRows() {
    2  return  this.props.items.map(function(o) {
    3            return  <tr key={"item-" + o.id}>
    4                      <td>{o.name}</td>
    5                      <td>{o.price}</td>
    6                    </tr>
    7          });
    8}

javascript

Notice first that the code references <span class="jsx-3120878690">`this.props`</span> and assumes that it will have an attribute <span class="jsx-3120878690">`items`</span>. Since it's calling from <span class="jsx-3120878690">`this.props`</span>, it expects that this data will be passed from an external component. Second, the code uses the <span class="jsx-3120878690">`map`</span> function of a JavaScript array to iterate through <span class="jsx-3120878690">`this.props.items`</span>, which accepts a function that returns a <span class="jsx-3120878690">`<tr>`</span> element. Finally, the <span class="jsx-3120878690">`<tr>`</span> element will contain a <span class="jsx-3120878690">`key`</span> attribute. This is a requirement for React.js wherein each child element of a parent element that is dynamically generated has to be assigned a key unique within the parent element. Since it is assumed that each item will contain an <span class="jsx-3120878690">`id`</span> unique to it, the code uses that information to generate the <span class="jsx-3120878690">`key`</span> value of <span class="jsx-3120878690">`item-someItemId`</span>.

Invoke the function within the component's <span class="jsx-3120878690">`render()`</span> inside the <span class="jsx-3120878690">`<tbody>`</span> tag:

    1<tbody>
    2  {this.renderRows()}
    3</tbody>

jsx

These items will change if a component calling <span class="jsx-3120878690">`ItemsList`</span> passes a new set of values for <span class="jsx-3120878690">`items`</span> via <span class="jsx-3120878690">`props`</span>.

Overall Code
------------

    1import React from 'react';
    2
    3export default class ItemsList extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {}
    8  }
    9
    10  renderRows() {
    11    return  this.props.items.map(function(o) {
    12              return  <tr key={"item-" + o.id}>
    13                        <td>{o.name}</td>
    14                        <td>{o.price}</td>
    15                      </tr>
    16            });
    17  }
    18
    19  render() {
    20    return (
    21      <table>
    22        <thead>
    23          <th>
    24            Item
    25          </th>
    26          <th>
    27            Price
    28          </th>
    29        </thead>
    30        <tbody>
    31          {this.renderRows()}
    32        </tbody>
    33      </table>
    34    );
    35  }
    36}

javascript

Loading Values
--------------

Suppose that you want to test it out. From an external JavaScript section in your app, invoke <span class="jsx-3120878690">`ItemsList`</span> with some data in a DOM element <span class="jsx-3120878690">`react-root-div`</span>:

    1var items = [
    2  { id: 1, name: "Apple", price: 25.00 },
    3  { id: 2, name: "Oranges", price: 20.00 },
    4  { id: 3, name: "Grapes", price: 22.00 }
    5];
    6
    7ReactDOM.render(
    8  <ItemsList items={items} />,
    9  document.getElementById("react-root-div")
    10);

javascript

You should see the table render with the name of the item in the first column and its price in the second column. To add more rows to the table, add more objects to <span class="jsx-3120878690">`items`</span>, making sure that each object has an <span class="jsx-3120878690">`id`</span> different from the existing objects in the array.

Conclusion
----------

In this guide, you've created a component that has no state but populates a list of JavaScript objects often derived from a JSON object. The component renders these items dynamically, and each child element rendered should have a unique key within its parent element. Because it is a stateless component, you can easily plug this component in other parts of your React.js app that need a list rendered of items.

For an extra challenge, see if you can integrate this in your own React.js app where data is coming from an external API instead of being hardcoded.

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

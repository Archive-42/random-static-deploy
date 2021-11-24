<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Introduction to the data-reactid Attribute in HTML
==================================================

### Gaurav Singhal

-   Nov 16, 2020
-   4 Min read
-   2,516 Views

-   Nov 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   2,516 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-dataattributesinhtml" class="menu-link">Data Attributes in HTML</a>
-   <a href="#module-usecasesandexamples" class="menu-link">Use Cases and Examples</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

HTML attributes like <span class="jsx-3120878690">`class`</span> and <span class="jsx-3120878690">`id`</span> are used for identifying elements differently. While classes are used to identify similar HTML elements together for the purpose of styling them, the <span class="jsx-3120878690">`id`</span> attribute is used to uniquely identify an element. HTML also allows custom data attributes, and one such attribute is <span class="jsx-3120878690">`data-reactid`</span>, which helps you uniquely identify components within the DOM tree in your React app. In this guide, you'll learn what the <span class="jsx-3120878690">`data-reactid`</span> attribute is and where and how it is used.

Data Attributes in HTML
-----------------------

Custom data attributes in HTML allow you to store and access data instantly in your markup that might be private to your app. They are is prefixed by the keyword <span class="jsx-3120878690">`data-`</span> and you can have any type of string as a value. For instance, consider the following markup:

    1<li data-cost="$10" data-available="true">Burgers</li>

html

In the above <span class="jsx-3120878690">`li`</span>, you store some useful data in your app's JavaScript that you can use instantly without making a request to the server. So when a user comes to your food delivery app and clicks on the burger, you can immediately notify them of the availability of the item, its cost, etc.

Similarly, the <span class="jsx-3120878690">`data-reactid`</span> attribute also stores some information about your DOM tree that can be used to identify components residing in the tree uniquely.

Use Cases and Examples
----------------------

React apps can be rendered both *client-side* and *server-side*. However, sharing component references within a tree is not possible without sending an entire *serialized version* of it, which in itself is an expensive task. Hence, this attribute's value is used for internally building up a representation of the nodes in the DOM tree that together constitute your app.

For instance, consider the following simplified version of your DOM tree:

    1{
    2 id: '.W3GegB3Bzq',
    3  node: DivRef,
    4  children: [
    5    {
    6      id: '.tZtxhNj2eY',
    7      node: SpanRef,
    8      children: [
    9        {
    10          id: '.hgwiVqqeZJ',
    11          node: InputRef,
    12          children: []
    13        }
    14      ]
    15    }
    16  ]
    17}

javascript

Now, when your React app gets rendered on the server, it uses the unique <span class="jsx-3120878690">`data-reactid`</span> attribute to convert it to its original data structure, as shown above.

    1<div data-reactid='.W3GegB3Bzq'>
    2  <span data-reactid='.tZtxhNj2eY'>
    3    <input data-reactid='.hgwiVqqeZJ' />
    4  </span>
    5</div>

jsx

This is an example of a server-side rendered app where <span class="jsx-3120878690">`ids`</span> are generally of the form of a random string that can uniquely identify an element. The only criteria is that the string should not be repeated so that collisions between different <span class="jsx-3120878690">`ids`</span> pertaining to different elements can be avoided. This is helpful when you want to use more than one server to render your React app.

Client-side rendered React apps use a specific integer format for <span class="jsx-3120878690">`id`</span> since you probably won't need more than one rendering process. Have a look at the example below.

    1{
    2 id: '.121,
    3  node: DivRef,
    4  children: [
    5    {
    6      id: '.123',
    7      node: SpanRef,
    8      children: [
    9        {
    10          id: '.125',
    11          node: InputRef,
    12          children: []
    13        }
    14      ]
    15    }
    16  ]
    17}

javascript

Conclusion
----------

To render a server-side React app, the <span class="jsx-3120878690">`data-reactid`</span> attribute can be extremely useful for sharing DOM object references between the client and server. In the latest versions after React 15, client-side rendered apps don't require this attribute anymore as it uses <span class="jsx-3120878690">`document.createElement`</span> for faster delivery of lightweight DOM. You can read more about this changelog [here](https://reactjs.org/blog/2016/03/07/react-v15-rc1.html#document.createelement-is-in-and-data-reactid-is-out).

If you have any questions, feel free to ask at [Codealphabet](https://codealphabet.com/contact).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

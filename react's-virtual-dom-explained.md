<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

React's Virtual DOM Explained
=============================

### Desmond Nyamador

-   Oct 23, 2020
-   4 Min read
-   3,422 Views

-   Oct 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   3,422 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

18

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-virtualdomvsregulardom" class="menu-link">Virtual DOM vs. Regular DOM</a>
-   <a href="#module-reconciliationinreact" class="menu-link">Reconciliation in React</a>
-   <a href="#module-keysandattributes" class="menu-link">Keys and Attributes</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

You may have built a couple of React apps, or maybe you're just getting started. But a big question no matter your level of experience is, how does React decide which component to re-render and how does it do so efficiently? In this guide, you'll learn about React's virtual DOM how it works, including other concepts such as reconciliation and fibers.

Virtual DOM vs. Regular DOM
---------------------------

First off, the virtual DOM (VDOM) is not the same as the shadow DOM. Rather, the virtual DOM stores a representation of the UI in memory and is synced with the actual DOM with the help of React DOM. The process of syncing the real *DOM* with the *VDOM* is referred to as *reconciliation.* Internally, React uses objects called *fibers* to keep more details of the component tree. Do you recognize the snippet below? The <span class="jsx-3120878690">`render()`</span> function creates a tree of components that is used in the reconciliation process.

    1import React from 'react';
    2import ReactDOM from 'react-dom';
    3
    4ReactDOM.render(
    5 <App/>
    6 document.getElementById('root')
    7);

jsx

Using the VDOM, it becomes unnecessary to manipulate attributes of DOM elements manually and update the actual DOM. A typical example of why React's method of solving this is so great is rendering a list of items. In reality, only one item might have changed in the list. If the list contains 100 items, 99 nodes that never changed would re-render. That is very inefficient!

Reconciliation in React
-----------------------

As indicated above, reconciliation is the process of syncing the VDOM with the real DOM. For this to happen, React creates a tree starting from the root node. The diagram below shows the tree representation of the real DOM consisting of four nodes.

![React's Virtual DOM](../../dev-to-uploads.s3.amazonaws.com/i/4jqsr1imk3s5iafyas94.html)

Considering that the app's state changes, React uses its diffing algorithm (very similar to how Git compares changes in files) to compare the root elements in the virtual DOM and real DOM. Whenever it encounters root elements that have changed, it tears down the nodes whose states have changed and remounts them. In this example, the nodes marked green in the tree representation below are the ones that get remounted.

![Reacts Virtual DOM explained](../../dev-to-uploads.s3.amazonaws.com/i/v9tfhx5k86tloho8pso9.html)

Keys and Attributes
-------------------

To help React figure out which items in a list to mount, it requires you to add a key attribute to every list item. With the code snippet below, React would be able to figure out which element in the list has changed and mount it. The unique identifier provided by you helps React identify the elements. This can be from an id retrieved from an API or otherwise.

    1<ul>
    2  <li key="1">Skills</li>
    3  <li key="2">Projects</li>
    4</ul>
    5
    6<ul>
    7  <li key="0">Flow</li>
    8  <li key="1">Skills</li>
    9  <li key="2">Projects</li>
    10</ul>

jsx

### Attributes

In the code block below, React only changes the attributes of the DOM node and not the underlying node itself. This is why it's very efficient!

    1<div className="blue">
    2<div className="green">

jsx

Conclusion
----------

And that's it! You're a React guru now. If you'd like to read more on reconciliation or the Virtual DOM in React, visit the following sections of the React docs:

1.  <https://reactjs.org/docs/faq-internals.html>
2.  <https://reactjs.org/docs/reconciliation.html>

You can also check out Saravanan Dhandapani's guide on how React's virtual DOM sets it apart from frontend frameworks and libraries:

[Virtual DOM - the Difference Maker in React JS](https://app.pluralsight.com/guides/virtual-dom-difference-maker-react-js#module-efficientdiffalgorithm)

Feel free to ping me on Twitter if you'd like to chat more at [@DesmondNyamador](https://twitter.com/DesmondNyamador).

18

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

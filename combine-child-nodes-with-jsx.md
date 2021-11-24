<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Combine Child Nodes with JSX
============================

### Gaurav Singhal

-   Nov 19, 2020
-   5 Min read
-   1,352 Views

-   Nov 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,352 Views

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
-   <a href="#module-creatingthechildjsxelements" class="menu-link">Creating the Child JSX Elements</a>
-   <a href="#module-combiningthechildjsxnodeswiththeparentnodes" class="menu-link">Combining the Child JSX Nodes with the Parent Nodes</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

JSX (JavaScript XML) is most suitable for writing JavaScript within the HTML mark-up. It is a primary option to use with React because of its way of presenting DOM elements and maintainability. While developing with React, it’s essential to use the combination of the parent-child element or a group of elements rendered dynamically based on the supportive conditions so that it can be sufficient to manage the DOM elements.

The JSX can render child elements within the parent element separately, and you will learn the same approach in this guide.

Creating the Child JSX Elements
-------------------------------

Before rendering or combining various child JSX elements, you need to create them either within the <span class="jsx-3120878690">`render()`</span> or by creating a separate function and returning the desired set of JSX mark-up. For combining the child JSX elements, you need to make sure that it fits into the same supported element where you want to render it.

For example, you want to render multiple <span class="jsx-3120878690">`<Button>`</span> as a separate JSX element. Thus, you will need to have a <span class="jsx-3120878690">`<ButtonToolbar>`</span> kind of container where you can render those child JSX buttons. Create one function which returns the list if <span class="jsx-3120878690">`<li>`</span> elements as given below.

    1renderList1 = () => {
    2    return (
    3      <>
    4        <li>Item 1</li>
    5        <li>Item 2</li>
    6        <li>Item 3</li>
    7        <li>Item 4</li>
    8        <li>Item 5</li>
    9      </>
    10    );
    11};

jsx

The above function returns the fragment of five different <span class="jsx-3120878690">`<li>`</span> items, which can be rendered only within the <span class="jsx-3120878690">`<ul>`</span> element as it only supports <span class="jsx-3120878690">`<li>`</span> as a child element.

Create another function that returns a fragment of five more lists of <span class="jsx-3120878690">`<li>`</span> elements.

    1renderList2 = () => {
    2    return (
    3      <>
    4        <li>Item 6</li>
    5        <li>Item 7</li>
    6        <li>Item 8</li>
    7        <li>Item 9</li>
    8        <li>Item 10</li>
    9      </>
    10    );
    11};

jsx

Both the function <span class="jsx-3120878690">`renderList1()`</span> and <span class="jsx-3120878690">`renderList2()`</span> are almost the same except their values; now, it’s a challenge to render the list of <span class="jsx-3120878690">`<li>`</span> elements into a single <span class="jsx-3120878690">`<ul>`</span> element by combining them.

Combining the Child JSX Nodes with the Parent Nodes
---------------------------------------------------

In the previous section, there are two separate functions created, which returns the set of <span class="jsx-3120878690">`<li>`</span> elements, but they should get rendered within the single <span class="jsx-3120878690">`<ul>`</span> element.

The JSX comes with much more flexibility than you can even put into any function in line with the HTML mark-up, and the respective function’s content will get rendered as it returns. Below is one of the simplest pieces of code that combines the two different JSX code sets into one and renders its respective content.

    1render() {
    2    return (
    3      <>
    4        <div>
    5          <ul>
    6            {this.renderList1()}
    7            {this.renderList2()}
    8          </ul>
    9        </div>
    10      </>
    11    );
    12}

jsx

Inside the <span class="jsx-3120878690">`<ul>`</span> element, if two different functions get used and wrapped with the curly braces <span class="jsx-3120878690">`{ }`</span> it means the content of the function/expression will get executed, and elements will get rendered wherever they're referenced.

Below is the complete code of the example.

    1import React, { Component } from "react";
    2
    3export class Example1 extends Component {
    4    renderList1 = () => {
    5        return (
    6            <>
    7                <li>Item 1</li>
    8                <li>Item 2</li>
    9                <li>Item 3</li>
    10                <li>Item 4</li>
    11                <li>Item 5</li>
    12            </>
    13        );
    14    };
    15
    16    renderList2 = () => {
    17        return (
    18            <>
    19                <li>Item 6</li>
    20                <li>Item 7</li>
    21                <li>Item 8</li>
    22                <li>Item 9</li>
    23                <li>Item 10</li>
    24            </>
    25        );
    26    };
    27
    28    render() {
    29        return (
    30            <>
    31                <div>
    32                    <ul>
    33                        {this.renderList1()}
    34                        {this.renderList2()}
    35                    </ul>
    36                </div>
    37            </>
    38        );
    39    }
    40}
    41
    42export default Example1;

jsx

Once you run the above example, you can see that the set of JSX elements coming from a collection of the function gets rendered inside the single<span class="jsx-3120878690">`<ul>`</span> element as an unordered list.

You can try creating the function and returning the set of JSX elements. By using the functional rendering approach, code will be easy to manage and pretty effective to combine child nodes using the JSX syntax.

Conclusion
----------

JSX is always a handy option for React.js developers because of JavaScript within the HTML mark-up, and rendering the parent-child JSX elements is an easier way than ever before because of its straight-forward syntax.

You can try combining the parent and child nodes and render the child nodes conditionally; this is how you can implement JSX effectively with your React app.

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

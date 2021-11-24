<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Pass Props through a Component's Render Function
================================================

### Zachary Bennett

-   Nov 9, 2020
-   4 Min read
-   1,117 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   1,117 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-passingprops" class="menu-link">Passing Props</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The tree structure is closely linked to any programming that happens within the browser. The document object model, or DOM for short, contains all of the HTML elements to be displayed on a page and is a large tree structure itself. So, it naturally follows that the React component hierarchy will be modeled in the same fashion, albeit with JavaScript as opposed to raw HTML.

React components contain child components that can contain more children and so on. This parent-child relational structuring of components means that when you write code in React, you often need to pass data down from parent to child. One of the main ways to achieve this is through the passing of component props.

In this guide, you will learn about one of the primary mechanisms for passing data to child components: passing props to children inside of the <span class="jsx-3120878690">`render`</span> function.

Let's get started!

Passing Props
-------------

Passing props through to child components from a parent component is very straightforward. First, ensure you have a parent component. In the example below, a root-level React component named <span class="jsx-3120878690">`MyApp`</span> serves as the parent component.

From here, you can create the child components that you need. In the example below, there are three child components: <span class="jsx-3120878690">`TitleBar`</span>, <span class="jsx-3120878690">`NavBar`</span>, and <span class="jsx-3120878690">`DataView`</span>. These three components expect their data to come via props passed in from a parent component. You can achieve this by passing these props through to the child components when they are declared inside of the parent component <span class="jsx-3120878690">`render`</span> function. The code below displays this possibility.

    1import React from 'react';
    2
    3class MyApp extends React.Component {
    4    dataPoints = [ 1, 2, 3, 4, 5 ];
    5    title = "Welcome To My App!";
    6    navStructure = [
    7        {
    8            text: "Home",
    9            url: "/home"
    10        },
    11        {
    12            text: "About",
    13            url: "/about"
    14        },
    15        {
    16            text: "Contact Us",
    17            url: "/contact-us"
    18        }
    19    ];
    20
    21
    22
    23    render() {
    24        const { title, navStructure, dataPoints } = this.props;
    25
    26        return (
    27            <div>
    28                <TitleBar title={ title } />
    29                <NavBar navStructure={ navStructure }>
    30                <DataView data={ dataPoints }>
    31            </div>
    32        )
    33    }
    34
    35}

jsx

As you can see, the parent component <span class="jsx-3120878690">`MyApp`</span> declares three properties when it is instantiated. These properties are <span class="jsx-3120878690">`dataPoints`</span>, <span class="jsx-3120878690">`title`</span>, and <span class="jsx-3120878690">`navStructure`</span>. Next, looking closely at the <span class="jsx-3120878690">`render`</span> function, you can see that our aforementioned child components are declared within it. Furthermore, each one of the declared component properties is passed through to the correct child component. The syntax above is the syntax that is needed in order to facilitate this specific type of data transfer within React.

Conclusion
----------

Passing data by way of props from parent components to child components is a crucial part of how React apps are structured from a data transfer perspective. React largely adheres to a top-down approach when it comes to passing data through from parent to child components. A component's <span class="jsx-3120878690">`render`</span> function is the place where this transfer of data happens.

But this isn't the only way to pass data by any means! You can pass component state from parent to child as well. Not only this, but the new context API along with React portals can allow you to transfer data in a variety of other ways that can potentially better suit your app needs.

For more information regarding React and the different ways that you can transfer data within your app, please check out the React [documentation](https://reactjs.org/docs/components-and-props.html).

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

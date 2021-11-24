<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Migrating jQuery Code to React.js
=================================

### Raphael Alampay

-   Sep 28, 2020
-   7 Min read
-   7,822 Views

-   Sep 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   7,822 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-referencingdomelements" class="menu-link">Referencing DOM Elements</a>
-   <a href="#module-managingstate" class="menu-link">Managing State</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

jQuery is a widely used JavaScript framework for frontend web development. Some of its main strengths include easily referencing DOM elements, applying actionable items to elements—such as logic when clicking a button—and extensibility with a wide array of libraries already available. However, jQuery tends to do a lot of things that standard JavaScript can already do. Additionally, state management isn't ready-baked, which React.js already solves as its primary feature.

Companies like Github are [starting to move away from jQuery](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/) toward other things, even vanilla JavaScript. If you plan to slowly transition your existing jQuery code to React.js, this guide will show you a few things you might want to watch out for.

Referencing DOM Elements
------------------------

Both jQuery and React.js reference target DOM elements to add additional processing, but their approaches are fundamentally different. Given the following HTML:

    1<button id="btn-click">
    2  Click Me
    3</button>

HTML

How does each JavaScript framework attach clickable function logic to it?

### jQuery

    1var $btnClick = $("#btn-click");
    2
    3$btnClick.on("click", function() {
    4  alert("Button was clicked!");
    5});

javascript

As you can see in jQuery, a developer would have to first reference the DOM element using the <span class="jsx-3120878690">`$()`</span> function and passing either an id reference <span class="jsx-3120878690">`#`</span> or a class reference <span class="jsx-3120878690">`.`</span>. The click-event handler is then passed as a first argument string to the <span class="jsx-3120878690">`on()`</span> function call of a queried element. The second argument is the function itself, which in this case simply alerts, "Button was clicked!"

### React.js

If in jQuery, JavaScript is treated separately from HTML elements (thus the "query" part), React.js treats the rendered HTML UI as part of the container in what's referred to as a component. The component will contain all the necessary elements to be rendered in a target <span class="jsx-3120878690">`<div>`</span>. The <span class="jsx-3120878690">`<button>`</span> element itself will not be part of the initial HTML. Instead, you might have the following <span class="jsx-3120878690">`<div>`</span> element:

    1<div id="react-root"></div>

HTML

You would first have to define a component in a separate JavaScript file that renders the button:

    1import React from 'react';
    2
    3export default class ButtonComponent extends React.Component {
    4  constructor(props) {
    5    super(props);
    6  }
    7
    8  handleButtonClicked() {
    9    alert("Button was clicked!");
    10  }
    11
    12  render() {
    13    return (
    14      <div>
    15        <button onClick={this.handleButtonClicked.bind(this)}>
    16          Click Me
    17        </button>
    18      </div>
    19    );
    20  }
    21}

javascript

All HTML elements to be rendered by a component are returned as JSX, an extension to JavaScript that allows declaration of HTML-like elements in React.js to define how an interface should be rendered. Notice that no <span class="jsx-3120878690">`id`</span> attribute was set to the <span class="jsx-3120878690">`<button>`</span> element. Instead, you attach an event handler that points to the method definition of <span class="jsx-3120878690">`handleButtonClicked()`</span>. You include a <span class="jsx-3120878690">`.bind(this)`</span> to allow the value of <span class="jsx-3120878690">`this`</span> to be retained throughout the function call. This is a way to pass the instance of the component itself, exposing other methods both innate to a <span class="jsx-3120878690">`React.Component`</span>, such as <span class="jsx-3120878690">`setState()`</span>, or user-defined. You could say that no explicit reference was needed. The main difference compared to jQuery is that a React.js component will store all its UI needs as opposed to jQuery, which assumes that the UI element is rendered in HTML.

Managing State
--------------

Managing the value of a JavaScript variable within a page can tend to get messy. For example, suppose you have a variable called <span class="jsx-3120878690">`message`</span> representing a shoutout in your application. You'd like to have that <span class="jsx-3120878690">`message`</span> displayed within a container <span class="jsx-3120878690">`<div>`</span> like so:

    1<div id="message">Message goes here</div>

HTML

### jQuery

In a jQuery approach, everything is still read from top to bottom. You might have the following code to first extract the current message:

    1var message = $("#message").html();

javascript

To update the message, you have to reference the <span class="jsx-3120878690">`<div>`</span> again and insert the new value:

    1var message = "New message"; // Normally set by some other logical routine
    2
    3$("#message").html(message);

javascript

One downside to this approach is that the message has to be set multiple times—once for extracting the value and again for assigning a new value to it. Furthermore, additional code is needed to insert the <span class="jsx-3120878690">`message`</span> back to the target <span class="jsx-3120878690">`<div>`</span>. This tends to get messy, especially if you have another routine that might set a new value for <span class="jsx-3120878690">`message`</span>. In that case, you would have to call <span class="jsx-3120878690">`$("#message").html(message)`</span> again.

### React.js

React.js solves this problem by maintaining a single instance of a variable through a component's <span class="jsx-3120878690">`state`</span>. Each React.js component will have a <span class="jsx-3120878690">`state`</span> object defined within it and is initinalized in the component's constructor. For example, suppose that you want to maintain that same <span class="jsx-3120878690">`message`</span> value, and whatever logical routine would affect its value would automatically reflect in the component's UI. You might have the following:

    1import React from 'react';
    2
    3export default class MessageComponent extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: ""
    9    }
    10  }
    11
    12  updateMessage(message) {
    13    this.setState({
    14      message: message
    15    });
    16  }
    17
    18  render() {
    19    return (
    20      <div>
    21        {this.state.message}
    22      </div>
    23    );
    24  }
    25}

javascript

Notice that you set the <span class="jsx-3120878690">`message`</span> initially in the component's <span class="jsx-3120878690">`state`</span> within the constructor. The component has a method called <span class="jsx-3120878690">`updateMessage(message)`</span>, which in turn calls a component's <span class="jsx-3120878690">`setState()`</span> method to update the value of <span class="jsx-3120878690">`message`</span>. The idea here is that every time <span class="jsx-3120878690">`setState()`</span> is called, the component will re-render the UI as called in <span class="jsx-3120878690">`render()`</span>, since <span class="jsx-3120878690">`render()`</span> returns JSX that displays the <span class="jsx-3120878690">`message`</span> via <span class="jsx-3120878690">`this.state.message`</span> with whatever value it currently has.

Conclusion
----------

React.js may seem complicated at first, but in terms of maintainability in the long run, it tends to keep everything organized by using proper state management. jQuery is easy to use but tends to get messy as more code is added to the mix. If you plan to migrate to React.js from a jQuery setup, always keep in mind the following:

1.  Design your components as independent UI elements that can be mounted to your page.
2.  Use state variables and utility methods within a component to control how values are rendered by the component.
3.  A call to <span class="jsx-3120878690">`setState()`</span> will invoke a re-render of the component's UI via <span class="jsx-3120878690">`render()`</span> together with the updated state values.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

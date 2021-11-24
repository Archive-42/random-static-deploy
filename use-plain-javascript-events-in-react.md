<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Use Plain JavaScript Events in React
====================================

### Gaurav Singhal

-   Nov 18, 2020
-   4 Min read
-   4,877 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   4,877 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-eventlistenerandtheeventfunction" class="menu-link">Event Listener and the Event Function</a>
-   <a href="#module-implementingjavascriptclickevent" class="menu-link">Implementing JavaScript `click` Event</a>
-   <a href="#module-implementingjavascriptchangeevent" class="menu-link">Implementing JavaScript `change` Event</a>
-   <a href="#module-removetheeventlistenerandassignedeventfunction" class="menu-link">Remove the Event Listener and Assigned Event Function</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React supports events that are supported in JavaScript, and it works similarly, but the significant difference is its way of using the events. There are two significant differences:

-   To use JavaScript events in React, you need to name it in camel case such as <span class="jsx-3120878690">`eventName()`</span>.
-   If you use JSX with React, then you need to pass the event as a string with the event handler.

JavaScript events are used to perform various operations based on events such as click, touch, up, and down. All the events, called *synthetic events*, can be used in React. This guide will demonstrate how to use plain JavaScript events within React components.

Event Listener and the Event Function
-------------------------------------

Unlike JavaScript, React does not allow you to use event names as you do with JavaScript, like <span class="jsx-3120878690">`onclick()`</span>; hence you need to follow the event name as <span class="jsx-3120878690">`onClick()`</span>.

You can still use plain JavaScript events using the <span class="jsx-3120878690">`window`</span> object used to represent the DOM document opened in the current browser window.

Implementing JavaScript \`click\` Event
---------------------------------------

A click event is the most common event used to trigger a function based on the click event on the elements such as button, label, span, link, etc. To add the click event in React using plain JavaScript, you need to use <span class="jsx-3120878690">`addEventListener()`</span> to assign the click event to an element.

Create one <span class="jsx-3120878690">`<button>`</span> element as <span class="jsx-3120878690">`ref`</span> props so that it can be accessed to trigger the click event.

    1render() {
    2    return (
    3      <>
    4        <button ref={mybutton => (this.btn = mybutton)}>Click me</button>
    5      </>
    6    );
    7}

jsx

The <span class="jsx-3120878690">`<button>`</span> element has additional props called <span class="jsx-3120878690">`ref`</span> that are used to find the element from the DOM. To assign the JavaScript click event handler, you can implement it as demonstrated below.

    1componentDidMount() {
    2    this.btn.addEventListener("click", this.onButtonClick);
    3}

jsx

<span class="jsx-3120878690">`addEventListener()`</span> assigns the event handler and the event name to do an activity once the button gets clicked.

    1onButtonClick() {
    2    alert("Clicked on Button");
    3}

jsx

Once you click the button, it will show the alert box that the click event is triggered.

Implementing JavaScript \`change\` Event
----------------------------------------

The change event triggers the event based on the existing value and processes changes based on the changed value. Using the <span class="jsx-3120878690">`addEventListener()`</span>, you can assign <span class="jsx-3120878690">`change`</span> as the event handler followed by the event handler function as given below.

    1componentDidMount() {
    2    this.input.addEventListener("change", e => this.onChange(e));
    3}

jsx

Then, you can implement the event handler function to process the updated values.

    1onChange(e) {
    2    console.log("Updated values is :-", e.target.value);
    3}

jsx

Alternatively, you can remove the listener using <span class="jsx-3120878690">`document.getElementByID()`</span> along with the <span class="jsx-3120878690">`addEventListener()`</span> as given below.

    1document.getElementById("#your_id").addEventListener("change", this.onChange);

jsx

Remove the Event Listener and Assigned Event Function
-----------------------------------------------------

So far, this guide has shown how to define the JavaScript event handler and associated event handler function. But you should remove the listener once the current component gets unmounted from the DOM.

To remove the event listener, you can use <span class="jsx-3120878690">`removeEventListener()`</span> along with the event type and the event handler function.

    1componentWillUnmount() {
    2    this.btn.removeEventListener("click", this.onButtonClick);
    3    this.input.removeEventListener("change", e => this.onChange(e));
    4}

jsx

As you can see in the above code, the <span class="jsx-3120878690">`componentWillUnmount()`</span> function is implemented for anything that needs to get removed, such as promises and events.

Inside the function, two events removed are from the DOM, <span class="jsx-3120878690">`click`</span> and <span class="jsx-3120878690">`change`</span>, followed by the event handler function, so you can use the <span class="jsx-3120878690">`removeEventListener()`</span> to remove the attached events from the component.

Alternatively, you can remove the listener using <span class="jsx-3120878690">`document.getElementByID()`</span> along with <span class="jsx-3120878690">`removeEventListener()`</span>.

    1document.getElementById("#your_id").removeEventListener("change", this.onChange);

jsx

Conclusion
----------

React supports most of the JavaScript events but with a different version of the naming convention; hence, you should only use the React-based naming convention and not the plain JavaScript events with the React elements.

Events handle the element's response based on actions such as click, touch, drag, up, down, etc. To perform specific events, you can use various React synthetic events to trigger any actions.

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

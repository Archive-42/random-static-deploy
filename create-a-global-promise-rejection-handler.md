<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Create a Global Promise Rejection Handler
=========================================

### Zachary Bennett

-   Nov 4, 2020
-   4 Min read
-   2,495 Views

-   Nov 4, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   2,495 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-theonunhandledrejectioneventhandler" class="menu-link">The 'onunhandledrejection' Event Handler</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Promises changed the game when it came to modeling asynchronous tasks within a JavaScript program. They can allow you to refactor huge swathes of code that are mired inside of "callback hell," a term coined to describe code bases that relied upon callbacks in order to model asynchronous actions. Callbacks allowed for a lot of nested code, and they weren't that great when it came to handling errors either. The error-handling convention with callbacks was that you would ensure that the first parameter within your callback function would house a potential error. You would then have to check if that parameter existed in order to ensure that you handled it correctly. Promises built on this with the <span class="jsx-3120878690">`catch`</span> method for handling errors. The <span class="jsx-3120878690">`catch`</span> method ensures that any upstream errors will be handled.

This guide will demonstrate how to take this a step further and add a global promise rejection handler so that you can capture every single instance of a rejected promise at runtime within your program.

Let's get started.

The 'onunhandledrejection' Event Handler
----------------------------------------

Circa 2016, browsers provided developers a new, globally available property that an event handler could be assigned to. The <span class="jsx-3120878690">`onunhandledrejection`</span> event occurs every time that a promise rejection is not handled. In the below code, you can see an example of a rejected promise that goes unhandled.

    1const myPromise = new Promise((resolve, reject) => {
    2    reject('Ouch');
    3});
    4
    5myPromise.then(() => {
    6    console.log('Hello world');
    7});
    8
    9// An Unhandled Promise Rejection Error will occur ^^

javascript

The simple code example above creates a promise that will always be rejected. When an attempt to resolve the promise is made, an error will occur because there was no <span class="jsx-3120878690">`catch`</span> method used to handle any potential errors. This caused an uncaught error to bubble up within the app!

<span class="jsx-3120878690">`onunhandledrejection`</span> event handler to the rescue! With the <span class="jsx-3120878690">`onunhandledrejection`</span> event handler, you can provide a global failsafe that will catch all rejected promises that go unhandled.

The code below has been updated to provide our global promise rejection handler.

    1// This function handles any unhandled promise rejections
    2const globalPromiseRejectionHandler = (event) => {
    3    console.log('Unhandled promise rejection reason: ', event.reason);
    4}
    5
    6// Here we assign our handler to the corresponding global, window property
    7window.onunhandledrejection = globalPromiseRejectionHandler;
    8
    9const myPromise = new Promise((resolve, reject) => {
    10    reject('Ouch');
    11});
    12
    13myPromise.then(() => {
    14    console.log('Hello world');
    15});

javascript

And voila! No more uncaught errors. When you use the code directly above, you should see a message in the console that reads, <span class="jsx-3120878690">`Unhandled promise rejection reason:                                       Ouch`</span>. Simply by creating a function event handler and assigning it to the <span class="jsx-3120878690">`onunhandledrejection`</span> property on the globally available window object, you have created a safe means of catching any unhandled promise rejections within your app. This technique is very useful for logging purposes but also allows you a safe fallback any time that a <span class="jsx-3120878690">`catch`</span> method is not used when it should be.

> Note: Where possible, attempt to always use the <span class="jsx-3120878690">`catch`</span> method in order to handle promise rejections close to where they occur.

Conclusion
----------

Promises are a huge improvement to the JavaScript ecosystem both in terms of modeling asynchronous actions and when it comes to handling errors.

By using the globally available <span class="jsx-3120878690">`onunhandledrejection`</span> property, you can easily create an event handler that will catch any errors at runtime. This can prevent a lot of undefined behavior from happening in your app at runtime. And that's always a good thing for the user!

For more information about the <span class="jsx-3120878690">`onunhandledrejection`</span> property, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

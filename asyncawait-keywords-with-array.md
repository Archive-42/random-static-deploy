<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Async/Await Keywords with Array.Map in React
============================================

### Zachary Bennett

-   Oct 10, 2020
-   5 Min read
-   9,377 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   9,377 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

12

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-asyncawaitoverview" class="menu-link">Async/Await Overview</a>
-   <a href="#module-usingasyncfunctionswitharraymap" class="menu-link">Using Async Functions With Array.map</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Asynchronous code is notoriously hard to understand and debug. All sorts of languages have different constructs for helping to manage this complexity. For the longest time, the only way to manage asynchronous code while using JavaScript was to use callbacks. Callbacks are functions that "call back" (execute) when an asynchronous piece of code is done running. The problem with this technique was that it led to badly nested asynchronous code that was really hard to reason about! "Callback hell" was a term coined during this time period.

As JavaScript progressed, promises were added to the language in order to help better reason about asynchronous code and to provide a "then-able" construct for executing long-running operations. However, promises still involved some manner of function nesting and sometimes could be harder to reason about than callbacks (depending upon the problem at hand). The async/await syntax is the solution to this problem. By providing a form of "syntactic sugar" on top of promises, the <span class="jsx-3120878690">`async`</span> and <span class="jsx-3120878690">`await`</span> keywords make asynchronous code look like synchronous code! Using these keywords can help dramatically simplify your code.

In this guide, we will specifically talk about how to use async/await syntax with the <span class="jsx-3120878690">`Array.map`</span> function available to all arrays in JavaScript. You will learn how to easily execute many asynchronous pieces of code in parallel using nothing but pure JavaScript.

Let's get started!

Async/Await Overview
--------------------

The async/await keywords are a wonderful mechanism for modeling asynchronous control-flow in computer programs. In JavaScript, these keywords are "syntactic sugar" on top of promises—they abstract away any calls you need to make to <span class="jsx-3120878690">`Promise.then`</span>. In the following code, you can see an example of an asynchronous function within a React component:

    1...
    2
    3executeLongRunningTask = async () => {
    4    const response = await fetch(this.taskUrl);
    5    return await response.json();
    6}
    7
    8...

jsx

The code above fetches some JSON from an API. You can see that the <span class="jsx-3120878690">`async`</span> keyword is used in front of the function declaration. This enables you to use the <span class="jsx-3120878690">`await`</span> keyword to synchronously resolve promises within the function. When you use the <span class="jsx-3120878690">`await`</span> keyword, you are guaranteed that the execution of your function will pause until <span class="jsx-3120878690">`await`</span> finishes resolving your promise.

Now that you have seen and understand how to use async/await syntax, let's see how you can use it with <span class="jsx-3120878690">`Array.map`</span> to compose many long-running tasks.

Using Async Functions With Array.map
------------------------------------

<span class="jsx-3120878690">`Array.map`</span> is a function available on the Array prototype hierarchy. This essentially means that any JavaScript array has access to the <span class="jsx-3120878690">`map`</span> function. This function receives a function as an argument and calls the given function for each item in the array, returning a value for each item that is iterated over. What's so powerful about this is that you can use <span class="jsx-3120878690">`Array.map`</span> with an async function in order to generate an array of promises! This means that you can iterate over items in an array and return a promise for each one of these items in a succinct and readable manner. In the below code, you can see the updated function that composes many long-running tasks.

    1...
    2
    3private taskUrls = [taskOneUrl, taskTwoUrl, taskThreeUrl];
    4
    5executeLongRunningTask = async (url) => {
    6    return await fetch(url).then(response => response.json());
    7}
    8
    9executeAllLongRunningTasks = async () => {
    10    return await Promise.all(taskUrls.map(this.executeLongRunningtask);
    11}
    12
    13...

jsx

As you can see, in the above code the <span class="jsx-3120878690">`executeLongRunningTask`</span> async function is passed into the <span class="jsx-3120878690">`map`</span> call, which is mapping over a list of task URLs. For each of these URLs, a promise is returned. At the end of this iteration, an array of promises is generated. This enables the use of <span class="jsx-3120878690">`Promise.all`</span>, which attempts to resolve every promise within an array in parallel and have itself resolve when all of the promises within it are complete.

You can now use this <span class="jsx-3120878690">`executeAllLongRunningTasks`</span> function to log your new array of resolved task responses to the console like this:

    1...
    2
    3this.executeAllLongRunningTasks().then(console.log);
    4
    5...

jsx

Or, if you want to use it within an async function or top-level async module:

    1...
    2
    3const tasks = await this.executeAllLongRunningTasks();
    4console.log(tasks);
    5
    6...

jsx

Conclusion
----------

The async/await keywords are an extremely powerful means of reasoning about asynchronous code. Using them will make your code more readable and thus more maintainable. When using async/await alongside <span class="jsx-3120878690">`Array.map`</span>, you have a powerful means of executing many asynchronous functions either in sequence or in parallel.

You can now be confident when it comes to composing asynchronous functions using <span class="jsx-3120878690">`Array.map`</span>! For more information, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) for async/await syntax.

12

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

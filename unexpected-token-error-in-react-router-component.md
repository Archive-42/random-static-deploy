<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Unexpected Token Error in React Router Component
================================================

### Gaurav Singhal

-   Nov 12, 2020
-   4 Min read
-   6,636 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   6,636 Views

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
-   <a href="#module-understandingtheproblem" class="menu-link">Understanding the Problem</a>
-   <a href="#module-handlingruntimeerror" class="menu-link">Handling Runtime Error</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React Router is a go-to routing library in the React ecosystem. React Router provides a declarative and easy API to handle navigation and add pages in the app. One of the most common errors developers face while working with front-end apps is the unexpected token error. It doesn't matter which framework you are using; you will stumble upon this error more frequently than you think.

Like other JavaScript libraries, React also has a built-in error page, which renders on the screen when there's a problem in your code. In this guide, you will learn what causes the unexpected token error to show up and also how to fix it.

Understanding the Problem
-------------------------

In this section, you'll see why JavaScript throws the unexpected token error. Take a look at the example below.

    1const randomNum = Math.random();

js

In the above line of code, the <span class="jsx-3120878690">`random()`</span> method of the in-built <span class="jsx-3120878690">`Math`</span> object is invoked. It is a correct line and hence won't throw any errors.

Now, consider the following line.

    1const randomNum = Math.random());

js

Notice that now there is an extra ")" in the end. The JavaScript compiler won't be able to parse this line and throw an unexpected token error.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token) defines the error as follows.

> The JavaScript exceptions "unexpected token" occurs when a specific language construct was expected, but something else was provided. This might be a simple typo.

Fortunately for developers, such errors are highlighted by the linters in code editors, so developers can fix it even before the app runs in the browser.

Handling Runtime Error
----------------------

There are instances when an error occurs during runtime. Take a look at the following scenario to React. As soon as the app starts, it shows the React error page saying "unexpected token '&lt;'".

When you see this error, you start going through the code, to find the problematic line. But often, runtime errors are caused because of an external factor. Your code must be expecting JSON data to be returned from a backend service. Instead, it returns data in XML format, which cannot be parsed by the JavaScript compiler.

Another reason could be that the JavaScript file that is referenced in the HTML page does not exist on the server. This behavior depends on the server configuration of the app. Some servers return HTML responses to display HTTP errors.

But what if the first page renders fine, but consequent pages show the unexpected token error? In this case, the JavaScript path must be referenced relatively. When using relative paths, the browser tries to load the app relative to the current URL of the page. So for example, if the JavaScript file is loaded using <span class="jsx-3120878690">`./app.js`</span> path, when the index page loads the browser sends a request to <span class="jsx-3120878690">`/app.js`</span>, which is successful. But when the user navigates to another page, the browser sends a request to <span class="jsx-3120878690">`/another-page/app.js`</span>, which is an incorrect path in the server.

Conclusion
----------

Tracking down runtime errors can be a pain, especially when the dev tools aren't helping much. Hence, it is crucial to understand the code and logically find the bug.

You can use debugger statements to control the flow of execution and inspect variables in real time when the app is running. The networks tab is also an essential section of the dev tools, which lets you see all the outgoing requests and incoming responses in the browser. If you have any queries, feel free to ask at [Codealphabet](https://codealphabet.com/contact).

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

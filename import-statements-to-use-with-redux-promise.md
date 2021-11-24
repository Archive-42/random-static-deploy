<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Import Statements to Use with Redux-Promise
===========================================

### Gaurav Singhal

-   Oct 19, 2020
-   4 Min read
-   987 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   987 Views

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
-   <a href="#module-whatismiddlewareinredux" class="menu-link">What Is Middleware in Redux?</a>
-   <a href="#module-usingreduxpromiseinreactapp" class="menu-link">Using Redux-Promise in React App</a>
-   <a href="#module-applyingreduxpromisemiddlewaretostore" class="menu-link">Applying Redux-Promise Middleware to Store</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React uses Redux as a state management library that creates the global state object using the store, and any component can access the global state by subscribing to the store value in the component. Redux allows you to create the global state using a store that can get accessed from any of the components across the app, but if you want to log or trigger an action between action dispatch, you need to use *middleware.*

You can use a promise to evaluate the action and define success or failure. Thus, each action in Redux should return a response. You'll learn more about using Redux Promise in this guide.

What Is Middleware in Redux?
----------------------------

Middleware in Redux evaluates the action; in other words, you can say that middleware is just a piece of code that triggers between the request to the server.

You can use middleware to see the triggered action, the request payload, the response coming from the server, response status, and other middleware, such as <span class="jsx-3120878690">`redux-logger`</span> to log the request.

Using Redux-Promise in React App
--------------------------------

You can use a promise to represent a value based on the request data, either the resolved value or why the request is unresolved.

JavaScript uses promises subscribed by a function, and the same function knows how to request status and resolve or reject the promise.

RR The <span class="jsx-3120878690">`redux-promise`</span> is an npm package that acts as a middleware for Redux and returns the object if it gets resolved. But it won’t return anything if rejected.

To use <span class="jsx-3120878690">`redux-promise`</span>, install it using the below command.

    1npm install redux-promise

shell

After installing <span class="jsx-3120878690">`redux-promise`</span>, the next step is to import the library.

    1import promiseMiddleware from "redux-promise";

jsx

The import syntax is pretty simple to use from the package. You need to import by its name, such as <span class="jsx-3120878690">`promiseMiddleware`</span> or any other custom name, and you are good to go.

Applying Redux-Promise Middleware to Store
------------------------------------------

To make <span class="jsx-3120878690">`redux-promise`</span> work, configure it with the store so that once the app hits the server endpoint, the promise will start triggering the actions.

Before applying the middleware, the Redux store needs to be created, as shown below.

    1import { createStore, combineReducers, applyMiddleware } from "redux";
    2// Primary reducer
    3import { contacts } from "../reducer";
    4// Importing redux-promise with custom name
    5import promiseMiddleware from "redux-promise";
    6
    7export default () => {
    8  const rootReducer = combineReducers({
    9    contacts
    10  });
    11
    12  // Applied middleware using 'applyMiddleware'
    13  return createStore(rootReducer, applyMiddleware(promiseMiddleware));
    14};

js

There are two import statements: import the reducer and import the <span class="jsx-3120878690">`redux-promise`</span> package. You can create the store using the function <span class="jsx-3120878690">`createStore`</span>, which accepts two different arguments:

-   Root reducer
-   Middleware function

The middleware function also expects the number of middleware functions in custom middleware implementation, or the package's name is used.

In the above example, the <span class="jsx-3120878690">`redux-promise`</span> package used is a middleware; hence, it is applied to the store using the <span class="jsx-3120878690">`applyMiddleware`</span> function. You will receive a payload that includes two arguments after applying the <span class="jsx-3120878690">`redux-promise`</span>:

-   Payload status as success to true if the promise gets resolved.
-   Payload status as success to false if the promise gets rejected.

You can configure the dispatch action as given below.

    1store.dispatch({
    2    type: 'ADD_CONTACT',
    3    resolvesWith: ['CONTACT_ADDED'],
    4    rejectsWith: ['CONTACT_FAILED'],
    5    payload: {
    6        name: "This is first contact"
    7    }
    8})

js

<span class="jsx-3120878690">`resolvesWith`</span> and <span class="jsx-3120878690">`rejectsWith`</span> define the type of action if contact is added or failed due to inevitable results. Hence, the respected action is dispatched based on the promise status.

Conclusion
----------

Redux middleware is the utility to help maintain the request and response triggered by a dispatch from a React component. It is widely used because of its straightforward configuration and the ability to resolve or reject the library's requests, such as <span class="jsx-3120878690">`redux-promise`</span>. I hope this sustainable solution will drive you to configure the best possible promise configuration with the Redux app.

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

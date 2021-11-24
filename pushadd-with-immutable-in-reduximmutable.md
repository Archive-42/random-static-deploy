<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Push or Add with the Immutability Operation in Redux and Immutable.js
=====================================================================

### Gaurav Singhal

-   Oct 29, 2020
-   5 Min read
-   184 Views

-   Oct 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   184 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whyarereduxandimmutablejsused" class="menu-link">Why are Redux and Immutable.js Used?</a>
-   <a href="#module-howtopushoraddusingreduximmutable" class="menu-link">How to Push or Add Using redux-immutable</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React uses Redux as a state management library, which creates the global state object with the store's help, and all child components can subscribe and use the piece of the global state as a prop. The Redux state is immutable. Once new action triggers, the new state values get reflected. To improve immutability, a library such as redux-immutable can be used. This will also ensure the highest possible performance by implementing immutability.

This guide will help you learn about the immutability operation with Redux, which you can use to push or add a new item to the state.

Why are Redux and Immutable.js Used?
------------------------------------

Immutability is a crucial aspect of app performance. To manage immutability across the app, along with the Redux, <span class="jsx-3120878690">`redux-immutable`</span> is used. When an action is dispatched from a component, the associated network call triggers and returns the response. And then the same response should get added as a new object into the existing data structure.

By following the complete Redux cycle, the app ensures that no state object is mutated accidentally, and the new state object gets returned from the store.

How to Push or Add Using redux-immutable
----------------------------------------

To push or add new objects into the existing data structure, first install the given libraries.

    1npm install immutable
    2npm install redux-immutable

shell

After installing both libraries, you will be able to implement an immutable collection.

The <span class="jsx-3120878690">`redux-immutable`</span> library, used along with the library <span class="jsx-3120878690">`immutable`</span> as a supporting library, creates the instance of <span class="jsx-3120878690">`Immutable.Collection`</span>.

Open **store.js** file and paste the below lines of code.

    1import { createStore, applyMiddleware } from "redux";
    2import thunk from "redux-thunk";
    3import { createLogger } from "redux-logger";
    4// Used immutable
    5import Immutable from "immutable";
    6// Used redux-immutable
    7import { combineReducers } from "redux-immutable";
    8import reducers from "../reducers";
    9
    10const logger = createLogger();
    11
    12const reducer = combineReducers(reducers);
    13
    14const store = createStore(
    15  reducer,
    16  Immutable.Map({}),
    17  applyMiddleware(thunk, logger)
    18);
    19
    20export default store;

js

In the above file of the store configuration, the store creation done is via the function <span class="jsx-3120878690">`combineReducer()`</span>, which is imported from <span class="jsx-3120878690">`redux- immutable`</span>.

    1const reducer = combineReducers(reducers);

js

And the <span class="jsx-3120878690">`combineReducers()`</span> function accepts one argument as a collection of reducer, i.e., root reducer representing the single store state object. Another statement to note is the initialization of the immutable collection.

    1Immutable.Map({})

js

The above statement initializes the state with the state's empty initial value, which is, by default, immutable. After configuring the store, the next step is to create the reducer and push or add the object into the state.

**Todo.js (Reducer)**

    1import _ from "lodash";
    2import { createReducer } from "redux-create-reducer";
    3import Immutable from "immutable";
    4
    5const initialState = Immutable.fromJS([
    6    {
    7        done: true,
    8        id: _.uniqueId(),
    9        name: "TODO 1"
    10    },
    11    {
    12        done: false,
    13        id: _.uniqueId(),
    14        name: "TODO 2"
    15    }
    16]);
    17
    18const ADD_TODO = (domain, action) => {
    19    return domain.push(
    20        Immutable.Map({
    21            done: false,
    22            id: _.uniqueId(),
    23            name: action.data.name
    24        })
    25    );
    26};
    27
    28export default createReducer(initialState, {
    29    ADD_TODO
    30});

js

In the above reducer file, there is one <span class="jsx-3120878690">`const`</span> called <span class="jsx-3120878690">`initialState`</span> containing the list of initial <span class="jsx-3120878690">`todos`</span>, but the object is surrounded by the immutable initialization function, as shown below.

    1const initialState = Immutable.fromJS([
    2    {
    3        done: true,
    4        id: _.uniqueId(),
    5        name: "TODO 1"
    6    },
    7    {
    8        done: false,
    9        id: _.uniqueId(),
    10        name: "TODO 2"
    11    }
    12]);

js

The function <span class="jsx-3120878690">`fromJS()`</span> maps the objects as immutable objects, and you can add or push a new object as demonstrated below.

    1return domain.push(
    2        Immutable.Map({
    3            done: false,
    4            id: _.uniqueId(),
    5            name: action.data.name
    6        })
    7);

js

<span class="jsx-3120878690">`domain.push()`</span> is used to add new todo items into the existing todo object, which is the opposite of ordinary object assignment. And the final step is to assign the store to the app, as shown below.

**Index.js**

    1import React from "react";
    2import { render } from "react-dom";
    3import { Provider } from "react-redux";
    4import App from "./components/App";
    5// Store with immutability
    6import store from "./store";
    7
    8render(
    9  <Provider store={store}>
    10    <App />
    11  </Provider>,
    12  document.getElementById("root")
    13);

js

The created store is imported into the React app's index and assigned to the provider so that once you dispatch the action, the new object is added to the global state object.

Conclusion
----------

Immutability is one solution that can help overcome app performance issues by following immutability best practices instead of using the ordinary way of mutating a Redux state object.

You can use an immutable library, and specifically for React, <span class="jsx-3120878690">`redux-immutable`</span> is one of the best choices to implement immutability in no time. I hope this guide helps you apply the best possible immutability tactics.

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

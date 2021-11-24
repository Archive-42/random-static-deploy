<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Add a Base URL to an App Using Redux and React Router
=====================================================

### Gaurav Singhal

-   Nov 1, 2020
-   5 Min read
-   30,501 View s

-   Nov 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min </span> read
-   30,501 View s

<span class="jsx-3759398792"> </span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"> </span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"> </span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"> </span>

<span data-css-1997kh1="">React</span>

Introduction

15

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-reactrouterexample" class="menu-link">React-Router Example</a>
-   <a href="#module-integratingredux" class="menu-link">Integrating Redux</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

A primary ingredient in any traditional or single-page app is routing. Routing is the ability to navigate from one page to another. In a typical single-page app, you can use React Router to do the routing for you. But as the app grows and the global state gets complicated, you may need to use a state management library like Redux.

The app may also be running on a different path (<https://example.com/app>) and not on the root domain, adding additional complexity. In this guide, you will learn how to set up a base URL in React Router and how to combine Redux seamlessly.

React-Router Example
--------------------

This section covers how to add a base URL in a simple React app using React Router.

### Install React-Router

The first step is to install the <span class="jsx-3120878690">`react-router-dom`</span> dependency in your app.

    1npm i react-router-dom

### Configure the Routes

Next, add the page components as routes in the app.

    1const HomePage = () => {
    2  return (
    3    <div>
    4      <h2>Home</h2>
    5    </div>
    6  );
    7};
    8
    9const ContactPage = () => {
    10  return (
    11    <div>
    12      <h2>Contact</h2>
    13    </div>
    14  );
    15};
    16
    17const ProfilePage = () => {
    18  return (
    19    <div>
    20      <h2>Profile</h2>
    21    </div>
    22  );
    23};

jsx

Pass the above page components as children to the <span class="jsx-3120878690">`Route`</span> component and wrap with the <span class="jsx-3120878690">`Switch`</span> component from <span class="jsx-3120878690">`react-router-dom`</span>.

    1import { Route, Switch } from "react-router-dom";
    2// ...
    3
    4const Main = () => {
    5  return (
    6    <div className="app">
    7      <Navbar />
    8      <div className="content">
    9        <Switch>
    10          <Route exact path="/">
    11            <HomePage />
    12          </Route>
    13          <Route path="/contact">
    14            <ContactPage />
    15          </Route>
    16          <Route path="/profile">
    17            <ProfilePage />
    18          </Route>
    19        </Switch>
    20      </div>
    21    </div>
    22  );
    23};

jsx

### Adding a Base URL

Import the <span class="jsx-3120878690">`BrowserRouter`</span> component from <span class="jsx-3120878690">`react-router-dom`</span>. The <span class="jsx-3120878690">`BrowserRouter`</span> component has a <span class="jsx-3120878690">`basename`</span> prop, which accepts a string as its value in case the React app is hosted from a sub-directory.

    1import { BrowserRouter } from "react-router-dom";
    2
    3const App = () => {
    4  return (
    5    <BrowserRouter basename="/app">
    6      <Main />
    7    </BrowserRouter>
    8  );
    9};

jsx

Adding <span class="jsx-3120878690">`basename`</span> in the <span class="jsx-3120878690">`BrowserRouter`</span> component ensures that all the links in the routes are prefixed with the base URL. For example, <span class="jsx-3120878690">`<Link to='/contact'                                       />`</span> will be rendered as <span class="jsx-3120878690">`<a                                       href='/app/contact'>`</span>.

Integrating Redux
-----------------

In this section, you will integrate Redux with the above React Router set up.

The <span class="jsx-3120878690">`connected-react-router`</span> package is recommended by the maintainers of React Router for deeper Redux integration. To install <span class="jsx-3120878690">`connected-react-router`</span>, run the following command.

    1npm i connected-react-router

### Creating the history Object

The <span class="jsx-3120878690">`history`</span> object can be used to change the browser's history session programmatically. To create a <span class="jsx-3120878690">`history`</span> object, import the <span class="jsx-3120878690">`createBrowserHistory`</span> function from the <span class="jsx-3120878690">`history`</span> package and create the object as shown below.

    1import { createBrowserHistory } from "history";
    2
    3const history = createBrowserHistory();

jsx

The <span class="jsx-3120878690">`history`</span> package is a dependency of <span class="jsx-3120878690">`react-router-dom`</span>, so you don't have to install it again.

### Create Router Connected Store

Next, connect the history object to the store. To do that, import the <span class="jsx-3120878690">`connectRouter`</span> helper function from <span class="jsx-3120878690">`connected-react-router`</span> package and provide the created history object.

    1import { connectRouter } from "connected-react-router";
    2import { createStore } from "redux";
    3
    4const reducer = (initialState, action) => {
    5  // ...
    6};
    7
    8const store = createStore(connectRouter(history)(reducer));

jsx

### Adding <span class="jsx-3120878690">`routerMiddleware`</span> to Redux

<span class="jsx-3120878690">`routerMiddleware`</span> will dispatch the history actions to the Redux store. Use the <span class="jsx-3120878690">`applyMiddleware`</span> helper function from <span class="jsx-3120878690">`redux`</span> to include <span class="jsx-3120878690">`routerMiddleware`</span> in the app.

    1import { connectRouter, routerMiddleware } from "connected-react-router";
    2import { createStore, applyMiddleware } from "redux";
    3
    4const store = createStore(
    5  connectRouter(history)(reducer),
    6  applyMiddleware(routerMiddleware(history))
    7);

js

### Using ConnectedRouter Component

You're almost done. The last step is to use the <span class="jsx-3120878690">`ConnectedRouter`</span> component and pass the history object as a prop. Make sure you wrap the <span class="jsx-3120878690">`ConnectedRouter`</span> component with the <span class="jsx-3120878690">`Provider`</span> component from <span class="jsx-3120878690">`react-redux`</span>.

    1import { ConnectedRouter } from "connected-react-router";
    2import { Provider } from "react-redux";

jsx

    1const App = () => {
    2  return (
    3    <Provider store={store}>
    4      <ConnectedRouter history={history}>
    5        <BrowserRouter basename="/app">
    6          <Main />
    7        </BrowserRouter>
    8      </ConnectedRouter>
    9    </Provider>
    10  );
    11};

jsx

Conclusion
----------

Redux is a vital component of the React ecosystem, so you need to understand how to integrate React-Router and Redux and how they work together. React Router has an excellent section on [deep Redux integration](https://reactrouter.com/web/guides/deep-redux-integration) that you may want to read for a better understanding of how things work under the hood.

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

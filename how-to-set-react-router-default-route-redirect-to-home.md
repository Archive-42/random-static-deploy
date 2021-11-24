<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Set React Router Default Route Redirect to /home
=======================================================

### Gaurav Singhal

-   Nov 12, 2020
-   8 Min read
-   189,196 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   189,196 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Client-side Framework</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

177

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-routingconfiguration" class="menu-link">Routing Configuration</a>
-   <a href="#module-implementingdefaultrouteredirect" class="menu-link">Implementing Default Route Redirect</a>
-   <a href="#module-conditionallyredirecttothedefaultpath" class="menu-link">Conditionally Redirect to the Default Path</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Routing allows us to configure an app that accepts various URLs and is mapped to specific components. Once the matching URL is found, then the matching page/component will be rendered into the HTML DOM.

The routing works by comparing the URL against the specified list of routes in our React app. Each route is linked to a <span class="jsx-3120878690">`<Route>`</span> component where we have configured the complete routing configuration.

In this guide, you will learn how to get started with routing and redirect the default route to <span class="jsx-3120878690">`/home`</span>.

Routing Configuration
---------------------

To get started with routing with React, you need first to install the library using this npm command:

    1npm install react-router-dom 

powershell

There are some key terms you should know to get started with the routing configuration.

### BrowserRouter

BrowserRouter is the router implementation that uses the *HTML5 history API* to keep your UI up to date with the browser URL.

It is BrowserRouter’s responsibility to store all the components and its routes as an object.

### Switch

Switch components are used to render the default components once the app rendered, and it will switch between routes as needed.

### Route

The route is a statement that holds the specific path of the app along with the component’s name and renders it once it matches the URL.

### Link

The link is similar to the HREF link, which allows you to redirect to the specific components based on the specified path.

Implementing Default Route Redirect
-----------------------------------

So far in this guide, you have learned how to install the package and the terms that you are going to use for implementing the routing.

You can achieve the router configuration by using an API called *BrowserRouter*, which wraps all the components that reside in our React app like this.:

    1<Router>
    2    <Switch>
    3        <Route exact path="/path1" component={comp1} />
    4        <Route exact path="/path2" component={comp2} />
    5        <Route exact path="/path3" component={comp3} />
    6        <Route exact path="/path4" component={comp4} />
    7    </Switch>
    8</Router>

jsx

In the above example, the <span class="jsx-3120878690">`<Router>`</span> is a parent component that wraps other child components as a <span class="jsx-3120878690">`<Route>`</span> that is connected to the specific components.

The next step is to create four different components, as explained below.

**Home.jsx**

    1import React from 'react';
    2export default Home => <div>This is home component</div>;

jsx

**Test1.jsx**

    1import React from 'react';
    2export default Test1 => <div>This is Test1 component</div>;

jsx

**Test2.jsx**

    1import React from 'react';
    2export default Test2 => <div>This is Test2 component</div>;

jsx

**Test3.jsx**

    1import React from 'react';
    2export default Test3 => <div>This is Test3 component</div>;

jsx

These are the four simple components that you are going to use for the routing as an example. Next, you'll move on to the **index.js** file and paste the following lines of source code:

    1import React, { Component } from "react";
    2import { render } from "react-dom";
    3import {
    4  BrowserRouter as Router,
    5  Switch,
    6  Route,
    7  Link,
    8  Redirect
    9} from "react-router-dom";
    10import Home from "./Home";
    11import Test1 from "./Test1";
    12import Test2 from "./Test2";
    13import Test3 from "./Test3";
    14
    15class App extends Component {
    16  constructor() {
    17    super();
    18    this.state = {
    19      name: "React",
    20      isUserAuthenticated: true
    21    };
    22  }
    23
    24  render() {
    25    return (
    26      <div>
    27        <Router>
    28          <div>
    29            <ul>
    30              <li>
    31                <Link to="/home">Home</Link>
    32              </li>
    33              <li>
    34                <Link to="/test1">Test 1</Link>
    35              </li>
    36              <li>
    37                <Link to="/test2">Test 2</Link>
    38              </li>
    39              <li>
    40                <Link to="/test3">Test 3</Link>
    41              </li>
    42            </ul>
    43            <hr />
    44            <Switch>
    45              <Route
    46                exact
    47                path="/"
    48                render={() => {
    49                    return (
    50                      this.state.isUserAuthenticated ?
    51                      <Redirect to="/home" /> :
    52                      <Redirect to="/test1" /> 
    53                    )
    54                }}
    55              />
    56               <Route exact path="/home" component={Home} />
    57              <Route exact path="/test1" component={Test1} />
    58              <Route exact path="/test2" component={Test2} />
    59              <Route exact path="/test3" component={Test3} />
    60            </Switch>
    61          </div>
    62        </Router>
    63      </div>
    64    );
    65  }
    66}
    67
    68render(<App />, document.getElementById("root"));

jsx

There are two sections in these components:

-   The first section has the list of <span class="jsx-3120878690">`<Link>`</span> along with a path for components, so once a user clicks on any of those links, the router finds the matching URL from the list of routes

-   The second section has the <span class="jsx-3120878690">`<Route>`</span> configuration. Each route has the name of the components along with the path declaration, so when the user clicks on any <span class="jsx-3120878690">`<Link>`</span>, the matching <span class="jsx-3120878690">`<Route>`</span> is identified and rendered accordingly.

The main thing to notice is that once the app is rendered, it will find the path <span class="jsx-3120878690">`‘/’`</span>. However, the need is to redirect to the <span class="jsx-3120878690">`/home`</span> path, which you can achieve using <span class="jsx-3120878690">`<Redirect>`</span> just like this:

    1<Route exact path="/">
    2    <Redirect to="/home" />
    3</Route>

jsx

In this code snippet, the default app path for the initial render is <span class="jsx-3120878690">`‘/’`</span>, so if there is no path attached then it should redirect to the matching path, which is <span class="jsx-3120878690">`/home`</span>.

The <span class="jsx-3120878690">`<Redirect>`</span> allows us to redirect to the new components based on the matching path from the current components to other specified components by overriding the history object.

Conditionally Redirect to the Default Path
------------------------------------------

So far, you have learned how to redirect the components to a specific path. But in many scenarios, you may want to render specific components based on some condition.

For this, you can use the ternary condition before redirecting to the different components, as explained below.

Set one Boolean variable into the state like this.:

    1constructor() {
    2    super();
    3    this.state = {
    4      isUserAuthenticated: true
    5    };
    6}

jsx

So before redirecting to specific components, you need to make sure that whether the user is already logged in or not, the source code should look like this:

    1<Route
    2    exact
    3    path="/"
    4    render={() => {
    5        return (
    6            this.state.isUserAuthenticated ?
    7            <Redirect to="/home" /> :
    8            <Redirect to="/test1" /> 
    9        )
    10    }}
    11/>

jsx

From the above example, you can see that when the path <span class="jsx-3120878690">`‘/’`</span> is found, it will go to the *render* props where it identifies that the user is logged in or not using the <span class="jsx-3120878690">`this.state.isUserAuthenticated`</span>. Based on the value, the redirect will happen.

This is how you can redirect to specific components using <span class="jsx-3120878690">`<Redirect>`</span> and also do it conditionally.

Conclusion
----------

The routing is the first configuration that any app needs, and you have learned one of the best approaches to redirect components to the default route even if you have an empty path into the URL.

Make sure to use these two approaches in your React app to simplify the routing. I hope this guide will be helpful for you to learn the best approach. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

177

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

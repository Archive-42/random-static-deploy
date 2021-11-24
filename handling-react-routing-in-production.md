<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Handling React Routing in Production
====================================

### Desmond Nyamador

-   Oct 6, 2020
-   4 Min read
-   14,137 Views

-   Oct 6, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   14,137 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

24

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-buildingasampleapp" class="menu-link">Building a Sample App</a>
-   <a href="#module-addingroutes" class="menu-link">Adding Routes</a>
-   <a href="#module-deployyourapp" class="menu-link">Deploy Your App</a>
-   <a href="#module-fixingtheissue" class="menu-link">Fixing the Issue</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

If you're reading this, there is a high probability that you've deployed your first React app that uses React Router or the HTML5 history API, and routes entered into the browser directly return a page not found error. In this guide, you'll gain understanding of what the cause of this problem is and how to solve it.

Building a Sample App
---------------------

To replicate the problem, you'll build and deploy a simple React app with two pages. First, create your React development environment with Create React App by entering the following command in your terminal.

    1npx create-react-app [YOUR_APP_NAME]

bash

Next add react-router-dom as a dependency

    1yarn add react-router-dom

bash

Adding Routes
-------------

Create a Routes.js file and add the following to create the home and about page routes.

    1import React from 'react'
    2import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'
    3import { Home, About } from './app.js';
    4
    5const Routes = () => { 
    6    return (
    7     <Router>
    8                <Switch>
    9                        <Route exact path='/' component={Home}/>
    10                       <Route exact path='/about' component={About}/>
    11               <Switch/>
    12        </Router>
    13       );
    14};
    15
    16export default Routes;

jsx

Now create the components for the Home and About pages using the code below.

    1import React from 'react';
    2
    3const Home = () => {
    4 return(
    5     <p>Homepage</p>
    6 );
    7}
    8
    9const About = () => {
    10    return(
    11        <p>About</p>
    12    );
    13}
    14
    15export default {Home , About}

jsx

Don't forget to add the <span class="jsx-3120878690">`routes`</span> component to your <span class="jsx-3120878690">`index.js`</span> page

    1import React from "react";
    2import ReactDOM from "react-dom";
    3import Routes from "./Routes";
    4
    5ReactDOM.render(
    6    <React.StrictMode>
    7            <Routes />
    8    </React.StrictMode>,
    9    document.getElementById("root")
    10);

jsx

Deploy Your App
---------------

There are a lot of ways to deploy your React app. In this guide you'll use [render.com](https://render.com/). But before deployment, run your build script and push your production build to a GitHub repository. Next, visit render.com and create an account if you don't have one.

Follow these steps to deploy your app:

1.  Add a new web service on your [render.com](https://render.com/) dashboard.
2.  Connect your repo to the web service you just created.
3.  Deploy your app

Visit the About page. It doesn't work because in production the server looks for the file <span class="jsx-3120878690">`/about`</span>, which literally doesn't exist.

Fixing the Issue
----------------

To fix this issue, the server needs to be configured such that requests to any route would be served the <span class="jsx-3120878690">`index.html`</span> file in your production build. If you use <span class="jsx-3120878690">`express.js`</span> it can be done as follows.

    1app.use(express.static(path.join(__dirname, 'build')));
    2
    3app.get('/*', function(req,res) {
    4     res.sendFile(path.join(__dirname, 'build', 'index.html'));
    5});

jsx

In your case [render.com](https://render.com/) has a simple solution for that. On the dashboard for your app, click the Redirects/Rewrites tab and add the following:

    1# Source: /*
    2# Destination: /index.html
    3# Action: Rewrite

jsx

Now save the changes and deploy your app again just to be sure. Your routes should work perfectly now.

Conclusion
----------

Voila! You're a React guru now. If you'd like to read more on routing for Create React App in production, visit the [official documentation](https://create-react-app.dev/docs/deployment). Ping me on Twitter if you'd like to chat more at @[DesmondNyamador](https://twitter.com/@DesmondNyamador).

24

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

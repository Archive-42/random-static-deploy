<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Understanding Links in React.js
===============================

### Desmond Nyamador

-   Oct 8, 2020
-   5 Min read
-   47,472 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   47,472 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

83

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-linksinreact" class="menu-link">Links in React</a>
-   <a href="#module-buildingasampleapp" class="menu-link">Building a Sample App</a>
-   <a href="#module-cleaninguptoavoidunecessaryrendering" class="menu-link">Cleaning Up to Avoid Unecessary Rendering</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Links are everywhere on the web. They are vital in locating resources such as web pages, images, and videos—not to speak of their importance in SEO. Routing helps determine which code should run when a URL is visited. In this guide, you will learn more about how routing works in React.

Links in React
--------------

In regular apps without a library like React, links are created with an anchor tag, as shown below.

    1<a href="https://pluralsight.com">Visit Pluralsight</a>

html

Bear in mind that this also works in React. This method of routing causes a full page refresh, when in reality the only thing that changed on the new route might be just an image and some text. In some cases, a full page refresh is useful, but in most cases, it's not needed. React is a component-oriented library and implements a neat algorithm by keeping track of your elements as a tree and figuring out which components need re-rendering. Libraries such as React Router take advantage of this to help your app render components that need re-rendering based on a specified route. Very efficient, isn't it?

In short, if your app uses the same header and footer for all pages, you can ensure that only the body of your pages re-render while the header and footer remain intact.

Building a Sample App
---------------------

Setup a React app by entering the following command or entering [react.new](https://react.new/) in your browser to set up a React development environment on [codesandox.io](http://codesandox.io/).

    1npx create-react-app [YOUR_APP_NAME] && yarn add react-router-dom

bash

Add the following code block to your *index.js file.*

    1import React from 'react';
    2import ReactDOM from 'react-dom';
    3import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
    4import {Homepage, Aboutpage } from './App';
    5
    6ReactDOM.render(
    7    <Router>
    8       <Switch>
    9              <Route exact path="/" component={Homepage}/>
    10               <Route exact path="/about" component={Aboutpage }/>
    11       </Switch>
    12    </Router>,
    13    document.getElementById('root')
    14);

jsx

Now add the following code snippet to your *App.js* file to create the components for the pages.

    1import React from 'react';
    2import { Link } from 'react-router-dom';
    3
    4const Header = () => {
    5 return (
    6     <div>
    7                <p>Header</p>
    8        </div>
    9 )
    10};
    11
    12const Homepage = () => {
    13    return (
    14        <div>
    15               <Header/>
    16               <h1>Homepage </h1>
    17               <Link to='/about'>Go to Aboutpage</Link>
    18       </div>
    19    )
    20};
    21
    22const Aboutpage = () => {
    23    return (
    24        <div>
    25               <Header/>
    26               <h1>Aboutpage</h1>
    27               <Link to='/'>Go to Aboutpage</Link>
    28       </div>
    29    )
    30};
    31export {Homepage, Aboutpage } ;

jsx

Run your development server and open your app in the browser. Notice how changing routes does not cause a full page reload.

Cleaning Up to Avoid Unecessary Rendering
-----------------------------------------

You've made use of routes to render specific components for each route. But there's a problem somewhere 🤔. The <span class="jsx-3120878690">`</Header>`</span> component has to render every time a route changes, but its content doesn't change. Edit your *App.js* and *index.js* files, respectively, as shown below.

    1import React from 'react';
    2import ReactDOM from 'react-dom';
    3import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
    4import {Homepage, Aboutpage, Header } from './App'; //new
    5
    6ReactDOM.render(
    7    <Router>
    8       <Switch>
    9                    <Header/> //new
    10             <Route exact path="/" component={Homepage}/>
    11               <Route exact path="/about" component={Aboutpage }/>
    12       </Switch>
    13    </Router>,
    14    document.getElementById('root')
    15);

jsx

    1import React from 'react';
    2import { Link } from 'react-router-dom';
    3
    4const Header = () => {
    5 return (
    6     <div>
    7                <p>Header</p>
    8        </div>
    9 )
    10};
    11
    12const Homepage = () => {
    13    return (
    14        <div>
    15               <h1>Homepage </h1>
    16               <Link to='/about'>Go to Aboutpage</Link>
    17       </div>
    18    )
    19};
    20
    21const Aboutpage = () => {
    22    return (
    23        <div>
    24               <h1>Aboutpage</h1>
    25               <Link to='/'>Go to Aboutpage</Link>
    26       </div>
    27    )
    28};
    29export {Homepage, Aboutpage , Header } ; //new

jsx

What you've done is you've made sure that when a new route is visited, it only renders the respective page and not the header, as it seldom changes state.

Conclusion
----------

Whew! That's it. You should now get the concept of links in React and how to handle routing effectively.

Feel free to ping me on twitter [@DesmondNyamador](https://twitter.com/DesmondNyamador) if you want chat more on this topic.

83

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

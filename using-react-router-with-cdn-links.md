<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Using React Router with CDN Links
=================================

### Gaurav Singhal

-   Nov 7, 2020
-   6 Min read
-   10,572 Views

-   Nov 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   10,572 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

38

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingup" class="menu-link">Setting up</a>
-   <a href="#module-importingreactrouterelements" class="menu-link">Importing React Router Elements</a>
-   <a href="#module-creatingtheappcomponent" class="menu-link">Creating the App Component</a>
-   <a href="#module-creatingchildcomponents" class="menu-link">Creating Child Components</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When you are learning a new library or exploring new concepts in development mode, using *CDNs* can come in handy as they require minimal setup and get you up and running with only a few lines of code. To learn and explore React Router as a beginner, you can use a simple CDN setup without the hefty webpack configuration. In this guide, you'll learn how to use React and React Router using CDN links.

Setting up
----------

Create a new file called <span class="jsx-3120878690">`index.html`</span> with the following boilerplate.

    1<!DOCTYPE html>
    2<html>
    3  <head>
    4    <meta charset='UTF-8'>
    5  </head>
    6  <body>
    7    <div id='root'></div>
    8    <script type='text/babel'>
    9
    10    </script>
    11  </body>
    12</html>

html

The <span class="jsx-3120878690">`<div>`</span> inside the <span class="jsx-3120878690">`<body>`</span> is where your React App's DOM goes. The <span class="jsx-3120878690">`<script>`</span> following the <span class="jsx-3120878690">`<body>`</span> is where you can write your regular JavaScript to React. Next, include the CDN links as scripts for React, ReactDOM, React-Router-DOM, and Babel, as shown below

    1 <head>
    2    <meta charset='UTF-8'>
    3    <script src='https://unpkg.com/[email protected]/umd/react.production.min.js'></script>
    4    <script src='https://unpkg.com/[email protected]/umd/react-dom.production.min.js'>    </script>
    5    <script src='https://unpkg.com/[email protected]/umd/react-router-dom.min.js'></script>
    6    <script src='https://unpkg.com/[email protected]/babel.js'></script>
    7  </head>

html

Now you are ready to use React and React-Router-DOM inside this HTML file.

Importing React Router Elements
-------------------------------

React Router offers components such as <span class="jsx-3120878690">`HashRouter`</span>, <span class="jsx-3120878690">`Route`</span>, <span class="jsx-3120878690">`Link`</span>, and so on for different purposes. Inside a regular React-CLI (Create-React-App) project, install <span class="jsx-3120878690">`react-router-dom`</span> as a dependency and import the components, as shown below.

    1import {Route,Link, HashRouter} from 'react-router-dom';

javascript

However, inside a regular JavaScript file, you need to call these components as properties of the <span class="jsx-3120878690">`ReactRouterDOM`</span> global object available via the CDN (React-Router-DOM's script) and assign it to a variable to use it. So in order to use the <span class="jsx-3120878690">`Link`</span> and <span class="jsx-3120878690">`Route`</span> components, you need to do the following:

    1const Link = ReactRouterDOM.Link;
    2const Route = ReactRouterDOM.Route;

javascript

Creating the App Component
--------------------------

Let's create a simple hooks component, the <span class="jsx-3120878690">`App Component`</span>, as shown below, and render it on the DOM.

    1 const App = () => (
    2       
    3 )
    4ReactDOM.render(<App />, document.querySelector('#root'));

javascript

Next, add a few links inside this component.

    1const App = () => (
    2        <ReactRouterDOM.HashRouter>
    3          <ul>
    4            <li><Link to="/">Home</Link></li>
    5            <li><Link to="/login">Login</Link></li>
    6            <li><Link to="/register">Register</Link></li>
    7          </ul>
    8        </ReactRouterDOM.HashRouter>
    9)

javascript

The <span class="jsx-3120878690">`HashRouter`</span> component is directly invoked from the <span class="jsx-3120878690">`ReactRouterDOM`</span> global object. This is another method of requiring React-Router-DOM components, in addition to the method shown in the previous section.

Finally, set up some simple routes, as shown below.

    1 <Route path="/" exact component={Home} />
    2 <Route path="/login" component={Login} />
    3 <Route path="/register" component={Register} />

javascript

Creating Child Components
-------------------------

On requesting the route <span class="jsx-3120878690">`/login`</span>, the <span class="jsx-3120878690">`Route`</span> component renders the <span class="jsx-3120878690">`Login`</span> Component. Create these child components to show a different message every time their route is requested.

    1 const Home = () => <h1>Home</h1>
    2 const Login = () => <h1>Login</h1>
    3 const Register = () => <h1>Register</h1>

javascript

Run this HTML file and click on the **login link**. The current route changes to <span class="jsx-3120878690">`/login`</span> instead of <span class="jsx-3120878690">`/`</span> and the <span class="jsx-3120878690">`Login`</span> component is rendered. Similarly, the <span class="jsx-3120878690">`Register`</span> component can be rendered by clicking on the **register link**.

Have a look at the entire <span class="jsx-3120878690">`index.html`</span> file below.

    1<!DOCTYPE html>
    2<html>
    3  <head>
    4    <meta charset='UTF-8'>
    5    <script src='https://unpkg.com/[email protected]/umd/react.production.min.js'></script>
    6    <script src='https://unpkg.com/[email protected]/umd/react-dom.production.min.js'></script>
    7    <script src='https://unpkg.com/[email protected]/umd/react-router-dom.min.js'></script>
    8    <script src='https://unpkg.com/[email protected]/babel.js'></script>
    9  </head>
    10  <body>
    11    <div id='root'></div>
    12    <script type='text/babel'>
    13      const Link = ReactRouterDOM.Link;
    14      const Route = ReactRouterDOM.Route;
    15
    16      const App = () => (
    17        <ReactRouterDOM.HashRouter>
    18          <ul>
    19            <li><Link to="/">Home</Link></li>
    20            <li><Link to="/login">Login</Link></li>
    21            <li><Link to="/register">Register</Link></li>
    22          </ul>
    23
    24          <Route path="/" exact component={Home} />
    25          <Route path="/login" component={Login} />
    26          <Route path="/register" component={Register} />
    27        </ReactRouterDOM.HashRouter>
    28      )
    29
    30      const Home = () => <h1>Home</h1>
    31      const Login = () => <h1>Login</h1>
    32      const Register = () => <h1>Register</h1>
    33
    34      ReactDOM.render(<App />, document.querySelector('#root'));
    35    </script>
    36  </body>
    37</html>

html

Conclusion
----------

Using CDNs for development offers a faster development environment where you can explore and experiment according to your needs. It also comes in handy when you are developing only a backend app by serving HTML files so you don't need to separately set up a frontend project consuming it. You can explore large React Libraries like Redux via CDN first to save time, and then use them inside your Create-React-App project. If you have any queries, feel free to contact me at [CodeAlphabet](https://codealphabet.com/contact).

38

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

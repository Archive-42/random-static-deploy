<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Pull React-Bootstrap Navbar Components to the Right
===================================================

### Kimaru Thagana

-   Oct 31, 2020
-   5 Min read
-   13,177 Views

-   Oct 31, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   13,177 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

19

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-scenario" class="menu-link">Scenario</a>
-   <a href="#module-setupasampleapp" class="menu-link">Set up a Sample App</a>
-   <a href="#module-setupthenavbar" class="menu-link">Set Up the Navbar</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In frontend development, React developers have to build user interfaces (UI) with user experience (UX) in mind. Navigation is a critical element of web pages because it provides a means for users to traverse content. To implement navigation, most frontend developers use navigation bars, which are naturally placed at the top of the web page for visibility and navigation. For an even better user experience, some web pages freeze the navbar in a fixed position or pulled in a certain direction optimal for page navigation. Navigation bars can hold a logo, banner, or menu items, as well as providing a seamless user experience within a web page.

Scenario
--------

As a budding React developer, you may come across a scenario in which you need to style a navbar component in a certain way. One way is to position or pull navbar components to the right of your webpage. In this guide, you will learn a simple yet effective way to position your items in a navbar component using react-bootstrap, a popular framework for React. This guide therefore assumes that you have at least *beginner* knowledge in React.js and have interacted with React Bootstrap.

Set up a Sample App
-------------------

Open your terminal and run these commands to create a basic React app.

    1npx create-react-app react-bootstrap-navbar_right
    2
    3cd  react-bootstrap-navbar_right
    4
    5npm start

bash

Include react-bootstrap in your basic React app.

    1npm install react-bootstrap bootstrap

bash

Delete the code in the newly created <span class="jsx-3120878690">`App.js`</span> file and paste the sample code below.

    1import React, {Component} from 'react';
    2
    3class App extends Component{
    4    constructor(props) {
    5        super(props);
    6        
    7    }
    8
    9    render() {
    10        return (
    11            <div>
    12                
    13            </div>
    14        );
    15    }
    16
    17}

js

In your <span class="jsx-3120878690">`app.js`</span> file, include the stylesheet as well.

    1import 'bootstrap/dist/css/bootstrap.min.css';

js

You can now import bootstrap components, for example:

    1import { Navbar } from 'react-bootstrap';

js

Set Up the Navbar
-----------------

The sample code below sets up a basic navbar component from react-bootstrap. In this case, you have links that showcase how to position it to either the right or left. At first, all links are positioned to the left as default.

    1import React, {Component} from 'react';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
    4
    5class App extends Component{
    6    constructor(props) {
    7        super(props);
    8
    9    }
    10
    11    render() {
    12        return (
    13            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    14                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    15                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    16                <Navbar.Collapse id="responsive-navbar-nav">
    17                    <Nav>
    18                        <Nav.Link href="#features">Features</Nav.Link>
    19                        <Nav.Link href="#pricing">Pricing</Nav.Link>
    20                        <Nav.Link href="#deets">More details</Nav.Link>
    21                        <Nav.Link eventKey={2} href="#memes">
    22                            Good stuff
    23                        </Nav.Link>
    24                    </Nav>
    25                </Navbar.Collapse>
    26            </Navbar>
    27        );
    28    }
    29
    30}
    31export default App;

js

In Bootstrap 4, the classes <span class="jsx-3120878690">`.pull-right`</span> and <span class="jsx-3120878690">`.pull-left`</span> are replaced by <span class="jsx-3120878690">`.float-right`</span> and <span class="jsx-3120878690">`float-left`</span>. Unfortunately, if you have gone down this path before, you'll quickly realize that these don't work with react-bootstrap. What works in this case is auto margins, specifically <span class="jsx-3120878690">`.mr-auto`</span> to push right and <span class="jsx-3120878690">`ml.auto`</span> to push left.

Go ahead and add the class below in your nav tag.

    1<Nav className="ml-auto"> 

js

Here's how your code should look.

    1import React, {Component} from 'react';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
    4
    5class App extends Component{
    6    constructor(props) {
    7        super(props);
    8
    9    }
    10
    11    render() {
    12        return (
    13            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    14                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    15                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    16                <Navbar.Collapse id="responsive-navbar-nav">
    17                    <Nav className="ml-auto">
    18                        <Nav.Link href="#features">Features</Nav.Link>
    19                        <Nav.Link href="#pricing">Pricing</Nav.Link>
    20                        <Nav.Link href="#deets">More details</Nav.Link>
    21                        <Nav.Link eventKey={2} href="#memes">
    22                            Good stuff
    23                        </Nav.Link>
    24                    </Nav>
    25                </Navbar.Collapse>
    26            </Navbar>
    27        );
    28    }
    29
    30}
    31export default App;

js

Conclusion
----------

Working with navbars is a paramount skill in frontend development . You can further build on this guide by learning more navbar properties from the official React Bootstrap [site](https://react-bootstrap.github.io/components/navbar/#navbars-placement).

19

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

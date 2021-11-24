<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Using React.js With Bootstrap
=============================

### Desmond Nyamador

-   Nov 3, 2020
-   7 Min read
-   2,407 Views

-   Nov 3, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   2,407 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settinguptheapp" class="menu-link">Setting Up the App</a>
-   <a href="#module-usingbootstrap" class="menu-link">Using Bootstrap</a>
-   <a href="#module-importingcomponents" class="menu-link">Importing Components</a>
-   <a href="#module-creatingapage" class="menu-link">Creating a Page</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

[Bootstrap](https://getbootstrap.com/) is the most popular frontend component library. It comes packed with lots of components out of the box with little to no customization necessary, depending on your use case or requirements. In this guide, you'll learn how to use React (the world's most popular frontend library) with Bootstrap (the world's most popular component library).

Setting Up the App
------------------

To get started, run the following command in your terminal to set up your React project.

    11. npx create-react-app <YOUR_APP_NAME>
    2
    32. cd <YOUR_APP_NAME>
    4
    53. yarn start or npm start

bash

<span class="jsx-3120878690">`<YOUR_APP_NAME>`</span> refers the name you'd like to give to your React project.

If you really want to get started quickly without the pain of setting up a <span class="jsx-3120878690">`create-react-app`</span> project, open up your browser and visit [https://react.new](https://react.new/) to get a fully configured React development environment via [https://codesandbox.io](https://codesandbox.io/) .

Using Bootstrap
---------------

Bootstrap can be used in different ways, including:

1.  Downloading the bootstrap production files
2.  Adding CDN links to your html file.
3.  Downloading via a package manager such as npm or yarn.

In this guide you'll install Bootstrap with a package manager and install the React Bootstrap library, which comes with React components you can use easily.

Run the following command to install <span class="jsx-3120878690">`react-bootstrap`</span>.

    1npm install react-bootstrap bootstrap
    2
    3                          OR
    4
    5yarn add react-bootstrap bootstrap

bash

React Bootstrap doesn't use a precise version of Bootstrap, but you'll need to add some default styling to use the components. Add the following line of code to your <span class="jsx-3120878690">`src/index.js`</span> or <span class="jsx-3120878690">`src/App.js`</span> file.

    1import 'bootstrap/dist/css/bootstrap.min.css'

jsx

Importing Components
--------------------

Components from React Bootstrap can be imported in two ways.

1.  Importing a specific component

    1import Modal from 'react-bootstrap/Modal';

jsx

1.  Importing <span class="jsx-3120878690">`react-bootstrap`</span> and using one component

    1import { Modal } from 'react-bootstrap/Modal';

jsx

> **Note:** The React Bootstrap documentation recommends that you use the first method, as it reduces the amount of code you send to the client. The second method sends the complete library to the client, adding unnecessary bytes and degrading the performance of your app.

Creating a Page
---------------

First, import all the components needed. As mentioned in the "Importing components" section, all components will be imported individually.

    1import React from "react";
    2import 'bootstrap/dist/css/bootstrap.min.css'
    3import Navbar from 'react-bootstrap/Navbar';
    4import Nav from 'react-bootstrap/Nav';
    5import NavDropdown from 'react-bootstrap/NavDropdown';
    6import Jumbotron from 'react-bootstrap/Jumbotron';
    7import Button from 'react-bootstrap/Button';

jsx

Next, add a navigation bar to the app.

    1function NavBar(){
    2  return(
    3    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    4  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    5  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    6  <Navbar.Collapse id="responsive-navbar-nav">
    7    <Nav className="mr-auto">
    8      <Nav.Link href="#features">Features</Nav.Link>
    9      <Nav.Link href="#pricing">Pricing</Nav.Link>
    10      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    11        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    12        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    13        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    14        <NavDropdown.Divider />
    15        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    16      </NavDropdown>
    17    </Nav>
    18    <Nav>
    19      <Nav.Link href="#deets">More deets</Nav.Link>
    20      <Nav.Link eventKey={2} href="#memes">
    21        Dank memes
    22      </Nav.Link>
    23    </Nav>
    24  </Navbar.Collapse>
    25</Navbar>
    26  )
    27}

jsx

Add a jumbotron to the app with some text.

    1function Heading(){
    2  return(
    3    <Jumbotron>
    4  <h1>Hello, world!</h1>
    5  <p>
    6    This is a simple bootstrap application built following a Pluralsight guide.
    7  </p>
    8  <p>
    9    <Button variant="primary">Learn more</Button>
    10  </p>
    11</Jumbotron>
    12  )
    13}

jsx

Add the jumbotron and navbar to your app.

    1export default function App() {
    2  return (
    3    <div className="App">
    4      <NavBar/>
    5      <Heading/>
    6    </div>
    7  );
    8}

jsx

Your complete app should look like this.

    1import React from "react";
    2import 'bootstrap/dist/css/bootstrap.min.css'
    3import Navbar from 'react-bootstrap/Navbar';
    4import Nav from 'react-bootstrap/Nav';
    5import NavDropdown from 'react-bootstrap/NavDropdown';
    6import Jumbotron from 'react-bootstrap/Jumbotron';
    7import Button from 'react-bootstrap/Button';
    8
    9function NavBar(){
    10  return(
    11    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    12  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    13  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    14  <Navbar.Collapse id="responsive-navbar-nav">
    15    <Nav className="mr-auto">
    16      <Nav.Link href="#features">Features</Nav.Link>
    17      <Nav.Link href="#pricing">Pricing</Nav.Link>
    18      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    19        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    20        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    21        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    22        <NavDropdown.Divider />
    23        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    24      </NavDropdown>
    25    </Nav>
    26    <Nav>
    27      <Nav.Link href="#deets">More deets</Nav.Link>
    28      <Nav.Link eventKey={2} href="#memes">
    29        Dank memes
    30      </Nav.Link>
    31    </Nav>
    32  </Navbar.Collapse>
    33</Navbar>
    34  )
    35}
    36
    37function Heading(){
    38  return(
    39    <Jumbotron>
    40  <h1>Hello, world!</h1>
    41  <p>
    42    This is a simple bootstrap application built following a Pluralsight guide.
    43  </p>
    44  <p>
    45    <Button variant="primary">Learn more</Button>
    46  </p>
    47</Jumbotron>
    48  )
    49}
    50export default function App() {
    51  return (
    52    <div className="App">
    53      <NavBar/>
    54      <Heading/>
    55    </div>
    56  );
    57}

jsx

Conclusion
----------

And that's it! In this guide, you learned about Bootstrap and how to integrate it into your React projects so you don't have to reinvent the wheel every time you're creating an app. You can follow the official documentation of [React Bootstrap](https://react-bootstrap.github.io/) and also the [official Bootstrap documentation](https://getbootstrap.com/docs/4.2/components).

Feel free to ping me on Twitter, as always, [@DesmondNyamador](https://twitter.com/DesmondNyamador) if you'd like to talk more about this or any other questions you may have. Stay safe!

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Create a Link that an App will Open in a Popup
==============================================

### Gaurav Singhal

-   Nov 17, 2020
-   6 Min read
-   8,094 Views

-   Nov 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   8,094 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-implementation" class="menu-link">Implementation</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-creatingthewrappercomponent" class="menu-link">Creating the Wrapper Component</a>
-   <a href="#module-creatingarelativelink" class="menu-link">Creating a Relative Link</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

To retain users of an app, you might want to show them content from an external source via hyperlinks without navigating them away from your app. In such situations, you can implement a React component that opens external links in a popup. This allows the user to stay on your app and still access external content. In this guide, you'll learn how to create a link that the application can conditionally open in a popup.

Implementation
--------------

The idea is to create a *wrapper component* that creates a <span class="jsx-3120878690">`URL object`</span> for any link passed to it and decides if it’s an external link or an internal link by checking the <span class="jsx-3120878690">`hostname`</span> of the link. For an internal link, it simply renders that link, and in all other cases, it renders an <span class="jsx-3120878690">`iframe`</span> in a popup showing that external link's source.

Setup
-----

In an empty React project, install React-Router-Dom

    1npm i react-router-dom

shell

Instead of creating a custom modal component, this example will use React-Bootstrap's modal component. You can create a custom modal component or use any other UI library you are comfortable with.

Install React Bootstrap and Bootstrap.

    1npm i react-bootstrap bootstrap

shell

Create a file in the root folder called <span class="jsx-3120878690">`environment.js`</span> and add a constant that stores the hostname of your app.

    1export const HOSTNAME="localhost";

shell

Since your app is in *local development*, all routes will be relative to <span class="jsx-3120878690">`localhost`</span>. However, when you push this app to production, you should put the domain name of your app here.

Creating the Wrapper Component
------------------------------

Create a wrapper component for your link called <span class="jsx-3120878690">`LinkWrapper`</span> that takes in the link as <span class="jsx-3120878690">`props`</span> and generates a complete <span class="jsx-3120878690">`URL object`</span> for that link. If the <span class="jsx-3120878690">`hostname`</span> of the URL is the same as <span class="jsx-3120878690">`HOSTNAME`</span> in your environment, then you need to simply render that link. If it's an external website, render a modal component from React Bootstrap with an <span class="jsx-3120878690">`iframe`</span> pointing to the external link. Below is the complete code for the <span class="jsx-3120878690">`LinkWrapper`</span> component.

    1import React,{useState} from 'react';
    2import { Modal, Button } from "react-bootstrap";
    3import {HOSTNAME} from './environment';
    4
    5export default function LinkWrapper({link}) {    
    6    const [show, setShow] = useState(false);
    7    const handleClose = () => setShow(false);
    8    const handleShow = () => setShow(true);
    9
    10    const url = new URL(link)
    11    console.log(url)
    12    if (url.hostname === HOSTNAME ) return <a target="_blank" href={link}>{link}</a>
    13    else
    14    return (
    15      <>
    16        <Button variant="primary" onClick={handleShow}>
    17          Open Link
    18        </Button>
    19  
    20        <Modal show={show} onHide={handleClose}>
    21            <Modal.Title>Link Popup</Modal.Title>
    22          <Modal.Body><iframe src={link} style={{width:'100%',height:'400px'}}/></Modal.Body>
    23          <Modal.Footer>
    24            <Button variant="secondary" onClick={handleClose}>
    25              Close
    26            </Button>
    27          </Modal.Footer>
    28        </Modal>
    29      </>
    30    );
    31  }

jsx

You can learn how the React-Bootstrap modal is used here by following the example in the official documentation: <https://react-bootstrap.netlify.app/components/modal/#modals>.

Creating a Relative Link
------------------------

In order to test local links, you need to create a relative route for your app. Create a simple <span class="jsx-3120878690">`About`</span> component, as shown below.

    1import React from 'react'
    2
    3export const About = () => {
    4    return (
    5        <div>
    6            <h1>This is the about component</h1>
    7            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quae distinctio provident vero rerum expedita earum eius sint quos dolorum illum temporibus quidem in ipsa, ad beatae, repudiandae facilis aliquid?</p>
    8        </div>
    9    )
    10}

jsx

Inside <span class="jsx-3120878690">`App.js`</span>, add the route and render the <span class="jsx-3120878690">`LinkWrapper`</span> component created in the previous section.

    1import 'bootstrap/dist/css/bootstrap.min.css';
    2import './App.css';
    3import LinkWrapper from './LinkWrapper';
    4import {
    5  BrowserRouter,
    6  Route,
    7} from "react-router-dom";
    8import { About } from './About';
    9
    10function App() {
    11  return (
    12    <div className="App">
    13      <BrowserRouter>
    14        <LinkWrapper/>
    15        <Route path="/about">
    16          <About/>
    17        </Route>
    18      </BrowserRouter>
    19    </div>
    20  );
    21}
    22
    23export default App;

jsx

To test it out, create two links, an external link and an internal link, as shown below.

    1  const external_link="https://reactrouter.com/web/guides/quick-start";
    2  const internal_link="http://localhost:3001/about"

javascript

The <span class="jsx-3120878690">`external_link`</span> should open in a popup and the <span class="jsx-3120878690">`internal_link`</span> should render as a regular link. Pass both these links one by one to the <span class="jsx-3120878690">`LinkWrapper`</span> component as <span class="jsx-3120878690">`props`</span>.

    1<LinkWrapper link={external_link}/>

javascript

The <span class="jsx-3120878690">`LinkWrapper`</span> component renders an **Open Link** button that opens the link in a popup. Changing the link <span class="jsx-3120878690">`props`</span> to <span class="jsx-3120878690">`internal_link`</span> simply renders the link that opens in a new tab.

Conclusion
----------

The underlying concept for creating such a component is *conditional rendering*. You can use the same concept for opening registration forms in a popup or rendering external images in your app. You can use this approach in situations where you might want to show certain content to the user based on the time they have spent on your app without creating a session, allowing them to log in to access more content by opening a login form popup. You can also open external videos in a popup inside an <span class="jsx-3120878690">`iframe`</span> that can be used in video streaming apps to show quick teasers and trailers to your users. If you have any questions, feel free to contact me at [CodeAlphabet](https://www.codealphabet.com/contact).

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Use Bootstrap Accordion with React
==================================

### Gaurav Singhal

-   Nov 19, 2020
-   5 Min read
-   15,697 Views

-   Nov 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   15,697 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

31

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-gettingstartedwithreactbootstrapaccordion" class="menu-link">Getting Started with react-bootstrap Accordion</a>
-   <a href="#module-integratingaccordioninreactcomponent" class="menu-link">Integrating Accordion in React Component</a>
-   <a href="#module-howtoopenanyaccordionbydefault" class="menu-link">How to Open Any Accordion by Default</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Accordions can be used to create tabbed elements and hide/show content based on collapsible tabs, followed by their child content elements. React does not have its own set of elements to integrate into the React component. Hence, you need to use some popular and frequently used libraries such as <span class="jsx-3120878690">`react-bootstrap`</span> that provide bootstrap elements for the React app.

Using <span class="jsx-3120878690">`react-bootstrap`</span>, there is an element called <span class="jsx-3120878690">`<Accordion>`</span> that allows you to toggle content based on a click event. This guide will cover the implementation.

Getting Started with react-bootstrap Accordion
----------------------------------------------

React-Bootstrap contains various bootstrap components that can be plugged and played for a React app. The same applies to the accordion; a part of the library can be imported from the library and used in the component.

Before using any of the components, you need to install it using the below NPM command.

    1npm install react-bootstrap
    2npm install bootstrap

shell

After installing both of the above libraries, the next step is to import the bootstrap CSS into the root file of the React app, i.e. <span class="jsx-3120878690">`index.js`</span>.

    1import "bootstrap/dist/css/bootstrap.min.css";

js

Now you can use any of the <span class="jsx-3120878690">`react-bootstrap`</span> components into your React app.

Integrating Accordion in React Component
----------------------------------------

After the <span class="jsx-3120878690">`react-bootstrap`</span> configuration, the next step is to extract the accordion component and configure it. You can import the accordion component like this:

    1import { Accordion } from "react-bootstrap";

jsx

The accordion component works on two different elements: toggle elements and collapsible elements.

### Toggle Element

To enable the expand operation, you need to have an element to be clicked by the user, and based on the toggle effect, the respective child content will be visible.

For that, there is one element that gets used to implement the toggle below.

    1<Accordion.Toggle as={Card.Header} eventKey="0">
    2    TAB 1
    3</Accordion.Toggle>

jsx

Where <span class="jsx-3120878690">`as`</span> represents the toggle element's behavior can be anything such as a button, link, or card header.

<span class="jsx-3120878690">`eventKey`</span> identifies each toggle element to expand the respective elements once the user clicks on the header.

### Collapsible Element

Once the user clicks on the <span class="jsx-3120878690">`<Accordion.Toggle>`</span> element, respective child content should be expanded and visible into the DOM; hence there is an additional configuration.

To expand, you have used <span class="jsx-3120878690">`<Accordion.Toggle>`</span>. To collapse the same way, there is another element called <span class="jsx-3120878690">`<Accordion.Collapse>`</span>.

    1<Accordion.Collapse eventKey="0">
    2    <Card.Body>This is first tab body</Card.Body>
    3</Accordion.Collapse>

jsx

One prop attached, <span class="jsx-3120878690">`eventKey`</span> is used to find the DOM's specific component and render the associated child element content with each collapsible element.

Below is the completed code, which shows the complete implementation of the Accordion.

    1import React, { Component } from "react";
    2import { Accordion, Card } from "react-bootstrap";
    3import "bootstrap/dist/css/bootstrap.min.css";
    4
    5export class Example1 extends Component {
    6    render() {
    7        return (
    8            <>
    9                <div>
    10                    <Accordion>
    11                        <Card>
    12                            <Accordion.Toggle as={Card.Header} eventKey="0">
    13                                TAB 1
    14                            </Accordion.Toggle>
    15
    16                            <Accordion.Collapse eventKey="0">
    17                                <Card.Body>This is first tab body</Card.Body>
    18                            </Accordion.Collapse>
    19                        </Card>
    20
    21                        <Card>
    22                            <Accordion.Toggle as={Card.Header} eventKey="1">
    23                                TAB 2
    24                            </Accordion.Toggle>
    25
    26                            <Accordion.Collapse eventKey="1">
    27                                <Card.Body>This is second tab body</Card.Body>
    28                            </Accordion.Collapse>
    29                        </Card>
    30                    </Accordion>
    31                </div>
    32            </>
    33        );
    34    }
    35}
    36
    37export default Example1;

jsx

In the above example, two collapsible accordions get used and wrapped by the parent element <span class="jsx-3120878690">`<Accordion>`</span>. One collapsible accordion is <span class="jsx-3120878690">`eventkey=”0”`</span> and another is <span class="jsx-3120878690">`eventkey=”1”`</span>. Once any of the accordions get clicked, the matching event key will be identified, and its child content will be visible to the user.

You can configure multiple accordions based on your requirement and set the prop <span class="jsx-3120878690">`eventKey`</span>, which is used to identify the respective collapsible content.

How to Open Any Accordion by Default
------------------------------------

It may be possible that you need to open any of the accordions by default once the page renders, so there is an additional property called <span class="jsx-3120878690">`defaultActiveKey`</span>.

You can define the default key of the desired collapsible accordion to be visible, as given below.

    1<Accordion defaultActiveKey="2">
    2    ...
    3</Accordion>

jsx

Using the above configuration, the third accordion will be expanded by default because you have defined the default active key to <span class="jsx-3120878690">`2`</span>.

Conclusion
----------

The accordion is the best choice when the user interface should be collapsed and able to utilize the web page space to expand the content when required.

Apart from <span class="jsx-3120878690">`react-bootstrap`</span>, you can try accordion from other third-party libraries such as <span class="jsx-3120878690">`material-ui`</span> based on the UI specification and requirement to effectively show the required content.

31

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

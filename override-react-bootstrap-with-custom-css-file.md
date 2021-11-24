<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Override react-bootstrap with Custom CSS File
=============================================

### Gaurav Singhal

-   Nov 18, 2020
-   7 Min read
-   28,912 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   28,912 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

27

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-overridereactbootstraptablecss" class="menu-link">Override `react-bootstrap` Table CSS</a>
-   <a href="#module-overridereactbootstrapformcontrolssuchasbutton" class="menu-link">Override `react-bootstrap` Form Controls Such as Button</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The user interface is a crucial part of an app, and impacts the first impression when the end user starts interacting with various pages or functionalities. Generally, the developer uses various UI frameworks with React, such as <span class="jsx-3120878690">`material-ui`</span>, <span class="jsx-3120878690">`reactstrap`</span>, and <span class="jsx-3120878690">`react-bootstrap`</span> to design the multiple components. Still, it may be possible that they need to modify the styles of those components.

<span class="jsx-3120878690">`react-bootstrap`</span> contains a set of UI components, and comes with better usability to modify the existing stylesheets. In this guide, you will learn how to override the <span class="jsx-3120878690">`react-bootstrap`</span> component CSS by applying the custom CSS styles to the elements.

Override \`react-bootstrap\` Table CSS
--------------------------------------

Table component/elements are one of the primary elements used by most apps where users can see a list of records and edit, paginate, and search over the records. The table element comes with a different variant like simple, striped, expandable, editable, bordered, responsive, etc.

With <span class="jsx-3120878690">`react-bootstrap`</span>, the table element can be overridden using the custom CSS classes, but before using the table, you need to import it.

    1import { Table } from "react-bootstrap";
    2import "bootstrap/dist/css/bootstrap.min.css";

jsx

After importing the table element and bootstrap CSS, create the basic table.

    1render() {
    2    return (
    3      <>
    4        <Table striped bordered hover>
    5          <thead>
    6            <tr>
    7              <th>#</th>
    8              <th>Name</th>
    9              <th>Email</th>
    10              <th>Contact</th>
    11            </tr>
    12          </thead>
    13          <tbody>
    14            <tr>
    15              <td>1</td>
    16              <td>TEST 123</td>
    17              <td>[email protected]</td>
    18              <td>1122334455</td>
    19            </tr>
    20            <tr>
    21              <td>2</td>
    22              <td>TEST 456</td>
    23              <td>[email protected]</td>
    24              <td>6677889910</td>
    25            </tr>
    26            <tr>
    27              <td>3</td>
    28              <td>TEST 789</td>
    29              <td>[email protected]</td>
    30              <td>6677889911</td>
    31            </tr>
    32          </tbody>
    33        </Table>
    34      </>
    35    );
    36}

jsx

In the above <span class="jsx-3120878690">`render()`</span> function, <span class="jsx-3120878690">`<Table>`</span> elements uses the header and body section along with the combination of rows and columns.

For example, if you want to change the table border, then create the below CSS class.

    1.table-bordered {
    2  border: 5px double orange !important;
    3}

css

<span class="jsx-3120878690">`table-bordered`</span> is an official class for the table implemented in the bootstrap, but if you want to override it then you need to define custom CSS with the same name along with the custom values.

Once you run the example, you can see that the table border is changed to orange as per the custom styles defined. Next, you can modify the row hover color.

    1.table-hover tbody tr:hover {
    2    color: yellow !important;
    3    background-color: brown;
    4}

css

Once you apply the above style, you will hover the rows with the updated color combination.

Below is the complete code of the table implementation.

    1import React, { Component } from "react";
    2import { Table } from "react-bootstrap";
    3import "bootstrap/dist/css/bootstrap.min.css";
    4
    5export class Example1 extends Component {
    6  render() {
    7    return (
    8      <>
    9        <Table striped bordered hover>
    10          <thead>
    11            <tr>
    12              <th>#</th>
    13              <th>Name</th>
    14              <th>Email</th>
    15              <th>Contact</th>
    16            </tr>
    17          </thead>
    18          <tbody>
    19            <tr>
    20              <td>1</td>
    21              <td>TEST 123</td>
    22              <td>[email protected]</td>
    23              <td>1122334455</td>
    24            </tr>
    25            <tr>
    26              <td>2</td>
    27              <td>TEST 456</td>
    28              <td>[email protected]</td>
    29              <td>6677889910</td>
    30            </tr>
    31            <tr>
    32              <td>3</td>
    33              <td>TEST 789</td>
    34              <td>[email protected]</td>
    35              <td>6677889911</td>
    36            </tr>
    37          </tbody>
    38        </Table>
    39      </>
    40    );
    41  }
    42}
    43
    44export default Example1;

jsx

After adding all the custom CSS, you can see that the custom styles get applied, and the previous CSS behavior is entirely different.

Override \`react-bootstrap\` Form Controls Such as Button
---------------------------------------------------------

You have seen the example of the <span class="jsx-3120878690">`<Table>`</span> element where the existing CSS gets updated with the custom styles, and in the same way, any form of controls can be overridden.

Form controls may contain various input elements such as input, button, dropdown, radio button, checkbox, file upload, etc.

You will see one example of modifying the CSS of the <span class="jsx-3120878690">`<Button>`</span> element.

Import the button controls from <span class="jsx-3120878690">`react-bootstrap`</span>, as given below.

    1import { Button } from "react-bootstrap";
    2import "bootstrap/dist/css/bootstrap.min.css";

jsx

Use the button component into the <span class="jsx-3120878690">`render()`</span> function as a primary variant.

    1render() {
    2    return (
    3      <>
    4        <Button variant="primary">
    5          Primary
    6        </Button>
    7      </>
    8    );
    9}

jsx

The button color will show primary color because the <span class="jsx-3120878690">`variant`</span> props have value as <span class="jsx-3120878690">`primary`</span>, but you need to change the color according to the customer requirement.

You can create the custom class and related CSS, as given below.

    1.custom-btn {
    2  background-color: blueviolet !important;
    3  border: #fff !important;
    4}

css

As you can see in the above custom class, the button's background color and its border are defined. But if you want to apply those custom CSS, you can use <span class="jsx-3120878690">`className`</span> props as given below.

    1render() {
    2    return (
    3      <>
    4        <Button variant="primary" className="custom-btn">
    5          Primary
    6        </Button>
    7      </>
    8    );
    9}

jsx

Below is the complete example of additional props added along with the <span class="jsx-3120878690">`<Button>`</span> element, which uses the custom CSS styles.

    1import React, { Component } from "react";
    2import { Button } from "react-bootstrap";
    3import "bootstrap/dist/css/bootstrap.min.css";
    4
    5export class Example2 extends Component {
    6  constructor(props) {
    7    super(props);
    8  }
    9
    10  render() {
    11    return (
    12      <>
    13        <Button variant="primary" className="custom-btn">
    14          Primary
    15        </Button>
    16      </>
    17    );
    18  }
    19}
    20
    21export default Example2;

jsx

Once you run the above example, you can see that the custom CSS styles replace the existing color combination to override any current styles and classes using <span class="jsx-3120878690">`className`</span> props of the element.

Conclusion
----------

Every UI framework contains components that should be able to be redesigned or that have capabilities to override existing CSS styles. These skills also apply to <span class="jsx-3120878690">`react-bootstrap`</span>, which provides the ability to modify the current styles to some extent.

It's always handy to override CSS because components may need to be modified based on the project requirements.

27

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

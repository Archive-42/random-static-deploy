<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Create a Collapsible Table Row with React-Bootstrap
===================================================

### Gaurav Singhal

-   Nov 10, 2020
-   9 Min read
-   19,390 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   19,390 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-collapsiblerowusingareactbootstrapcustomimplementation" class="menu-link">Collapsible Row Using a React Bootstrap Custom Implementation</a>
-   <a href="#module-usingotherthirdpartylibraries" class="menu-link">Using Other Third-Party Libraries</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Tables and forms are essential elements used in almost all web apps. Every JavaScript-based framework or library uses different UI frameworks to design their forms and tables to render the record and user interactivity through forms.

Collapsible rows are a handy option when you want to show child properties or records to the end user, and they also can be useful to show statistics such as charts and reports. In this guide, you will learn how to implement a collapsible row using React Bootstrap and other third-party libraries.

Collapsible Row Using a React Bootstrap Custom Implementation
-------------------------------------------------------------

A popular UI framework for React is <span class="jsx-3120878690">`react-bootstrap`</span>, which provides various Bootstrap-backed elements and components for React apps. <span class="jsx-3120878690">`react-bootstrap`</span> contains the set of components and its API to configure components in your app, and it can also change its behavior or appearance based on business requirements.

To use <span class="jsx-3120878690">`react-bootstrap`</span>, install some libraries, as shown below.

    1npm install react-bootstrap
    2npm install bootstrap

shell

After installing both the above libraries, the next step is to import CSS to your app's parent component, such as **App.js**.

    1import "bootstrap/dist/css/bootstrap.min.css";

jsx

Now import <span class="jsx-3120878690">`Table`</span> from the library <span class="jsx-3120878690">`react-bootstrap`</span>, and also import <span class="jsx-3120878690">`collapse.js`</span>,as shown below.

    1import React, { Component } from "react";
    2// Table from react-bootstrap
    3import { Table } from "react-bootstrap";
    4// Bootstrap CSS
    5import "bootstrap/dist/css/bootstrap.min.css";
    6// To make rows collapsible
    7import "bootstrap/js/src/collapse.js";

jsx

The next step is to integrate the table and implement expandable rows. For a quick demonstration, create the table, and with each table row, create one child row to expand.

    1render() {
    2    return (
    3        <>
    4            <Table striped bordered hover>
    5                <thead>
    6                    <tr>
    7                        <th>#</th>
    8                        <th>Name</th>
    9                        <th>Email</th>
    10                    </tr>
    11                </thead>
    12                <tbody>
    13                    <tr
    14                        data-toggle="collapse"
    15                        data-target=".multi-collapse1"
    16                        aria-controls="multiCollapseExample1"
    17                    >
    18                        <td>1</td>
    19                        <td>TEST 123</td>
    20                        <td>[email protected]</td>
    21                    </tr>
    22                    <tr class="collapse multi-collapse1" id="multiCollapseExample1">
    23                        <td>Child col 1</td>
    24                        <td>Child col 2</td>
    25                        <td>Child col 3</td>
    26                    </tr>
    27                    <tr
    28                        data-toggle="collapse"
    29                        data-target=".multi-collapse2"
    30                        aria-controls="multiCollapseExample2"
    31                    >
    32                        <td>2</td>
    33                        <td>TEST 456</td>
    34                        <td>[email protected]</td>
    35                    </tr>
    36                    <tr class="collapse multi-collapse2" id="multiCollapseExample2">
    37                        <td>Child col 1</td>
    38                        <td>Child col 2</td>
    39                        <td>Child col 3</td>
    40                    </tr>
    41                </tbody>
    42            </Table>
    43        </>
    44    );
    45}

jsx

In the above table, a few Bootstrap features are developed. Three different properties get attached along with each table row.

    1data-toggle="collapse"
    2data-target=".multi-collapse1"
    3aria-controls="multiCollapseExample1"

jsx

All the above properties define the collapsible content target and allow the row to be toggled using the property called <span class="jsx-3120878690">`data-toggle`</span>.

Once any of the table rows are clicked, their respective child rows should get expanded. However, you need to define a unique identification so that the specific children get expanded.

    1<tr class="collapse multi-collapse1" id="multiCollapseExample1">
    2    <td>Child col 1</td>
    3    <td>Child col 2</td>
    4    <td>Child col 3</td>
    5</tr>

jsx

In the above example, there are two classes defined with the <span class="jsx-3120878690">`class`</span> props, <span class="jsx-3120878690">`Collapse`</span> and <span class="jsx-3120878690">`Multi-collapse1`</span>, which means that once a user clicks the respective row, it is identified by the <span class="jsx-3120878690">`id`</span> props, and individual CSS is applied to either hide or show the error.

To implement completely working expandable rows using React Bootstrap, follow this code demonstration.

    1import React, { Component } from "react";
    2// Table from react-bootstrap
    3import { Table } from "react-bootstrap";
    4// Bootstrap CSS
    5import "bootstrap/dist/css/bootstrap.min.css";
    6// To make rows collapsible
    7import "bootstrap/js/src/collapse.js";
    8
    9export class Example1 extends Component {
    10    render() {
    11        return (
    12            <>
    13                <Table striped bordered hover>
    14                    <thead>
    15                        <tr>
    16                            <th>#</th>
    17                            <th>Name</th>
    18                            <th>Email</th>
    19                        </tr>
    20                    </thead>
    21                    <tbody>
    22                        <tr
    23                            data-toggle="collapse"
    24                            data-target=".multi-collapse1"
    25                            aria-controls="multiCollapseExample1"
    26                        >
    27                            <td>1</td>
    28                            <td>TEST 123</td>
    29                            <td>[email protected]</td>
    30                        </tr>
    31                        <tr class="collapse multi-collapse1" id="multiCollapseExample1">
    32                            <td>Child col 1</td>
    33                            <td>Child col 2</td>
    34                            <td>Child col 3</td>
    35                        </tr>
    36                        <tr
    37                            data-toggle="collapse"
    38                            data-target=".multi-collapse2"
    39                            aria-controls="multiCollapseExample2"
    40                        >
    41                            <td>2</td>
    42                            <td>TEST 456</td>
    43                            <td>[email protected]</td>
    44                        </tr>
    45                        <tr class="collapse multi-collapse2" id="multiCollapseExample2">
    46                            <td>Child col 1</td>
    47                            <td>Child col 2</td>
    48                            <td>Child col 3</td>
    49                        </tr>
    50                    </tbody>
    51                </Table>
    52            </>
    53        );
    54    }
    55}
    56
    57export default Example1;

jsx

This complete example contains a <span class="jsx-3120878690">`react-bootstrap`</span> table, and along with the table row, collapsible properties are defined. And respective child elements have unique identification to expand the specific rows.

Once you run the above example, the initial output will look like this.

![Table without expanded records](../../pluralsight2.imgix.net/guides/a204c4d9-2684-4443-ac06-55a18b94026b_mfMjSHm.html)

Now click on the first row, and the child rows will be expanded, as shown below.

![Expanded first table row](../../pluralsight2.imgix.net/guides/c176fbac-6a0e-49a5-bc6b-f2cf14e9bcf6_fP15lQE.html)

If you click on the second row to expand its child rows, it will look like this.

![Second expanded table row](../../pluralsight2.imgix.net/guides/307cfb3d-ece2-4366-9e0f-0f464258f3c7_vc9egHk.html)

Using the custom table implementation will give you the above output to expand the rows. And to avoid the expanded feature's misbehavior, you can make it more dynamic and manageable.

Using Other Third-Party Libraries
---------------------------------

The table's custom implementation may help to expand the row. But it comes with some limitations, including lack of time, resources, and efforts.

However, you can use other third-party libraries to make table rows expand with a more advanced user interface. There are other libraries you can use to get started with expanding a table:

-   react-bootstrap-table
-   react-bootstrap-table2
-   react-collapsing-table
-   Material-ui collapsible table

Conclusion
----------

Tables are the building blocks of any web or mobile app used to show information; hence, they should be well configured to tackle any development challenges.

Libraries like <span class="jsx-3120878690">`react-bootstrap`</span> and <span class="jsx-3120878690">`react-bootstrap-table`</span> are great choices for using tables and making rows expandable. I hope you will be able to implement a collapsible feature after going through this guide.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Basic D3 and React.js Integration
=================================

### Raphael Alampay

-   Oct 22, 2020
-   6 Min read
-   2,544 Views

-   Oct 22, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   2,544 Views

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
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-targetingthevirtualdom" class="menu-link">Targeting the Virtual DOM</a>
-   <a href="#module-drawingthedatawithd3js" class="menu-link">Drawing the Data with D3.js</a>
-   <a href="#module-creatingadrawfunction" class="menu-link">Creating a Draw Function</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

D3.js is an excellent tool for taking in data and manipulating the DOM based on that data. However, with React.js, the framework uses what's called the virtual DOM to represent HTML elements. This can be quite confusing for developers who are familiar with D3.js but want to integrate it within the context of a React.js app. This guide will show you the basics of calling D3.js from within a React.js component.

Setup
-----

Start off by creating a basic component that will house your D3.js widget called <span class="jsx-3120878690">`MyD3Component`</span>:

    1import React from 'react';
    2import * as d3 from "d3";
    3
    4export default class MyD3Component extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.myReference = React.createRef();
    9  }
    10
    11  render() {
    12    return (
    13      <div ref={this.myReference}>
    14      </div>
    15    );
    16  }
    17}

javascript

The only odd thing here besides the inclusion of the D3.js library (<span class="jsx-3120878690">`import * as d3 from "d3"`</span>), is the creation of a reference in the line <span class="jsx-3120878690">`this.myReference =                                       React.createRef()`</span>. This value will serve as a reference anchor to the virtual DOM, which can be accessed by D3.js instead of using an id or class attribute since we don't really have the HTML rendered yet. The integration of this reference is done by adding it as a value for the <span class="jsx-3120878690">`ref`</span> attribute of the main element that this component renders.

Next, create another React.js component that serves as your "app" and call it <span class="jsx-3120878690">`D3Example`</span>:

    1import React from 'react';
    2import MyD3Component from './MyD3Component';
    3
    4export default class D3Example extends React.Component {
    5  constructor(props) {
    6    super(props);
    7  }
    8
    9  render() {
    10    var data = [10, 20, 30];
    11
    12    return (
    13      <div>
    14        <h1>D3 Example</h1>
    15        <MyD3Component
    16          data={data}
    17        />
    18      </div>
    19    );
    20  }
    21}

javascript

The only thing this component initially does is have some dummy data with three integer elements in it. You pass this data as a property of <span class="jsx-3120878690">`MyD3Component`</span>, which can be accessed by its <span class="jsx-3120878690">`props`</span> as <span class="jsx-3120878690">`props.data`</span>.

Targeting the Virtual DOM
-------------------------

To interact with the virtual DOM, D3.js has to first perform a <span class="jsx-3120878690">`select()`</span> against a target using the reference object <span class="jsx-3120878690">`this.myReference`</span>. To do this, you can create a variable that represents this targeted element as follows:

    1var container = d3.select(this.myReference.current);

javascript

Drawing the Data with D3.js
---------------------------

Using <span class="jsx-3120878690">`container`</span>, you can now begin to take advantage of the various D3.js library calls to visualize your data. Start with something simple by appending a <span class="jsx-3120878690">`p`</span> tag for each element in the <span class="jsx-3120878690">`props.data`</span> attribute passed by <span class="jsx-3120878690">`D3Example`</span>. This can be done with the following code:

    1container
    2  .selectAll("p")
    3  .data(this.props.data)
    4  .enter()
    5  .append("p")
    6  .text(function(d) {
    7    return "Value is " + d;
    8  });

javascript

The first thing the code does is to select all the <span class="jsx-3120878690">`p`</span> tags found within the container. It then inserts data using the <span class="jsx-3120878690">`.data(this.props.data)`</span> call before calling <span class="jsx-3120878690">`enter()`</span>. The next call in the chain will tell D3.js to append a <span class="jsx-3120878690">`p`</span> tag for every element found within <span class="jsx-3120878690">`this.props.data`</span>. Afterwards, the <span class="jsx-3120878690">`.text()`</span> call tells D3.js to add text to each data element extracted. The way the text is presented is logically programmed by a function passed to <span class="jsx-3120878690">`.text()`</span> that returns the text "Value is " plus the actual data element per iteration represented by the variable <span class="jsx-3120878690">`d`</span>.

Creating a Draw Function
------------------------

Finally, you'll want to wrap everything up within a function defined inside the <span class="jsx-3120878690">`MyD3Component`</span> component called <span class="jsx-3120878690">`update`</span>:

    1update() {
    2  var container = d3.select(this.myReference.current);
    3
    4  container
    5    .selectAll("p")
    6    .data(this.props.data)
    7    .enter()
    8    .append("p")
    9    .text(function(d) {
    10      return "Value is " + d;
    11    });
    12}

javascript

Call <span class="jsx-3120878690">`update()`</span> as the component is loaded by invoking it within the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method:

    1componentDidMount() {
    2  this.update();
    3}

javascript

Overall Code
------------

Your final code should look like the following:

### D3Example

    1import React from 'react';
    2import MyD3Component from './MyD3Component';
    3
    4export default class D3Example extends React.Component {
    5  constructor(props) {
    6    super(props);
    7  }
    8
    9  render() {
    10    var data = [10, 20, 30];
    11
    12    return (
    13      <div>
    14        <h1>D3 Example</h1>
    15        <MyD3Component
    16          data={data}
    17        />
    18      </div>
    19    );
    20  }
    21}

javascript

### MyD3Component

    1import React from 'react';
    2import * as d3 from "d3";
    3
    4export default class MyD3Component extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.myReference = React.createRef();
    9  }
    10
    11  componentDidMount() {
    12    this.update();
    13  }
    14
    15  update() {
    16    var container = d3.select(this.myReference.current);
    17
    18    container
    19      .selectAll("p")
    20      .data(this.props.data)
    21      .enter()
    22      .append("p")
    23      .text(function(d) {
    24        return "Value is " + d;
    25      });
    26  }
    27
    28  render() {
    29    return (
    30      <div ref={this.myReference}>
    31      </div>
    32    );
    33  }
    34}

javascript

Once mounted to your HTML document, the output of the code should look like the following:

![output-for-d3-example-component](../../pluralsight2.imgix.net/guides/29e92590-44fb-4286-9e40-3aad3c31f90a_Screenshot_from_2020-10-20_00-54-27.html)

Conclusion
----------

D3.js invoked within React.js takes a little getting used to due to the use of the virtual DOM from React.js. It can be quite confusing at first, but the trick is to follow these simple steps:

1.  Create a reference object using <span class="jsx-3120878690">`React.createRef()`</span> and attach it as a value to the target element via the <span class="jsx-3120878690">`ref`</span> attribute.
2.  Use the <span class="jsx-3120878690">`this.myReference.current`</span> property of the reference and pass it to D3.js' <span class="jsx-3120878690">`select`</span> call to create a container.
3.  Invoke your D3.js code within the referenced container.
4.  In a React.js approach, have your D3.js logic wrapped in a utility function so it can be easily called when a component has to be updated with new data.

Try it out yourself by extending the example to make a call to D3.js' <span class="jsx-3120878690">`attr()`</span> function to define the size of the area where you would draw your D3.js visualization and draw a border around it using D3.js' <span class="jsx-3120878690">`style()`</span> call.

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

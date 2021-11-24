<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Change Props in Stateless React.js Components through Parent Functions
======================================================================

### Raphael Alampay

-   Sep 28, 2020
-   7 Min read
-   7,049 Views

-   Sep 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   7,049 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-propsasstoreofvalues" class="menu-link">Props as Store of Values</a>
-   <a href="#module-updatingpropsfrommethodcalls" class="menu-link">Updating Props From Method Calls</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

This guide will analyze the primary role of <span class="jsx-3120878690">`props`</span> in a React.js component, how it is different from <span class="jsx-3120878690">`state`</span>, and when to use it over <span class="jsx-3120878690">`state`</span>. This will be done by seeing how <span class="jsx-3120878690">`props`</span> values are changed within a component as well as how they can be used to update the <span class="jsx-3120878690">`state`</span> of an external component.

Developers sometimes interchange <span class="jsx-3120878690">`props`</span> and <span class="jsx-3120878690">`state`</span> as both can be accessed via the instance of a component and hold data. However, if a component needs to maintain data independent of external components calling it, then <span class="jsx-3120878690">`state`</span> should be used. If a component needs to render data and invoke functions from another component, those data should be passed through <span class="jsx-3120878690">`props`</span>.

Setup
-----

Suppose that you have two components, <span class="jsx-3120878690">`Display`</span> and <span class="jsx-3120878690">`Controls`</span>. <span class="jsx-3120878690">`Display`</span> will maintain all display information of the application. For now, it will be a simple <span class="jsx-3120878690">`message`</span> maintained within the <span class="jsx-3120878690">`state`</span> of <span class="jsx-3120878690">`Display`</span>. To update the <span class="jsx-3120878690">`message`</span> of <span class="jsx-3120878690">`Display`</span>, you will have to invoke its method, <span class="jsx-3120878690">`updateMessage(message)`</span>.

### Display

Create a component <span class="jsx-3120878690">`Display`</span> which initially looks like this:

    1import React from 'react';
    2
    3export default class Display extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: ""
    9    }
    10  }
    11
    12  updateMessage(message) {
    13    this.setState({
    14      message: message
    15    });
    16  }
    17
    18  render() {
    19    return (
    20      <div>
    21        {this.state.message}
    22      </div>
    23    );
    24  }
    25}

javascript

Notice that all <span class="jsx-3120878690">`updateMessage(message)`</span> is doing is updating the <span class="jsx-3120878690">`message`</span> within <span class="jsx-3120878690">`Display`</span>'s <span class="jsx-3120878690">`state`</span> by invoking <span class="jsx-3120878690">`setState()`</span>.

### Controls

Next, create a <span class="jsx-3120878690">`Controls`</span> component that will contain an <span class="jsx-3120878690">`input`</span> element. <span class="jsx-3120878690">`Controls`</span> will be a stateless component—that is, you will not be maintaining any <span class="jsx-3120878690">`state`</span> values within it. Instead, it will make use of values in <span class="jsx-3120878690">`props`</span> to be rendered within it.

Create a <span class="jsx-3120878690">`Controls`</span> component that looks like the following:

    1import React from 'react';
    2
    3export default class Controls extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {}
    8  }
    9
    10  render() {
    11    <div>
    12      <input
    13        type="text"
    14      />
    15      Message: {this.props.message}
    16    </div>
    17  }
    18}

javascript

Props as Store of Values
------------------------

Notice that in <span class="jsx-3120878690">`Controls`</span>'s constructor, <span class="jsx-3120878690">`props`</span> is passed. This means that <span class="jsx-3120878690">`props`</span> as a set of values are always passed to a component by another component. In this case, that includes values coming from <span class="jsx-3120878690">`Display`</span> towards <span class="jsx-3120878690">`Controls`</span>. Within the constructor, a React.js component calls <span class="jsx-3120878690">`super(props)`</span> to store the passed <span class="jsx-3120878690">`props`</span> as a property of the component (since everything eventually extends <span class="jsx-3120878690">`React.Component`</span>, every component has the <span class="jsx-3120878690">`props`</span> member within it).

Now, in the following line within <span class="jsx-3120878690">`Controls`</span>'s render you have:

    1Message: {this.props.message}

jsx

This allows this component to display the values of <span class="jsx-3120878690">`props`</span> that were passed to it—in this case, the <span class="jsx-3120878690">`message`</span>.

Updating Props From Method Calls
--------------------------------

How then can you update <span class="jsx-3120878690">`message`</span> within <span class="jsx-3120878690">`Display`</span>? The trick is to update the state of the component calling <span class="jsx-3120878690">`Display`</span>. To do so, you should be able to invoke <span class="jsx-3120878690">`Display`</span>'s <span class="jsx-3120878690">`updateMessage(message)`</span> method from <span class="jsx-3120878690">`Controls`</span> by passing it to <span class="jsx-3120878690">`props`</span> as well. You have to first invoke <span class="jsx-3120878690">`Controls`</span> within <span class="jsx-3120878690">`Display`</span> and pass <span class="jsx-3120878690">`message`</span> as well as <span class="jsx-3120878690">`updateMessage`</span> to its props by a set of key value pairs. Import it first at the top part of <span class="jsx-3120878690">`Display`</span>:

    1import Controls from "./Controls";

javascript

This assumes that <span class="jsx-3120878690">`Controls.js`</span> is within the same directory as <span class="jsx-3120878690">`Display.js`</span>.

Next, display <span class="jsx-3120878690">`Controls`</span> within <span class="jsx-3120878690">`Display`</span>'s <span class="jsx-3120878690">`render()`</span>:

    1render() {
    2  return (
    3    <div>
    4      {this.state.message}
    5      <hr/>
    6      <Controls
    7        message={this.state.message}
    8        updateMessage={this.updateMessage.bind(this)}
    9      />
    10    </div>
    11  );
    12}

javascript

Notice how <span class="jsx-3120878690">`message`</span> and <span class="jsx-3120878690">`updateMessage`</span> become keys that <span class="jsx-3120878690">`Controls`</span> assigned a value and a method, just like passing values of attributes in an HTML element.

Next, the value of the <span class="jsx-3120878690">`input`</span> element of <span class="jsx-3120878690">`Controls`</span> should be bound to the <span class="jsx-3120878690">`props.message`</span>.

    1<input
    2  type="text"
    3  value={this.props.message}
    4/>

jsx

This means that if <span class="jsx-3120878690">`props.message`</span> is updated, the value will displayed within <span class="jsx-3120878690">`input`</span>. But the only way to <span class="jsx-3120878690">`update`</span> the <span class="jsx-3120878690">`props`</span> of <span class="jsx-3120878690">`Controls`</span> if it is passed by the calling component, <span class="jsx-3120878690">`Display`</span>.

Next, create a method within <span class="jsx-3120878690">`Controls`</span> called <span class="jsx-3120878690">`updateMessage(event)`</span> that will be bound to the <span class="jsx-3120878690">`onChange`</span> attribute of the <span class="jsx-3120878690">`input`</span> element.

    1updateMessage(event) {
    2  this.props.updateMessage(event.target.value);
    3}

javascript

Notice that it accepts <span class="jsx-3120878690">`event`</span>, which contains <span class="jsx-3120878690">`target`</span>, which is a reference to the <span class="jsx-3120878690">`input`</span> element it is bound to. The <span class="jsx-3120878690">`target`</span>'s <span class="jsx-3120878690">`value`</span> will then be the value that the user put in. You pass this value to the <span class="jsx-3120878690">`updateMessage`</span> invoked from <span class="jsx-3120878690">`props`</span>, which is currently a reference to the <span class="jsx-3120878690">`updateMessage`</span> of the calling component <span class="jsx-3120878690">`Display`</span>. Update <span class="jsx-3120878690">`Controls`</span>'s <span class="jsx-3120878690">`input`</span> element to hook in <span class="jsx-3120878690">`updateMessage`</span>:

    1<input
    2  type="text"
    3  value={this.props.message}
    4  onChange={this.updateMessage.bind(this)}
    5/>

jsx

Overall Code
------------

Your final code should look like the following:

### Display

    1import React from 'react';
    2import Controls from './Controls';
    3
    4export default class Display extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      message: ""
    10    }
    11  }
    12
    13  updateMessage(message) {
    14    this.setState({
    15      message: message
    16    });
    17  }
    18
    19  render() {
    20    return (
    21      <div>
    22        {this.state.message}
    23        <hr/>
    24        <Controls
    25          message={this.state.message}
    26          updateMessage={this.updateMessage.bind(this)}
    27        />
    28      </div>
    29    );
    30  }
    31}

javascript

### Controls

    1import React from 'react';
    2
    3export default class Controls extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {}
    8  }
    9
    10  updateMessage(event) {
    11    this.props.updateMessage(event.target.value);
    12  }
    13
    14  render() {
    15    return (
    16      <div>
    17        <input
    18          type="text"
    19          value={this.props.message}
    20          onChange={this.updateMessage.bind(this)}
    21        />
    22      </div>
    23    );
    24  }
    25}

javascript

As the user enters values in the <span class="jsx-3120878690">`input`</span> element, <span class="jsx-3120878690">`updateMessage`</span> of <span class="jsx-3120878690">`Controls`</span> will be triggered, which in turn calls <span class="jsx-3120878690">`updateMessage`</span> of <span class="jsx-3120878690">`Display`</span>. Since the logic of <span class="jsx-3120878690">`updateMessage`</span> of <span class="jsx-3120878690">`Display`</span> updates its state, it forces a call to <span class="jsx-3120878690">`render()`</span>, which in turn passes the updated <span class="jsx-3120878690">`message`</span> back to <span class="jsx-3120878690">`Controls`</span> via <span class="jsx-3120878690">`props`</span>, which in turn is bound to <span class="jsx-3120878690">`Controls`</span>'s <span class="jsx-3120878690">`input`</span>'s value.

Conclusion
----------

<span class="jsx-3120878690">`props`</span> are different from <span class="jsx-3120878690">`state`</span> because <span class="jsx-3120878690">`props`</span> values are passed to a component whereas <span class="jsx-3120878690">`state`</span> values are initialized within a component. A component can be stateless and only use the <span class="jsx-3120878690">`props`</span> values passed to it. These values can either contain references to a calling component's <span class="jsx-3120878690">`state`</span> values or references to a calling component's method. <span class="jsx-3120878690">`props`</span> containing a method can invoke that method from the calling component. If the <span class="jsx-3120878690">`state`</span> of a calling component's <span class="jsx-3120878690">`Display`</span> method is updated, the component that is called <span class="jsx-3120878690">`Controls`</span> will receive the updated values, thus updating its <span class="jsx-3120878690">`props`</span>.

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

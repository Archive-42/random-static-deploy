<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Show and Hide ReactJS Components
=======================================

### Gaurav Singhal

-   Nov 2, 2020
-   12 Min read
-   180,279 Views

-   Nov 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">12 Min</span> read
-   180,279 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

296

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-hideorshowcomponentinreact" class="menu-link">Hide or Show Component in React</a>
-   <a href="#module-hideorshowelementsinreact" class="menu-link">Hide or Show Elements in React</a>
-   <a href="#module-hideorshowcomponentselementsusingprops" class="menu-link">Hide or Show Components/Elements Using Props</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React is a wholly component-based architecture used to create a rich user interface and components.

Everything in the React app is a component, so we have to play around with components most of the time; hence, we may have to hide or show different components based on the specific condition.

To show or hide any component using any condition, we should have the values, and based on those values, we can hide or show a component using different conditional operators.

In this guide, we are going to learn the simplest ways to hide or show components in React.

Hide or Show Component in React
-------------------------------

A component is a single unit, and combining multiple units creates a complete application. But what if we want to hide or show a component frequently?

Let’s say we have a component called <span class="jsx-3120878690">`Demo1`</span>, and we want to hide it based on the Boolean value true/false. We can use different conditional operators to achieve this functionality.

Create three different files called <span class="jsx-3120878690">`Demo1.js`</span>, <span class="jsx-3120878690">`Demo2.js`</span>, and <span class="jsx-3120878690">`Demo3.js`</span>, and paste the following lines of source code into them:

**Demo1.js**

    1import React, { Component } from "react";
    2
    3class Demo1 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9  }
    10
    11  render() {
    12    return <div>This is Demo1 component</div>;
    13  }
    14}
    15
    16export default Demo1;

jsx

**Demo2.js**

    1import React, { Component } from "react";
    2
    3class Demo2 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9  }
    10
    11  render() {
    12    return <div>This is Demo2 component</div>;
    13  }
    14}
    15
    16export default Demo2;

jsx

**Demo3.js**

    1import React, { Component } from "react";
    2
    3class Demo3 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9  }
    10
    11  render() {
    12    return <div>This is Demo3 component</div>;
    13  }
    14}
    15
    16export default Demo3;

jsx

All these files are child components, or independent components we are going to use into a parent component called <span class="jsx-3120878690">`index.js`</span>.

Open the file **index.js** and create three different variables into the state, like this.:

    1constructor() {
    2    super();
    3    this.state = {
    4      name: "React",
    5      showHideDemo1: false,
    6      showHideDemo2: false,
    7      showHideDemo3: false
    8    };
    9  }

jsx

In state objects, we have three different Boolean variables with <span class="jsx-3120878690">`false`</span> as the default value, and these variables will be used to show or hide the specific component.

We will use logical and operator, <span class="jsx-3120878690">`(&&)`</span>, in order to show components based on the condition along with the button click event, which is explained in the following example.

**Index.js**

    1import React, { Component } from "react";
    2import { render } from "react-dom";
    3import Demo1 from "./Demo1";
    4import Demo2 from "./Demo2";
    5import Demo3 from "./Demo3";
    6
    7class App extends Component {
    8  constructor() {
    9    super();
    10    this.state = {
    11      name: "React",
    12      showHideDemo1: false,
    13      showHideDemo2: false,
    14      showHideDemo3: false
    15    };
    16    this.hideComponent = this.hideComponent.bind(this);
    17  }
    18
    19  hideComponent(name) {
    20    console.log(name);
    21    switch (name) {
    22      case "showHideDemo1":
    23        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
    24        break;
    25      case "showHideDemo2":
    26        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
    27        break;
    28      case "showHideDemo3":
    29        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
    30        break;
    31      default:
    32        null;
    33    }
    34  }
    35
    36  render() {
    37    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    38    return (
    39      <div>
    40        {showHideDemo1 && <Demo1 />}
    41        <hr />
    42        {showHideDemo2 && <Demo2 />}
    43        <hr />
    44        {showHideDemo3 && <Demo3 />}
    45        <hr />
    46        <div>
    47          <button onClick={() => this.hideComponent("showHideDemo1")}>
    48            Click to hide Demo1 component
    49          </button>
    50          <button onClick={() => this.hideComponent("showHideDemo2")}>
    51            Click to hide Demo2 component
    52          </button>
    53          <button onClick={() => this.hideComponent("showHideDemo3")}>
    54            Click to hide Demo3 component
    55          </button>
    56        </div>
    57      </div>
    58    );
    59  }
    60}
    61
    62render(<App />, document.getElementById("root"));

jsx

Let’s understand how this example works.

-   We have three different state variables along with the default value.
-   We imported three child components and used the condition that the child component will be rendered only if we get <span class="jsx-3120878690">`true`</span> as a value from the variable. If the condition is <span class="jsx-3120878690">`true`</span>, then it will be rendered; otherwise, it will not.
-   We have three different buttons, and on click of every button, the event is attached using a switch case in order to change the value of the state variables.
-   The click event is called <span class="jsx-3120878690">`hideComponent()`</span>, which is used to change the state values based on the button click event along with the button name, which decides that the specific state value will be updated.

    1switch (name) {
    2      case "showHideDemo1":
    3        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
    4        break;
    5      case "showHideDemo2":
    6        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
    7        break;
    8      case "showHideDemo3":
    9        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
    10        break;
    11      default:
    12        null;
    13    }

jsx

From the button click event, we will get a string that identifies which button is clicked. Based on the given string, the appropriate state value will be updated.

This is how, based on the state value and the logical and operator, we can show or hide the components directly. Other ways are also possible. For example, we can make use of logical not, <span class="jsx-3120878690">`(!)`</span>, and logical or operator, <span class="jsx-3120878690">`(||)`</span>.

This is an example of how to hide or show a component based on the condition, but it is also possible to hide or show elements. Let’s see how that works in the next section of this guide.

Hide or Show Elements in React
------------------------------

We have seen an example of how to hide or show a component, but we may need to hide or show a specific element. We can do this using another approach.

Let’s jump directly to the example, where we will create a simple form along with two input boxes and one submit button.

Create a new file called <span class="jsx-3120878690">`Demo4.js`</span> and paste the following lines of source code.

    1import React, { Component } from "react";
    2
    3class Demo4 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      showHideFName: true,
    8      showHideLName: true
    9    };
    10    this.hideComponent = this.hideComponent.bind(this);
    11  }
    12
    13  hideComponent(name) {
    14    switch (name) {
    15      case "showHideFName":
    16        this.setState({ showHideFName: !this.state.showHideFName });
    17        break;
    18      case "showHideLName":
    19        this.setState({ showHideLName: !this.state.showHideLName });
    20        break;
    21      default:
    22        null;
    23    }
    24  }
    25
    26  render() {
    27    const { showHideFName, showHideLName } = this.state;
    28    return (
    29      <div>
    30        <table>
    31          {showHideFName && (
    32            <tr>
    33              <td>First Name :</td>
    34              <td>
    35                <input type="text" id="fName" />
    36              </td>
    37            </tr>
    38          )}
    39          {showHideLName && (
    40            <tr>
    41              <td>Last Name :</td>
    42              <td>
    43                <input type="text" id="lName" />
    44              </td>
    45            </tr>
    46          )}
    47          {showHideFName && showHideLName && (
    48            <tr>
    49              <td>
    50                <button>Submit</button>
    51              </td>
    52            </tr>
    53          )}
    54          <tr>
    55            <td>
    56              <button onClick={() => this.hideComponent("showHideFName")}>
    57                Hide First Name
    58              </button>
    59            </td>
    60            <td>
    61              <button onClick={() => this.hideComponent("showHideLName")}>
    62                Hide Last Name
    63              </button>
    64            </td>
    65          </tr>
    66        </table>
    67      </div>
    68    );
    69  }
    70}
    71
    72export default Demo4;

jsx

It seems like a huge file, so let’s discuss each and everything about this component.

First of all, we have two different state variables along with the default value.

The <span class="jsx-3120878690">`render ()`</span> method contains the different form controls along with the submit button, but it is surrounded by the condition, which looks like this.

    1{showHideFName && (
    2            <tr>
    3              <td>First Name :</td>
    4              <td>
    5                <input type="text" id="fName" />
    6              </td>
    7            </tr>
    8          )}

jsx

The specific table row will only be rendered if the condition will be <span class="jsx-3120878690">`true`</span>; otherwise, it won’t be visible into the DOM. The same thing applies to the other form controls, including the last name input box and the submit button control.

At last, we have an additional two buttons with the event attached, which are used to trigger an action by providing the unique string that identifies which button was clicked.

As soon as the button is clicked, the method <span class="jsx-3120878690">`hideComponent()`</span> comes into the picture. It is used to update the state values based on the unique identifier that we are getting from the button control.

    1switch (name) {
    2      case "showHideFName":
    3        this.setState({ showHideFName: !this.state.showHideFName });
    4        break;
    5      case "showHideLName":
    6        this.setState({ showHideLName: !this.state.showHideLName });
    7        break;
    8      default:
    9        null;
    10    }

jsx

We have two use cases. We can hide the first name input control if the first button is clicked; otherwise, the other case will be matched, and if any of the string matches with the desired value, then the appropriate state value will be updated.

So based on the click event, the state values will be updated, and based on the Boolean value, the specific table row hides or shows into the DOM.

Hide or Show Components/Elements Using Props
--------------------------------------------

Props is a read-only piece of data which is used to consume some information or perform some action. Hence, props can also be used to hide or show a component.

For example, if we pass props, based on the props value, we can hide or show the elements, just like in the below example.

    1<Demo1 
    2    showHideDemo1={this.state.showHideDemo1} 
    3/>

jsx

Here in this example, the props we have declared is called <span class="jsx-3120878690">`showHideDemo1`</span> along with the state value. Now, let’s consume this props in the child component.

    1import React, { Component } from "react";
    2
    3class Demo1 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9  }
    10
    11  render() {
    12    const { showHideDemo1 } = this.props;
    13    return <>{showHideDemo1 && <div>This is Demo1 component</div>}</>;
    14  }
    15}
    16
    17export default Demo1;

jsx

In this example, we have used props from the parent component and will show or hide the <span class="jsx-3120878690">`div`</span> conditionally using the same props.

This is another approach to hide or show different elements based on the condition or the variable’s value. The choice will be yours based on the approach most suitable for your requirements.

Conclusion
----------

In this guide, we have learned two different approaches to hide or show either a component or an element.

Using the logical operator is probably the best option because it is a pretty optimistic way to render components based on the condition.

Please follow my other React guides to learn more. If you have any queries, feel free to ask at [Codealphabet](https://www.codealphabet.com/contact). Stay tuned for more exciting guides.

296

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

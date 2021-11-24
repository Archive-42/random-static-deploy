<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Add Data into an Array in a State Object
========================================

### Pavneet Singh

-   Nov 18, 2020
-   5 Min read
-   85,015 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   85,015 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

76

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-displayarraydatainacomponent" class="menu-link">Display Array Data in a Component</a>
-   <a href="#module-displayupdatedarraydata" class="menu-link">Display Updated Array Data</a>
-   <a href="#module-handleasynchronouschangesinthestate" class="menu-link">Handle Asynchronous Changes in the State</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

State management is a vital concept to understand to develop a dynamic UI component. A React component can be categorized as either stateful or stateless. A class component uses a state object to update the UI by using a <span class="jsx-3120878690">`setstate`</span> function that can take updated values or a function to trigger a rendering cycle with the updated data. On the other hand, functional components use React hooks to track data changes of UI updates.

Arrays are often used as a data source to create complex UI elements such as tables, lists, or grids. A state object can store arrays that can be updated with a response from an API or users. React tracks the changes in a state object using a shallow comparison that does not compare attributes of objects while comparing objects.

This guide explains the steps to modify the state of a component using an array.

Display Array Data in a Component
---------------------------------

An array can be traversed using a conventional <span class="jsx-3120878690">`for`</span> loop or <span class="jsx-3120878690">`map`</span> function. The content of an array can be traversed and transformed into UI elements using the <span class="jsx-3120878690">`map`</span> function, which will apply the passed transformer function to each array element and return a list of elements. This can also be done directly in a JSX scope ('{}') to directly render elements on a component. Follow the below example to implement a list of users with an add button to display input value in the list:

    1import React, { Component } from "react";
    2import "./style.css";
    3
    4export default class App extends Component {
    5  state = {
    6    cart: ["Corn", "Potato"],
    7  };
    8
    9  saveInput = (e) => {
    10    this.setState({ input: e.target.value });
    11  };
    12
    13  addNewItem = () => {
    14    let { cart, input } = this.state;
    15    cart.push(input);
    16    // this.state.cart.push(this.state.input); // same as above, though bad practice 
    17  };
    18
    19  render() {
    20    return (
    21      <div>
    22        <input
    23          type="text"
    24          onChange={this.saveInput}
    25        />
    26        <button onClick={this.addNewItem}> Add Item </button>
    27        <ol>
    28          {this.state.cart.map((subItems, sIndex) => {
    29            return <li key={sIndex}> {subItems}</li>
    30          })}
    31        </ol>
    32      </div>
    33    );
    34  }
    35}

JSX

The <span class="jsx-3120878690">`state`</span> object contains a <span class="jsx-3120878690">`cart`</span> array with two values. The <span class="jsx-3120878690">`saveInput`</span> method saves the input from the user in the state object with an <span class="jsx-3120878690">`input`</span> key label. On button click event, the <span class="jsx-3120878690">`cart`</span> and the <span class="jsx-3120878690">`input`</span> value are retrieved using the destructuring syntax, and the input value is added in the cart array. This is a bad approach because React will never know about the changes in the state unless the <span class="jsx-3120878690">`setState`</span> method is used.

> **Note:** In the above example, the list is updated as soon as you start typing because <span class="jsx-3120878690">`onChange`</span> updates the <span class="jsx-3120878690">`state`</span> that re-renders the <span class="jsx-3120878690">`App`</span> component.

Display Updated Array Data
--------------------------

In order to update the array in the state object, a new array object must be supplied to the <span class="jsx-3120878690">`input`</span> key using the <span class="jsx-3120878690">`setState`</span> method:

    1addNewItem = () => {
    2  let { cart, input } = this.state;
    3  cart.push(input);
    4  this.setState({cart: cart});
    5};

JSX

The <span class="jsx-3120878690">`setState`</span> method will replace the existing array with the updated array, though this can also be achieved with a shorter syntax using the spread (<span class="jsx-3120878690">`...`</span>) operator:

    1addNewItem = () => {
    2  this.setState({cart: [...this.state.cart, this.state.input]});
    3};

JSX

Or it can also be done using the <span class="jsx-3120878690">`concat`</span> method:

    1addNewItem = () => {
    2  this.setState({cart: this.state.cart.concat(this.state.input)});
    3};

JSX

The <span class="jsx-3120878690">`concat`</span> method creates and returns a new array by combining the <span class="jsx-3120878690">`cart`</span> array and the <span class="jsx-3120878690">`input`</span> value.

Handle Asynchronous Changes in the State
----------------------------------------

It is critical to assure the integrity of the state when handing bulky or complex objects. The <span class="jsx-3120878690">`setState`</span> method is asynchronous, which means the data in the <span class="jsx-3120878690">`state`</span> object will not be updated instantly, and React can combine multiple state change calls for performance gain. The data can also be updated anytime, so to avoid possible side effects of asynchronous behavior, it is recommended to use the snapshot of the previous state to create a new state:

    1addNewItem = () => {
    2  this.setState((prevState, props) => ({
    3    cart: [...prevState.cart, prevState.input],
    4  }));
    5};

JSX

And the <span class="jsx-3120878690">`props`</span> can also be skipped to only use <span class="jsx-3120878690">`prevState`</span>:

    1addNewItem = () => {
    2  this.setState(prevState => ({
    3    cart: [...prevState.cart, prevState.input],
    4  }));
    5};

JSX

Tips
----

• React uses a key to track changes in the dynamic elements (<span class="jsx-3120878690">`li`</span>) so the <span class="jsx-3120878690">`index`</span> and element data can be used to make a unique key:

    1{
    2  this.state.cart.map((subItems, sIndex) => {
    3  return <li key={`${subItems}${sIndex}`}> {subItems}</li>;
    4  })
    5}

JSX

• Avoid using consecutive <span class="jsx-3120878690">`setState`</span> calls. Instead, update values in one go with <span class="jsx-3120878690">`setState({ foo: value1, bar: value                                       });`</span>.

Conclusion
----------

Immutability is an important principle in React to assure data integrity and consistency in an app. Use the spread operator and previous state to generate a new state and ensure the updated value in the state object. The complete optimized code of <span class="jsx-3120878690">`App.js`</span> is available in this [Github gist file](../../gist.githubusercontent.com/Pavneet-Sing/3259b10769d056e19864099d8a7d45a5/raw/81af51c9f1b3524f233896565bbfcef2d85bcc01/App.html). Happy coding!

76

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

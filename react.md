<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

React.js and Inheritance
========================

### Gaurav Singhal

-   Nov 10, 2020
-   6 Min read
-   12,006 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   12,006 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

28

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatisinheritance" class="menu-link">What is Inheritance?</a>
-   <a href="#module-implementinheritanceinreact" class="menu-link">Implement Inheritance in React</a>
-   <a href="#module-usingcompositioninreact" class="menu-link">Using Composition in React</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Code reusability is an impactful aspect in any component-based library or a framework. React provides the composition and inheritance for code reusability. Inheritance is used to couple components and their properties, which allows an app to implement code sharing between the components.

This guide provides an overview of how to implement inheritance and see the composition model usage.

What is Inheritance?
--------------------

Inheritance is a way to achieve code reusability when some objects have the same number of properties that can be shared across the app. Inheritance allows the app to do the coupling between the parent-child component and reuse properties such as state values and function in its child components.

React does not use inheritance except in the initial component class, which extends from the <span class="jsx-3120878690">`react`</span> package.

Implement Inheritance in React
------------------------------

Inheritance uses the keyword <span class="jsx-3120878690">`extends`</span> to allow any component to use the properties and methods of another component connected with the parent. Using the <span class="jsx-3120878690">`extends`</span> keyword, you can allow the current component to access all the component's properties, including the function, and trigger it from the child component.

This example creates one component called **ParentClass.jsx**.

    1import React from "react";
    2
    3class ParentClass extends React.Component {
    4  constructor(props) {
    5    super(props);
    6    this.callMe = this.callMe.bind(this);
    7  }
    8
    9  // ParentClass function
    10  callMe() {
    11    console.log("This is a method from parent class");
    12  }
    13
    14  render() {
    15    return false;
    16  }
    17}

jsx

<span class="jsx-3120878690">`ParentClass`</span> extends the component from React as <span class="jsx-3120878690">`React.component`</span>, which means the newly created component itself is using the inheritance. After creating parent class/component, create one child component, **Example.jsx**.

    1export default class Example extends ParentClass {
    2  constructor() {
    3    super();
    4  }
    5  render() {
    6    this.callMe();
    7    return false;
    8  }
    9}

jsx

The <span class="jsx-3120878690">`Example`</span> class extends <span class="jsx-3120878690">`ParentClass`</span> so the child class will access all the properties and methods created inside the parent component.

    1render() {
    2  this.callMe();
    3  return false;
    4}

jsx

Here in the child class, the <span class="jsx-3120878690">`this.callMe()`</span> function is called the part of parent class implementation, so the parent component's properties and its methods can be accessed by implementing inheritance in the child component.

Using Composition in React
--------------------------

As per the official React [documentation](https://reactjs.org/docs/composition-vs-inheritance.html):

> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components

Compared to the inheritance, the composition model is much more robust and less coupled because it does inheritance but doesn't extend the classes directly.

The composition model uses the parent-child relationship by passing the state, props, and function to the child component as a prop's value. The child component can access or trigger any changes to each other. For example, you have two-component <span class="jsx-3120878690">`ParentComponent`</span> and a <span class="jsx-3120878690">`ChildComponent`</span>, and the parent's properties get consumed in the child component.

Now create one file called **ParentComponent.jsx**.

    1import React from "react";
    2import ChildComponent from "./ChildComponent";
    3
    4class ParentComponent extends React.Component {
    5    constructor(props) {
    6        super(props);
    7        this.state = {
    8            message: "This is a message from parent class"
    9        };
    10    }
    11
    12    render() {
    13        return (
    14            <div>
    15                <ChildComponent message={this.state.message} />
    16            </div>
    17        );
    18    }
    19}
    20
    21export default ParentComponent;

jsx

From the parent component, the value <span class="jsx-3120878690">`this.state.message`</span> is passed to the child component without extending any component.

Create one file called **ChildComponent.jsx**.

    1import React from "react";
    2
    3class ChildComponent extends React.Component {
    4    render() {
    5        const { message } = this.props;
    6        return (
    7            <div>
    8                <p>
    9                    Message from Parent component : <b>{message}</b>
    10                </p>
    11            </div>
    12        );
    13    }
    14}
    15
    16export default ChildComponent;

jsx

The child component accesses the parent component's property called <span class="jsx-3120878690">`message`</span> without extending the <span class="jsx-3120878690">`ParentComponent`</span>.

In the same way, any function can also be triggered by the child component .

    1clickMe() {
    2    console.log("Action triggered from child component");
    3}

jsx

And pass it to the child component.

    1render() {
    2    return (
    3        <div>
    4            <ChildComponent message={this.state.message} clickMe={this.clickMe} />
    5        </div>
    6    );
    7}

jsx

The function gets accessed as a prop from the child component and can also get triggered as below.

    1import React from "react";
    2
    3class ChildComponent extends React.Component {
    4    render() {
    5        const { message } = this.props;
    6        return (
    7            <div>
    8                <p>
    9                    Message from Parent component : <b>{message}</b>
    10                </p>
    11                <button onClick={this.props.clickMe}>Click Me</button>
    12            </div>
    13        );
    14    }
    15}
    16
    17export default ChildComponent;

jsx

The function <span class="jsx-3120878690">`clickMe()`</span> is triggered by the button click event, and the parent component will process the event.

    1<button onClick={this.props.clickMe}>Click Me</button>

jsx

The composition model allows you to restrict code overuse and decouple components, which can not be possible with inheritance because it needs all the components in sequence. It may lead to code overuse or decomposition at any given point in time.

Conclusion
----------

React uses inheritance to initialize class as a component. Apart from that, there is no use to suggest to implement component inheritance chaining.

Instead, the composition model is used to manage the props and function communication and maintain code reusability. You can always use a composition pattern to avoid shared logic behavior.

If you have any queries, feel free to ask at [Codealphabet](https://www.codealphabet.com/contact).

28

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

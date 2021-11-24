<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Find Specific Elements from the DOM in React
============================================

### Gaurav Singhal

-   Nov 10, 2020
-   5 Min read
-   24,319 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   24,319 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

17

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-accessadomelementusingref" class="menu-link">Access a DOM Element Using Ref</a>
-   <a href="#module-accessadomelementusingreactdomfinddomnode" class="menu-link">Access a DOM Element Using ReactDOM.findDOMNode</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Web apps contain various HTML elements rendered into the DOM, and based on user interaction, any of the specific DOM elements can be accessed through code. Accessing DOM elements allows you to fetch elements' HTML content, their child elements, or sometimes a specific element's value to process it.

There are various ways to access any of the DOM elements. In this guide, you are going to learn a few approaches that can help you access some specific DOM elements.

Access a DOM Element Using Ref
------------------------------

<span class="jsx-3120878690">`ref`</span> is a common approach to access various DOM elements that work on setting the <span class="jsx-3120878690">`ref`</span> to an element and accessing it based on the name of <span class="jsx-3120878690">`ref`</span> in the component.

Based on the official [docs](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs), <span class="jsx-3120878690">`ref`</span> is suitable for:

-   Managing focus, text selection, or media playback
-   Triggering imperative animations
-   Integrating with third-party DOM libraries

With React 16.3.0, the way to create <span class="jsx-3120878690">`ref`</span> is different now than in earlier versions of React. Below is the basic syntax to create the <span class="jsx-3120878690">`ref`</span>.

    1this.ref_name = React.createRef();

jsx

The <span class="jsx-3120878690">`ref`</span> created using <span class="jsx-3120878690">`createRef()`</span> and the variable <span class="jsx-3120878690">`ref_name`</span> can be attached to any DOM element.

To demonstrate, create a simple form with input control and a button. Once a user clicks on the button, the input value should be accessed through the <span class="jsx-3120878690">`ref`</span>.

    1constructor(props) {
    2    super(props);
    3    // Created ref
    4    this.myInputRef = React.createRef();
    5    this.getInputValue = this.getInputValue.bind(this);
    6}

jsx

The <span class="jsx-3120878690">`ref`</span> created gets the constructor's input value, creates the form, and assigns <span class="jsx-3120878690">`ref`</span> to the input element.

    1render() {
    2    return (
    3      <>
    4        <div>
    5          <input type="text" ref={this.myInputRef} />
    6          <button onClick={this.getInputValue}>Submit</button>
    7        </div>
    8      </>
    9    );
    10}

jsx

Along with the <span class="jsx-3120878690">`<input>`</span> control, an additional prop is used, <span class="jsx-3120878690">`ref`</span>, followed by the name of the ref created by you previously. Below is the function from which the value of the input gets accessed.

    1getInputValue() {
    2    const inputValue = this.myInputRef.current.value;
    3    console.log(inputValue)
    4}

jsx

So using the statement <span class="jsx-3120878690">`this.myInputRef.current.value`</span>, the input value can be accessed directly. If you want to access the complete HTML element, you can do it as demonstrated below.

    1const inputElement = this.myInputRef.current;

jsx

One thing to keep in mind is that you cannot use <span class="jsx-3120878690">`ref`</span> with a function because it does not have any instance to the current component.

Access a DOM Element Using ReactDOM.findDOMNode
-----------------------------------------------

So far in this guide, you have seen how <span class="jsx-3120878690">`ref`</span> is used to access a DOM element and its value. However, there are other approaches that can also be helpful, and one of them is <span class="jsx-3120878690">`ReactDOM.findDOMNode()`</span>.

<span class="jsx-3120878690">`findDOMNode()`</span> is used to find a specific node from the DOM tree and access its various properties, such as its inner HTML, child elements, type of element, etc. In short, it can return all the supported DOM measurements related to the kind of element.

The syntax to use <span class="jsx-3120878690">`findDOMNode()`</span> in React is as follows:

    1ReactDOM.findDOMNode(component_name)

jsx

Along with <span class="jsx-3120878690">`findDOMNode()`</span>, you can pass the name of the component or element you want to access from the DOM. To illustrate the concept, let's create an example that has input control and a button. With a click on the button, input control should be focused.

Create the <span class="jsx-3120878690">`ref`</span> for input control is as demonstrated below.

    1constructor(props) {
    2    super(props);
    3    this.myInputRef = React.createRef();
    4    this.state = {};
    5    this.onFocusInput = this.onFocusInput.bind(this);
    6}

jsx

After creating the <span class="jsx-3120878690">`ref`</span>, create one input control and add additional props called <span class="jsx-3120878690">`ref`</span>. Once the user clicks the button, the input will be accessed from <span class="jsx-3120878690">`findDOMNode()`</span>.

    1render() {
    2    return (
    3      <>
    4        <div>
    5          <input type="text" ref={this.myInputRef} />
    6          <button onClick={this.onFocusInput}>FOCUS</button>
    7        </div>
    8      </>
    9    );
    10}

jsx

Once the user clicks on the focus button, it goes to the function <span class="jsx-3120878690">`onFocusInput`</span> and tries to find the DOM element based on the <span class="jsx-3120878690">`ref`</span> and then uses the <span class="jsx-3120878690">`focus()`</span> method to focus the selected input control.

    1onFocusInput() {
    2    ReactDOM.findDOMNode(this.myInputRef.current).focus();
    3}

jsx

Observe that as soon as you click on the button, input control is auto-focused, which is done by using <span class="jsx-3120878690">`findDOMNode()`</span> along with the <span class="jsx-3120878690">`focus()`</span> method.

> **Note** : As per the official [docs](https://reactjs.org/docs/react-dom.html#finddomnode), <span class="jsx-3120878690">`findDOMNode()`</span> only works on mounted components (that is, components that are placed in the DOM.) If you try to call on an element that has yet not mounted (like calling <span class="jsx-3120878690">`findDOMNode()`</span> in <span class="jsx-3120878690">`render()`</span> on a component that has yet to be created), an exception will get thrown. <span class="jsx-3120878690">`findDOMNode`</span> cannot be used on function components.

Conclusion
----------

Accessing DOM elements and their current values is a top concern when working in web apps. There should be a suitable approach that makes your DOM manipulation way easier than ever before.

All DOM elements in React can be accessed in multiple ways, such as <span class="jsx-3120878690">`ref`</span> or <span class="jsx-3120878690">`findDOMNode()`</span>, so choose your implementation approach wisely. I hope this guide helped you understand how to access DOM elements.

17

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

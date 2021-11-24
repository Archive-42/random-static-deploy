<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Using the ButtonGroup Component in React Bootstrap
==================================================

### Gaurav Singhal

-   Nov 10, 2020
-   5 Min read
-   2,767 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   2,767 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-implementation" class="menu-link">Implementation</a>
-   <a href="#module-finalcode" class="menu-link">Final Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

<span class="jsx-3120878690">`ButtonGroup`</span> is a wrapper component in React Bootstrap that allows you to group buttons together. It has many use cases in toolbars, pagination, dropdown menus, and related UI components. When grouping buttons together, you need a way to tell which button is clicked from the group to trigger an event. For instance, if you have a <span class="jsx-3120878690">`ButtonGroup`</span> component for pagination, each <span class="jsx-3120878690">`Button`</span> component refers to a page number in your app. When a button is clicked, you need to know the page number associated with that button.

This guide explains how to use <span class="jsx-3120878690">`ButtonGroup`</span> in React Bootstrap to extract relevant information about each button.

Implementation
--------------

Create an empty React project by running:

    1npx create-react-app react-buttongroup-app

shell

Install React Bootstrap and vanilla Bootstrap by running the following command inside the root directory:

    1npm install react-bootstrap bootstrap

shell

Inside the <span class="jsx-3120878690">`App`</span> component, import Bootstrap's stylesheet along with the <span class="jsx-3120878690">`Button`</span>, and <span class="jsx-3120878690">`ButtonGroup`</span> components from React Bootstrap .

    1import './App.css';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import ButtonGroup from 'react-bootstrap/ButtonGroup';
    4import Button from 'react-bootstrap/Button';
    5
    6function App() {
    7
    8  return (
    9    <div className="App">
    10      <header className="App-header">
    11      
    12      </header>
    13    </div>
    14  );
    15}
    16
    17export default App;

jsx

Render three <span class="jsx-3120878690">`Button`</span> components inside the <span class="jsx-3120878690">`ButtonGroup`</span> component, as shown below.

    1import './App.css';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import ButtonGroup from 'react-bootstrap/ButtonGroup';
    4import Button from 'react-bootstrap/Button';
    5
    6function App() {
    7
    8  return (
    9    <div className="App">
    10      <header className="App-header">
    11      <ButtonGroup>
    12        <Button variant="primary" >Button 1</Button>
    13        <Button variant="danger" > Button 2</Button>
    14        <Button variant="warning">Button 3</Button>
    15      </ButtonGroup>
    16      </header>
    17    </div>
    18  );
    19}
    20
    21export default App;

jsx

In order to read any button clicks inside the <span class="jsx-3120878690">`ButtonGroup`</span> component, you need to set up an <span class="jsx-3120878690">`onClick`</span> handler that takes in the <span class="jsx-3120878690">`event`</span> object. This <span class="jsx-3120878690">`event`</span> object can be utilized to extract information about the button clicked. Add a <span class="jsx-3120878690">`value`</span> attribute inside each <span class="jsx-3120878690">`Button`</span> component to identify which button is clicked.

    1import './App.css';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import ButtonGroup from 'react-bootstrap/ButtonGroup';
    4import Button from 'react-bootstrap/Button';
    5
    6function App() {
    7
    8  return (
    9    <div className="App">
    10      <header className="App-header">
    11      <ButtonGroup>
    12        <Button variant="primary" value="Button 1">Button 1</Button>
    13        <Button variant="danger" value="Button 2"> Button 2</Button>
    14        <Button variant="warning" value="Button 3">Button 3</Button>
    15      </ButtonGroup>
    16      </header>
    17    </div>
    18  );
    19}
    20
    21export default App;

jsx

When **Button 1** is clicked, you need to read the value <span class="jsx-3120878690">`Button 1`</span>, and the same goes for the rest of the buttons. This information can be extracted from the event object by accessing the <span class="jsx-3120878690">`value`</span> property on its <span class="jsx-3120878690">`target`</span> property as <span class="jsx-3120878690">`event.target.value`</span>. By setting an <span class="jsx-3120878690">`onClick`</span> event on the <span class="jsx-3120878690">`ButtonGroup`</span> component, you can fire the function <span class="jsx-3120878690">`handleClick`</span> in which you obtain the required information from the <span class="jsx-3120878690">`event`</span> object.

    1...
    2  const handleClick=(e)=>{
    3    console.log(e.target.value)
    4  }
    5  return (
    6    <div className="App">
    7      <header className="App-header">
    8      <ButtonGroup onClick={handleClick}>
    9       ...
    10      </ButtonGroup>
    11      </header>
    12    </div>
    13  );
    14...

jsx

Final Code
----------

Here's the complete code.

    1import './App.css';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import ButtonGroup from 'react-bootstrap/ButtonGroup';
    4import Button from 'react-bootstrap/Button';
    5
    6function App() {
    7  const handleClick=(e)=>{
    8    console.log(e.target.value)
    9  }
    10  return (
    11    <div className="App">
    12      <header className="App-header">
    13      <ButtonGroup onClick={handleClick}>
    14        <Button variant="primary" value="Button 1">Button 1</Button>
    15        <Button variant="danger" value="Button 2"> Button 2</Button>
    16        <Button variant="warning" value="Button 3">Button 3</Button>
    17      </ButtonGroup>
    18      </header>
    19    </div>
    20  );
    21}
    22
    23export default App;

jsx

When any of the buttons are clicked, the value of that button passes through the <span class="jsx-3120878690">`onClick`</span> handler and can be accessed inside the <span class="jsx-3120878690">`handleClick`</span> function, as shown above. You can check the value by clicking the button and reading the console.

Conclusion
----------

The approach followed in this guide of using <span class="jsx-3120878690">`ButtonGroup`</span> can be extended to **input fields** and **forms** as well. You can also use the <span class="jsx-3120878690">`data-key`</span> attribute instead and get the required information by referencing <span class="jsx-3120878690">`event.target.attributes.getNamedItem('data-key').value`</span>. You can use the same concept to build custom dropdown components or a custom toolbar. If you have any questions, feel free to contact me at [Codealphabet](https://codealphabet.com/contact).

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

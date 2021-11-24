<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

What to Do if Your React and Bootstrap Columns Aren't Working Together
======================================================================

### Gaurav Singhal

-   Nov 10, 2020
-   3 Min read
-   6,634 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">3 Min</span> read
-   6,634 Views

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
-   <a href="#module-implementation" class="menu-link">Implementation</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Using native Bootstrap in a React project can often cause errors due to an incorrect initial setup. In order to make Bootstrap columns work together, you need to make sure that you have correctly imported and required the CSS file containing styles for <span class="jsx-3120878690">`row`</span> and <span class="jsx-3120878690">`col`</span> classes. Otherwise, your Bootstrap rows and columns will act like regular <span class="jsx-3120878690">`<div>`</span> without the required styles to support their intended structure. In this guide, you'll learn how to correctly set up React with Bootstrap so that Bootstrap columns work correctly together.

Implementation
--------------

Create a new React project using the following command:

    1npx create-react-app react-bootstrap-columns

shell

Inside the root folder, install Bootstrap via npm using the following command:

    1npm i bootstrap

shell

Next, modify the <span class="jsx-3120878690">`App.js`</span> as shown below.

    1import './App.css';
    2
    3function App() {
    4  return (
    5    <div className="App">
    6      <div className="row">
    7        <div className="col">
    8          <div className="box">Col 1/3</div>
    9        </div>
    10        <div className="col">
    11          <div className="box">Col 2/3</div>
    12        </div>
    13        <div className="col">
    14          <div className="box">Col 3/3</div>
    15        </div>
    16      </div>
    17    </div>
    18  );
    19}
    20
    21export default App;

jsx

The <span class="jsx-3120878690">`App`</span> component simply outputs three nested <span class="jsx-3120878690">`<div>`</span> containing display text inside a parent <span class="jsx-3120878690">`<div>`</span>. The parent <span class="jsx-3120878690">`<div>`</span> is a Bootstrap row, aligning all child elements in a row. Since the three children <span class="jsx-3120878690">`<div>`</span> have the <span class="jsx-3120878690">`col`</span> class and are direct children of the row, each is expected to occupy a third of the width of the entire row next to each other as equally spaced columns. Add some simple styles inside <span class="jsx-3120878690">`App.css`</span> as shown below.

    1.App{
    2  max-width: 100vw;
    3  overflow-x: hidden;
    4}
    5.box{
    6  margin: 10px;
    7  padding: 20px;
    8  border: 2px solid salmon;
    9  text-align: center;
    10  color: salmon;
    11}

css

In contrary to the expected outcome, the three bordered boxes appear as regular <span class="jsx-3120878690">`<div>`</span> spanning over an entire row stacked on top of each other instead of being aligned as columns. This is because the default Bootstrap styles for <span class="jsx-3120878690">`row`</span> and <span class="jsx-3120878690">`col`</span> classes are not applied even though Bootstrap is installed in your project. The <span class="jsx-3120878690">`App`</span> component simply loads the JSX without any declared styles for the classes used. These styles are present inside a CSS file inside the <span class="jsx-3120878690">`node_modules`</span> folder where the entire Bootstrap library is installed. Import this file on the top of your <span class="jsx-3120878690">`App`</span> component as shown below.

    1import 'bootstrap/dist/css/bootstrap.min.css';

Now the entire styles come back, with the three columns stacked next to each other in a single row. The <span class="jsx-3120878690">`font-family`</span> of the text inside the box also changes. This is because it inherited some styles from Bootstrap's CSS file.

Conclusion
----------

It's important to understand how different UI libraries let you import the required stylesheet for their components. Working with Bootstrap by either downloading the files or using CDNs may not produce the error because the styles are shipped to your components via the <span class="jsx-3120878690">`<script>`</span> or <span class="jsx-3120878690">`<link>`</span> tags. But when using it via npm, you need to import the stylesheet as a module inside every component where you intend to use its native classes. The same pattern can be extended to libraries such as React Bootstrap, Reactstrap, etc.

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

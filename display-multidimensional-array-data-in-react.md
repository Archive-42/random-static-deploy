<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Display Multi-dimensional Array Data in React
=============================================

### Pavneet Singh

-   Oct 29, 2020
-   6 Min read
-   27,387 Views

-   Oct 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   27,387 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

32

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-createatwodimensionalarray" class="menu-link">Create a Two-dimensional Array</a>
-   <a href="#module-displaytwodimensionaldatausinglists" class="menu-link">Display Two Dimensional Data Using Lists</a>
-   <a href="#module-displaytwodimensionaldatainatable" class="menu-link">Display Two-dimensional Data in a Table</a>
-   <a href="#module-fixmissingkeyerror" class="menu-link">Fix Missing Key Error</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Arrays are one of the most efficient and widely used data structures in programming languages to store data in a linear order. Array data can be accessed using a numeric index in sequential order, starting from zero. Often, real-world data is stored in tables via rows and columns. A table can easily be stored using a two-dimensional array in which each element of the container array is also an array:

    1let cart =[
    2 ["Corn", "Potato", "Radish"],
    3 ["Tomato", "Graphes", "Mango"],
    4];

JS

Two-dimensional arrays are quite useful to store tabular data or develop 2D games, graphics, and solutions for an algorithmic problem using an adjacency matrix. Two-dimensional arrays or objects can easily be integrated with JSX to create UI at runtime in React. This guide covers the details of various techniques to create and display data using a two-dimensional array in React.

Create a Two-dimensional Array
------------------------------

A two-dimensional array can be created using pairs of square brackets <span class="jsx-3120878690">`[[],[]]`</span> or using the <span class="jsx-3120878690">`Array`</span> class:

    1let board = Array(2).fill(0).map(row => new Array(3).fill(1))
    2// [[1,1,1], [1,1,1]]

JS

The array <span class="jsx-3120878690">`fill`</span> method is quite helpful in creating an array object with a predefined value. The above snippet will create an array of length two, fill it with zeros, and replace every element with another array of three elements.

Display Two Dimensional Data Using Lists
----------------------------------------

HTML ordered and unordered lists are often used to display lists using bullets characters or sequential order numbers or letters. Arrays can be traversed using <span class="jsx-3120878690">`for`</span> loops, but this can also be done using a functional approach via the <span class="jsx-3120878690">`map`</span> method to process the array elements. The <span class="jsx-3120878690">`map`</span> method offers a convenient way to apply the transformation function on each element of an array in a much cleaner way. A two-dimensional list can be transformed into an HTML element using two <span class="jsx-3120878690">`map`</span> operations:

    1import React from "react";
    2
    3export default function App() {
    4  const cart = [
    5    ["Corn", "Potato", "Radish"],
    6    ["Tomato", "Graphes", "Mango"],
    7  ];
    8  return (
    9    <div>
    10      {cart.map((items, index) => {
    11        return (
    12          <ol>
    13            {items.map((subItems, sIndex) => {
    14              return <li> {subItems} </li>;
    15            })}
    16          </ol>
    17        );
    18      })}
    19    </div>
    20  );
    21}

JSX

The above snippet goes through the items to create an <span class="jsx-3120878690">`ol`</span> element that displays the <span class="jsx-3120878690">`subItem`</span> bullet list. The JavaScript code is executed inside the curly braces (<span class="jsx-3120878690">`JSX`</span>) to create and display the elements inside the <span class="jsx-3120878690">`render`</span> method.

![two-dimensional lists](../../pluralsight2.imgix.net/guides/810a3db9-5376-44f3-8906-495f18903400_Screenshot_2020-10-16_at_8.34.12_PM.html)

Display Two-dimensional Data in a Table
---------------------------------------

The HTML <span class="jsx-3120878690">`table`</span> element can also be used to display two-dimensional data in a tabular form using the <span class="jsx-3120878690">`tr`</span>, <span class="jsx-3120878690">`td`</span>, and <span class="jsx-3120878690">`th`</span> elements. The <span class="jsx-3120878690">`th`</span> tag is used for the heading elements, with bold and center text style. The <span class="jsx-3120878690">`td`</span> tag is used to define the table data. The <span class="jsx-3120878690">`table`</span> elements can be constructed at run time in <span class="jsx-3120878690">`JSX`</span> using <span class="jsx-3120878690">`map`</span>:

    1import React from "react";
    2import "./style.css";
    3
    4export default function App() {
    5  const students = [
    6    ["Name", "Subject", "Marks"],
    7    ["ABC", "Arts", 80],
    8    ["XYZ", "Science", "70"],
    9  ];
    10  return (
    11    <div>
    12      <table>
    13        <thead>
    14          <tr>
    15            {students[0].map((item, index) => {
    16              return <th>{item}</th>;
    17            })}
    18          </tr>
    19        </thead>
    20        <tbody>
    21          {students.slice(1, students.length).map((item, index) => {
    22            return (
    23              <tr>
    24                <td>{item[0]}</td>
    25                <td>{item[1]}</td>
    26                <td>{item[2]}</td>
    27              </tr>
    28            );
    29          })}
    30        </tbody>
    31      </table>
    32    </div>
    33  );
    34}

JSX

![data table](../../pluralsight2.imgix.net/guides/0e077314-d234-4dad-bba8-9131f9266a0f_Screenshot_2020-10-18_at_2.11.42_AM.html)

The first row is used to display the headings. The rest of the rows are extracted using <span class="jsx-3120878690">`slice`</span> and traversed using the <span class="jsx-3120878690">`map`</span> function to create an array of data elements using <span class="jsx-3120878690">`tr`</span> and <span class="jsx-3120878690">`td`</span>.

Fix Missing Key Error
---------------------

The above code works fine, but it produces a warning to use a key-value for the dynamically generated row elements. React uses a virtual DOM to track the changes in the page elements instead of applying the changes directly to the actual DOM. The virtual DOM is used to apply the new changes in the actual DOM using a diffing algorithm with a unique value (key) to identify the modifications in the virtual DOM elements. So, modify the code to use <span class="jsx-3120878690">`index`</span> or unique element data values as key:

    1<table>
    2  <thead>
    3    <tr>
    4      {students[0].map((item, index) => {
    5        return <th key={index}>{item}</th>;
    6      })}
    7    </tr>
    8  </thead>
    9  <tbody>
    10    {students.slice(1, students.length).map((item, index) => {
    11      return (
    12        <tr key={index}>
    13          <td key={item[0]}>{item[0]}</td>
    14          <td key={item[1]}>{item[1]}</td>
    15          <td key={item[2]}>{item[2]}</td>
    16        </tr>
    17      );
    18    })}
    19  </tbody>
    20</table>;

JSX

> **Note:** For changes to dynamic data, always use unique values from data instead of an index to avoid unexpected rendering issues.

Tips
----

• To support complex hierarchies, use third-party [grid](https://www.npmjs.com/package/react-grid-system) libraries. • Use <span class="jsx-3120878690">`Array`</span> to define array containers with defined length, though always prefer the use of an array literal (<span class="jsx-3120878690">`[]`</span>).

Conclusion
----------

Element generation is extensively used in React and JSX to generate elements at run time. Array or array literal (<span class="jsx-3120878690">`[]`</span>) supports a variety of functions to traverse data that can be displayed using HTML elements. If there is no unique value that can be used as a key, then you can use an index as a key if the data is static and never reordered. Otherwise, you can use computed hash values of data or generate random or sequential unique keys. Use HTML tables if the data is static as it's easy to modify the custom structure and apply CSS. Happy coding!

32

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

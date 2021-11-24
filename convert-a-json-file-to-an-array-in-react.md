<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Convert a JSON File to an Array in React
========================================

### Gaurav Singhal

-   Oct 8, 2020
-   6 Min read
-   57,233 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   57,233 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

34

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-convertjsontoarrayusingjsonparse" class="menu-link">Convert JSON to Array Using `json.parse()`</a>
-   <a href="#module-convertjsontoarrayfromlocalfile" class="menu-link">Convert JSON to Array from Local File</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Usually JSON files contain an array, and it is necessary to map the array effectively so its objects' data gets consumed into the component. The source of the JSON file can be anything, either from a local JSON file or a network call. This guide will demonstrate how to get the JSON data as an array and parse it or access the JSON array from the local file.

Convert JSON to Array Using \`json.parse()\`
--------------------------------------------

The JSON file usually contains one key prop representing the tree of the object inside the file content. If you want to use the JSON data along with the key, then the <span class="jsx-3120878690">`parse()`</span> function can be used.

The <span class="jsx-3120878690">`parse()`</span> function takes the argument of the JSON source and converts it to the JSON format, because most of the time when you fetch the data from the server the format of the response is the string.

    1JSON.parse(JSON_source)

jsx

Make sure that it has a string value coming from a server or the local source. If so, then the parse function will work.

To follow along with the example in this guide, create a state value with a string value that consists of an array of items.

    1constructor(props) {
    2    super(props);
    3    this.state = {
    4        stringData: '["VALUE1", "VALUE2", "VALUE3", "VALUE4", "VALUE5"]'
    5    };
    6}

jsx

The state variable called <span class="jsx-3120878690">`stringData`</span> has a string value that contains the array of items now. It would help if you used the function <span class="jsx-3120878690">`parse()`</span>, which converts string value to a JavaScript object.

    1const valuesArray = JSON.parse(this.state.stringData);

jsx

After parsing the value, it can be used for the rendering. Below is the complete example for the JSON parsing.

    1import React, { Component } from "react";
    2
    3export class Example1 extends Component {
    4    constructor(props) {
    5        super(props);
    6        this.state = {
    7            stringData: '["VALUE1", "VALUE2", "VALUE3", "VALUE4", "VALUE5"]'
    8        };
    9    }
    10
    11    render() {
    12        // Parsed valued from string
    13        const valuesArray = JSON.parse(this.state.stringData);
    14
    15        return (
    16            <>
    17                <div>
    18                    <h3>Using local JSON file Array</h3>
    19                    <ul>
    20                        {valuesArray.map(item => {
    21                            return <li>{item}</li>;
    22                        })}
    23                    </ul>
    24                </div>
    25            </>
    26        );
    27    }
    28}
    29
    30export default Example1;

jsx

After getting the values from the server, the <span class="jsx-3120878690">`parse()`</span> function has been used. The parse data as an array could be mapped using the function <span class="jsx-3120878690">`.map()`</span>, which iterates over the array of items.

Convert JSON to Array from Local File
-------------------------------------

It may be possible that the JSON file needs to get used from the local source, and it also may contain an array of items or objects.

To convert the array from the local JSON file to the JavaScript-based object, you can use the ES6 import statement to import the local JSON file and use it in the existing components.

Any JSON file can be imported from the local directory.

    1import Students from "./Students";

jsx

Here in the above import statement, the <span class="jsx-3120878690">`Students`</span> will represent the source of the JSON file, and you need to provide its path from where the JSON file exists into the project directory. Below is the sample <span class="jsx-3120878690">`Students.json`</span> file that you can use as demo.

    1{
    2  "students": [
    3    {
    4      "name": "Student 1",
    5      "age": "22",
    6      "department": "Information Technology",
    7      "rollno": "123"
    8    },
    9    {
    10      "name": "Student 2",
    11      "age": "21",
    12      "department": "Computer Engineering",
    13      "rollno": "456"
    14    },
    15    {
    16      "name": "Student 3",
    17      "age": "23",
    18      "department": "Information Technology",
    19      "rollno": "789"
    20    }
    21  ]
    22}

json

After importing the JSON file from the local source, you will be able to use the source object. This is also used to extract the data, as shown below.

    1{Students.students.map((item, i) => (
    2    <tr key={i}>
    3        <td>{item.name}</td>
    4        <td>{item.department}</td>
    5    </tr>
    6))}

jsx

<span class="jsx-3120878690">`Students.students`</span> contains the different objects with the details about each student. But with the JSON object, there is an additional function called <span class="jsx-3120878690">`.map()`</span> used to map the array of objects from the source.

Below is the complete example of getting the JSON source and mapping the array of objects.

    1import React, { Component } from "react";
    2// Getting local JSON file
    3import Students from "./Students";
    4
    5export class Example2 extends Component {
    6    render() {
    7        return (
    8            <>
    9                <div>
    10                    <table border="2">
    11                        <tbody>
    12                            <tr>
    13                                <th>Name</th>
    14                                <th>Department</th>
    15                            </tr>
    16                            // Mapping array of objects
    17                            {Students.students.map((item, i) => (
    18                                <tr key={i}>
    19                                    <td>{item.name}</td>
    20                                    <td>{item.department}</td>
    21                                </tr>
    22                            ))}
    23                        </tbody>
    24                    </table>
    25                </div>
    26            </>
    27        );
    28    }
    29}
    30
    31export default Example2;

jsx

Both the ways of consuming JSON data and, more specifically, an array of items or objects gets integrated easily using <span class="jsx-3120878690">`parse()`</span> and <span class="jsx-3120878690">`map()`</span> functions.

Conclusion
----------

JSON is a suitable file format for the data exchange between client and server, and contains the key-value pair as a string value. The JavaScript function <span class="jsx-3120878690">`parse()`</span> converts the string to a JavaScript object, and <span class="jsx-3120878690">`map()`</span> iterates through an array of objects.

34

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

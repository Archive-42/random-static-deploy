<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Convert Strings to JSON Objects in JavaScript with eval()
=========================================================

### Gaurav Singhal

-   Oct 10, 2020
-   5 Min read
-   93,671 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   93,671 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

18

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-convertstringtojsonusingjsonstringify" class="menu-link">Convert String to JSON Using json.stringify()</a>
-   <a href="#module-convertstringtojsonusingeval" class="menu-link">Convert String to JSON Using eval()</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React supports JSON file transformation from different sources such as strings, arrays, and objects, and JavaScript allows you to convert string to JSON data. A JSON can be used from either the local file or the server's API response because JSON is now becoming a standardized approach for data transmission between client and server.

String data can be easily converted to JSON using the <span class="jsx-3120878690">`stringify()`</span> function, and also it can be done using <span class="jsx-3120878690">`eval()`</span>, which accepts the JavaScript expression that you will learn about in this guide.

Convert String to JSON Using json.stringify()
---------------------------------------------

The JSON data contains the key-value pair as string values; thus, sometimes the data may in a string format and need to send over API call. The data should be formatted to send the request data from the client to the server, and the response will be mostly in the JSON format, but you can convert the string to JSON using the function <span class="jsx-3120878690">`stringify()`</span>. The basic syntax of the function <span class="jsx-3120878690">`stringify()`</span> is as follows:

    1JSON.stringify(source_of_data)

jsx

The source of data can be anything like a state variable, <span class="jsx-3120878690">`const`</span> variable with a string value, and so on.

Let's run through a simple React-based example. Create a state variable into the component as demonstrated below.

    1constructor(props) {
    2    super(props);
    3    this.state = {
    4      stringData: {
    5        categories: [
    6          {
    7            name: "test 1",
    8            department: "Information Technology"
    9          },
    10          {
    11            name: "test 2",
    12            department: "Computer Engineering"
    13          },
    14          {
    15            name: "test 3",
    16            department: "Information Technology"
    17          }
    18        ]
    19      }
    20    };
    21}

jsx

Here in state object, there is one additional array called <span class="jsx-3120878690">`categories`</span> containing multiple objects with category name and department.

You can also use the plain string with an array and also the array of objects or singular objects. The next step is to convert the object to JSON, as shown below.

    1componentDidMount() {
    2    // Converting a string to JSON
    3    let jsonData = JSON.stringify(this.state.stringData);
    4    console.log(jsonData);
    5}

jsx

In the above code lines, the data source is <span class="jsx-3120878690">`this.state.stringData`</span>, a state variable containing an array of objects.

When you open the browser console, the output will look like this.

![String to JSON using json.stringify()](../../pluralsight2.imgix.net/guides/add3f78a-03b3-415b-be52-2f8e89031248_2.html)

The array of objects is now converted to JSON, and it can be sent over to the server to pass the request as a JSON file format using the <span class="jsx-3120878690">`stringify()`</span> function.

Convert String to JSON Using eval()
-----------------------------------

The <span class="jsx-3120878690">`eval()`</span> function in JavaScript is used to take an expression and return the string. As a result, it can be used to convert the string into JSON.

The string or an expression can be the value of <span class="jsx-3120878690">`eval()`</span>, and even if you pass multiple statements as an expression, the result will still work. The simple syntax for using <span class="jsx-3120878690">`eval()`</span> is as follows:

    1eval(string_value)

jsx

Let's now create a sample state object, similar to the previous section.

    1constructor(props) {
    2    super(props);
    3    this.state = {
    4      stringData: {
    5        categories: [
    6          {
    7            name: "test 1",
    8            department: "Information Technology"
    9          },
    10          {
    11            name: "test 2",
    12            department: "Computer Engineering"
    13          },
    14          {
    15            name: "test 3",
    16            department: "Information Technology"
    17          }
    18        ]
    19      }
    20    };
    21}

jsx

After creating the state variable, pass the state variable <span class="jsx-3120878690">`stringData`</span> as an argument to the <span class="jsx-3120878690">`eval()`</span>, as shown below.

    1componentDidMount() {
    2    let evalData = eval(this.state.stringData);
    3    console.log(evalData);
    4}

jsx

The statement in the above lines of code uses the <span class="jsx-3120878690">`eval()`</span> function followed by the state variable as an argument, <span class="jsx-3120878690">`this.state.stringData`</span>, which converts the data into the specific format.

Once you run the example, the output will be something like this.

![String to JSON using eval()](../../pluralsight2.imgix.net/guides/da7d9065-85d5-44e2-8c4e-3ad718f9e5a8_1.html)

The output contains <span class="jsx-3120878690">`categories`</span>, which is the key of an array and has three different objects along with it.

> **Note:** According to the official guidelines from [**https://developer.mozilla.org/**](https://developer.mozilla.org/) , <span class="jsx-3120878690">`eval()`</span> is a dangerous function that executes the code its passed with the caller's privileges. If you run <span class="jsx-3120878690">`eval()`</span> with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage/extension. So it is not entirely suitable to use the <span class="jsx-3120878690">`eval()`</span> function to evaluate the various JavaScript expression as a string because it attracts the malicious activity with the unsecured data.

Conclusion
----------

Both functions covered in this guide, <span class="jsx-3120878690">`stringify()`</span> and <span class="jsx-3120878690">`eval()`</span>, are suitable to convert a string value into JSON, but <span class="jsx-3120878690">`eval()`</span> turns to be unsecured to use; hence <span class="jsx-3120878690">`stringify()`</span> is the best approach. You can try <span class="jsx-3120878690">`parse()`</span> to get JSON data and <span class="jsx-3120878690">`stringify()`</span> to convert a string to JSON. I hope this guide provides sufficient information to you for converting a string to JSON.

18

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

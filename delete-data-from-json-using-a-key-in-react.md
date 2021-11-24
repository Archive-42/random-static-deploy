<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Delete Data from JSON Using a Key in React
==========================================

### Pavneet Singh

-   Nov 9, 2020
-   4 Min read
-   10,541 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   10,541 Views

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
-   <a href="#module-createajsonobject" class="menu-link">Create a JSON Object</a>
-   <a href="#module-deletedatafromjsonstringusingregularexpressions" class="menu-link">Delete Data from JSON String using Regular Expressions</a>
-   <a href="#module-deletedatafromjsonusingjavascriptobjects" class="menu-link">Delete Data from JSON using JavaScript Objects</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

JavaScript Object Notation (JSON) is a widely popular key-value-based data format used to store and transfer data. JSON uses basic data types, such as string, boolean, int, decimal, object, arrays, and <span class="jsx-3120878690">`null`</span>, to transfer data using predefined hierarchy and key-value pairs. Due to its concise structure and durability, JSON is supported by most development platforms, No-SQL databases, REST, GraphQL, and so on.

A JSON string can easily be converted to a JavaScript object by using [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) API to directly access the data by using dot notation and keys. The inbuilt JSON support allows you to easily integrate REST APIs, data management, and dynamic component design in React. This guide explains the steps to parse JSON data and perform the delete operation on a nested JSON object using a key as input.

Create a JSON Object
--------------------

A JSON object is represented using a pair of curly braces (<span class="jsx-3120878690">`{}`</span>), and the key-value is separated by using a colon (<span class="jsx-3120878690">`:`</span>). A JSON string can be created using a combination of single and double quotes:

    1let jsonStr = '{"name":"ABC", "age":10 }';

JS

> **Note:** JSON strings must only use double quotes to wrap key and values. Use single quotes to wrap a JSON string. The <span class="jsx-3120878690">`jsonStr`</span> can be converted to a JavaScript object using the <span class="jsx-3120878690">`parse`</span> method:
>
>     1let jsonObj = JSON.parse(jsonStr);
>     2console.log(jsonObj.name, jsonObj.age); // ABC : 10
>
> JS
>
> The <span class="jsx-3120878690">`eval`</span> function is also used for parsing:
>
>     1let jsonObj = eval('('+jsonStr+')');
>
> JS
>
> The use of <span class="jsx-3120878690">`eval`</span> is not recommended because <span class="jsx-3120878690">`eval`</span> can used as a loophole to run malformed instructions, though unlike the <span class="jsx-3120878690">`parse`</span> function, <span class="jsx-3120878690">`eval`</span> can transform a JSON string wrapped in double quotes:
>
>     1let jsonObj = eval('('+ "{'name':'ABC', 'age':10 }" +')');
>
> JS

Delete Data from JSON String using Regular Expressions
------------------------------------------------------

Regular expressions can be used to find and replace a specific portion of a string using the <span class="jsx-3120878690">`replace`</span> function. A pair of double quotes with key can be used to create a pattern:

    1let jsonStr = '{"name":"ABC", "age":10 }';
    2let key = "age";
    3let cleanJsonRegex = new RegExp(`,.*${key}.*[, ]`, "g");
    4let nameJsonStr = jsonStr.replace(cleanJsonRegex, "");
    5console.log(nameJsonStr); // "{\"name\":\"ABC\"}"

JS

The <span class="jsx-3120878690">`cleanJsonRegex`</span> object defines the pattern to match a specific key-value pair, and it can be explained as:

-   <span class="jsx-3120878690">`,`</span> match a comma character
-   <span class="jsx-3120878690">`.*`</span> match zero or more character except for line terminators (<span class="jsx-3120878690">`\n`</span>)
-   <span class="jsx-3120878690">`${key}.*`</span> match the exact value of <span class="jsx-3120878690">`key`</span> and zero or more characters after the <span class="jsx-3120878690">`key`</span>
-   <span class="jsx-3120878690">`[, ]`</span> match either a comma or space
-   <span class="jsx-3120878690">`g`</span> flag will match all possible matches in the <span class="jsx-3120878690">`jsonStr`</span>

The <span class="jsx-3120878690">`replace`</span> function finds and replaces the matched data from the <span class="jsx-3120878690">`jsonStr`</span> and returns a resultant <span class="jsx-3120878690">`string`</span>.

> **Note:** Regular expressions are quite powerful but they are also fragile so always avoid the use of regular expressions with complex data.

Delete Data from JSON using JavaScript Objects
----------------------------------------------

JavaScript objects offer a convenient way to access JSON data using dot notation and indexes for JSON arrays. Use the <span class="jsx-3120878690">`parse`</span> function to convert a JSON string to JavaScript object:

    1let jsonStr = '{"name":"ABC", "age":10, "phone":["1234567890","1234567890"]}';
    2let jsonObj = JSON.parse(jsonStr);

JS

The <span class="jsx-3120878690">`delete`</span> operator can be used to remove a key-value pair from a JavaScript object:

    1delete jsonObj.name;
    2/* after delete
    3{
    4  age: 10,
    5  phone: ["1234567890", "1234567890"]
    6}
    7*/

JS

Alternately, string keys can be used to delete a key-value pair:

    1let key = 'name';
    2delete jsonObj[key];

JS

The advantage of using string keys with a JavaScript object is that it allows the use of keys having special characters:

    1delete jsonObj['class.name'];

JS

Tips
----

• Use <span class="jsx-3120878690">`stringify`</span> to covert a JavaScript object to a JSON string:

    1let obj = {name: "ABC"};
    2console.log(JSON.stringify(obj));

JS

• Use [toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) to get string representation of date objects. • For better support, use typescript for static type checking support.

Conclusion
----------

JSON and JavaScript objects have almost the same syntax and inbuilt browser support to parse JSON string as a JavaScript object. Always prefer the use of JavaScript objects to access JSON data. Happy coding!

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Fetch Data from a JSON File in a React App
==========================================

### Gaurav Singhal

-   Oct 7, 2020
-   5 Min read
-   151,400 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   151,400 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

168

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupalocaljsonfile" class="menu-link">Setting Up a Local JSON file</a>
-   <a href="#module-consuminglocaljsondatausingfetchapi" class="menu-link">Consuming Local JSON Data Using Fetch API</a>
-   <a href="#module-loadingdataintothecomponent" class="menu-link">Loading Data into the Component</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Creating *API mockups* for local testing and development allows you to work in a faster development environment. One way to implement an API mockup is to copy the JSON data to a local file in your project directory and make your fetch or GET calls to that file instead of the real database. As fetching data from an external source is still an asynchronous task, there are a number of errors you can run into while loading data from a JSON file. This guide will demonstrate how to correctly fetch data from a JSON file in your React app and consume it on the frontend.

Setting Up a Local JSON file
----------------------------

In a blank Create React App project, create a local JSON file named <span class="jsx-3120878690">`data.json`</span> inside the <span class="jsx-3120878690">`public`</span> directory. Your Fetch API calls made from a React component always looks for files or any other relevant assets inside this <span class="jsx-3120878690">`public`</span> directory. Create-React-App doesn't put your assets automatically inside this directory during compilation so you have to do this manually.

Next, put some dummy JSON data inside this file. For demonstration purposes, the JSON data used in the example below is generated from [JSON Generator](https://www.json-generator.com/). If you are using your own JSON, ensure that it is correctly formatted.

Consuming Local JSON Data Using Fetch API
-----------------------------------------

The next step you need to perform is fetching this data correctly. Create a method <span class="jsx-3120878690">`getData()`</span> that fetches local JSON using JavaScript's fetch API and call it inside <span class="jsx-3120878690">`useEffect`</span> as shown below.

    1  const getData=()=>{
    2    fetch('data.json'
    3    ,{
    4      headers : { 
    5        'Content-Type': 'application/json',
    6        'Accept': 'application/json'
    7       }
    8    }
    9    )
    10      .then(function(response){
    11        console.log(response)
    12        return response.json();
    13      })
    14      .then(function(myJson) {
    15        console.log(myJson);
    16      });
    17  }
    18  useEffect(()=>{
    19    getData()
    20  },[])

javascript

The path to your JSON file should be either <span class="jsx-3120878690">`'data.json'`</span> or <span class="jsx-3120878690">`'./data.json'`</span>. Other relative paths might land you a 404 error while trying to access that resource. You also need to pass in some <span class="jsx-3120878690">`headers`</span> indicating the <span class="jsx-3120878690">`Content-Type`</span> and <span class="jsx-3120878690">`Accept`</span> as <span class="jsx-3120878690">`application/json`</span> to tell your client that you are trying to access and accept some JSON resource from a server.

Loading Data into the Component
-------------------------------

Create a state using the <span class="jsx-3120878690">`useState`</span> hook to store this data and render it on the DOM.

    1const [data,setData]=useState([]);

javascript

Assign the JSON data inside your fetch call to this state variable.

    1const getData=()=>{
    2    fetch('data.json'
    3    ,{
    4      headers : { 
    5        'Content-Type': 'application/json',
    6        'Accept': 'application/json'
    7       }
    8    }
    9    )
    10      .then(function(response){
    11        console.log(response)
    12        return response.json();
    13      })
    14      .then(function(myJson) {
    15        console.log(myJson);
    16        setData(myJson)
    17      });
    18  }

javascript

Depending on your JSON's structure, put relevant checks inside the <span class="jsx-3120878690">`return`</span> statement of your component before rendering or loading this data. The GET call for your JSON resource is made when the component mounts on the DOM. However, since it is an asynchronous task your return statement is executed before the API call is made. Because you are updating the state after fetching the required data, a re-rendering of the component updates the DOM with JSON data stored inside the state. The JSON used here is an array of objects, so the relevant check would be to check if the state exists and consequently verify if it has a non-zero length as shown below.

    1 return (
    2    <div className="App">
    3     {
    4       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
    5     }
    6    </div>
    7 );

jsx

If your JSON returns an object, simply check your state to be not null at the time of outputting it, otherwise you might get an error.

Have a look at the entire code below.

    1import React,{useState,useEffect} from 'react';
    2import './App.css';
    3
    4function App() {
    5  const [data,setData]=useState([]);
    6  const getData=()=>{
    7    fetch('data.json'
    8    ,{
    9      headers : { 
    10        'Content-Type': 'application/json',
    11        'Accept': 'application/json'
    12       }
    13    }
    14    )
    15      .then(function(response){
    16        console.log(response)
    17        return response.json();
    18      })
    19      .then(function(myJson) {
    20        console.log(myJson);
    21        setData(myJson)
    22      });
    23  }
    24  useEffect(()=>{
    25    getData()
    26  },[])
    27  return (
    28    <div className="App">
    29     {
    30       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
    31     }
    32    </div>
    33  );
    34}
    35
    36export default App;

javascript

Conclusion
----------

You can also use a powerful third-party library called Axios to make GET calls to a local JSON file instead of fetch API. By loading data directly from a local JSON file you can save your server from tons of unnecessary calls in local development. Alternately, by saving the JSON file as a regular JavaScript file and exporting the entire object globally, you can use it inside any component and save a considerable amount of development time when working with external APIs.

168

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

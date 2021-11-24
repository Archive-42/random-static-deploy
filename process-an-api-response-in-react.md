<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Process an API Response in React
================================

### Gaurav Singhal

-   Nov 17, 2020
-   5 Min read
-   17,263 Views

-   Nov 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   17,263 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

39

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-initialsetup" class="menu-link">Initial Setup</a>
-   <a href="#module-creatingstatetostoreresponse" class="menu-link">Creating State to Store Response</a>
-   <a href="#module-callingapiandprocessingresponse" class="menu-link">Calling API and Processing Response</a>
-   <a href="#module-outputtingresponseonthedom" class="menu-link">Outputting Response on the DOM</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Working with backend services such as a *REST API* is one of the most common tasks of a frontend developer. No matter what React app you're building, at some point, you'll probably want to make a request to a database server or an *endpoint* and grab some data to display to the user. For instance, if you're building a social media app and you want to display comments on a certain post to the user, you need to make a request to a dedicated API to fetch all the comments and then process it further in your app.

In this guide, you'll learn how to call an API to fetch its response in your React app.

Initial Setup
-------------

Let's run through an example to get a better understanding of how you can call the API response. Create an empty React app by running:

    1npx create-react-app react-api-response

shell

Next, install the Axios library. Axios is a library that simplifies the process of interacting with APIs.

    1npm i axios

shell

The endpoint you're going to use in this example is <https://jsonplaceholder.typicode.com/comments>. It's a free REST API endpoint that returns some dummy data you can play around with. You can choose any other such API or use your own API as well.

Creating State to Store Response
--------------------------------

Whatever response you get from an API, you need to store it locally within that component so you can process it further. Import the <span class="jsx-3120878690">`useState`</span> hook from React to create a piece of <span class="jsx-3120878690">`state`</span> to store the response.

    1import React,{useState} from 'react'; 

javascript

Create a state variable <span class="jsx-3120878690">`comments`</span> and a hook to set the value of this state variable <span class="jsx-3120878690">`setComments`</span> using the <span class="jsx-3120878690">`useState`</span> hook.

    1const [comments,setComments]=useState([])

javascript

Since the comments returned will be an array of objects with each object representing a single comment, the initial value of <span class="jsx-3120878690">`comments`</span> is an empty array.

Calling API and Processing Response
-----------------------------------

Usually, you want to fetch data inside a component when its entire DOM loads. In other words, when your <span class="jsx-3120878690">`App`</span> component first mounts on the DOM, you need to make a request to the API. In React, this can be carried out via a *component lifecycle method* called <span class="jsx-3120878690">`componentDidMount()`</span>, which is fired when the component first loads on the DOM. A simple hooks implementation can be carried out by firing an *asynchronous* function using the <span class="jsx-3120878690">`async`</span> keyword inside <span class="jsx-3120878690">`useEffect()`</span> and passing an empty array as a parameter, as shown below.

    1useEffect(() => {
    2 fetchComments();
    3}, [])

javascript

Create the <span class="jsx-3120878690">`fetchComments()`</span> method, as shown below.

    1const fetchComments=async()=>{
    2    const response=await Axios('https://jsonplaceholder.typicode.com/comments');
    3    setComments(response.data)    
    4}

javascript

Inside <span class="jsx-3120878690">`fetchComments()`</span>, call the API by passing the endpoint to Axios and store the response in a variable using the <span class="jsx-3120878690">`await`</span> keyword. All the comments from the endpoint can be referred to by calling the <span class="jsx-3120878690">`data`</span> property on the <span class="jsx-3120878690">`response object`</span> to set the <span class="jsx-3120878690">`state`</span>. You can check if you correctly appended comments to your <span class="jsx-3120878690">`state`</span> using the following piece of code:

    1useEffect(() => {
    2    console.log(comments)
    3}, [comments])

javascript

Outputting Response on the DOM
------------------------------

So far in this guide, you have called the API response and stored it inside your <span class="jsx-3120878690">`state`</span>. You can process it further using the <span class="jsx-3120878690">`state`</span>. For instance, you can cycle through the <span class="jsx-3120878690">`comments`</span> and render each <span class="jsx-3120878690">`comment`</span> on the DOM, as shown below.

    1 return (
    2    <div className="App">
    3      {
    4        comments && comments.map(comment=>{
    5          return(
    6            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
    7            <h4>{comment.name}</h4>
    8            <p>{comment.email}</p>
    9          </div>
    10          )
    11
    12        })
    13      }
    14     
    15    </div>
    16  );

jsx

Have a look at the entire <span class="jsx-3120878690">`App`</span> component, which calls the API on mounting, sets the response to the component's <span class="jsx-3120878690">`state`</span>, and outputs it on the DOM.

    1import './App.css';
    2import Axios from 'axios'
    3import React,{useState,useEffect} from 'react';
    4
    5function App() {
    6  const [comments,setComments]=useState([])
    7  useEffect(() => {
    8    fetchComments();
    9  }, [])
    10  useEffect(() => {
    11    console.log(comments)
    12  }, [comments])
    13  const fetchComments=async()=>{
    14    const response=await Axios('https://jsonplaceholder.typicode.com/comments');
    15    setComments(response.data)    
    16  }
    17  return (
    18    <div className="App">
    19      {
    20        comments && comments.map(comment=>{
    21          return(
    22            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
    23            <h4>{comment.name}</h4>
    24            <p>{comment.email}</p>
    25          </div>
    26          )
    27
    28        })
    29      }
    30    </div>
    31  );
    32}
    33
    34export default App;

javascript

Conclusion
----------

You can interact with an API in different ways by making different kinds of requests from your app. For instance, you can make a <span class="jsx-3120878690">`POST`</span> request to add a new comment by storing it in the database. However, to process any dynamic data from a server on loading a component, you should make requests in <span class="jsx-3120878690">`componentDidMount()`</span> and store them inside your <span class="jsx-3120878690">`state`</span>, as demonstrated. Instead of simply outputting this data, you can explore more options, such as filtering or sorting data, adding pagination, etc.

39

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

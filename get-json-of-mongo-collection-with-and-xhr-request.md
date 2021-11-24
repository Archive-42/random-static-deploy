<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Get a JSON of a Mongo Collection with an XHR Request in React
=============================================================

### Gaurav Singhal

-   Oct 2, 2020
-   7 Min read
-   4,135 Views

-   Oct 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   4,135 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupthebackend" class="menu-link">Setting up the Backend</a>
-   <a href="#module-creatingthefrontend" class="menu-link">Creating the Frontend</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When you are working in a *MERN (MongoDB, Express, React, and Node)* stack app, you are often required to fetch a JSON of a Mongo collection and use that data on the frontend. With the popularity of *NoSQL* databases, it's really simple to fetch data from a Mongo collection via a React app through an express server.

This guide walks you through the essentials of making an *XHR request* to an endpoint on an express server to get JSON of a Mongo collection in your MongoDB database.

Setting up the Backend
----------------------

If you already have an express server with an endpoint where you can fetch your Mongo collection, you can skip this step. If you don't, you can easily set up an express server using NodeJS using the following steps.

First, create a new <span class="jsx-3120878690">`npm`</span> project using the following command:

    1npm init -y 

shell

Install mongoose, body-parser, and express.

    1npm i mongoose express body-parser 

shell

### Creating a Schema

Create a schema called <span class="jsx-3120878690">`todoSchema`</span> for your Mongo collection and a model called <span class="jsx-3120878690">`Todo`</span>, as shown below, and export it using <span class="jsx-3120878690">`module.exports`</span>.

    1const mongoose=require('mongoose'); 
    2 
    3const todoSchema=mongoose.Schema({ 
    4 name:{ 
    5 type:String, 
    6 required:true 
    7 }, 
    8 status:{ 
    9 type:String, 
    10 required:true 
    11 } 
    12},{timestamps:true}) 
    13 
    14const Todo=mongoose.model('Todo',todoSchema); 
    15module.exports=Todo; 

javascript

### Creating a Controller

Create a controller for fetching all the to-do's from your Mongo collection using the <span class="jsx-3120878690">`find()`</span> method on your model and export it at the end.

    1const Todo=require('./../models/Todo'); 
    2 
    3 
    4const getTodos=(req,res)=>{ 
    5 
    6 Todo.find() 
    7 .then(result=>{ 
    8 console.log('result: ',result) 
    9 res.send(result.length>0?result:'No Todos'); 
    10 }) 
    11 .catch(err=>{ 
    12 console.log(err); 
    13 }) 
    14} 
    15 
    16module.exports={ 
    17 getTodos 
    18} 

javascript

### Setting up an Express Router

Create a router instance of the express by invoking the <span class="jsx-3120878690">`Router()`</span> method on it. Next, create a route that will act as an API endpoint to get all the to-do's from your Mongo collection by calling the <span class="jsx-3120878690">`get()`</span> method and passing the route as the first parameter and your controller function as the second parameter.

    1const express=require('express'); 
    2const todoController=require('./controllers/todoConroller'); 
    3 
    4const router=express.Router(); 
    5 
    6module.exports=router.get('/todos',todoController.getTodos); 

javascript

Finally, put it all together by creating an express app and connecting your MongoDB database. This example uses MongoDB Atlas to create and connect to the cloud database using a <span class="jsx-3120878690">`dbURI`</span> string.

    1const express=require('express'); 
    2const mongoose=require('mongoose'); 
    3const bodyParser=require('body-parser'); 
    4const routes=require('./routes'); 
    5 
    6const PORT=5000; 
    7 
    8const dbURI=<Add your MongoDB atlas dbURI here> 
    9 
    10const app=express(); 
    11 
    12mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}) 
    13 .then(()=>{ 
    14 app.listen(PORT,(req,res)=>{ 
    15 console.log(`connected to db`); 
    16 }) 
    17 }) 
    18 .catch(err=>{ 
    19 console.log(err); 
    20 }) 
    21 
    22 
    23app.use(bodyParser.json()) 
    24app.use(routes) 
    25 

javascript

You can now access your mongo collection using the endpoint <http://localhost:5000/todos> after running the <span class="jsx-3120878690">`node app`</span> in the terminal.

Creating the Frontend
---------------------

The Mongo collection you will consume looks like this:

    1[ 
    2 { 
    3 "_id": "5f709a7fe510821d48eaf3cc", 
    4 "name": "Paint a picture", 
    5 "status": "Incomplete", 
    6 "createdAt": "2020-09-27T13:58:23.023Z", 
    7 "updatedAt": "2020-09-27T14:01:32.580Z", 
    8 "__v": 0 
    9 }, 
    10 { 
    11 "_id": "5f71dcf907cf490004e07d80", 
    12 "name": "Walk the Dog", 
    13 "status": "Incomplete", 
    14 "createdAt": "2020-09-28T12:54:17.877Z", 
    15 "updatedAt": "2020-09-28T12:54:17.877Z", 
    16 "__v": 0 
    17 }, 
    18 { 
    19 "_id": "5f71dd1207cf490004e07d81", 
    20 "name": "Cook Dinner", 
    21 "status": "In Progress", 
    22 "createdAt": "2020-09-28T12:54:42.340Z", 
    23 "updatedAt": "2020-09-28T12:54:42.340Z", 
    24 "__v": 0 
    25 } 
    26] 

json

This JSON collection is returned from the endpoint created in the previous section after adding data manually to the database. If you want to use your collection, use the API created in the previous section or use the above collection inside a local text file as an *API mockup*. The method of making XHR requests in all three cases is the same.

### Making an XHR Request

Inside your React app, import <span class="jsx-3120878690">`useState`</span> and <span class="jsx-3120878690">`useEffect`</span>. The <span class="jsx-3120878690">`useState`</span> hook is used to create a state where the JSON object from the endpoint is stored. Make an XHR request inside the <span class="jsx-3120878690">`useEffect`</span> lifecycle hook's callback function using the <span class="jsx-3120878690">`XMLHttpRequest`</span> object. Have a look at the following code:

    1import React,{useState, useEffect} from 'react'; 
    2import './App.css'; 
    3 
    4function App() { 
    5 const [todos,setTodos]=useState() 
    6 useEffect(()=>{ 
    7 var request = new XMLHttpRequest(); 
    8 request.onreadystatechange = function() { 
    9 if (request.readyState == 4 && request.status == 200) { 
    10 const response=JSON.parse(request.response) 
    11 setTodos(response) 
    12 } 
    13 }; 
    14 request.open('GET', 'http://localhost:5000/todos', true); 
    15 request.send(); 
    16 },[]) 
    17 
    18 useEffect(()=>{ 
    19 console.log(todos) 
    20 },[todos]) 
    21 return ( 
    22 <div className="App"> 
    23 </div> 
    24 ); 
    25} 
    26 
    27export default App; 
    28 

jsx

Inside the <span class="jsx-3120878690">`useEffect()'`</span>s callback function, create a new instance of the <span class="jsx-3120878690">`XMLHttpRequest`</span> object. Then call the endpoint with the request method type (which is GET in this example) to create a gateway to that request. This step is essential as it tells the browser that you are now open for making requests to an endpoint to get some resources back. By calling the <span class="jsx-3120878690">`send()`</span> method, you invoke the function fired by the <span class="jsx-3120878690">`onreadystatechange`</span> event inside which you check the <span class="jsx-3120878690">`readyState`</span> and <span class="jsx-3120878690">`status`</span> of the request. The <span class="jsx-3120878690">`readyState`</span> <span class="jsx-3120878690">`4`</span> indicates that the request is ready to be processed and <span class="jsx-3120878690">`status 200`</span> is received from the endpoint, indicating everything is okay. Inside the <span class="jsx-3120878690">`if`</span> block, parse the <span class="jsx-3120878690">`response`</span> object from the request to a JSON to get the JSON of your Mongo collection and assign it to your state variable. This is how you make an XHR request to get JSON of your Mongo collection and store it inside a local state of your component. As a final step, you can render this collection's details on the DOM by looping through the state.

    1 ... 
    2 <div className="App"> 
    3 {todos && todos.map(todo=><p>{todo.name}</p>)} 
    4 </div> 
    5 ... 

jsx

Now you can see the to-do's from your Mongo collection on the page.

Conclusion
----------

Although making XHR requests is the most primitive method of making AJAX requests, you should always go for modern approaches like the fetch API or Axios to make API calls. They are easy to use, have a shallow learning curve, and can handle multiple and bulky requests using advanced features such as *promise chaining.* The same example used in this guide can be coded in a cleaner manner using Axios or Fetch API. Try that out as an exercise.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

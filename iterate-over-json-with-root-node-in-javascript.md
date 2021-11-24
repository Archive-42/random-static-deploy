<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Iterate over JSON with Root Node in JavaScript
==============================================

### Gaurav Singhal

-   Sep 29, 2020
-   6 Min read
-   3,373 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   3,373 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-jsonwithrootnode" class="menu-link">JSON With Root Node</a>
-   <a href="#module-iteratingoverjsonwithrootnode" class="menu-link">Iterating Over JSON With Root Node</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

A large portion of a frontend developer's work includes working with JSON responses when integrating backend APIs in an app. JSON responses are often complex and difficult to comprehend in one go. However, their complex structure is justified in terms of demystifying the data returned to the frontend. Thus, you may receive a JSON response with a *root node* indicating what the corresponding object is about.

In this guide, you'll learn how to identify and understand JSON responses with root nodes and eventually iterate over them using JavaScript in React.

JSON With Root Node
-------------------

Consider the following JSON file. You can find it at the dummy-json API [documentation](https://www.npmjs.com/package/dummy-json).

The below JSON file contains four nodes or properties: <span class="jsx-3120878690">`users`</span>, <span class="jsx-3120878690">`images`</span>, <span class="jsx-3120878690">`coordinates`</span>, and <span class="jsx-3120878690">`price`</span>. All the nodes are at the same level in the node tree, and you can verify this by accessing these properties. For instance, if you store this response in an object called <span class="jsx-3120878690">`resp`</span>, you can access the <span class="jsx-3120878690">`users`</span> and <span class="jsx-3120878690">`image`</span> properties like <span class="jsx-3120878690">`resp.users`</span> and <span class="jsx-3120878690">`resp.images`</span>. Hence, the given JSON does not contain a root node.

    1{
    2  "users": [
    3    {
    4      "id": 0,
    5      "name": "Adam Carter",
    6      "work": "Unilogic",
    7      "email": "[email protected]",
    8      "dob": "1978",
    9      "address": "83 Warner Street",
    10      "city": "Boston",
    11      "optedin": true
    12    },
    13    {
    14      "id": 1,
    15      "name": "Leanne Brier",
    16      "work": "Connic",
    17      "email": "[email protected]",
    18      "dob": "1987",
    19      "address": "9 Coleman Avenue",
    20      "city": "Toronto",
    21      "optedin": false
    22    }
    23  ],
    24  "images": [
    25    "img0.png",
    26    "img1.png",
    27    "img2.png"
    28  ],
    29  "coordinates": {
    30    "x": 35.12,
    31    "y": -21.49
    32  },
    33  "price": "$59,395"
    34}

json

Let's modify the above JSON response so that it contains a root node. This means that to access these properties, you'll have to go a level down from how you were accessing it before.

    1"data":{
    2    "users": [
    3        {
    4          "id": 0,
    5          "name": "Adam Carter",
    6          "work": "Unilogic",
    7          "email": "[email protected]",
    8          "dob": "1978",
    9          "address": "83 Warner Street",
    10          "city": "Boston",
    11          "optedin": true
    12        },
    13        {
    14          "id": 1,
    15          "name": "Leanne Brier",
    16          "work": "Connic",
    17          "email": "[email protected]",
    18          "dob": "1987",
    19          "address": "9 Coleman Avenue",
    20          "city": "Toronto",
    21          "optedin": false
    22        }
    23      ],
    24      "images": [
    25        "img0.png",
    26        "img1.png",
    27        "img2.png"
    28      ],
    29      "coordinates": {
    30        "x": 35.12,
    31        "y": -21.49
    32      },
    33      "price": "$59,395"
    34 }

json

Now your JSON response has a root node called <span class="jsx-3120878690">`data`</span>, and your properties will be accessed as <span class="jsx-3120878690">`resp.data.users,`</span> <span class="jsx-3120878690">`resp.data.images`</span>, and so on. The need for structuring JSON responses in this way is to understand what the entire object corresponds to. In a real-life scenario, you can imagine this response corresponding to sellers who are selling their products on an e-commerce website. The root node can then be <span class="jsx-3120878690">`sellers_product_1355`</span>, giving an idea of what the data is about. Now that you know all about JSON with root nodes, let's look at how you can iterate over it using JavaScript in React .

Iterating Over JSON With Root Node
----------------------------------

Inside your React app, create a <span class="jsx-3120878690">`data.js`</span> file and export the above response as an object.

    1export default {
    2"data":{
    3    ...
    4  }
    5}

js

Now you can import this object as a regular JavaScript object as if you were getting it from a backend API. Any JSON property will be accessed by first accessing the root node. Have a look a the following console logs to understand how these properties can be accessed

    1import React from 'react';
    2import response from './data';
    3
    4function App() {
    5  console.log('users: ',response.data.users);
    6  console.log('images: ',response.data.images);
    7  console.log('images: ',response.data.coordinates);
    8  console.log('price: ',response.data.price);
    9  return (
    10    <div className="App">
    11 
    12    </div>
    13  );
    14}
    15
    16export default App;

jsx

Note that both <span class="jsx-3120878690">`images`</span> and <span class="jsx-3120878690">`users`</span> are arrays, so you can use the <span class="jsx-3120878690">`map()`</span> method in JSX to iterate over them as shown below. You can also use regular for loops.

    1import React from 'react';
    2import logo from './logo.svg';
    3import './App.css';
    4import response from './data';
    5
    6function App() {
    7  console.log('users: ',response.data.users);
    8  console.log('images: ',response.data.images);
    9  console.log('images: ',response.data.coordinates);
    10  console.log('images: ',response.data.price);
    11  return (
    12    <div className="App">
    13    {
    14      response.data.users.map(user=><><h1 key={user.id}>{user.name}</h1></>)
    15    }    
    16    {
    17      response.data.images.map(img=><><h1>{img}</h1></>)
    18    }    
    19    </div>
    20  );
    21}
    22
    23export default App;

jsx

For the remaining properties, separately render them based on their data types, as shown below

    1...
    2   <p>{response.data.coordinates.x } {response.data.coordinates.y }</p>     
    3   <p><strong>{response.data.price}</strong></p>
    4...

jsx

Conclusion
----------

Root nodes in JSON give you a better understanding of the response object. In cases where JSON responses contain similar data types, you can combine them into one and iterate through all of them together, but it largely depends on how your database is set up. The generalized approach is to access them through the root node individually and iterate over only those properties that can be iterated over (such as arrays and strings), as shown in this guide.

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

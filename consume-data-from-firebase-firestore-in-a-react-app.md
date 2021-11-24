<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Consume Data from Firebase Firestore in a React App
===================================================

### Gaurav Singhal

-   Nov 16, 2020
-   7 Min read
-   34,903 Views

-   Nov 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   34,903 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

115

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-initialsetup" class="menu-link">Initial Setup</a>
-   <a href="#module-consumingdatafromfirestore" class="menu-link">Consuming Data from Firestore</a>
-   <a href="#module-finalcode" class="menu-link">Final Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Firebase allows you to build *serverless* web apps easily by giving you numerous features right out of the box. It serves as an entire backend as a service by providing authentication, cloud functions, real-time database, Cloud Firestore, and more.

In this guide, you'll learn how to consume data from Firebase Cloud Firestore in your React app.

Initial Setup
-------------

Ensure that you have an account on [firebase.google.com](https://firebase.google.com/) and create a new Firebase project. Click on **Add Firebase to Your Web App** and follow the steps. Head over to the Cloud Firestore section and create a new collection called <span class="jsx-3120878690">`Blogs`</span>. Add a document as shown below.

    1body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    2created_at: November 11, 2020 at 12:00:00 AM UTC+5:30
    3posted_by: "Sam"
    4title: "New Egg Recipe"

json

Now head over to your React app and install Firebase.

    1npm i firebase

shell

Create a new file called <span class="jsx-3120878690">`firebase.config.js`</span> to store all configurational details required to connect to your Firebase project. Head over to your project settings and copy the <span class="jsx-3120878690">`firebaseConfig`</span> and paste it inside the <span class="jsx-3120878690">`firebase.config.js`</span> file.

    1import firebase from 'firebase'
    2var firebaseConfig = {
    3    apiKey: "xxxxxxxxxxxxxxxx",
    4    authDomain: "xxxxxxxxxxxxxxxx",
    5    databaseURL: "xxxxxxxxxxxxxxxx",
    6    projectId: "xxxxxxxxxxxxxxxx",
    7    storageBucket: "xxxxxxxxxxxxxxxx",
    8    messagingSenderId: "xxxxxxxxxxxxxxxx",
    9    appId: "xxxxxxxxxxxxxxxx",
    10    measurementId: "xxxxxxxxxxxxxxxx"
    11  };
    12  
    13const firebaseApp=firebase.initializeApp(firebaseConfig);
    14const db=firebase.firestore();
    15
    16export default db;

javascript

Make sure you have correctly added your own Firebase project's <span class="jsx-3120878690">`firebaseConfig`</span>. Initialize the Firebase app by passing in the <span class="jsx-3120878690">`firebaseConfig`</span> to <span class="jsx-3120878690">`firebase.initializeApp()`</span> method and get a reference to the database by calling the <span class="jsx-3120878690">`firestore()`</span> method on the Firebase object and storing it in a variable.

Consuming Data from Firestore
-----------------------------

Consuming data from Firestore is similar to consuming JSON data from a REST API. First, import <span class="jsx-3120878690">`db`</span> from the config file along with <span class="jsx-3120878690">`useState`</span> and <span class="jsx-3120878690">`useEffect`</span> to create <span class="jsx-3120878690">`state`</span>, and fire the request to fetch data.

    1import db from './firebase.config';
    2import React,{useState,useEffect} from 'react';

javascript

Create a piece of <span class="jsx-3120878690">`state`</span> to store your data.

    1const [blogs,setBlogs]=useState([])

javascript

Create an <span class="jsx-3120878690">`async`</span> function to fetch data from Firestore and call it inside <span class="jsx-3120878690">`useEffect`</span>, as shown below.

    1  useEffect(() => {
    2    fetchBlogs();
    3  }, [])

javascript

Inside the <span class="jsx-3120878690">`fetchBlogs()`</span> method, get a reference to your database by calling the <span class="jsx-3120878690">`collection()`</span> method on the <span class="jsx-3120878690">`db`</span> object and passing in the name of the collection as a parameter.

    1const fetchBlogs=async()=>{
    2    const response=db.collection('Blogs');
    3}

javascript

In order to get the data from this <span class="jsx-3120878690">`response`</span> object, using the <span class="jsx-3120878690">`await`</span> keyword, call the <span class="jsx-3120878690">`get()`</span> method on the <span class="jsx-3120878690">`response`</span> object and store it inside a variable <span class="jsx-3120878690">`data`</span>.

    1const fetchBlogs=async()=>{
    2    const response=db.collection('Blogs');
    3    const data=await response.get();
    4}

javascript

The <span class="jsx-3120878690">`data`</span> object contains a property called <span class="jsx-3120878690">`docs`</span> that contains information about each individual document in the collection. Thus each document could contain information about an individual blog. Iterate over <span class="jsx-3120878690">`data.docs`</span> to get an individual item and call the <span class="jsx-3120878690">`data()`</span> method on each item to get the data inside it.

    1const fetchBlogs=async()=>{
    2    const response=db.collection('Blogs');
    3    const data=await response.get();
    4    data.docs.forEach(item=>{
    5     setBlogs([...blogs,item.data()])
    6    })
    7}

javascript

You can add the data to your state as shown above inside the loop. Since the <span class="jsx-3120878690">`Blogs`</span> collection consists of a single document, your <span class="jsx-3120878690">`state`</span> will also contain a single item. Finally, cycle through your <span class="jsx-3120878690">`state`</span> and render the data on the DOM.

    1return (
    2    <div className="App">
    3      {
    4        blogs && blogs.map(blog=>{
    5          return(
    6            <div className="blog-container">
    7              <h4>{blog.title}</h4>
    8              <p>{blog.body}</p>
    9            </div>
    10          )
    11        })
    12      }
    13    </div>
    14  );

jsx

Final Code
----------

Have a look at the entire code that consumes data from a Firestore collection below.

    1import './App.css';
    2import db from './firebase.config';
    3import React,{useState,useEffect} from 'react';
    4
    5function App() {
    6  const [blogs,setBlogs]=useState([])
    7  const fetchBlogs=async()=>{
    8    const response=db.collection('Blogs');
    9    const data=await response.get();
    10    data.docs.forEach(item=>{
    11     setBlogs([...blogs,item.data()])
    12    })
    13  }
    14  useEffect(() => {
    15    fetchBlogs();
    16  }, [])
    17  return (
    18    <div className="App">
    19      {
    20        blogs && blogs.map(blog=>{
    21          return(
    22            <div className="blog-container">
    23              <h4>{blog.title}</h4>
    24              <p>{blog.body}</p>
    25            </div>
    26          )
    27        })
    28      }
    29    </div>
    30  );
    31}
    32
    33export default App;

jsx

Conclusion
----------

You can not only consume data but also add data to Firebase collections. You can also make complex structures by nesting collections depending on the complexity of the database you want to have. Using React with Firebase can help you develop both prototypes as well as production-based apps in no time without any complicated server setup. You can explore more features of Firebase by reading the [official documentation](https://firebase.google.com/docs).

If you have any questions, feel free to reach out to me at [Codealphabet](https://codealphabet.com/contact) .

115

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

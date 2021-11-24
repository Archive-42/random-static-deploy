<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Alert Users to Errors with React Bootstrap
==========================================

### Desmond Nyamador

-   Oct 21, 2020
-   5 Min read
-   4,728 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   4,728 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-reactbootstrap" class="menu-link">React Bootstrap</a>
-   <a href="#module-setupdevelopmentenvironment" class="menu-link">Set Up Development Environment</a>
-   <a href="#module-implementingtheapp" class="menu-link">Implementing the App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Alerts are the ideal way to show feedback to a user when they either provide incorrect data or need to be informed of certain occurrences. In this guide, you'll use the React Bootstrap library to build an app that displays feedback based on the user's input.

React Bootstrap
---------------

Bootstrap is the most popular component-oriented frontend framework by far from the lovely people at Twitter. Unlike other frameworks like Tailwind CSS, which uses *utility classes,* Bootstrap has fully configurable UI elements that help you to build a full-blown app easily.

Set Up Development Environment
------------------------------

To get started, setup a React development environment by running the command below.

    1npx create-react-app <YOUR_APP_NAME> && cd <YOUR_APP_NAME>

bash

> **Note:** Replace &lt;YOUR\_APP\_NAME&gt; with your preferred app name.

You can also get a fully configured environment quickly by visiting [https://react.new](https://react.new/) in your browser.

Next, add React Bootstrap to your dependencies by entering the following command in your terminal .

    1npm install react-bootstrap bootstrap

bash

There are two ways of importing components in React Bootstrap.

1.  Importing individual components

    1import Card from 'react-bootstrap/Card'

bash

1.  Destructuring

    1import { Card } from 'react-bootstrap'

bash

According to the documentation, the first method is advisable as "doing so pulls only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client". (<https://react-bootstrap.github.io/getting-started/introduction>)

Implementing the App
--------------------

This application prompts the user to enter a three-letter word and shows the user a success or error alert depending on the input.

First, add the application skeleton as shown below .

    1import React, {useState} from "react";\
    2
    3export default function App(){
    4 const [value, setValue] = useState("");
    5  const [isValid, setIsValid] = useState(false);
    6
    7    function handleSubmission(){}
    8
    9return (
    10<div className="App">
    11  <div>
    12      <h1>Word Master</h1>
    13      <p>Enter A Three Letter Word</p>
    14    <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    15    <button onClick={handleSubmission}>Submit</button>
    16    </div>
    17    </div>
    18  );
    19}

bash

Next, implement the <span class="jsx-3120878690">`handleSubmission`</span> function to validate the input from the user, as shown below.

    1import React, {useState} from "react";
    2import Alert from 'react-bootstrap/Alert';
    3import 'bootstrap/dist/css/bootstrap.min.css';
    4
    5export default function App(){
    6 const [value, setValue] = useState("");
    7  const [isValid, setIsValid] = useState(false);
    8
    9    function handleSubmission(){
    10        if (value.length > 3 || value.length < 3){ 
    11      setIsValid(false)
    12    }else{
    13      setIsValid(true)
    14    }
    15    }
    16
    17return (
    18<div className="App">
    19{isValid 
    20      ? <Alert variant="success">Hurray! You're a genius.</Alert>
    21      : <Alert variant="danger">Oops! Try again</Alert>
    22}
    23  <div>
    24      <h1>Word Master</h1>
    25      <p>Enter A Three Letter Word</p>
    26    <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    27    <button onClick={handleSubmission}>Submit</button>
    28    </div>
    29    </div>
    30  );
    31}

bash

Finally, add the control flow to display an error or success message using the React Bootstrap alert component.

    1import React, {useState} from "react";
    2
    3export default function App(){
    4 const [value, setValue] = useState("");
    5  const [isValid, setIsValid] = useState(false);
    6
    7    function handleSubmission(){
    8     if (value.length > 3 || value.length < 3){ 
    9      setIsValid(false)
    10    }else{
    11      setIsValid(true)
    12    }
    13    }
    14
    15return (
    16<div className="App">
    17  <div>
    18      <h1>Word Master</h1>
    19      <p>Enter A Three Letter Word</p>
    20    <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    21    <button onClick={handleSubmission}>Submit</button>
    22    </div>
    23    </div>
    24  );
    25}

bash

Now enter a word and check out the feedback received from the world-class word master app you just built.

Conclusion
----------

And that's a wrap! In this guide, you learned how to use the React Bootstrap alert component to display feedback to a user based on the length of the input. You should try as much as possible to implement this in many other ways to help you gain a better understanding. Read more on React Bootstrap [here](https://react-bootstrap.github.io/). Stay safe!

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

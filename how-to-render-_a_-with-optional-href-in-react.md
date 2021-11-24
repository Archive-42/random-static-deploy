<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Render &lt;a&gt; with Optional href in React
===================================================

### Gaurav Singhal

-   Nov 12, 2020
-   7 Min read
-   153,180 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   153,180 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Client-side Framework</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

90

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-overviewoftheatag" class="menu-link">Overview of the &lt;a&gt; Tag</a>
-   <a href="#module-optionalrenderingusecaseandsolution" class="menu-link">Optional Rendering: Use Case and Solution</a>
-   <a href="#module-creatinganewproject" class="menu-link">Creating a New Project</a>
-   <a href="#module-cleaningupthetemplate" class="menu-link">Cleaning up the Template</a>
-   <a href="#module-settingstatefortogglingcondition" class="menu-link">Setting State for Toggling Condition</a>
-   <a href="#module-optionallyrenderinganelement" class="menu-link">Optionally Rendering an Element</a>
-   <a href="#module-usinganifstatement" class="menu-link">Using an If Statement</a>
-   <a href="#module-usingtheternaryoperator" class="menu-link">Using the Ternary Operator</a>
-   <a href="#module-usingtheoperator" class="menu-link">Using the &amp;&amp; Operator</a>
-   <a href="#module-meetingtheneedsofyourapp" class="menu-link">Meeting the Needs of Your App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When you're developing an app to cater to all types of end users, *conditional rendering* allows you to automate your code to handle all predefined and dynamic cases without hardcoding solutions. Apart from keeping the code clean, short, and readable, it also manages a large number of possibilities with some simple structural logic.

In this guide, you'll learn how to render an anchor element in your React app with optional <span class="jsx-3120878690">`href`</span> based on specific conditions.

Overview of the &lt;a&gt; Tag
-----------------------------

The anchor tag in HTML is used to navigate to different web pages using an href attribute. This href attribute contains the URL or path to the destination page. It may be a relative URL or an absolute URL. In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags should only be used for absolute paths. You can also think of relative URLs as in-app navigation, for example navigating to a particular route of the app and absolute paths as external links. The prevailing logic behind rendering optional <span class="jsx-3120878690">`href`</span> can be conveniently extended to the <span class="jsx-3120878690">`< link>`</span> as well, and in fact, any other JSX element or component.

Optional Rendering: Use Case and Solution
-----------------------------------------

Consider a simple use case where you are maintaining a database of all the people who have applied for jobs through your app. On the frontend, you get the data that you want to output in the following format.

    1user={
    2    name: '',
    3    email:'',
    4    sector:'',
    5    linkedinHandle:'',
    6    ...
    7}

javascript

Your form asked users to enter their LinkedIn handles, but it wasn't a mandatory field, so there's a strong possibility that some people left it blank. While outputting the data, you do something like this:

    1<a href={user.linkedninHandle}></a>

jsx

If the backend returned an empty string, your <span class="jsx-3120878690">`href`</span> would be rendered as an empty string too, but that's not an optimal solution. If <span class="jsx-3120878690">`linkedinHandle`</span> doesn't exist for a user, the <span class="jsx-3120878690">`<a>`</span> shouldn't be visible at all, but the empty link is still clickable even though it points nowhere. Additionally, this could throw errors in cases when the property is returned as null or undefined. The accurate solution is using conditional rendering on the <span class="jsx-3120878690">`<a>`</span> itself so either it is rendered along with the appropriate link or the other JSX element is rendered.

Creating a New Project
----------------------

Make sure you have Nodejs and npm installed in your machine (at least version 8 or higher) along with a code editor and a web browser (preferably Chrome or Firefox).

Create a new project using create-react-application:

    1npx create-react-app optional-href-rendering

shell

Cleaning up the Template
------------------------

Ideally, you could have a separate component handling this kind of logic in your app, but for brevity, let's put all the code inside <span class="jsx-3120878690">`App.js`</span>. Remove the logo, <span class="jsx-3120878690">`App.css`</span>, and all their imports from <span class="jsx-3120878690">`App.js`</span>. Clean out the starter template inside the <span class="jsx-3120878690">`App`</span> component. Your <span class="jsx-3120878690">`App.js`</span> should look like this:

    1import React from 'react';
    2
    3
    4function App() {
    5  return (
    6    <div className="App">
    7      
    8    </div>
    9  );
    10}
    11
    12export default App;

jsx

Setting State for Toggling Condition
------------------------------------

The condition is usually based on the type of data you receive from the backend, but a good practice is to use a toggling state to understand the rendering more dynamically. Consider data received from the backend, and based on that, a toggling state is set to either true or false. If it's true, the <span class="jsx-3120878690">`href`</span> will be rendered, and if false, it will not be rendered.

    1import React,{useState} from 'react';
    2
    3
    4function App() {
    5  const [state,setState]=useState(false);
    6  let url="";
    7  return (
    8    <div className="App">
    9     <a href={url}>LinkedIn handle</a>
    10    </div>
    11  );
    12}
    13
    14export default App;

jsx

This renders a simple <span class="jsx-3120878690">`<a>`</span> with an empty <span class="jsx-3120878690">`href`</span>, but it's still a clickable link. Let's add conditional rendering to it.

Optionally Rendering an Element
-------------------------------

If the <span class="jsx-3120878690">`href`</span> attribute for the user exists, the state is set to true and the <span class="jsx-3120878690">`<a>`</span> tag is shown, otherwise a message is displayed. Wrap the message to be shown in a JSX element and assign that element to a variable that can be conditionally outputted.

    1  let element=<p>No handle exists for this user!</p>;

jsx

Using an If Statement
---------------------

Before rendering anything, simply check if the state is true and assign <span class="jsx-3120878690">`<a>`</span> to that element, otherwise let the whole component render as it is.

    1import React,{useState} from 'react';
    2
    3
    4function App() {
    5  const [state,setState]=useState(false);
    6  let url="";
    7  let element=<p>No handle exists for this user!</p>;
    8  if(state) element=<a href={url}>LinkedIn handle</a>;
    9  return(
    10    <div className="App">
    11     {element}
    12    </div>
    13  );
    14}
    15
    16export default App;

jsx

Since the state is initially false, the message is displayed. Setting it to true will render the link as it is.

    1 ...
    2     const [state,setState]=useState(true);
    3 ...

jsx

Using the Ternary Operator
--------------------------

The same check can be performed using a *ternary operator* to keep the code more readable.

    1...
    2let element= state? <a href={url}>LinkedIn handle</a>
    3                  : <p>No handle exists for this user!</p>;
    4...

jsx

Using the && Operator
---------------------

In case you don't want to display an element at all for the false state value, the <span class="jsx-3120878690">`&&`</span> operator can be conveniently used.

    1import React,{useState} from 'react';
    2
    3
    4function App() {
    5  const [state,setState]=useState(false);
    6  let url="";
    7  let element=<a href={url}>LinkedIn handle</a>;
    8  return(
    9    <div className="App">
    10     {state && element}
    11    </div>
    12  );
    13}
    14
    15export default App;

jsx

Since the state is evaluated first, the element is not rendered since it's false. Changing it to true renders the empty parent div.

Meeting the Needs of Your App
-----------------------------

When implementing your solution to meet the need of your app, remember that toggling the state using <span class="jsx-3120878690">`setState`</span> should be done in a function performing the relevant check with the data received from the backend. The initial value of the state is arbitrarily chosen here, but you should initialize the state to a legal value depending on your code. If the evaluation of the condition is more dynamic in nature or it is not known beforehand, use relevant *lifecycle hooks* to ensure your code remains intact. Finally, it is not mandatory to use a state variable for evaluating your condition. In some cases, even a simple JavaScript variable will do, provided its scope is well defined and doesn't crash your code anywhere.

Conclusion
----------

Optionally rendering an attribute is never an optimal solution to conditionally display content on your app. The emphasis should always be more on the element itself, as attributes do not affect its physical appearance entirely. Also, when conditionally rendering an element or even a component, all scenarios should be well thought through. Avoid rendering empty tags, elements, or strings and focus on giving feedback to the user by rendering something else in their place.

If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

90

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

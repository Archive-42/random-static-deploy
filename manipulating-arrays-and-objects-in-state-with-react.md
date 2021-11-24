<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Manipulating Arrays and Objects in State with React
===================================================

### Desmond Nyamador

-   Nov 4, 2020
-   5 Min read
-   51,011 Views

-   Nov 4, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   51,011 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

44

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-stateinclasscomponents" class="menu-link">State in Class Components</a>
-   <a href="#module-stateinfunctionalcomponentshooks" class="menu-link">State in Functional Components (Hooks)</a>
-   <a href="#module-manipulatingarrays" class="menu-link">Manipulating Arrays</a>
-   <a href="#module-manipulatingobjects" class="menu-link">Manipulating Objects</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

At the heart of every app lies its state. No matter the kind of technology you use, your app relies on some sort of state, be it in-memory, on a physical disc, and so on. In React, every component can handle its own state, which might mean clicking a button or the content of a text input. These components are mostly referred to as *smart components*, whereas components which do not handle state are referred to as *dumb components*. In this guide, you'll learn how to manipulate state with objects and arrays. Sit tight!

State in Class Components
-------------------------

React components can be written as ES6 classes with state handled in the constructor function.

Consider the snippet below. <span class="jsx-3120878690">`<MyComponent/>`</span> has a state object in its constructor function, which is called before the component is rendered. Whenever the state object changes, React calls the render method on <span class="jsx-3120878690">`<MyComponent/>`</span>.

    1import React from 'react'
    2
    3class MyComponent extends React.Component {
    4 constructor(props){
    5     super(props);
    6     this.state = { date: new Date(), name: 'Kofi'}; 
    7 }
    8
    9    render(){
    10        return(
    11            <div>
    12                       <p> Hello {this.state.name} , it is {this.state.toLocaleTimeString()
    13                        <p>Date: {this.state.date.toLocaleDateString()}
    14           </div>
    15       )
    16   }
    17}

jsx

State in Functional Components (Hooks)
--------------------------------------

With the introduction of hooks in React 16.8, functional components can now also handle state in a simplified way. The snippet below is the class-based &lt;<span class="jsx-3120878690">`MyComponent/>`</span> written as a functional component. The <span class="jsx-3120878690">`useState`</span> hook is a function that takes in a default value as a parameter (which can be empty) and returns an array containing the state and a function to update it. Array destructuring is used to extract the values from the result of the <span class="jsx-3120878690">`useState`</span> function call.

    1import React, {useState} from 'react';
    2
    3function MyComponent(){
    4
    5    const [date, setDate] = useState(new Date())
    6 const [name, setName] = useState("Kofi");
    7
    8    return(
    9         <div>
    10                       <p> Hello {date.name} , it is {date.toLocaleTimeString()
    11                        <p>Date: {date.toLocaleDateString()}
    12                       <button onClick={setDate(new Date())}></button>
    13           </div>
    14   )
    15}

jsx

Manipulating Arrays
-------------------

If you're integrating your React app with an API, you probably would like to store values obtained from the API call in an array in state without losing previous values the array contained. The spread operator helps you do that easily. Take a close look at the snippet below, which implements the spread operator in <span class="jsx-3120878690">`finalArray`</span> by "spreading" the contents of <span class="jsx-3120878690">`oldArray`</span>.

    1const oldArray = ['peter piper', 'picked a pair']
    2
    3const finalArray = [...oldArray, 'of pickle pepper']
    4
    5console.log(finalArray)
    6
    7// (3) ["peter piper", "picked a pair", "of pickle pepper"]

jsx

Using hooks, you can easily apply that to your state array, as shown below. The values can now be used to render a list of paragraph tags using the map function.

    1import React, { useState, useEffect } from 'react';
    2
    3const ProductsPage = () => {
    4  const [productsList, setProductsList] = useState([]);
    5  const [isLoading, setisLoading] = useState(true);
    6
    7  useEffect(() => {
    8    fetch('http://127.0.0.1:8000/api/v1/products/all')
    9      .then((res) => res.json())
    10      .then((data) => setProductsList([...data]))
    11      .then(setisLoading(false));
    12  }, []);
    13
    14   return (
    15    <>
    16      <Header />
    17      {isLoading ? (
    18        <div className='spinner-border text-primary' role='status'>
    19          {' '}
    20          <span className='sr-only'>Loading...</span>{' '}
    21        </div>
    22      ) : (
    23                productsList.map(product => {
    24                            <p key={product.id}>{product.name}</p>
    25                })
    26      )}
    27    </>
    28  );
    29};
    30
    31}

jsx

Manipulating Objects
--------------------

Objects also support the spread operation, just like the code snippet above. Let's implement the same code with object spread.

    1import React, { useState, useEffect } from 'react';
    2
    3const ProductsPage = () => {
    4  const [productsList, setProductsList] = useState([]);
    5  const [isLoading, setisLoading] = useState(true);
    6
    7  useEffect(() => {
    8    fetch('http://127.0.0.1:8000/api/v1/products/all')
    9      .then((res) => res.json())
    10      .then((data) => setProductsList({...data}))
    11      .then(setisLoading(false));
    12  }, []);
    13
    14   return (
    15    <>
    16      <Header />
    17      {isLoading ? (
    18        <div className='spinner-border text-primary' role='status'>
    19          {' '}
    20          <span className='sr-only'>Loading...</span>{' '}
    21        </div>
    22      ) : (
    23                Object.keys(productList).map(product => {
    24                            <p key={productList[product].id}>{productList[product].name}</p>
    25                })
    26      )}
    27    </>
    28  );
    29};
    30
    31}

jsx

Conclusion
----------

And that's it. You've successfully studied the art of state management with objects and arrays. Tackling state-related issues should now be a breeze for you. If you'd like to chat more about this topic, ping me on Twitter [@DesmondNyamador](https://twitter.com/DesmondNyamador).

44

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

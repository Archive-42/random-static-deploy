<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Resolving React Error, "Tried to merge an object, instead got \[object Object\]"
================================================================================

### Gaurav Singhal

-   Oct 8, 2020
-   6 Min read
-   1,615 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,615 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-modifyingstateinreact" class="menu-link">Modifying State in React</a>
-   <a href="#module-exampleinreact" class="menu-link">Example in React</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

While working with state variables in React, you might run into an error stating <span class="jsx-3120878690">`Tried to merge an object, instead got                                       [object Object]`</span>. This usually happens when you are directly modifying your state and altering its original structure incorrectly. For instance, your state variable has initialized an empty object and you are trying to assign an array to it directly. This guide demonstrates how you can alter or update your state correctly without running into any errors.

Modifying State in React
------------------------

In React, the state is conceived to be *immutable*. This means that if you have this state in your component

    1state={
    2 name: 'Margo'
    3}

javascript

you can't mutate the state directly as shown below.

    1this.state={
    2 name:'Fuzzy'
    3}

javascript

You have to call the <span class="jsx-3120878690">`setState()`</span> method available on your state to update the state *asynchronously*. Not only does this immutability follow a structured React pattern of updating the state and re-rendering the DOM, but it also prevents you from writing bad code that can break your app. For instance, if your state is an object containing an array, you will call <span class="jsx-3120878690">`setState()`</span> to update that array, keeping the original structure of the state intact.

Example in React
----------------

In an empty React project, create a simple class component with some predefined state.

    1import React, { Component } from 'react'
    2
    3export default class App extends Component {
    4  state={
    5    todos:[
    6      {id:0,"status": 0, "title": "Wash Dishes"},
    7      {id: 1,"status": 1, "title": "Play Piano"}
    8     ]
    9  }
    10  render() {
    11    return (
    12      <div>
    13      </div>
    14    )
    15  }
    16}

javascript

The above class contains a simple state object with a property called <span class="jsx-3120878690">`todos`</span>. <span class="jsx-3120878690">`todos`</span> is an array of objects where each object represents information about a particular todo. Let's say you got a list of new <span class="jsx-3120878690">`todos`</span> back from the server and you want to append those todos to your state so you can output it on the DOM.

    1componentDidMount(){
    2    var newTodos = [
    3      {id:2,"status": 0, "tite": "Cook Dinner"},
    4      {id: 3,"status": 0, "title": "Make Bed"}
    5    ];
    6 }

javascript

<span class="jsx-3120878690">`newTodos`</span> is what you want to append to your state. Consider the following code that novice React developers write while merging a new object with the state.

    1componentDidMount(){
    2    var newTodos = [
    3      {id:2,"status": 0, "tite": "Cook Dinner"},
    4      {id: 3,"status": 0, "title": "Make Bed"}
    5    ];
    6    var newState = {};
    7  
    8    newState = newTodos;
    9    console.log(newState);
    10    this.setState(newState);
    11}

javascript

You first create a <span class="jsx-3120878690">`newState`</span> variable as an empty object and assign it to <span class="jsx-3120878690">`newTodos`</span>. So now <span class="jsx-3120878690">`newState`</span> is an array of objects with data from <span class="jsx-3120878690">`newTodos`</span>. Then you call the <span class="jsx-3120878690">`setState()`</span> method and pass in the new state inside it directly. Your original state was

    1todos:[
    2      {id:0,"status": 0, "title": "Wash Dishes"},
    3      {id: 1,"status": 1, "title": "Play Piano"}
    4]

javascript

After merging <span class="jsx-3120878690">`newTodos`</span> into your state, you should expect your state to become

    1todos:[      
    2    {id:0,"status": 0, "title": "Wash Dishes"},      
    3    {id: 1,"status": 1, "title": "Play Piano"},
    4    {id:2,"status": 0, "tite": "Cook Dinner"},
    5    {id: 3,"status": 0, "title": "Make Bed"}
    6]

javascript

See if the new state actually looks like the above by logging it to the console inside <span class="jsx-3120878690">`componetDidUpdate()`</span>

    1componentDidUpdate(){
    2    console.log(this.state)
    3}

javascript

If you inspect the console you will see that your state has deviated its original structure and it looks something like this

    1[
    2    {id: 2, status: 0, tite: "Cook Dinner"},
    3    {id: 3, status: 0, title: "Make Bed"},
    4    todos: (2) [{…}, {…}]
    5]

javascript

This isn't what you were expecting. Each element of the newly added todos is a *direct child property* of your state instead of the <span class="jsx-3120878690">`todos`</span> property. Not only does this badly structure your state, but it also leaves your code more prone to future bugs and errors. Additionally, it also becomes difficult to output all the todos on the DOM, as you have to loop through the properties separately depending on their data structure. You might also run into the error <span class="jsx-3120878690">`Tried to merge an object, instead got                                       [object Object ]`</span> while updating the state. The correct way to do this is by maintaining the original structure of your state .

    1this.setState({...this.state,todos:[...this.state.todos,...newTodos]});

javascript

Using the *spread operator*, you first copy the original state to a new state and append the newly added todos to the <span class="jsx-3120878690">`todos`</span> property of the state. If you see the updated state logged on the console then your state looks exactly how it should, containing one single property called <span class="jsx-3120878690">`todos`</span> that contains all four todos as elements of an array. Now you can also easily output all todos by simply iterating over the <span class="jsx-3120878690">`todos`</span> property of the state and outputting the property you wish to render on the DOM .

    1render() {
    2    return (
    3      <div>
    4       {
    5         this.state.todos.map(todo=><p key={todo.id}>{todo.title}</p>)
    6       }
    7      </div>
    8    )
    9  }
    10}

jsx

Have a look at the entire code below.

    1import React, { Component } from 'react'
    2
    3export default class App extends Component {
    4  state={
    5    todos:[
    6      {id:0,"status": 0, "title": "Wash Dishes"},
    7      {id: 1,"status": 1, "title": "Play Piano"}
    8     ]
    9  }
    10
    11  componentDidMount(){
    12    var newTodos = [
    13      {id:2,"status": 0, "tite": "Cook Dinner"},
    14      {id: 3,"status": 0, "title": "Make Bed"}
    15    ]; 
    16  
    17     this.setState({...this.state,todos:[...this.state.todos,...newTodos]});
    18  }
    19  componentDidUpdate(){
    20    console.log(this.state)
    21  }
    22  render() {
    23    return (
    24      <div>
    25       {
    26         this.state.todos.map(todo=><p key={todo.id}>{todo.title}</p>)
    27       }
    28      </div>
    29    )
    30  }
    31}

jsx

Conclusion
----------

Modifying or updating the state of your React components should be done in the right manner to avoid potential bugs in your code. Using JavaScript's spread operator, the state can be modified in a cleaner and shorter syntax. A lot of good practices can be adopted by simply learning newer and more modern features of JavaScript and using them in your code. They help you write clean, short, readable, and maintainable code and mitigate your chances of running into errors.

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

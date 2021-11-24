<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Polymorphism and Action Bubbling in Redux
=========================================

### Gaurav Singhal

-   Oct 18, 2020
-   6 Min read
-   426 Views

-   Oct 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   426 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-polymorphisminredux" class="menu-link">Polymorphism in Redux</a>
-   <a href="#module-actionbubblinginredux" class="menu-link">Action Bubbling in Redux</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Redux gives a lot of power to React apps by managing their complex state through <span class="jsx-3120878690">`actions`</span> and <span class="jsx-3120878690">`reducers`</span>. It is built on the *functional programming methodology* where reducers are simple functions that update the state in the Redux <span class="jsx-3120878690">`store`</span> on dispatching <span class="jsx-3120878690">`actions`</span>. However, reducers can be made *polymorphic* and *action bubbling* can be mimicked using the Redux global store. Since these concepts aren't original to Redux but an adaptation based on *object-oriented programming*, they may not be as necessary as in other languages or frameworks. This guide will explain how to achieve polymorphism and action bubbling in Redux.

Polymorphism in Redux
---------------------

Polymorphism is a technique that allows you to do multiple things using a single form. It's a feature of object-oriented programming through which you can implement *function overloading*, where a single function can be used to implement different features based on the parameters passed. All the functions have the same name but perform different tasks. Reducers in Redux are also functions inside of which you take <span class="jsx-3120878690">`action`</span> and <span class="jsx-3120878690">`state`</span> as parameters and, on the basis of the action, perform different tasks.

Consider a simple reducer in a React-Redux app that adds, deletes, or updates todos based on the action passed to it.

    1export default function todoReducer(state=initState,action){
    2 switch(action.type){
    3        case 'ADD_TODO': return {
    4                                ...state,
    5                                todos: [...todos,action.payload.newTodo]
    6                            }
    7        case 'UPDATE_TODO': return {
    8                                ...state,
    9                                todos: todos.map((todo)=>{
    10                                    if(todo.id===action.payload.updatedTodo.id)
    11                                    return action.payload.updatedTodo;
    12                                    else
    13                                    return todo;
    14                                })
    15                            }
    16        case 'DELETE_TODO': return {
    17                                ...state,
    18                                todos: todos.filter(todo=>todo.id!==action.payload.de)
    19                            }
    20        default: return state
    21    }
    22}

javascript

You have a simple <span class="jsx-3120878690">`todoReducer`</span> that adds a new todo to the list of todos in your state, updates a particular todo, or deletes a particular todo from your <span class="jsx-3120878690">`state`</span>. This is a common implementation of reducers in a React-Redux app. If at any point you want to add a new todo, you can dispatch an <span class="jsx-3120878690">`action`</span> that looks something like this.

    1dispatch({
    2 type: 'ADD_TODO',
    3 payload:{
    4     newTodo:{
    5         id: 3,
    6         name: 'Make a new todo list',
    7         status: 'Pending'
    8     }
    9 }
    10})

javascript

Similarly, to update the above todo, dispatch an <span class="jsx-3120878690">`action`</span> like this.

    1dispatch({
    2 type: 'UPDATE_TODO',
    3 payload:{
    4     newTodo:{
    5         id: 3,
    6         name: 'Make a new todo list',
    7         status: 'Completed'
    8     }
    9 }
    10})

javascript

Thus, actions in the case of a general reducer look like <span class="jsx-3120878690">`{type: 'DELETE_TODO', payload:                                       {...}}`</span> . Using polymorphism, can make this much simpler and more flexible. Instead of having a <span class="jsx-3120878690">`switch case`</span> on every action type in your reducer, you can create a polymorphic reducer that simply calls a <span class="jsx-3120878690">`handler`</span> property on your action and passes the <span class="jsx-3120878690">`state`</span> and <span class="jsx-3120878690">`payload`</span> properties to it. Thus, the above reducer becomes:

    1export default function todoReducer(state = initState, action) {
    2    return action.handler(state, action.payload);
    3}

javascript

And your actions would look like

    1{ 
    2    handler: ADD_TODO, 
    3    payload: newTodo:{...}
    4}

javascript

And then you can create a function that does the required computation based on the <span class="jsx-3120878690">`handler`</span> and returns the result that, in turn, your reducer returns. This makes your reducer polymorphic in the sense that it returns a single instance that does different things based on the <span class="jsx-3120878690">`handler`</span> property attached to it. You can follow the same pattern for any kind of action by attaching the action type inside the handler property.

Action Bubbling in Redux
------------------------

Actions are dispatched from a component to fire a reducer that modifies or updates the state. Just like <span class="jsx-3120878690">`events`</span> are *bubbled* from child element to parent element in JavaScript, action bubbling can find a use case when a child component fires an <span class="jsx-3120878690">`action`</span> to modify a state and you need to do the same with the parent component to use that modified state. However, when you break down this use case, it seems that the relevant information is what actually needs to bubble through your component tree in a *bottom-up* manner rather than the action itself. Consider the following component subtree in a React-Redux app.

    1export const ParentComponent =()=>{
    2 return(
    3     <ChildComponent/>
    4 )
    5}

jsx

The *component tree* is composed of two components, a <span class="jsx-3120878690">`ParentComponent`</span> and a <span class="jsx-3120878690">`ChildComponent`</span> rendered inside the <span class="jsx-3120878690">`ParentComponent`</span>. If the <span class="jsx-3120878690">`ChildComponent`</span> on dispatching an action can modify the state, <span class="jsx-3120878690">`ParentComponent`</span> can use that modified state directly from your Redux store. It's important to note that the <span class="jsx-3120878690">`state`</span> referred to here is not <span class="jsx-3120878690">`props`</span> passed down to your child component. Dispatching actions to modify state in a global store, in essence, bubbles information through the tree, top-down fashion, bottom-up fashion, and so on. Thus you can implement action bubbling by bubbling information through actions and updating the global store where the modified state can be used by any component in the component tree.

Conclusion
----------

It's important to note that polymorphism is already implemented in Redux reducers to some extent as a single reducer is meant to perform different tasks on the basis of the action passed. The example demonstrated here of creating a polymorphic reducer may not lead to a better approach for small apps having simple actions, and at times it may not be necessary at all. Similarly, as action bubbling is not native to Redux, using the global store to mimic that concept is much better than implementing it from scratch. The ideal implementation might direct away from Redux's own in-built methodology that gives you powerful abilities to write functional, clean, and structured code.

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

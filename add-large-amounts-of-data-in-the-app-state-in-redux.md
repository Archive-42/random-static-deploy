<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Add Large Amounts of Data in the App State in Redux
===================================================

### Gaurav Singhal

-   Oct 16, 2020
-   6 Min read
-   16,327 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   16,327 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

33

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-creatingreduxboilerplate" class="menu-link">Creating Redux Boilerplate</a>
-   <a href="#module-creatinglargejsondata" class="menu-link">Creating Large JSON Data</a>
-   <a href="#module-addinglargeamountsofdatainstate" class="menu-link">Adding Large Amounts of Data in State</a>
-   <a href="#module-analyzinglargewriteoperation" class="menu-link">Analyzing Large Write Operation</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Redux stores are global states that store data you want to use across multiple components without drilling props at every level in your component tree. As an app gets large and complex, you might want to store large, bulky data inside your Redux store and access it inside a component. A Redux store doesn't have a limit on the amount of data stored, so you can pretty much use it to store almost anything, including bulky JSON data, data in table form, etc. This guide will demonstrate how to add large amounts of data in your React Redux app state.

Creating Redux Boilerplate
--------------------------

In an empty Create-React-App React-Redux project, set up a simple store and reducer using the below code in a file called <span class="jsx-3120878690">`store.js`</span> inside the root directory.

    1import { createStore} from 'redux';
    2const initailState={
    3    data:'lorem ipsum',
    4}
    5const rootReducer=(state=initailState,action)=>{
    6    switch(action.type){
    7        case 'ADD_DATA':
    8            return{
    9                ...state,
    10                data: action.payload
    11            }
    12        default:
    13            return state;
    14    }
    15}
    16
    17export default createStore(rootReducer)

javascript

Next, wrap your app around a <span class="jsx-3120878690">`Provider`</span> component and pass the <span class="jsx-3120878690">`store`</span> as <span class="jsx-3120878690">`props`</span> so that all the components inside this <span class="jsx-3120878690">`Provider`</span> component can use the <span class="jsx-3120878690">`store`</span> inside <span class="jsx-3120878690">`index.js`</span>.

    1import React from 'react';
    2import ReactDOM from 'react-dom';
    3import './index.css';
    4import App from './App';
    5import * as serviceWorker from './serviceWorker';
    6import {Provider} from 'react-redux';
    7import store from './store';
    8
    9ReactDOM.render(
    10  <React.StrictMode>
    11    <Provider store={store}>
    12      <App />
    13    </Provider>
    14  </React.StrictMode>,
    15  document.getElementById('root')
    16);
    17
    18serviceWorker.unregister();

jsx

The store will initially have some short and simple data. Next, create a file <span class="jsx-3120878690">`action.js`</span> and create an action creator with an action of type <span class="jsx-3120878690">`ADD_DATA`</span>. It also contains an object <span class="jsx-3120878690">`addData`</span> that connects the action <span class="jsx-3120878690">`type`</span> and <span class="jsx-3120878690">`payload`</span> properties to the data passed through <span class="jsx-3120878690">`dispatch()`</span> method.

    1const data='new data';
    2export const ADD_DATA = "ADD_DATA";
    3export const addData = {
    4      type: ADD_DATA,
    5      payload: data
    6};
    7export default addData;

jsx

Finally, connect the <span class="jsx-3120878690">`store`</span> and <span class="jsx-3120878690">`dispatch()`</span> to a component that can dispatch some action and append data to the global state.

    1import React,{useState} from 'react';
    2import {connect} from 'react-redux'
    3import {addData} from './action';
    4import './App.css';
    5
    6function App({addData,data}) {
    7
    8  return (
    9    <div className="App">
    10      <h1>App</h1>
    11      <button onClick={addData}>Add Data</button>
    12    </div>
    13  );
    14}
    15
    16const mapStateToProps=(state)=>({ data:state.data })
    17
    18const mapDispatchToProps = (dispatch) => {
    19  return {
    20    addData: ()=> dispatch(addData)
    21  }
    22}
    23export default connect(mapStateToProps,mapDispatchToProps)(App);

jsx

The app component renders a simple button that fires or dispatches the <span class="jsx-3120878690">`ADD_DATA`</span> action. On dispatching this action, you add some simple data to your global store's state.

Creating Large JSON Data
------------------------

The next step is to create a <span class="jsx-3120878690">`data.js`</span> file where the dummy data can be put for testing. Create a new file called <span class="jsx-3120878690">`data.js`</span> inside the root directory and add some large amounts of data inside it. The example uses a large JSON data of 1,000 entries created using online mock data generating tool [Mockaroo](https://www.mockaroo.com/). You can use the same tool to generate any kind of large data or use your own data. Inside the <span class="jsx-3120878690">`data.js`</span> file, copy and paste the large JSON data and export it as an object.

    1export default [
    2 {
    3      "id": 1,
    4      "first_name": "Zackariah",
    5      "last_name": "Rembaud",
    6      "email": "[email protected]",
    7      "gender": "Male",
    8      "ip_address": "40.23.171.141"
    9    },
    10    ...
    11]

javascript

This data can be used anywhere throughout your app by importing it like a regular object using the <span class="jsx-3120878690">`import`</span> keyword at the top of your component.

    1import data from './data.js';

jsx

Adding Large Amounts of Data in State
-------------------------------------

Import the large data inside the <span class="jsx-3120878690">`action.js`</span> file and pass this data to the <span class="jsx-3120878690">`payload`</span> property inside the <span class="jsx-3120878690">`addData`</span> object.

    1import data from './data.js';
    2
    3export const ADD_DATA = "ADD_DATA";
    4export const addData = {
    5      type: ADD_DATA,
    6      payload: data
    7};
    8export default addData;

javascript

You are now ready to dispatch the <span class="jsx-3120878690">`ADD_DATA`</span> action from your app component and add large JSON data of thousands of entries to your app's global store's state. Click the **Add Data** button and you can check that your store's state contains this large JSON data inside it. Thus you can add any amount of data in your app state by dispatching an action that stores that data in your Redux store through a reducer.

Analyzing Large Write Operation
-------------------------------

Storing a single line of data or a thousand entries of a complex JSON object makes no difference to Redux, as your Redux store is independent of the amount of data stored in it. On clicking the Add Data button, the <span class="jsx-3120878690">`ADD_DATA`</span> action is dispatched. This adds the large data inside the store without any flickering or UI lag, indicating that there is no performance difference when you add large data in the app state. You can try out with an even larger data set but the results will be the same.

For a more detailed analysis, you can use Google Chrome's Lighthouse to evaluate your app's performance by generating an app report after performing this operation, in one case using simple data and in another using the large JSON data, and compare the performance reports of both. You will find that both show nearly the same performance, showing that adding large amounts of data doesn't affect your app's performance.

Conclusion
----------

Your Redux store imposes no limitations on the size of the data stored. Dispatching an action that performs this operation will not downgrade the performance of your app, so you can safely store any amount of data in your app's <span class="jsx-3120878690">`state`</span>. However, if you're storing large data in the app state, at some point you may want to show it to the user by rendering it on the DOM. You may want to use techniques like [lazy loading](https://app.pluralsight.com/guides/how-to-load-components-conditionally-in-reactjs) to improve your app's performance in such situations while still delivering all the content on your app.

33

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Add Values from a Promise to a List of Dynamic Data in React
============================================================

### Zachary Bennett

-   Nov 5, 2020
-   4 Min read
-   2,971 Views

-   Nov 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   2,971 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

3

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-updatingstatedynamicallyusingpromises" class="menu-link">Updating State Dynamically Using Promises</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In order to build real-time, dynamic apps using React, you will inevitably need to update a list/array of data within a component based on data coming into your system via an external API.

This guide will demonstrate how to fetch data from a remote API and then update a component's state using the <span class="jsx-3120878690">`setState`</span> function.

Let's dive in!

Updating State Dynamically Using Promises
-----------------------------------------

Promises are used to model asynchronous actions in your JavaScript code. In this example, you will see how promises are used with the built-in JavaScript Fetch API in order to create our HTTP requests.

The <span class="jsx-3120878690">`setState`</span> function that React provides on components allows you to asynchronously set the state of your component. React will then trigger a new render of your component's view, if applicable.

Below, you will see some example code that implements polling in a React component. The code requests a new data point from an external API every five seconds and then stops polling when the component is unmounted.

    1class DynamicArrayComponent Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4        this.interval;
    5
    6        this.state = {
    7            dataPoints: this.props.dataPoints || [] // Set the initial state
    8        }
    9    }
    10
    11
    12    componentWillMount() {
    13        // Make the first request and then start polling.
    14        this.requestLatest();
    15        this.startPolling();
    16    }
    17
    18    componentWillUnmount() {
    19        this.stopPolling();
    20    }
    21
    22    requestLatest = () => {
    23        fetch(this.props.API_URL)
    24            .then(response => response.json())
    25            .then(dataPoint =>
    26                this.setState({
    27                    dataPoints: this.state.dataPoints.concat(dataPoint)
    28                })
    29            );
    30    }
    31
    32    startPolling = () => this.interval = setInterval(this.requestLatest, 5000)
    33
    34    stopPolling = () => {
    35        if (this.interval) {
    36            clearInterval(this.interval);
    37        }
    38    }
    39
    40    // ....
    41}

jsx

The first part of the code above, within the <span class="jsx-3120878690">`constructor`</span>, sets up the initial <span class="jsx-3120878690">`dataPoints`</span> state and creates an internal component property for keeping track of the interval that is to be created.

The <span class="jsx-3120878690">`componentWillMount`</span> component lifecycle method uses the <span class="jsx-3120878690">`requestLatest`</span> and <span class="jsx-3120878690">`startPolling`</span> methods to make an initial request for data and then start polling. This is necessary because when you use <span class="jsx-3120878690">`setInterval`</span> in JavaScript, it will not immediately call the function that you pass it.

Let's take a closer look at the <span class="jsx-3120878690">`requestLatest`</span> method:

    1requestLatest = () => {
    2    fetch(this.props.API_URL)
    3        .then(response => response.json())
    4        .then(dataPoint =>
    5            this.setState({
    6                dataPoints: this.state.dataPoints.concat(dataPoint)
    7            })
    8        );
    9}

jsx

Assuming that the external API is set up to dish out a new data point every five seconds, the code above fetches that new data and then uses the <span class="jsx-3120878690">`setState`</span> and <span class="jsx-3120878690">`Array.concat`</span> methods to add the data point to the component state. Note that when writing React code and using state, it is important that you use immutable data structures. The <span class="jsx-3120878690">`Array.concat`</span> method is a good choice here because it will return a new array. This ensures that, at a shallow level, you are dealing with an immutable component state.

From here, the <span class="jsx-3120878690">`componentWillUnmount`</span> component lifecycle method is used to call the <span class="jsx-3120878690">`stopPolling`</span> method, which uses the global <span class="jsx-3120878690">`clearInterval`</span> function to stop polling by clearing the created interval.

There you have it—just like that, you have added values from a promise to a list of dynamic data in React!

Conclusion
----------

The <span class="jsx-3120878690">`setState`</span> function in conjunction with promises is all you need to dynamically add values to an array. The asynchronous nature of <span class="jsx-3120878690">`setState`</span> and the way that React uses a virtual DOM will ensure that your component is updated only when it needs to be updated.

For more information about <span class="jsx-3120878690">`setState`</span> and the possibilities there, please check out the React [documentation](https://reactjs.org/docs/react-component.html#setstate).

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

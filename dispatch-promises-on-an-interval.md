<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Dispatch Promises On An Interval
================================

### Zachary Bennett

-   Nov 7, 2020
-   4 Min read
-   320 Views

-   Nov 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   320 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-promisesonaninterval" class="menu-link">Promises On An Interval</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Often when building a web app, it is necessary to make HTTP requests or perform some sort of asynchronous action on an interval. Making HTTP requests to collect data on an interval, or polling, is an important topic to understand as a web developer.

In this guide, you will learn how to set up polling in your React app via dispatching JavaScript promises on an interval. The Promise API allows you to model asynchronous actions within your codebase. You will learn how promises, coupled with the <span class="jsx-3120878690">`setInterval`</span> method, allow you to easily poll external APIs.

Let's dive in!

Promises On An Interval
-----------------------

As mentioned, dispatching promises on an interval is all about combining the Promise API with the globally available <span class="jsx-3120878690">`setInterval`</span> method.

Promises are used to model asynchronous actions in your JavaScript code. In this example, you will see how promises are used with the built-in JavaScript Fetch API to create our HTTP requests.

The <span class="jsx-3120878690">`setInterval`</span> method works by passing both a function and a time (in milliseconds). When an interval is created, the function passed to the interval is then fired off every <span class="jsx-3120878690">`n`</span> milliseconds!

Below, you will see some example code that implements polling in a React component. The code below requests reptile data every five seconds when the component mounts and then stops polling when the component is unmounted.

    1class ReptileViewComponent Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4        this.interval;
    5
    6        this.state = {
    7            reptiles: []
    8        }
    9    }
    10
    11
    12    componentWillMount() {
    13        // Make the first request and then start polling.
    14        this.requestLatestReptiles();
    15        this.startPolling();
    16    }
    17
    18    componentWillUnmount() {
    19        this.stopPolling();
    20    }
    21
    22    requestLatestReptiles = () => {
    23        fetch(this.props.reptileUrl)
    24            .then(response => response.json())
    25            .then(reptiles => this.setState({ reptiles }));
    26    }
    27
    28    startPolling = () => this.interval = setInterval(this.requestLatestReptiles, 5000)
    29
    30    stopPolling = () => {
    31        if (this.interval) {
    32            clearInterval(this.interval);
    33        }
    34    }
    35
    36    // ....
    37}

jsx

The first part of this code, within the <span class="jsx-3120878690">`constructor`</span>, sets up the initial <span class="jsx-3120878690">`reptiles`</span> state and creates an internal component property for keeping track of the interval that is to be created.

The <span class="jsx-3120878690">`componentWillMount`</span> component lifecycle method uses the <span class="jsx-3120878690">`requestLatestReptiles`</span> and <span class="jsx-3120878690">`startPolling`</span> methods to make an initial request for data and start polling. This is necessary because when you use <span class="jsx-3120878690">`setInterval`</span> in JavaScript, it will not immediately call the function that you pass to it.

From here, the <span class="jsx-3120878690">`componentWillUnmount`</span> component lifecycle method is used to call the <span class="jsx-3120878690">`stopPolling`</span> method, which uses the global <span class="jsx-3120878690">`clearInterval`</span> function to stop polling by clearing the created interval.

Wow! Just like that, you have created a simple component that is set up to dispatch promises on an interval. You can now poll an external API in order to ensure the latest data is always populated in the UI.

Conclusion
----------

Polling is a foundational skill to have as a web developer and a programmer in general. Combining JavaScript promises with <span class="jsx-3120878690">`setInterval`</span> makes it easy for you to set up polling in your app.

Polling is a great skill to have, but it is also a naive way of ensuring your app has the latest data that is available. Other alternatives to polling, such as server-sent events and web sockets, allow you to keep open connections to a server so that multiple HTTP requests are not continuously being fired off. These sorts of APIs allow you to have real-time data streaming in your app. For more information, check out the [server-sent events documentation](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) and the [web sockets documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

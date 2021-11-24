<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Load a View Based on a Response In React
========================================

### Zachary Bennett

-   Nov 1, 2020
-   4 Min read
-   1,484 Views

-   Nov 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   1,484 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

0

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-requestingdataoverhttp" class="menu-link">Requesting Data Over HTTP</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Interacting with a server over HTTP is a core part of any web developer's job. Your user will navigate to a view within your app, expecting to see data presented to them in some manner. Sometimes this data is static and you don't have to request it from the backend. But most often, this data is dynamic or too large to store statically on the client. When this happens in your React app, it is necessary to use an HTTP client in order to make requests to the server containing the data you need.

In this guide, you will learn how to use the Axios HTTP client inside your React components in order to load a view based on a given response.

Let's get started!

> **Note:** This guide assumes that you have already created or are working within a React app.

Requesting Data Over HTTP
-------------------------

The first part of loading a view based on an HTTP response is to download and start using an HTTP client. In this guide, we have chosen Axios as our HTTP client library of choice. There are many alternatives! Fetch is a great native client that you can use if you are trying to restrict the number of dependencies you are using in your app.

To download Axios, navigate to your root project directory where your <span class="jsx-3120878690">`package.json`</span> file is located, and run the command: <span class="jsx-3120878690">`npm install --save axios`</span>. Now you have Axios installed inside your React project and can start using it!

In the code below, you will see the basic shell of a <span class="jsx-3120878690">`DinosaurView`</span> component. This component's job is to request a list of dinosaurs from the server via HTTP and then render a list of <span class="jsx-3120878690">`Dino`</span> components based on the response.

    1class DinosaurView Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4
    5        this.state = {
    6            dinosaurs: []
    7        }
    8    }
    9
    10    componentDidMount() {
    11        ...
    12    }
    13
    14    render() {
    15        ...
    16    }
    17}

jsx

You need to set our <span class="jsx-3120878690">`dinosaurs`</span> state based on a list of dinosaurs requested within the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method. The <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method will ensure that the dinosaur data is only requested after the initial render of the <span class="jsx-3120878690">`DinosaurView`</span> component. This is helpful because you can display a simple loading screen while we wait for the request to complete.

Below is the updated code that shows how to use Axios to make a request to our private dinosaur API.

    1import axios from 'axios';
    2
    3class DinosaurView Extends React.Component {
    4    constructor(props) {
    5        super(props);
    6
    7        this.state = {
    8            dinosaurs: []
    9        }
    10    }
    11
    12    async componentDidMount() {
    13        const dinoResponse = await axios.get(this.props.dinosaurUrl);
    14        this.setState({ dinosaurs: dinoResponse.dinosaurs });
    15    }
    16
    17    render() {
    18        ...
    19    }
    20}

jsx

Wow, that was easy! In the above code, you first imported the Axios HTTP client library. Then, you marked <span class="jsx-3120878690">`componentDidMount`</span> as an <span class="jsx-3120878690">`async`</span> function. This enables the use of the<span class="jsx-3120878690">`await`</span> keyword in order to resolve the <span class="jsx-3120878690">`Promise`</span> returned from the call to <span class="jsx-3120878690">`axios.get`</span>. With the response successfully loaded, you then simply used the <span class="jsx-3120878690">`setState`</span> function in order to set the <span class="jsx-3120878690">`dinosaurs`</span> state of the component.

With your data requested, now it's time to load your view. Remember, this component simply wants to display a list of <span class="jsx-3120878690">`Dino`</span> components. This can be achieved by implementing the following <span class="jsx-3120878690">`render`</span> function.

    1    ...
    2
    3    render() {
    4        const dinosaurs =
    5            this.state
    6                .dinosaurs
    7                .map(dino => <Dino name={dino.name} type={dino.type} roar={dino.roar} />);
    8
    9        return (
    10            <ul>{dinosaurs}</ul>
    11        )
    12    }
    13}

jsx

Conclusion
----------

HTTP is almost imperative when it comes to dynamically loading views inside your React app. In order to interact with servers via HTTP, you need to use some sort of HTTP client on the frontend. You can use Axios, the native Fetch client, or any of the other HTTP client NPM packages available for download.

Of course, HTTP isn't the only way! GraphQL is becoming a popular choice when it comes to loading views based on requested data from the backend. For more information about GraphQL, please check out the GraphQL [documentation](https://graphql.org/).

0

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

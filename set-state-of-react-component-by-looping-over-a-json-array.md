<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Set State of React Component by Looping Over a JSON Array
=========================================================

### Zachary Bennett

-   Nov 1, 2020
-   5 Min read
-   9,484 Views

-   Nov 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   9,484 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-requestingjsondata" class="menu-link">Requesting JSON Data</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

JSON, HTTP, and React go hand in hand. Odds are, you will need to interact with a JSON array of data at some point while building your React app.

In this guide, you will learn how to use the Axios HTTP client to request JSON data from an API. Then, you will learn how to receive a JSON response, loop over the data this response contains, and set the state of your React component based on this data

Let's get started!

> **Note:** This guide assumes that you are working within a React app that has been created using <span class="jsx-3120878690">`create-react-app`</span>.

Requesting JSON Data
--------------------

The first part of looping over a JSON array involves actually requesting the data! To request data from an API, we must start by using an HTTP client. In this guide, we have chosen Axios as our HTTP client library of choice. There are many alternatives! Fetch is a great, native client that you can use if you are trying to restrict the number of dependencies you are using in your app.

To download Axios, navigate to your root project directory where your <span class="jsx-3120878690">`package.json`</span> file is located, and run the command: <span class="jsx-3120878690">`npm install --save axios`</span>. Now you have Axios installed inside of your React project and can start using it!

In the code below, you will see the basic shell of a <span class="jsx-3120878690">`SolarSystem`</span> component. This component's job is to request a list of planets from the server via HTTP and then render a list of <span class="jsx-3120878690">`Planet`</span> components based on the response. The number of gas giants will also need to be counted by looping over the JSON array contained within the response.

    1class SolarSystem Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4
    5        this.state = {
    6            planets: [],
    7            gasGiantsCount: 0
    8        }
    9    }
    10
    11    componentDidMount() {
    12        ...
    13    }
    14
    15    render() {
    16        ...
    17    }
    18}

jsx

First, you will need to set the <span class="jsx-3120878690">`planets`</span> state of the component based on a list of planets requested within the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method. The <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method will ensure that the planet's data is only requested after the initial render of the <span class="jsx-3120878690">`SolarSystem`</span> component. This is helpful because you can display a simple loading screen while you wait for the request to complete.

Below is the updated code that shows how to use Axios to make a request to the private planets API.

    1import axios from 'axios';
    2
    3class SolarSystem Extends React.Component {
    4    constructor(props) {
    5        super(props);
    6
    7        this.state = {
    8            planets: [],
    9            gasGiantsCount: 0
    10        }
    11    }
    12
    13    async componentDidMount() {
    14        const { data: planets }  = await axios.get(this.props.planetApiUrl),
    15                  gasGiantsCount = planets.filter(planet => planet.isGasGiant).length;
    16
    17        this.setState({ planets, gasGiantsCount });
    18    }
    19
    20    render() {
    21        ...
    22    }
    23}

jsx

Wow, that was easy! In the above code, you first imported the Axios HTTP client library. Then, you marked <span class="jsx-3120878690">`componentDidMount`</span> as an <span class="jsx-3120878690">`async`</span> function. This enables the use of the<span class="jsx-3120878690">`await`</span> keyword in order to resolve the <span class="jsx-3120878690">`Promise`</span> returned from the call to <span class="jsx-3120878690">`axios.get`</span>.

Once the response successfully loaded, you then had access to an Axios response object. One of the nice things about Axios is that it automatically parses the JSON for you! You can access this JSON on the <span class="jsx-3120878690">`data`</span> field of the response object. In the above code, we make use of JavaScript's object destructuring capabilities to grab the <span class="jsx-3120878690">`data`</span> field off of the response object and rename it to <span class="jsx-3120878690">`planets`</span>. In this case, the <span class="jsx-3120878690">`data`</span> field comprises our already-parsed JSON array.

With access to the JSON array you need, you then looped over it using one of JavaScript's Array prototype functions. In this case, you can see that your code loops over the planets and counts the number of gas giants in the solar system.

Finally, you then used the <span class="jsx-3120878690">`setState`</span> function in order to set the <span class="jsx-3120878690">`planets`</span> and <span class="jsx-3120878690">`gasGiantsCount`</span> state of the component.

With your data requested, now it's time to load your view. Remember, this component simply wants to display a list of <span class="jsx-3120878690">`Planet`</span> components. This can be achieved by implementing the following <span class="jsx-3120878690">`render`</span> function.

    1    ...
    2
    3    render() {
    4        const { planets, gasGiantsCount } = this.state;
    5
    6        const planetComponents = planets.map(planet => <Planet name={planet.name} type={planet.type} />);
    7
    8        return (
    9            <div>
    10                <h2>{gasGiantsCount}</h2>
    11                <ul>{planetComponents}</ul>
    12            </div>
    13        )
    14    }
    15}

jsx

Conclusion
----------

Working with JSON arrays is a crucial skill when creating any web app. In React, you can make working with JSON arrays easy by using an HTTP client like Axios to help you with things like the automatic parsing of JSON. Tools like Axios will help make your job easier by letting you write less code!

Of course, requesting JSON isn't the only thing Axios can help you out with. Eventually, you will want to send JSON arrays within your React app as well! For more information regarding Axios please check out the Axios [documentation](https://github.com/axios/axios/blob/master/README.md).

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

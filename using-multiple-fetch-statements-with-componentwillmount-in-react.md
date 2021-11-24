<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Using Multiple Fetch Statements with ComponentWillMount In React
================================================================

### Zachary Bennett

-   Nov 9, 2020
-   4 Min read
-   8,758 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   8,758 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-thecomponentwillmountlifecyclehook" class="menu-link">The componentWillMount Lifecycle Hook</a>
-   <a href="#module-usingmultiplefetchstatementswithincomponentdidmount" class="menu-link">Using Multiple Fetch Statements Within componentDidMount</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When writing code within your React app, you will most likely need to fetch data from an external API in order to render views based on that data. However, introducing asynchronous code into your app always comes with an overhead of complexity. To help combat this complexity, React introduces component lifecycle hooks. Component lifecycle hooks are methods that are triggered at certain phases in a component's "lifecycle." The two most common component lifecycle hooks that have been used in the past when it comes to HTTP requests are <span class="jsx-3120878690">`componentWillMount`</span> and <span class="jsx-3120878690">`componentDidMount`</span>.

In this guide, you will see how <span class="jsx-3120878690">`componentWillMount`</span> and <span class="jsx-3120878690">`componentDidMount`</span> have been used to make HTTP requests in the past. You will also discover how to execute multiple HTTP fetch requests for data within them.

The componentWillMount Lifecycle Hook
-------------------------------------

<span class="jsx-3120878690">`componentWillMount`</span> used to be an integral part of any component's lifecycle. I say "used to be" because now, <span class="jsx-3120878690">`componentWillMount`</span> is deprecated as of React v. 17! In a lot of apps, it was the lifecycle hook that was used to request data, as the name sort of suggests that this would be the place to do it! However, the problem with this approach was that a component <span class="jsx-3120878690">`render`</span> function was guaranteed to run before the HTTP request(s) was executed within <span class="jsx-3120878690">`componentWillMount`</span>. This often meant that your component had no data to show within its view layer if that data relied upon the HTTP request.

Because of this, you ultimately need to have some sort of default data or loading screen to show until the HTTP request comes back since the <span class="jsx-3120878690">`render`</span> function will end up running before the successful execution of the request. Ultimately, this means that you can drop the use of <span class="jsx-3120878690">`componentWillMount`</span> and simply set up some default data or a loading screen within the constructor of your class component. You can then move your HTTP request over to the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method. The <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method is guaranteed to run directly after the execution of the first <span class="jsx-3120878690">`render`</span> function. This makes it a reliable choice for fetching data!

Using Multiple Fetch Statements Within componentDidMount
--------------------------------------------------------

In this section, you will learn how to make HTTP requests using the Fetch API from two different locations and merge the results. Let's jump into the code!

    1import React from 'react';
    2
    3class MyComponent extends React.Component {
    4    constructor(props) {
    5        super(props);
    6
    7        this.state = {
    8            mergedData: this.props.defaultData
    9        }
    10    }
    11
    12    componentDidMount() {
    13        Promise.all([
    14            fetch(this.props.urlOne).then(res => res.json()),
    15            fetch(this.props.urlTwo).then(res => res.json())
    16        ]).then(([urlOneData, urlTwoData]) => {
    17            this.setState({
    18                mergedData: urlOneData.concat(urlTwoData)
    19            });
    20        })
    21    }
    22
    23    render() {
    24        return (
    25            <div>
    26                <h1>Check out this Data!</h1>
    27                <DataView data={this.state.mergedData}/>
    28            </div>
    29        )
    30    }
    31}

jsx

In the trivial example above, you can see the <span class="jsx-3120878690">`MyComponent`</span> component. This component is getting some default data from props via a parent component. This is the data that will be shown initially.

Then in the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method, multiple fetch statements are being executed against two different APIs. The <span class="jsx-3120878690">`Promise.all`</span> method is used to combine the results of these calls to <span class="jsx-3120878690">`fetch`</span> into a single array. Using <span class="jsx-3120878690">`Promise.all`</span> allows the component to execute these requests in parallel. Once both responses complete, you will have an array containing two sub-arrays. The <span class="jsx-3120878690">`setState`</span> method is then called in order to set the <span class="jsx-3120878690">`mergedData`</span> state based on the concatenated result of the two sub-arrays.

And there you have it! You just learned how to use the Fetch API to execute multiple HTTP requests from within the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method.

Conclusion
----------

The <span class="jsx-3120878690">`componentWillMount`</span> lifecycle method is a relic of the past. Please use it with caution! Going forward, all HTTP requests should be made from within the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method.

There is also another way to fetch data if you are using a functional component instead of a class component. That way is to use the <span class="jsx-3120878690">`useEffect`</span> hook. For more information regarding <span class="jsx-3120878690">`useEffect`</span>, please check out the React [documentation](https://reactjs.org/docs/hooks-effect.html).

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

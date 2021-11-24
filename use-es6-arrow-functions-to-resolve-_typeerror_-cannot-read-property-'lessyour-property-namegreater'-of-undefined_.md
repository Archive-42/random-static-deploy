<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Use ES6 Arrow Functions to Resolve "TypeError: Cannot read property '&lt;your property name&gt;' of undefined"
==============================================================================================================

### Zachary Bennett

-   Oct 13, 2020
-   5 Min read
-   15,207 Views

-   Oct 13, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   15,207 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

18

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-theproblemandaninitialsolution" class="menu-link">The Problem and an Initial Solution</a>
-   <a href="#module-thees6solution" class="menu-link">The ES6 Solution</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

If you are a React developer or are just learning to program in JavaScript, you might have run into this dreaded error while trying to read a property off of the <span class="jsx-3120878690">`this`</span> keyword:

    1TypeError: Cannot read property '<your property name>' of undefined

If you run into this error while writing React, the odds are high that you are trying to use a function within another function and are trying to access the <span class="jsx-3120878690">`this`</span> keyword within the nested function. But why does this happen?

This guide will dive into how function scope works in JavaScript. You will learn why this error occurs and what you can do to fix it.

Let's get started.

The Problem and an Initial Solution
-----------------------------------

Let's say that you have just written a small React Component that looks like this:

    1class FishSpecies Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = {
    5            clickCount: 0
    6        };
    7    }
    8
    9    onFishClicked() {
    10        this.setState(function(prevState, props) {
    11            return { clickCount:  prevState.clickCount + 1 };
    12        });
    13    }
    14
    15    render() {
    16        return (
    17            <ul>
    18                {{ this.props.fish.map(function(fish) {
    19                    return <Fish name={fish.name} onClick={this.onFishClicked} />
    20                })}}
    21            </ul>
    22        )
    23    }
    24}

jsx

At first, this component looks pretty straightforward. All this component does is receive a list of fish objects via props and render a <span class="jsx-3120878690">`Fish`</span> component for each one, passing down a couple of props to each fish. However, if you create this component and add to a real React app, it will fail. You will see an error that looks like:

    1TypeError: Cannot read property 'onFishClicked' of undefined

Oh no, there it is—the dreaded TypeError! So, why is this happening? This error informs you that <span class="jsx-3120878690">`this`</span> is undefined. Specifically, <span class="jsx-3120878690">`onClick={this.onFishClicked}`</span> fails for this reason. The reason the code is unable to access <span class="jsx-3120878690">`this`</span> here is because of how scope works in JavaScript.

Under the hood, functions are objects in JavaScript. When you create a function in JavaScript, it gets its own scope depending upon the context in which it is instantiated. In this case, there actually is no context, and so <span class="jsx-3120878690">`this`</span> is actually <span class="jsx-3120878690">`undefined`</span>! Essentially, the code is running in <span class="jsx-3120878690">`strict`</span> mode within the React framework and so the global context is not used in favor of no context at all. Check out [these docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) for more info.

So how can you fix this? Well, you have a number of options. In the following section will demonstrate the best and most modern means of fixing this error.

The ES6 Solution
----------------

So you've diagnosed the problem. You need to make sure that your functions have access to the <span class="jsx-3120878690">`this`</span> context of your class component! To do this, you can use ES6 arrow functions.

Apart from making your code more succinct and readable, arrow functions serve another purpose. It is not immediately obvious, but arrow functions play a big part in how context is passed down to functions. Essentially, when you declare a function using the arrow syntax you are telling the JavaScript code to bind the current context of <span class="jsx-3120878690">`this`</span> into the new function that is being created. This is not immediately obvious because this binding is done implicitly as compared to the explicit means of binding <span class="jsx-3120878690">`this`</span> by using the <span class="jsx-3120878690">`.bind`</span> method.

Let's see how you can use arrow functions to fix your code!

    1class FishSpecies Extends React.Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = {
    5            clickCount: 0
    6        }
    7    }
    8
    9    onFishClicked() {
    10        this.setState((prevState, props) => {
    11            return { clickCount:  prevState.clickCount + 1 };
    12        });
    13    }
    14
    15    render() {
    16        return (
    17            <ul>
    18                {{ this.props.fish.map(fish => {
    19                    return <Fish name={fish.name} onClick={this.onFishClicked} />
    20                })}}
    21            </ul>
    22        )
    23    }
    24}

jsx

Voila! It was a simple change to both of the <span class="jsx-3120878690">`function`</span> declarations above, but now your dreaded TypeError is gone because the function you are passing into <span class="jsx-3120878690">`Array.map`</span> within the <span class="jsx-3120878690">`render`</span> function has access to your component's <span class="jsx-3120878690">`this`</span> context. And this was all accomplished simply by changing how you declared your function.

Conclusion
----------

Arrow functions are a powerful means of binding the current context of <span class="jsx-3120878690">`this`</span> into nested functions. Unfortunately, this major benefit is implicit and so you would never know about it just by looking at its usage. Most, if not all, of your function declarations within your React components should be declared as arrow functions. Doing this will help you to avoid confusion when it comes to the context of <span class="jsx-3120878690">`this`</span> and what it gets bound to.

For more information on the <span class="jsx-3120878690">`this`</span> keyword in relation to function scope, please check out the [Mozilla JavaScript developer documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

18

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Access "this" in a Promise's Catch Block
========================================

### Zachary Bennett

-   Oct 30, 2020
-   5 Min read
-   2,156 Views

-   Oct 30, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   2,156 Views

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
-   <a href="#module-bindingcomponentscope" class="menu-link">Binding Component Scope</a>
-   <a href="#module-bindingcomponentscopeusingarrowfunctions" class="menu-link">Binding Component Scope Using Arrow Functions</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Promises were a revolutionary addition to the JavaScript programming language. Before promises, it was necessary to pass callbacks into function calls in order to model asynchronous control-flow. Promises give you a much more readable and maintainable way to manage asynchronous actions in your React app. The <span class="jsx-3120878690">`then`</span> and <span class="jsx-3120878690">`catch`</span> functions that a promise provides enable you to chain functions asynchronously and handle errors. However, using promises in your React components can be confusing when it comes to scope and the <span class="jsx-3120878690">`this`</span> keyword. In JavaScript, the <span class="jsx-3120878690">`this`</span> keyword allows you to access the context object of the surrounding lexical scope. In this guide, you will learn how to ensure that your promise <span class="jsx-3120878690">`catch`</span> blocks use the right context within your React components so that you can easily access component properties via <span class="jsx-3120878690">`this`</span>.

Let's dive in!

Binding Component Scope
-----------------------

First, the problem. When using promises in your React component, your first instinct may be to handle a promise like this:

    1// ... MammalComponent.jsx
    2
    3fetchMammals() {
    4    return fetch(this.mammalsUrl)
    5             .then(function(response) {
    6                return response.json();
    7             });
    8}
    9
    10initMammalsState() {
    11    const mammalJsonPromise = this.fetchMammals();
    12    mammalJsonPromise
    13        .then(function(mammals) {
    14            this.setState({ mammals });
    15        })
    16        .catch(function(error) {
    17            this.error = error;
    18        });
    19}
    20
    21
    22// ...

jsx

At first glance, this code seems like it would work. It's simply using the <span class="jsx-3120878690">`Fetch`</span> API to grab some JSON and then handle the promise returned. It also sets the <span class="jsx-3120878690">`error`</span> property on the component itself in the event an error occurs in the <span class="jsx-3120878690">`catch`</span> block. But unfortunately, this code fails! If you create a component using the code above, you will likely see an error that says something akin to <span class="jsx-3120878690">`Can't find property                                       <prop-name> of undefined`</span>. This is because your promise doesn't have access to the right <span class="jsx-3120878690">`this`</span> context!

The first way you can solve this issue is by using the <span class="jsx-3120878690">`bind`</span> function that is available on JavaScript's <span class="jsx-3120878690">`Function`</span> prototype. The <span class="jsx-3120878690">`bind`</span> function lets you inject a <span class="jsx-3120878690">`this`</span> context into the scope of the function you are working with. Below, you will find the functions above refactored in order to take advantage of this capability. Note how even the component functions themselves are bound to the React component's <span class="jsx-3120878690">`this`</span> context in the constructor.

    1// ... MammalComponent.jsx
    2
    3constructor(props) {
    4    super(props);
    5
    6    // Bind the 'this' context of the component to our class functions
    7    this.fetchMammals = this.fetchMammals.bind(this);
    8    this.initMammalsState = this.initMammalsState.bind(this);
    9}
    10
    11fetchMammals() {
    12    return fetch(this.mammalsUrl)
    13             .then(function(response) {
    14                return response.json();
    15             });
    16}
    17
    18initMammalsState() {
    19    const mammalJsonPromise = this.fetchMammals();
    20    mammalJsonPromise
    21        .then(function(mammals) {
    22            this.setState({ mammals });
    23        }.bind(this))
    24        .catch(function(error) {
    25            this.error = error;
    26        }.bind(this));
    27}
    28
    29
    30// ...

jsx

In this naive solution above, you can see how the <span class="jsx-3120878690">`bind`</span> function is being used to bind the context of this into the <span class="jsx-3120878690">`catch`</span> block so that the error can be shown by the component. This works ... but there's a better way! In the next section, you will see how arrow functions can be used to greatly simplify this.

Binding Component Scope Using Arrow Functions
---------------------------------------------

Arrow functions are so much more than just succinct means of declaring functions. Arrow functions also implicitly bind the <span class="jsx-3120878690">`this`</span> keyword for you! In the following code, you will see how we can access the <span class="jsx-3120878690">`error`</span> property of our <span class="jsx-3120878690">`MammalsComponent`</span> through arrow functions.

    1// ... MammalComponent.jsx
    2
    3// We don't have to bind these functions anymore!
    4fetchMammals = () => fetch(this.mammalsUrl).then(response => response.json())
    5
    6initMammalsState = () => {
    7    const mammalJsonPromise = this.fetchMammals();
    8
    9    mammalJsonPromise
    10        .then(mammals => this.setState({ mammals }))
    11        .catch(error => this.error = error);
    12}
    13
    14// ...

jsx

Wow! Look at how much simpler the code is! This code not only works, but is cleaner and more maintainable. The <span class="jsx-3120878690">`catch`</span> block now has access to the <span class="jsx-3120878690">`MammalComponent`</span>'s scope so that it now can set the <span class="jsx-3120878690">`error`</span> property.

Conclusion
----------

Arrow functions are the best way to bind the context of a React component's scope to inner functions within the component. Using arrow functions in this fashion allows you to effectively access the <span class="jsx-3120878690">`this`</span> property within promise <span class="jsx-3120878690">`catch`</span> blocks.

There are some additional improvements that could be made to the above code, namely the use of async/await syntax. The async and await JavaScript keywords can allow you to simplify promise usage and cut down on the amount of nested code you have in your codebase. It also allows you to model asynchronous code in a synchronous manner. For more information, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) for async/await syntax.

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

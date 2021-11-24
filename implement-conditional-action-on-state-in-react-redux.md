<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Implement Conditional Action on State in React-redux
====================================================

### Gaurav Singhal

-   Oct 21, 2020
-   5 Min read
-   3,995 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   3,995 Views

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
-   <a href="#module-understandingactions" class="menu-link">Understanding Actions</a>
-   <a href="#module-dispatchingactionfromcomponent" class="menu-link">Dispatching Action from Component</a>
-   <a href="#module-dispatchingactionconditionallyfromcomponent" class="menu-link">Dispatching Action Conditionally from Component</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When working with enterprise-level React apps, you have to deal with complex state management. The complexity of the state increases as the app scales. You can avoid problems related to the state in such apps by using a state management library. A state management library does all the heavy lifting for you and provides you with a declarative API to manage state in the whole app.

Redux is a popular state management library for React. Redux helps you manage the state with predictable behavior, which helps with long-term code maintainability. In this guide, you will learn how to use Redux to dispatch actions conditionally based on the value in the current global store.

Understanding Actions
---------------------

Actions are plain objects that send data or payloads of information from your component to the global store object. Below is an example action object that represents an action for authenticating a user.

    1const AUTHENTICATE = `LOGIN_USER`;

js

    1{
    2    type: AUTHENTICATE,
    3    payload: {
    4        email: '[email protected]',
    5        password: 'john123'
    6    }
    7}

js

The <span class="jsx-3120878690">`type`</span> key is the only mandatory property for action; other properties are up to you and can be flexible to meet your app requirements. It's a good practice to send as little data in each action as possible and avoid nested objects.

Dispatching Action from Component
---------------------------------

Now that you understand of Redux actions, in this section, you will learn how to dispatch an action from a component.

As an example, consider a <span class="jsx-3120878690">`LoginForm`</span> component that handles the form validation and submission; once the form is successfully submitted, it passes the values to the parent component, i.e., the <span class="jsx-3120878690">`LoginPage`</span> component using the <span class="jsx-3120878690">`onSubmit`</span> prop. When the form submits, you need to dispatch the <span class="jsx-3120878690">`AUTHENTICATE`</span> action, which will take care of the authentication process.

    1import React from "react";
    2
    3class LoginPage extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    8  }
    9
    10  handleFormSubmit(values) {
    11    // dispatch AUTHENTICATE action
    12  }
    13
    14  render() {
    15    return (
    16      <div>
    17        <LoginForm onSubmit={this.handleFormSubmit} />
    18      </div>
    19    );
    20  }
    21}
    22
    23export default LoginPage;

jsx

Now to dispatch the action from the <span class="jsx-3120878690">`LoginPage`</span> component, you need to use the <span class="jsx-3120878690">`connect`</span> method from the <span class="jsx-3120878690">`react-redux`</span> library.

    1import React from "react";
    2import { connect } from "react-redux";
    3
    4class LoginPage extends React.Component {
    5  constructor(props) {
    6    // ...
    7  }
    8
    9  handleFormSubmit(values) {
    10    // dispatch AUTHENTICATE action
    11    this.props.dispatch({
    12      type: AUTHENTICATE,
    13      payload: values,
    14    });
    15  }
    16
    17  render() {
    18    // ...
    19  }
    20}
    21
    22export default connect()(LoginPage);

jsx

The <span class="jsx-3120878690">`connect`</span> method is an enhancer function that connects the component with the global store and also injects a dispatch method in the prop.

The <span class="jsx-3120878690">`dispatch`</span> method takes the action object as its parameter and dispatches that action to the Redux store.

Dispatching Action Conditionally from Component
-----------------------------------------------

Consider that the authentication is already in progress, in which case you do not want to dispatch the <span class="jsx-3120878690">`AUTHENTICATE`</span> action. So here, you need to connect the component to the global store and retrieve the authentication status. You can do that by passing the <span class="jsx-3120878690">`mapStateToProps`</span> argument to the <span class="jsx-3120878690">`connect()`</span> method.

    1const mapStateToProps = (globalState) => {
    2  const { isAuthenticating } = globalState;
    3  return { isAuthenticating };
    4};
    5
    6export default connect(mapStateToProps)(LoginPage);

jsx

Then in the <span class="jsx-3120878690">`handleFormSubmit`</span> method, you can do as follows.

    1handleFormSubmit(values) {
    2    if (!this.props.isAuthenticating)
    3      this.props.dispatch({
    4        type: AUTHENTICATE,
    5        payload: values,
    6      });
    7}

js

The above condition will ensure that the <span class="jsx-3120878690">`AUTHENTICATE`</span> action is dispatched only when the <span class="jsx-3120878690">`isAuthentication`</span> state is set to false.

Here is the complete code for your reference.

    1import React from "react";
    2import { connect } from "react-redux";
    3
    4class LoginPage extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    9  }
    10
    11  handleFormSubmit(values) {
    12    if (!this.props.isAuthenticating)
    13      this.props.dispatch({
    14        type: AUTHENTICATE,
    15        payload: values,
    16      });
    17  }
    18
    19  render() {
    20    return (
    21      <div>
    22        <LoginForm onSubmit={this.handleFormSubmit} />
    23      </div>
    24    );
    25  }
    26}
    27
    28const mapStateToProps = (globalState) => {
    29  const { isAuthenticating } = globalState;
    30  return { isAuthenticating };
    31};
    32
    33export default connect(mapStateToProps)(LoginPage);

jsx

Conclusion
----------

Redux makes it easier for you to predict the app state and the flow of data. Redux dev-tools provides you with "time-travel" debugging that lets you dispatch any past actions.

There's still a lot of ground to cover in state management with Redux. You can start by looking at the Redux [docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts), which are very concise and beginner-friendly.

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

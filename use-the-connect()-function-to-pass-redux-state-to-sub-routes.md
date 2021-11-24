<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Use the connect() Function to Pass Redux State to Sub-routes
============================================================

### Gaurav Singhal

-   Oct 16, 2020
-   7 Min read
-   4,407 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   4,407 Views

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
-   <a href="#module-createreduxstatewithstore" class="menu-link">Create Redux State with Store</a>
-   <a href="#module-accessingreduxstatetothesubroutes" class="menu-link">Accessing Redux State to the Sub-routes</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React uses a component state that can be modified into the component and pass it to the child component as it gets connected to the parent. Still, this state is not sufficient to manage the state if components are not interrelated.

Redux is a library that allows a React app to create a global state object that can be used in any component across the app by consuming the state object. A Redux state is a standalone object managed globally in the React app. Thus, every route and sub-route should be able to access the global state piece, which is possible using the <span class="jsx-3120878690">`connect()`</span> method. This guide will demonstrate how any app sub-route can access the Redux state.

Create Redux State with Store
-----------------------------

Before any component, access the Redux state object. The first step is to create the store that will represent the combined state object used by the various components in the React app.

Two libraries need to get installed to configure the store and routes.

    1npm install react-redux
    2npm install react-router-dom

shell

Then, configure the router along with the route.

    1import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';

jsx

After importing the router, you need to configure various routes related to your components.

    1class AppRoutes extends React.Component {
    2    render() {
    3        return (
    4            <Switch>
    5                <Route exact path={'/'} component={Home} />
    6                <Route path={'/screen1'} component={Screen1} />
    7                <Route path={'/screen2'} component={Screen2} />
    8                <Route path={'/screen3'} component={Screen3} />
    9                <Route component={NotFoundPage} />
    10            </Switch>
    11        );
    12    }
    13}

jsx

Based on the routes, if any component wants to access the Redux state, the store needs to be configured. Below is the code to create the store.

    1// To use createStore function
    2import { createStore } from 'redux';
    3
    4const store = createStore(contactApp);

jsx

The store then is assigned to the <span class="jsx-3120878690">`<Provider>`</span>, which allows any component to access the global state object.

    1<Provider store={store}>
    2    <Switch>
    3        <Route exact path={'/'} component={Home} />
    4        <Route path={'/screen1'} component={Screen1} />
    5        <Route path={'/screen2'} component={Screen2} />
    6        <Route path={'/screen3'} component={Screen3} />
    7        <Route component={NotFoundPage} />
    8    </Switch>
    9</Provider>

jsx

The provider has one property called <span class="jsx-3120878690">`store`</span> that defines the store and makes Redux states available across the app. Your app is configured to access the Redux state object by implementing a router along with the Redux store. Now you can access any piece of state using the <span class="jsx-3120878690">`connect()`</span> function.

Accessing Redux State to the Sub-routes
---------------------------------------

After configuring the store with the provider you can access the state object, but it can be done directly; hence, the Redux's additional functionality gets used.

React Redux has one additional feature called <span class="jsx-3120878690">`connect()`</span> that allows you to connect your React component with the Redux store. The <span class="jsx-3120878690">`connect()`</span> function has four different props:

-   mapStateToProps
-   mapDispatchToProps
-   mergeProps
-   options

You can use the props <span class="jsx-3120878690">`mapStateToProps`</span> to extract the global state and use it into the existing component. For example, one form adds the contact and another component, which shows the contact list; hence, the form component is a parent, and the list component is a child component.

### App.js

    1render() {
    2    return (
    3      <>
    4        <h1>CONTACT APP</h1>
    5        <section>
    6          <section>
    7            <input
    8              type="text"
    9              name="message"
    10              placeholder="Name"
    11              value={this.state.inputs.message}
    12              onChange={this.onInput}
    13            />
    14            <button onClick={this.addContact}>ADD</button>
    15          </section>
    16        </section>
    17        <hr />
    18        <TodoList />
    19      </>
    20    );
    21}

js

One input control is used to add the contact name. Once the user submits the contact, the action method should look like this.

    1addContact = () => {
    2    // Dispatching the action
    3    this.props.addContact(this.state.inputs.message);
    4};

js

There is an action called <span class="jsx-3120878690">`addContact()`</span> that takes the contact name as a value and will pass it to the action invocation function, but <span class="jsx-3120878690">`mapDispatchToProps`</span> will be used in this example.

    1const mapDispatchToProps = dispatch => {
    2  return {
    3    addContact: contact => dispatch(addContact(contact))
    4  };
    5};

js

So far, you have created a straightforward form and invoked the Redux action, but you don’t have any component to show the added list of contacts.

For that, create one additional component, as demonstrated below.

### ContactList.jsx

    1import React, { Component } from "react";
    2import { connect } from "react-redux";
    3
    4class ContactList extends Component {
    5
    6  renderContacts = () => {
    7    return this.props.contacts.contacts.map((contact, i) => (
    8      <section key={i}>
    9        <div>
    10          <p className="flex">{contact}</p>
    11        </div>
    12      </section>
    13    ));
    14  };
    15
    16  render() {
    17    return (
    18      <>
    19        <section>
    20          <section>
    21            <h2>CONTACTS</h2>
    22            <hr />
    23            {this.props.contacts.contacts &&
    24            this.props.contacts.contacts.length > 0 ? (
    25              this.renderContacts()
    26            ) : (
    27              <span>Contacts not found</span>
    28            )}
    29          </section>
    30        </section>
    31      </>
    32    );
    33  }
    34}
    35
    36const mapStateToProps = state => ({ contacts: state.contacts })
    37
    38export default connect(mapStateToProps)(ContactList);

jsx

In the above component, there is a function created called <span class="jsx-3120878690">`renderContacts()`</span> that is using <span class="jsx-3120878690">`this.props.contact`</span>. This means the data that is coming from the global state object is consumed in the child component.

The below statement is crucial, and extracts the required state from the store.

    1const mapStateToProps = state => ({ contacts: state.contacts })

jsx

In the above statement, <span class="jsx-3120878690">`state.contacts`</span> contains a piece of the global state object and is assigned to the local props called <span class="jsx-3120878690">`contacts`</span>, so when you want to access the contacts from the global state, you can use <span class="jsx-3120878690">`this.props.contacts`</span> from the existing component.

The last step is to assign <span class="jsx-3120878690">`mapStateToProps`</span> to the <span class="jsx-3120878690">`connect()`</span> function so that the props will find the suitable state object from the state.

    1export default connect(mapStateToProps)(TodoList);

jsx

Conclusion
----------

The Redux library allows us to implement global state objects accessible from any component across the app; thus, the <span class="jsx-3120878690">`connect()`</span> function enables any sub-routes to in your app to extract the required state object from the store.

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Mirror JSON Object Changes in the DOM in jQuery
===============================================

### Gaurav Singhal

-   Oct 14, 2020
-   4 Min read
-   599 Views

-   Oct 14, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   599 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-storingjsoninstate" class="menu-link">Storing JSON in State</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Creating user interfaces for web apps in React is a breeze. React gives developers flexibility and promotes reusability for maximum reuse of common UI elements such as buttons, text inputs, navigation, and so on. When it comes to development in React, you need not worry about how DOM changes happen as React does all the heavy-duty optimization for you.

State in React is used to keep track of how data changes over time in an app, and props are data that can be passed between different components. In this guide, you will learn how to mirror changes to a JSON object in the DOM.

Storing JSON in State
---------------------

For the purposes of this guide, create a basic component with a user's info in state, as shown below. The user state is a JSON object that has name, age, and salary as properties.

    1state = {
    2  user: {
    3    name: "John Doe",
    4    age: 21,
    5    salary: 2000,
    6  },
    7};

js

In the render method, display the JSON object using the <span class="jsx-3120878690">`JSON.stringify()`</span> method. Below that, add three inputs, which will change the values of name, age, and salary respectively.

    1<div className="app">
    2  <pre>{JSON.stringify(user, null, 2)}</pre>
    3  <div>
    4    <input
    5      onChange={this.handleChange}
    6      name="name"
    7      placeholder="Name"
    8      value={user.name}
    9    />
    10    <input
    11      onChange={this.handleChange}
    12      name="age"
    13      placeholder="Age"
    14      value={user.age}
    15    />
    16
    17    <input
    18      onChange={this.handleChange}
    19      name="salary"
    20      placeholder="Salary"
    21      value={user.salary}
    22    />
    23  </div>
    24</div>

jsx

Now, write a <span class="jsx-3120878690">`handleChange`</span> method that will change the user state value based on the value from the inputs. Make sure that the name of the inputs match the property names in the user state.

    1handleChange(e) {
    2    this.setState({
    3      user: {
    4        ...this.state.user,
    5        [e.target.name]: e.target.value,
    6      },
    7    });
    8  }

jsx

Putting all the above snippets together, your final component should look as follows.

    1import React from "react";
    2
    3class App extends React.Component {
    4  constructor(props) {
    5    super(props);
    6    this.state = {
    7      user: {
    8        name: "John Doe",
    9        age: 21,
    10        salary: 2000,
    11      },
    12    };
    13
    14    this.handleChange = this.handleChange.bind(this);
    15  }
    16
    17  handleChange(e) {
    18    this.setState({
    19      user: {
    20        ...this.state.user,
    21        [e.target.name]: e.target.value,
    22      },
    23    });
    24  }
    25
    26  render() {
    27    const { user } = this.state;
    28    return (
    29      <div className="app">
    30        <pre>{JSON.stringify(user, null, 2)}</pre>
    31        <div>
    32          <input
    33            onChange={this.handleChange}
    34            name="name"
    35            placeholder="Name"
    36            value={user.name}
    37          />
    38          <input
    39            onChange={this.handleChange}
    40            name="age"
    41            placeholder="Age"
    42            value={user.age}
    43          />
    44
    45          <input
    46            onChange={this.handleChange}
    47            name="salary"
    48            placeholder="Salary"
    49            value={user.salary}
    50          />
    51        </div>
    52      </div>
    53    );
    54  }
    55}

jsx

If you check out the results, you will notice that as you change the value in the textbox, the user JSON object also changes instantly.

In React, data is bound to an input using the value prop of an input element, which makes the input controlled. A controlled input takes the value from the state and triggers an <span class="jsx-3120878690">`onChange`</span> event when the value in the input changes. The component entirely controls the value of the inputs, and the inputs do not have direct access to the component's state. Hence, it is called *one-way* data binding.

Conclusion
----------

If you are beginning with React, you must understand how one-way data binding works in React. It's ideal if you understand various strategies of passing data between components using props or context. Controlled components keep your UI in sync with the component state, making it predictable and easy to debug.

So that's it from this guide. To learn more about data binding in React, check out this [article](https://medium.com/madhash/two-way-binding-in-react-a-concise-what-why-and-how-guide-22e76d4551d5).

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

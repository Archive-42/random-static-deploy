<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Create a Simple React.js Component with Backed Node.js API
==========================================================

### Raphael Alampay

-   Oct 10, 2020
-   7 Min read
-   17,495 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   17,495 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Summary

57

-   <a href="#module-summary" class="menu-link">Summary</a>
-   <a href="#module-settinguptheserver" class="menu-link">Setting up the Server</a>
-   <a href="#module-runningtheserver" class="menu-link">Running the Server</a>
-   <a href="#module-creatingthereactjsfrontend" class="menu-link">Creating the React.js Frontend</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Summary
-------

Becoming a full-stack web developer can involve a steep learning curve since, at the very least, you'll have to learn how to code in three domains: 1) the persistence layer, 2) the application layer, which provides the logic, and 3) the view layer for rendering interfaces that the user can interact with. In most cases, each of these layers will be implemented in a different programming language, thus increasing the amount of material you'll have to learn. However, with Javascript, you can easily use a single programming language that encompasses all three layers making the learning experience a little bit more manageable.

In this guide, we'll take a look at how to build a simple backend server using Javascript Node.js as the application layer and React.js as the view layer that interacts with the backend to simulate the full stack experience.

Setting up the Server
---------------------

The server application you'll be creating will be a mock API endpoint that returns JSON data. Start off by creating a Javascript file called <span class="jsx-3120878690">`app.js`</span> with the following content:

    1var http = require('http');
    2
    3var hostname  = '127.0.0.1';
    4var port      = 3000;
    5
    6var app = http.createServer(function(req, res) {
    7            res.setHeader('Content-Type', 'application/json');
    8
    9            res.end(
    10              JSON.stringify({
    11                firstName: "John",
    12                lastName: "Doe"
    13              })
    14            );
    15          });
    16
    17app.listen(port, hostname);

javascript

Using plain Javascript and Node.js, you can easily create a server application server that acts as an endpoint. The line <span class="jsx-3120878690">`res.setHeader('Content-Type',                                       'application/json')`</span> forces the response to return data as JSON. The function <span class="jsx-3120878690">`res.end()`</span> accepts a string version of a JSON object that contains a <span class="jsx-3120878690">`firstName`</span> and a <span class="jsx-3120878690">`lastName`</span>, which will be the payload of this endpoint. The server application is started by running the line <span class="jsx-3120878690">`app.listen(port, hostname)`</span>, whose parameters are set to the localhost and port number 3000 of the host machine.

Running the Server
------------------

Issue the following command in your terminal to start running the server:

    1$ node app.js

bash

Using your browser, visit the URL <span class="jsx-3120878690">`http://localhost:3000`</span> and you should see the JSON object being returned with the following form:

    1{
    2  "firstName": "John",
    3  "lastName": "Doe"
    4}

json

Once you've verified that your mock endpoint is working, perform the same action, but this time programmatically using a React.js frontend component.

Creating the React.js Frontend
------------------------------

Start off by creating a React component called <span class="jsx-3120878690">`PersonComponent`</span> with the following code:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class PersonComponent extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      firstName: "",
    10      lastName: ""
    11    }
    12  }
    13
    14  render() {
    15    return (
    16      <div>
    17        <h1>{this.state.firstName} {this.state.LastName}</h1>
    18      </div>
    19    );
    20  }
    21}

javascript

This vanilla component will simply display the <span class="jsx-3120878690">`firstName`</span> and <span class="jsx-3120878690">`lastName`</span> state values. Initially, these values are set as an empty string.

Next, create a method that fetches data from your backend API, whose endpoint is <span class="jsx-3120878690">`http://localhost:3000`</span>. Create the following <span class="jsx-3120878690">`fetch`</span> method in your component:

    1fetch() {
    2  var context = this;
    3
    4  $.ajax({
    5    url: 'http://localhost:3000',
    6    method: 'GET',
    7    success: function(response) {
    8      context.setState({
    9        firstName: response.firstName,
    10        lastName: response.lastName
    11      });
    12    }
    13  });
    14}

javascript

You first create a reference <span class="jsx-3120878690">`context`</span> whose value is <span class="jsx-3120878690">`this`</span>, referring to the instance of your component. This will be used later on in the logic of the success function after the code has made a successful call to the API backend. <span class="jsx-3120878690">`context`</span> will then invoke <span class="jsx-3120878690">`setState`</span> and update the React.js component's state values coming from <span class="jsx-3120878690">`response`</span>, which in turn is the JSON object that was returned by the API.

The last thing to do is invoke <span class="jsx-3120878690">`fetch`</span> automatically when the component is first mounted. To do so, override the React.js component method <span class="jsx-3120878690">`componentDidMount()`</span> with the following logic:

    1componentDidMount() {
    2  this.fetch();
    3}

javascript

All that will do is call <span class="jsx-3120878690">`fetch`</span> once the component has been successfully mounted. In turn, <span class="jsx-3120878690">`fetch`</span> will interact with the API, update the state, and force a re-render of the view with the updated values, thus completing the cycle.

Overall Code
------------

The final code will look like the following:

### Server Application

    1var http = require('http');
    2
    3var hostname  = '127.0.0.1';
    4var port      = 3000;
    5
    6var app = http.createServer(function(req, res) {
    7            res.setHeader('Content-Type', 'application/json');
    8
    9            res.end(
    10              JSON.stringify({
    11                firstName: "John",
    12                lastName: "Doe"
    13              })
    14            );
    15          });
    16
    17app.listen(port, hostname);

javascript

### ReactJS Frontend

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class PersonComponent extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      firstName: "",
    10      lastName: ""
    11    }
    12  }
    13
    14  componentDidMount() {
    15    this.fetch();
    16  }
    17
    18  fetch() {
    19    var context = this;
    20
    21    $.ajax({
    22      url: 'http://localhost:3000',
    23      method: 'GET',
    24      success: function(response) {
    25        context.setState({
    26          firstName: response.firstName,
    27          lastName: response.lastName
    28        });
    29      }
    30    });
    31  }
    32
    33  render() {
    34    return (
    35      <div>
    36        <h1>{this.state.firstName} {this.state.LastName}</h1>
    37      </div>
    38    );
    39  }
    40}

javascript

Conclusion
----------

In this guide, you've seen how to use a single programming language to implement both the backend and frontend components of your app. This shortens the learning curve since you only have to focus on learning one programming language instead of a variety of languages that deal with different layers of your system. In most cases, this can prove to be a much more agile approach to building applications since you can devote your time to going deeper with Javascript and understanding its more advanced intricacies while still being able to contribute to all parts of your tech stack. Adding a persistence layer will be easier as well since you just have to look for an abstraction layer, also written in Javascript, that provides API calls for the underlying database.

For any questions or concerns, or if you simply want to chat about programming in general, hit me up [@happyalampay](https://twitter.com/happyalampay)!

57

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Client-side Checking with React.js JSX Events Using onBlur
==========================================================

### Raphael Alampay

-   Oct 5, 2020
-   6 Min read
-   6,802 Views

-   Oct 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   6,802 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-eventhandlers" class="menu-link">Event Handlers</a>
-   <a href="#module-bindingtoonblur" class="menu-link">Binding to `onBlur`</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

One common event in HTML is <span class="jsx-3120878690">`onBlur`</span>, wherein an input element loses focus as it is passed to another element. This is often done when the user hits tab or simply clicks the next input element. Capturing this event and applying logic to it allows other UI interactivity, such as validation of user input as focus is released. This way the user won't have to wait to submit the input before finding out what went wrong. This simple example will demonstrate how to hook in logic with the <span class="jsx-3120878690">`onBlur`</span> event in the context of a React.js component.

Setup
-----

Suppose you have a login form that accepts a username and password in the form of a React.js component.

    1import React from 'react';
    2
    3export default class LoginForm extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      username: "",
    9      password: "",
    10      messageUsername: "",
    11      messagePassword: ""
    12    }
    13  }
    14
    15  render() {
    16    return (
    17      <div>
    18        <label>
    19          Username:
    20        </label>
    21        <input
    22          type="text"
    23        />
    24        {this.state.messageUsername}
    25        <br/>
    26        <label>
    27          Password:
    28        </label>
    29        <input
    30          type="password"
    31        />
    32        {this.state.messagePassword}
    33        <hr/>
    34        <button>
    35          Login
    36        </button>
    37      </div>
    38    );
    39  }
    40}

javascript

The following state values are maintained in this component:

-   <span class="jsx-3120878690">`username`</span>: The variable to hold the username that the user would enter
-   <span class="jsx-3120878690">`password`</span>: The variable to hold the password that the user would enter
-   <span class="jsx-3120878690">`messageUsername`</span>: Message to be displayed after user loses focus from username input and some condition is passed to invoke a notification relating to the username.
-   <span class="jsx-3120878690">`messagePassword`</span>: Message to be displayed after user loses focus from password input and some condition is passed to invoke a notification relating to the password.

Event Handlers
--------------

You should have an event handler function that will be triggered in the event of an <span class="jsx-3120878690">`onBlur`</span>. To do this, first define the needed function:

    1handleOnBlurUsername(event) {
    2  var username        = event.target.value;
    3  var messageUsername = "";
    4
    5  if(!username) {
    6    messageUsername = "Username required"; 
    7  }
    8
    9  this.setState({
    10    username: username,
    11    messageUsername: messageUsername
    12  });
    13}

javascript

The logic of the function is pretty simple. First, it gets the <span class="jsx-3120878690">`username`</span> of the input by accessing it from <span class="jsx-3120878690">`event.target.value`</span>. Next, it sets a blank value for a temporary <span class="jsx-3120878690">`messageUsername`</span> variable. You apply a simple rule that checks if <span class="jsx-3120878690">`username`</span> has a value. If not, then fill in a value of <span class="jsx-3120878690">`"Username required"`</span> for <span class="jsx-3120878690">`messageUsername`</span>. The function ends by updating the state of <span class="jsx-3120878690">`username`</span> and <span class="jsx-3120878690">`messageUsername`</span> for this component.

Binding to \`onBlur\`
---------------------

Given your event handler, attach the function to the <span class="jsx-3120878690">`input`</span> element for the username like so:

    1<input
    2  type="text"
    3  onBlur={this.handleOnBlurUsername.bind(this)}
    4/>

jsx

Make sure that you call <span class="jsx-3120878690">`.bind(this)`</span> after the function in order to retain <span class="jsx-3120878690">`this`</span> to point to the instance of the component.

Now that the function is attached to the input, if a user leaves or releases focus from the input element for username and nothing was put in, <span class="jsx-3120878690">`messageUsername`</span> will be set with a message which in turn will appear below the input element, thus notifying the user that they need to input a username.

Overall Code
------------

The overall code should look like the following:

    1import React from 'react';
    2
    3export default class LoginForm extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      username: "",
    9      password: "",
    10      messageUsername: "",
    11      messagePassword: ""
    12    }
    13  }
    14
    15  handleOnBlurUsername(event) {
    16    var username        = event.target.value;
    17    var messageUsername = "";
    18
    19    if(!username) {
    20      messageUsername = "Username required"; 
    21    }
    22
    23    this.setState({
    24      username: username,
    25      messageUsername: messageUsername
    26    });
    27  }
    28
    29  render() {
    30    return (
    31      <div>
    32        <label>
    33          Username:
    34        </label>
    35        <input
    36          type="text"
    37          onBlur={this.handleOnBlurUsername.bind(this)}
    38        />
    39        {this.state.messageUsername}
    40        <br/>
    41        <label>
    42          Password:
    43        </label>
    44        <input
    45          type="password"
    46        />
    47        {this.state.messagePassword}
    48        <hr/>
    49        <button>
    50          Login
    51        </button>
    52      </div>
    53    );
    54  }
    55}
    56
    57Test it out by first clicking the username input element and then immediately pressing tab or clicking the password input element to release focus from the username input. The message should then appear after the focus is released if nothing was put in.

javascript

Conclusion
----------

There are many events in HTML that allow you to attach event handlers to add additional logic and create a more interactive experience with the user. <span class="jsx-3120878690">`onBlur`</span> triggers when focus is lost from the input element in context. In React.js, we bind event handlers by passing a method defined in the component to be called accordingly. <span class="jsx-3120878690">`.bind(this)`</span> is called in order to retain the value of <span class="jsx-3120878690">`this`</span> and expose component methods within the event handler function such as <span class="jsx-3120878690">`this.setState`</span>.

If you notice the code, only <span class="jsx-3120878690">`username`</span> handling was implemented. As additional practice, try the same approach discussed in this guide to attach an event handler to <span class="jsx-3120878690">`onBlur`</span> for the password section of the component. Try to add additional rules to change the message that appears below each input element if that rule is invoked.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

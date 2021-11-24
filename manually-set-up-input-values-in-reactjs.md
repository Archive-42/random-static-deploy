<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Manually Set Up Input Values in React.js
========================================

### Kimaru Thagana

-   Oct 17, 2020
-   9 Min read
-   1,665 Views

-   Oct 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   1,665 Views

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
-   <a href="#module-setupsampleapp" class="menu-link">Set Up Sample App</a>
-   <a href="#module-initialsetup" class="menu-link">Initial Setup</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

During design and development of frontend interfaces in React.js, you will come across instances where you require user data. Working with user data is an essential skill for any React developer. Some scenarios require you to manually set input data before sending it to an API or a database.

Consider a scenario where you, as a React developer, are designing a login form that requires a user to input their username and password. Before the user is logged into your application, your React app needs to display a captcha code that the user submits to verify that they aren't a robot. This guide will show you how to manually generate and set up this captcha input.

Set Up Sample App
-----------------

Open your terminal and run these commands to create a basic React app.

    1npx create-react-app react-manually_setInput
    2
    3cd react-manually_setInput
    4
    5npm start

bash

Include React Bootstrap in your basic React app.

    1npm install react-bootstrap bootstrap

bash

In your <span class="jsx-3120878690">`app.js`</span> file, include the stylesheet as well.

    1import 'bootstrap/dist/css/bootstrap.min.css';

js

Initial Setup
-------------

Copy and paste the sample code below to create a simple login form with a username, password, and captcha inputs that you will manually generate.

    1import React, {Component} from 'react';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import {Button, Row, Col, Card, Form} from 'react-bootstrap';
    4
    5
    6class App extends Component{
    7  constructor(props) {
    8    super(props);
    9    this.state = ({
    10        display: false,
    11        btnDisplay: false,
    12        username: "",
    13        password: "",
    14    });
    15
    16    this.handleUsername = this.handleUsername.bind(this);
    17    this.handlePassword = this.handlePassword.bind(this);
    18    this.handleSubmit = this.handleSubmit.bind(this);
    19
    20  }
    21  handleUsername(e){
    22      let username = e.target.value;
    23      this.setState({
    24          username: username
    25      })
    26  }
    27
    28  handlePassword(e){
    29      let password = e.target.value;
    30      this.setState({
    31          password: password
    32      })
    33  }
    34
    35  handleSubmit(e) {
    36      e.preventDefault();
    37      if (!this.state.username && !this.state.password)
    38          return;
    39      this.setState({
    40          display: true,
    41          btnDisplay:true
    42      })
    43  }
    44
    45  renderCaptcha(){
    46      return(
    47          <div>
    48              <Form.Group as={Row} controlId="formPlaintextEmail">
    49                  <Form.Label column sm="4">
    50                      Captcha
    51                  </Form.Label>
    52                  <Col>
    53                      <Form.Control type="text" placeholder="Enter Captcha"  />
    54                  </Col>
    55              </Form.Group>
    56
    57              <Button variant="primary" type="save" disabled={this.state.btnDisplay}>
    58                  Login
    59              </Button>
    60
    61          </div>
    62      )
    63  }
    64
    65  render() {
    66    return (
    67        <Row>
    68          <Col>
    69            <Card style={{ width: '20rem' }}>
    70                <Card.Body>
    71                    <Form>
    72                        <Form.Group >
    73                            <Form.Label>Username</Form.Label>
    74                            <Form.Control type="username" placeholder="Enter username"
    75                                          onChange={this.handleUsername}
    76                            />
    77                        </Form.Group>
    78
    79                        <Form.Group >
    80                            <Form.Label>Password</Form.Label>
    81                            <Form.Control type="password" placeholder="Password"
    82                                          onChange={this.handlePassword}
    83                            />
    84                        </Form.Group>
    85
    86                        <Button variant="primary" type="submit"
    87                                onClick={this.handleSubmit}
    88                        >
    89                            Submit
    90                        </Button>
    91
    92                        {this.state.display? this.renderCaptcha():""}
    93                    </Form>
    94
    95                </Card.Body>
    96            </Card>
    97          </Col>
    98        </Row>
    99    );
    100  }
    101}
    102
    103export default App;

js

In the sample code above, the captcha form will not be visible at first. The <span class="jsx-3120878690">`handleSubmit`</span> function verifies that there are no null values and proceeds to set the display to true. This then triggers your captcha form to be visible and forces the user to enter captcha values that will be manually generated and displayed. The code also ensures that the user can't log in without the captcha by disabling the login button.

Once that's done, the next step is to create captcha values at random, then display them to the user. Copy the sample code below.

    1import React, {Component} from 'react';
    2import 'bootstrap/dist/css/bootstrap.min.css';
    3import {Button, Row, Col, Card, Form} from 'react-bootstrap';
    4
    5
    6class App extends Component{
    7  constructor(props) {
    8    super(props);
    9    this.state = ({
    10        display: false,
    11        btnDisplay: false,
    12        username: "",
    13        password: "",
    14        captcha: "",
    15        userCaptcha: ""
    16    });
    17
    18    this.handleUsername = this.handleUsername.bind(this);
    19    this.handlePassword = this.handlePassword.bind(this);
    20    this.handleSubmit = this.handleSubmit.bind(this);
    21    this.handleCaptcha = this.handleCaptcha.bind(this);
    22
    23  }
    24  handleUsername(e){
    25      let username = e.target.value;
    26      this.setState({
    27          username: username
    28      })
    29  }
    30
    31  handlePassword(e){
    32      let password = e.target.value;
    33      this.setState({
    34          password: password
    35      })
    36  }
    37
    38  handleSubmit(e) {
    39      e.preventDefault();
    40      if (!this.state.username && !this.state.password)
    41          return;
    42      this.setState({
    43          display: true,
    44          btnDisplay:true
    45      });
    46
    47      let random = Math.random().toString(36).substring(7);
    48      this.setState({
    49          captcha: random
    50      })
    51
    52  }
    53    handleCaptcha(e){
    54      let userCaptcha = e.target.value
    55      if(!userCaptcha)
    56          return;
    57      this.setState({
    58          btnDisplay: false
    59      })
    60
    61    }
    62
    63
    64  renderCaptcha(){
    65      return(
    66          <div>
    67              <Form.Group as={Row} controlId="formPlaintextEmail">
    68                  <Form.Label column sm="4">
    69                      {this.state.captcha}
    70                  </Form.Label>
    71                  <Col>
    72                      <Form.Control type="text" placeholder="Enter Captcha" onChange={this.handleCaptcha} />
    73                  </Col>
    74              </Form.Group>
    75
    76              <Button variant="primary" type="save" disabled={this.state.btnDisplay} >
    77                  Login
    78              </Button>
    79
    80          </div>
    81      )
    82  }
    83
    84  render() {
    85    return (
    86        <Row>
    87          <Col>
    88            <Card style={{ width: '20rem' }}>
    89                <Card.Body>
    90                    <Form>
    91                        <Form.Group >
    92                            <Form.Label>Username</Form.Label>
    93                            <Form.Control type="username" placeholder="Enter username"
    94                                          onChange={this.handleUsername}
    95                            />
    96                        </Form.Group>
    97
    98                        <Form.Group >
    99                            <Form.Label>Password</Form.Label>
    100                            <Form.Control type="password" placeholder="Password"
    101                                          onChange={this.handlePassword}
    102                            />
    103                        </Form.Group>
    104
    105                        <Button variant="primary" type="submit"
    106                                onClick={this.handleSubmit}
    107                        >
    108                            Submit
    109                        </Button>
    110
    111                        {this.state.display? this.renderCaptcha():""}
    112                    </Form>
    113
    114                </Card.Body>
    115            </Card>
    116          </Col>
    117        </Row>
    118    );
    119  }
    120}
    121
    122export default App;

js

In the sample code above, you have declared <span class="jsx-3120878690">`handleSubmit`</span> and <span class="jsx-3120878690">`handleCaptcha`</span>. Inside the <span class="jsx-3120878690">`handleSubmit`</span> function, there's a random code generator for the captcha. This sets the <span class="jsx-3120878690">`captcha`</span> state and subsequently updates the captcha input label with the random code.

The <span class="jsx-3120878690">`handleCaptcha`</span> function checks if there're any values in the captcha text input and enables the login button.

So far, you have learned how to create and set input values manually. Let's finish up by ensuring the captcha values the user enters correspond to the values given.

Add a <span class="jsx-3120878690">`handleLogin`</span> function, which will verify the values generated, and the user input.

    1  handleLogin()
    2    {
    3      if(this.state.userCaptcha === this.state.captcha){
    4          alert("correct captcha")
    5      }
    6      else{
    7          alert("incorrect captcha!!")
    8      }
    9    }

js

Conclusion
----------

Manually setting input values in React.js gives you the ability to manipulate input forms and further design an app as you wish. This skill is mostly used by React and frontend developers who design and develop user interfaces.

Build on this guide by learning how to create form inputs on the official [React.js site](https://reactjs.org/docs/forms.html).

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

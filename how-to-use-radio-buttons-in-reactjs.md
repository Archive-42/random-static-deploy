<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Use Radio Buttons in ReactJS
===================================

### Gaurav Singhal

-   Nov 12, 2020
-   7 Min read
-   208,840 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   208,840 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Client-side Framework</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

289

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-usingaradiobuttongroup" class="menu-link">Using a Radio Button Group</a>
-   <a href="#module-usingaradiobuttongroupwithaform" class="menu-link">Using a Radio Button Group with a Form</a>
-   <a href="#module-radiobuttonsfromthirdpartylibraries" class="menu-link">Radio Buttons from Third-party Libraries</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

While working with a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as <span class="jsx-3120878690">`material-ui`</span>.

In this guide, you'll learn the basics of the radio button, how to use it in a group, and how to access the selected radio button value on change event.

Using a Radio Button Group
--------------------------

Radio buttons let a user choose a single option from a list of multiple radio buttons and submit its value.

For example, here's how to use radio buttons without a form:

    1render() {
    2    return (
    3      <div>
    4        <input type="radio" value="Male" name="gender" /> Male
    5        <input type="radio" value="Female" name="gender" /> Female
    6        <input type="radio" value="Other" name="gender" /> Other
    7      </div>
    8    );
    9  }

jsx

In this example, there are three radio buttons and one additional property called <span class="jsx-3120878690">`gender`</span>.

Because that name property puts all the radio buttons into a group, you can get the value once the user selects any of them, as explained below.

    1import React, { Component } from "react";
    2
    3class Demo1 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9    this.onChangeValue = this.onChangeValue.bind(this);
    10  }
    11
    12  onChangeValue(event) {
    13    console.log(event.target.value);
    14  }
    15
    16  render() {
    17    return (
    18      <div onChange={this.onChangeValue}>
    19        <input type="radio" value="Male" name="gender" /> Male
    20        <input type="radio" value="Female" name="gender" /> Female
    21        <input type="radio" value="Other" name="gender" /> Other
    22      </div>
    23    );
    24  }
    25}
    26
    27export default Demo1;

jsx

The function <span class="jsx-3120878690">`onChangeValue()`</span> is attached with <span class="jsx-3120878690">`div`</span> so as soon as the user selects any radio button, it will be reflected in the function.

Using a Radio Button Group with a Form
--------------------------------------

The previous example used radio buttons with a change action, but you can also use radio button groups with a form.

Set up a form with a radio button group like this.

    1  render() {
    2    return (
    3      <form onSubmit={this.formSubmit}>
    4        <div className="radio">
    5          <label>
    6            <input
    7              type="radio"
    8              value="Male"
    9              checked={this.state.selectedOption === "Male"}
    10              onChange={this.onValueChange}
    11            />
    12            Male
    13          </label>
    14        </div>
    15        <div className="radio">
    16          <label>
    17            <input
    18              type="radio"
    19              value="Female"
    20              checked={this.state.selectedOption === "Female"}
    21              onChange={this.onValueChange}
    22            />
    23            Female
    24          </label>
    25        </div>
    26        <div className="radio">
    27          <label>
    28            <input
    29              type="radio"
    30              value="Other"
    31              checked={this.state.selectedOption === "Other"}
    32              onChange={this.onValueChange}
    33            />
    34            Other
    35          </label>
    36        </div>
    37        <div>
    38          Selected option is : {this.state.selectedOption}
    39        </div>
    40        <button className="btn btn-default" type="submit">
    41          Submit
    42        </button>
    43      </form>
    44    );
    45  }

jsx

As you can see in the above example, in the form there are three different radio buttons along with the submit button, and each radio button is attached with one <span class="jsx-3120878690">`onChange`</span> function, called <span class="jsx-3120878690">`onValueChange()`</span>.

    1onValueChange(event) {
    2    this.setState({
    3      selectedOption: event.target.value
    4    });
    5  }

jsx

The <span class="jsx-3120878690">`onChangeValue()`</span> function gets called when the user selects the radio button from the group, and the value is updated into the component state.

When the user is done with the selection, they may want to submit the form. The submit method is called <span class="jsx-3120878690">`formSubmit()`</span>.

    1formSubmit(event) {
    2    event.preventDefault();
    3    console.log(this.state.selectedOption)
    4  }

jsx

Once the user submits the form, pass the state values to the API endpoint to post or update the data.

The complete example should look like this.

    1import React, { Component } from "react";
    2
    3class Demo2 extends Component {
    4  constructor() {
    5    super();
    6    this.state = {
    7      name: "React"
    8    };
    9    this.onValueChange = this.onValueChange.bind(this);
    10    this.formSubmit = this.formSubmit.bind(this);
    11  }
    12
    13  onValueChange(event) {
    14    this.setState({
    15      selectedOption: event.target.value
    16    });
    17  }
    18
    19  formSubmit(event) {
    20    event.preventDefault();
    21    console.log(this.state.selectedOption)
    22  }
    23
    24  render() {
    25    return (
    26      <form onSubmit={this.formSubmit}>
    27        <div className="radio">
    28          <label>
    29            <input
    30              type="radio"
    31              value="Male"
    32              checked={this.state.selectedOption === "Male"}
    33              onChange={this.onValueChange}
    34            />
    35            Male
    36          </label>
    37        </div>
    38        <div className="radio">
    39          <label>
    40            <input
    41              type="radio"
    42              value="Female"
    43              checked={this.state.selectedOption === "Female"}
    44              onChange={this.onValueChange}
    45            />
    46            Female
    47          </label>
    48        </div>
    49        <div className="radio">
    50          <label>
    51            <input
    52              type="radio"
    53              value="Other"
    54              checked={this.state.selectedOption === "Other"}
    55              onChange={this.onValueChange}
    56            />
    57            Other
    58          </label>
    59        </div>
    60        <div>
    61          Selected option is : {this.state.selectedOption}
    62        </div>
    63        <button className="btn btn-default" type="submit">
    64          Submit
    65        </button>
    66      </form>
    67    );
    68  }
    69}
    70
    71export default Demo2;

jsx

This complete example used a radio button group with the form. As soon as the user submits the form, the value will be used for the API endpoint communication. The <span class="jsx-3120878690">`checked`</span> property of the radio button is responsible to selected it once it finds the suitable value from the current state.

Radio Buttons from Third-party Libraries
----------------------------------------

You can use HTML input with the type as radio button. If you need to use different styling, make use of some third-party libraries that provide radio button elements:

-   material-ui
-   react-radio-buttons
-   react-radio-button
-   react-radio-button-group
-   react-radio-group

Conclusion
----------

This guide explained how to use radio buttons as a group, how to use them with a form element, and where to find radio buttons from various third-party sources.

That’s the power of managing forms with radio button groups. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

289

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

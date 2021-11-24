<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Form Submission in React.js
===========================

### Raphael Alampay

-   Oct 20, 2020
-   7 Min read
-   58,681 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   58,681 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

63

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-normalhtmlformsubmission" class="menu-link">Normal HTML Form Submission</a>
-   <a href="#module-programmaticformsubmission" class="menu-link">Programmatic Form Submission</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

HTML form submission works differently when implementing it within a React.js component. Normally, the browser would render the HTML and, depending on the <span class="jsx-3120878690">`action`</span>, automatically submit the data of the form based on each element's <span class="jsx-3120878690">`name`</span> attribute. Although this default behavior still works in React.js, it is highly advised to programmatically submit a form by supplying your own custom controls on how data is processed by a component.

Normal HTML Form Submission
---------------------------

A React.js component can render HTML back to the browser where all rules still apply. To illustrate this, create the following component:

    1import React from 'react';
    2
    3export default class FormSubmission extends React.Component {
    4  constructor(props) {
    5    super(props);
    6  }
    7
    8  render() {
    9    return  (
    10      <div>
    11        <form action="https://www.youtube.com/results" method="GET">
    12          <input type="text" name="search_query" />
    13          <button type="submit">
    14            Submit
    15          </button>
    16        </form>
    17      </div>
    18    );
    19  }
    20}

javascript

Running this code as-is will make a submission to Youtube's <https://www.youtube.com/results> endpoint that expects a <span class="jsx-3120878690">`search_query`</span> value parameter, which is already defined as the name of the input element:

    1<input type="text" name="search_query" />

html

All HTML rules still apply, and the user will be able to search for Youtube's videos. React.js simply renders HTML.

Programmatic Form Submission
----------------------------

The React.js way, however, allows you to be in full control of what data is being submitted. This also means that your code will not be reliant on HTML attributes but on whatever was programmed within your component's logic. To illustrate this, modify the component to look like the following:

    1import React from 'react';
    2
    3export default class FormSubmission extends React.Component {
    4  constructor(props) {
    5    super(props);
    6  }
    7
    8  render() {
    9    return  (
    10      <div>
    11        <input type="text" />
    12        <button>
    13          Submit
    14        </button>
    15      </div>
    16    );
    17  }
    18}

javascript

There are key differences that you can observe here.

1.  The <span class="jsx-3120878690">`name`</span> attribute for the input element was dropped
2.  The entire form is no longer enclosed in a <span class="jsx-3120878690">`form`</span> tag

The key idea here is to create event handlers that deal with changes or react to changes every time a user interacts with the form elements. Specifically, these would be changing text in the input element and clicking the submit button.

### Event Handling for Input

To create an event handler for the input element, first declare a state value called <span class="jsx-3120878690">`searchQuery`</span> to be maintained by the component. State values are initially set in the constructor:

    1constructor(props) {
    2  super(props);
    3
    4  this.state = {
    5    searchQuery: ""
    6  }
    7}

javascript

Next, create a method called <span class="jsx-3120878690">`handleInputChanged`</span>:

    1handleInputChanged(event) {
    2  this.setState({
    3    searchQuery: event.target.value
    4  });
    5}

javascript

Attach the event handler function to the <span class="jsx-3120878690">`onChange`</span> attribute of the input element:

    1<input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>

jsx

The value of the input is always bound to <span class="jsx-3120878690">`this.state.searchQuery`</span>. Every time the value in the state is updated, it will automatically reflect as the value of the input.

The <span class="jsx-3120878690">`bind(this)`</span> function is added in order to pass <span class="jsx-3120878690">`this`</span> and retain its value as the instance of the component within the <span class="jsx-3120878690">`handleInputChanged`</span> function. This will allow you to call <span class="jsx-3120878690">`setState`</span> which updates the state value of <span class="jsx-3120878690">`searchQuery`</span> to <span class="jsx-3120878690">`event.target.value`</span>, which is the current value of the input element when the call was made. This approach also applies to other input elements of HTML and not only for text inputs.

### Event Handling for Button

HTML buttons would normally have the <span class="jsx-3120878690">`onClick`</span> attribute set to them in order to supply logic whenever the button is clicked. Similar to <span class="jsx-3120878690">`input`</span>, first declare a function for button clicks:

    1handleButtonClicked() {
    2  var searchQuery = this.state.searchQuery;
    3
    4  window.location.href = "https://youtube.com/results?search_query" + searchQuery;
    5}

javascript

Since you'll be submitting the data to Youtube's endpoint, the logic of the function first takes the current value of <span class="jsx-3120878690">`searchQuery`</span> from the component's <span class="jsx-3120878690">`state`</span>. Any Javascript logic can be applied for form submission in this part, but for simplicity the code simply redirects to Youtube's endpoint with the <span class="jsx-3120878690">`search_query`</span> parameter as part of the URL. This simulates a <span class="jsx-3120878690">`GET`</span> request similar to the basic example earlier, only now you have more control of what values are being passed and how those values are extracted.

Finally, attach the event handler to the button's <span class="jsx-3120878690">`onClick`</span> attribute:

    1<button onClick={this.handleButtonClicked.bind(this)}>
    2  Submit
    3</button>

jsx

Overall Code
------------

The final code should look like the following:

    1import React from 'react';
    2
    3export default class FormSubmission extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      searchQuery: ""
    9    }
    10  }
    11
    12  handleInputChanged(event) {
    13    this.setState({
    14      searchQuery: event.target.value
    15    });
    16  }
    17
    18  handleButtonClicked() {
    19    var searchQuery = this.state.searchQuery;
    20
    21    window.location.href = "https://youtube.com/results?search_query" + searchQuery;
    22  }
    23
    24  render() {
    25    return  (
    26      <div>
    27        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
    28        <button onClick={this.handleButtonClicked.bind(this)}>
    29          Submit
    30        </button>
    31      </div>
    32    );
    33  }
    34}

javascript

Conclusion
----------

Form submission in React.js is quite different from usual form submissions in HTML. React.js gives you full control of the values you are passing to the next actionable item, allowing you to format more complex data structures. All values are maintained by the <span class="jsx-3120878690">`state`</span> object of a component and are propagated throughout the elements that are rendered, such as those of an input. Event handlers are also needed in order to tell the app how to *react* to certain changes, such as modifying an input or clicking a button.

Moving forward, you can try to apply the concept of programmatically defining how to handle each input element of your component. Given another type of input element aside from <span class="jsx-3120878690">`text`</span> (i.e. <span class="jsx-3120878690">`select`</span>, <span class="jsx-3120878690">`checkbox`</span>, <span class="jsx-3120878690">`radio`</span> and <span class="jsx-3120878690">`textarea`</span>), create another state variable for it and program a corresponding event handler function bound to that input element. The logic of the function should be able to reference the input element, get its current value, and update its corresponding state variable accordingly.

For any questions/concerns, or if you simply want to chat about programming in general, hit me up [@happyalampay](https://twitter.com/happyalampay)!

63

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

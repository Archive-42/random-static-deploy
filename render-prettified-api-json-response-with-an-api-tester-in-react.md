<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Render Prettified API JSON Response with an API Tester in React.js
==================================================================

### Raphael Alampay

-   Oct 1, 2020
-   7 Min read
-   139 Views

-   Oct 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   139 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-userinputofapiendpoint" class="menu-link">User Input of API Endpoint</a>
-   <a href="#module-fetchingdatafromanendpoint" class="menu-link">Fetching Data from an Endpoint</a>
-   <a href="#module-renderingtheprettifiedversion" class="menu-link">Rendering the Prettified Version</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

As a frontend developer, you'll often find yourself debugging values returned from an API in JSON format. In most cases, these return values are structured into complex nested objects of information. It's best to visualize the structure of the values being returned by an API directly in the webpage itself with proper indentation and formatting. In this guide, you will create a simple tool in React.js that allows you to do just that.

Setup
-----

First, create a React.js component called <span class="jsx-3120878690">`APITester`</span> that initially looks like the following:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class APITester extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      jsonData: {},
    10      apiEndpoint: ""
    11    }
    12  }
    13
    14  render() {
    15    return (
    16      <div>
    17        <pre>
    18          {this.state.jsonData}
    19        </pre>
    20        <hr/>
    21        <input
    22          type="text"
    23        />
    24        <button>
    25          Fetch
    26        </button>
    27      </div>
    28    );
    29  }
    30}

javascript

There are two main state variables to maintain:

1.  <span class="jsx-3120878690">`jsonData`</span>: Used to store the response of the endpoint
2.  <span class="jsx-3120878690">`apiEndpoint`</span>: The API endpoint that the user will specify

User Input of API Endpoint
--------------------------

Next, fill in the functionality where the user will input the API endpoint in the <span class="jsx-3120878690">`input`</span> element. Every change will update the <span class="jsx-3120878690">`apiEndpoint`</span> state value.

First, create an event handler to be triggered on every modification of the <span class="jsx-3120878690">`input`</span> element:

    1handleEndpointChanged(event) {
    2  this.setState({
    3    apiEndpoint: event.target.value;
    4  });
    5}

javascript

All this function is doing is updating the value of the state property <span class="jsx-3120878690">`apiEndpoint`</span> from <span class="jsx-3120878690">`event.target`</span>, which points to the input element this function refers to.

Attach the event handler to the <span class="jsx-3120878690">`input`</span> element's <span class="jsx-3120878690">`onChange`</span> attribute:

    1<input
    2  type="text"
    3  onChange={this.handleEndpointChanged.bind(this)}
    4/>

jsx

Fetching Data from an Endpoint
------------------------------

Next, create the event handler every time the button is clicked:

    1handleButtonClicked() {
    2  var context = this;
    3
    4  $.ajax({
    5    url: context.state.apiEndpoint,
    6    dataType: "json",
    7    method: "GET",
    8    success: function(response) {
    9      context.setState({
    10        jsonData: response
    11      });
    12    }
    13  });
    14}

javascript

This function fetches data from the endpoint as specified by the user, which in turn updates to the value <span class="jsx-3120878690">`apiEndpoint`</span>. It's expected that the return value will be of <span class="jsx-3120878690">`dataType: "json"`</span>. On a successful call, the state property <span class="jsx-3120878690">`jsonData`</span> will have to be updated to the value of <span class="jsx-3120878690">`response`</span>, which contains the actual return value of the API endpoint <span class="jsx-3120878690">`apiEndpoint`</span>. Notice also that the function uses the variable <span class="jsx-3120878690">`context`</span> to refer to <span class="jsx-3120878690">`this`</span>, which is an instance of the component itself. This is necessary so you can still refer to the <span class="jsx-3120878690">`setState()`</span> method from within the <span class="jsx-3120878690">`success`</span> function. This can also be seen when assigning the value of <span class="jsx-3120878690">`url`</span> in the ajax call to <span class="jsx-3120878690">`context.state.apiEndpoint`</span>.

Next, attach the event handler to the <span class="jsx-3120878690">`onClick`</span> attribute of the button:

    1<button
    2  onClick={this.handleButtonClicked.bind(this)}
    3>
    4  Fetch
    5</button>

jsx

Once the button is clicked, the function <span class="jsx-3120878690">`handleButtonClicked`</span> will fire and, together with the ajax call, set the value for <span class="jsx-3120878690">`jsonData`</span> to be displayed in a prettified format (that is, with proper indentation, quotes, and nesting of objects).

Rendering the Prettified Version
--------------------------------

On every trigger of <span class="jsx-3120878690">`setState`</span>, the <span class="jsx-3120878690">`render()`</span> function will be invoked, thus updating the expected interface of this component. To make sure that the JSON data displayed follows the proper format, there are two requirements:

1.  Make sure to format the JSON with appropriate escape characters for tabs and nested objects.
2.  Render the formatted JSON to a <span class="jsx-3120878690">`<pre>`</span> tag to retain its formatting on the web.

Your <span class="jsx-3120878690">`render()`</span> code should look something like this:

    1render() {
    2  return (
    3    <div>
    4      <pre>
    5        {JSON.stringify(this.state.jsonData, undefined 2)}
    6      </pre>
    7      <hr/>
    8      <input
    9        type="text"
    10        onChange={this.handleEndpointChanged.bind(this)}
    11      />
    12      <button
    13        onClick={this.handleButtonClicked.bind(this)}
    14      >
    15        Fetch
    16      </button>
    17    </div>
    18  );
    19}

jsx

You have to invoke the function <span class="jsx-3120878690">`JSON.stringify(someJsonData, undefined                                       2)`</span> to insert the necessary escape characters to format the object properly. Next, make sure that the resulting value after <span class="jsx-3120878690">`JSON.stringify`</span> is rendered between <span class="jsx-3120878690">`<pre>`</span> tags. This will allow the page to retain escape characters for proper formatting of the display, thus creating the prettifying effect.

Overall Code
------------

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class APITester extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      jsonData: {},
    10      apiEndpoint: ""
    11    }
    12  }
    13
    14  handleEndpointChanged(event) {
    15    this.setState({
    16      apiEndpoint: event.target.value
    17    });
    18  }
    19
    20  handleButtonClicked() {
    21    var context = this;
    22
    23    $.ajax({
    24      url: context.state.apiEndpoint,
    25      dataType: "json",
    26      method: "GET",
    27      success: function(response) {
    28        context.setState({
    29          jsonData: response
    30        });
    31      }
    32    });
    33  }
    34
    35  render() {
    36    return (
    37      <div>
    38        <pre>
    39          {JSON.stringify(this.state.jsonData, undefined, 2)}
    40        </pre>
    41        <hr/>
    42        <input
    43          type="text"
    44          onChange={this.handleEndpointChanged.bind(this)}
    45        />
    46        <button
    47          onClick={this.handleButtonClicked.bind(this)}
    48        >
    49          Fetch
    50        </button>
    51      </div>
    52    );
    53  }
    54}

javascript

Try it out by entering <https://api.coindesk.com/v1/bpi/currentprice.json> into the <span class="jsx-3120878690">`input`</span> element and hitting Fetch. It should return data relating to Bitcoin prices and render it with proper formatting on the webpage.

Conclusion
----------

In this guide, you created a component that accepts a URL endpoint from the user representing an API that is expected to return JSON data. To examine the return value, the JSON response has to be first cleaned as a string with appropriate formatting using the <span class="jsx-3120878690">`JSON.stringify()`</span> function. When rendering to HTML, in order to retain the escape characters from the stringified JSON, the value has to be within <span class="jsx-3120878690">`<pre>`</span> tags. This way, the rendered data is much more presentable to the user for further analysis of the response.

Try it yourself, and try to extend the component to include the following:

1.  Differentiation between a GET and a POST
2.  Additional parameters with the request (also provided by the user)
3.  Error handling (in case the API endpoint does not return data type JSON)

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

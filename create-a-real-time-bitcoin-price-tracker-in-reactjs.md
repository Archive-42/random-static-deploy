<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Create a Real-time Bitcoin Price Tracker in React
=================================================

### Raphael Alampay

-   Sep 25, 2020
-   7 Min read
-   3,749 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   3,749 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

21

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-fetchingfromanapi" class="menu-link">Fetching from an API</a>
-   <a href="#module-callingfetchthefirsttime" class="menu-link">Calling fetch() the First Time</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Suppose you want to create a standalone React.js component that interacts with an API that you can plug into your own app as a subcomponent. In this guide, we will take a look at building a Bitcoin (BTC) price tracker that is fully automated (no interaction with a user) and updates the price dynamically every three seconds from Coindesk's public API. We will take a look at the requirements of calling an API, recursive calls after a time interval, and binding data to a component's state for rendering.

Setup
-----

First, create a React.js component called <span class="jsx-3120878690">`BTCTracker`</span> that makes use of the jQuery library (for API calls later on). The initial code is as follows:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class BTCTracker extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      price: 0.00,
    10      lastFetch: ""
    11    }
    12  }
    13
    14  render() {
    15    return (
    16      <div>
    17        <h1>
    18          BTC Price: {this.state.price}
    19          <small>
    20            {this.state.lastFetch}
    21          </small>
    22        </h1>
    23      </div>
    24    );
    25  }
    26}

javascript

This component maintains two state variables, namely:

1.  <span class="jsx-3120878690">`price`</span>: The current price of Bitcoin against the US Dollar
2.  <span class="jsx-3120878690">`lastFetch`</span>: The timestamp when it was last fetched from the API

These values are rendered in the component's UI and should change with every call of <span class="jsx-3120878690">`setState()`</span>.

Fetching from an API
--------------------

Next, create a function to fetch data from a third-party API. In this case, you'll be using [Coindesk's public API](https://api.coindesk.com/v1/bpi/currentprice.json), which returns data in the following format:

    1{
    2  time: {
    3    updated: "Sep 16, 2020 18:43:00 UTC",
    4    updatedISO: "2020-09-16T18:43:00+00:00",
    5    updateduk: "Sep 16, 2020 at 19:43 BST"
    6  },
    7  disclaimer: "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    8  chartName: "Bitcoin",
    9  bpi: {
    10    USD: {
    11      code: "USD",
    12      symbol: "&#36;",
    13      rate: "11,091.2212",
    14      description: "United States Dollar",
    15      rate_float: 11091.2212
    16    },
    17    GBP: {
    18      code: "GBP",
    19      symbol: "&pound;",
    20      rate: "8,436.3156",
    21      description: "British Pound Sterling",
    22      rate_float: 8436.3156
    23    },
    24    EUR: {
    25      code: "EUR",
    26      symbol: "&euro;",
    27      rate: "9,395.0075",
    28      description: "Euro",
    29      rate_float: 9395.0075
    30    }
    31  }
    32}

json

Assuming that the returned value can be stored in a variable called <span class="jsx-3120878690">`response`</span>, you should set your state values to the following based on the response's structure:

1.  <span class="jsx-3120878690">`price`</span> to <span class="jsx-3120878690">`response.bpi.USD.rate`</span> to get the USD rate
2.  <span class="jsx-3120878690">`lastFetch`</span> to <span class="jsx-3120878690">`response.time.updated`</span> to get the last time this data was updated

Create a function called <span class="jsx-3120878690">`fetch()`</span> that contains the following:

    1fetch() {
    2  var context = this;
    3
    4  window.setTimeout(function() {
    5    $.ajax({
    6      url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    7      dataType: "json",
    8      method: "GET",
    9      success: function(response) {
    10        context.setState({
    11          price: response.bpi.USD.rate,
    12          lastFetch: response.time.updated
    13        });
    14      }
    15    });
    16  }, 3000);
    17}

javascript

The first thing you notice is that a <span class="jsx-3120878690">`context`</span> variable is used to refer to <span class="jsx-3120878690">`this`</span>. This is so your code can still refer to the component within the anonymous functions called in <span class="jsx-3120878690">`setTimeout`</span> or the one assigned to <span class="jsx-3120878690">`success`</span>. Remember that you still have to invoke <span class="jsx-3120878690">`setState`</span>, which is a function of a React component to update the state values.

Second, <span class="jsx-3120878690">`window.setTimeout(f, s)`</span> is called where <span class="jsx-3120878690">`f`</span> is a function and <span class="jsx-3120878690">`s`</span> is the number of milliseconds until the function fires. In this case, <span class="jsx-3120878690">`f`</span> is set to be a function that invokes the jQuery ajax call to the API and <span class="jsx-3120878690">`s`</span> is set to 3000 (approximately three seconds).

Third, the function passed to <span class="jsx-3120878690">`success`</span> will accept <span class="jsx-3120878690">`response`</span> in the form of JSON, which is the JSON data returned by the API. It is assumed to be JSON due to the <span class="jsx-3120878690">`dataType: "json"`</span> that you pass to jQuery's <span class="jsx-3120878690">`ajax()`</span> call.

The final thing the <span class="jsx-3120878690">`success`</span> function will do is invoke <span class="jsx-3120878690">`fetch()`</span> again as called by <span class="jsx-3120878690">`context`</span>, which is a reference to the instance of the component. As a result, this rescursive strategy will call <span class="jsx-3120878690">`fetch()`</span> every three seconds, thus automating the call to the external API.

Calling fetch() the First Time
------------------------------

Since the user won't invoke <span class="jsx-3120878690">`fetch()`</span>, the method has to be called once <span class="jsx-3120878690">`BTCTracker`</span> is loaded. You can use the lifecycle method <span class="jsx-3120878690">`componentDidMount()`</span> to call any logic once a React.js component is loaded. In this case, <span class="jsx-3120878690">`BTCTracker`</span>'s <span class="jsx-3120878690">`componentDidMount()`</span> will simply call <span class="jsx-3120878690">`fetch()`</span>:

    1componentDidMount() {
    2  this.fetch();
    3}

javascript

Overall Code
------------

The final code of the component looks like the following:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class BTCTracker extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      price: 0.00,
    10      lastFetch: ""
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
    21    window.setTimeout(function() {
    22      $.ajax({
    23        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    24        dataType: "json",
    25        method: "GET",
    26        success: function(response) {
    27          context.setState({
    28            price: response.bpi.USD.rate,
    29            lastFetch: response.time.updated
    30          });
    31        }
    32      });
    33    }, 3000);
    34  }
    35
    36  render() {
    37    return (
    38      <div>
    39        <h1>
    40          BTC Price: {this.state.price}
    41          <small>
    42            {this.state.lastFetch}
    43          </small>
    44        </h1>
    45      </div>
    46    );
    47  }
    48}

javascript

Try mounting the component on your page and start tracking Bitcoin's rate!

    1ReactDOM.render(
    2  <BTCTracker />,
    3  document.getElementById("react-root")
    4);

javascript

The price should refresh every three seconds.

Conclusion
----------

There might be cases where you need a React.js component to perform autonomously without any user interaction. This allows information to be dynamically rendered, allowing a richer user experience, and provides more options for information communicated back to the user. This is done through recursive calls within small time intervals. Since data is often taken from a third-party API, this approach allows the creation of more information-driven, self-serving components for your interface, such as dashboards with aggregated information from various sources.

As an exercise, try to integrate the other attributes returned by Coindesk's API, such as the rate of Bitcoin against the British Pound and the Euro.

21

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

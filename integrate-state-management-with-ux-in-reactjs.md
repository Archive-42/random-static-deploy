<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Integrate State Management with UX in React.js
==============================================

### Raphael Alampay

-   Oct 21, 2020
-   6 Min read
-   340 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   340 Views

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
-   <a href="#module-context" class="menu-link">Context</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-creatingtheloadingui" class="menu-link">Creating the Loading UI</a>
-   <a href="#module-fetchingdata" class="menu-link">Fetching Data</a>
-   <a href="#module-callingfetchwhencomponentisloaded" class="menu-link">Calling Fetch When Component is Loaded</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

UX is very important when communicating to let the user know what's happening in your app. A common use case for this would be showing the user a loading interface before the actual interface is shown. This is usually done to allow some long-running background process to finish its work before updating state values of the main component. In this guide, we'll take a look at a simple approach to perform this effect.

Context
-------

First, you have to simulate the long-running process in the form of fetching data from some third party API. For this, use [this endpoint](https://github.com/shevabam/breaking-bad-quotes), which randomly spits out a quote from the hit TV series Breaking Bad (for more API endpoints in this context, please see <https://github.com/shevabam/breaking-bad-quotes>). The content of the response will be a JSON array with the following structure:

    1[
    2  {
    3    "quote": "I am not in danger, Skyler. I AM the danger!",
    4    "author": "Walter White"
    5  }
    6]

json

Setup
-----

Create a React.js component that looks like the following:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class BBQuoteGenerator extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      quote: false
    10    }
    11  }
    12
    13  render() {
    14    return (
    15      <div>
    16        <h1>
    17          Breaking Bad Quote of the Day
    18        </h1>
    19      </div>
    20    );
    21  }
    22}

javascript

The <span class="jsx-3120878690">`quotes`</span> state attribute will hold the current quote to be rendered in the app. Notice that even if you're expecting an array of values similar to the example shown in the previous section, its initial value is <span class="jsx-3120878690">`false`</span>. The logic behind this is that you would first check that the value is not <span class="jsx-3120878690">`false`</span> to display the actual content, indicating that data has indeed been loaded.

Creating the Loading UI
-----------------------

You can now extend the rendering part of the component by creating the following utility method that returns UI elements that display the quote if <span class="jsx-3120878690">`state.quote`</span> is not false. Otherwise, display some loading message to the user indicating that the app is still fetching data.

    1renderQuote() {
    2  if(this.state.quote) {
    3    return (
    4      <div>
    5        <h2>
    6          <i>
    7            "{this.state.quote.quote}"
    8          </i>
    9        </h2>
    10        <h3>
    11          - {this.state.quote.author}
    12        </h3>
    13      </div>
    14    );
    15  } else {
    16    return (
    17      <div>
    18        Loading...
    19      </div>
    20    );
    21  }
    22}

javascript

The function simply returns a single <span class="jsx-3120878690">`jsx`</span> element containing the interface. The <span class="jsx-3120878690">`else`</span> portion indicates a <span class="jsx-3120878690">`false`</span> value for <span class="jsx-3120878690">`quote`</span> and thus renders some loading message. You can easily substitute this with your own loading splash message as long as the <span class="jsx-3120878690">`return`</span> statement returns a single element. For now, it's just simple text that is being returned to indicate loading.

You can then invoke the function within the main <span class="jsx-3120878690">`render`</span> call:

    1render() {
    2  return (
    3    <div>
    4      <h1>
    5        Breaking Bad Quote of the Day
    6      </h1>
    7      {this.renderQuote()}
    8    </div>
    9  );
    10}

javascript

Fetching Data
-------------

In order to have <span class="jsx-3120878690">`quote`</span> be not <span class="jsx-3120878690">`false`</span>, that is, populate it with actual data, you'd have to create a function that does two things:

1.  Fetches the data from an API
2.  Updates the <span class="jsx-3120878690">`state.quote`</span> value of the component to force a re-render of the UI

Create a function called <span class="jsx-3120878690">`fetch()`</span> that does the following:

    1fetch() {
    2  var context = this;
    3
    4  $.ajax({
    5    url: "https://github.com/shevabam/breaking-bad-quotes",
    6    dataType: "json",
    7    method: "GET",
    8    success: function(response) {
    9      var q = response[0];
    10
    11      context.setState({
    12        quote: q
    13      });
    14    }
    15  });
    16}

javascript

The <span class="jsx-3120878690">`context`</span> variable is needed to create a reference to <span class="jsx-3120878690">`this`</span> and represent the instance of the component. This will allow the call of <span class="jsx-3120878690">`setState`</span> to be invoked within the <span class="jsx-3120878690">`success`</span> callback of the AJAX call. Since the expected response is an array, you have to get the first element (<span class="jsx-3120878690">`0`</span>) instead of storing the entire response in <span class="jsx-3120878690">`quote`</span>. Setting the data to <span class="jsx-3120878690">`quote`</span> will now make the data not <span class="jsx-3120878690">`false`</span> and render the actual UI it was intended to display.

Calling Fetch When Component is Loaded
--------------------------------------

Now you have make sure that <span class="jsx-3120878690">`fetch`</span> is triggered as soon as the component is loaded for the first time. To do this, override the <span class="jsx-3120878690">`componentDidMount`</span> function of the component and call <span class="jsx-3120878690">`fetch`</span> within it.

    1componentDidMount() {
    2  this.fetch();
    3}

javascript

Overall Code
------------

The final code looks like the following:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class BBQuoteGenerator extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      quote: false
    10    }
    11  }
    12
    13  componentDidMount() {
    14    this.fetch();
    15  }
    16
    17  fetch() {
    18    var context = this;
    19
    20    $.ajax({
    21      url: "https://github.com/shevabam/breaking-bad-quotes",
    22      dataType: "json",
    23      method: "GET",
    24      success: function(response) {
    25        var q = response[0];
    26
    27        context.setState({
    28          quote: q
    29        });
    30      }
    31    });
    32  }
    33
    34  renderQuote() {
    35    if(this.state.quote) {
    36      return (
    37        <div>
    38          <h2>
    39            <i>
    40              "{this.state.quote.quote}"
    41            </i>
    42          </h2>
    43          <h3>
    44            - {this.state.quote.author}
    45          </h3>
    46        </div>
    47      );
    48    } else {
    49      return (
    50        <div>
    51          Loading...
    52        </div>
    53      );
    54    }
    55  }
    56
    57  render() {
    58    return (
    59      <div>
    60        <h1>
    61          Breaking Bad Quote of the Day
    62        </h1>
    63        {this.renderQuote()}
    64      </div>
    65    );
    66  }
    67}

javascript

Conclusion
----------

Displaying loading messages initially to the user is a good UX approach to indicate that something is still happening behind the scenes. Using React.js's state management mechanism, you can use the value of your data to determine when loading is displayed or when the actual UI should be displayed. This can be wrapped in a utility function within the component and called in the main render function. As seen in this example, the main render UI did not have to have any logic in it since the UI switches from loading to display depending on the state value <span class="jsx-3120878690">`quote`</span> as implemented in the logic of <span class="jsx-3120878690">`renderQuote`</span>.

For any questions/concerns, or if you simply want to chat about programming in general, hit me up [@happyalampay](https://twitter.com/happyalampay)!

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Invoking External Component Methods in React.js
===============================================

### Raphael Alampay

-   Oct 10, 2020
-   5 Min read
-   5,993 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   5,993 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-invokingtheexternalcomponentsmethod" class="menu-link">Invoking the External Component's Method</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React.js components can get complex as your app grows. In most cases, you will have nested components (components that are invoked by other components). These nested components may contain actions that force a state change in the parent component by invoking a method in the parent component. In this guide, we'll take a look at how to use <span class="jsx-3120878690">`props`</span> as a means of passing as well as invoking methods of external components.

Setup
-----

Suppose you have two components, a <span class="jsx-3120878690">`BannerMessage`</span> and <span class="jsx-3120878690">`Editor`</span>. The <span class="jsx-3120878690">`BannerMessage`</span> is a component that maintains a single state variable called <span class="jsx-3120878690">`message`</span>:

    1import React from 'react';
    2import Editor from './Editor';
    3
    4export default class BannerMessage extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      message: ""
    10    }
    11  }
    12
    13  updateMessage(message) {
    14    this.setState({
    15      message: message
    16    });
    17  }
    18
    19  render() {
    20    return (
    21      <div>
    22        <h1>
    23          {this.state.message}
    24        </h1>
    25        <hr/>
    26        <Editor
    27          updateMessage={this.updateMessage.bind(this)}
    28        />
    29      </div>
    30    );
    31  }
    32}

javascript

Notice that it contains a method called <span class="jsx-3120878690">`updateMessage`</span> that accepts a <span class="jsx-3120878690">`message`</span> value that is updated to the state <span class="jsx-3120878690">`message`</span> of the component. In the <span class="jsx-3120878690">`render()`</span> method, <span class="jsx-3120878690">`Editor`</span> is mounted together with the attribute <span class="jsx-3120878690">`updateMessage`</span>, whose value is <span class="jsx-3120878690">`this.updateMessage.bind(this)`</span>. Calling <span class="jsx-3120878690">`.bind(this)`</span> will allow the retention of <span class="jsx-3120878690">`this`</span> pointing to the instance of the <span class="jsx-3120878690">`BannerMessage`</span> component, even if it is passed to <span class="jsx-3120878690">`Editor`</span>.

<span class="jsx-3120878690">`Editor`</span>, on the other hand, looks like the following:

    1import React from 'react';
    2
    3export default class Editor extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: ""
    9    }
    10  }
    11
    12  handleMessageChanged(event) {
    13    this.setState({
    14      message: event.target.value
    15    });
    16  }
    17
    18  render() {
    19    return (
    20      <div>
    21        <input type="text" value={this.state.message} onChange={this.handleMessageChanged.bind(this)} />
    22        <button>
    23          Save Message
    24        </button>
    25      </div>
    26    );
    27  }
    28}

javascript

The component maintains its own state <span class="jsx-3120878690">`message`</span> that is updated every time the user modifies the value of its input element.

Invoking the External Component's Method
----------------------------------------

In <span class="jsx-3120878690">`Editor`</span>, create a method that will serve as an event handler for the button when it is clicked:

    1handleButtonClicked() {
    2  this.props.updateMessage(this.state.message);
    3}

javascript

Notice that the code can invoke the <span class="jsx-3120878690">`props`</span> of the component, which in turn will call <span class="jsx-3120878690">`updateMessage`</span> and pass the value of <span class="jsx-3120878690">`Editor`</span>'s <span class="jsx-3120878690">`message`</span> within its state. The call to <span class="jsx-3120878690">`updateMessage`</span> in this context is the one passed by <span class="jsx-3120878690">`BannerMessage`</span>:

    1<Editor
    2  updateMessage={this.updateMessage.bind(this)}
    3/>

jsx

Attach the event handler to the button's <span class="jsx-3120878690">`onClick`</span> event within <span class="jsx-3120878690">`Editor`</span>:

    1<button onClick={this.handleButtonClicked.bind(this)}>
    2  Save Message
    3</button>

jsx

When the button is clicked, it will call <span class="jsx-3120878690">`updateMessage`</span> from the component's props, which is a reference to the <span class="jsx-3120878690">`updateMessage`</span> of the parent that passed it (<span class="jsx-3120878690">`BannerMessage`</span>).

Overall Code
------------

The final code should look like the following:

### BannerMessage

    1import React from 'react';
    2import Editor from './Editor';
    3
    4export default class BannerMessage extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      message: ""
    10    }
    11  }
    12
    13  updateMessage(message) {
    14    this.setState({
    15      message: message
    16    });
    17  }
    18
    19  render() {
    20    return (
    21      <div>
    22        <h1>
    23          {this.state.message}
    24        </h1>
    25        <hr/>
    26        <Editor
    27          updateMessage={this.updateMessage.bind(this)}
    28        />
    29      </div>
    30    );
    31  }
    32}

javascript

### Editor

    1import React from 'react';
    2
    3export default class Editor extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: ""
    9    }
    10  }
    11
    12  handleMessageChanged(event) {
    13    this.setState({
    14      message: event.target.value
    15    });
    16  }
    17
    18  handleButtonClicked() {
    19    this.props.updateMessage(this.state.message);
    20  }
    21
    22  render() {
    23    return (
    24      <div>
    25        <input type="text" value={this.state.message} onChange={this.handleMessageChanged.bind(this)} />
    26        <button onClick={this.handleButtonClicked.bind(this)}>
    27          Save Message
    28        </button>
    29      </div>
    30    );
    31  }
    32}

javascript

Conclusion
----------

<span class="jsx-3120878690">`props`</span> is a special member of a React.js component that holds values that are passed upon calling a component from another component. The <span class="jsx-3120878690">`props`</span>'s keys are declared like HTML attributes, which eventually become references accessible within the component that was called. One such application is passing a reference to the method of the calling component in order to be invoked by the child component, thus triggering the parent's logic. This will allow component-to-component communication while maintaining <span class="jsx-3120878690">`state`</span> independence for each component. For practice, instead of the <span class="jsx-3120878690">`onClick`</span> event, try to see if you can hook the calling of <span class="jsx-3120878690">`BannerMessage`</span>'s <span class="jsx-3120878690">`updateMessage`</span> from <span class="jsx-3120878690">`Editor`</span>'s <span class="jsx-3120878690">`onChange`</span> event handler. This way, the user doesn't have to click the button in order for <span class="jsx-3120878690">`Editor`</span> to communicate with <span class="jsx-3120878690">`BannerMessage`</span>.

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

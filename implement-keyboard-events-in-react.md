<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Implement Keyboard Events in React
==================================

### Desmond Nyamador

-   Oct 19, 2020
-   3 Min read
-   36,143 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">3 Min</span> read
-   36,143 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

29

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-eventsinjavascript" class="menu-link">Events In JavaScript</a>
-   <a href="#module-eventsinreact" class="menu-link">Events In React</a>
-   <a href="#module-keyboardeventsinreact" class="menu-link">Keyboard Events In React</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Events such as a click of a mouse button, scrolling, a key press, or a drag of a component—to mention but a few—help developers capture specific actions from users and show feedback or take action based on the action of the user. In this guide, you'll focus solely on keyboard events and how to handle them in React.

Events In JavaScript
--------------------

In JavaScript, events are simply an indication that a user has performed a particular action. You can listen for **keydown** and **keyup** events, which indicates when a keyboard key is pressed or released.

Here's a typical example block of code for implementing keyboard events with JavaScript. The following codeblock logs a statement that shows the particular key pressed by the user.

    1document.addEventListener('keydown', function(event){
    2     console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    3)

jsx

Notice that each key has a unique identifier available in the <span class="jsx-3120878690">`KeyboardEvent`</span> passed to the callback function. The codeblock above shows the following in the console when a key is pressed.

    1# Key: Alt has been pressed
    2# Key: ArrowDown has been pressed

bash

Events In React
---------------

Handling events in React are a bit different from events in HTML. For example, a click handler in HTML will be done as follows:

    1<button onclick="launchApp()">
    2        Click Me
    3</button>

jsx

In React this would be done as shown below:

    1<button onClick={launchApp}>
    2        Click Me
    3</button>

jsx

What are the key differences here? 🤔

1.  Events in React are named in camelCase .
2.  Rather than passing a string representation of the function, in React you pass the function itself as the handler inside curly braces due to JSX.

Keyboard Events In React
------------------------

With your generic knowledge of events in React so far, you can now implement keyboard events in React. As mentioned earlier, there are two keyboard events that can be used, the *keyup* and *keydown* events.

Now you'll build a simple quiz app that marks a user based on a yes or no answer.

First, set up create-react-app or visit [https://react.new](https://react.new/) to get a fully configured React environment via codesandbox.

    1import React from 'react';
    2
    3function Quiz(){
    4 handleAnswerChange(event){
    5     if(event.key === 'y'){
    6         alert('The sky is your starting point!')
    7 }
    8     else if (event.key === 'n') {
    9         alert('The sky is your limit👀')
    10    }
    11}
    12
    13   return (
    14        <div>
    15               <p> Are You Smart?</p>
    16                   <input type="text" value={answer} onKeyPress={handleAnswerChange}/>
    17               <small> Press Y for Yes or N for No</small>
    18   </div>
    19)
    20}

jsx

The code block above implements a simple function called <span class="jsx-3120878690">`handleAnswerChange`</span>, which checks whether the key pressed is **y** for yes or **n** for no. The value <span class="jsx-3120878690">`y`</span> or <span class="jsx-3120878690">`n`</span> is obtained from the keypress event listener on the input element.

Conclusion
----------

Whew! That's it for this guide. You've compared and contrasted events in React and HTML and gained understanding of how to implement keyboard events in React. To learn more, read the official documentation on [keyboard events](https://reactjs.org/docs/events.html#keyboard-events) and [handling events in React](https://reactjs.org/docs/handling-events.html).

Feel free to get in touch on Twitter as well: [@DesmondNyamador](https://twitter.com/DesmondNyamador)

29

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

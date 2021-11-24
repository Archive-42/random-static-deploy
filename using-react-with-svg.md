<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Using React with SVG
====================

### Desmond Nyamador

-   Oct 31, 2020
-   4 Min read
-   3,408 Views

-   Oct 31, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   3,408 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

12

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-understandingsvgsyntax" class="menu-link">Understanding SVG syntax</a>
-   <a href="#module-drawingshapes" class="menu-link">Drawing Shapes</a>
-   <a href="#module-setupandapp" class="menu-link">Set Up and App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Scalable Vector Graphics (SVG) is an XML-like syntax used to display vector graphics or images in a browser. Vector graphics produced by SVG can be scaled or zoomed to the very maximum without being rasterized or losing quality. The most interesting aspect is that SVG is supported by all major browsers. In this guide, you'll learn how to draw graphics (specifically the Mastercard Logo) and shapes with SVG and how to add SVG graphics to your React app.

Understanding SVG syntax
------------------------

If you're familiar with HTML or XML, using SVG's syntax should be pretty simple to grasp. Writing SVG elements is based on two strict guidelines:

1.  All attributes must be placed in quotes regardless of the type of value (string or integer), as shown below

    1<rect width="100%" fill="purple" ...../>

jsx

1.  SVG elements and attributes are all case-sensitive, hence, changing the case of an element or attribute is invalid SVG.

    1// Drawing a rectangle 
    2<rect width="100%" fill="purple" ...../>
    3
    4// NOT
    5
    6<RECT WIDTH="100%" FILL="ORANGE"../>

jsx

Drawing Shapes
--------------

As mentioned, you'll learn how to draw the Mastercard logo with SVG. Every SVG element is wrapped around an <span class="jsx-3120878690">`<svg/>`</span> tag with a version and the size of the drawing area.

    1<svg version="1.1" baseProfile="full" 
    2         width="400" height="250" 
    3         xlmns="http://www/w3/org/2000/svg">
    4// Content Here
    5</svg>

html

Next, add a rectangle with a black background.

    1<svg version="1.1" baseProfile="full" 
    2         width="400" height="250" 
    3         xlmns="http://www/w3/org/2000/svg">
    4<rect width="100%" height="100%" fill="black"></rect>
    5</svg>

html

Add the two circles that intersect .

    1<svg version="1.1" baseProfile="full" 
    2         width="400" height="250" 
    3         xlmns="http://www/w3/org/2000/svg">
    4<circle cx="150" cy="100" r="80" fill="red"></circle>
    5<circle cx="256" cy="100" r="80" fill="orange"></circle>
    6</svg>

html

The <span class="jsx-3120878690">`r`</span> attribute refers to the radius of the circle.

<span class="jsx-3120878690">`cx`</span> and <span class="jsx-3120878690">`cy`</span> refer to the position of the element on the x and y coordinates of the circle.

Finally, add some text to your logo.

    1<svg version="1.1" baseProfile="full" 
    2         width="400" height="250" 
    3         xlmns="http://www/w3/org/2000/svg">
    4<circle cx="150" cy="100" r="80" fill="red"></circle>
    5<circle cx="256" cy="100" r="80" fill="orange"></circle>
    6<text x="200" y="219" font-size="20" text-anchor="middle" fill="white">MasterCard</text>
    7</svg>

html

To see how this looks, create an HTML file and open it up in your browser. You're a genius! Try to tweak the attributes some more to gain more understanding of what they do.

Set Up and App
--------------

Now that you have a world-class SVG logo, set up your React app by entering the following in your terminal.

    1npx create-react-app <YOUR_APP_NAME>

html

You can also visit [https://react.new](https://react.new/) to get a fully configured React environment on [codesandbox.io](http://codesandbox.io/).

### Add SVG to the App

Rendering an SVG element is very simple with Create React App. To do so, create an SVG file that contains the logo you've created and save it. In this guide, I'll assume you saved it in **svg/ .**

Next, import it into your app, as shown below.

    1import React from 'react';
    2import { ReactComponent as MyLogo } from './assets/logo.svg';
    3
    4function App(){
    5 return(
    6     <div>
    7                <MyLogo/>
    8        </div>
    9 );
    10}

jsx

Conclusion
----------

And voila! In this guide, you learned how to create an SVG element and add it to a React app. SVG goes far beyond creating basic shapes. You can do more stuff, including gradients and animations.

The [Mozilla developer network documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial) hasa very detailed explanation of Scalable Vector Graphics. Feel free to also reach out to me on Twitter [@DesmondNyamador](https://twitter.com/DesmondNyamador).

12

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

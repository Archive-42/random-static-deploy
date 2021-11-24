<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7450715d-ef86-4d3e-a9ce-3add2c879a77.jpg" alt="Author avatar" class="jsx-3841407315" />

Vartika Chaudhary

Solving the React Error: Not Picking Up CSS Style
=================================================

### Vartika Chaudhary

-   Nov 17, 2020
-   7 Min read
-   33,742 Views

-   Nov 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   33,742 Views

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
-   <a href="#module-overview" class="menu-link">Overview</a>
-   <a href="#module-unsavedfilesinthesourcefolder" class="menu-link">Unsaved Files in the Source Folder</a>
-   <a href="#module-incorrectpathduringanimport" class="menu-link">Incorrect Path during an Import</a>
-   <a href="#module-stylingthewrongattributes" class="menu-link">Styling the Wrong Attributes</a>
-   <a href="#module-errorwhilenamingafile" class="menu-link">Error while Naming a File</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

CSS files are the core components of a frontend developer project. They are used to style and design webpages. CSS is used internally in HTML files using the <span class="jsx-3120878690">`style`</span> tag and externally by importing it into the required HTML file.

In this guide, you will learn about the errors that can occur while importing a CSS file into your React file.

Overview
--------

CSS helps in styling webpages, but sometimes code may not get properly imported or may show a few errors while it is being executed. These errors can arise while saving, naming, or importing the file. There are four things that can go wrong:

-   Not saving the file in the source folder
-   Providing the wrong path while importing
-   Styling the wrong <span class="jsx-3120878690">`id`</span> or <span class="jsx-3120878690">`class`</span>
-   Making a mistake in the file name

We'll walk through each of these situations.

Unsaved Files in the Source Folder
----------------------------------

Inside the react-app folder, some folders are saved by default, such as node-module, public, and source. When creating a program, all HTML codes are saved in the public folder and the rest (<span class="jsx-3120878690">`script`</span>, <span class="jsx-3120878690">`style`</span>, etc.) in the source folder.

Consider an example: Suppose you want to create separate folders for each kind of file: public for HTML files, src for JavaScript files, and a new folder **CSS\_Files** for CSS files. When you run the final code after importing all the required files for testing, an error will show up on the screen saying, **Failed to compile: Module not found**. Below is the code for importing the file and the error corresponding to the code:

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '../CSS_Files/style.css';

javascript

![Unsaved Files in the Source Folder Error](../../pluralsight2.imgix.net/guides/8ef9ba79-bfc5-4d6e-8d6c-852747276a3b_Unsaved_Files_in_the_Source_Folder.html)

This error is generated because the compiler is only able to import files from the src folder. Here, the CSS file is saved outside the src folder, so the compiler failed to import it. To make this code work, you just have to save the CSS file inside the src folder. But if you still want to separate the files, just make a new folder inside the src folder. Below is the correct code for importing the CSS file.

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '../src/CSS_Files/style.css';

javascript

Incorrect Path during an Import
-------------------------------

A path reflects the address of a file, so a wrong path can easily produce an error without you noticing it. Consider an example: Suppose you are importing a CSS file into your React program. You run the code and an error occurs stating that you have provided a wrong path, but when you check your path again, you don’t see anything abnormal. Below is the code used to import the file and the error corresponding to the code:

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '.../src/CSS_Files/style.css';

javascript

![Incorrect Path Error](../../pluralsight2.imgix.net/guides/dad89290-e734-406f-bcf4-271ff1eb4a78_Incorrect_Path_during_an_Import.html)

As you can see in the above code, the problem is right where the path begins. While declaring a path only two dots are required, whereas here three dots have been used, which is generating the error. Below is the correct code for declaring the path:

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '../src/CSS_Files/style.css';

javascript

Styling the Wrong Attributes
----------------------------

In a CSS file, all styling takes place inside the <span class="jsx-3120878690">`id`</span> or the <span class="jsx-3120878690">`class`</span> attributes of an element. The <span class="jsx-3120878690">`id`</span> and <span class="jsx-3120878690">`class`</span> attributes provide a unique identification to the element to perform certain actions without interfering with the rest of the code.

Consider an example: Suppose you are making a webpage with multiple divs and styling only three divs with the following ids: first, second, and third. But when you run the code, you only see one <span class="jsx-3120878690">`div`</span> instead of three. Below are the codes for styling, creating, and entering data into the divs.

    1<body>
    2 <div id="menu"></div>
    3 ...
    4 <div id=”first”></div>
    5 <div id=”second”></div>
    6 <div id=”third”></div>
    7</body>

html

    1#menu {
    2 …
    3}
    4#second {
    5 …
    6}
    7#thrid {
    8 …
    9}

css

    1class Data_1 extends Component {
    2 render() {
    3  return(
    4   <div><p>HELLO!!!</p></div>
    5  )
    6 }
    7}
    8ReactDOM.render(<Data_1/>, document.querySelector(‘#first’));
    9
    10class Data_2 extends Component {
    11 render() {
    12  return(
    13   <div><p>WELCOME TO MY HOME!!!</p></div>
    14  )
    15 }
    16}
    17ReactDOM.render(<Data_2/>, document.querySelector(‘#second’));
    18
    19class Data_3 extends Component {
    20 render() {
    21  return(
    22   <div><p>BYE!!!</p></div>
    23  )
    24 }
    25}
    26ReactDOM.render(<Data_3/>, document.querySelector(‘#third’));

javascript

![Incomplete div](../../pluralsight2.imgix.net/guides/f63166a4-e21e-4ced-bc2e-3bd6060cb38a_Styling_the_Wrong_Attributes.html)

In the above code, the styling of some divs is incomplete. This happened because the webpage contains many divs that while styling them, one of them ended up with a wrong name and another one got a spelling error. The <span class="jsx-3120878690">`first`</span> div name is mixed up with the <span class="jsx-3120878690">`menu`</span> div name and the <span class="jsx-3120878690">`third`</span> div is spelled incorrectly. Below is the correct CSS code and the result:

    1#first {
    2 ….
    3}
    4#second {
    5….
    6}
    7#third {
    8 ….
    9}

css

![Complete div styling](../../pluralsight2.imgix.net/guides/f3647f0d-8e79-4dcc-afe3-4bcba53a9e10_Styling_the_Wrong_Attributes_(correct).html)

Error while Naming a File
-------------------------

Programming languages treat uppercase and lowercase letters differently. Consider an example: Suppose you have a CSS file for styling elements. This time you did everything correctly, but still, when you run the code, an error shows up. Below is the code used to import the file and the error corresponding to the code:

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '../src/CSS_Files/Style.css';

javascript

![File Name Error](../../pluralsight2.imgix.net/guides/4bd5d7ea-3448-4637-b1e8-da0f29703a99_Error_while_Naming_a_File.html)

By seeing the error you can realize there is a problem with the name of the file. When you check the name, you find that the file is saved as <span class="jsx-3120878690">`style.css`</span>, but you are importing it with the name <span class="jsx-3120878690">`Style.css`</span>. The error here is generated by the capital *S* at the start of the file name. Below is the correct code for importing the file:

    1import React, {Component} from 'react';
    2import ReactDOM from 'react-dom';
    3import '../src/CSS_Files/style.css';

javascript

Conclusion
----------

As a frontend developer, you need to understand the importance of the CSS file. Mistakes can be easily made while importing, saving, or naming the file, which can generate errors during code compilation. You should always save the file inside the src folder as the compiler automatically searches through it for any kind of file imports. You can refer to [React – Styling and CSS](https://reactjs.org/docs/faq-styling.html) in the React docs for more information.

29

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

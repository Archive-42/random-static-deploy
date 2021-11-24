<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7450715d-ef86-4d3e-a9ce-3add2c879a77.jpg" alt="Author avatar" class="jsx-3841407315" />

Vartika Chaudhary

Scrolling Inside a div in React
===============================

### Vartika Chaudhary

-   Nov 4, 2020
-   7 Min read
-   54,347 Views

-   Nov 4, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   54,347 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

42

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-overview" class="menu-link">Overview</a>
-   <a href="#module-smoothscrolling" class="menu-link">Smooth Scrolling</a>
-   <a href="#module-singledirectionscrolling" class="menu-link">Single-Direction Scrolling</a>
-   <a href="#module-bidirectionalscrolling" class="menu-link">Bi-directional Scrolling</a>
-   <a href="#module-disablingthescrollbarwhenapopupappears" class="menu-link">Disabling the Scroll Bar when a Popup Appears</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Scrolling is defined as sliding-effect movement on images, text, or graphics across the computer display screen horizontally, vertically, or both. When developing web pages, you can enable scrolling by default for the complete webpage or only the areas where it is required.

The <span class="jsx-3120878690">`div`</span> is a tag element provided by the HTML language to reserve a particular part of the computer screen so that certain features can be added to the webpage. This makes the webpage work more efficiently and look more attractive to a user.

In this guide, you will learn about different types of scrolling inside the <span class="jsx-3120878690">`div`</span> tag and how to disable scroll movement when a popup appears.

Overview
--------

Scrolling inside a <span class="jsx-3120878690">`div`</span> tag can be accomplished through three methods: smooth scrolling, single-direction scrolling, and bi-directional scrolling.

To understand all these scrolling methods, consider the following example: Suppose you want to build a webpage that contains basic information about birds in a text format. The webpage consists of three different <span class="jsx-3120878690">`div`</span>s. You will get to apply each scrolling type to each of these <span class="jsx-3120878690">`div`</span>s.

Smooth Scrolling
----------------

Smooth scrolling can be applied when there is a single-pixel increment in every scroll—that is, the scroll is so smooth that you can read as you scroll further.

Continuing the previous example: The first <span class="jsx-3120878690">`div`</span> contains the heading of the page and three buttons at the end. The first button directs you to the birds’ growth content, the second to their lifestyle content, and the third to their food intake content. When you click on any of these buttons, you are redirected to that content within the same webpage. Here, smooth scrolling is applied to the buttons for smooth redirection. Below is the code for creating the <span class="jsx-3120878690">`div`</span> and adding data into the <span class="jsx-3120878690">`div`</span>.

    1<body>
    2 <div id=”menu”></div>
    3</body>

html

    1class Article_1 extends Component {
    2 render() {
    3  return(
    4   <div>
    5    <h1>BIRDS</h1>
    6    <br/>
    7    <button><a href="#growth">Birds: Growth</a></button>
    8    <button><a href="#lifestyle">Birds: Lifestyle</a></button>
    9    <button><a href="#food">Birds: Food</a></button>
    10   </div>
    11  )
    12 }
    13}
    14
    15ReactDOM.render(<Article_1/>, document.querySelector('#menu'));

javascript

![menu div](../../pluralsight2.imgix.net/guides/6dc22f4b-040c-44f7-902d-9de88ae5e421_smooth_1.html)

The smooth scrolling is achieved by placing <span class="jsx-3120878690">`scroll-behavior: smooth`</span> in the <span class="jsx-3120878690">`html`</span> inside the <span class="jsx-3120878690">`style`</span> tag.

    1html {
    2 scroll-behaviour: smooth;
    3}

css

![smooth scroll](../../pluralsight2.imgix.net/guides/64a3ff9c-3328-4eac-9670-d54a57d4be14_smooth_2.html)

Single-Direction Scrolling
--------------------------

Single-direction scrolling can be applied when the scroll movement is either horizontal or vertical.

Continuing the previous example: When the first button, **Birds: Growth**, is clicked, it redirects to the content of the second <span class="jsx-3120878690">`div`</span>, which stores information about birds’ growth. The information in this <span class="jsx-3120878690">`div`</span> will be presented in a vertical overflow manner. Below is the code for creating the <span class="jsx-3120878690">`div`</span> and adding the information into it.

    1<body>
    2 …
    3 <div id=”growth”></div>
    4</body>

html

    1class Article_2 extends Component {
    2 render() {
    3  return(
    4   <div>
    5    <h2>Birds: Growth</h2>
    6    <p>…..</p>
    7   </div>
    8  )
    9 }
    10}
    11
    12ReactDOM.render(<Article_2/>, document.querySelector('#growth'));

javascript

![before single-scroll](../../pluralsight2.imgix.net/guides/4f00f4d8-d6e2-4344-b3ca-7123e47ee876_single_direction_1.html)

To fit all the text inside the div, the single-direction scrolling method will be used. You can apply it by placing the <span class="jsx-3120878690">`overflow-y:scroll`</span> in the id <span class="jsx-3120878690">`growth`</span> inside the <span class="jsx-3120878690">`style`</span> tag.

    1#growth {
    2 ...
    3 overflow-y: scroll;
    4}

css

![after single-scroll](../../pluralsight2.imgix.net/guides/159167a0-642b-475c-9ed7-3db1b95e62de_single_direction_2.html)

Notice the scroll bar on the right side of the <span class="jsx-3120878690">`div`</span>.

Bi-directional Scrolling
------------------------

Bi-directional scrolling can be applied when the scroll movement is on both axie, horizontal and vertical.

Continuing the previous example: When the second button, \**Birds: Lifestyle*,\* is clicked, it redirects to the content of third <span class="jsx-3120878690">`div`</span>, which stores the information about birds’ lifestyle. The information in this <span class="jsx-3120878690">`div`</span> will be represented in both a horizontal and vertical overflow manner. Below is the code for creating the <span class="jsx-3120878690">`div`</span> and adding the information into it.

    1<body>
    2 …
    3 <div id=”lifestyle”></div>
    4 ....
    5</body>

html

    1class Article_3 extends Component {
    2 render() {
    3  return(
    4   <div>
    5    <h2>Birds: Lifestyle</h2>
    6    <p>…..</p>
    7   </div>
    8  )
    9 }
    10}
    11
    12ReactDOM.render(<Article_3/>, document.querySelector('#lifestyle'));

javascript

![before bi-scroll](../../pluralsight2.imgix.net/guides/473b7fb8-1e7e-400e-a311-0543be858c25_bi-directional_1.html)

To fit all the text inside the div, the bi-directional scrolling method will be used. You can apply it by placing the <span class="jsx-3120878690">`overflow:scroll`</span> and <span class="jsx-3120878690">`white-space:nowrap`</span> in the id <span class="jsx-3120878690">`lifestyle`</span> inside the <span class="jsx-3120878690">`style`</span> tag.

    1#lifestyle {
    2 ….
    3 overflow: scroll;
    4 white-space: nowrap;
    5}

css

![after bi-scroll](../../pluralsight2.imgix.net/guides/1105b106-4ee7-4b05-901f-4be5caf209b4_bi-directional_2.html)

Notice the scroll bar at the bottom and right side of the <span class="jsx-3120878690">`div`</span>.

Disabling the Scroll Bar when a Popup Appears
---------------------------------------------

A popups presents a dialog box that shows up on the computer screen whenever the webpage wants to give you a notification, alert, or confirmation.

Continuing the previous example: After reading all the information, you can exit the web page by clicking the **Exit** button. This opens up a dialog box that shows a goodbye message. While the pop-up is present on the screen, make sure that the scroll bar behind the webpage is disabled. Below is the code for creating the button and popup:

    1<body>
    2 ….
    3 <div id=”exit”></div>
    4</body>

html

    1function popup() {
    2 alert('Thank you for visiting!!');
    3}
    4
    5const click = (
    6 <button onClick={popup}>Exit</button>
    7);
    8
    9ReactDOM.render(click, document.querySelector('#exit'));

javascript

In the image below, the scroll bar is accessible while the popup is on the screen.

![enable scroll](../../pluralsight2.imgix.net/guides/ef2c99a3-237c-4c6d-b74c-2d306fe1c6f0_popup_1.html)

To stop the scrolling behind the dialog box, add <span class="jsx-3120878690">`addEventListener()`</span> and <span class="jsx-3120878690">`removeEventListener()`</span> functions to the <span class="jsx-3120878690">`popup()`</span> function.

    1function noscroll() {
    2 window.scrollTo(0,0);
    3}
    4
    5function popup() {
    6 alert('Thank you for visiting');
    7 window.addEventListener("scroll", noscroll);
    8 window.removeEventListener("scroll", noscroll);
    9}
    10
    11const click = (
    12 <button onClick={popup}>Exit</button>
    13);
    14
    15ReactDOM.render(click, document.querySelector('#exit'));

javascript

![disable scroll](../../pluralsight2.imgix.net/guides/7418600c-faef-4e12-877a-5960abdb6764_popup_2.html)

Conclusion
----------

As a frontend developer, scrolling is a basic feature you need on your webpages. The scrolling provided by default is applied to the whole webpage, whereas manually added scrolling is used to avoid the overflow of any <span class="jsx-3120878690">`div`</span>. Scroll movement can be applied to a single axis or both axes. You can also disable the scrolling feature so it doesn't interfere with a popup. Refer to information on the <span class="jsx-3120878690">`react-scroll`</span> [component](https://www.npmjs.com/package/react-scroll) to learn more about animating vertical scrolling.

42

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

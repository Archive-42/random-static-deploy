<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Return a Variable in the Render Function in React
=================================================

### Gaurav Singhal

-   Nov 10, 2020
-   5 Min read
-   36,625 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   36,625 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

23

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-returnstaticjsxcontenttoavariable" class="menu-link">Return Static JSX Content to a Variable</a>
-   <a href="#module-conditionallyrenderingjsx" class="menu-link">Conditionally Rendering JSX</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

JSX stands for JavaScript XML, a coding standard that allows you to use JavaScript expressions and other HTML features inline. Using JSX, you can create a function and return a set of JSX elements to a variable, and that variable used is to render the elements inside the <span class="jsx-3120878690">`render()`</span> function in React.

This guide will help you learn how to return JSX to a variable and render JSX markups to the DOM.

Return Static JSX Content to a Variable
---------------------------------------

JSX is used along with React to remove loosely coupled parts of a component, like HTML, CSS, and JavaScript, and get them to work together in a single file called a component. Its syntax can be easy to write and visually compelling. Thus, the JSX elements can also get returned to the variable, and that variable can be used for rendering.

For an example demonstration, let's create a static table within a function and return it to the variable. We'll also create one static <span class="jsx-3120878690">`<table>`</span> inside the function.

    1getTable() {
    2    return (
    3      <div>
    4        <table border="2">
    5          <tr>
    6            <td>Row 1 Col 1</td>
    7            <td>Row 1 Col 2</td>
    8          </tr>
    9          <tr>
    10            <td>Row 2 Col 1</td>
    11            <td>Row 2 Col 2</td>
    12          </tr>
    13          <tr>
    14            <td>Row 3 Col 1</td>
    15            <td>Row 3 Col 2</td>
    16          </tr>
    17        </table>
    18      </div>
    19    );
    20}

jsx

The table is created within the function and returns the set of JSX markups to the function. So once you access the function, respective JSX markups of the table will be replaced.

The next step is to call the function and assign it to the variable, as shown below.

    1render() {
    2    // Calling function and assigned it to the variable
    3    const mytable = this.getTable();
    4
    5    return (
    6      <>
    7        {/* rendered the JSX */}
    8        <div>{mytable}</div> 
    9      </>
    10    );
    11}

jsx

The function<span class="jsx-3120878690">`this.getTable()`</span> is called and it returns the complete <span class="jsx-3120878690">`<table>`</span> element, so once you place it inside the <span class="jsx-3120878690">`return()`</span>, the element will be created into the DOM.

Conditionally Rendering JSX
---------------------------

Both static and dynamic content can be served to the DOM. Hence, you can render dynamic content based on individual conditional operators such as the ternary operator. For example, if you want to show active or inactive logged-in user status, the status color or label may change based on the condition, such as changing to green or red.

For clearer understanding, create two functions showing the <span class="jsx-3120878690">`active`</span> status label and the <span class="jsx-3120878690">`inactive`</span> status label.

    1activeContent() {
    2   return <label>Active</label>;
    3}
    4
    5inActiveContent() {
    6   return <label>In-active</label>;
    7}

jsx

Each of the above functions returns the specific JSX element as a JSX <span class="jsx-3120878690">`<label>`</span> element, however, you should have some identifiers or conditions to dynamically show the status.

Create the key into the state object, as shown below.

    1constructor(props) {
    2    super(props);
    3    this.state = {
    4      isActive: false
    5    };
    6}

jsx

Observe that there is a key named <span class="jsx-3120878690">`isActive`</span> in the component, and the same variable can be used as a condition that either can be true or false.

Now, let's call the above two functions and put their result in additional variables.

    1const activeVariable = this.activeContent();
    2const inactiveVariable = this.inActiveContent();

jsx

<span class="jsx-3120878690">`activeVariable`</span> is used to hold the active label status, and <span class="jsx-3120878690">`inactiveVariable`</span> holds the inactive status label. Both can be interchangeable using the ternary operator, as shown below.

    1render() {
    2    const activeVariable = this.activeContent();
    3    const inactiveVariable = this.inActiveContent();
    4
    5    return (
    6      <>
    7        {this.state.isActive ? activeVariable : inactiveVariable}
    8      </>
    9    );
    10}

jsx

The above ternary condition uses <span class="jsx-3120878690">`this.state.isActive`</span>, and based on its value (true or false), the respective label will be rendered into the DOM. Using a variable in <span class="jsx-3120878690">`render()`</span> is a common approach. Most React developera use them to manage dynamic content from the function implementation, and they are easy to operate throughout the component.

Conclusion
----------

JSX with React is not a required approach, but it can be effectively used to use JavaScript-based expressions and other features inline with HTML markup.

Returning a variable in the render function is the easiest way to manage the JSX markup, whether the content is static or dynamic. Give it a try and dig into JSX!

23

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

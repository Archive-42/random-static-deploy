<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Set Up a Conditional Expression within a React Component's Render Function
==========================================================================

### Zachary Bennett

-   Oct 18, 2020
-   4 Min read
-   363 Views

-   Oct 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   363 Views

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
-   <a href="#module-renderfunctionoverview" class="menu-link">Render Function Overview</a>
-   <a href="#module-conditionalrendering" class="menu-link">Conditional Rendering</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The React framework is a view library for JavaScript that enables you to componentize your web app. React abstracts away much of the complexity of dealing directly with the browser's Document Object Model (DOM) so that you can focus more on the business problem at hand.

If you have tried to access the DOM directly in order to conditionally alter the view, you know how much of a pain it can be. Ignoring the conditional rendering of HTML is next to impossible. While using React (or any web framework for that matter), it is almost certain that you will need to conditionally render HTML depending upon the state your app is currently within.

Luckily for us, React provides a powerful means of conditionally rendering HTML inside of its components via the <span class="jsx-3120878690">`render`</span> lifecycle method. In this guide, you will learn about the <span class="jsx-3120878690">`render`</span> lifecycle method and how you can use the power of JSX to render your view via conditional expressions.

Let's dive in!

Render Function Overview
------------------------

The <span class="jsx-3120878690">`render`</span> lifecycle method is the only method that is absolutely required within a React class component. This is because the whole point of a React component in the first place is to "render" HTML. This required function normally takes in a component's props and/or state and renders HTML that depends upon this data. The <span class="jsx-3120878690">`render`</span> function, working in combination with JSX expressions, provides a powerful and declarative means of expressing the view layer of your app. For more about JSX, and why you should use it with React, check out React's JSX [documentation](https://reactjs.org/docs/introducing-jsx.html).

Normally, the use of a <span class="jsx-3120878690">`render`</span> function within a class component looks like this:

    1class PetList Extends React.Component {
    2
    3    ...
    4
    5    render() {
    6        return (
    7            <ul>
    8                { this.props.cats.map(cat => {
    9                    return (<Cat name={cat.name} type={cat.type} />)
    10                })}
    11            </ul>
    12            <ul>
    13                { this.props.dogs.map(dog => {
    14                    return (<Dog name={dog.name} type={dog.type} />)
    15                })}
    16            </ul>
    17        )
    18    }
    19}

jsx

The <span class="jsx-3120878690">`render`</span> function above is taking in a list of cats and dogs from a parent component and rendering an HTML unordered list for both. As you can see, the <span class="jsx-3120878690">`render`</span> function works with JSX to make the declaration of the HTML simple and dynamic. But what if you wanted to only show one of these lists depending upon a user's action? That's where the power of conditional expressions with JSX really shines.

Conditional Rendering
---------------------

With JSX, conditional rendering is a breeze! The power of conditional rendering is made possible via JSX's flexibility in allowing you to assign HTML to JavaScript variables. Yes, that's right—love it or hate it, you can use HTML and JavaScript hand in hand. In the below code, you will see how conditional expressions can allow you to render either a pet list or a dog list depending upon the app state.

    1class PetList Extends React.Component {
    2
    3    ...
    4
    5    render() {
    6        const catList = this.props.cats.map(cat => <Cat name={cat.name} type={cat.type} />);
    7        const dogList = this.props.dogs.map(dog => <Dog name={dog.name} type={dog.type} />);
    8
    9        const petList = this.props.isShowingDogList ? dogList : catList;
    10
    11        return (
    12            <ul>{petList}</ul>
    13        )
    14    }
    15}

jsx

That was easy! The above <span class="jsx-3120878690">`render`</span> function renders either a list of <span class="jsx-3120878690">`Dog`</span> components or a list of <span class="jsx-3120878690">`Cat`</span> components depending upon the <span class="jsx-3120878690">`isShowingDogList`</span> Boolean prop. As you can see, via the power of the <span class="jsx-3120878690">`render`</span> lifecycle method and JSX, React allows you to easily declare the conditional state of your HTML.

> **Note:** The code above is just a demonstration and could be optimized to call <span class="jsx-3120878690">`Array.map`</span> across either cats or dogs instead of always mapping across both arrays.

Conclusion
----------

The <span class="jsx-3120878690">`render`</span> function of React components is a powerful lifecycle method. Apart from showing static HTML, the <span class="jsx-3120878690">`render`</span> function lets you dynamically render HTML that is based upon a conditional expression. There's so much more to the <span class="jsx-3120878690">`render`</span> function than just conditional expressions, too! For more information regarding this important and required lifecycle method, check out the React <span class="jsx-3120878690">`render`</span> [documentation](https://reactjs.org/docs/react-component.html#render).

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

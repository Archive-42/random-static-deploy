<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Change a React Bootstrap Component's Position Automatically
===========================================================

### Kimaru Thagana

-   Nov 9, 2020
-   5 Min read
-   1,468 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,468 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setupsampleapp" class="menu-link">Set Up Sample App</a>
-   <a href="#module-createpopover" class="menu-link">Create PopOver</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

During design and development of frontend interfaces in React.js, you will come across instances where you need to display information once a user clicks or hovers on an item. A popover is a useful tool for this scenario. It's similar to a tooltip, but the difference is that a popover can provide more content.

In this guide, you will learn how to create a popover component. You will also learn how to update a popover's position dynamically. The popover component used in this guide is from React Bootstrap. The guide assumes that you have basic (beginner level) knowledge of React.js.

Go ahead and set up your application.

Set Up Sample App
-----------------

Open your terminal and run these commands to create a basic React app.

    1npx create-react-app react-dynamic-popover
    2
    3cd react-dynamic-popover
    4
    5npm start

bash

Include React Bootstrap in your basic React app.

    1npm install react-bootstrap bootstrap

bash

In your <span class="jsx-3120878690">`app.js`</span> file, include the stylesheet as well.

    1import 'bootstrap/dist/css/bootstrap.min.css';

js

You can now import bootstrap components, for example:

    1import { Button } from 'react-bootstrap';

js

Create PopOver
--------------

Copy the sample code below.

    1const popover = (
    2    <Popover id="popover-basic">
    3        <Popover.Title as="h3">Popover</Popover.Title>
    4        <Popover.Content>
    5            Hello popover
    6        </Popover.Content>
    7    </Popover>
    8);
    9
    10function App() {
    11    return (
    12    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    13        <Button variant="success">Click here</Button>
    14    </OverlayTrigger>
    15);
    16}
    17export default App

js

Overlays are fundamental components for tooltips and popovers. Overlays add support for transitions and toggling visibility. The code above creates a simple popover that pops up when a user clicks the button. You can place the popover component in different positions according to your preferences, i.e., <span class="jsx-3120878690">`top`</span>,<span class="jsx-3120878690">`bottom`</span>, etc. via the placement prop.

In the next example, you will create a popover that repositions itself with respect to changes in content.

Go ahead and copy the sample code below.

    1const UpdatingPopover = React.forwardRef(
    2    ({ popper, children, show: _, ...props }, ref) => {
    3        useEffect(() => {
    4            console.log('updating!');
    5            popper.scheduleUpdate();
    6        }, [children, popper]);
    7
    8        return (
    9            <Popover ref={ref} content {...props}>
    10                {children}
    11            </Popover>
    12        );
    13    },
    14);
    15
    16const description = `
    17  'React is an open-source, front end, JavaScript library for building user interfaces or UI components.
    18      It is maintained by Facebook and a community of individual developers and companies.'
    19`;
    20const summary = 'React is Cool';
    21
    22function App() {
    23    const [content, setContent] = useState(summary);
    24
    25    useEffect(() => {
    26        const timerId = setInterval(() => {
    27            setContent(content === summary ? description : summary);
    28        }, 3000);
    29
    30        return () => clearInterval(timerId);
    31    });
    32
    33    return (
    34        <OverlayTrigger
    35            trigger="click"
    36            placement="bottom"
    37            overlay={
    38                <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
    39            }
    40        >
    41            <Button>click me</Button>
    42        </OverlayTrigger>
    43    );
    44}

js

Making a popover reposition itself every time the size changes requires manual input. In this case, React Bootstrap provides a nifty function called <span class="jsx-3120878690">`scheduleUpdate`</span>, which works with the <span class="jsx-3120878690">`popper`</span> prop. This method is used by the overlay component to reposition itself.

In our example, the popover updates content after a three-second interval once the button is clicked. You then pass content to be rendered from the parent component in <span class="jsx-3120878690">`UpdatingPopover`</span> to its child <span class="jsx-3120878690">`Popover`</span>. This is made possible by React's <span class="jsx-3120878690">`forwardRef`</span>. You can learn more about forwarding refs at the [React.js site](https://reactjs.org/docs/forwarding-refs.html). In the function <span class="jsx-3120878690">`UpdatingPopover`</span>, you also pass the <span class="jsx-3120878690">`popper`</span> prop and ref to the <span class="jsx-3120878690">`Popper`</span> component, which is rendered on our page. To better understand this approach, the sample code provides a log of every time the content is updated in the popper.

Conclusion
----------

The guide enables you to further build on your frontend skills as a developer. To explore more on this topic. please check out more components at the [React-Bootstrap site](https://react-bootstrap.github.io/components/overlays/#overlays-dynamic-updates).

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

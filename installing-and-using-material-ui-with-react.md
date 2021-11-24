<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/330d16ca-90a4-4029-89e6-bf3ff9456993.jpg" alt="Author avatar" class="jsx-3841407315" />

Ashutosh Singh

Installing and Using Material UI with React
===========================================

### Ashutosh Singh

-   Oct 29, 2020
-   7 Min read
-   15,544 Views

-   Oct 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   15,544 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

60

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-installation" class="menu-link">Installation</a>
-   <a href="#module-basicusage" class="menu-link">Basic Usage</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

With over 60,000 [GitHub stars](https://github.com/mui-org/material-ui), *Material-UI* is one of the most popular React UI libraries. It has components, styles, themes, icons, and so much more and can be used as a single resource for all your styling needs.

In this guide, we will discuss how to install Material-UI, import components, and use them inside your React app.

Installation
------------

To install Material-UI, run the following command in your React project's root directory.

    1npm install @material-ui/core

bash

Or if you prefer <span class="jsx-3120878690">`yarn`</span>, run the following command.

    1yarn add @material-ui/core

bash

Material-UI works best with Roboto font, but it is not automatically loaded by Material-UI, so you will have to add it yourself. There are many ways to do this. One of the easier ways is by using Google Web Fonts.

Add the following code to the <span class="jsx-3120878690">`<head>`</span> tag of your <span class="jsx-3120878690">`public/index.html`</span> file.

    1<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

html

### Icons

With Material-UI, you can use both font icons and SVG icons. To use font icons, add the following code to the <span class="jsx-3120878690">`<head>`</span> tag of your <span class="jsx-3120878690">`public/index.html`</span> file.

    1<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

html

To use SVG icons, run the following command, and install <span class="jsx-3120878690">`@material-ui/icons`</span> as a dependency.

    1npm install @material-ui/icons

bash

Basic Usage
-----------

In this section, we will discuss how to use Material-UI in your app. We will style a <span class="jsx-3120878690">`<Button>`</span> component using various props.

### Button

The first thing to do in order to use any Material-UI component is to import that component. In your <span class="jsx-3120878690">`App.js`</span>, add the following code at the top with other imports.

    1import React from "react";
    2import { Button } from '@material-ui/core';

JSX

Or you can import by pulling specific components from the library.

    1import Button from '@material-ui/core/Button';

JSX

Now use this component inside the <span class="jsx-3120878690">`App()`</span> function, then pass <span class="jsx-3120878690">`primary`</span> in <span class="jsx-3120878690">`color`</span> prop and <span class="jsx-3120878690">`contained`</span> in <span class="jsx-3120878690">`variant`</span> prop.

    1export default function App() {
    2  return (
    3    <div>
    4      <Button color="primary" variant="contained">
    5        Click Me
    6      </Button>
    7    </div>
    8  );
    9}

JSX

Here is how this button will look.

![primary\_contained](../../pluralsight2.imgix.net/guides/ae4b50ed-8647-4711-b723-5fe03ce30018_Screenshot_2020-10-10_React_App.html)

You can change the size by passing the <span class="jsx-3120878690">`size`</span> prop to the <span class="jsx-3120878690">`Button`</span> component. This <span class="jsx-3120878690">`size`</span> prop can take <span class="jsx-3120878690">`small`</span>, <span class="jsx-3120878690">`medium`</span>, and <span class="jsx-3120878690">`large`</span> as its value.

    1<Button size="large" color="primary" variant="contained">
    2  Click Me
    3</Button>

JSX

Here is how this button will look.

![large\_button](../../pluralsight2.imgix.net/guides/4a0dff0c-df75-4cb4-a2ac-9c4be0a6d81c_Screenshot_2020-10-10_React_App(2).html)

You can also add icons to this button using <span class="jsx-3120878690">`startIcon`</span> and <span class="jsx-3120878690">`endIcon`</span> props; as the name suggests, <span class="jsx-3120878690">`startIcon`</span> adds icon before the text of the button and <span class="jsx-3120878690">`endIcon`</span> adds it after the text.

But first, you need to import the icons into your <span class="jsx-3120878690">`App.js`</span>. In this example, you will create login and logout buttons. You can search for your desired icons [here](https://material-ui.com/components/material-icons/).

Import <span class="jsx-3120878690">`AccountCircle`</span> icon from <span class="jsx-3120878690">`@material-ui/icons`</span>.

    1import LoginIcon from '@material-ui/icons/AccountCircle';

JSX

Now, pass this <span class="jsx-3120878690">`LoginIcon`</span> to the <span class="jsx-3120878690">`startIcon`</span> prop of the <span class="jsx-3120878690">`Button`</span> component.

    1<Button startIcon={<LoginIcon />} color="primary" variant="contained">
    2  Login
    3</Button>

JSX

Here is how this button will look.

![login](../../pluralsight2.imgix.net/guides/367f2073-b9d6-4e81-b150-f571ad83d9b1_Screenshot_2020-10-10_React_App(3).html)

You can also pass this icon to the <span class="jsx-3120878690">`endIcon`</span> prop.

    1<Button endIcon={<LoginIcon />} color="primary" variant="contained">
    2  Login
    3</Button>;

JSX

Here is how this button will look.

![login\_endIcon](../../pluralsight2.imgix.net/guides/7495b7c2-608d-4209-bfe8-30630464f0f1_Screenshot_2020-10-10_React_App(4).html)

Now for the logout button. Import the <span class="jsx-3120878690">`ExitToApp`</span> icon from <span class="jsx-3120878690">`@material-ui/icons`</span>.

    1import LogoutIcon from '@material-ui/icons/ExitToApp';

JSX

For the logout button, pass <span class="jsx-3120878690">`secondary`</span> to the <span class="jsx-3120878690">`color`</span> prop, which will make the button red; that makes sense since it is a logout button.

    1<Button startIcon={<LogoutIcon />} color="secondary" variant="contained">
    2  Logout
    3</Button>

JSX

Here is how this button will look.

![logout](../../pluralsight2.imgix.net/guides/996ac3f4-c0da-4abf-9e0a-125f41502c96_Screenshot_2020-10-10_React_App(5).html)

You can further group these buttons using the <span class="jsx-3120878690">`ButtonGroup`</span> component. First, import the <span class="jsx-3120878690">`ButtonGroup`</span> component to <span class="jsx-3120878690">`App.js`</span>.

    1import ButtonGroup from "@material-ui/core/ButtonGroup";

JSX

Using <span class="jsx-3120878690">`ButtonGroup`</span>, remove repetitive props from the buttons and pass them to <span class="jsx-3120878690">`ButtonGroup`</span> instead.

For example, here <span class="jsx-3120878690">`varaint="contained"`</span> is common to both the buttons, so you can pass it to <span class="jsx-3120878690">`ButtonGroup`</span> instead and remove it from individual buttons.

    1<ButtonGroup variant="contained">
    2  <Button endIcon={<LoginIcon />} color="primary">
    3    Login
    4  </Button>
    5  <Button startIcon={<LogoutIcon />} color="secondary">
    6    Logout
    7  </Button>
    8</ButtonGroup>

JSX

Here is how this will look.

![buttongroup](../../pluralsight2.imgix.net/guides/86705ea8-1640-446c-9376-aaebfddaa5b4_Screenshot_2020-10-10_React_App(6).html)

You can also change the buttons' orientation by passing the <span class="jsx-3120878690">`orientation`</span> prop to the <span class="jsx-3120878690">`ButtonGroup`</span> component.

    1<ButtonGroup variant="contained" orientation="vertical">
    2...
    3</ButtonGroup>

JSX

Here is how this will look.

![vertical](../../pluralsight2.imgix.net/guides/f9e44dfc-164d-4feb-8675-a9acc3bc10a4_Screenshot_2020-10-10_React_App(7).html)

You can explore all the examples discussed above [here](../../stackblitz.com/edit/react-materialui-usee773.html?file=src/App.js).

There are many props besides the one discussed here available for every component. You can read more about them in the official docs.

Conclusion
----------

In this guide, we discussed how to install and use Material UI in any React app. We also saw how to add icons and style components.

Try to explore different components, themes, icons, and styles available in Material UI. Here are some additional resources that can be helpful.

-   [Material UI Docs](https://material-ui.com/)
-   [Material Design](https://material.io/)
-   [Styling a React App with Material UI](styling-a-react-app-with-material-ui.html)

Happy coding!

60

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

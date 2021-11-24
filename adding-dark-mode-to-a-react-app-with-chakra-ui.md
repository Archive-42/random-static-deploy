<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/330d16ca-90a4-4029-89e6-bf3ff9456993.jpg" alt="Author avatar" class="jsx-3841407315" />

Ashutosh Singh

Adding Dark Mode to a React App with Chakra UI
==============================================

### Ashutosh Singh

-   Nov 3, 2020
-   6 Min read
-   5,443 Views

-   Nov 3, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   5,443 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

15

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-installationandsetup" class="menu-link">Installation and Setup</a>
-   <a href="#module-creatingtogglecomponent" class="menu-link">Creating Toggle Component</a>
-   <a href="#module-addingflexandbuttoncomponent" class="menu-link">Adding Flex and Button Component</a>
-   <a href="#module-addingdarkmode" class="menu-link">Adding Dark Mode</a>
-   <a href="#module-completecode" class="menu-link">Complete Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In this guide, you will learn how to add dark mode to your React app using [Chakra UI](https://chakra-ui.com/). Aside from being cool and trendy, dark mode also enhances accessibility for light-sensitive users.

This guide assumes you already know how to install and configure Chakra UI in a React app. You can read [Installing and Using Chakra UI with React](installing-and-using-chakra-ui-with-react.html) to get started.

Installation and Setup
----------------------

In your project's root directory, run the following command.

    1npx create-react-app react-dark-mode
    2cd react-dark-mode

bash

Install <span class="jsx-3120878690">`chakra-ui`</span> by running the following command.

    1npm install @chakra-ui/core @emotion/core @emotion/styled emotion-theming

bash

Run the following command to start the development server.

    1npm start

bash

Import and add the <span class="jsx-3120878690">`ThemeProvider`</span>, <span class="jsx-3120878690">`ColorModeProvider`</span>, and <span class="jsx-3120878690">`CSSReset`</span> components in your <span class="jsx-3120878690">`App.js`</span>.

Modify your <span class="jsx-3120878690">`App.js`</span> like this.

    1import {
    2  ThemeProvider,
    3  theme,
    4  ColorModeProvider,
    5  CSSReset,
    6} from "@chakra-ui/core";
    7
    8function App() {
    9  return (
    10    <ThemeProvider theme={theme}>
    11      <ColorModeProvider>
    12        <CSSReset />
    13      </ColorModeProvider>
    14    </ThemeProvider>
    15  );
    16}
    17
    18export default App;

JSX

Head over to <span class="jsx-3120878690">`http://localhost:3000`</span>; your app will be blank now.

Creating Toggle Component
-------------------------

In this section, we will create a new component that will toggle the React app between dark and light modes.

Create a new file named <span class="jsx-3120878690">`Toggle.js`</span> in the <span class="jsx-3120878690">`src`</span> directory. Run the following commands in your project's root directory to create the file.

    1cd src
    2touch Toggle.js

bash

Add the following code to <span class="jsx-3120878690">`Toggle.js`</span>; this will create an empty functional component in <span class="jsx-3120878690">`Toggle.js`</span>.

    1import React from 'react'
    2
    3export default function Toggle() {
    4    return (
    5        <div>
    6            
    7        </div>
    8    )
    9}

JSX

Import and add this <span class="jsx-3120878690">`Toggle`</span> component to <span class="jsx-3120878690">`App.js`</span>.

    1import {
    2  ThemeProvider,
    3  theme,
    4  ColorModeProvider,
    5  CSSReset,
    6} from "@chakra-ui/core";
    7import Toggle from "./Toggle";
    8
    9function App() {
    10  return (
    11    <ThemeProvider theme={theme}>
    12      <ColorModeProvider>
    13        <CSSReset />
    14        <Toggle />
    15      </ColorModeProvider>
    16    </ThemeProvider>
    17  );
    18}
    19
    20export default App;

JSX

Adding Flex and Button Component
--------------------------------

Import <span class="jsx-3120878690">`Flex`</span> from <span class="jsx-3120878690">`chakar-ui`</span> and use it inside the <span class="jsx-3120878690">`Toggle`</span> component.

    1import React from "react";
    2import { Flex } from "@chakra-ui/core";
    3export default function Toggle() {
    4  return (
    5    <div>
    6      <Flex
    7        align="center"
    8        justify="center"
    9        height="100vh"
    10        direction="column"
    11      ></Flex>
    12    </div>
    13  );
    14}

JSX

You will not see a change, but your app's layout has been changed, which will be apparent after adding more components.

Import the <span class="jsx-3120878690">`Button`</span> component from <span class="jsx-3120878690">`chakra-ui`</span>.

    1import { Flex, Button } from "@chakra-ui/core";

JSX

Use this button component inside <span class="jsx-3120878690">`Flex`</span>.

    1<Flex align="center" justify="center" height="100vh" direction="column">
    2  <Button size="lg">Toggle Mode</Button>
    3</Flex>

JSX

Here is how your app will look.

![button](../../pluralsight2.imgix.net/guides/fa56e7e1-217c-45ad-983a-737c4b4449a1_Screenshot_2020-10-30_React_App.html)

This button does not do anything yet. In the next section, we will add the logic for changing modes.

Adding Dark Mode
----------------

Import <span class="jsx-3120878690">`useColorMode`</span> from <span class="jsx-3120878690">`chakra-ui`</span>.

    1import { Flex, Button, useColorMode } from "@chakra-ui/core";

JSX

Extract <span class="jsx-3120878690">`colorMode`</span> and <span class="jsx-3120878690">`toggleColorMode`</span> from <span class="jsx-3120878690">`useColorMode`</span> using destructuring.

    1const Toggle = () => {
    2  const { colorMode, toggleColorMode } = useColorMode();
    3
    4  return(
    5...
    6)
    7};

JSX

Add the <span class="jsx-3120878690">`toggleColorMode()`</span> function to the button's <span class="jsx-3120878690">`onClick`</span> event.

    1<Button size="lg" onClick={() => toggleColorMode()}>
    2  Toggle Mode
    3</Button>

JSX

And it's done; you have created and added a dark mode toggle button to your React app.

![gif](../../pluralsight2.imgix.net/guides/25ba0d31-6f56-4081-9c87-bf79cfd1f73b_ezgif.com-video-to-gif.html)

You can use <span class="jsx-3120878690">`colorMode`</span> to display the current mode. For example, instead of <span class="jsx-3120878690">`Toggle Mode`</span> as the button text, you can use <span class="jsx-3120878690">`{colorMode}`</span>, and it will show you the current mode.

    1<Button size="lg" onClick={() => toggleColorMode()}>
    2  {colorMode}
    3</Button>

JSX

Here is how this will look.

![colorMode GIF](../../pluralsight2.imgix.net/guides/48443d89-3bf2-4cd4-8d45-a7a58ff1da5a_ezgif.com-video-to-gif(1).html)

Complete Code
-------------

Here is the complete code for the example. You can also see a [live example](https://react-dark-mode-eight.vercel.app/) and code on [GitHub](https://github.com/lelouchB/react-dark-mode).

    1import React from "react";
    2import { Button, Flex, useColorMode } from "@chakra-ui/core";
    3
    4const Toggle = () => {
    5  const { colorMode, toggleColorMode } = useColorMode();
    6
    7  return (
    8    <div>
    9      <Flex align="center" justify="center" height="100vh" direction="column">
    10        <Button size="lg" onClick={() => toggleColorMode()}>
    11         Toggle Mode {colorMode}
    12        </Button>
    13      </Flex>
    14    </div>
    15  );
    16};
    17
    18export default Toggle;

JSX

Conclusion
----------

In this guide, we discussed the step-by-step process of adding a dark mode toggle button to a React app. You can take this toggle button a step further by using icons for light and dark mode to change the theme.

Here are some additional resources that can be helpful.

-   [Chakra UI Docs](https://chakra-ui.com/)
-   [Chakra UI GitHub](https://github.com/chakra-ui/chakra-ui)

Happy coding!

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

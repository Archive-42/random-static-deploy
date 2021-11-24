<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/330d16ca-90a4-4029-89e6-bf3ff9456993.jpg" alt="Author avatar" class="jsx-3841407315" />

Ashutosh Singh

Installing and Using Chakra UI with React
=========================================

### Ashutosh Singh

-   Oct 30, 2020
-   9 Min read
-   4,630 Views

-   Oct 30, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   4,630 Views

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
-   <a href="#module-installation" class="menu-link">Installation</a>
-   <a href="#module-importingboxcomponent" class="menu-link">Importing Box Component</a>
-   <a href="#module-stylingboxcomponent" class="menu-link">Styling Box Component</a>
-   <a href="#module-addingimagetobox" class="menu-link">Adding Image to Box</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Compared to other React UI libraries like React Bootstrap, Material UI, etc., [Chakra UI](https://chakra-ui.com/) gives you much more power to style and customize components.

If you are a fan of Tailwind CSS, you will love Chakra UI since it follows the same minimalistic and modular approach as Tailwind CSS.

In this guide, we will discuss how to install, import, and use components from Chakra UI. We will use Chakra UI version 0.8 since version 1.0 is yet to be released [officially](https://github.com/chakra-ui/chakra-ui#looking-for-the-documentation-).

Installation
------------

To install <span class="jsx-3120878690">`chakra-ui`</span>, run the following command in your project's root directory.

    1npm install @chakra-ui/core @emotion/core @emotion/styled emotion-theming

bash

Chakra UI uses [Emotion](https://emotion.sh/docs/introduction) for handling component styles. As you can see, you have to install peer dependencies yourself as they do not come with <span class="jsx-3120878690">`chakra-ui`</span> by default.

Next, wrap your React app in a <span class="jsx-3120878690">`ThemeProvider`</span>. Modify your <span class="jsx-3120878690">`index.js`</span> like this.

    1import React from "react";
    2import ReactDOM from "react-dom";
    3import App from "./App";
    4import { ThemeProvider } from "@chakra-ui/core";
    5
    6ReactDOM.render(
    7  <ThemeProvider>
    8    <App />
    9  </ThemeProvider>,
    10  document.getElementById("root")
    11);

JSX

Importing Box Component
-----------------------

In this section, we will import the <span class="jsx-3120878690">`Box`</span> component from <span class="jsx-3120878690">`chakra-ui`</span>.

One of the coolest features of <span class="jsx-3120878690">`chakra-ui`</span> is that you can use shorthand for props. For example, instead of <span class="jsx-3120878690">`width`</span>, you can use <span class="jsx-3120878690">`w`</span>, which will work the same.

First, import <span class="jsx-3120878690">`Box`</span> from <span class="jsx-3120878690">`chakra-ui`</span> in <span class="jsx-3120878690">`App.js`</span> and use it inside the <span class="jsx-3120878690">`App()`</span> function.

    1import React from "react";
    2import { Box } from "@chakra-ui/core";
    3
    4export default function App() {
    5  return (
    6    <div>
    7      <Box w="400px" h="400px">
    8        Hello World!
    9      </Box>
    10    </div>
    11  );
    12}

JSX

In the above code, <span class="jsx-3120878690">`w`</span> and <span class="jsx-3120878690">`h`</span> are shorthand for <span class="jsx-3120878690">`width`</span> and <span class="jsx-3120878690">`height`</span> respectively.

Here is how this will look.

![initial box](../../pluralsight2.imgix.net/guides/034e3aab-b5a8-49f0-98ec-421259c003ba_Screenshot_2020-10-13_React_App.html)

Styling Box Component
---------------------

The <span class="jsx-3120878690">`Box`</span> component in the above example doesn't look like a box, just some text in some corner of the app. Add some background color using <span class="jsx-3120878690">`bg`</span> shorthand prop.

    1<Box bg="lavender" w="400px" h="400px">
    2  Hello World!
    3</Box>

JSX

Here is how this will look.

![lavender backgorund](../../pluralsight2.imgix.net/guides/889666ce-e674-4161-87c9-a5131e7d11fe_Screenshot_2020-10-13_React_App(2).html)

You can now differentiate the 400x400 box from the background. Next, style the text and horizontally align it in the center of the box.

    1<Box
    2  bg="lavender"
    3  color="#2d383c"
    4  fontSize="2rem"
    5  textAlign="center"
    6  fontFamily="Consolas"
    7  w="400px"
    8  h="400px"
    9>
    10  Hello World!
    11</Box>

JSX

You passed <span class="jsx-3120878690">`color`</span>, <span class="jsx-3120878690">`textAlign`</span>, <span class="jsx-3120878690">`fontSize`</span> and <span class="jsx-3120878690">`fontFamily`</span> prop to style the text inside the box. Here <span class="jsx-3120878690">`1rem`</span> is equal to <span class="jsx-3120878690">`16px`</span>.

Here is how this will look.

![styled text](../../pluralsight2.imgix.net/guides/46d03daf-ec83-4372-999f-3c3936a205f1_Screenshot_2020-10-13_React_App(3).html)

Now, add a border to the box using the <span class="jsx-3120878690">`border`</span> prop.

    1<Box
    2  border="1px"
    3  rounded="10px"
    4  borderColor="gray.300"
    5  boxShadow="md"
    6  bg="lavender"
    7  color="#2d383c"
    8  fontSize="2rem"
    9  textAlign="center"
    10  fontFamily="Consolas"
    11  w="400px"
    12  h="400px"
    13>
    14  Hello World!
    15</Box>

JSX

Here <span class="jsx-3120878690">`rounded`</span> is shorthand for <span class="jsx-3120878690">`border-radius`</span>, and <span class="jsx-3120878690">`boxSahdow`</span> is shorthand for <span class="jsx-3120878690">`box-shadow`</span>. You have used <span class="jsx-3120878690">`md`</span> as the value of <span class="jsx-3120878690">`boxShadow`</span> prop, which is equivalent to <span class="jsx-3120878690">`16px`</span>.

Here is how this will look.

![border](../../pluralsight2.imgix.net/guides/cdf6e8f4-baa6-4382-9bcc-d14f06781001_Screenshot_2020-10-13_React_App(4).html)

To add some <span class="jsx-3120878690">`margin`</span> and <span class="jsx-3120878690">`padding`</span>, use the shorthand prop <span class="jsx-3120878690">`p`</span> and <span class="jsx-3120878690">`m`</span>. You can also use <span class="jsx-3120878690">`px`</span> and <span class="jsx-3120878690">`py`</span> where <span class="jsx-3120878690">`px`</span> sets the padding for <span class="jsx-3120878690">`left`</span> and <span class="jsx-3120878690">`right`</span>. Similarly, <span class="jsx-3120878690">`py`</span> sets it for <span class="jsx-3120878690">`top`</span> and <span class="jsx-3120878690">`bottom`</span>.

Also, change the text <span class="jsx-3120878690">`Hello World!`</span> to <span class="jsx-3120878690">`Lorem Ipsum`</span>.

    1<Box
    2  m="8px"
    3  p="8px"
    4  border="1px"
    5  rounded="10px"
    6  borderColor="gray.300"
    7  boxShadow="md"
    8  bg="lavender"
    9  color="#2d383c"
    10  fontSize="2rem"
    11  textAlign="center"
    12  fontFamily="Consolas"
    13  w="400px"
    14  h="400px"
    15>
    16  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam
    17  doloremque exercitationem saepe, sed modi odit officia illum iste vel? Rerum
    18  dignissimos pariatur, odit impedit iste aperiam facere atque iure!{" "}
    19</Box>

JSX

![Lorem Ipsum](../../pluralsight2.imgix.net/guides/4a95771d-4469-48cd-a003-ebe38bdeee74_Screenshot_2020-10-13_React_App(5).html)

As you can see, the text is overflowing the <span class="jsx-3120878690">`Box`</span> component; you can fix this by passing <span class="jsx-3120878690">`overflow="hidden"`</span> prop to <span class="jsx-3120878690">`Box`</span>.

    1<Box
    2  m="8px"
    3  p="8px"
    4  border="1px"
    5  rounded="10px"
    6  borderColor="gray.300"
    7  boxShadow="md"
    8  bg="lavender"
    9  color="#2d383c"
    10  fontSize="2rem"
    11  textAlign="center"
    12  fontFamily="Consolas"
    13  w="400px"
    14  h="400px"
    15  overflow="hidden"
    16>
    17  Lorem ipsum...
    18</Box>

JSX

Here is how this will look. ![Overflow Hidden](../../pluralsight2.imgix.net/guides/8cbc8592-a5f7-4047-a41a-a87b1b937f5e_Screenshot_2020-10-13_React_App(6).html)

<span class="jsx-3120878690">`isTruncated`</span> is another cool prop you can pass to truncate long texts.

    1<Box
    2  m="8px"
    3  p="8px"
    4  border="1px"
    5  rounded="10px"
    6  borderColor="gray.300"
    7  boxShadow="md"
    8  bg="lavender"
    9  color="#2d383c"
    10  fontSize="2rem"
    11  textAlign="center"
    12  fontFamily="Consolas"
    13  w="400px"
    14  h="400px"
    15  isTruncated
    16>
    17  Lorem ipsum ....
    18</Box>

JSX

Here is how this will look. ![isTruncated](../../pluralsight2.imgix.net/guides/0b83c816-f0ba-462c-8386-c2c481b81168_Screenshot_2020-10-13_React_App(7).html)

Adding Image to Box
-------------------

In this section, you will add an image to the <span class="jsx-3120878690">`Box`</span> component in the above example. For this, you will use the <span class="jsx-3120878690">`Image`</span> and <span class="jsx-3120878690">`Text`</span> components.

Import <span class="jsx-3120878690">`Image`</span> and <span class="jsx-3120878690">`Text`</span> in your <span class="jsx-3120878690">`App.js`</span>.

    1import { Box, Image, Text } from "@chakra-ui/core";

JSX

Now add these components inside the <span class="jsx-3120878690">`Box`</span> component.

    1<Box
    2  m="8px"
    3  p="8px"
    4  border="1px"
    5  rounded="10px"
    6  borderColor="gray.300"
    7  boxShadow="md"
    8  bg="lavender"
    9  color="#2d383c"
    10  fontSize="2rem"
    11  textAlign="center"
    12  fontFamily="Consolas"
    13  w="400px"
    14  h="400px"
    15>
    16  <Image
    17    rounded="0.5rem"
    18    src="https://finalspaceapi.com/img/gary_goodspeed.webp"
    19    alt="Gary Goodspeed"
    20  />
    21  <Text>Gary Goodspeed</Text>
    22</Box>

JSX

Here is how this will look. ![image](../../pluralsight2.imgix.net/guides/bd4c25ea-d1a6-4c75-a512-4b6a986ef596_Screenshot_2020-10-13_React_App(1).html)

What if there are multiple boxes one after another?

Copy and paste this box multiple times.

    1<div>
    2  <Box>
    3    <Image
    4      rounded="0.5rem"
    5      src="https://finalspaceapi.com/img/gary_goodspeed.webp"
    6      alt="Gary Goodspeed"
    7    />
    8    <Text>Gary Goodspeed</Text>
    9  </Box>
    10
    11  <Box>
    12    <Image
    13      rounded="0.5rem"
    14      src="https://finalspaceapi.com/img/gary_goodspeed.webp"
    15      alt="Gary Goodspeed"
    16    />
    17    <Text>Gary Goodspeed</Text>
    18  </Box>
    19
    20  <Box>
    21    <Image
    22      rounded="0.5rem"
    23      src="https://finalspaceapi.com/img/gary_goodspeed.webp"
    24      alt="Gary Goodspeed"
    25    />
    26    <Text>Gary Goodspeed</Text>
    27  </Box>
    28</div>

JSX

Here is how this will look.

![multiple boxes](../../pluralsight2.imgix.net/guides/7840d51f-5155-4aa3-82db-1314bb0dc7b0_Screenshot_2020-10-13_React_App.html)

You can make the layout of this card system responsive by using the <span class="jsx-3120878690">`SimpleGrid`</span> component. First, import the <span class="jsx-3120878690">`SimpleGrid`</span> component in your <span class="jsx-3120878690">`App.js`</span>.

    1import { Box, Image, Text, SimpleGrid } from "@chakra-ui/core";

JSX

Now wrap all the <span class="jsx-3120878690">`Box`</span> components inside this <span class="jsx-3120878690">`SimpleGrid`</span> component.

Pass the <span class="jsx-3120878690">`minChildWidth`</span> prop to this <span class="jsx-3120878690">`SimpleGrid`</span> component, which will adjust the arrangement of the boxes according to <span class="jsx-3120878690">`minChildWidth`</span>.

Here the boxes are of 400x400px dimension, so you can pass <span class="jsx-3120878690">`410px`</span> as <span class="jsx-3120878690">`minChildWidth`</span>.

    1<SimpleGrid minChildWidth="410px">
    2  <Box> ...</Box>
    3  <Box> ...</Box>
    4  <Box> ...</Box>
    5  <Box> ...</Box>
    6  <Box> ...</Box>
    7  <Box> ...</Box>
    8  <Box> ...</Box>
    9  <Box> ...</Box>
    10  <Box> ...</Box>
    11</SimpleGrid>

JSX

Here is how this will look.

![simple grid](../../pluralsight2.imgix.net/guides/a682f12b-a8aa-45a2-9298-8d0fee71cb1f_ezgif.com-optimize.html)

There is still so much more that you can do to customize and style components in Chakra UI.

Conclusion
----------

In this guide, we discussed how to install <span class="jsx-3120878690">`chakra-ui`</span> in a React app. We also covered how to import and customize different components from <span class="jsx-3120878690">`chakra-ui`</span>.

Chakra UI is the perfect choice for your React app when you want to customize components and want your app to have a unique look, which is difficult to achieve in other React UI libraries like React Bootstrap, Material UI, etc.

Here are some additional resources that can be helpful.

-   [Chakra UI Docs](https://chakra-ui.com/)
-   [Chakra UI GitHub](https://github.com/chakra-ui/chakra-ui)

Happy coding!

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/330d16ca-90a4-4029-89e6-bf3ff9456993.jpg" alt="Author avatar" class="jsx-3841407315" />

Ashutosh Singh

Styling a React App with Material UI
====================================

### Ashutosh Singh

-   Oct 30, 2020
-   13 Min read
-   18,322 Views

-   Oct 30, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">13 Min</span> read
-   18,322 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

91

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupreactapp" class="menu-link">Setting Up React App</a>
-   <a href="#module-fetchingdatafromtheapi" class="menu-link">Fetching Data from the API</a>
-   <a href="#module-usingacontainertowrapareactapp" class="menu-link">Using a Container to Wrap a React App</a>
-   <a href="#module-addingheadingtoreactapp" class="menu-link">Adding Heading to React App</a>
-   <a href="#module-creatingcharactercards" class="menu-link">Creating Character Cards</a>
-   <a href="#module-addingnameandstatustocard" class="menu-link">Adding Name and Status to Card</a>
-   <a href="#module-usinggridcomponent" class="menu-link">Using Grid Component</a>
-   <a href="#module-completecode" class="menu-link">Complete Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

This guide will discuss the step-by-step process of creating and styling a React app with Material UI.

This app will use the character endpoint of the [Final Space API](https://finalspaceapi.com/), a free RESTful API that provides information about characters, episodes, and locations of the Final Space TV show.

This guide assumes you already know how to install and configure Material UI in a React app. You can read [Installing and Using Material UI with React](https://app.pluralsight.com/guides/installing-and-using-material-ui-with-react/) to get started.

Setting Up React App
--------------------

You can use a [Create React App](https://create-react-app.dev/) template to quickly initialize a React project without doing any manual configurations.

In your project's root directory, run the following command.

    1npx create-react-app react-material-ui-example
    2cd react-material-ui-example

bash

To install Material-UI, run the following command in your React project's root directory.

    1npm install @material-ui/core

bash

Add the following code to the <span class="jsx-3120878690">`<head>`</span> tag of your <span class="jsx-3120878690">`public/index.html`</span> file.

    1<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

html

Delete <span class="jsx-3120878690">`App.css`</span>, <span class="jsx-3120878690">`index.css`</span>, <span class="jsx-3120878690">`logo.svg`</span> from the <span class="jsx-3120878690">`src`</span> directory.

Remove <span class="jsx-3120878690">`index.css`</span> import from the <span class="jsx-3120878690">`src/index.js`</span> file.

    1// src/index.js
    2import React from 'react';
    3import ReactDOM from 'react-dom';
    4import App from './App';
    5
    6ReactDOM.render(
    7  <React.StrictMode>
    8    <App />
    9  </React.StrictMode>,
    10  document.getElementById('root')
    11);

JSX

Modify your <span class="jsx-3120878690">`src/App.js`</span> file like this.

    1// src/App.js
    2import React, { useEffect, useState } from "react";
    3
    4function App() {
    5  return <div></div>;
    6}
    7
    8export default App;

JSX

Start the development server by running the following command in the terminal.

    1npm start

bash

Navigate to [http://localhost:3000](http://localhost:3000/); you will see a blank page since your app is currently empty.

Fetching Data from the API
--------------------------

First, you need to fetch data from the <span class="jsx-3120878690">`/character`</span> endpoint of the Final Space API. You can do this by using <span class="jsx-3120878690">`fetch()`</span> inside the <span class="jsx-3120878690">`useEffect()`</span> hook and storing the response data inside the state variable. You can also use <span class="jsx-3120878690">`axios`</span> to make API requests.

By providing an empty array as a second argument to <span class="jsx-3120878690">`useEffect()`</span>, you can ensure that the request is made only after the initial render.

    1function App() {
    2  const [data, setData] = useState([]);
    3  useEffect(() => {
    4    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
    5      .then((res) => res.json())
    6      .then((data) => setData(data));
    7  }, []);
    8
    9  return <div></div>;
    10}
    11
    12export default App;

JSX

In the above code, you have limited the response from the endpoint by passing the <span class="jsx-3120878690">`/?limit=12`</span> query in the URL.

Using a Container to Wrap a React App
-------------------------------------

Now, you will use the <span class="jsx-3120878690">`Container`</span> component to add some margins to the app.

Import <span class="jsx-3120878690">`Container`</span> from the Material-UI library.

    1import Container from "@material-ui/core/Container";

JSX

Now, use it inside the <span class="jsx-3120878690">`App()`</span> function.

    1return (
    2  <div>
    3    <Container> </Container>
    4  </div>
    5);

JSX

You will not see any change on your app, but some margins have been added to it, which will be apparent after adding other components inside <span class="jsx-3120878690">`Container`</span>.

Adding Heading to React App
---------------------------

Your app needs a heading; for this, use the <span class="jsx-3120878690">`Typography`</span> component of the Material-UI library. Import this component in <span class="jsx-3120878690">`App.js`</span> file.

    1import Typography from "@material-ui/core/Typography";

JSX

Now, use it inside the <span class="jsx-3120878690">`Container`</span> component.

    1<Container>
    2  <Typography color="textPrimary" gutterBottom variant="h2" align="center">
    3    React Material UI Example
    4  </Typography>
    5</Container>

JSX

Here is how this will look.

![heading](../../pluralsight2.imgix.net/guides/bcc44f1c-16ae-4478-b1b4-b7d3cfbecd69_Screenshot_2020-10-10_React_App(9).html)

These are the props that are used:

-   <span class="jsx-3120878690">`gutterBottom`</span>: Adds margin to the bottom of the component.
-   <span class="jsx-3120878690">`color="textPrimary"`</span>: Specifies the color of the text. You can use <span class="jsx-3120878690">`textSeconadry`</span>, <span class="jsx-3120878690">`primary`</span>, etc. also.
-   <span class="jsx-3120878690">`align="center"`</span>: Center aligns the component.
-   <span class="jsx-3120878690">`variant="h2"`</span>: Applies the theme typography styles.

There are even more props that you can pass to style the <span class="jsx-3120878690">`Typography`</span> component. You can read about them [here](https://material-ui.com/api/typography/).

Creating Character Cards
------------------------

Next, you need to decide which data to show in your app; this project will display <span class="jsx-3120878690">`name`</span>, <span class="jsx-3120878690">`image`</span>, and <span class="jsx-3120878690">`status`</span> of the character. You can check out the [Character Schema](https://finalspaceapi.com/docs/character#character-schema) and add additional data to the app.

You will import and use <span class="jsx-3120878690">`Card`</span>,<span class="jsx-3120878690">`CardMedia`</span>, and <span class="jsx-3120878690">`CardContent`</span> components to create cards for each character.

    1import Card from "@material-ui/core/Card";
    2import CardContent from "@material-ui/core/CardContent";
    3import CardMedia from "@material-ui/core/CardMedia";

JSX

<span class="jsx-3120878690">`CardContent`</span> is used to show information, and <span class="jsx-3120878690">`CardMedia`</span> is used to display an image inside the <span class="jsx-3120878690">`Card`</span> component.

The source of the image goes in the <span class="jsx-3120878690">`image`</span> prop of the <span class="jsx-3120878690">`CardMedia`</span> component.

Use the <span class="jsx-3120878690">`.map()`</span> method on the <span class="jsx-3120878690">`data`</span> variable to create individual cards for characters. Add the following code after the <span class="jsx-3120878690">`<Typography>`</span> component.

    1{
    2  data.map((character) => (
    3    <Card
    4      style={{
    5        maxWidth: 345,
    6        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    7        backgroundColor: "#fafafa",
    8      }}
    9    >
    10      <CardMedia style={{ height: "300px" }} image={character.img_url} />
    11    </Card>
    12  ))
    13}

JSX

Here is how your app will look.

![preview](../../pluralsight2.imgix.net/guides/6e46d27f-fe6f-4840-a898-c696dd088d38_Screenshot_2020-10-10_React_App(10).html)

In the above code, you have used inline styling to style the <span class="jsx-3120878690">`Card`</span> and <span class="jsx-3120878690">`CardImage`</span> components; it works but makes your code look messy.

Luckily, Material-UI provides a solution for this: <span class="jsx-3120878690">`makeStyles`</span>. Using <span class="jsx-3120878690">`makeStyles`</span>, you can add CSS in JS without making your code look messy.

First, you need to import <span class="jsx-3120878690">`makeStyles`</span> in your app.

    1import { makeStyles } from "@material-ui/core/styles";

JSX

Next, pass all the CSS you need in your app as an object to <span class="jsx-3120878690">`makeStyles`</span> and store it inside a variable, <span class="jsx-3120878690">`useStyles`</span>. This code comes before the <span class="jsx-3120878690">`App()`</span> function. You can create nested objects to style different components.

Here, <span class="jsx-3120878690">`card`</span> is for styling the <span class="jsx-3120878690">`Card`</span> component and <span class="jsx-3120878690">`media`</span> is for styling the <span class="jsx-3120878690">`CardImage`</span> component.

    1const useStyles = makeStyles({
    2  card: {
    3    maxWidth: 345,
    4    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    5    backgroundColor: "#fafafa",
    6  },
    7  media: {
    8    height: 300,
    9  },
    10});
    11
    12function App() {
    13  ...
    14}
    15export default App;

JSX

To use this inside <span class="jsx-3120878690">`App()`</span> function, initialize a variable before the <span class="jsx-3120878690">`return`</span> statement.

    1const classes = useStyles();

JSX

And that's it. You can now pass this <span class="jsx-3120878690">`classes`</span> and the nested object inside it as the <span class="jsx-3120878690">`className`</span> to style the component.

    1{
    2  data.map((character) => (
    3    <Card className={classes.card}>
    4      <CardMedia className={classes.media} image={character.img_url} />
    5    </Card>
    6  ))
    7}

JSX

Navigate to [http://localhost:3000](http://localhost:3000/); you will notice that your app looks just the same as before.

Adding Name and Status to Card
------------------------------

The next step is to add the <span class="jsx-3120878690">`name`</span> and <span class="jsx-3120878690">`status`</span> of the character using the <span class="jsx-3120878690">`CardContent`</span> and <span class="jsx-3120878690">`Typography`</span> component.

Add the following code inside the <span class="jsx-3120878690">`Card`</span> component.

    1<Card className={classes.card}>
    2  <CardMedia className={classes.media} image={character.img_url} />
    3  <CardContent>
    4    <Typography color="primary" variant="h5">
    5      {character.name}
    6    </Typography>
    7    <Typography color="textSecondary" variant="subtitle2">
    8      {character.status}
    9    </Typography>
    10  </CardContent>
    11</Card>

JSX

Here is how this will look.

![gary](../../pluralsight2.imgix.net/guides/8e97c993-05e8-48e4-8438-58b2006126df_Screenshot_2020-10-10_React_App(11).html)

As you can see, here you have used the <span class="jsx-3120878690">`Typography`</span> component three times, and all of them look entirely different. So the output can change significantly based on what values are passed to a component's prop.

Using Grid Component
--------------------

This column of cards doesn't look right. To fix this, you will use the <span class="jsx-3120878690">`Grid`</span> component to change the app's layout.

First, import the <span class="jsx-3120878690">`Grid`</span> component in your <span class="jsx-3120878690">`App.js`</span>file.

    1import Grid from "@material-ui/core/Grid";

JSX

Next, wrap all the cards inside a <span class="jsx-3120878690">`Grid`</span> component. You can use two types of layout with <span class="jsx-3120878690">`Grid,`</span> i.e., <span class="jsx-3120878690">`item`</span> and <span class="jsx-3120878690">`container`</span>. Here you will use the <span class="jsx-3120878690">`container`</span> layout.

    1<Grid container spacing={3}>
    2  {data.map((character) => (
    3    <Card className={classes.card}>
    4      <CardMedia className={classes.media} image={character.img_url} />
    5      <CardContent>
    6        <Typography color="primary" variant="h5">
    7          {character.name}
    8        </Typography>
    9        <Typography color="textSecondary" variant="subtitle2">
    10          {character.status}
    11        </Typography>
    12      </CardContent>
    13    </Card>
    14  ))}
    15</Grid>

JSX

Next, wrap each individual card inside the <span class="jsx-3120878690">`Grid`</span> component with the <span class="jsx-3120878690">`item`</span> layout.

    1{
    2  data.map((character) => (
    3    <Grid item xs={12} sm={4} key={character.id}>
    4      <Card className={classes.card}>
    5        <CardMedia className={classes.media} image={character.img_url} />
    6        <CardContent>
    7          <Typography color="primary" variant="h5">
    8            {character.name}
    9          </Typography>
    10          <Typography color="textSecondary" variant="subtitle2">
    11            {character.status}
    12          </Typography>
    13        </CardContent>
    14      </Card>
    15    </Grid>
    16  ));
    17}

JSX

When mapping over an array in React, you need to pass a [key](https://reactjs.org/docs/lists-and-keys.html) prop to distinguish each child element. Here, the <span class="jsx-3120878690">`id`</span> of the character is passed to the <span class="jsx-3120878690">`key`</span> prop.

In the above code, <span class="jsx-3120878690">`xs`</span> and <span class="jsx-3120878690">`sm`</span> grid breakpoints are set as <span class="jsx-3120878690">`12`</span> and <span class="jsx-3120878690">`4`</span>, respectively. If you are not familiar with grid breakpoints, you can read more about them [here](https://getbootstrap.com/docs/4.0/layout/grid/).

Here is how your app will look.

![final\_app](../../pluralsight2.imgix.net/guides/91759059-4f9c-4a96-923e-f1c07322b3a8_Screenshot_2020-10-10_React_App.html)

Complete Code
-------------

Here is the complete code for this app.

    1import React, { useEffect, useState } from "react";
    2import Container from "@material-ui/core/Container";
    3import Card from "@material-ui/core/Card";
    4import Typography from "@material-ui/core/Typography";
    5import CardContent from "@material-ui/core/CardContent";
    6import CardMedia from "@material-ui/core/CardMedia";
    7import { makeStyles } from "@material-ui/core/styles";
    8import Grid from "@material-ui/core/Grid";
    9
    10const useStyles = makeStyles({
    11  card: {
    12    maxWidth: 345,
    13    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    14    backgroundColor: "#fafafa",
    15  },
    16  media: {
    17    height: 300,
    18  },
    19});
    20
    21function App() {
    22
    23  const [data, setData] = useState([]);
    24
    25  useEffect(() => {
    26    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
    27      .then((res) => res.json())
    28      .then((data) => setData(data));
    29  }, []);
    30
    31  const classes = useStyles();
    32
    33  return (
    34    <div>
    35      <Container>
    36        <Typography
    37          color="textPrimary"
    38          gutterBottom
    39          variant="h2"
    40          align="center"
    41        >
    42          React Material UI Example{" "}
    43        </Typography>
    44        <Grid container spacing={3}>
    45          {data.map((character) => (
    46            <Grid item xs={12} sm={4} key={character.id}>
    47              <Card className={classes.card}>
    48                <CardMedia
    49                  className={classes.media}
    50                  image={character.img_url}
    51                />
    52                <CardContent>
    53                  <Typography color="primary" variant="h5">
    54                    {character.name}
    55                  </Typography>
    56                  <Typography color="textSecondary" variant="subtitle2">
    57                    {character.status}
    58                  </Typography>
    59                </CardContent>
    60              </Card>
    61            </Grid>
    62          ))}
    63        </Grid>
    64      </Container>
    65    </div>
    66  );
    67}
    68
    69export default App;

JSX

You can explore this React app [here](../../stackblitz.com/edit/react-nyzamve773.html?file=src/App.js).

Conclusion
----------

This guide demonstrated the step-by-step process of creating and styling a React app with Material UI. You should try to customize this app further with different Material UI components and layouts.

Here are some additional resources that can be helpful.

-   [Material UI Docs](https://material-ui.com/)
-   [Material Design](https://material.io/)
-   [Final Space API docs](https://finalspaceapi.com/docs/)

Happy coding!

91

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Deploying to Heroku with Webpack
================================

### Kimaru Thagana

-   Nov 9, 2020
-   8 Min read
-   6,948 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   6,948 Views

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
-   <a href="#module-webpackcoreconcepts" class="menu-link">WebPack Core Concepts</a>
-   <a href="#module-settinguptheapp" class="menu-link">Setting Up the App</a>
-   <a href="#module-babel" class="menu-link">Babel</a>
-   <a href="#module-deploytoheroku" class="menu-link">Deploy to Heroku</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

[Webpack](https://webpack.js.org/) is a tool used in JavaScript applications for dependency management. By traversing all the imports in your app, webpack creates a dependency graph consisting of all the assets needed by your app. This dependency graph is then used to generate one or more files called bundles.

WebPack Core Concepts
---------------------

### Entry

The entry point pinpoints the module that webpack should start with when creating its internal dependency graph. By default, webpack uses <span class="jsx-3120878690">`./src/index.js`</span>.

### Output

The output specifies the location that webpack should use to emit bundles and how to name them. By default, webpack uses <span class="jsx-3120878690">`./dist/main.js`</span> for the main output file and <span class="jsx-3120878690">`./dist`</span> folder for other generated files.

### Loaders

Loaders are webpack's way of allowing developers to bundle files other than JavaScript and JSON that Webpack does not understand out of the box.

Setting Up the App
------------------

In order to continue, make sure you have the latest [nodeJS](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your computer.

Create a new folder named <span class="jsx-3120878690">`deploy-react-webpack`</span> and navigate to the folder.

    1mkdir deploy-react-webpack
    2cd deploy-react-webpack

Initialize the project with default options.

    1npm init -y

This creates a package.json file.

Install the required ReactJs packages.

    1npm i react react-dom

Babel
-----

[Babel](https://babeljs.io/) converts ES5 and ES6 syntax used in ReactJs to a backwards-compatible version of JavaScript that is supported by both older and newer browsers.

Install Babel:

    1npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

Install webpack and webpack-cli:

    1npm i -D  webpack webpack-cli webpack-dev-server

### Configuring Babel

Create a new file at the project root named <span class="jsx-3120878690">`.babelrc`</span>.

    1touch .babelrc

Add the following code to the file and save.

    1{
    2  "presets": [
    3      "@babel/preset-env","@babel/preset-react"
    4   ]
    5}

json

### Configure Webpack

Create a new file at the project root named <span class="jsx-3120878690">`webpack.config.js`</span>.

### Add Components for Processing HTML

    1npm i html-webpack-plugin html-loader --save-dev

    1touch webpack.config.js

Add the following code.

    1const HtmlWebPackPlugin = require("html-webpack-plugin");
    2
    3module.exports = {
    4    module: {
    5        rules: [
    6            {
    7                test: /\.(js|jsx)$/,
    8                exclude: /node_modules/,
    9                use: {
    10                    loader: "babel-loader"
    11                }
    12            },
    13            {
    14                test: /\.html$/,
    15                use: [
    16                    {
    17                        loader: "html-loader"
    18                    }
    19                ]
    20            }
    21        ]
    22    },
    23    plugins: [
    24        new HtmlWebPackPlugin({
    25            template: "./src/index.html",
    26            filename: "./index.html"
    27        })
    28    ]
    29};

js

<span class="jsx-3120878690">`entry`</span> tells webpack where to start when bundling your application. The <span class="jsx-3120878690">`test`</span> rule specifies the file extensions where the <span class="jsx-3120878690">`babel-loader`</span> can be used while excluding files in the <span class="jsx-3120878690">`node_modules`</span>.

### Creating the React App

In this stage you will create the actual React app that users can interact with.

Create <span class="jsx-3120878690">`index.html`</span> inside <span class="jsx-3120878690">`src`</span>.

    1mkdir src
    2cd src
    3touch index.html

Add the following code to index.html.

    1<html lang="en">
    2<head>
    3    <meta charset="utf-8">
    4     <meta name="viewport" content="width=device-width,initial-scale=1, shrink-to-fit=no">
    5    <title>How To Deploy React Js With Babel On Heroku</title>
    6</head>
    7<body>
    8<div id="root"></div>
    9</body>
    10</html>

html

Inside <span class="jsx-3120878690">`src`</span>, create a file named <span class="jsx-3120878690">`index.js`</span>.

    1touch index.js

Add the following code.

    1import React from 'react'
    2import ReactDOM from 'react-dom'
    3class App extends React.Component{
    4    render(){
    5        return(
    6            <div>
    7                Hello World !
    8            </div>
    9        )
    10    }
    11}
    12ReactDOM.render(<App/>, document.getElementById("root"));

jsx

This creates a simple React hello world component.

Replace the following code in your package.json.

    1"scripts": {
    2    "test": "echo \"Error: no test specified\" && exit 1"
    3},

json

with

    1"scripts": {
    2    "dev": "webpack serve",
    3    "start": "node server.js",
    4    "build": "webpack --mode production"
    5  },

json

The <span class="jsx-3120878690">`dev`</span> command is used to run the app in development mode. The <span class="jsx-3120878690">`start`</span> command is used by Heroku to serve files in production.

Your package.json should look like this.

    1{
    2  "name": "deploy-react-webpack",
    3  "version": "1.0.0",
    4  "description": "",
    5  "main": "index.js",
    6  "scripts": {
    7    "dev": "webpack serve",
    8    "start": "node server.js",
    9    "build": "webpack --mode production"
    10  },
    11  "keywords": [],
    12  "author": "",
    13  "license": "ISC",
    14  "dependencies": {
    15    "react": "^17.0.1",
    16    "react-dom": "^17.0.1"
    17  },
    18  "devDependencies": {
    19    "@babel/core": "^7.12.3",
    20    "@babel/preset-env": "^7.12.1",
    21    "@babel/preset-react": "^7.12.5",
    22    "@webpack-cli/serve": "^1.0.1",
    23    "babel-loader": "^8.1.0",
    24    "html-loader": "^1.3.2",
    25    "html-webpack-plugin": "^4.5.0",
    26    "webpack": "^5.4.0",
    27    "webpack-cli": "^4.1.0",
    28    "webpack-dev-server": "^3.11.0"
    29  }
    30}

json

### Adding Express To Serve Files in Heroku

Install Express using the following command:

    1npm install express

Create a file in the project root named <span class="jsx-3120878690">`server.js`</span> and add the following code:

    1var path = require('path');
    2var express = require('express');
    3
    4var app = express();
    5
    6app.use(express.static(path.join(__dirname, 'dist')));
    7app.set('port', process.env.PORT || 8080);
    8
    9var server = app.listen(app.get('port'), function() {
    10  console.log('listening on port ', server.address().port);
    11});

js

### Preview Project Locally

Run the following command to launch the project locally.

    1npm run dev

Open the following link in your browser window:

    1http://127.0.0.1:8080/

You should see a page like this:

![hello world](https://i.ibb.co/KWctWj4/local-preview.png)

### Build Project for Production

    1npm run build

Deploy to Heroku
----------------

Create an account on [Heroku](https://www.heroku.com/) and confirm your email address.

Install Heroku CLI:

    1npm install -g heroku

Confirm that the Heroku CLI is installed by running:

    1heroku --version

You should see your Heroku CLI version.

Log in to Heroku by executing the command below.

    1heroku login

Running this command will open the Heroku site on your browser, where you can log in.

Set up a Git repository in the project root.

    1git init

Ignore Node modules in Git.

    1touch .gitignore

Add the following line to the file:

    1node_modules

    1git add .

    1git commit -m "initial commit"

Create a Heroku app.

    1heroku create

Publish to Heroku.

    1git push heroku master

Once the build succeeds, you can go to your Heroku apps [dashboard](https://dashboard.heroku.com/apps) and open your app or open the link in your console.

Once you open the link, your app should look like this:

![Build preview](../../pluralsight2.imgix.net/guides/237fcc49-d941-4e15-abb0-40500c4c5625_build-preview.html)

All done!

### Conclusion

Mastery of this skill is vital in roles such as frontend development and devOps leaning towards frontend projects.

You can learn more about webpack at the webpack official documentation [website](https://webpack.js.org/). You can also learn more about deploying apps on Geroku [here](https://devcenter.heroku.com/articles/git#:~:text=To%20deploy%20your%20app%20to,heads%2Fmaster'%20...).

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

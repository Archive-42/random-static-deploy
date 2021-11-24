<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Require Material-UI by Webpack
==============================

### Gaurav Singhal

-   Nov 5, 2020
-   5 Min read
-   2,951 Views

-   Nov 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   2,951 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-installandgetstartedwithmaterialui" class="menu-link">Install and Get Started with Material-UI</a>
-   <a href="#module-importmaterialuicomponentsusingwebpack" class="menu-link">Import Material-UI Components Using Webpack</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React does not have its own UI elements/components, but you can use any third-party UI framework. These frameworks provides a bunch of components for the UI requirements.

The Material-UI is one of the popular UI frameworks designed for React, and contains various ready-to-integrate components. Still, if you use a webpack, then it should be configured while using webpack configuration. This guide will demonstrate how to use Material-UI and its various components configured with webpack.

Install and Get Started with Material-UI
----------------------------------------

The initial step to getting started with Material-UI is to install the package using the below command.

    1npm install @material-ui/core

shell

After completing the installation, the next step is to import the useful component from Material-UI and use it in any React component. This example uses the <span class="jsx-3120878690">`Breadcrumbs`</span> functionality.

    1import Typography from '@material-ui/core/Typography';
    2import Breadcrumbs from '@material-ui/core/Breadcrumbs';
    3import Link from '@material-ui/core/Link';
    4
    5function App() {
    6  return (
    7    <div className="App">
    8      <Breadcrumbs aria-label="breadcrumb">
    9        <Link color="inherit" href="/">
    10          Parent Page
    11      </Link>
    12        <Link color="inherit" href="/">
    13          Child Page
    14      </Link>
    15        <Typography color="textPrimary">Current Page</Typography>
    16      </Breadcrumbs>
    17    </div>
    18  );
    19}
    20
    21export default App;

jsx

The above file imports the <span class="jsx-3120878690">`BreadCrumbs`</span> component from <span class="jsx-3120878690">`material-ui`</span> and uses it in the render function, and requires child components and props. The above approach is the simplest way to get started with Material-UI in no time. However, if you are using a custom webpack configuration, you need to follow some additional configuration.

Import Material-UI Components Using Webpack
-------------------------------------------

The webpack configuration depends on resolving modules based on the path from which it's referenced. There are multiple ways to require Material-UI or other such libraries, and one of them is the *module resolving* approach along with <span class="jsx-3120878690">`eslint`</span>.

Using the <span class="jsx-3120878690">`eslint`</span>, specify the module path or require it into the webpack config.

    1{
    2  "rules": {
    3    "no-restricted-imports": [
    4      "error",
    5      {
    6        "patterns": ["@material-ui/*/*/*"]
    7      }
    8    ]
    9  }
    10}

js

After configuring the above settings, any false import statement gets highlighted as a false import statement.

If you want to try different plugins, other plugins are available to include the Material-UI and its respective packages:

-   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
-   [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)

Before using any of the above libraries, you need to create the file <span class="jsx-3120878690">`.babelrc.js`</span> in your React app's root directory.

**.babelrx.js**

    1const plugin = [
    2  [
    3    'babel-plugin-transform-imports',
    4    {
    5      '@material-ui/core': {
    6        'transform': '@material-ui/core/${member}',
    7        'preventFullImport': true
    8      }
    9    }
    10  ]
    11];
    12
    13module.exports = {plugin};

js

The above example imports the <span class="jsx-3120878690">`@material-ui/core`</span> library and provides transformation to import the package members such as <span class="jsx-3120878690">`Button`</span>, <span class="jsx-3120878690">`Breadcrumbs`</span>, etc.

    1import Breadcrumbs from ‘@material-ui/core/Breadcrumbs’;

jsx

The webpack transformed import helps you require the only valuable part of the module rather than importing the whole package and resolving the specific module.

    1import { Breadcrumbs } from ‘@material-ui/core’;

jsx

The above statement will import the complete library packages and will resolve <span class="jsx-3120878690">`Breadcrumbs`</span> at the time of compilation, so the module resolver comes in handy when you want to decrease the overall bundling efforts.

You can also use <span class="jsx-3120878690">`webpack.resolve`</span> to resolve the given path's exact match.

    1module.exports = {
    2  //...
    3  resolve: {
    4    alias: {
    5      abcd$: path.resolve(__dirname, 'path/to/file_name.js')
    6    }
    7  }
    8};

js

The above config will resolve the path to the normal path from where it gets imported.

    1import file1 from 'folder1'; // Path resolved
    2import file2 from 'folder2/file.js'; // Not matched and resolved

jsx

The <span class="jsx-3120878690">`file1`</span> is an exported member of the <span class="jsx-3120878690">`folder1`</span> location. Hence, it will get resolved based on the specified path resolver, and <span class="jsx-3120878690">`file2`</span> will not get resolved because it’s trying to resolve against the specific path.

Conclusion
----------

Material-UI is a great UI framework for React apps, and using it with the webpack allows you to minimize bundling size by implementing a custom import statement resolver.

You can use module resolver libraries such as <span class="jsx-3120878690">`babel-plugin-transform-imports`</span> to define the concrete standard to import any external libraries and resolve them efficiently. If you have any queries, feel free to ask at [Code Alphabet](https://www.codealphabet.com/contact).

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

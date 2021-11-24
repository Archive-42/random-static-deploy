<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Pull and Build a React App Created via create-react-app from GitHub
===================================================================

### Zachary Bennett

-   Oct 23, 2020
-   3 Min read
-   3,599 Views

-   Oct 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">3 Min</span> read
-   3,599 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-pullingandbuildingaprojectcreatedwithcreatereactapp" class="menu-link">Pulling and Building a Project Created With create-react-app</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The create-react-app tool is the best way to get started with a new React app. Instead of needing to bring in related dependencies, bundlers, etc. into your new project, create-react-app abstracts all of that away so that you can easily get started writing code. If you desire more fine-grained control, you can "eject" from the create-react-app environment and manage the inner workings yourself. But for many apps, letting create-react-app abstract away all of the build configurations is an enormously helpful timesaver.

In this guide, you will learn how to identify, pull, and then build a React app that has been created using create-react-app.

Let's get started!

> Note: This guide assumes that you have a Node version &gt;= v8.10, an NPM version &gt;=5.2, and the git command-line tool installed on your machine.

Pulling and Building a Project Created With create-react-app
------------------------------------------------------------

You will know that an app has been created using create-react-app when you can find the package <span class="jsx-3120878690">`react-scripts`</span> in the <span class="jsx-3120878690">`package.json`</span> file of the project. If you see this dependency, you can almost be certain that the project was built using create-react-app. Another hint can be found by looking for the <span class="jsx-3120878690">`"eject"`</span> script located within the scripts section of the <span class="jsx-3120878690">`package.json`</span> as this is an NPM script that ejects the app from the create-react-app environment.

Now that you know how to identify a create-react-app, you can use git to pull the project from GitHub. This step entails simply navigating to the project's repository on GitHub, selecting the remote URL from within the green **Code** dropdown, and then running <span class="jsx-3120878690">`git clone <project's remote repo                                       url>`</span> on your local machine. This command will clone down a local version of this remote project.

With your project pulled, you're ready to start building. There are two ways to build an app created with create-react-app. You can do a development build or a production build. The development build can be started by running <span class="jsx-3120878690">`npm start`</span>. This will bring up a local server containing the development version of the app and will automatically refresh when you change the source code.

For a production build, you simply need to run <span class="jsx-3120878690">`npm run build`</span>. This command will build a production-ready version of the app that is ready to be deployed.

To recap:

Development Build:

    1npm start

Production Build:

    1npm run build

> Note: If these commands do not exist, it is likely that the specific project you are looking at has customized their scripts. In this case, you will need to make sure to read the relevant GitHub README.md file in order to understand which commands build the project.

Conclusion
----------

Pulling and building an app that was created via create-react-app is easy! There are just two simple scripts that let you build development and production versions of the app. This is probably why create-react-app is now officially supported by Facebook when it comes to using a tool to bootstrap new React apps.

For more information regarding create-react-app and how to interface with it, please check out the relevant create-react-app [documentation](https://create-react-app.dev/docs/getting-started/#get-started-immediately).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

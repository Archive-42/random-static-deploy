<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Resolve NPM Error When Installing TODO-MVC Tutorial in ReactJS
==============================================================

### Gaurav Singhal

-   Oct 26, 2020
-   4 Min read
-   149 Views

-   Oct 26, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   149 Views

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
-   <a href="#module-installingtodomvctutorialinreactjs" class="menu-link">Installing TODO-MVC Tutorial in ReactJS</a>
-   <a href="#module-downloadingandinstallingflux" class="menu-link">Downloading and Installing Flux</a>
-   <a href="#module-installingtodomvctutorial" class="menu-link">Installing TODO-MVC Tutorial</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The TODO-MVC tutorial is an official example application that you can use, edit, or modify to learn the basics of Flux. However, the documentation isn't always developer-friendly, so you can run into errors when installing the TODO-MVC tutorial on your own. The key to avoiding any kind of installation error is running all the commands from the relevant directory instead of the root directory. This guide walks you through step-by-step installation of the TODO-MVC tutorial in ReactJS.

Installing TODO-MVC Tutorial in ReactJS
---------------------------------------

This guide follows the same commands and steps as dictated by TODO-MVC's official documentation, which you can find on their official GitHub repository at <https://github.com/facebook/flux/tree/master/examples/flux-todomvc>.

Downloading and Installing Flux
-------------------------------

The first step is to download Flux. Flux is an architectural pattern developed by Facebook itself for handling state management in React apps. It solves the same problems that Redux or Context API do by giving you a simple model for handling the data you need to pass and share between components. Since the TODO-MVC tutorial is an example based on Flux, this example project lies inside the Flux repository and you need to download and install Flux first. In an empty directory, clone the entire Flux repository locally using the following command:

    1git clone https://github.com/facebook/flux.git 

shell

This will download a local version of Flux to your system. Next, install all the dependencies by running the following command inside the root directory of Flux:

    1npm install 

shell

Installing TODO-MVC Tutorial
----------------------------

The next step is essential for installing the TODO-MVC tutorial, and this is where you might run into an error. You need to navigate inside the <span class="jsx-3120878690">`flux-todomvc`</span> directory, which is present inside the <span class="jsx-3120878690">`examples`</span> folder nested two levels in the root directory. All Flux tutorials are located inside this <span class="jsx-3120878690">`examples`</span> directory. Using the following command, navigate into the <span class="jsx-3120878690">`flux-todomvc`</span> directory:

    1cd examples/flux-todomvc 

shell

Now that you're in the correct directory, you can run all the npm commands correctly without running into any errors. Run the following command to install all dependencies required to run the TODO-MVC example:

    1npm install 

shell

You can open this example project by running the following command:

    1npm start 

shell

Alternatively, you can also see the example by opening the <span class="jsx-3120878690">`index.html`</span> file inside the <span class="jsx-3120878690">`flux-todomvc`</span> directory in the browser. It initially displays a starter message, and you can follow the official documentation for exploring the example further.

Conclusion
----------

For most example projects contained within a library, you need to properly run their installation commands relative to a specific directory other than the root directory. This helps to avoid unnecessary errors in installing example projects and tutorials that may detour you from learning more about that library. Sometimes even popular libraries have unclear documentation, but community support helps out. You can post an issue on an official GitHub Repository to get a quick response from core developers, moderators of the library, or the open-source community.

TODO-MVC tutorial is a relevant example that helps you understand the basics of Flux by building something useful. You can explore more such example tutorials inside the <span class="jsx-3120878690">`examples`</span> directory and follow their documentation to learn about each.

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

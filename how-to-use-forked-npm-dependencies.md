<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

How to Use Forked NPM Dependencies in React
===========================================

### Zachary Bennett

-   Oct 10, 2020
-   4 Min read
-   6,692 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   6,692 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-usingaforkednpmdependency" class="menu-link">Using A Forked NPM Dependency</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When using open-source software in your project, odds are you will run into an NPM dependency that doesn't do *quite* what you want it to. This dependency may be the 95% solution to the problem you're looking for, but maybe it is missing a feature that you need or has a bug that needs to be worked around for your use case. So what do you do in these types of situations? If your team doesn't have time to create your own custom solution to the problem, many times it is best to create a pull request to the repo in question. This can work very well in projects that are actively maintained, but it can sometimes take *months* or even *years* before some pull requests are merged into a project.

One way you can work around this limitation is to create your own fork of the project. You can change the project's code to your heart's delight and add that feature or fix that bug. Once complete, you can submit your pull request to the upstream open-source project ... but while you wait for this pull request to get merged, did you know that you can use the code within your fork *now* simply by altering your package.json file? In this guide, you will learn how to do just that!

Let's dive in.

Using A Forked NPM Dependency
-----------------------------

In order to install a forked dependency into your project or app, you first need to create a fork! Creating a forked repository is very easy within GitHub. All you have to do is navigate to the repo of the project that you want to fork and select the **Fork** button. After you click this button, GitHub will create a copy of this repo within your user namespace. If the repo lived at <span class="jsx-3120878690">`user-name/custom-npm-dep`</span>, you now will have a new repo within your user namespace like this: <span class="jsx-3120878690">`<your-user-name>/custom-npm-dep`</span>.

With the project forked, the next step is to make code changes to facilitate the behavior you are looking for. Often, NPM projects have a <span class="jsx-3120878690">`CONTRIBUTING.md`</span> file that gives a detailed guide of how to successfully submit a pull request to the project. If this file exists, be sure to check it out!

After you've made the code changes that are needed, you are ready to submit a pull request. This can easily be done from within GitHub's UI. For more information and for a detailed guide, [check this out](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

Now you're in "pull request limbo"... Who knows how long it will take to get this pull request merged and for a new release of the dependency to come out?! But it's ok—there is a way around this waiting time. Let's take a look at an example <span class="jsx-3120878690">`package.json`</span> that is not using the forked project:

    1"dependencies": {
    2    "custom-node-dep": ^1.2.3
    3    ...
    4}

json

Currently, you are installing the <span class="jsx-3120878690">`custom-node-dep`</span> package directly from NPM. In order to use the fork, change this line in the configuration to:

    1"dependencies": {
    2    "custom-node-dep": "https://github.com/<your-user-name>/custom-node-dep.git"
    3    ...
    4}

json

The above configuration changes the version number of the <span class="jsx-3120878690">`custom-node-dep`</span> project to a direct link to the source code. If the project in question is a library that is well set up with a <span class="jsx-3120878690">`prepublish`</span> command, this is all you will need to do! However, if the project is not being installed correctly, you might have to build it manually. You can achieve this by ensuring that all build files within the forked repo are not hidden from source control after you build. How you do this is specific to the forked project. Usually, an <span class="jsx-3120878690">`npm run build`</span> command is sufficient to build the project. Whatever directory the build files are outputted to, you will need to make sure to remove from the <span class="jsx-3120878690">`.gitignore`</span>. This will ensure that the <span class="jsx-3120878690">`package.json`</span> downloads all of the needed build files when you <span class="jsx-3120878690">`npm install`</span> your app's dependencies.

Conclusion
----------

And there you have it! Because NPM allows for direct downloading of packages from source control, you don't have to wait on pull requests to get merged, and your app can benefit from custom code changes *now*. This capability can allow your team to move fast to fix bugs coming from third-party dependencies.

For more information, check out the "dependencies" portion of the NPM [documentation](https://docs.npmjs.com/files/package.json#dependencies).

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

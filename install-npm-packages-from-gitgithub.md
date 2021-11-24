<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Install NPM Packages from GitHub
================================

### Pavneet Singh

-   Nov 9, 2020
-   4 Min read
-   41,300 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   41,300 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

30

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-installpackagesfromgithub" class="menu-link">Install Packages From Github</a>
-   <a href="#module-installprivatepackagesfromgithub" class="menu-link">Install Private Packages From Github</a>
-   <a href="#module-addtionalnpminstallationflags" class="menu-link">Addtional NPM Installation flags</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

NPM is a *node package management* tool used to download or publish node packages via the [npm package registry](https://npmjs.com/). It comes bundled with <span class="jsx-3120878690">`node.js`</span> setup. <span class="jsx-3120878690">`npmjs`</span> offers numerous open-source packages, such as Lodash, React, and Chalk to accelerate the development process.

Often, packages are not published on the <span class="jsx-3120878690">`npmjs`</span> registry, but they still can be used in a node project using the <span class="jsx-3120878690">`npm`</span> CLI tool. This guide explains the details of installing public and private NPM packages from GitHub.

Install Packages From Github
----------------------------

The <span class="jsx-3120878690">`npm`</span> command can install public packages from <span class="jsx-3120878690">`npmjs`</span> registry using the <span class="jsx-3120878690">`install`</span> command:

    1npm install package-name package-name2
    2# or 
    3npm i package-name package-name2

bash

Sometimes packages are not published on the <span class="jsx-3120878690">`npmjs`</span> registry, but it can still be installed using <span class="jsx-3120878690">`npm`</span>. The <span class="jsx-3120878690">`npm`</span> tool can access and install any public node project as a dependency from GitHub:

    1npm i https://github.com/user_name/node_project_name

bash

The <span class="jsx-3120878690">`npm`</span> command will try to install the package using <span class="jsx-3120878690">`git clone`</span>. The <span class="jsx-3120878690">`npm`</span> command can also install the package from different GitHub repository states using a <span class="jsx-3120878690">`commit`</span> hash value, which can be used to install the package with a commit id:

    1npm install use_name/node_project#commit

bash

> **Note:** The <span class="jsx-3120878690">`@`</span> symbol represents the <span class="jsx-3120878690">`npm`</span> scope, a technique to group all the dependencies of a user or org in a folder. A package name without <span class="jsx-3120878690">`@`</span> and with <span class="jsx-3120878690">`name\name`</span> pattern will be treated as a GitHub package repository.

The <span class="jsx-3120878690">`branch`</span> name can be used to install a branch as a package:

    1npm install use_name/node_project#branch_name

bash

Similarly, the <span class="jsx-3120878690">`tag`</span> or <span class="jsx-3120878690">`version`</span> names can be used to install a specific version of a GitHub package:

    1npm install use_name/[email protected] #user_name/[email protected]
    2npm install use_name/[email protected] #user_name/[email protected]

bash

<span class="jsx-3120878690">`gist`</span> can also be added using the id of a <span class="jsx-3120878690">`gist`</span>:

    1npm install gist/gist_id

bash

Install Private Packages From Github
------------------------------------

An <span class="jsx-3120878690">`npm`</span> package can be installed from a private GitHub repository using an SSH repository link. SSH links are only available to logged-in users and can be used to access the private repositories of your GitHub. The SSH protocol uses a public key cryptography algorithm to authenticate the command to access GitHub repositories, and [it needs to be configured with the GitHub account using the SSH keys](#). A private GitHub repository can be installed using the <span class="jsx-3120878690">`git+ssh`</span> as protocol:

    1npm install git+ssh://[email protected]:user_name/node_project.git

bash

> **Note:** A GitHub package must have a meaningful <span class="jsx-3120878690">`package.json`</span> file to be installed as a package.

Addtional NPM Installation flags
--------------------------------

The <span class="jsx-3120878690">`npm`</span> install command also provides many other features. For example, <span class="jsx-3120878690">`range`</span> can used to install a package with a given range for the version:

    1npm install use_name/node_project">=1.0.0 <=2.0.0"

bash

Versions are often based on [semver](https://semver.org/). <span class="jsx-3120878690">`--force`</span> will install a package from the remote package repository:

    1npm install pacakge_name --force

bash

<span class="jsx-3120878690">`global`</span> packages are installed in the [global npm package folder](https://docs.npmjs.com/files/folders), which is accessible to every project:

    1npm install pacakge_name -global

bash

The <span class="jsx-3120878690">`--ignore-scripts`</span> flag is used to skip the execution of <span class="jsx-3120878690">`npm-scripts`</span> block. And finally, the <span class="jsx-3120878690">`uninstall`</span> command is used to remove the dependencies from local projects, and the <span class="jsx-3120878690">`-g`</span> flag is used to remove global dependencies.

Tips
----

-   A specific branch can also be installed using:

    1https://github.com/{USER}/{REPO}/tarball/{BRANCH}

bash

-   Consider reading the repository license carefully before using any dependency.
-   Find useful insights on [npmtrends](https://www.npmjs.com/browse/depended).
-   Use the [Bit](https://docs.bit.dev/docs/quick-start) tool to distribute components from a project as a stand-alone package.
-   Use a short alias like <span class="jsx-3120878690">`npm i package-name`</span> with <span class="jsx-3120878690">`npm`</span> version 5 or above without the <span class="jsx-3120878690">`--save`</span> option. <span class="jsx-3120878690">`npm`</span> 5+ will automatically add the package as a dependency.

Conclusion
----------

The <span class="jsx-3120878690">`npm`</span> installation from GitHub is quite useful for testing packages. It also gives the flexibility to install any specific branch, version, tag, and so on. Happy coding!

30

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

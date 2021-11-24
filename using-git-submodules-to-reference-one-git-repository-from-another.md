<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Using Git Submodules to Reference One Git Repository from Another
=================================================================

### Benney Au

-   Oct 7, 2020
-   4 Min read
-   5,721 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   5,721 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">IT Infrastructure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">GitHub</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">DevOps Tools and Methodologies</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Source Control Management</span>

Introduction

18

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setuptherepository" class="menu-link">Set Up the Repository</a>
-   <a href="#module-addavimpluginusinggitsubmodule" class="menu-link">Add a VIM Plugin Using Git Submodule</a>
-   <a href="#module-updategitsubmodules" class="menu-link">Update Git Submodules</a>
-   <a href="#module-initializegitsubmodules" class="menu-link">Initialize Git Submodules</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When a code project becomes large in scope, it typically depends on external code that other teams or individuals have written. There are a few ways to incorporate external code into your own repository. A previous guide, [Referencing One Git Repository from Another](https://app.pluralsight.com/guides/reference-one-git-repository-from-another), covered how to use <span class="jsx-3120878690">`git subtree`</span> commands to nest one or many repositories inside another. Using *Git submodules* is an alternative way to incorporate a snapshot of one repository inside another. It can help you keep these repositories in sync without tedious and error-prone copy-pasting.

This guide covers this alternative approach using Git submodules and discusses how to perform some common operations with them.

### Dotfiles Example Use Case

This guide will use the same dotfiles example repository discussed in [Referencing One Git Repository from Another](https://app.pluralsight.com/guides/reference-one-git-repository-from-another) to illustrate the topic.

Set Up the Repository
---------------------

To get started using <span class="jsx-3120878690">`git submodules`</span>, initialize a repository in the usual way by creating a folder and committing it.

    1cd ~
    2mkdir dotfiles
    3cd dotfiles
    4git init
    5touch readme.md
    6git add . && git commit -m "initial commit"

Add a VIM Plugin Using Git Submodule
------------------------------------

With the root or parent repository created, we can start referencing other repositories using the <span class="jsx-3120878690">`git submodule`</span> command.

Run the following command:

    1git submodule add [email protected]:tpope/vim-dispatch.git vim/pack/start/dispatch -b main

This command adds the submodule and creates a new <span class="jsx-3120878690">`vim`</span> folder in your root repository. It is similar to the <span class="jsx-3120878690">`git subtree`</span> command where you specify the remote repository you would like to clone, the location where you would like it saved, and the branch you want to track.

One difference, however, from the <span class="jsx-3120878690">`git subtree`</span> is that a new <span class="jsx-3120878690">`.gitmodules`</span> file has also been created at the root. Its contents are displayed below. It is a mapping file between local submodules' location and their remote repository.

    1[submodule "vim/pack/start/dispatch"]
    2        path = vim/pack/start/dispatch
    3        url = [email protected]:tpope/vim-dispatch.git

These changes are not committed automatically, so you will have to separately commit them.

    1git add .
    2git commit -m "added vim dispatch submodule"

Update Git Submodules
---------------------

As the repositories you want to nest are updated with new features and bug fixes, you will want to incorporate them into your <span class="jsx-3120878690">`dotfiles`</span>. One small advantage of submodules over subtrees is that updating one or many repositories is simpler.

With submodules, you can automatically update all nested repositories with one command.

    1git submodule update --remote --merge

This will iterate through your <span class="jsx-3120878690">`.gitmodules`</span> file and pull the latest commits against the specified tracked branch. If there are updates, they won't be committed to the repository yet. This is useful since it gives you an opportunity to test the new code before committing to your own repository.

In contrast, when using <span class="jsx-3120878690">`git subtree`</span>, you will need to run the <span class="jsx-3120878690">`git subtree pull`</span> command for each nested repository or manually set up a script to do this. This can be tedious if you have several nested repositories.

Initialize Git Submodules
-------------------------

Finally, as you switch computers, you will want to clone your <span class="jsx-3120878690">`dotfiles`</span> repositories onto them, and you will also want the submodules. However, to do this, you need to run an additional command or pass a separate flag. <span class="jsx-3120878690">`git clone [repo]`</span> is insufficient.

If you haven't cloned your repository, remember to specify the <span class="jsx-3120878690">`--recursive`</span> flag:

    1git clone --recursive [email protected]:chinwobble/dotfiles.git

If the repository is already cloned, run the <span class="jsx-3120878690">`git submodule update`</span> command:

    1git submodule update --init --recursive

This is one of the major disadvantages of <span class="jsx-3120878690">`git submodules`</span>. It requires other users of your repository to perform extra actions that they wouldn't normally need to perform.

Conclusion
----------

Git submodules are another way to leverage Git as an external dependency management tool. Submodules have an additional learning curve over <span class="jsx-3120878690">`git subtree`</span> for your team, so it's important to consider whether your project actually needs them.

18

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

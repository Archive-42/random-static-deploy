<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Referencing One Git Repository from Another
===========================================

### Benney Au

-   Sep 28, 2020
-   5 Min read
-   5,167 Views

-   Sep 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   5,167 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">IT Infrastructure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">GitHub</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">DevOps Tools and Methodologies</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Source Control Management</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-dotfilesexampleusecase" class="menu-link">Dotfiles Example Use Case</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In a large organization, you may have dozens or even hundreds of Git repositories. These repositories may have common configuration and scripts, or you may be working in a C++ project where you need to compile several repositories from source code. How do you achieve this without copy-pasting files everywhere?

In this guide, you will learn about <span class="jsx-3120878690">`git subtrees`</span> as a solution to this problem. You will set up a repository and perform some common operations. A basic understanding of the git command line and GitHub is assumed knowledge for this guide. You can watch [GitHub Getting Started](https://app.pluralsight.com/library/courses/github-getting-started/table-of-contents) if you need a refresher.

**Note:** GitHub is in the process of changing its default branch name from <span class="jsx-3120878690">`master`</span> to <span class="jsx-3120878690">`main`</span>. This guide will use the term <span class="jsx-3120878690">`master`</span> branch since it is the current default branch name at the time of writing. You can learn more about this change by reading [GitHub's official documentation on renaming the default branch](https://github.com/github/renaming).

Dotfiles Example Use Case
-------------------------

Over a period of several years, you may find yourself working across dozens of different computers. You can keep the settings consistent across your various machines by creating a Git repository with your settings files saved inside. These settings are usually saved in files prefixed with a dot, e.g., <span class="jsx-3120878690">`.vimrc`</span>, <span class="jsx-3120878690">`.bashrc`</span>, etc. Therefore, this setting repository is named <span class="jsx-3120878690">`dotfiles`</span> by convention. As your <span class="jsx-3120878690">`dotfiles`</span> project progresses, you may want to use scripts and configuration that other people have created. You can leverage and contribute back to the open-source community by referencing these repositories inside your <span class="jsx-3120878690">`dotfiles`</span> using <span class="jsx-3120878690">`git subtrees`</span>.

One common use case is embedding VIM plugins that are published as GitHub repositories into your <span class="jsx-3120878690">`dotfiles`</span> repository.

### Set Up the Repository

To start using <span class="jsx-3120878690">`git subtrees`</span> in this way, first create a <span class="jsx-3120878690">`dotfiles`</span> repository.

    1cd ~
    2mkdir dotfiles
    3cd dotfiles
    4git init
    5touch readme.md
    6git add . && git commit -m "initial commit"

sh

Note that these are bash commands. If you are on Windows, you can execute them in <span class="jsx-3120878690">`git bash`</span>.

You have created a <span class="jsx-3120878690">`dotfiles`</span> repository with a blank readme file.

### Add a VIM plugin Using Git Subtree

Within your <span class="jsx-3120878690">`dotfiles`</span> project, create a folder <span class="jsx-3120878690">`vim/pack/github/`</span> to store your plugins. This folder structure is important so that VIM will automatically detect and run the plugin. You will place the contents of other git repositories inside this folder.

To do this, run the <span class="jsx-3120878690">`git subtree add`</span> command.

    1git subtree add --prefix vim/pack/github/vim-sensible [email protected]:tpope/vim-sensible.git master --squash

sh

This command will embed the master branch of [Tim Pope's VIM-sensible](https://github.com/tpope/vim-sensible) in your dotfiles. Also note that you used the <span class="jsx-3120878690">`--squash`</span> flag to compress the history. You can run this command several times to embed multiple repositories.

### Update Your VIM Plugin

With one or more subtrees, you may want to update to a specific branch or git tag. You can do this by running the <span class="jsx-3120878690">`git subtree pull`</span> command.

    1git subtree pull --prefix vim/pack/github/vim-sensible/ [email protected]:tpope/vim-sensible.git master --squash

sh

This creates a new commit and squashes any changes on top your <span class="jsx-3120878690">`dotfiles`</span> repository.

### Contributing Changes Back to the Nested Repositories

As a good open-source citizen, when you find and fix bugs you will want to share your fixes with the community. <span class="jsx-3120878690">`git subtree`</span> makes this easy since you don't need to separately check out that nested repository. To do this, you will perform the following steps: 1. Fork the nested repository, such as <span class="jsx-3120878690">`vim-sensible`</span>, on GitHub. 2. Commit changes in your <span class="jsx-3120878690">`dotfiles`</span> repository. 3. Run the below command to push to your fork.

    1git subtree push --prefix vim/pack/github/vim-sensible/ [email protected]:chinwobble/vim-sensible.git issue-xxx

sh

1.  Create a pull request on the nested repository
2.  Pull the newest of the remote into your <span class="jsx-3120878690">`dotfiles`</span>.

Note that when pushing, you changed the remote to your own fork and you are pushing to a new branch, in the example above, it's <span class="jsx-3120878690">`issue-xxxx`</span>. If you are working on a GitHub issue, you may want to use the issue number as the branch name.

Conclusion
----------

<span class="jsx-3120878690">`git subtree`</span> is a good option to nest one repository in another. It does not require users to learn extra commands to access the nested repositories. You can learn more about this feature by reading [About Git subtree merges](https://docs.github.com/en/github/using-git/about-git-subtree-merges).

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

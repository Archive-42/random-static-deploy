<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Understanding and Using Git's index.lock File
=============================================

### Zachary Bennett

-   Oct 21, 2020
-   4 Min read
-   14,721 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   14,721 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

20

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatistheindexlockfile" class="menu-link">What is the Index.Lock File?</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Git is the de facto standard when it comes to source control. Boasting a powerful API, git is simple enough for most users and yet has a rich set of commands to help manage complex workflows. If you have been a user of git, you have probably seen an error message that looks something like this:

    1fatal: Unable to create '.git/index.lock': File exists.

This error alludes to the creation of an <span class="jsx-3120878690">`index.lock`</span> file within your hidden <span class="jsx-3120878690">`.git`</span> directory. In this guide, you will learn about the <span class="jsx-3120878690">`index.lock`</span> file, the purpose that it serves, and how you can resolve the error above.

Let's dive in!

> Note: This guide assumes you have a basic working knowledge of git and that you already have git installed on your machine.

What is the Index.Lock File?
----------------------------

On your local machine, the working internals of a git repository live inside of a hidden <span class="jsx-3120878690">`.git`</span> directory. Inside this directory lives all sorts of information that the git command-line tool interfaces with when you use it. Branch, commit, and sub-module information are just a few of the things that live within this repo.

Here's an example of what a <span class="jsx-3120878690">`.git`</span> directory might look like:

    1.git/
    2    hooks/
    3    info/
    4    logs/
    5    objects/
    6    refs/
    7    HEAD
    8    config
    9    description
    10    index
    11    packed-refs

A little known fact is that whenever you run a git process, git creates an <span class="jsx-3120878690">`index.lock`</span> file within the <span class="jsx-3120878690">`.git`</span> directory. For example, if you run the command <span class="jsx-3120878690">`git add .`</span> to stage all local changes within your current repository, git will create this <span class="jsx-3120878690">`index.lock`</span> file while the <span class="jsx-3120878690">`git add`</span> command is running:

    1.git/
    2    ...
    3    index.lock

Upon successful completion of the <span class="jsx-3120878690">`git add`</span> process, the <span class="jsx-3120878690">`index.lock`</span> file is removed. What this does is ensure that simultaneous changes to your local git repo do not occur, as this would cause your git repo to be in an indeterminate state. The <span class="jsx-3120878690">`index.lock`</span> file prevents changes to your local repository from happening from outside of the currently running git process so as to ensure multiple git processes are not altering or changing the same repository internals at the same time.

    1fatal: Unable to create '.git/index.lock': File exists.

So it makes sense that the error above is essentially telling you, "Hey, a git process is running in this git repo—you will have to wait to run the command you are attempting to run." However, it may be that there is no git process running! Sometimes, for whatever reason, a git process will not end gracefully. There are a number of reasons why this would happen. In this case, you can resolve the problem simply by removing the <span class="jsx-3120878690">`index.lock`</span> file manually via this command or a similar command on your operating system: <span class="jsx-3120878690">`rm .git/index.lock`</span>.

Conclusion
----------

Git is a ubiquitous tool for source control and contains many powerful mechanisms for helping to facilitate developer workflows. Git uses the <span class="jsx-3120878690">`index.lock`</span> file to ensure transactional transparency within local repositories. By creating an <span class="jsx-3120878690">`index.lock`</span> file when a git process starts and failing the process if this file already exists, git can ensure that multiple git processes are not altering/reading the same internal repository information at the same time. This leads to a great safety guarantee when using git!

One more thing to think about is that you may find a use for creating an <span class="jsx-3120878690">`index.lock`</span> file yourself. If you have your own CLI tooling around your source code, it may make sense to lock down the internals within a local git repository.

For more information, check out the git [documentation](https://git-scm.com/doc).

20

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

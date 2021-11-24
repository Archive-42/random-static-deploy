<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Open a Pull Request via the GitHub API
======================================

### Zachary Bennett

-   Oct 2, 2020
-   4 Min read
-   6,019 Views

-   Oct 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   6,019 Views

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
-   <a href="#module-apioverviewandsetup" class="menu-link">API Overview and Setup</a>
-   <a href="#module-programmaticallycreatingapullrequest" class="menu-link">Programmatically Creating a Pull Request</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When working on new features or bug fixes within your app, using the GitHub UI to open pull requests can quickly become tedious. You have to navigate to the GitHub repo in question, select the branch you are trying to submit a pull request to, and then go through the further steps related to creating your pull request. The GitHub developer API aims to abstract all of this away into one simple HTTP call. This API can save you tons of time over the long term.

This guide will demonstrate how you can use the GitHub API to create your pull request for you by creating your own command line or UI in order to take away a bunch of the manual steps needed in this process.

Let's dive in!

API Overview and Setup
----------------------

The GitHub API is split into two big sections: REST and GraphQL. This guide will use the REST API, although the GraphQL API is a great alternative if you are used to working with GraphQL.

The first thing you need to do is install the <span class="jsx-3120878690">`@octokit/core`</span> NPM dependency. This is GitHub's core developer toolkit, and is the NPM package this guide will use to interact with GitHub's REST API. To install this dependency, navigate to your top-level project directory and run:

    1npm install --save-dev @octokit/core

bash

With this dependency installed, your next step will be to generate a personal access token so that your program can successfully authenticate with GitHub's REST API. To do this, navigate to [the token settings portion of your GitHub account](https://github.com/settings/tokens/new?scopes=repo) and follow the onscreen steps.

With your dependencies downloaded and your personal access token ready to go, it's time to start interacting with the GitHub API.

Programmatically Creating a Pull Request
----------------------------------------

The GitHub API provides a number of options for creating a pull request. You can view these options and the available configuration [here](https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#create-a-pull-request).

Now that you'r in your JavaScript code, it's time to see what this API can do!

> Note: Don't forget to keep your authorization token a secret! Don't check your token into source control!

    1import { Octokit } from "@octokit/core";
    2
    3const octokit = new Octokit({ auth: 'your-token!' }),
    4        owner = 'test-user',
    5         repo = 'test-repo',
    6        title = 'My Test Pull Request',
    7        body  = 'This pull request is a test!',
    8        head  = 'my-feature-branch',
    9        base  = 'develop-branch';
    10
    11const response = await octokit.request(
    12    `POST /repos/{owner}/{repo}/pulls`, { owner, repo, title, body, head, base }
    13);

javascript

Wow, that was really simple! As you can see, first you need to import the <span class="jsx-3120878690">`Octokit`</span> class from GitHub's developer API project. Once you instantiate an instance of the <span class="jsx-3120878690">`Octokit`</span> class with your personal access token, you can then use the <span class="jsx-3120878690">`request`</span> method to open a new pull request. The above example uses a lot of the options that are available for this particular API request. The following list is a breakdown of the most common options to use:

-   owner: A required option that specifies the username of the owner of the repo
-   repo: A required option, this is the repo name in question
-   head: A required option that gives the API the name of the branch that contains your changes
-   base: A required option that gives the API the name of the branch that you are attempting to alter
-   title: This option is not required. This is the title of your pull request.
-   body: This option is not required. This is the pull request description.

After running the above code, you can now navigate to the GitHub repo in your browser and see your submitted pull request!

Conclusion
----------

The GitHub developer API provides a rich layer of capabilities for interacting programmatically with your GitHub codebase. There's much more available to you then just simply creating a pull request too! I encourage you to check out [the GitHub REST API documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference) to see the plethora of options you have available.

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

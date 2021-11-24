<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Fetching Most Recent Commits from All Repos Using the GitHub API
================================================================

### Zachary Bennett

-   Oct 7, 2020
-   5 Min read
-   6,744 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   6,744 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-apioverviewandsetup" class="menu-link">API Overview and Setup</a>
-   <a href="#module-fetchingthefivemostrecentcommits" class="menu-link">Fetching the Five Most Recent Commits</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The GitHub Developer API is a powerful and robust means by which you can boost productivity. Using this API, you can create time-saving CLI and UI developer tooling for your team. One way the GitHub Developer API can save you time and enable you to create powerful custom tooling is via its commit API. For example, let's say that you have a custom, automated process that runs on your codebase, and this process needs to run based on the messages of a Git commit. The GitHub API enables a tool like this to work!

This guide will demonstrate how you can use the GitHub API to fetch the five most recent Git commits to a repository from within a React app.

Let's dive in!

API Overview and Setup
----------------------

The GitHub API is split into two big sections: REST and GraphQL. This guide will use the REST API, although the GraphQL API is a great alternative if you are used to working with GraphQL.

The first thing you need to do is install the @octokit/core NPM dependency. This is GitHub's core developer toolkit and is the NPM package this guide will use to interact with GitHub's REST API. To install this dependency, navigate to your top-level project directory and run:

    1npm install --save-dev @octokit/core

bash

With this dependency installed, your next step will be to generate a personal access token so that your program can successfully authenticate with GitHub's REST API. To do this, navigate to the [token settings portion](https://github.com/settings/tokens/new?scopes=repo) of your GitHub account and follow the onscreen steps.

With your dependencies downloaded and your personal access token ready to go, it's time to start interacting with the GitHub API.

Fetching the Five Most Recent Commits
-------------------------------------

When it comes to fetching a list of commits, the GitHub API gives you a number of API parameters that you can work with. Below is a list of available options to use with this portion of the API:

-   owner: A required option that specifies the username of the owner of the repo
-   repo: A required option, this is the repo name in question
-   sha: Interestingly enough, this option can be a git commit SHA or the name of a branch. This option defaults to the repo's default branch.
-   path: Allows you to filter commits that contain this file path
-   author: This option will filter the returned commits by author username or email address
-   since: This filters out all commits that have occurred before the given date
-   until: The opposite of 'since', this filters out all commits that have occurred after the given date
-   per\_page: Here you can specify the number of results per page. The max is 100 commits per page!
-   page: This option allows you to specify a page number to access results. It is helpful when you are operating on over 100 commits.

The GitHub developer API provides a rich layer of capabilities for interacting programmatically with your GitHub codebase. There's much more available to you than simply listing Git commits, too! I encourage you to check out the GitHub REST API documentation to see the plethora of options you have available.

Now that you're in your React code, it's time to see what this API can do!

> **Note:** Don't forget to keep your authorization token a secret! Don't check your token into source control!

    1import { Octokit } from "@octokit/core";
    2
    3function CommitListComponent() {
    4  const [commits, setCommits] = useState([]);
    5  const octokit = new Octokit({ auth: 'your-token!' });
    6
    7
    8  useEffect(() => {
    9    const owner = 'test-user',
    10                 repo = 'test-repo',
    11           perPage = 5;
    12
    13    const fiveMostRecentCommits = await octokit.request(
    14        `GET /repos/{owner}/{repo}/commits`, { owner, repo, per_page: perPage }
    15    );
    16
    17    setCommits(fiveMostRecentCommits);
    18  }, [])
    19
    20    return (
    21      <ul>
    22        {commits.map(commit => (
    23          <li key={commit.id}>
    24            {commit.author.name}: {commit.message}
    25          </li>
    26        ))}
    27      </ul>
    28    );
    29}

jsx

Wow, that was really simple! As you can see, first you need to import the Octokit class from GitHub's developer API project. Once you instantiate an instance of the Octokit class with your personal access token, you can then use Octokit's <span class="jsx-3120878690">`request`</span> method to start listing commits!

This particular React component requests the five most recent Git commits from the GitHub API and then simply displays the author name and commit message in a list. You can easily see how this could be expanded to request commits between certain dates or commits from a list of all repositories from a given author. The possibilities of the API are truly immense.

Conclusion
----------

The GitHub developer API provides a rich layer of capabilities for interacting programmatically with your GitHub codebase. Please check out the [GitHub REST API documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference) to see the plethora of options you have available. I hope that this guide has helped you to envision how you can use the Github API in your own projects to save you and your team valuable time and effort.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

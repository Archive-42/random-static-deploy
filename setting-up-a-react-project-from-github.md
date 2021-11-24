<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Setting Up a React Project from GitHub
======================================

### Pavneet Singh

-   Oct 20, 2020
-   8 Min read
-   15,246 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   15,246 Views

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
-   <a href="#module-basictermsandcommandofgit" class="menu-link">Basic Terms and Command of Git</a>
-   <a href="#module-prerequisite" class="menu-link">Prerequisite:</a>
-   <a href="#module-clonearepositoryusingsshlink" class="menu-link">Clone a Repository Using SSH Link</a>
-   <a href="#module-clonearepositoryusinghttplink" class="menu-link">Clone a Repository Using HTTP Link</a>
-   <a href="#module-clonearepositoryusinggithubcli" class="menu-link">Clone a Repository Using GitHub CLI</a>
-   <a href="#module-alternativeoptionstosetuparepository" class="menu-link">Alternative Options to Set Up a Repository</a>
-   <a href="#module-runaclonedreactproject" class="menu-link">Run a Cloned React Project</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

GitHub is the most widely used hosting service provider for projects and files to manage data changes effectively. Apart from repository hosting, GitHub also offers many other services like <span class="jsx-3120878690">`gists`</span>, CI/CD integration, package publication, GitHub APIs, GitHub Pages, sponsors, and much more. The <span class="jsx-3120878690">`create-react-app`</span> tool automatically adds a <span class="jsx-3120878690">`.gitignore`</span> file that contains the names or patterns to ignore files/directories while pushing the code to the GitHub server. <span class="jsx-3120878690">`git`</span> and <span class="jsx-3120878690">`GitHub`</span> are widely used to develop software in a collaborative environment. This guide explains the details of setting up a React project from a GitHub repository using different methods.

Basic Terms and Command of Git
------------------------------

There is some important terminology related to <span class="jsx-3120878690">`git`</span> files and commands that are required to understand how <span class="jsx-3120878690">`git`</span> works:

-   <span class="jsx-3120878690">`git`</span> is a tool to manage the history of a project using <span class="jsx-3120878690">`git`</span> commands. The history details are stored in a hidden directory named <span class="jsx-3120878690">`.git`</span>.
-   <span class="jsx-3120878690">`repository`</span> is a conventional name of a <span class="jsx-3120878690">`git`</span> project hosted on the GitHub server.
-   <span class="jsx-3120878690">`.gitignore`</span> files contain the names (or patterns) of the files or directories that will neither be tracked nor uploaded to a GitHub repository by <span class="jsx-3120878690">`git`</span>.
-   <span class="jsx-3120878690">`remote`</span> is the command used to add SSH or HTTPS URL links of a GitHub repository.
-   <span class="jsx-3120878690">`origin`</span> is just a conventional name for a GitHub repository URL.
-   <span class="jsx-3120878690">`staged`</span> can be visualized as a bucket of files or directories whose changes are ready to be stored. The <span class="jsx-3120878690">`add`</span> command is used to stage changes.
-   <span class="jsx-3120878690">`commit`</span> is used to store the state of all the staged files with an optional message.
-   <span class="jsx-3120878690">`pull`</span> is used to copy the code from a remote branch in the current project.
-   <span class="jsx-3120878690">`push`</span> is used to move the committed changes to a remote repository.

Prerequisite:
-------------

Install the following tools to set up a GitHub project:

-   The <span class="jsx-3120878690">`git`</span> tool is used to set up an environment to execute <span class="jsx-3120878690">`git`</span> commands, so [download and install the git tool](https://git-scm.com/downloads).

Optional

-   <span class="jsx-3120878690">`Putty`</span> is a tool for windows to generate SSH keys. Download and install the [Putty tool](https://www.putty.org/) as per your Windows OS type (32 or 64).

Clone a Repository Using SSH Link
---------------------------------

Cloning is the process of creating a local copy of a remote repository. A GitHub repository can be cloned using an SSH or HTML link. [SSH](https://en.wikipedia.org/wiki/Ssh_(Secure_Shell)) is a protocol to securely communicate with a server using a handshake mechanism and [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) technique. A secure connection allows you to execute <span class="jsx-3120878690">`git`</span> instructions from the command line (terminal) without confirming GitHub credentials for every push/pull operation.

Follow the below steps to create an SSH public/private key pair and add the public key to the <span class="jsx-3120878690">`GitHub`</span> account:

### 1. Add GitHub account details

<span class="jsx-3120878690">`git`</span> maintains a global and local (per project) configuration file that is used to store required details like email, user-name, editing software, etc. Update the value of your GitHub account user name and email in the <span class="jsx-3120878690">`git`</span> configuration file:

    1git config --global user.name "Your name here"
    2git config --global user.email "[email protected]"

bash

### 2. Generate SSH keys

SSH keys can be generated using <span class="jsx-3120878690">`git`</span> bash or the [Putty tool](https://www.putty.org/) to generate keys. Follow the below steps to generate SSH keys on Mac or Linux:

If an SSH key already exists then you can use the existing key.

-   Generate SSH Keys using <span class="jsx-3120878690">`ssh-keygen`</span>:

        1ssh-keygen -t rsa -C "[email protected]"

    bash

    Press enter for every input to generate the key.

    > A <span class="jsx-3120878690">`passphrase`</span> can be used to provide an extra layer of security to SSH keys. If a passphrase if used then <span class="jsx-3120878690">`git`</span> will prompt to enter the <span class="jsx-3120878690">`passphrase`</span> before using the SSH key, although <span class="jsx-3120878690">`passphrase`</span> can be saved in <span class="jsx-3120878690">`ssh-agent`</span> like key-chain access to automatically provide the value of the <span class="jsx-3120878690">`passphrase`</span>.

-   Copy the generated SSH key:
        1# Mac
        2pbcopy < ~/.ssh/id_rsa.pub

    bash

    On Linux, get the content of the SSH key using the <span class="jsx-3120878690">`cat`</span> command:
        1cat < ~/.ssh/id_rsa.pub

    bash

    For Windows, the key can be generated using <span class="jsx-3120878690">`git`</span> <span class="jsx-3120878690">`bash`</span> (or putty), so open the <span class="jsx-3120878690">`git`</span> <span class="jsx-3120878690">`bash`</span> console and type:

    1ssh-keygen -t rsa

bash

Now copy the content of <span class="jsx-3120878690">`your_home_directory/.ssh/id_rsa.pub`</span> file.

### 3. Add SSH to GitHub account

Open settings from the profile icon, select **SSH and GPG keys**, and add the copied SSH key: ![save ssh key to GitHub](../../pluralsight2.imgix.net/guides/ca46ddca-74d9-404a-9240-76343163e13a_Screenshot_2020-10-08_at_4.28.48_PM.html)

### 4. Clone Project

Use the <span class="jsx-3120878690">`git clone`</span> command to clone the project in the current directory, using an <span class="jsx-3120878690">`SSH`</span> link:

    1git clone [email protected]:/UserName/RepoName.git

bash

> An SSH link of a GitHub repository can be only be retrieved via a logged-in GitHub account.

Clone a Repository Using HTTP Link
----------------------------------

An HTTP URL is used to clone any public or private repository from a GitHub account. The major drawback of using an HTTP URL is that <span class="jsx-3120878690">`git`</span> will ask for a user-name and password for authentication before performing any operation on a GitHub repository. To clone a GitHub repository, copy the HTTP URL of the GitHub repository ![copy ssh key](../../pluralsight2.imgix.net/guides/5b07ac87-b618-4d23-bd9a-f0f76bb9d2c6_9._manage_node_modules_with_github_2.html)

execute the <span class="jsx-3120878690">`clone`</span> command:

    1git clone https://github.com/UserName/RepoName.git

bash

Clone a Repository Using GitHub CLI
-----------------------------------

The [GitHub CLI](https://github.com/cli/cli) brings capabilities of GitHub web UI to the command line to perform operations like creating a pull request, track issues, fork a repository, etc. Use the <span class="jsx-3120878690">`auth`</span> command to authenticate the account and clone the project using the <span class="jsx-3120878690">`clone`</span> command:

    1gh auth login
    2gh repo clone UserName/RepoName

bash

-   The <span class="jsx-3120878690">`auth`</span> command can take a <span class="jsx-3120878690">`--web`</span> flag to authenticate using a browser. It can also accept authentication token using a <span class="jsx-3120878690">`--with-token`</span> flag.

    1gh auth login --with-token < myGitHubToken.txt

bash

-   The <span class="jsx-3120878690">`clone`</span> a command allows to omit the current user name and can work with the repository name associated with the logged-in user account:

    1gh repo clone RepoName

bash

Alternative Options to Set Up a Repository
------------------------------------------

There are two other official ways to set up a GitHub repository:

1.  Use the download option to get a compressed file of a codebase and uncompress it.
2.  Install the [GitHub Desktop](https://desktop.github.com/) tool and choose the **Open with GitHub Desktop** option on a repository.

Run a Cloned React Project
--------------------------

The <span class="jsx-3120878690">`node_modules`</span> directory is not a part of a cloned repository and should be downloaded using the <span class="jsx-3120878690">`npm install`</span> command to download all the direct and transitive dependencies mentioned in the <span class="jsx-3120878690">`package.json`</span> file:

    1# make sure that you are in the root directory of the project, use" pwd" or "cd" for windows
    2cd RepoName
    3npm install

sh

It will take some time to download all the dependencies into a <span class="jsx-3120878690">`node_modules`</span> directory, and after the download completion, run the project:

    1npm start

sh

Tips
----

-   A <span class="jsx-3120878690">`node_modules`</span> directory can take up more than 200MB, so it should not be a part of a repository.
-   If <span class="jsx-3120878690">`node_modules`</span> is already a part of a repository then it can be removed using <span class="jsx-3120878690">`git rm -r --cached node_modules`</span> command, though make sure to commit and push the changes to the remote server first.

Conclusion
----------

A GitHub repository can be cloned using <span class="jsx-3120878690">`git`</span> and <span class="jsx-3120878690">`gh`</span> tools. Use an SSH key to auto-authenticate. There are many free software available to manage <span class="jsx-3120878690">`git`</span> projects. Try out the <span class="jsx-3120878690">`GitHub CLI`</span> tools to bring all the features of the GitHub UI to terminal. Happy coding!

30

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

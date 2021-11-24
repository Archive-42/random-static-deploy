<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/610746aa-87de-4de6-a275-4e28abe042ed.jpg" alt="Author avatar" class="jsx-3841407315" />

AJ Foster

Installing Elixir and Erlang With ASDF
======================================

### AJ Foster

-   Apr 19, 2021
-   5 Min read
-   8,227 Views

-   Apr 19, 2021
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   8,227 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Programming Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Elixir</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Software Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages, Frameworks, and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

Introduction

39

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-installasdf" class="menu-link">Install ASDF</a>
-   <a href="#module-installplugins" class="menu-link">Install Plugins</a>
-   <a href="#module-installerlangotp" class="menu-link">Install Erlang/OTP</a>
-   <a href="#module-installelixir" class="menu-link">Install Elixir</a>
-   <a href="#module-setversions" class="menu-link">Set Versions</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Many programming languages regularly release new versions that add or deprecate features, fix bugs, and introduce breaking changes. To help developers switch between versions easily, several language communities have version managers (like NVM for Node.js or Rbenv for Ruby). When you need to switch versions of multiple languages at once, however, the ASDF version manager ensures each project has the environment it needs.

This is especially important in Elixir projects, which require the Erlang runtime. In this guide, you'll learn how to install specific versions of Elixir and Erlang/OTP using the ASDF version manager on macOS or Linux.

Install ASDF
------------

The [ASDF version manager](https://github.com/asdf-vm/asdf) is a command-line tool that is available on GitHub. It uses <span class="jsx-3120878690">`curl`</span> and <span class="jsx-3120878690">`git`</span> to install various languages.

### Install Prerequisites

To install the <span class="jsx-3120878690">`curl`</span> and <span class="jsx-3120878690">`git`</span> utilities, run:

    1brew install coreutils curl git  # on macOS with Homebrew
    2sudo apt install curl git        # on Linux

shell

You can learn more about Homebrew on macOS [here](https://brew.sh/).

### Clone ASDF

With the prerequisites installed, now clone the ASDF project:

    1git clone https://github.com/asdf-vm/asdf.git ~/.asdf

shell

If you ever wish to remove ASDF, you can do so by removing <span class="jsx-3120878690">`.asdf`</span> from your home directory and undo the configuration changes described below.

### Configure Your Shell

Finally, include ASDF in your shell's configuration. For <span class="jsx-3120878690">`zsh`</span>, add the following to <span class="jsx-3120878690">`~/.zshrc`</span>:

    1. $HOME/.asdf/asdf.sh

shell

Alternatively, if you use <span class="jsx-3120878690">`oh-my-zsh`</span>, add <span class="jsx-3120878690">`asdf`</span> to your plugin configuration. To include ASDF in your configuration when using a different shell, consult the [documentation](https://asdf-vm.com/#/core-manage-asdf?id=install).

Install Plugins
---------------

ASDF uses a plugin system to support multiple languages. For a typical Elixir project, you will need the Elixir and Erlang plugins:

    1asdf plugin add erlang
    2asdf plugin add elixir

shell

If your project requires Node.js, you can also install the <span class="jsx-3120878690">`nodejs`</span> plugin.

Install Erlang/OTP
------------------

With ASDF and its plugins installed, you can now install Elixir and Erlang. If your project has a <span class="jsx-3120878690">`.tool-versions`</span> file with entries for <span class="jsx-3120878690">`elixir`</span> and <span class="jsx-3120878690">`erlang`</span>, you can install the correct versions by running the following from inside the project:

    1asdf install

shell

The <span class="jsx-3120878690">`.tool-versions`</span> file is much like <span class="jsx-3120878690">`.nvmrc`</span> and <span class="jsx-3120878690">`.ruby-version`</span> files, except that it lists the names and versions of multiple languages. In general, the names in this file should match the names of the language's plugin (e.g. <span class="jsx-3120878690">`nodejs`</span> for Node.js).

If you do not yet have a <span class="jsx-3120878690">`.tool-versions`</span> file, or want to install Elixir and Erlang globally, use the following to see a list of all available Erlang/OTP versions:

    1asdf list-all erlang
    2# ...
    323.2
    423.2.1
    523.2.2
    6# ...

shell

Unlike other version managers, ASDF requires you to specify a precise version of the language to install. To install version <span class="jsx-3120878690">`23.2.1`</span> of Erlang, run:

    1asdf install erlang 23.2.1

shell

**Warning**: This installation will take some time while it compiles Erlang from source.

Erlang will compile modules based on the available libraries from your system. For example, some features (such as the built-in observer) require <span class="jsx-3120878690">`wx`</span> libraries. You may see messages during the installation about omitted modules, which will not affect the rest of the runtime.

Install Elixir
--------------

Once the Erlang runtime is installed, you are ready to install Elixir. To see a list of all available versions, run:

    1asdf list-all elixir
    2# ...
    31.11.2
    41.11.2-otp-21
    51.11.2-otp-22
    61.11.2-otp-23
    7# ...

shell

Notice that each Elixir release has multiple versions compiled with different major versions of Erlang/OTP. To maximize compatibility between Elixir and the Erlang runtime, choose a <span class="jsx-3120878690">`-otp-XY`</span> version that matches the major version of the runtime you installed in the previous step. For example:

    1asdf install elixir 1.11.2-otp-23

shell

Installing Elixir takes significantly less time than installing Erlang/OTP.

Set Versions
------------

Now that you have Elixir and Erlang/OTP installed, you can save your chosen versions in a project. From the root of the project, run:

    1asdf local erlang 23.2.1
    2asdf local elixir 1.11.2-otp-23

shell

Replace the versions above with those you used during installation. This will create a <span class="jsx-3120878690">`.tool-versions`</span> file in your project, which will instruct ASDF which versions to use. If you'd like to set a global, or default, version, run:

    1asdf global erlang 23.2.1
    2asdf global elixir 1.11.2-otp-23

shell

This will create a <span class="jsx-3120878690">`.tool-versions`</span> file in your home directory. ASDF will use these versions whenever a project doesn't specify versions of its own.

Conclusion
----------

ASDF is a popular version manager for Elixir projects because it manages both Elixir and Erlang versions. Include a <span class="jsx-3120878690">`.tool-versions`</span> file in your projects to help contributors get up-and-running quickly, and don't forget to leverage the <span class="jsx-3120878690">`-otp-XY`</span> versions of Elixir for the best compatibility.

If you'd like to learn more about Elixir and what it can do for your next project, check out [Elixir: The Big Picture](https://app.pluralsight.com/library/courses/elixir-big-picture/) here on Pluralsight.

39

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

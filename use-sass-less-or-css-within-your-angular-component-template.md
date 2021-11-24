<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Use Sass, Less, or CSS Within an Angular Component Template
===========================================================

### Zachary Bennett

-   Oct 20, 2020
-   6 Min read
-   11,406 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   11,406 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Angular</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

Introduction

32

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-choosingdefaultstylesforangulartemplates" class="menu-link">Choosing Default Styles For Angular Templates</a>
-   <a href="#module-usingcss" class="menu-link">Using CSS</a>
-   <a href="#module-usingsass" class="menu-link">Using Sass</a>
-   <a href="#module-usingless" class="menu-link">Using Less</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Often it can be a pain integrating a CSS preprocessor into your web app. If you are using Webpack or another JavaScript bundler directly, you have to manually install plugins and set up the necessary configuration to facilitate the CSS preprocessor that you choose. The Angular framework handles all of this for you via the Angular CLI—one of the most powerful features of the Angular framework. When it comes to choosing a CSS preprocessor, the Angular CLI has you covered!

In this guide, you will learn how to both set up and use the Sass and Less preprocessors within your Angular app. Let's get started!

Choosing Default Styles For Angular Templates
---------------------------------------------

The Angular CLI can be downloaded onto your machine by running the following command using NPM:

    1npm install -g @angular/cli

bash

You can now use the <span class="jsx-3120878690">`ng`</span> command to access the CLI. To see a full listing of available commands, run <span class="jsx-3120878690">`ng -h`</span>. First, we need to bootstrap a new Angular project. This is as simple as running:

    1ng new my-app

bash

After running the command above, you will be prompted by the Angular CLI to choose a CSS preprocessor. Your choices are:

-   CSS (no preprocessor)
-   Scss
-   Sass
-   Less
-   Stylus

In the following sections, you will learn what it looks like to use CSS, Sass, or Less in your component templates.

Using CSS
---------

When you choose CSS, you are not using any CSS preprocessor. This means you are missing out on a lot of the incredibly useful features that preprocessors provide. Some of these include:

-   Built-in functions
-   Variables
-   Nesting/Parent Selectors
-   Mixins

... and more! However, using CSS means that you have one less dependency in your code. That's always a good thing!

Getting into CSS syntax is beyond the scope of this guide, however, you should know that when you use CSS or any of the other preprocessors with your Angular component template, your styles are encapsulated. This is incredibly powerful! Normally, when you write CSS code, the style declarations are applied application-wide in a cascading fashion. This means that you might accidentally write some styles in one part of your app and these styles might unknowingly bleed over into a totally unrelated portion of your app. Uh oh! Angular's ingenious way around this is to use view encapsulation via the Shadow DOM such that any styles you define within a component style file are guaranteed to only be applied to that portion of the DOM's subtree. This makes your life *much* easier when it comes to applying and debugging styles in your app.

Using Sass
----------

Sass stands for "Syntactically Awesome Style Sheets" and it is a fitting name! Sass removes many of the syntax requirements from CSS, like blocks and semicolons, and adds on a ton of new features for you to use. As you'll find with any preprocessor, probably the most useful feature of using Sass is variable creation. Variables in your Sass code allow you to remove a lot of duplicated code from your style sheets. In Sass, you declare a variable like this:

    1$my-gray: #888888

scss

You then can use it like this:

    1.navbar
    2    background-color: $my-gray

scss

Notice that in the Sass code above, indentation is used instead of blocks and semicolons. These are not required in Sass. This can be a good thing because it means less code for you to write, but it can be hard to get used to if you have been writing CSS for a long time.

Apart from variables, Sass allows you to nest style declarations. This makes your style much easier to read and can further reduce duplicated style sheet code.

    1.navbar
    2  background-color: $my-gray
    3
    4    ul
    5      list-style: none
    6
    7      li
    8        font-size: 12px

scss

This nesting can be incredibly powerful for your Stylesheet code!

When it comes to view encapsulation, the same rules apply for Sass as for CSS or any of the other CSS preprocessors that you choose. If you have view encapsulation turned on for your component, component styles will not bleed into other component styles.

There's so much more to Sass than what has been covered here. For more info, check out the Sass [documentation](https://sass-lang.com/documentation).

Using Less
----------

Less stands for "Leaner Style Sheets" and is another CSS preprocessor that the Angular CLI lets you use inside of your Angular component templates. When you choose this option, all of your generated component style files will end with the <span class="jsx-3120878690">`.less`</span> extension. Less is unique from Sass in that all valid CSS code is also valid Less code. This makes writing Less very easy to pick up if you already know CSS. In this section, you'll learn about some of the most powerful features of the Less preprocessor.

Arguably the most useful feature found in Less is variables. In a <span class="jsx-3120878690">`.less`</span> file, you define a variable like this:

    1@my-gray: #888888;

less

You can then use this variable throughout your stylesheet like this:

    1.navbar {
    2    background-color: @my-gray;
    3}

less

Apart from variables, Less also lets you define your own mixins, like Sass, and comes complete with a lot of built-in functions for you to use. For a full list of these built-in functions check out the [Less function list](http://lesscss.org/functions/#functions-overview).

As far as view encapsulation goes, Less works in the same way as Sass or CSS. As long as you are using the default component view encapsulation in the corresponding Angular component, your Less styles will only apply to the component they have been defined for.

There's so much more than what was briefly touched on above! To check out all of the features of the Less language, please visit the Less [documentation](http://lesscss.org/features/).

Conclusion
----------

Working with CSS, Less, or Sass in your Angular app is easier than in most other frameworks. With help from the CLI, Angular allows you to componentize your styles via its default view encapsulation.

As you may have noticed, the Angular CLI makes more preprocessors available to you than are covered in this guide. [Stylus](https://stylus-lang.com/) and [Scss](https://sass-lang.com/documentation/syntax) are two of these options. Scss is a great preprocessor to get started with if you already know CSS because all valid CSS is valid Scss as well. This makes it easy to write CSS and slowly add on features that you need.

32

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

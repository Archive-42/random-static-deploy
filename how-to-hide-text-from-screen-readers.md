<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/6a09bbcc-4892-4d50-a42e-421eb7b98d0c.jpg" alt="Author avatar" class="jsx-3841407315" />

Matt Ferderer

How to Hide Text from Screen Readers
====================================

### Matt Ferderer

-   Nov 12, 2020
-   4 Min read
-   11,017 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   11,017 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

11

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-commonscenarios" class="menu-link">Common Scenarios</a>
-   <a href="#module-methodstohidefromscreenreaders" class="menu-link">Methods to Hide from Screen Readers</a>
-   <a href="#module-trapstowatchoutfor" class="menu-link">Traps to Watch Out For</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#module-abouttheauthor" class="menu-link">About the Author</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

It's common to add text, links, and other elements to a website that you hide with CSS or JavaScript, but this can result in useability problems for screen readers and other devices.

A person using a screen reader might have trouble navigating your website if the content is skipped over. The person might also become frustrated if the content is repeated or confused if the content is out of place.

Two of the most common screen readers are [JAWS](https://www.freedomscientific.com/products/software/jaws/) and [NVDA](https://www.nvaccess.org/). The NVDA screen reader is free, while JAWS requires a license purchased.

This guide discusses common scenarios where you might want to hide content from a screen reader or show content only to a screen reader. The guide will also point out scenarios that cause trouble and additional resources to learn more about accessibility.

Common Scenarios
----------------

A website will often display a logo multiple times to reinforce a brand. But having a screen reader announce your company name each time might become an annoyance. It will also slow down screen reader users when they consume your content. Logos and other decorative images throughout a website may not add value to a person hearing the content of your website. These would be great situations to hide content from a screen reader.

In the opposite scenario, you might have content hidden visually but you want to make sure a screen reader will still read it. You might have special instructions for people without visual access. To solve for this, every website should have a "skip to main content" anchor link that allows a user to skip listening to less important sections of your page.

An additional scenario is to hide the content from everyone. Your website might require the user to perform an action before you display the content. An expand and collapse button, a read more button, or panels that toggle content fit both this scenario and the prior scenario, depending on how much text there is to show or how important that text it is.

Methods to Hide from Screen Readers
-----------------------------------

To hide text from a screen reader and display it visually, use the <span class="jsx-3120878690">`aria-hidden`</span> attribute and set it to true.

<span class="jsx-3120878690">`<p                                       aria-hidden="true">Visible                                       text screen readers should                                       ignore</p>`</span>

To hide text from a screen reader and hide it visually use the <span class="jsx-3120878690">`hidden`</span> attribute.

<span class="jsx-3120878690">`<p hidden>Hidden text screen                                       readers should also ignore</p>`</span>

You can also use CSS to set <span class="jsx-3120878690">`display: none`</span> or <span class="jsx-3120878690">`visibility: hidden`</span> to hide an element from screen readers and visually.

To show an element to a screen reader and hide it visually you need to use a CSS pattern to make the text appear off-screen or not fit into a one-pixel visible area. [WebAim](https://webaim.org/techniques/css/invisiblecontent/) offers two solutions.

Traps to Watch Out For
----------------------

If you use <span class="jsx-3120878690">`aria-describedby`</span> in the same element as <span class="jsx-3120878690">`aria-hidden="true"`</span> the screen reader may read it.

The <span class="jsx-3120878690">`aria-hidden`</span> attribute does not work on [focusable elements](https://www.w3.org/TR/using-aria/#fourth) such as form inputs, links, and buttons.

If you use <span class="jsx-3120878690">`aria-hidden`</span> on an element with child elements, the child elements will be hidden as well.

    1<div aria-hidden="true">
    2    <p>This element will is hidden from screen readers.</p>
    3<div>

html

Conclusion
----------

Putting time and effort into [accessibility benefits everyone!](https://www.pluralsight.com/courses/codemash-session-102) Accessibility helps with [Search Engine Optimization (SEO)](https://www.pluralsight.com/courses/semantic-html) and makes content more accessible even for people who don't use screen readers.

To learn more about accessibility, Pluralsight offers a great ["Getting Started" course](https://www.pluralsight.com/courses/developing-websites-accessibility-getting-started) and a course on [Web Accessibility Guidelines](https://www.pluralsight.com/courses/web-accessibility-meeting-guidelines).

You can also read the W3C's guidelines on [how to use ARIA.](https://www.w3.org/TR/using-aria/#fourth)

About the Author
----------------

Matt Ferderer is a software developer who [tweets](https://twitter.com/mattferderer), [posts](https://linkedin.com/in/mattferderer), and [blogs about web development](https://mattferderer.com/).

11

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

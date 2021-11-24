<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/330d16ca-90a4-4029-89e6-bf3ff9456993.jpg" alt="Author avatar" class="jsx-3841407315" />

Ashutosh Singh

Highlighting React Code in GitHub Flavored Markdown
===================================================

### Ashutosh Singh

-   Sep 25, 2020
-   7 Min read
-   2,597 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   2,597 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-insertingcode" class="menu-link">Inserting Code</a>
-   <a href="#module-highlightingcode" class="menu-link">Highlighting Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Since its release in 2004, Markdown has become one of the most popular markup languages. Technical writers widely use Markdown for blogs, articles, documentation, etc. because of its lightweight simplicity and cross-platform usage; even this guide is written in Markdown behind the scenes.

GitHub uses its own version of markdown known as *GitHub Flavored Markdown*, enabling users to interact with other users, reference issues, or pull requests. Even if your project or repository doesn't include any markdown or <span class="jsx-3120878690">`.md`</span> files, you will still have to use markdown for README, issues, pull requests, gists, etc.

Quite often, you will embed code snippets or blocks in Markdown. For example, embedding code when reporting a bug can save time and help the reviewers, maintainers, or anyone seeing that issue. You can also highlight code based on the programming language to improve the code's readability and context.

In this guide, we will discuss how to insert and highlight React code in GitHub Flavored Markdown.

Inserting Code
--------------

You can insert code in GitHub Flavored Markdown (GFM) by either indenting your code four spaces or using fenced code blocks.

For example, here is a sample code for a simple express server.

    1const express = require("express");
    2const app = express();
    3const port = 3000;
    4
    5app.get("/", (req, res) => {
    6  res.send("Hello World!");
    7});
    8
    9app.listen(port, () => {
    10  console.log(`Example app listening at http://localhost:${port}`);
    11});

javascript

Copy and paste this code into a <span class="jsx-3120878690">`.md`</span> file in any GitHub repo or a gist and commit the changes. Here is how this Markdown file will look:

![no\_indents](../../pluralsight2.imgix.net/guides/8fe73905-e0e9-4b26-b061-12097cea42fe_Screenshot_2020-09-23_no_indents_md.html)

Since you have not included any indents or fenced code blocks, GFM treats the code as regular text. You can see this GitHub gist [here](https://gist.github.com/lelouchB/34aa954f55cc7767f57325736c3b3674).

Now indent the entire code four spaces. You will notice that the code block will fade once you have indented the code.

![fade\_code](../../pluralsight2.imgix.net/guides/50c795ec-3062-4f71-be2e-546a66459e6b_Screenshot_2020-09-23_Build_software_better%2c_together(1).html)

Now commit this change, and you will see that the Markdown will format the code block this time.

![four\_indent](../../pluralsight2.imgix.net/guides/d4ec168b-417c-4844-ba0c-8d296bd260b4_Screenshot_2020-09-23_four_spaces_indent_md.html) You can find this example gist [here](https://gist.github.com/lelouchB/acebd4ae8a06441fb6bce45676795e38).

### Fenced Code Blocks

You can also insert code in Markdown by placing triple backticks (<span class="jsx-3120878690">```` ``` ````</span>) before and after a code block. Notice that, like last time, the code will fade inside triple backticks.

![fenced\_code\_block](../../pluralsight2.imgix.net/guides/2b610e72-9a5b-4236-9da3-7879428c6297_Screenshot_2020-09-23_Build_software_better%2c_together(2).html)

Here is how this Markdown file will look:

![fenced\_code](../../pluralsight2.imgix.net/guides/2e1cee37-d886-488a-9ac4-6163e59e903b_Screenshot_2020-09-23_fenced_code_blocks_md.html)

You can find this example gist [here](https://gist.github.com/lelouchB/3b4f75a83c3ed6ee571dd55a1af22156).

Highlighting Code
-----------------

To highlight code, write the name of the language the code is written in after the initial triple backticks. In the above example, the code is written in JavaScript, and hence <span class="jsx-3120878690">`javascript`</span> is added after triple backticks. ![highlighted\_code](../../pluralsight2.imgix.net/guides/1bbf3c5f-0d43-41bb-a5b2-5028d5e9fa6b_Screenshot_2020-09-23_Build_software_better%2c_together.html)

Here is how this highlighted code will look:

![preview](../../pluralsight2.imgix.net/guides/42010d13-4969-4834-af2a-8e2945bcfbf0_Screenshot_2020-09-23_highlight_javascript_md.html)

You can find this example gist [here](https://gist.github.com/lelouchB/9627a8194b80afcbbe0da91140184f60).

Similarly, you can highlight code written in other programming languages such as Ruby, Python, etc.

React is a JavaScript framework, or technically a library, so adding <span class="jsx-3120878690">`javascript`</span> after the triple backticks should work and highlight the code. Adding <span class="jsx-3120878690">`javascript`</span> after <span class="jsx-3120878690">```` ``` ````</span> does highlight the code, but it does so by treating it as a JavaScript code.

Since React uses [JSX](https://reactjs.org/docs/introducing-jsx.html) to highlight React code, <span class="jsx-3120878690">`jsx`</span> should be used instead of <span class="jsx-3120878690">`javascript`</span> after the triple backticks.

Here is a sample React code that illustrates this.

    1import React from 'react';
    2import './App.css';
    3
    4function App() {
    5  return (
    6    <div className="App">
    7           Hello World!
    8    </div>
    9  );
    10}
    11
    12export default App;

jsx

First, <span class="jsx-3120878690">`javascript`</span> is added after the triple backticks.

![javascript\_highlight](../../pluralsight2.imgix.net/guides/37dec472-2732-4012-8510-1cf0c7522f26_Screenshot_2020-09-23_Build_software_better%2c_together(3).html)

Here is how this code is highlighted.

![preview](../../pluralsight2.imgix.net/guides/542758f4-c1fe-486d-a80c-586f6fe4a8d5_Screenshot_2020-09-23_react_highlight_javascript_md.html)

You can find this example gist [here](https://gist.github.com/lelouchB/ab9a8137541b54cc71d9a24e326e338c).

Now, <span class="jsx-3120878690">`jsx`</span> is added after the triple backticks.

![JSX\_highlight](../../pluralsight2.imgix.net/guides/08ff267c-67c6-41a9-b8d0-180b02496cec_Screenshot_2020-09-23_Build_software_better%2c_together(4).html)

Here is how the code is highlighted this time.

![preview](../../pluralsight2.imgix.net/guides/d5f64403-ceb7-4e19-9e96-aff0dfc77ede_Screenshot_2020-09-23_react_highlight_JSX_md.html)

You can find this example gist [here](https://gist.github.com/lelouchB/a8576497ac29d1980e63c6ed481ae17b).

Though the differences are minute, you can see how the highlighting is changed based on the use of <span class="jsx-3120878690">`javascript`</span> and <span class="jsx-3120878690">`jsx`</span> after <span class="jsx-3120878690">```` ``` ````</span>.

In general, it is better to use <span class="jsx-3120878690">`jsx`</span> to highlight React code. Even in this guide, <span class="jsx-3120878690">`jsx`</span> is used in the above code block to highlight React code.

![preview](../../pluralsight2.imgix.net/guides/b96be5cd-4563-4b8a-8f44-7f540cbd9eb8_ssw.html)

Conclusion
----------

In this guide, we discussed how you can insert code in GitHub Flavored Markdown using indentation and fenced code blocks. We also discussed how to highlight JavaScript and React code in GitHub Flavored Markdown.

Here are some resources that you may find useful:

-   [Syntax Highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting)
-   [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
-   [Languages Supported by GitHub Flavored Markdown](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)
-   [JS vs JSX](https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx)

Happy coding!

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

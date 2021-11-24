<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Using GitHub Pages with Custom Domains
======================================

### Desmond Nyamador

-   Oct 23, 2020
-   4 Min read
-   10,820 Views

-   Oct 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   10,820 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

16

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-deployingyourapp" class="menu-link">Deploying Your App</a>
-   <a href="#module-supporteddomains" class="menu-link">Supported Domains</a>
-   <a href="#module-configuringacustomdomain" class="menu-link">Configuring a Custom Domain</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Your shiny new app is complete and ready to be shown to the world, but you do not want to use the default .github.io domain. You want a fully customized domain name to give customers or users a seamless experience. What do you do? In this guide, you'll learn about the various types of domains supported by GitHub pages and how to configure a custom domain on Github pages.

Deploying Your App
------------------

If you're using a module bundler like webpack or parcel, ensure you push your production build to your GitHub repository. This also applies to frameworks or libraries like React, Angular, or Vue. Bear in mind that GitHub pages do not fully support single-page applications, especially when you're using an HTML5 history API-based routing solution like <span class="jsx-3120878690">`react-router-dom`</span>. To get around this, use the <span class="jsx-3120878690">`HashRouter`</span> rather than <span class="jsx-3120878690">`BrowserRouter`</span>, as shown below.

    1import React from 'react';
    2import { HashRouter, Route, Link } from 'react-router-dom'
    3
    4function Homepage(){
    5render(){
    6 <div>
    7                <p>Homepage</p>
    8    </div>
    9}
    10
    11function App(){
    12    render(){
    13        <HashRouter basename='/'>
    14           <Route exact path='/homepage' component={Homepage}/>
    15       </HashRouter>
    16);
    17}

jsx

A link to the homepage route would return a link as shown below.

    1<a href='#/homepage'>....

jsx

Follow my guide [Deploying React on Github Pages](deploying-react-on-github-pages.html) to help you through the deployment process of a React app on GitHub pages.

Supported Domains
-----------------

GitHub Pages supports two domain types, *subdomains* and *apex* domains. See examples of each below.

    1// Examples
    2Subdomain type     |  Example
    3-------------------|-----------------
    4www subdomain      |  www.pluralsight.com
    5Custom subdomain   |  app.pluralsight.com
    6Apex domain        |  pluralsight.com
    7------------------------------------------

jsx

Configuring a Custom Domain
---------------------------

### Subdomains

For a subdomain such as app.pluralsight.com, add a CNAME record to your domain service provider.

Follow the following steps to configure a subdomain:

1.  On your site's repository, click the settings tab .
2.  Under **custom domain**, type your custom domain and save. GitHub will automatically create a commit with a CNAME file at the root of your repository.
3.  Visit the dashboard provided by your domain provider and add a CNAME record pointing to your subdomain. Given the example above, for the subdomain [www.pluralsight.com](https://www.pluralsight.com/), a CNAME record for www.pluralsight.com would point to <span class="jsx-3120878690">`<USER_NAME>.github.io`</span> where <span class="jsx-3120878690">`<USER_NAME>`</span> is your GitHub username.

You can optionally choose to enforce HTTPS in your settings on GitHub.

Note that DNS changes can take up to 24 hours to reflect.

### Apex Domains

For apex domains, configure an ALIAS or ANAME/A record. To reiterate, an example apex domain would be [pluralsight.com](https://pluralsight.com/).

Follow the following steps to configure an apex domain:

1.  On your site's repository, click the settings tab
2.  Under custom domain, type your custom domain and save. GitHub will automatically create a commit with a CNAME file at the root of your repository.
3.  Visit the dashboard provided by your domain provider and add an ALIAS or ANAME/A record pointing to your apex domain to the IP addresses of GitHub pages, as shown:

    i. 185.199.108.153

    ii. 185.199.109.153

    iii. 185.199.110.153

    iv. 185.199.111.153

Conclusion
----------

And that's it! In this guide you learned how to use a custom domain name with GitHub pages.

Feel free to read more on this topic in the official documentation of [GitHub](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

If you want to talk more about this, drop me a line on [Twitter](https://twitter.com/DesmondNyamador).

16

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

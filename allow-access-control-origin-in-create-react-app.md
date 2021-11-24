<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Allow Access Control Origin in Create React App
===============================================

### Desmond Nyamador

-   Sep 25, 2020
-   4 Min read
-   106,479 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   106,479 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

69

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-understandingcors" class="menu-link">Understanding CORS</a>
-   <a href="#module-corsincreatereactapp" class="menu-link">CORS in Create-React-App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In web apps, browsers work with a *SameSite* policy that prevents a cross-domain XMLHttpRequest or Fetch request from being made. In simple terms, making a request from [https://main.pluralsight.com](https://main.pluralsight.com/) to [https://api.pluralsight.com](https://api.pluralsight.com/) is not allowed by default.

In this guide, you will learn about cross-origin resource sharing (CORS) and the role of the "Allow Access Control Origin" header. With the knowledge gained in this guide, you will find it easy to resolve issues relating to CORS.

Understanding CORS
------------------

Since making requests from different domains is not allowed by default, in this guide we will stick with [https://main.pluralsight.com](https://main.pluralsight.com/) and [https://api.pluralsight.com](https://api.pluralsight.com/) as domains A and B respectively. With the introduction of CORS, domains A and B can now share resources with each other without being blocked by the browser.

According to [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), "Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served."

There are two methods used by the browser to verify the ability to share resources between two domains.

**1. Simple Requests**

In a simple request, the browser sends a GET request with an <span class="jsx-3120878690">`Origin`</span> header with the value of the requester's domain as shown below.

    1Origin: https://main.pluralsight.com

bash

The server then responds with an <span class="jsx-3120878690">`Access-Control-Allow-Origin`</span> header that includes a domain from which requests are allowed. This may also be a wildcard character denoted by an asterisk (\*).

    1Access-Control-Allow-Origin: http://main.pluralsight.com
    2
    3                                      OR a wildcard
    4
    5Access-Control-Allow-Origin: *

bash

**2. Preflighted Requests**

In this method, the browser first sends a request with the <span class="jsx-3120878690">`OPTIONS`</span> method to the server—in this case, Server B, [https://api.pluralsight.com](#)([https://api.pluralsight.com—to](https://api.pluralsight.xn--comto-6u3b/) find out if it's allowed to send a request, hence the name *preflight* request.

**Request**

    1OPTIONS /
    2Host: api.pluralsight.com
    3Origin: https://main.example.com

bash

**Response**

    1Access-Control-Allow-Origin: http://main.pluralsight.com
    2Access-Control-Allow-Methods: PUT, DELETE

bash

After a response is received and server A ([https://main.pluralsight.com](https://main.pluralsight.com/)) has the necessary permission to "talk" to server B ([https://api.pluralsight.com](https://api.pluralsight.com/)), then the main request is sent to server A. (Kind of a bouncer at a party 😉).

CORS in Create-React-App
------------------------

You understand CORS now, but how does this come together in Create-React-App? Well, as always, Create-React-App comes with a simple way to handle this: add a proxy field to your package.json file as shown below. In this case, a request is made from server A to server B ([https://api.pluralsight.com](https://api.pluralsight.com/)).

    1"proxy": "https://api.pluralsight.com:8000",

json

Any route that Create-React-App does not recognize will now automatically be proxied to the URL provided.

If you don't do this, you may end up with an error:

    1Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' 
    2header is present on the requested resource. Origin 'http://localhost:3000' is therefore 
    3not allowed access. If an opaque response serves your needs, set the request's mode to 
    4'no-cors' to fetch the resource with CORS disabled.

bash

Note that Create-React-App will only proxy requests that do not have a content type of <span class="jsx-3120878690">`text/html`</span>.

Conclusion
----------

And that's it! In this guide, you got to understand what cross-origin resource sharing is and how browsers handle cross-origin requests. To read more on how to handle this in Create-React-App, visit the [Official Documentation](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to learn more.

69

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

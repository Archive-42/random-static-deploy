<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Deploying A Django App on PythonAnywhere
========================================

### Kimaru Thagana

-   Oct 7, 2020
-   4 Min read
-   3,255 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   3,255 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

17

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-deployingadjangoapp" class="menu-link">Deploying a Django App</a>
-   <a href="#module-pythonanywherewalkthrough" class="menu-link">PythonAnywhere Walkthrough</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Deployment is a critical stage in web development. It is at this point that the application is tested in an environment where the user will be using it. Any sensitive information should be packaged in a manner that does not compromise the app.

With Django, it is no different. There are some changes that are made to prepare the application for production level status. These include handling <span class="jsx-3120878690">`staticfiles`</span>, setting the <span class="jsx-3120878690">`DEBUG`</span> mode to FALSE, and more. A wonderful, beginner-friendly resource for practicing Django deployment is [PythonAnywhere](https://www.pythonanywhere.com/). The platform is tailored and optimized for Python projects and does not provide an empty Ubuntu/Linux server like most cloud service providers, such as AWS, GCP, and Digital Ocean, among others.

This guide assumes you have at least *intermediate* level skills in Python and navigating Linux <span class="jsx-3120878690">`bash`</span>, and that you have at least *beginner* level understanding of Django and have developed a <span class="jsx-3120878690">`Hello World`</span> application in the said framework.

Deploying a Django App
----------------------

To get a Django app production-ready, some settings need to be configured in preparation for the live environment. These include:

-   Setting the <span class="jsx-3120878690">`DEBUG`</span> boolean to FALSE

-   Setting the <span class="jsx-3120878690">`ALLOWED_HOSTS`</span> list to a list of the actual live domains

-   Setting a path to the static files and serving them separately since Django does not serve static files in production

-   Hiding sensitive variables, such as the <span class="jsx-3120878690">`SECRET_KEY`</span>, using techniques such as config files and environment variables

This creates a checklist. In Django, there is a management command, <span class="jsx-3120878690">`check --deploy`</span>, which goes through the checklist to determine whether the app is production-ready and whether there are any vulnerabilities that might affect the app. More on this command can be found in [this](https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/) resource.

PythonAnywhere Walkthrough
--------------------------

To get started with PythonAnywhere, sign up for a free account. It may be limited, but it is good enough to get the job done in terms of hosting a basic Django app. Visit the signup page [here](https://www.pythonanywhere.com/registration/register/beginner/).

Create an account with a username that can also work as part of your domain name. This is what the landing page looks like once logged in. ![Landing screen](../../pluralsight2.imgix.net/guides/c8f6c84a-8fae-47e5-bfee-a95b3906eedb_Screenshot_from_2020-10-02_14-58-26.html)

The first step is to set up a web app. In the main dashboard, navigate to the **Web** tab and add a new web app. Since this is a free account, skip the domain configurations.

The next step is to select the web framework. Select Django and the Python version you based your project on. A safe option is Python 3.5.

At this point, if you navigate to your URL—which is yourusername.pythonanywhere.com—you should see the Django default welcome screen. ![django welcome](../../pluralsight2.imgix.net/guides/377b5a2b-a4b6-4791-b92a-419f3bb568be_Screenshot_from_2020-10-02_15-13-36.html)

You have successfully installed a basic boilerplate Django application.

If you wish to customize your app further, access the files using the files tab. This will allow you to view files and give you access to an online editor where you can write and save your code.

Within the files tab, there is a link called *Open Bash console here*. This gives you access to a Linux bash within that location in the file system were you can run commands such as <span class="jsx-3120878690">`python manage.py startapp myapp`</span> and create an app.

Your challenge now is to tinker with the existing Django project you have just created, using the online editor and bash console provided by PythonAnywhere, and develop a hello\_world app in Django similar to [this](https://github.com/KimaruThagna/django_hello_world).

Conclusion
----------

The PythonAnywhere resource is beginner-friendly and custom-tailored to Python web applications, such as Django and Flask. It also offers managed services, such as scheduled tasks and managed databases. These are, however, for paid accounts.

The skill of deploying a Django app to a live server is essential for roles such as Python/Django developer, backend developer, and full stack developer.

To further build on this guide, learn more about media management with PythonAnywhere [here](https://www.pythonanywhere.com/forums/topic/2812/).

17

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Introduction to Web Development in Python and Django
====================================================

### Kimaru Thagana

-   Oct 2, 2020
-   7 Min read
-   10,515 Views

-   Oct 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   10,515 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

131

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-pythonwebdevelopment" class="menu-link">Python Web Development</a>
-   <a href="#module-helloworldindjango" class="menu-link">Hello World in Django</a>
-   <a href="#module-samplescreen" class="menu-link">Sample Screen</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Web development became popular due to the widespread accessibility of the web, especially for commerce. Once businesses quickly realized they could offer their products and services on the web, this created a demand for web development that has never slowed down.

Web development can be divided into three major parts:

1.  Backend development: This is concerned with business logic, data storage, and processing.

<!-- -->

1.  Frontend development: This is concerned with how the user interacts with the system and mainly includes user experience (UX) and user interface (UI) design.

<!-- -->

1.  API/middleware development: This is concerned with how the backend and frontend apps communicate.

This guide will explore developing web apps using the Python framework [Django](https://www.djangoproject.com/). This framework mainly addresses backend and API/middleware development. It is therefore assumed that you have at least *intermediate* level knowledge in Python.

Python Web Development
----------------------

Web development in Python picked up to bring the data wrangling and processing power of Python to the web. Some popular sites built on Python/Django include Disqus, Instagram, and Mozilla, among others. More information can be found [here](https://www.djangoproject.com/start/overview/).

Hello World in Django
---------------------

To get started with Django, install it using this command on your terminal.

    1pip install django

bash

To start a new Django project, run the starter command, which creates a boilerplate project.

    1django-admin startproject hello_world

bash

You now have a Django project with basic boilerplate code. Within a Django project, there can exist several *apps*.

An app can be described as a library of code representing a discrete part of a larger project. A Django app requires at least one app to run. To create an app, use the <span class="jsx-3120878690">`manage.py`</span> script and pass the <span class="jsx-3120878690">`startapp`</span> command, as demonstrated below.

    1python manage.py startapp myapp

bash

At this point, you have a Django project called <span class="jsx-3120878690">`hello_world`</span> and, within it, an app called <span class="jsx-3120878690">`myapp`</span>.

### App Boilerplate

The app folder comes with starter files that are critical for any Django app. These are:

1.  <span class="jsx-3120878690">`app.py`</span>: Where app configurations are defined

<!-- -->

1.  <span class="jsx-3120878690">`admin.py`</span>: Where model configurations are defined in relation to the project admin page

<!-- -->

1.  <span class="jsx-3120878690">`models.py`</span>: Where database tables are defined as <span class="jsx-3120878690">`Models`</span>

<!-- -->

1.  <span class="jsx-3120878690">`views.py`</span>- Where Django views are defined. These are objects that define how content is displayed on a web page.

For this project, you will add a new file and name it <span class="jsx-3120878690">`urls.py`</span>. Copy the code below into the file under the <span class="jsx-3120878690">`myapp/`</span> folder.

    1from django.urls import path
    2from .views import home
    3urlpatterns = [
    4    path('', home,name='home'),
    5]

python

The function of this file is to define which view will be accessed by a user if they access a certain URL. In this case, when they access the root URL, they will be directed to the home view.

The next step is to develop the <span class="jsx-3120878690">`home`</span> view. Open <span class="jsx-3120878690">`views.py`</span> and copy the code block below.

    1from django.shortcuts import HttpResponse
    2
    3# Create your views here.
    4def home(request):
    5    return HttpResponse("Hello world from Django")

python

The above creates a view called <span class="jsx-3120878690">`home`</span>, which returns an <span class="jsx-3120878690">`HTTPResponse`</span>. This means it will be just plain text. In Django, there are class-based and function-based views. Read more about them [here](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html).

The app is now complete but needs to be connected to the main project since at runtime, the user accesses the project at root level and then through URL resolving and is directed to the appropriate app. To connect the app to the main project, add it to the <span class="jsx-3120878690">`INSTALLED_APPS`</span> list in the <span class="jsx-3120878690">`settings.py`</span> file in the <span class="jsx-3120878690">`hello_world/`</span> project folder; also, link it in the main <span class="jsx-3120878690">`urls.py`</span> file in the project.

To add to the <span class="jsx-3120878690">`INSTALLED_APPS`</span> list, navigate to the <span class="jsx-3120878690">`settings.py`</span> file and replace the current list with the list below.

    1INSTALLED_APPS = [
    2    'django.contrib.admin',
    3    'django.contrib.auth',
    4    'django.contrib.contenttypes',
    5    'django.contrib.sessions',
    6    'django.contrib.messages',
    7    'django.contrib.staticfiles',
    8    # local app
    9    'myapp',
    10]

python

To link the project URL to the app URL, navigate to the <span class="jsx-3120878690">`hello_world/urls.py`</span> file and copy the following code block.

    1from django.contrib import admin
    2from django.urls import path, include
    3
    4urlpatterns = [
    5    path('admin/', admin.site.urls),
    6    path('', include('myapp.urls'))
    7]

python

With the second item in the list, you are directing that if there is no parameter from the root URL (path empty), traffic should be directed to the URL's file in the <span class="jsx-3120878690">`myapp`</span> app. Within the <span class="jsx-3120878690">`myapp`</span> URL's file, the root URL is resolved to display the <span class="jsx-3120878690">`home`</span> view. This is how you will display the <span class="jsx-3120878690">`Hello world from Django`</span> message.

### Running the Project

To run the project, run the command:

    1python manage.py runserver

bash

This will execute the project using a Web Server Gateway Interface [(WSGI)](https://wsgi.readthedocs.io/en/latest/what.html) that is inbuilt and necessary to run Python projects on the web. The site is accessible by default on [http://127.0.0.1:8000](#).

Sample Screen
-------------

After running the <span class="jsx-3120878690">`runserver`</span> command, upon accessing the default Django URL, you should see a hello world page similar to the one below.

![Landing screen](../../pluralsight2.imgix.net/guides/7136f4f9-25ef-4fba-a754-aebd5deb121a_Screenshot_from_2020-10-01_19-55-45.html)

Conclusion
----------

Web development in Django is quite a wide field. The skills learned in this guide offer an introduction to what is required for positions such as a backend or full-stack Python/Django web developer. To further build on this guide, research the following aspects of web development using Django:

1.  Django Forms: Learn how to collect data from users and pass to Django views and forms for further processing. Get started [here](https://docs.djangoproject.com/en/3.1/topics/forms/)

<!-- -->

1.  Handling static files and upload data: Learn how to handle uploading of files and media. Get started with the official [docs](https://docs.djangoproject.com/en/3.1/topics/http/file-uploads/)

<!-- -->

1.  Using Django APIs with the Django Rest Framework (DRF): Developing a Django app with API capabilities. Starter tutorial can be found [here](https://www.django-rest-framework.org/tutorial/quickstart/).

<!-- -->

1.  Django Databases: Performing database operations and migrating models (Tables). Quickstart [guide](https://docs.djangoproject.com/en/3.1/topics/db/models/).

<!-- -->

1.  Jinja templating engine: Learn how to use Jinja to manipulate HTML code blocks programmatically. Quickstart [guide](https://docs.djangoproject.com/en/3.1/topics/templates/).

<!-- -->

1.  Deploying a Django app to a live server: Learn how to share your Django app on the cloud. Get started with Django on Digital ocean [here](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-local-django-app-to-a-vps).

131

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

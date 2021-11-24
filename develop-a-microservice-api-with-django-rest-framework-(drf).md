<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Develop a Microservice API with Django Rest Framework (DRF)
===========================================================

### Kimaru Thagana

-   Oct 19, 2020
-   7 Min read
-   29,488 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   29,488 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

150

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-aboutdrf" class="menu-link">About DRF</a>
-   <a href="#module-createasampleapp" class="menu-link">Create a Sample App</a>
-   <a href="#module-runtheapp" class="menu-link">Run the App</a>
-   <a href="#module-apiscreen" class="menu-link">API Screen</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Decoupling the development of an application into the frontend and the backend is a common architectural implementation in modern app development. With the frontend and backend decoupled, there needs to be a communication middleware that will allow data exchange between these components. This is where application programming interfaces (APIs) come in.

This guide explores API development in REST using Django, which already has a package for REST API development called [Django Rest Framework](https://www.django-rest-framework.org/) (DRF). The guide assumes you have a basic understanding of APIs and Django web framework and at least intermediate-level proficiency in Python.

An introductory guide on Django can be found [here](introduction-to-web-development-in-python-and-django.html).

About DRF
---------

The [Django Rest Framework](https://www.django-rest-framework.org/) is a third-party package that empowers a Django app with REST API capabilities.

To install the package, run the command:

    1pip install django-rest-framework

bash

Create a Sample App
-------------------

This will be a Django app that displays data from the default Sqlite3 database. The data is a list of countries and their currency names.

Fire up a new Django project by running this command.

    1django-admin startproject countries

bash

Next, create an app and name it currency\_country using this command.

    1python3 manage.py startapp currency_country

python

The app is now set up. What remains is to develop the country model, the DRF API resources, and provide URLs to the API resources. The code block below shows the model and what fields make up the database table. Copy the code block into the <span class="jsx-3120878690">`models.py`</span> file.

    1from django.db import models
    2
    3class Country(models.Model):
    4   country_name = models.CharField(max_length=20)
    5   local_currency = models.CharField(max_length=20)
    6   added_on = models.DateTimeField(auto_now_add=True)
    7   
    8   def __str__(self):
    9       return self.country_name

python

The model needs data. To add the data, access the admin panel that requires superuser access. The next step is to create a superuser account using the following command.

    1python manage.py createsuperuser

python

This will be an interactive process where you will give essential details and register your user.

For the app and model to be visible, they need to be registered with the Django project and <span class="jsx-3120878690">`admin.py`</span>. To register the app and rest framework, a third-party app, add their names to the list of installed apps in <span class="jsx-3120878690">`settings.py`</span>.

Copy the list below to your <span class="jsx-3120878690">`settings.py`</span> and replace the existing list.

    1INSTALLED_APPS = [
    2    'django.contrib.admin',
    3    'django.contrib.auth',
    4    'django.contrib.contenttypes',
    5    'django.contrib.sessions',
    6    'django.contrib.messages',
    7    'django.contrib.staticfiles',
    8    'currency_country',
    9    "rest_framework",
    10]

python

To ensure the <span class="jsx-3120878690">`Country`</span> model is visible on the admin panel, register it in the <span class="jsx-3120878690">`admin.py`</span> file.

Add the code block below to your <span class="jsx-3120878690">`admin.py`</span> file.

    1from django.contrib import admin
    2from .models import Country
    3admin.site.register(Country)

python

### DRF Serializers

DRF [serializers](https://www.django-rest-framework.org/api-guide/serializers/) convert Django data types, such as querysets, into a format that can be rendered into JSON or XML. For this app, you only need to create the <span class="jsx-3120878690">`Country`</span> serializer. In the currency\_country app, create a file named <span class="jsx-3120878690">`serializers.py`</span> and add the code block below.

    1from rest_framework import serializers
    2from .models import Country
    3
    4
    5class CountrySerializer(serializers.ModelSerializer):
    6    class Meta:
    7        model = Country # this is the model that is being serialized
    8        fields = ('country_name', 'local_currency')

python

### API Requests

To service a <span class="jsx-3120878690">`GET`</span> or <span class="jsx-3120878690">`POST`</span> request, you need a view that will return all countries in a serialized fashion. To achieve this, create a view within the <span class="jsx-3120878690">`views.py`</span> file and add the view that will return all countries, serialized.

    1from rest_framework import status
    2from rest_framework.decorators import api_view
    3from rest_framework.response import Response
    4from .models import Country
    5from .serializers import CountrySerializer
    6
    7
    8@api_view(['GET', 'POST'])
    9def country(request):
    10    
    11    if request.method == 'GET': # user requesting data 
    12        snippets = Country.objects.all()
    13        serializer = CountrySerializer(snippets, many=True)
    14        return Response(serializer.data)
    15
    16    elif request.method == 'POST': # user posting data
    17        serializer = CountrySerializer(data=request.data)
    18        if serializer.is_valid():
    19            serializer.save() # save to db
    20            return Response(serializer.data, status=status.HTTP_201_CREATED)
    21        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

python

### URL Configuration

To configure the URL, configure the main project's <span class="jsx-3120878690">`urls.py`</span> file to direct any traffic to the currency\_country app using the <span class="jsx-3120878690">`path`</span> function, as in the codeblock below.

    1from django.urls import path, include
    2from django.contrib import admin
    3urlpatterns = [
    4    path('admin/', admin.site.urls),
    5    path('', include('currency_country.urls')),
    6
    7]

python

Next, create a <span class="jsx-3120878690">`urls.py`</span> file and, using the <span class="jsx-3120878690">`path`</span>, direct the traffic to your view function.

    1from django.urls import path
    2from .views import country
    3
    4
    5urlpatterns = [
    6    path('country/', country, name="countries")
    7]

python

Run the App
-----------

When all has been set up, the final step is migrating the changes and running the server. To make migrations, run the command:

    1python manage.py makemigrations

bash

To migrate the model changes into the default database, run the command:

    1python manage.py migrate

bash

To start the server and run the app, run the command:

    1python manage.py runserver

bash

API Screen
----------

![DRF](../../pluralsight2.imgix.net/guides/ef1ce2e7-f5a9-4b1a-8c4e-4c57a7e6ca26_Screenshot_from_2020-10-16_15-42-06.html)DRF

Conclusion
----------

Because Django is a popular web development framework and the current architecture of most applications is decoupled, API development in Django is a paramount skill. It can be applied in job positions such as backend developer, API/middleware developer, and full-stack developer.

To further build on your knowledge of Django Rest Framework, explore API concepts such as:

1.  [Authentication](https://www.django-rest-framework.org/api-guide/authentication/)

2.  [DRF token expiration](https://medium.com/@yerkebulan199/django-rest-framework-drf-token-authentication-with-expires-in-a05c1d2b7e05)

3.  [Pagination](https://www.django-rest-framework.org/api-guide/pagination/)

4.  [Parsers](https://www.django-rest-framework.org/api-guide/parsers/)

150

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

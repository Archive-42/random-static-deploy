<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Introduction to Django Models
=============================

### Kimaru Thagana

-   Oct 21, 2020
-   5 Min read
-   1,273 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,273 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

15

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-djangomodels" class="menu-link">Django Models</a>
-   <a href="#module-samplemodel" class="menu-link">Sample Model</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Django is a web development framework based on Python. Using the model-view-controller (MVC) architecture, it provides a level of abstraction and best practices to ease development.

This guide will explore the "model" part of the MVC architecture. Models are abstractions of tables in the SQL sense. [Models](https://docs.djangoproject.com/en/3.1/topics/db/models/) are the components of the MVC that define the shape of the data. In Django, models are defined using Python classes.

The guide assumes you have at least intermediate-level skills in Python and at least beginner-level in Django. An introductory guide to Django can be found [here](introduction-to-web-development-in-python-and-django.html).

Django Models
-------------

Each Django model maps to a single database table, and each attribute of the model maps to a database field. Models are a subclass of Django's <span class="jsx-3120878690">`django.db.models.Model`</span> by default.

Since they are the source of information about the data within the Django app, Django provides a way to access the stored information for CRUD (create, retrieve, update, delete) operations. This method is referred to as [queries](https://docs.djangoproject.com/en/3.1/topics/db/queries/).

Sample Model
------------

To get a better understanding of models, below is a code snippet of a *School* model with four fields:

-   name
-   total\_population
-   date\_of\_establishment
-   is\_private

    1from django.db import models
    2
    3class School(models.Model):
    4    name = models.CharField(max_length=20)
    5    total_population = models.IntegerField(default=200)
    6    date_of_establishment = models.DateField()
    7    is_private = models.BooleanField(default=False)

python

In the example above, the <span class="jsx-3120878690">`School`</span> model maps to a School table within the database. The model attributes map to table columns with the same defined properties, such as data types and defaults. The <span class="jsx-3120878690">`models.CharField()`</span> function will generate a <span class="jsx-3120878690">`Varchar`</span> or <span class="jsx-3120878690">`String`</span> field, while the <span class="jsx-3120878690">`models.BooleanField()`</span> will generate a Boolean field within the database.

The functions provide much-needed abstraction from database operations, which is the objective of an MVC architecture. This makes app development with Django easier.

Being a Python class, the model can also be further empowered with functions that can further process the data within an instance of an object created from the class.

For example, consider a scenario where you need to check the total population and status of a school. If the school is private, the total population should not exceed 1,000, and if it does, a message should be returned.

    1def check_population(self):
    2    if self.is_private and self.total_population > 1000:
    3        return "Private school maximum capacity is 1000"

python

### Databases

Models are the components that interact with the databases. In Django, databases are defined within the <span class="jsx-3120878690">`settings.py`</span> file as a configuration dictionary. By default, the boilerplate code generates a connection to a simple SQLite database. Below is a sample configuration dictionary.

    1DATABASES = {
    2    'default': {
    3        'ENGINE': 'django.db.backends.sqlite3',
    4        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    5    }
    6}

python

For bigger projects, [Postgres](https://www.postgresql.org/) is a preferred database due to its reliability and capacity to handle higher traffic. Django integrates smoothly with Postgres. Below is a sample of a connection configuration with Postgres. With Postgres, however, you need some extra work to setup the database and connect it to Django. You can learn more about that in this [guide](https://medium.com/@stackpython/how-to-start-django-project-with-a-database-postgresql-aaa1d74659d8).

    1DATABASES = {
    2    'default': {
    3        'ENGINE': 'django.db.backends.postgresql_psycopg2',
    4        'NAME': 'myproject',
    5        'USER': 'myprojectuser',
    6        'PASSWORD': 'password',
    7        'HOST': 'localhost',
    8        'PORT': '',
    9    }
    10}

python

Since the configuration is a dictionary of dictionaries, this means that it is possible to have more than one database within a Django project. To learn more about using multiple databases, check out this [guide](https://docs.djangoproject.com/en/3.1/topics/db/multi-db/).

Conclusion
----------

An understanding of the model component of the Django MVC allows you to learn the intricacies of the architecture and customize it for your unique needs.

To build on this guide, read further about Django model-related concepts, including:

1.  Django Databases: How to connect to different databases and how to deal with more than one database. Consult [this guide](https://docs.djangoproject.com/en/3.1/ref/databases/) for reference.

2.  Abstract Models and Inheritance: Design your own parent model that others can inherit from. Refer to [this guide](https://docs.djangoproject.com/en/3.1/ref/models/options/).

3.  Polymorphism in Django models: Refer to [this guide](https://realpython.com/modeling-polymorphism-django-python/) for a deeper dive into the topic.

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

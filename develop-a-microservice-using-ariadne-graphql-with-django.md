<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Develop a Microservice Using Ariadne GraphQL with Django
========================================================

### Kimaru Thagana

-   Oct 19, 2020
-   8 Min read
-   2,877 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   2,877 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

24

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-ariadnegraphql" class="menu-link">Ariadne GraphQL</a>
-   <a href="#module-sampleapp" class="menu-link">Sample App</a>
-   <a href="#module-runtheapp" class="menu-link">Run the App</a>
-   <a href="#module-apiscreens" class="menu-link">API Screens</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Most modern applications are developed in a decoupled manner. The front end and backend are separate applications, often connected via an application programming interface (API). This makes knowledge of APIs and API development paramount.

With a robust API, a backend system can serve several frontend clients. They could be web or mobile-based clients.

This guide assumes you have a basic understanding of APIs and Django web framework and at least intermediate-level proficiency in Python and GraphQL.

An introductory guide on Django can be found [here](introduction-to-web-development-in-python-and-django.html).

Ariadne GraphQL
---------------

[Ariadne GraphQL](https://ariadnegraphql.org/) is an interpretation of [graphql](https://graphql.org/) for Python. It was developed by the software house [Mirumee](https://mirumee.com/). Its main aim was to address the shortcomings of [graphene](https://docs.graphene-python.org/projects/django/en/latest/).

To install Ariadne and the GraphQL core, run the command below on your terminal.

    1pip install ariadne graphql-core

bash

Sample App
----------

For this exercise, you will develop a Django app that displays data from the default Sqlite3 database. The data is a list of schools and their populations.

To get started, start a new Django project by running the below command.

    1django-admin startproject school_list

bash

Next, create an app and name it school\_stats using the below command.

    1python3 manage.py startapp school_stats

python

The app is now set up. What remains is to develop the school model, the Ariadne GraphQL schema that consists of [queries](https://graphql.org/learn/queries/) and [mutations](https://graphql.org/learn/queries/) and to configure the URL to show the GraphQL playground interface. The code block below shows the model and what fields make up the database table. Copy the code block into the <span class="jsx-3120878690">`models.py`</span> file.

    1from django.db import models
    2
    3class School(models.Model):
    4   school_name = models.CharField(max_length=20)
    5   school_population = models.IntegerField(default=100)
    6   added_on = models.DateTimeField(auto_now_add=True)
    7   
    8   def __str__(self):
    9       return self.school_name

python

The model needs data. To add the data, you will need to access the admin panel. This requires superuser access. The next step is to create a superuser account using the following command.

    1python manage.py createsuperuser

python

This will be an interactive process where you will give essential details and register your user. For the app and model to be visible, they need to be registered with the Django project and <span class="jsx-3120878690">`admin.py`</span>. To register the app and also Ariadne, a third-party app, add their names to the list of installed apps in <span class="jsx-3120878690">`settings.py`</span>.

Copy the list below to your <span class="jsx-3120878690">`settings.py`</span> and replace the existing list.

    1INSTALLED_APPS = [
    2    'django.contrib.admin',
    3    'django.contrib.auth',
    4    'django.contrib.contenttypes',
    5    'django.contrib.sessions',
    6    'django.contrib.messages',
    7    'django.contrib.staticfiles',
    8    'school_stats',
    9    "ariadne.contrib.django",
    10]

python

To ensure the <span class="jsx-3120878690">`School`</span> model is visible on the admin pane, register it in the <span class="jsx-3120878690">`admin.py`</span> file. Add the code block below to your <span class="jsx-3120878690">`admin.py`</span> file.

    1from django.contrib import admin
    2from .models import School
    3admin.site.register(School)

python

### GraphQL Schema and Resolver

The first step in developing the GraphQL part is developing the schema. In your schema, you will have a mutation for adding schools, a <span class="jsx-3120878690">`School`</span> input object, a query for viewing schools, and a <span class="jsx-3120878690">`School`</span> object that will be returned as a result of the query. Since the schema is simple, you can do an *in-file* schema. The code block below defines the schema and assigns the <span class="jsx-3120878690">`type_defs`</span> variable. Within the <span class="jsx-3120878690">`school_stats`</span> app, create a file and name it <span class="jsx-3120878690">`resolver.py`</span>. Add the following block.

    1type_defs= """
    2
    3type Query{
    4    all_schools: [School]
    5}
    6
    7type School {
    8    id: ID
    9    school_name: String!
    10    school_population: Int!
    11
    12}
    13type Mutation{
    14    add_school(input: SchoolInput): SchoolResults
    15
    16}
    17input SchoolInput {
    18    school_name: String
    19    school_population: Int
    20}
    21  type SchoolResults {
    22        created: Boolean!
    23        school: School
    24        err: String
    25}
    26
    27"""

python

### GraphQL Query

To set up the query, you need to return data from the model. This requires a query resolver for the query <span class="jsx-3120878690">`all_schools`</span> created in the schema. In your <span class="jsx-3120878690">`resolver.py`</span> file, add the following function.

    1from ariadne import QueryType, make_executable_schema, MutationType
    2from .models import School
    3query = QueryType()
    4
    5@query.field('all_schools')
    6def resolve_schools(*_):
    7    return School.objects.all()

python

### GraphQL Mutation

Similar to the queries, set up a resolver for the mutation that will create a record in the database.

    1mutation = MutationType()
    2
    3@mutation.field('add_school')
    4def resolve_add_school(_,info, input):
    5
    6    school = School.objects.create(school_name=input['school_name'], school_population=input['school_population'])      
    7    return {'created': True, 'school': school, 'err': None}

python

### Make Schema Executable

To execute the schema and make it available for use in the GraphQL playground, add the following line of code.

    1schema = make_executable_schema(type_defs, query, mutation)

python

### URL Configuration

To configure the URL, configure the main project's <span class="jsx-3120878690">`urls.py`</span> file to direct any traffic to the school\_stats app using the <span class="jsx-3120878690">`path`</span> function, as in the code block below.

    1from django.urls import path, include
    2from django.contrib import admin
    3urlpatterns = [
    4    path('admin/', admin.site.urls),
    5    path('', include('school_stats.urls')),
    6
    7]

python

Next, create a <span class="jsx-3120878690">`urls.py`</span> file and load the graphQL view and schema to the default URL.

    1from django.urls import path, include
    2from ariadne.contrib.django.views import GraphQLView
    3from .resolver import schema
    4urlpatterns = [
    5    path('graphql/', GraphQLView.as_view(schema=schema), name='graphql'),
    6    path('', GraphQLView.as_view(schema=schema), name='graphql'),
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

API Screens
-----------

### Sample Mutation

In the GraphQL playground, execute the below mutation to create a record. To create more records, change the variables.

    1mutation {
    2  add_school(input: {school_name:"SchoolZ", school_population:330})
    3  {
    4    created
    5    school{
    6      school_name
    7      school_population
    8    }
    9    err
    10  }
    11}

graphql

![Mutation Result](../../pluralsight2.imgix.net/guides/b7a7eaee-c8b7-4735-84a1-d3aee303bf58_Screenshot_from_2020-10-16_14-48-51.html)Mutation Result

### Sample Query

    1query{
    2  all_schools{
    3    school_name
    4    school_population
    5  }
    6}

graphql

![Query Result](../../pluralsight2.imgix.net/guides/0c6fa204-d5d8-4182-9c30-97aa4aa32521_Screenshot_from_2020-10-16_14-49-15.html)Query Result

Conclusion
----------

The vital skill of API development can be applied in job positions such as backend developer, API/middleware developer, and full stack developer.

Ariadne GraphQL is a relatively new package, and it has some interesting use cases. To further build on these basics, follow these [Django integration](https://ariadnegraphql.org/docs/django-integration.html) and [Flask integration](https://ariadnegraphql.org/docs/flask-integration.html) guides to learn how to use Django, Flask and Ariadne GraphQL to develop a microservice.

24

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

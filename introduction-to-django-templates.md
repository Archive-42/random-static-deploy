<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Introduction to Django Templates
================================

### Gaurav Singhal

-   Nov 18, 2020
-   7 Min read
-   17,601 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   17,601 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

73

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whydjangotemplates" class="menu-link">Why Django Templates</a>
-   <a href="#module-templateconfiguration" class="menu-link">Template Configuration</a>
-   <a href="#module-thedjangotemplatelanguage" class="menu-link">The Django Template Language</a>
-   <a href="#module-templateinheritance" class="menu-link">Template Inheritance</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In the Django MTV model, the template is the presentation layer. This layer interacts with the user, sends the requests to the views, and responds to the user.

Django templates deal with HTML/CSS/JS. All rendering is handled in templates. Other than the basic constructs of HTML/CSS/JS, Django comes with templating language to render dynamic data in the form of templates. In this guide, you will learn about the Django templates and the language constructs that are necessary to build a Django application.

Why Django Templates
--------------------

Django template is a text document or Python string marked up that uses Django template language. Django keeps the logic and code separate from the design. It is essential to know that Django templates do not contain the embedded code of Python into HTML.

Django templates follow the DRY (do not repeat yourself) design principle, which requires developers to not repeat while designing a Django application. Django templates employ several other notions, such as template inheritance, tags, variables, filters, comments, etc.

Template Configuration
----------------------

To configure the Django template system, go to the <span class="jsx-3120878690">`settings.py`</span> file and update the <span class="jsx-3120878690">`DIRS`</span> to the path of the templates folder. Generally, the <span class="jsx-3120878690">`templates`</span> folder is created and kept in the sample directory where <span class="jsx-3120878690">`manage.py`</span> lives. This templates folder contains all the templates you will create in different Django Apps.

    1import os
    2
    3TEMPLATES = [
    4    {
    5        'BACKEND': 'django.template.backends.django.DjangoTemplates',
    6        'DIRS': [os.path.join(BASE_DIR,'templates')],
    7        'APP_DIRS': True,
    8        'OPTIONS': {
    9            'context_processors': [
    10                'django.template.context_processors.debug',
    11                'django.template.context_processors.request',
    12                'django.contrib.auth.context_processors.auth',
    13                'django.contrib.messages.context_processors.messages',
    14            ],
    15        },
    16    },
    17]

python

Alternatively, you can maintain a template folder for each app separately. If you are maintaining the template for every app separately, you don't need to update the <span class="jsx-3120878690">`DIRS`</span> in <span class="jsx-3120878690">`settings.py`</span>. Make sure that your app is added in <span class="jsx-3120878690">`INSTALLED_APPS`</span> in <span class="jsx-3120878690">`settings.py`</span> .

The Django Template Language
----------------------------

In the Django template language, the syntax involves four major constructs.

### 1. Variables

Variables output the value from the context. The context is generally a <span class="jsx-3120878690">`dict`</span>-like object (mapping variable name with its respective value) passed from views.

The basic syntax is:

    1{{ variable_name }}

django

For example, if you render the context set as shown below ...

    1from django.shortcuts import render
    2
    3def my_view(request):
    4    context = {
    5        "author": "Gaurav Singhal",
    6        "website": {
    7            "domain": "https://pluralsight.com",
    8            "views": 200
    9        },
    10        "odds": [1, 3, 5]
    11    }
    12    return render(request, "index.html", context)

python

... you can access it in template <span class="jsx-3120878690">`index.html`</span> as :

    1{{author}}
    2{{website.domain}}
    3{{website.views}}

django

### 2. Tags

Tags give logic to the template language to render the content logically.

The basic syntax is:

    1{% tag_name %}

django

Example:

    1{% if user.is_authenticated %}Howdy, {{ user.username }}, How are you {% endif %}

django

There are several tags which are used in templates Some of them are:

-   If/Else:

        1{% if condition %} 
        2   renders if body 
        3{% else %} 
        4    renders else body 
        5{% endif %}

    django

-   For loop

        1{% for odd in odds %}
        2{{odd}}
        3{% endfor %}

    django

-   include

This is used to load a template and render it to the current context. It is very useful for creating several components separately, such as navbar, footer, etc., and then including them in several templates.

    1{% include template_name %}

django

-   block

This defines the block to be overridden by the child template. You will get a better idea of blocks when we discuss template inheritance .

    1{% block content %}
    2{% endblock %}

django

You can read more about built-in tags in the [Django docs](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#built-in-tag-reference).

### 3. Filters

The filter is used to transform the value of the variable and tag argument.

It can be used as:

    1{{ my_variable | filter }}

django

For example:

    1{{ my_date|date:"Y-m-d" }}

django

You can read more about filter and several built-in filters in the [Django docs](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#ref-templates-builtins-filters).

### 4. Comments

You can easily add a comment in Django templates:

    1{# Comment here. It won't be rendered #}

django

Template Inheritance
--------------------

One of the most powerful parts of the Django template engine is template inheritance. This allows you to build a base skeleton template that contains all the base/common elements and defines blocks in a child/derived template after extending the base template. It is easier to understand in practice. Let's first create a <span class="jsx-3120878690">`base.html`</span>.

    1<html>
    2   <head>
    3      <title>
    4         {% block title %}Base title{% endblock %}
    5      </title>
    6        {% comment %} This Bootsrap css is added to all pages {% endcomment %}
    7      <link rel="stylesheet" href = "https://cdn.jsdelivr.net/npm/[email protected]/dist/css/bootstrap.min.css">
    8   </head>
    9   <body>
    10    <p>
    11    Body content which remains in all the pages
    12    </p>
    13      {% block content %}
    14         Body content
    15      {% endblock %}
    16   </body>
    17</html>

django

Now create a child template and save it as <span class="jsx-3120878690">`index.html`</span>.

    1{% extends 'base.html' %}
    2
    3{% block title %}
    4This is index title
    5{% endblock title %}
    6
    7{% block content %}
    8Main content of index.html
    9{% endblock content %}

django

Now when you render the <span class="jsx-3120878690">`index.html`</span> from the views, you will get the following output:

    1Body content which remains in all the pages
    2
    3Main content of index.html

Conclusion
----------

A Django template deals with passing information from a Django view to the browser and is considered the basic building block of a dynamic Django application. You can refer to the Django documentation to learn [Django template](https://docs.djangoproject.com/en/3.1/topics/templates/#module-django.template) in depth.

If you have any questions, feel free to reach out to me at [Codealphabet](https://codealphabet.com/contact).

73

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

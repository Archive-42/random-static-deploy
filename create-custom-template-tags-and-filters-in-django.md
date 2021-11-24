<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Create Custom Template Tags and Filters in Django
=================================================

### Gaurav Singhal

-   Nov 24, 2020
-   6 Min read
-   13,961 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   13,961 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

50

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-gettingstarted" class="menu-link">Getting Started</a>
-   <a href="#module-writingcustomtemplatefilters" class="menu-link">Writing Custom Template Filters</a>
-   <a href="#module-writingcustomtemplatetags" class="menu-link">Writing Custom Template Tags</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The Django template language offers a wide range of built-in tags and filters for designing the presentation layer of your Django app. However, your app may need a functionality that is not included in the core set of template primitive language. Django allows you to create your own set of custom tags and filters using Python, and make them available in the Django templates.

This guide will demonstrate how to create custom template tags and filters, and how to load them in templates.

Getting Started
---------------

Inside your Django app directory, create a module called <span class="jsx-3120878690">`templatetags`</span> and add an empty <span class="jsx-3120878690">`__init__.py`</span> file as shown in the below directory structure.

> Note: Make sure that you have included your app in <span class="jsx-3120878690">`INSTALLED_APPS`</span> available in <span class="jsx-3120878690">`settings.py`</span> .

    1my_app/
    2├── __init__.py
    3├── admin.py
    4├── models.py
    5├── templatetags/
    6│   ├── __init__.py
    7│   └── custom_tags.py
    8└── views.py

Next, open the <span class="jsx-3120878690">`custom_tags.py`</span> file and add these two lines to get started with custom template tags and filters.

    1from django import template
    2
    3register = template.Library()

python

Make <span class="jsx-3120878690">`custom_tags`</span> available by loading it in templates.

    1{% load custom_tags %}

django

Writing Custom Template Filters
-------------------------------

Filters are nothing but a Python function, which takes one or two arguments. For instance, in the filter <span class="jsx-3120878690">`{{var|filter_f:arg}}`</span> , the filter <span class="jsx-3120878690">`filter_f`</span> would be passed to the variable <span class="jsx-3120878690">`var`</span> and argument as <span class="jsx-3120878690">`arg`</span>.

For demonstration, create a filter to modify a string based on the argument. Create a simple view in <span class="jsx-3120878690">`views.py`</span>, that renders a string as follows:

    1def my_view(request):
    2    context = {
    3        "author": "gaurav singhal",
    4    }
    5    return render(request, "index.html", context)

python

After creating views, create a simple template filter named <span class="jsx-3120878690">`modify_name`</span> in <span class="jsx-3120878690">`custom_tags.py`</span>.

    1from django import template
    2
    3register = template.Library()
    4
    5def modify_name(value, arg):
    6    # if arg is first_name: return the first string before space
    7    if arg == "first_name":
    8        return value.split(" ")[0]
    9    # if arg is last_name: return the last string before space
    10    if arg == "last_name":
    11        return value.split(" ")[-1]
    12    # if arg is title_case: return the title case of the string
    13    if arg == "title_case":
    14        return value.title()
    15    return value
    16    
    17register.filter('modify_name', modify_name)

python

You can now use the <span class="jsx-3120878690">`modify_name`</span> filter in your templates.

    1{% comment %} index.html {% endcomment %}
    2
    3{% load custom_tags %}
    4
    5{{ author | modify_name:"first_name"}}<br>
    6{{ author | modify_name:"last_name"}}<br>
    7{{ author | modify_name:"title_case"}}<br>
    8{{ author | modify_name:"first_name" | modify_name:"title_case"}}<br>

django

This will give the output as follows:

    1gaurav
    2singhal
    3Gaurav Singhal
    4Gaurav

Likewise, you can create your template filters, and then you can use them in your templates.

Writing Custom Template Tags
----------------------------

Template tags are more powerful and more complex than filters. Django supports several shortcuts for making most of them easier.

### simple\_tag

simple\_tag takes several arguments and returns a result after doing some processing. Below is a simple example to display the current date and time in the template

    1# custom_tags.py
    2from django import template
    3register = template.Library()
    4
    5import datetime
    6
    7@register.simple_tag
    8def current_time(format_string):
    9    return datetime.datetime.now().strftime(format_string)

python

Next, use the above custom template tag into your template as follows:

    1{% comment %} index.html {% endcomment %}
    2
    3{% load custom_tags %}
    4
    5{% current_time "%d/%m/%Y %H:%M:%S %p" %}

django

This will give you the current date and time when you run the Django server.

    117/11/2020 14:15:59 PM

### inclusion\_tag:

inclusion\_tag is a common type of template tag, and helps in displaying data by rendering *another* template. This tag is useful in scenarios when you want to render data that is common in several pages.

In the example below, the <span class="jsx-3120878690">`Users`</span> table is rendered by creating a new template named <span class="jsx-3120878690">`users.html`</span> using the <span class="jsx-3120878690">`show_users_table`</span> template tag. The <span class="jsx-3120878690">`custom_tag.py`</span> is modified as given below:

    1# custom_tags.py
    2from django.contrib.auth import get_user_model
    3from django.template.loader import get_template
    4
    5from django import template
    6register = template.Library()
    7
    8User = get_user_model()
    9
    10def show_users_table():
    11    users = User.objects.all()
    12    return {'users': users}
    13
    14users_template = get_template('users.html')
    15register.inclusion_tag(users_template)(show_users_table)

python

Next, create a new template named <span class="jsx-3120878690">`users.html`</span> and render the users in a tabular format.

    1{% comment %} users.html {% endcomment %}
    2
    3{% load custom_tags %}
    4
    5<table>
    6    <thead>
    7        <tr>
    8        <td>Username</td>
    9        <td>First name</td>
    10        <td>Last name</td>
    11        <td>email</td>
    12        </tr>
    13    </thead>
    14    <tbody>
    15        {% for user in users %}
    16        <tr>
    17            <td>{{user.username}}</td>
    18            <td>{{user.first_name}}</td>
    19            <td>{{user.last_name}}</td>
    20            <td>{{user.email}}</td>
    21        </tr>
    22        {% endfor %}
    23    </tbody>
    24</table>

django

Now, you can use the above inclusion tag in any other template (say <span class="jsx-3120878690">`index.html`</span>) as shown below.

    1{% comment %} index.html {% endcomment %}
    2
    3{% load custom_tags %}
    4
    5{% show_users_table %}

django

This will render the user in a tabular manner as shown below.

    1Username        First name  Last name   email
    2gaurav_singhal Gaurav      Singhal     [email protected]

Conclusion
----------

Django custom template tags and filters are the best way to create tags and filters that you may need in your Django app. If you are new to Django templates, read [this guide](introduction-to-django-templates.html). You can refer to the [Django documentation on custom template tags and filters](https://docs.djangoproject.com/en/3.1/howto/custom-template-tags/#custom-template-tags-and-filters) for more understanding. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

50

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

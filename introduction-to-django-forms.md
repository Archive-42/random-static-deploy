<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Introduction to Django Forms
============================

### Kimaru Thagana

-   Oct 28, 2020
-   6 Min read
-   993 Views

-   Oct 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   993 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

10

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-formsindjango" class="menu-link">Forms in Django</a>
-   <a href="#module-sampleapp" class="menu-link">Sample App</a>
-   <a href="#module-modelform" class="menu-link">ModelForm</a>
-   <a href="#module-normalform" class="menu-link">Normal Form</a>
-   <a href="#module-thirdpartypackages" class="menu-link">Third-party Packages</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Web applications run on user interactions. Users enter data that is processed or stored and later displayed via web pages and views. With Django, a crucial component of data collection is [forms](https://docs.djangoproject.com/en/3.1/topics/forms/). The methods and assets needed to generate a form are found in Django's *FORM* class, which is accessed by the import <span class="jsx-3120878690">`from django import forms`</span>.

This guide will explore how to use forms in Django as a data capture tool. It assumes that you have at least beginner level knowledge in Django and a general understanding of the Django MVC. An introductory guide to Django can be found [here](introduction-to-web-development-in-python-and-django.html).

Forms in Django
---------------

Since forms are data entry components, they can be an entry point for malicious attacks, such as [SQL injection](https://www.w3schools.com/sql/sql_injection.asp) and [cross site request forgery](https://portswigger.net/web-security/csrf). To prevent this, Django has some security checks, such as a [CSRF token](https://docs.djangoproject.com/en/1.11/_modules/django/middleware/csrf/) and checking form validity before saving. More about form security can be learned from the [Django docs](https://docs.djangoproject.com/en/3.1/topics/security/).

Sample App
----------

To better understand the use of forms, and specifically model forms in Django, consider a use case where your client wishes to build an inventory management web app. Part of the scope is building a web form for capturing new inventory items as well as a login form. Below is a snippet of the <span class="jsx-3120878690">`Inventory`</span> model that influences how the inventory form is be designed.

    1from django.db import models
    2class Inventory(models.Model):
    3    item = models.CharField(max_length=20)
    4    item_code = models.IntegerField()
    5    item_condition = models.CharField(max_length=50)
    6    quantity = models.IntegerField()
    7    def __str__(self):
    8        return self.item

python

ModelForm
---------

Model forms are components that are derived from an existing model. Simply, they are forms specifically for a model that you specify. Generating a model form is quite easy. Below is a code snippet of one for the <span class="jsx-3120878690">`Inventory`</span> model. As best practice, forms in Django are defined in <span class="jsx-3120878690">`forms.py`</span>.

    1from django import forms
    2
    3from .models import Inventory
    4
    5class InventoryForm(forms.ModelForm):
    6
    7    class Meta:
    8        # the model
    9        model = Inventory
    10        # the fields you want visible in the form
    11        fields = ('item', 'item_code','item_description')

python

For the form to be visible to the user, you have to render it in an HTML file. This means you need both a view and an HTML file.

### Form View in views.py

    1from .forms import InventoryForm
    2from django.shortcuts import render
    3def new_inventory(request):
    4    if request.method == "POST": # data was sent to server
    5        form = InventoryForm(request.POST)# instantiate form object with data sent from user   
    6        if form.is_valid(): # no errors or missing values
    7            form.save() # save form data to database
    8    else: # normal get request
    9        form = InventoryForm() # instantiate empty form
    10    
    11    return render(request, 'inventoryapp/add_inventory.html', {'form': form})

python

The code block above renders a model form for the <span class="jsx-3120878690">`Inventory`</span> model onto an HTML page.

### Form View in HTML File

Below is a snippet of an HTML file in which the form is rendered. The HTML file is referenced in the <span class="jsx-3120878690">`new_inventory`</span> view as <span class="jsx-3120878690">`add_inventory.html`</span>.

    1{% extends 'myapp/base.html' %}
    2
    3{% block content %}
    4    <h2>New inventory</h2>
    5    <form method="POST" class="inventory-form">{% csrf_token %}
    6        {{ form.as_p }}
    7        <button type="submit" class="save btn btn-default">Save</button>
    8    </form>
    9{% endblock %}

html

Normal Form
-----------

This type of form does not serve a model. It is used to get information from the user and process it in one way or another. A common use case is a login form. It is not linked to a model, but you use the username and password to authenticate a user. Below are code snippets for how to set up a simple form

### forms.py

    1from django import forms
    2
    3class LoginForm(forms.Form):
    4    username = forms.CharField(label='Your name', max_length=100)
    5    password = forms.PasswordInput()

python

### views.py

    1from django.http import HttpResponseRedirect
    2from django.shortcuts import render
    3
    4from .forms import LoginForm
    5
    6def get_name(request):
    7    if request.method == 'POST': # data was sent from user
    8        # instantiate form object with data sent from user
    9        form = LoginForm(request.POST)
    10        if form.is_valid(): # no errors
    11            # authenticate user and log them in
    12            # redirect to dashboard:
    13            return HttpResponseRedirect('/dashboard/')
    14    else: # get request
    15        form = LoginForm()
    16
    17    return render(request, 'login.html', {'form': form})

python

### HTML File

    1<form action="/login/" method="post">
    2    {% csrf_token %}
    3    {{ form }}
    4    <input type="submit" value="Submit">
    5</form>

html

Third-party Packages
--------------------

The basic forms rendered are not usually as appealing as one would wish. They need more work on styling. For this, third-party packages have been developed to style forms and give them a face lift. The most common are:

1.  [Django widget tweaks](https://pypi.org/project/django-widget-tweaks/)

2.  [Django crispy forms](https://django-crispy-forms.readthedocs.io/)

Conclusion
----------

Mastery of form manipulation and associated methods gives you the power to design better and more efficient data collection techniques within a Django web app.

To further build on this guide and your knowledge of forms, follow this official [guide](https://docs.djangoproject.com/en/3.1/ref/class-based-views/mixins-editing/#formmixin) to learn more about *FormMixins*, classes that provide methods and facilities for creating and displaying forms. They are most commonly used with [Class-based Views (CBV)](https://docs.djangoproject.com/en/3.1/topics/class-based-views/).

10

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

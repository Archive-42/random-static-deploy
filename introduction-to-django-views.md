<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Introduction to Django Views
============================

### Kimaru Thagana

-   Oct 28, 2020
-   7 Min read
-   1,399 Views

-   Oct 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,399 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

14

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-sampleapp" class="menu-link">Sample App</a>
-   <a href="#module-classbasedviewsgeneric" class="menu-link">Class-based Views (Generic)</a>
-   <a href="#module-functionbasedviews" class="menu-link">Function-based Views</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In the model view controller (MVC) architecture, the view component deals with how data is presented to users for consumption and viewing. In the Django framework, [views](https://docs.djangoproject.com/en/3.1/topics/http/views/) are Python functions or classes that receive a web request and return a web response. The response can be a simple HTTP response, an HTML template response, or an HTTP redirect response that redirects a user to another page. Views hold the logic that is required to return information as a response in whatever form to the user. As a matter of best practice, the logic that deals with views is held in the <span class="jsx-3120878690">`views.py`</span> file in a Django app.

This guide will explore how to use views in Django as a data display and viewing tool. It will also explore the two major types of views: class-based and function-based views. It assumes that you have at least beginner level knowledge of Django and a general understanding of the Django MVC. An introductory guide to Django can be found [here](introduction-to-web-development-in-python-and-django.html).

Sample App
----------

To better understand views, consider a Django app for a sports inventory. The model has details about the sports items being stored. Below is a snippet for the model.

    1from django.db import models
    2
    3class Inventory(models.Model):
    4    item = models.CharField(max_length=20)
    5    item_code = models.IntegerField()
    6    item_condition = models.CharField(max_length=50)
    7    def __str__(self):
    8        return self.item

python

Class-based Views (Generic)
---------------------------

Class-based views allow you to create views from inherited classes, thus making coding the views much easier. Generally, there are five types of common class-based views (generic) that perform the CRUD (create, retrieve, update, delete) operations for any common web app. All of these views involve operating on data via a model instance. At all times, a model instance is provided.

### List View

As the name suggests, the list view generates a list of items in the model from the database. Here is a sample list view class for the sports inventory app.

    1from django.views.generic import ListView
    2from . models import Inventory
    3class SportsItemListView(ListView):
    4    model = Inventory
    5    # a html file that will display a list of all the items in inventory model
    6    template_name = 'sports/items.html' 
    7    context_object_name = 'items' # how the list will be referred to in the html template

python

### DetailView

The <span class="jsx-3120878690">`detailview`</span> command is used to display the data for a single record from the database. Here is sample code for a detail view to display a single record from the <span class="jsx-3120878690">`Inventory`</span> table in your app.

    1from django.views.generic import DetailView
    2from . models import Inventory
    3
    4class SportsItemDetailView(DetailView):
    5    model = Inventory
    6    template_name = 'book/detail.html'
    7    context_object_name = 'item'

python

### CreateView

<span class="jsx-3120878690">`createview`</span> creates a new record in the database using the model instance.

    1from django.views.generic import CreateView
    2from . models import Inventory
    3from django.urls import reverse_lazy
    4
    5class ItemCreateView(CreateView):
    6    model = Inventory
    7    template_name = 'sports/create_item.html'
    8    fields = ('item', 'item_code', 'item_condition', )
    9    success_url = reverse_lazy('sports-list')

python

### UpdateView

The <span class="jsx-3120878690">`updateview`</span> command performs an update operation to an existing record in the database.

    1from django.views.generic import UpdateView
    2from . models import Inventory
    3from django.urls import reverse_lazy
    4
    5class ItemUpdateView(UpdateView):
    6
    7    model = Inventory
    8    template_name = 'sports/update.html'
    9    context_object_name = 'item'
    10    fields = ('item', 'item_code', 'item_condition', )
    11
    12    def get_success_url(self):
    13        return reverse_lazy('item-detail', kwargs={'pk': self.object.id})

python

### Delete View

<span class="jsx-3120878690">`deleteview`</span> is used to perform a delete operation on a single record in the database via the specified model.

    1from django.views.generic import DeleteView
    2from . models import Inventory
    3from django.urls import reverse_lazy
    4
    5class ItemDeleteView(DeleteView):
    6    model = Inventory
    7    template_name = 'sports/delete.html'
    8    success_url = reverse_lazy('item-list')

python

Function-based Views
--------------------

Function-based views are functions that return an HTTP response after executing the required business logic of a certain view.

### Simple HTTP Response

This is used in cases where the message is very simple—maybe just short text—important, and the presentation does not matter. The code snippet below demonstrates a function-based view returning a simple HTTP response.

    1from django.http import HttpResponse
    2
    3def simple_http_response(request):
    4    # perform business logic
    5    return HttpResponse("Hello world from Django !")

python

### HTTP Response Redirect

This redirect is used when the logic requires that after execution, the user is redirected to another view. An example would be after deleting a record in a detail view, the page redirects to the home page.

    1from django.http import HttpResponseRedirect
    2from django.urls import reverse
    3
    4def delete_item(request, id):
    5    #perform delete operation successfully
    6    return HttpResponseRedirect(reverse('url_name_of_homepage'))

python

### Template Response

A template response is used when the response is complex and may require further processing on the HTML side, such as displaying multiple records via looping. This use case also requires proper presentation, so it allows rendering of a HTML file.

    1from django.shortcuts import render
    2def simple_template(request):
    3    # perform business logic
    4    return render(request, "sports/simple_template.html", {})

python

Conclusion
----------

Mastering views is an important aspect of web development, especially using MVC frameworks like Django. This vital skill is beneficial for Python developers holding the role of Django developer, backend engineer, or full-stack engineer in their places of work.

To further build on this guide, research more about the views used in APIs. This will likely involve research on the [Django Rest Framework (DRF)](https://www.django-rest-framework.org/)—more specifically, the <span class="jsx-3120878690">`APIView`</span> class.

As a challenge, finish up the above app for a sports inventory business. Add appropriate URLs to all the views created and design simple HTML pages for displaying the data. [This](https://medium.com/all-about-django/class-based-views-in-django-89108c1f51fb) guide will give you a good idea of how to navigate this task.

14

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

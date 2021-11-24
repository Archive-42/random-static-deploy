<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Introduction to Django Signals
==============================

### Kimaru Thagana

-   Oct 28, 2020
-   5 Min read
-   8,950 Views

-   Oct 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   8,950 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Django</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Back End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Server-side Frameworks</span>

Introduction

60

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-usecasescenario" class="menu-link">Use Case Scenario</a>
-   <a href="#module-presavesignal" class="menu-link">Pre-save Signal</a>
-   <a href="#module-postsavesignal" class="menu-link">Post-save Signal</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When saving data to a database, there are unique use cases where the business requirement of an application may require some processing just before or after saving the data. This means there should be a way to know when data is about to be saved or has just been saved in the database by the Django model method <span class="jsx-3120878690">`save()`</span>.

One possible way is to override the <span class="jsx-3120878690">`save()`</span> method on each model.

A neater and more efficient way is to use [Django signals](https://docs.djangoproject.com/en/3.1/topics/signals/). These components work on the concept of *senders* and *receivers*. The sending component is usually the model, and the receiving component is usually the processing function that works on the data once it receives a *notification* that the data is just about to be saved or has just been saved.

This guide will explore how to use signals in Django as a method to pre-process and post-process data on its way to the database or just after saving to the database. It assumes you have at least beginner level knowledge in Django and a general understanding of the Django MVC, especially the models component. An introductory guide to Django can be found [here](introduction-to-web-development-in-python-and-django.html), and a refresher guide on Django models can be found [here](https://app.pluralsight.com/guides/introduction-to-django-models).

Use Case Scenario
-----------------

Consider a use case where you have an ecommerce Django app with an orders and inventory model. The business logic is such that before an order is saved, the inventory should be checked to ensure the item is in stock.  
Also, after an order is saved, there should be a logic to send a notification that the order has been received. Below is a codeblock for the sample models.

    1from django.db import models
    2from django.contrib.auth.models import User
    3class Inventory(models.Model):
    4    item = models.CharField(max_length=20)
    5    item_code = models.IntegerField()
    6    item_condition = models.CharField(max_length=50)
    7    quantity = models.IntegerField()
    8    def __str__(self):
    9        return self.item
    10
    11class Order(models.Model):
    12    ord_number = models.CharField(max_length=20)
    13    inventory_item = models.ForeignKey(Inventory)
    14    ordered_by = models.ForeignKey(User)
    15    quantity = models.IntegerField()
    16    def __str__(self):
    17        return self.ord_number

python

Pre-save Signal
---------------

A pre-save signal is used in situations where logic has to be executed before data is saved to a database. In your case, this involves determining whether an order is valid by checking whether the item exists in inventory. The code block below defines a function to achieve this objective. The function can live within <span class="jsx-3120878690">`models.py`</span>.

    1from django.db.models.signals import pre_save
    2def validate_order(sender, instance, **kwargs):
    3    if instance.quantity < instance.inventory_item.quantity: # order can be fulfilled
    4        instance.save()
    5    else:
    6        # write logic to reject save and give message why
    7
    8pre_save.connect(validate_order, sender=Order)

python

In the above code block, you have defined your business logic in the <span class="jsx-3120878690">`validate_order()`</span> function and using the <span class="jsx-3120878690">`pre_save`</span> function, and you have connected the receiver function to the sender, which is the <span class="jsx-3120878690">`Order`</span> model.

Post-save Signal
----------------

This is where you notify the user that the order has been successfully received. The <span class="jsx-3120878690">`post_save`</span> logic is just a normal function, the receiver function, but it's connected to a sender, which is the <span class="jsx-3120878690">`Order`</span> model. The code block below demonstrates the sample receiver function as a post-save.

    1from django.db.models.signals import post_save
    2from myapp.utils import send_notification
    3
    4def notify_user(sender, instance, **kwargs):
    5   send_notification(instance.ordered_by)
    6
    7post_save.connect(notify_user, sender=Order)

python

With this, once an order is successfully placed, the client will be notified via email or text, depending on what the business use case demands.

Conclusion
----------

With knowledge of Django signals, you can now build robust web apps that can pre-process data during pre-save and post-save. This flexibility also allows you to build customized workflows that better address the needs of specific use cases.

To build on this guide, research more on signals and receivers, including how they work and if they can be overridden. Overridding gives the programmer the ability to customize pre-built functions. You might also bee interested in how a pre-save or post-save signal differentiates between a new record save and an update save for an existing record.

60

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

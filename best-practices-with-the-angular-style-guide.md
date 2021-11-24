<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Best Practices with the Angular Style Guide
===========================================

### Zachary Bennett

-   Sep 29, 2020
-   5 Min read
-   3,539 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   3,539 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Angular</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

Introduction

14

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-namingconventions" class="menu-link">Naming Conventions</a>
-   <a href="#module-ruleofone" class="menu-link">Rule of One</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Angular is a big, opinionated JavaScript framework that is heavily used by enterprises and organizations that are looking to write JavaScript that scales. When using any big framework like Angular—especially on a developer team of substantial size—it is imperative that you follow recommended best practices. Following the official Angular style guide is a big step towards producing clean, maintainable code that is written the "Angular" way. By following the style guide, you will ensure that your code stands the test of time!

In this guide, we will touch on some of the key principles kept within the [Angular coding style guide](https://angular.io/guide/styleguide) and look at some code samples in order to cement our knowledge.

Let's dive in!

Naming Conventions
------------------

The first best practice is a blanket term that covers the many naming conventions that are each considered to be the "Angular" way of naming entities within your app. The following is a list of the most important conventions to use when naming things:

-   File names should always be dash-delimited, with dots being used to denote the "type" of the file so that it is easy to tell what entity is contained with the file. Ex: Prefer <span class="jsx-3120878690">`currency-converter.pipe.ts`</span> over <span class="jsx-3120878690">`currencyConverterPipe.ts`</span>

-   All service classes should end with the term <span class="jsx-3120878690">`Service`</span>. Ex:

        1@Injectable()
        2export class ShippingLaneService {
        3...

    typescript

-   Selectors for your components should always be dash-delimited, like files, and contain the appropriate app prefix. This is so that your custom selectors closely match the surrounding HTML but are also easily distinguishable due to the prefix. Ex:

        1<div>
        2    <app-customer-navbar></app-customer-navbar>
        3</div>
        4...

    html

-   Module classes should always end with the term <span class="jsx-3120878690">`Module`</span> so that it is clear what functionality is encapsulated by this class/module. Ex:
        1@NgModule({
        2...
        3})
        4export class ShippingLaneModule {
        5...

    typescript

By following these naming conventions, you will ensure that your app is more easily maintainable. Developers who onboard onto your project will have a much easier time getting up to speed! For more naming conventions, check out the [naming portion](https://angular.io/guide/styleguide#naming) of the official Angular style guide.

Rule of One
-----------

Another important piece to the Angular style guide is the Rule of One. The Rule of One is adapted from the Single Responsibility Principle in software engineering that essentially states that your app or program should be split up into different areas of concern with each area focused on one piece of program or system functionality.

For example, let's say your Angular app is concerned with showing shipping lanes to users on a map. Adhering to the Rule of One means that your Angular app will be split into different feature modules that each implement the business logic for one feature. For this app, you may have the following features:

-   Interactive map
-   Shipping lane data ingest
-   User profile

In order to ensure that this app follows the Rule of One, you would essentially create a separate module for each one of these features. At a high level, each of these modules might look like the following:

    1// map.module.ts
    2NgModule({...})
    3export class MapModule {
    4    // Declares map-related components and services
    5    // Each of these nested components and services also follow the "Rule of One"
    6}

typescript

    1// shipping-lane.module.ts
    2NgModule({...})
    3export class ShippingLaneModule {
    4    // Declares shipping lane related components and services, i.e. ShippingLaneService, ShippingLaneComponent
    5    // Each of these nested components and services also follow the "Rule of One"
    6}

typescript

    1// user-profile.module.ts
    2NgModule({...})
    3export class UserProfileModule {
    4    // Declares user profile related components and services
    5    // Each of these nested components and services also follow the "Rule of One"
    6}

typescript

By following the Rule of One, you will ensure that your app is as simple as possible. This will make your app much more maintainable in the long run.

Conclusion
----------

By following these suggestions from the Angular style guide, you are gaining the following benefits:

-   Your app will be more maintainable and easy to reason about
-   New developers will be onboarded much more easily because your app is doing things "the Angular way"
-   Your app will play nicely with other Angular dependencies and third-party components

Out of these benefits, arguably the most important one is the ease of onboarding new developers. By following the Angular style guide closely, you can ensure that new Angular developers can easily get up to speed on your app because they will not have to learn a bunch of custom domain knowledge. This means less mental complexity, and that is always a good thing when it comes to developing your app!

For a deeper dive and to see how else the Angular style guide can benefit your app, you can check out the official [Angular coding style guide](https://angular.io/guide/styleguide#angular-coding-style-guide).

14

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

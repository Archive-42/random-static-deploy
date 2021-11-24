<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Understanding the Angular Root App Module
=========================================

### Zachary Bennett

-   Sep 29, 2020
-   5 Min read
-   1,560 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,560 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Angular</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-rootapplicationmodule" class="menu-link">Root Application Module</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The more complex your app is, the more important it is to adhere to the *separation of concerns* design principle. In software engineering, separation of concerns is a design principle where you split your program or app up into different areas of intent. For instance, in an Angular app for showing movie ratings, you may have the following pieces of functionality:

-   Display movie information
-   Provide user profiles
-   Fetch movie information
-   Allow rating of movies
-   Recommend new movies

At first glance, this seems straightforward. However, even an app that only needs the above features can quickly become unwieldy without properly separating each piece of functionality into its own self-contained area within the code. Modules are how you ensure that your Angular app follows this design principle. In this guide, you will learn about the Angular module system. You will learn how you can use this system to properly structure your app with special focus on the root app module.

Let's dive in!

Root Application Module
-----------------------

Angular modules are the top-level architectural type within your Angular app. Modules exist at the highest level of abstraction available within the Angular framework. Everything in your app is ultimately structured around modules. This is powerful! It means that you can easily encapsulate code within a module and share or reuse it throughout your app. When looking at the Angular module system, all things must begin with the root app module.

The root app module is a necessary portion of every Angular app. By default, this module is named <span class="jsx-3120878690">`AppModule`</span>, although it is possible to rename this module if you so choose. The <span class="jsx-3120878690">`AppModule`</span> is the entry point to your app. You can think of the <span class="jsx-3120878690">`AppModule`</span> in a similar fashion to the <span class="jsx-3120878690">`main`</span> function that is available in other languages such as C\# and C++. Acting as an entry point, it is also the top-level container for your app's functionality and view layer.

When you generate a new Angular app, the <span class="jsx-3120878690">`AppModule`</span> is generated at <span class="jsx-3120878690">`src/app/app.module.ts`</span> and looks like this:

    1import { BrowserModule } from '@angular/platform-browser';
    2import { NgModule } from '@angular/core';
    3
    4import { AppComponent } from './app.component';
    5
    6@NgModule({
    7  declarations: [
    8    AppComponent
    9  ],
    10  imports: [
    11    BrowserModule
    12  ],
    13  providers: [],
    14  bootstrap: [AppComponent]
    15})
    16export class AppModule { }

typescript

Ideally, you want to keep your <span class="jsx-3120878690">`AppModule`</span> as slim and as unchanged from the above code as possible. You can keep your <span class="jsx-3120878690">`AppModule`</span> slim via the following techniques:

-   Only import modules that are absolutely necessary for your app to load initially
-   Only declare Angular components, directives, or pipes that you want globally available

By following these two principles, you can ensure that your app doesn't become bloated. The question is, "How is it possible to follow these two principles?" I mean, after all, you need more components and functionality in your app! The answer lies within feature modules and lazy loading. The term *feature modules* was coined to describe the best practice of creating different modules within your Angular app that correspond to different features of your app. Lazy loading is a term used to describe the ability of your app to load JavaScript "lazily" on an on-demand basis.

Following the example of the movie app above, you could have a feature module that is entirely responsible for recommending new movies. This module might look like this:

    1...
    2@NgModule({
    3  declarations: [
    4    RecommendationComponent,
    5    RecommendationChartComponent,
    6    ApprovalComponent
    7  ],
    8  imports: [
    9    BrowserModule,
    10    ReactiveFormsModule,
    11    SharedModule
    12  ],
    13  providers: []
    14})
    15export class RecommendationModule { }

typescript

But be careful! You don't want to import this new feature module into the <span class="jsx-3120878690">`AppModule`</span> unless you explicitly mean to. By ensuring that this feature module is connected to a lazily loaded route, you can ensure that your <span class="jsx-3120878690">`AppModule`</span> doesn't load your feature module eagerly and that the <span class="jsx-3120878690">`RecommendationModule`</span> is instead loaded on demand. This means that your bundle size is smaller and that your app continues to load speedily!

Lazy loading is a big topic in and of itself, and thus it is beyond the scope of this guide. For more info on lazy loading, check out this related [Pluralsight guide](https://app.pluralsight.com/guides/bundling-and-code-splitting-in-angular).

Conclusion
----------

The root app module is just the beginning. It is a necessary part of any Angular app, but it is also just the entry point to the rest of your app's feature modules. A healthy Angular app imports only exactly what is needed within the root <span class="jsx-3120878690">`AppModule`</span> because all of the JavaScript within this module is eagerly loaded. By importing the bare minimum into your <span class="jsx-3120878690">`AppModule`</span>, you can ensure that your app loads as fast as possible.

To learn more about Angular modules and how you can use them to structure your app in the way that makes the most sense, check out the Angular [module documentation](https://angular.io/guide/ngmodules).

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

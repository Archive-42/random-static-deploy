<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

The Purpose and Benefits of Testing in Angular
==============================================

### Zachary Bennett

-   Oct 1, 2020
-   5 Min read
-   2,288 Views

-   Oct 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   2,288 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Angular</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

Introduction

11

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-angularunittesting" class="menu-link">Angular Unit Testing</a>
-   <a href="#module-angularendtoendtesting" class="menu-link">Angular End-to-end Testing</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Testing is an integral part of any Angular app. Apart from the peace of mind it brings, ensuring that your Angular app is tested gives you the following benefits:

-   Fewer bugs in production
-   Fewer code regressions
-   More maintainable code
-   Faster refactoring and upgrades
-   Less dead code

In this guide, you will get a closer look into the two types of testing that the Angular framework facilitates: unit and end-to-end testing. You will learn how you can use these two types of testing in order to take advantage of all of the benefits mentioned above.

Let's get started!

Angular Unit Testing
--------------------

Your Angular unit tests comprise the foundation of your app's testing story. The purpose of unit tests is to test your codebase function by function. Angular makes it easy for you to write unit tests for all of your Angular entities, from components to pipes and everything in between. By default, unit tests are generated for you when you use the Angular CLI's <span class="jsx-3120878690">`generate`</span> command to add a new entity. You can run <span class="jsx-3120878690">`ng generate component dog-breed`</span> to create a new component with a companion unit test along with it.

Let's say you have the following unit test for your <span class="jsx-3120878690">`DogBreedComponent`</span>:

    1import { TestBed, async, ComponentFixture } from '@angular/core/testing';
    2import { DogBreedComponent } from './dog-breed.component';
    3
    4describe('DogBreedComponent', () => {
    5  beforeEach(async(() => {
    6    TestBed.configureTestingModule({
    7      declarations: [
    8        DogBreedComponent
    9      ],
    10    }).compileComponents();
    11  }));
    12
    13  it('gets instantiated', () => {
    14    const fixture = TestBed.createComponent(DogBreedComponent);
    15    const comp = fixture.componentInstance;
    16    expect(comp).toBeTruthy();
    17  });
    18
    19  it(`should contain a breed description`, () => {
    20    const description = 'This is a breed description',
    21              fixture = TestBed.createComponent(DogBreedComponent),
    22                 comp = fixture.componentInstance,
    23          baseElement = fixture.nativeElement;
    24
    25    comp.description = description;
    26    fixture.detectChanges(); // Force our changes to run through Angular's change detection mechanim
    27
    28    expect(baseElement.querySelector('.breed-description').textContent).toEqual(description);
    29  });
    30
    31});

typescript

The above unit test file tests that the <span class="jsx-3120878690">`DogBreedComponent`</span> properly instantiates and displays the description within its template. Notice how you are able to test this component in isolation. The purpose of unit tests is to test each individual piece of functionality of your app. This buys you granular guarantees about your app and ensures that your code will be more maintainable and easier to refactor when the time comes.

Angular End-to-end Testing
--------------------------

Unlike unit tests, end-to-end tests focus on the big picture. The purpose of end-to-end tests is to ensure that your app functions properly from the perspective of the user. Whereas unit tests focus on testing individual pieces of your app in isolation, end-to-end tests run against a running instance of your app.

Normally, end-to-end tests are created for every page within your app. Here is an example of an end-to-end test suite for the dog breed app's home page:

    1import { browser, by, element } from 'protractor';
    2
    3describe('Dog Breed Home Page', () => {
    4  it('should display the app title', () => {
    5    browser.get('/');
    6
    7    expect(
    8        element(by.id('home-page-title').getText()
    9    ).toEqual('Welcome to Breed-topia!');
    10  });
    11});

typescript

See the difference between end-to-end tests and unit tests? The simple test suite above actually navigates to your app inside of a browser (typically headless Chrome) and tests that it looks and functions properly. Inside of end-to-end tests, it is your job to pretend to be the user as you navigate your app. End-to-end tests ensure that your app is free from regression bugs that might be introduced by new features or refactoring. They are integral in order to ensure your production build is functioning properly from the perspective of the user.

Conclusion
----------

Through easy unit and end-to-end testing integration, Angular provides you many benefits. By writing unit tests, you can guard your code against regressions and provide a strong foundation that facilitates maintainability and ease of growth for your app. In the same way, end-to-end tests that run against your Angular app will ensure that your app functions as expected. This will ward off pesky bugs that can be introduced into production and will help facilitate the creation and/or extension of continuous integration and deployment pipelines for your app.

Testing is absolutely necessary to ensure your Angular app is maintainable. Check out the [documentation for testing Angular apps](https://angular.io/guide/testing/) for more information.

11

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

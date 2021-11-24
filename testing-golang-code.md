<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/dc7e9418-80cb-4265-834a-c3f76b809ebe.jpg" alt="Author avatar" class="jsx-3841407315" />

Michael Levan

Testing Code in Go Language
===========================

### Michael Levan

-   Oct 2, 2020
-   6 Min read
-   1,947 Views

-   Oct 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,947 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Programming Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">General Purpose</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages, Frameworks, and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Golang (Go)</span>

Introduction

16

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-thegotestingpackage" class="menu-link">The Go Testing Package</a>
-   <a href="#module-testingexample" class="menu-link">Testing Example</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Have you ever used an app or some code from GitHub, received errors, and had no idea why? Maybe you had to reach out to the vendor or the maintainer of the GitHub repository to ask for help. These types of situations can be mitigated with proper testing.

When it comes to code quality, one of the first things you should think about is testing code. Testing code from the start is the difference between shipping a product that is riddled with bugs and one that is consumer-ready.

In this guide, you'll learn the first steps toward getting started with testing in Go using the built-in testing package.

The Go Testing Package
----------------------

When you're testing code in other languages besides Go, one of the first questions to come to mind is, *What library or framework am I going to use?* Luckily, with Go, there is a testing package built in. That means the testing package is part of the standard library and you don't have to use an external framework.

The package provides support for ad-hoc and automated testing of Go packages. Once you write the test, you can run it using the <span class="jsx-3120878690">`go test`</span> command.

The <span class="jsx-3120878690">`go test`</span> command will look at all Go files in the current directory where you're running the command form. <span class="jsx-3120878690">`go test`</span> will look for two keywords:

1.  Any Go file that ends with <span class="jsx-3120878690">`_test.go`</span>
2.  All function names that start with <span class="jsx-3120878690">`Test`</span>

Although not mandatory, the function name should start with a capital <span class="jsx-3120878690">`T`</span>. Otherwise, linters like Golint will throw errors to the console.

Some popular ways to use the Go testing package include:

-   Running tests directly from the command-line in an ad-hoc fashion.
-   Running automated tests
-   Running tests in pipelines. For example, you can use a GitHub Actions workflow to kick off a Go test. That means the test will run before the code even attempts to build, so you know if issues occur from the start.

### Benchmark Tests

A cool feature included in the Go testing package is for benchmark tests,—that is, to see the speed of the code. If fast code and deploying quickly is important to you, you may find yourself testing solutions in different languages. An example is testing a function in Python vs. Go and seeing which one is faster.

With the benchmark feature, you can easily clock the code.

Testing Example
---------------

There are many types of testing. Some of the most popular include:

-   Unit testing
-   Integration testing
-   Mock testing
-   Smoke testing
-   Regression testing
-   User acceptance testing

And there are many others.

In fact, the different types of testing can fill a whole book (and there are books to prove it).

The key type of test this guide will focus on is unit testing, which is a test that ensures each part of your code delivers the desired output, that is, what you're expecting.

Below is an example of a Go test.

    1package main
    2
    3import (
    4 "testing"
    5
    6    "github.com/stretchr/testify/assert"
    7)
    8
    9func TestAddition(t *testing.T) {
    10    x := 2
    11    y := 2
    12
    13   assert.Equal(t, x, y, "x and y should be the same")
    14}

go

Let's go over it section by section.

The first section is to create a main package.

    1package main

go

Next, specify what packages you want to import. The first is the standard test package and the second is an <span class="jsx-3120878690">`assert`</span> package. Assert provides a list of testing tools, for example, to see whether two values equal each other in a unit test.

    1import (
    2 "testing"
    3
    4    "github.com/stretchr/testify/assert"
    5)

go

Finally, you have the function. The function is comprised of a few key aspects that are a must for testing:

-   First, the function name starts with <span class="jsx-3120878690">`Test`</span>, which tells Go that this function isn't just a standard function, but a testing function.
-   The argument <span class="jsx-3120878690">`t`</span> is of type <span class="jsx-3120878690">`*testing.T`</span>. <span class="jsx-3120878690">`*testing`</span> is calling the value of type testing and type <span class="jsx-3120878690">`.T`</span> is for managing test state and formatted test logs.

The function itself returns a simple test. It tests whether the <span class="jsx-3120878690">`x`</span> and <span class="jsx-3120878690">`y`</span> variable are both of an <span class="jsx-3120878690">`int`</span> of 2. To test that the two variables are equal, use the <span class="jsx-3120878690">`assert`</span> package.

The assert package contains:

-   The <span class="jsx-3120878690">`t`</span> argument to let assert know that you're testing against the function
-   The two variables, <span class="jsx-3120878690">`x`</span> and <span class="jsx-3120878690">`y`</span>, which are passed in because those are the variables you're testing
-   The string <span class="jsx-3120878690">`"x and why should be the                                         same"`</span>, which tells the <span class="jsx-3120878690">`Equal()`</span> function what the desired outcome should be

    1func TestAddition(t *testing.T) {
    2 x := 2
    3 y := 2
    4
    5    assert.Equal(t, x, y, "x and y should be the same")
    6}

go

Save the code into a Go file. Remember, the Go file needs to end with <span class="jsx-3120878690">`_test.go`</span>. For simplicity's sake, save the Go file as <span class="jsx-3120878690">`main_test.go`</span>.

To run the test, run the following command:

    1go test main_test.go

go

The output should look similar to the screenshot below.

![Go Test](../../pluralsight2.imgix.net/guides/acfd0875-0db5-4aa0-8245-e7f8bf16ddb4_1.html)

Congrats! You have successfully run a unit test in Go.

Conclusion
----------

Quality code is important in all scenarios, whether it's code going out to a customer or code staying internal for your fellow teammates to use. One thing holds true: the code must work. Code that you write can work at that exact moment, but once it's committed to source control, you have zero idea whether it'll work again unless you're manually testing it every five minutes.

With tests, you can remove that manual process of having to test code and automate the testing process. It saves you time and helps everyone by ensuring the code they're interacting with works as expected.

16

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

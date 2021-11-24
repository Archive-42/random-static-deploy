<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/6a09bbcc-4892-4d50-a42e-421eb7b98d0c.jpg" alt="Author avatar" class="jsx-3841407315" />

Matt Ferderer

Using in, out, and ref with Parameters in C\#
=============================================

### Matt Ferderer

-   Oct 13, 2020
-   6 Min read
-   122,479 Views

-   Oct 13, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   122,479 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Programming languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> C\#</span>

Introduction

398

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-theinrefandoutmodifiers" class="menu-link">The in, ref, and out Modifiers</a>
-   <a href="#module-therefmodifier" class="menu-link">The ref Modifier</a>
-   <a href="#module-theoutmodifier" class="menu-link">The out Modifier</a>
-   <a href="#module-theinmodifier" class="menu-link">The in Modifier</a>
-   <a href="#module-modifiersarenotallowedonallmethods" class="menu-link">Modifiers Are Not Allowed on All Methods</a>
-   <a href="#module-overloadingmethodswithmodifiers" class="menu-link">Overloading Methods with Modifiers</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#module-abouttheauthor" class="menu-link">About the Author</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In this guide, we will look at the difference between using <span class="jsx-3120878690">`in`</span>, <span class="jsx-3120878690">`out`</span>, and <span class="jsx-3120878690">`ref`</span> when passing reference and value types as parameters in C\# methods. These techniques allow you to change how C\# handles altering data locally in the method as well as outside the method.

Before reading this article, you should have an understanding of [passing reference and value types](csharp-passing-reference-vs-value-objective.html).

The in, ref, and out Modifiers
------------------------------

Method parameters have modifiers available to change the desired outcome of how the parameter is treated. Each method has a specific use case:

-   <span class="jsx-3120878690">`ref`</span> is used to state that the parameter passed *may* be modified by the method.

-   <span class="jsx-3120878690">`in`</span> is used to state that the parameter passed *cannot* be modified by the method.

-   <span class="jsx-3120878690">`out`</span> is used to state that the parameter passed *must* be modified by the method.

Both the <span class="jsx-3120878690">`ref`</span> and <span class="jsx-3120878690">`in`</span> require the parameter to have been initialized before being passed to a method. The <span class="jsx-3120878690">`out`</span> modifier does not require this and is typically not initialized prior to being used in a method.

The ref Modifier
----------------

By default, a reference type passed into a method will have any changes made to its values reflected outside the method as well. If you assign the reference type to a new reference type inside the method, those changes will only be local to the method. See my Pluralsight guide [Passing a Reference vs. Value](csharp-passing-reference-vs-value-objective.html) for examples. Using the <span class="jsx-3120878690">`ref`</span> modifier, you have the option to assign a new reference type and have it reflected outside the method.

    1class ReferenceTypeExample
    2{
    3  static void Enroll(ref Student student)
    4  {
    5    // With ref, all three lines below alter the student variable outside the method.
    6    student.Enrolled = true;
    7    student = new Student();
    8    student.Enrolled = false;
    9  }
    10
    11  static void Main()
    12  {
    13    var student = new Student
    14    {
    15      Name = "Susan",
    16      Enrolled = false
    17    };
    18
    19    Enroll(ref student);
    20
    21    // student.Name is now null since a value was not passed when declaring new Student() in the Enroll method
    22    // student.Enrolled is now false due to the ref modifier
    23  }
    24}
    25
    26public class Student {
    27  public string Name {get;set;}
    28  public bool Enrolled {get;set;}
    29}

csharp

Using the <span class="jsx-3120878690">`ref`</span> modifier, you can also change value types outside the method as well.

    1class ReferenceTypeExample
    2{
    3  static void IncrementExample(ref int num)
    4  {
    5    num = num + 1;
    6  }
    7
    8  static void Main()
    9  {
    10    int num = 1;
    11    IncrementExample(ref num);
    12    // num is now 2
    13  }
    14}

csharp

The out Modifier
----------------

Using the <span class="jsx-3120878690">`out`</span> modifier, we initialize a variable inside the method. Like <span class="jsx-3120878690">`ref`</span>, anything that happens in the method alters the variable outside the method. With <span class="jsx-3120878690">`ref`</span>, you have the choice to *not* make changes to the parameter. When using <span class="jsx-3120878690">`out`</span>, you must initialize the parameter you pass inside the method. The parameter being passed in often is null.

    1class ReferenceTypeExample
    2{
    3  static void Enroll(out Student student)
    4  {
    5    //We need to initialize the variable in the method before we can do anything
    6    student = new Student();
    7    student.Enrolled = false;
    8  }
    9
    10  static void Main()
    11  {
    12    Student student;
    13
    14    Enroll(out student); // student will be equal to the value in Enroll. Name will be null and Enrolled will be false.
    15  }
    16}
    17
    18public class Student {
    19  public string Name {get;set;}
    20  public bool Enrolled {get;set;}
    21}

csharp

The <span class="jsx-3120878690">`out`</span> modifier works with value types as well. A useful example is using the <span class="jsx-3120878690">`out`</span> modifier to change a string to an int.

    1int x;
    2Int32.TryParse("3", out x);

csharp

The in Modifier
---------------

The <span class="jsx-3120878690">`in`</span> modifier is most often used for performance reasons and was introduced in C\# 7.2. The [motivation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-7.2/readonly-ref#motivation) of <span class="jsx-3120878690">`in`</span> is to be used with a struct to improve performance by declaring that the value will not be modified. When using with reference types, it only prevents you from assigning a new reference.

    1class ReferenceTypeExample
    2{
    3  static void Enroll(in Student student)
    4  {
    5    // With in assigning a new object would throw an error
    6    // student = new Student();
    7
    8    // We can still do this with reference types though
    9    student.Enrolled = true;
    10  }
    11
    12  static void Main()
    13  {
    14    var student = new Student
    15    {
    16      Name = "Susan",
    17      Enrolled = false
    18    };
    19
    20    Enroll(student);
    21  }
    22}
    23
    24public class Student
    25{
    26  public string Name { get; set; }
    27  public bool Enrolled { get; set; }
    28}

csharp

Modifiers Are Not Allowed on All Methods
----------------------------------------

It's important to note that <span class="jsx-3120878690">`in`</span>, <span class="jsx-3120878690">`out`</span>, and <span class="jsx-3120878690">`ref`</span> cannot be used in methods with the <span class="jsx-3120878690">`async`</span> modifier. You can use them in synchronous methods that return a task, though.

You cannot use them in iterator methods that have a <span class="jsx-3120878690">`yield return`</span> or <span class="jsx-3120878690">`yield break`</span> either.

Overloading Methods with Modifiers
----------------------------------

When overloading a method in C\#, using a modifier will be considered a different method signature than not using a modifier at all. You cannot overload a method if the only difference between methods is the type of modifier used. This will result in a compile error.

Conclusion
----------

Knowing these simple techniques can make your code easier to understand &and simpler to read.

To learn more about passing reference types, value types, and other types in C\# check out [Accelerated C\# Fundamentals by Scott Allen](https://www.pluralsight.com/courses/csharp-fundamentals). Don't forget to try out the [C\# Path](https://www.pluralsight.com/paths/csharp) and see where your skills are at and where you can improve!

About the Author
----------------

Matt Ferderer is a software developer who [tweets](https://twitter.com/mattferderer), [posts](https://linkedin.com/in/mattferderer) and [blogs about web development](https://mattferderer.com/).

398

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

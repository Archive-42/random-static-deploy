<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Nishant Kumar Singh

Explore R Libraries: ggplot2
============================

### Nishant Kumar Singh

-   Oct 23, 2020
-   8 Min read
-   339 Views

-   Oct 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   339 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">ggplot2</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Visualization</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-understandinglayersinggplot2" class="menu-link">Understanding Layers in ggplot2</a>
-   <a href="#module-faceting" class="menu-link">Faceting</a>
-   <a href="#module-coordinatesystem" class="menu-link">Coordinate System</a>
-   <a href="#module-statisticaltransformation" class="menu-link">Statistical Transformation</a>
-   <a href="#module-applyingalllayers" class="menu-link">Applying All Layers</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

<span class="jsx-3120878690">`ggplot2`</span> is a package in the <span class="jsx-3120878690">`tidyverse`</span> collection whose sole motive is to create graphics. It is a well-known library in R based on the concept of layered grammar of graphics. The grammar of graphics enables you to concisely describe the components of a chart, and the layered approach applies those components layer-wise, making it easy to read and understand the code. Apart from building graphs, it is widely used in exploratory data analysis since the best way to understand a dataset is to visualize it, which makes it easier to extract relations.

### Prerequisites

To install the <span class="jsx-3120878690">`ggplot2`</span> package, run one of the following code snippets.

    1#To install the entire tidyverse collection which includes ggplot2
    2install.packages("tidyverse")

html

    1#To install ggplot2 alone
    2install.packages("ggplot2")

html

### Basic Components

There are a few basic components of <span class="jsx-3120878690">`ggplot2`</span>:

-   <span class="jsx-3120878690">`ggplot()`</span>: This creates a new <span class="jsx-3120878690">`ggplot2`</span> object.
-   <span class="jsx-3120878690">`aes()`</span>: This creates the aesthetic mapping means describing how the variables in the data are mapped to visual properties.
-   <span class="jsx-3120878690">`+`</span>: This allows you to add layers while creating any plot.

Understanding Layers in ggplot2
-------------------------------

If we talk about the layers concept in <span class="jsx-3120878690">`ggplot2`</span>, there are four primary layers:

1.  Data: Data or subset of a dataset that has been used to create plots.
2.  Aesthetics: The mappings of the variables in the plot.
3.  Geometrics: The geom function used to represent data points.
4.  Theme: Different visual styles for the plot.

Let's look at the basic graphing template and use it to create a few graphs.

    1ggplot(data = <DATA>) + 
    2  <GEOM_FUNCTION>(mapping = aes(<MAPPINGS>))

html

<span class="jsx-3120878690">`ggplot(data = <DATA>)`</span> is the first layer. Use the mpg dataset, which is included in the <span class="jsx-3120878690">`ggplot2`</span> library and will be available when you load it. Below are the columns of the mpg dataset.

    1data(mpg)
    2colnames(mpg)
    3
    4"manufacturer" "model"        "displ"        "year"         "cyl"          "trans"        "drv"         
    5"cty"          "hwy"          "fl"           "class"

html

Let's create a histogram on the column <span class="jsx-3120878690">`hwy`</span>.

    1#You can ignore theme_classic() function if you want, the resulting plot would be in the default theme.
    2ggplot(mpg, aes(hwy))+
    3geom_histogram(binwidth = 5)+
    4theme_classic()

html

![This is a histogram plot of column "hwy" from "mpg" dataset.](../../pluralsight2.imgix.net/guides/95a4799d-3996-40b0-8694-e1d393e2773e_ggplot1.html)

The code above uses all four layers. Data and aesthetic are included in <span class="jsx-3120878690">`ggplot(mpg, aes(hwy))`</span>, then the <span class="jsx-3120878690">`geom_histogram()`</span> function added the geometrics of the histogram, and finally, <span class="jsx-3120878690">`theme_classic()`</span> is optional.

There are different types of geom functions available in <span class="jsx-3120878690">`ggplot2`</span> that can be used in different situations to create different plots. A geom is a geometric object that uses a plot to represent data, for example, a bar chart will use the bar geom, a line chart will use the line geom, and so on. This is reflected in the names of the geom functions as they are named accordingly, such as <span class="jsx-3120878690">`geom_line()`</span>, <span class="jsx-3120878690">`geom_bar()`</span>, etc.

In addition to primary layers, there are a few other useful features in <span class="jsx-3120878690">`ggplot2`</span> such as coordinate system, faceting, and statistical transformation, which we will explore in the remainder of this guide.

Faceting
--------

In faceting, you split a plot into multiple subplots using any categorical column or variable of the dataset. If you want to divide your plot using one variable, use the <span class="jsx-3120878690">`facet_wrap()`</span> function, and if you want to divide it using two variables, then use the <span class="jsx-3120878690">`facet_grid()`</span> function.

Let's apply both functions on the histogram you created earlier.

    1# Saving histogram plot in a variable
    2a <- ggplot(mpg, aes(hwy))+
    3geom_histogram(binwidth = 5)+
    4theme_classic()
    5
    6# Creating subplots using "cyl" column
    7a + facet_wrap(~cyl)

html

![Facet example 1](../../pluralsight2.imgix.net/guides/ed6ff8d6-c19d-4da0-b7c7-16a50568304e_ggplot2.html)

As you can see, now we have four subplots, one for each unique value against the <span class="jsx-3120878690">`cyl`</span> column.

Now for the <span class="jsx-3120878690">`facet_grid() function`</span>. In this function, you will use two categorical columns from the dataset.

    1# You will use 'a' variable storing the histogram again thus reducing code redundancy
    2
    3a + facet_grid(drv ~ cyl)

html

![Facet example 2](../../pluralsight2.imgix.net/guides/36627d00-91bd-4783-9654-61335e3dc58c_ggplot3.html)

Coordinate System
-----------------

The default coordinate system in <span class="jsx-3120878690">`ggplot2`</span> is a Cartesian coordinate system where the x and y positions are independent to locate a data point. There are different coordinate system functions in <span class="jsx-3120878690">`ggplot2`</span> that is used on different occasions. The most famous ones are <span class="jsx-3120878690">`coord_flip()`</span> and <span class="jsx-3120878690">`coor_polar()`</span>.

Let's look at a few examples to understand the use of <span class="jsx-3120878690">`coord_flip()`</span> and <span class="jsx-3120878690">`coord_polar()`</span>.

    1# First create a bar chart, try to find yourself the reason for using  fill, show.legend, and width arguments 
    2
    3bar <- ggplot(data = mpg) + 
    4     geom_bar(
    5         aes(x = manufacturer, fill = manufacturer), 
    6         show.legend = FALSE,
    7         width = 1  ) 
    8
    9bar

html

![Bar Chart](../../pluralsight2.imgix.net/guides/94853b40-91ab-4735-b2fd-a2841cf6b48f_ggplot4.html)

    1#lets use coord_flip()
    2
    3bar + coord_flip()

html

![coord\_flip()](../../pluralsight2.imgix.net/guides/662dcb7c-86f8-4fda-bd5c-c0f6ac14e43c_ggplot5.html)

As for <span class="jsx-3120878690">`coord_polar()`</span>,let's apply it to the same bar chart to use polar coordinates.

    1bar + coord_polar()

html

![Polar chart](../../pluralsight2.imgix.net/guides/4c63ae02-0a8d-4e08-9b9d-466edf616472_ggplot6.html)

Statistical Transformation
--------------------------

If you look at the bar chart we created previously, you can see it shows additional information, including the count of records against each manufacturer, but the count is not available in the dataset. Some graphs show raw values, while others calculate new values and add them to the plot. The algorithm used to calculate new values for a graph is called a statistical transformation, or stat.

A bar graph can be created using the <span class="jsx-3120878690">`stat_count()`</span> function instead of <span class="jsx-3120878690">`geom_bar()`</span>. Every geom function has a default stat that can be overridden. See the example below.

    1# Creating a dataset
    2library(dplyr)
    3a <- mpg%>% 
    4   group_by(manufacturer)%>%
    5   summarise(Count = n())
    6
    7# Resetting the stat of geom_bar() from count to identity
    8
    9ggplot(data = a)+
    10     geom_bar(mapping = aes(x = manufacturer, y = Count), stat = "identity")

html

![Stat](../../pluralsight2.imgix.net/guides/abd16502-5a61-43b4-9b6c-551cb9b42ac0_ggplot7.html)

Applying All Layers
-------------------

In the previous sections, you learned a foundation of creating a graph using <span class="jsx-3120878690">`ggplot2`</span> along with facets, coordinate systems, and statistical transformation. Now let's apply all of these using the template below.

    1ggplot(data = <DATA>) + 
    2  <GEOM_FUNCTION>(
    3     mapping = aes(<MAPPINGS>),
    4     stat = <STAT>
    5  ) +
    6  <COORDINATE_FUNCTION> +
    7  <FACET_FUNCTION>
    8
    9  

html

Keep <span class="jsx-3120878690">`stat = "count"`</span>, which is a default, and use the mpg dataset only.

    1ggplot(data = mpg)+
    2 geom_bar(mapping = aes(x = manufacturer, fill = manufacturer),
    3   stats = "count", show.legend = FALSE,
    4         width = 1  )+
    5   coord_flip()+
    6   facet_wrap(~year)

html

![Final](../../pluralsight2.imgix.net/guides/088ee9f9-13ee-41c2-8153-62fb583e6e63_ggplot8.html)

Conclusion
----------

This guide explains the basics of creating a graph using <span class="jsx-3120878690">`ggplot2`</span> in R. You can also use <span class="jsx-3120878690">`ggplot2`</span> for your own data visualization requirements or in any data analysis project. There is a lot of flexibility when you are creating graphs with <span class="jsx-3120878690">`ggplot2`</span>. Each function contains a set of arguments that is available to tweak the graph accordingly. As a part of open source development, new features are added continually. This guide gives you a push to explore more in <span class="jsx-3120878690">`ggplot2`</span>.

For more information, visit [this repo](https://github.com/tidyverse/ggplot2/).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

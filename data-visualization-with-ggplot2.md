<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Nishant Kumar Singh

Data Visualization with ggplot2
===============================

### Nishant Kumar Singh

-   Oct 27, 2020
-   5 Min read
-   447 Views

-   Oct 27, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   447 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">ggplot2</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Visualization</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-plottingchartswithggplot2" class="menu-link">Plotting Charts with ggplot2</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

R is an amazing open source platform for data visualization. It is capable of creating any type of chart. But before creating any type of chart you should have an idea that what you want to show and select the chart from there. Suppose you have a dataset that shows stock value fluctuations of a company over a period of time, then we would like to use a graph that shows a comparison of values over time. Based on the dataset and thought of representing data, charts can be divided into four types:

1.  Comparison Charts
2.  Distribution Charts
3.  Composition Charts
4.  Relationship Charts

### Comparison Charts

These types of charts would compare the data among the categories or over time. For comparing over categories you could use a bar chart or column chart. For data points that need to be compared over time you can use a line chart or circular area chart.

### Distribution Charts

These types of charts would show the distribution of data over one or more variables. For the distribution of one variable, you can use a histogram or density plot. The distribution of two variables can be plotted with a scatter plot.

### Composition Charts

These types of charts show changes in composition over time or static composition. For showing the change in composition over time you can use a stacked column chart or stacked area chart. The static composition can be shown through a pie chart or waterfall chart.

### Relationship Charts

These types of charts are used to show the relationship between two or more variables. For showing the relationship between two variables you can use a scatter plot. If you want to show the relationship between three variables you can use a bubble chart.

Plotting Charts with ggplot2
----------------------------

In this section you will plot different types of charts using ggplot2 in R. Below are the prerequisites for using ggplot2. You can get more information about this package [here](https://ggplot2.tidyverse.org/reference/index.html).

    1# Install ggplot2 in Rstudio
    2install.packages("ggplot2")
    3
    4# Loading ggplot2
    5library(ggplot2) 

html

### Creating Comparison Charts

    1# Creating a dataframe 
    2df <- data.frame(trt = c("a", "b", "c"), outcome = c(2.3, 1.9, 3.2))
    3
    4# Plotting a bar plot
    5ggplot(df, aes(trt, outcome)) +
    6geom_bar(stat = "identity")

html

![BarPlot](../../pluralsight2.imgix.net/guides/1925e954-4ccd-4128-8ca1-b5f2456d3f24_bar.html)

    1# Creating dataframe for line plot
    2x <- seq(0.01, .99, length.out = 100)
    3df <- data.frame(
    4  x = rep(x, 2),
    5  y = c(qlogis(x), 2 * qlogis(x)),
    6  group = rep(c("a","b"),
    7  each = 100)
    8)
    9
    10# Creating aline plot
    11ggplot(df, aes(x=x, y=y, group=group))+
    12geom_line()

html

![LinePlot](../../pluralsight2.imgix.net/guides/ee914cac-2654-4740-94ca-689d99825f2f_Line.html)

### Creating Distribution Charts

    1# Using diamonds dataset fro creating a density plot
    2ggplot(diamonds, aes(carat)) +
    3  geom_density()

html

![DensityPlot](../../pluralsight2.imgix.net/guides/99c60625-01a9-4ece-b315-71ca26d2ecb8_Density.html)

In the density plot, there are no bins defined. This kind of plot is used when there is a huge number of data points. When the data points are low you can use a histogram.

    1# geom_point() is used to plot a scatter plot
    2ggplot(mtcars, aes(wt, mpg))+ 
    3geom_point()

html

![PointPlot](../../pluralsight2.imgix.net/guides/a9cebfa5-6ea1-4989-89fb-77936d0240e5_Point.html)

The scatter plot is used to show the distribution of two variables at a time.

### Creating a Composition Charts

There is no geom function available to create a pie chart. However, the bar chart can be converted into a pie chart using the <span class="jsx-3120878690">`coord_polar()`</span> function.

    1# Creating a dataframe 
    2df <- data.frame(trt = c("a", "b", "c"), outcome = c(2.3, 1.9, 3.2))
    3# Plotting a pie plot
    4ggplot(df, aes(x ="", y = outcome, fill = trt)) +
    5geom_bar(width = 1,stat = "identity")+
    6coord_polar("y", start = 0) 

html

![Pie](../../pluralsight2.imgix.net/guides/c07368e2-eb79-4395-bffc-46f628bdbe19_pie.html)

### Creating a Relationship Chart

The bubble chart is an extension of a scatter plot. In a scatter plot, you can show the relationship between two variables. In the bubble chart, you can show the relationship between three variables at a time.

    1# Creating a Bubble chart
    2ggplot(mtcars, aes(x=wt, y=mpg)) + 
    3  geom_point(aes(size=qsec)

html

![Bubble](../../pluralsight2.imgix.net/guides/5cd8592e-cb0a-4fda-9bae-5522e0518c0e_Bubble.html)

Conclusion
----------

There are a huge number of graphs available, each with a specific quality and used to show certain factors that are hidden in data. You don't need to learn each and every graph, but a few are very important if you want to do data analysis. Data visualization is a huge topic and there are a number of packages developed for visualization purposes. If you want to learn in more detail please visit [here](https://rkabacoff.github.io/datavis/).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Nishant Kumar Singh

Exploratory Data Analysis in R with Tidyverse
=============================================

### Nishant Kumar Singh

-   Oct 29, 2020
-   8 Min read
-   3,110 Views

-   Oct 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   3,110 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages and Libraries</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">R</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-askingquestions" class="menu-link">Asking Questions</a>
-   <a href="#module-variation" class="menu-link">Variation</a>
-   <a href="#module-covariation" class="menu-link">Covariation</a>
-   <a href="#module-correlationplot" class="menu-link">Correlation plot</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Exploratory data analysis (EDA) is not based on a set set of rules or formulas. It is rather a state of curiosity about a dataset. In the beginning, you are free to explore in any direction that seems valid to you; later, your exploration will depend on the ideas that you can apply to the dataset.

In short, exploratory data analysis is an iterative process that can be divided into three steps:

-   Generate questions about your data
-   Visualize, transform, and model your data for the answers
-   Use your learning to generate more questions

This guide will demonstrate how to use the Tidyverse library, which contains all the necessary tools to perform EDA.

    1# installing and loading tidyverse
    2
    3install.packages("tidyverse")
    4library(tidyverse)

html

Asking Questions
----------------

To develop an understanding of your data, you have to ask questions. These questions need to focus your attention on a specific part of your dataset. Exploratory data analysis is a creative process, and it focuses on the quality of the questions rather than quantity. But asking a quality question is difficult when you are starting out.

However, there are few questions that are always helpful to start the iteration of analysis:

-   What type of variation occurs within the variables?
-   What type of covariation occurs between the variables?

The following sections will work on these two questions in a dataset.

Variation
---------

The change of values of a variable is called *variation*. In real life, there is always some variation because there is always some amount of error involved while measuring quantities. Even categorical variables show variation.

The most efficient way to see the variation is through visualizing the variables' distribution. It can also be called *univariate analysis*. How to visualize the distribution of a variable depends upon whether it is categorical or continuous.

This guide will do EDA on the following dataset.

    1# Loading data 
    2data("diamonds")
    3
    4# Getting the column names from the dataset
    5colnames(diamonds)
    6
    7  "carat"   "cut"     "color"   "clarity" "depth"   "table"   "price"   "x"       "y"       "z"  
    8
    9# lets look at the sample data 
    10head(diamonds)
    11
    12# A tibble: 6 x 10
    13  carat       cut       color   clarity  depth  table  price     x     y     z
    14  <dbl>    <ord>     <ord> <ord>   <dbl> <dbl> <int> <dbl> <dbl> <dbl>
    151 0.23      Ideal         E      SI2         61.5    55    326  3.95  3.98  2.43
    162 0.21     Premium   E      SI1          59.8    61    326  3.89  3.84  2.31
    173 0.23    Good         E      VS1        56.9    65    327  4.05  4.07  2.31
    184 0.290 Premium    I      VS2        62.4    58    334  4.2   4.23  2.63
    195 0.31     Good        J      SI2         63.3    58    335  4.34  4.35  2.75
    206 0.24  Very Good J     VVS2       62.8    57    336  3.94  3.96  2.48  

html

When you look at the data you can decide whether a variable is categorical or continuous. Look at the distribution for the variable <span class="jsx-3120878690">`cut`</span> by plotting a bar chart.

    1# Plotting a bar plot
    2
    3ggplot(data = diamonds) +
    4  geom_bar(mapping = aes(x = cut))
    5  

html

![BarPlot](../../pluralsight2.imgix.net/guides/5f727237-cd2f-4a97-8c54-d9a30de5776e_EDA1.html)

In the plot, you can see the distribution of the variable.

Now, pick a continuous variable and plot its distribution.

    1ggplot(data = diamonds) +
    2  geom_histogram(mapping = aes(x = carat), binwidth = 0.5)

html

![Histogram1](../../pluralsight2.imgix.net/guides/bda89bd9-5102-4e11-97b0-a39a03c3670b_EDA2.html)

Here, the <span class="jsx-3120878690">`binwidth`</span> argument is used to set the range of the values in each bar of the histogram, the lower the <span class="jsx-3120878690">`binwidth`</span> the detailed information histogram will show.

    1ggplot(data = diamonds) +
    2  geom_histogram(mapping = aes(x = carat), binwidth = 0.1)

html

![Histogram2](../../pluralsight2.imgix.net/guides/bedfee35-5315-4096-b9b7-c1927bc02661_EDA3.html)

Now that you have analyzed two variables separately, suppose you want to know <span class="jsx-3120878690">`carat`</span> values are distributed for each <span class="jsx-3120878690">`cut`</span>. You can find the answer again by plotting those two variables. The below example plots the data points in two different ways.

    1# Creating facets
    2ggplot(data = diamonds) +
    3  geom_histogram(mapping = aes(x = carat), binwidth = 0.1)+
    4  facet_wrap(~cut)

html

![facet](../../pluralsight2.imgix.net/guides/377f0c42-46c3-4573-950b-c71741caec9b_EDA4.html)

    1# Creating frequency polygon
    2ggplot(data = diamonds, mapping = aes(x = carat, colour = cut)) +
    3  geom_freqpoly(binwidth = 0.1)
    4  

html

![FrequencyPolygon](../../pluralsight2.imgix.net/guides/a2460405-bca0-4914-95db-99cca96ca1b4_EDA5.html)

You can decide which plot is better suited for analyzing the variables in your use case.

These variations might prompt questions such as why there are unusual values in some variables, whether there is any pattern in the distribution, etc. How you investigate depends on your data and your thought process.

Covariation
-----------

*Covariation* is when the values of two or more variables vary in a related manner. The best way to discover covariation is to visualize the relation.

This example plots the relationship between two continuous variables: <span class="jsx-3120878690">`price`</span> and <span class="jsx-3120878690">`carat`</span>.

    1# plotting a scatter plot 
    2
    3ggplot(data = diamonds) +
    4  geom_point(mapping = aes(x = carat, y = price))

html

![ScatterPlot](../../pluralsight2.imgix.net/guides/06de1838-4b23-4f3d-bfc5-5a6957a66d85_EDA6.html)

As you can see in the plot, it is obvious that with an increase in carat the price also increases, but due to a large number of data points, it creates an issue of *overplot*. Overplot is when there are too many data points in a plot, making it very difficult to summarize the findings from the plot.

Instead, try using a boxplot to divide the continuous data points into quartiles. In this example, you will take <span class="jsx-3120878690">`carat`</span> as a categorical variable and create a bin of 0.1.

    1# creating boxplot
    2
    3ggplot(data = diamonds, mapping = aes(x = carat, y = price)) + 
    4  geom_boxplot(mapping = aes(group = cut_width(carat, 0.1)))

html

![Boxplot](../../pluralsight2.imgix.net/guides/68e6699a-e35f-47b5-adb1-212a846e1835_EDA7.html)

Now you can see a few unusual data points. For instance, some one carat diamonds have an exceptionally high price, and the average price of three carat diamonds is relatively low. The data points above three carats can be ignored because they are not contributing much to the analysis. With this plot, you can find the relationship between two categorical variables or one categorical and one continuous variable.

Correlation plot
----------------

Another way to find covariation between all continuous columns of the dataset is to create a *correlation plot.* This method is efficient and can filter out the columns for which you need to do a more detailed analysis.

    1#install package
    2install.packages("corrplot")

html

    1# loading corrplot
    2library(corrplot)
    3# Creating correlation matrix for diamonds dataset
    4D <- cor(diamonds[,c(1, 5,6,7,8,9)])
    5coorplot(D, method = "circle")

html

![Corplot](../../pluralsight2.imgix.net/guides/fd6e459d-d16d-4c82-8b97-d4091ae3b176_EDA8.html) In this plot, the columns with high correlation will show the extreme values that range between 1 and -1; the values near 0 have low correlation.

Conclusion
----------

Whenever there is unknown data handed to you for analysis or some other work you will need to do exploratory data analysis. To do an efficient exploratory data analysis in R you will, knowledge of a few packages will help you write code for handling data. The most important libraries are [ggplot2](https://app.pluralsight.com/guides/explore-r-libraries:-ggplot2) and [dplyr](https://app.pluralsight.com/guides/data-manipulation-with-dplyr). You can get more information [here](https://www.tidyverse.org/).

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

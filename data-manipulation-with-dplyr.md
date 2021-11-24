<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Nishant Kumar Singh

Data Manipulation with Dplyr
============================

### Nishant Kumar Singh

-   Oct 23, 2020
-   8 Min read
-   385 Views

-   Oct 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   385 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Dplyr</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Query Languages</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Development</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-overviewofdplyr" class="menu-link">Overview of dplyr</a>
-   <a href="#module-manipulatingdata" class="menu-link">Manipulating Data</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When working with data, it's important to know what you want to do with the substantial amount of information you have. To figure out the facts from the data, some level of manipulation is necessary, as it is rare to get the data in exactly the right form.

For performing manipulations in R, the dplyr package comes to the rescue. It provides a set of functions for data manipulation activities.

    1# The easiest way to install dplyr is to install the whole tidyverse
    2install.packages("tidyverse")
    3
    4# Alternate way to install only dplyr
    5install.packages("dplyr")

html

Overview of dplyr
-----------------

dplyr provides a consistent set of functions to solve data manipulation problems. Some of these include:

1.  <span class="jsx-3120878690">`filter()`</span>: to select records based on their values
2.  <span class="jsx-3120878690">`arrange()`</span>: to reorder
3.  <span class="jsx-3120878690">`select()`</span>: to select variables from the dataset
4.  <span class="jsx-3120878690">`mutate()`</span>: to add new variables
5.  <span class="jsx-3120878690">`summarize()`</span>: to condense multiple values into one
6.  <span class="jsx-3120878690">`group_by()`</span>: to break down the dataset into specified groups of rows

### Piping Operator

Every data manipulation activity would not simple that will use one or two functions. To make the code easy to read, dplyr uses <span class="jsx-3120878690">`%>%`</span> (the piping operator) from magrittr, which turns <span class="jsx-3120878690">`x%>%f(x)`</span> into <span class="jsx-3120878690">`f(x, y)`</span>. We'll be using this operator to help explain dplyr.

Manipulating Data
-----------------

To explore the functions of dplyr, we need a dataset. We will use the flights dataset from the nycflights13 package, which contains several useful datasets.

    1# Installing nycflights13 package
    2install.packages("nycflights13")
    3library(nycflights13)
    4data(flights)
    5# looking into sample data
    6head(flights)
    7# A tibble: 6 x 19
    8   year month   day dep_time sched_dep_time dep_delay arr_time sched_arr_time arr_delay carrier flight tailnum origin dest 
    9  <int> <int> <int>    <int>          <int>     <dbl>    <int>          <int>     <dbl> <chr>    <int> <chr>   <chr>  <chr>
    101  2013     1     1      517            515         2      830            819        11 UA        1545 N14228  EWR    IAH  
    112  2013     1     1      533            529         4      850            830        20 UA        1714 N24211  LGA    IAH  
    123  2013     1     1      542            540         2      923            850        33 AA        1141 N619AA  JFK    MIA  
    134  2013     1     1      544            545        -1     1004           1022       -18 B6         725 N804JB  JFK    BQN  
    145  2013     1     1      554            600        -6      812            837       -25 DL         461 N668DN  LGA    ATL  
    156  2013     1     1      554            558        -4      740            728        12 UA        1696 N39463  EWR    ORD  
    16# ... with 5 more variables: air_time <dbl>, distance <dbl>, hour <dbl>, minute <dbl>, time_hour <dttm>

html

### Filtering rows

To get a subset of rows from the main dataset, use the <span class="jsx-3120878690">`filter()`</span> function. This function takes <span class="jsx-3120878690">`dataframe`</span> as the first argument, and subsequent arguments are the expression that filters the dataframe.

    1# loading dplyr library
    2library(dplyr)
    3
    4# filtering flights dataframe on year 
    5filter(flights, year ==2013)
    6# adding more expression for year and month
    7filter(flights, year = 2013, month = 1)

html

The filter expressions are applied as an <span class="jsx-3120878690">`AND`</span> operation.

### Arranging Rows

The <span class="jsx-3120878690">`arrange()`</span> function works similarly to <span class="jsx-3120878690">`filter()`</span> except it arranges the rows of the dataframe. The first argument of the function is the dataframe name and the subsequent arguments are the column names.

    1# arranging the flights dataframe on year
    2arrange(flights, year)
    3
    4# arranging dataframe on multiple columns 
    5arrange(flights, year, month, day)
    6
    7# The default order of arrange() function is ascending if we want, we can arrange in descending order
    8arrange(flights, desc(year))

html

When providing multiple columns, each column breaks the arrangement of the rows of the preceding one.

### Selecting Columns

If you are interested only in a few columns of the dataset, pull them using the <span class="jsx-3120878690">`select()`</span> function. The first argument ise the name of the dataframe and subsequent arguments are the names of the columns or expressions.

    1# selecting columns through their names
    2select(flights, year, month, day)
    3
    4# selecting columns with expressions
    5select(flights, starts_with("arr"))

html

### Adding New Columns

To add a new column that is a function of the existing columns in the dataframe, use the <span class="jsx-3120878690">`mutate()`</span> function. The first argument of the mutate function is the name of the dataframe and the subsequent arguments are the formula for the new columns.

    1# The flights dataset has distance and air_time, so we will add speed in the dataframe
    2mutate(flights, speed = distance/air_time)

html

This will create a new column, <span class="jsx-3120878690">`speed`</span>, in the flights dataframe.

### Summarizing Values

Summarized data helps make decisions that are difficult to decide properly going through a huge amount of information. The summarize function helps in this scenario.

    1# lets get mean of the delay time in arrival from flights dataframe.
    2summarize(flights, delay = mean(arr_delay, na.rm = TRUE)

html

The <span class="jsx-3120878690">`summarize()`</span> function is used a lot with the <span class="jsx-3120878690">`group_by()`</span> function as it gives more detailed information when used along with <span class="jsx-3120878690">`group_by()`</span>.

### Grouped Operations

In grouped operations, the dataset breaks down into specified groups of rows. In dplyr, this is done with the <span class="jsx-3120878690">`group_by()`</span> function. The first argument of the function is the data frame name and subsequent arguments are those columns that take part in grouping the rows. We generally use the <span class="jsx-3120878690">`group_by()`</span> function along with some aggregate functions.

    1# Grouping dataset in years
    2group_by(flights, year)
    3# Using along with summarize() function
    4summarize(group_by(flight, year), delay = mean(arr_delay, na.rm = TRUE)

html

When used in the <span class="jsx-3120878690">`summarize()`</span> function, the result is the mean of <span class="jsx-3120878690">`arr_delay`</span> for each year.

### Piping

So far, we have applyied the data manipulation function alone, but in this section, we will take on a task in which we have to use multiple functions and club them with the help of the <span class="jsx-3120878690">`piping(%>%)`</span> operator.

Say you need to calculate the mean delay in arrival and departure for every month of the year 2013 from the flights dataset. If you read the statement, it looks complicated. So you will break it in the code section.

    1# Using functions along with %>% operator
    2
    3flight%>%
    4 filter(year = 2013)%>%                                        # First filter the required rows
    5 select(year, month, arr_delay, dep_delay)%>%                  # Second selecting the necessary columns
    6 group_by(year, month)%>%                                      # Third grouping the rows
    7 summarise( arrival = mean(arr_delay, na.rm = TRUE),
    8            departure = mean(dep_delay, na.rm = TRUE))         # Fourth now calculating the columns

html

The code above uses the <span class="jsx-3120878690">`%>%`</span> operator to give you a better understanding of the code.

Conclusion
----------

Whenever we are working with data, we need to do some manipulations to get the most valuable information. In real-life scenarios, datasets are more complicated and contain a lot of errors, so we have to write code that can manipulates data efficiently and tackles the errors.

Also, the volume of data in real-life cases is much higher. We can handle this if we understand the task and break it into small functions.

You can get more information about dplyr functions [here](https://dplyr.tidyverse.org/reference/index.html).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Nishant Kumar Singh

Merging DataFrames in R
=======================

### Nishant Kumar Singh

-   Oct 27, 2020
-   6 Min read
-   548 Views

-   Oct 27, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   548 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages and Libraries</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">R</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-typesofjoins" class="menu-link">Types of Joins</a>
-   <a href="#module-joiningdataframeswithmerge" class="menu-link">Joining Dataframes with merge()</a>
-   <a href="#module-joiningdataframeswithdplyrjoinfunction" class="menu-link">Joining Dataframes with dplyr:: join Function</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Merging or joining data frames is the process of combining columns from two or more dataframes. It is a well-known operation in programming. In R we can perform join with two functions: <span class="jsx-3120878690">`merge()`</span> of the base package and <span class="jsx-3120878690">`join()`</span> of a dplyr package. Before getting into that, this guide will go through the types of joins.

Types of Joins
--------------

There are four primary types of joins:

### Left Outer Join

Suppose you are joining two tables, A and B, where A is the left table and B is the right table. When you perform a left outer join on A and B, it will return all rows from A and rows that are matching in B. All columns from A and B are returned, but the rows that do not match in B will have <span class="jsx-3120878690">`NA`</span> values for B columns.

### Right Outer Join

A right outer join works similarly to the left outer join. It will return all matching rows from the right table in the left table. All columns from both tables are returned, and the rows that do not match in the left table will have <span class="jsx-3120878690">`NA`</span> values.

### Inner Join

An inner join will return all the matching rows from both tables. If there are multiple matches between both tables, all combinations will be returned.

### Full Join

A full join will return all values of rows and columns from both tables whether they are matching or not.

Joining Dataframes with merge()
-------------------------------

The <span class="jsx-3120878690">`merge()`</span> function belongs to the base package of R. You don't need to install any additional packages to use the <span class="jsx-3120878690">`merge()`</span> function. The arguments of the <span class="jsx-3120878690">`merge()`</span> function, along with the default values that are passed in those arguments, are given below.

    1# Syntax for merge function
    2merge(x, y, by = intersect(names(x), names(y)),
    3      by.x = by, by.y = by, all = FALSE, all.x = all, all.y = all)
    4    

html

-   The first two arguments, <span class="jsx-3120878690">`x`</span> and <span class="jsx-3120878690">`y`</span>, are the name of the dataframes that need to be joined.
-   The next three arguments, <span class="jsx-3120878690">`by`</span>, <span class="jsx-3120878690">`by.x`</span>, and <span class="jsx-3120878690">`by.y`</span>, decide the column used for joining the dataframes. If the name of the column that is needed for joining is the same then you don't need to pass any names. If they are different then you have to pass the names in <span class="jsx-3120878690">`by.x`</span> and <span class="jsx-3120878690">`by.y`</span>.
-   The next three arguments decide the type of join performed by the <span class="jsx-3120878690">`merge()`</span>. The default values will perform an inner join. If <span class="jsx-3120878690">`all.x`</span> is set to <span class="jsx-3120878690">`TRUE`</span> then it will perform a left outer join. If <span class="jsx-3120878690">`all.y`</span> is set to <span class="jsx-3120878690">`TRUE`</span> then it will perform a right outer join. If both are set to <span class="jsx-3120878690">`TRUE`</span> then it will perform a full outer join.

The dataframes used in this example are <span class="jsx-3120878690">`band_members`</span> and <span class="jsx-3120878690">`band_instruments`</span>. The column details are shared below.

    1# Loading dplyr function to use the datasets present in the package
    2library(dplyr)
    3data(band_members)
    4data(band_instruments)
    5
    6# Columns in band_instruments
    7colnames(band_instruments)
    8[1] "name"  "plays"
    9
    10#Columns in band_members
    11colnames(band_members)
    12[1] "name" "band"
    13
    14# Lets look at the data
    15view(band_instruments)
    16  name  plays 
    17  <chr> <chr> 
    181 John  guitar
    192 Paul  bass  
    203 Keith guitar
    21
    22view(band_members)
    23  name  band   
    24  <chr> <chr>  
    251 Mick  Stones 
    262 John  Beatles
    273 Paul  Beatles

html

The code in the next example will perform all four types of joins using the dataframes above and the <span class="jsx-3120878690">`merge()`</span> function.

    1# Performing Left outer join
    2merge(band_members, band_instruments,  all.x = TRUE)
    3  name    band  plays
    41 John Beatles guitar
    52 Mick  Stones   <NA>
    63 Paul Beatles   bass
    7
    8# Performing Right outer join
    9merge(band_members, band_instruments,  all.y = TRUE)
    10   name    band  plays
    111  John Beatles guitar
    122 Keith    <NA> guitar
    133  Paul Beatles   bass
    14
    15# Performing Inner join
    16merge(band_members, band_instruments,  all.y = TRUE, all.x = TRUE)
    17   name    band  plays
    181  John Beatles guitar
    192 Keith    <NA> guitar
    203  Mick  Stones   <NA>
    214  Paul Beatles   bass
    22
    23# Performing Full outer join
    24merge(band_members, band_instruments)
    25  name    band  plays
    261 John Beatles guitar
    272 Paul Beatles   bass

html

In the output of joins you can see that if the matching values are not there they are assigned as <span class="jsx-3120878690">`<NA>`</span>. In the case of an inner join, it is only showing the matching values from both dataframes.

Joining Dataframes with dplyr:: join Function
---------------------------------------------

In comparison to the <span class="jsx-3120878690">`merge()`</span> function, dplyr has four different functions for different types of joins. It avoids confusion because you don't have to set values of the arguments. The join functions are given below:

-   inner\_join()
-   left\_join()
-   right\_join()
-   full\_join()

This example will perform all four types of joins using the above functions.

    1# Performing Inner join
    2inner_join(band_members, band_instruments, by = "name")
    3
    4  name  band    plays 
    5  <chr> <chr>   <chr> 
    61 John  Beatles guitar
    72 Paul  Beatles bass
    8
    9# Performing Left outer join  
    10left_join(band_members, band_instruments, by = "name")
    11
    12  name  band    plays 
    13  <chr> <chr>   <chr> 
    141 Mick  Stones  NA    
    152 John  Beatles guitar
    163 Paul  Beatles bass 
    17
    18# Performing Right outer join 
    19 right_join(band_members, band_instruments, by = "name")
    20
    21  name  band    plays 
    22  <chr> <chr>   <chr> 
    231 John  Beatles guitar
    242 Paul  Beatles bass  
    253 Keith NA      guitar
    26
    27# Performing Full outer join
    28full_join(band_members, band_instruments, by = "name")
    29
    30  name  band    plays 
    31  <chr> <chr>   <chr> 
    321 Mick  Stones  NA    
    332 John  Beatles guitar
    343 Paul  Beatles bass  
    354 Keith NA      guitar

html

Conclusion
----------

When we start working with data stored in different tables or sources then we will start exploring the relationship between them. In this process, we join datasets to get a clear view. This operation happens in every project that works around data.

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

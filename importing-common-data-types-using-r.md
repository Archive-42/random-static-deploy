<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Importing Common Data Types In R
================================

### Benney Au

-   Sep 24, 2020
-   11 Min read
-   160 Views

-   Sep 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   160 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages and Libraries</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">R</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-importingcsvfiles" class="menu-link">Importing CSV Files</a>
-   <a href="#module-importingjsondata" class="menu-link">Importing JSON Data</a>
-   <a href="#module-importingxmldata" class="menu-link">Importing XML Data</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In order to begin a data analysis or modelling project, you first need to fetch and import data into your tool of choice.

In this guide, you will learn to use basic functions in R to work with JSON, CSV, and XML data. This will use data from the [Bureau of Transportation Statistics](https://www.bts.gov/content/average-fuel-efficiency-us-light-duty-vehicles) to illustrate the use of these functions. A basic understanding of the R programming language is assumed knowledge for this guide. You can watch a course on [Programming with R](https://app.pluralsight.com/library/courses/r-programming-fundamentals/table-of-contents) if you need a refresher.

Importing CSV Files
-------------------

Comma-separated values (CSV) is a common format for sharing data as it is simple and easy to understand. Generally, each row in the data file represents a new observation. Within each row, different attributes are separated by commas.

The <span class="jsx-3120878690">`read.csv`</span> function is built into the <span class="jsx-3120878690">`utils`</span> package. This means no third-party packages are required to read CSV files in R.

Create the following <span class="jsx-3120878690">`data.csv`</span> in your current working directory.

    1year,efficiency,sales
    21980,24.3,8949000
    31985,27.6,10979000
    41990,28,9303000
    51991,28.4,8185000
    61992,27.9,8213000
    71993,28.4,8518000
    81994,28.3,8991000
    91995,28.6,8620000
    101996,28.5,8479000
    111997,28.7,8217000
    121998,28.8,8085000
    131999,28.3,8638000
    142000,28.5,8778000
    152001,28.8,8352000
    162002,29,8042000
    172003,29.5,7556000
    182004,29.5,7483000
    192005,30.3,7660000
    202006,30.1,7762000
    212007,31.2,7562000
    222008,31.5,6769000
    232009,32.9,5402000
    242010,33.9,5636000
    252011,33.1,6093000
    262012,35.3,7245000
    272013,36.4,7586000
    282014,36.5,7708000
    292015,37.2,7517000
    302016,37.7,6873000
    312017,39.4,6081000

csv

From your R IDE, you can run the following code to import it:

    1csv <- read.csv('data.csv', header = TRUE)
    2csv
    3
    4typeof(csv)

r

Output:

    1> csv <- read.csv('data.csv', header = TRUE)
    2> csv
    3   year efficiency    sales
    41  1980       24.3  8949000
    52  1985       27.6 10979000
    63  1990       28.0  9303000
    74  1991       28.4  8185000
    85  1992       27.9  8213000
    96  1993       28.4  8518000
    107  1994       28.3  8991000
    118  1995       28.6  8620000
    129  1996       28.5  8479000
    1310 1997       28.7  8217000
    1411 1998       28.8  8085000
    1512 1999       28.3  8638000
    1613 2000       28.5  8778000
    1714 2001       28.8  8352000
    1815 2002       29.0  8042000
    1916 2003       29.5  7556000
    2017 2004       29.5  7483000
    2118 2005       30.3  7660000
    2219 2006       30.1  7762000
    2320 2007       31.2  7562000
    2421 2008       31.5  6769000
    2522 2009       32.9  5402000
    2623 2010       33.9  5636000
    2724 2011       33.1  6093000
    2825 2012       35.3  7245000
    2926 2013       36.4  7586000
    3027 2014       36.5  7708000
    3128 2015       37.2  7517000
    3229 2016       37.7  6873000
    3330 2017       39.4  6081000
    34> typeof(csv)
    35[1] "list"

Importing JSON Data
-------------------

JSON is another popular format for sharing data. It allows hierarchical data types but is more verbose than CSV.

To import JSON, create the <span class="jsx-3120878690">`data.json`</span> file in your working directory:

    1[
    2    {"year": 1980, "efficiency": 24.3, "sales": 8949000},
    3    {"year": 1985, "efficiency": 27.6, "sales": 10979000},
    4    {"year": 1990, "efficiency": 28, "sales": 9303000},
    5    {"year": 1991, "efficiency": 28.4, "sales": 8185000},
    6    {"year": 1992, "efficiency": 27.9, "sales": 8213000},
    7    {"year": 1993, "efficiency": 28.4, "sales": 8518000},
    8    {"year": 1994, "efficiency": 28.3, "sales": 8991000},
    9    {"year": 1995, "efficiency": 28.6, "sales": 8620000},
    10    {"year": 1996, "efficiency": 28.5, "sales": 8479000},
    11    {"year": 1997, "efficiency": 28.7, "sales": 8217000},
    12    {"year": 1998, "efficiency": 28.8, "sales": 8085000},
    13    {"year": 1999, "efficiency": 28.3, "sales": 8638000},
    14    {"year": 2000, "efficiency": 28.5, "sales": 8778000},
    15    {"year": 2001, "efficiency": 28.8, "sales": 8352000},
    16    {"year": 2002, "efficiency": 29, "sales": 8042000},
    17    {"year": 2003, "efficiency": 29.5, "sales": 7556000},
    18    {"year": 2004, "efficiency": 29.5, "sales": 7483000},
    19    {"year": 2005, "efficiency": 30.3, "sales": 7660000},
    20    {"year": 2006, "efficiency": 30.1, "sales": 7762000},
    21    {"year": 2007, "efficiency": 31.2, "sales": 7562000},
    22    {"year": 2008, "efficiency": 31.5, "sales": 6769000},
    23    {"year": 2009, "efficiency": 32.9, "sales": 5402000},
    24    {"year": 2010, "efficiency": 33.9, "sales": 5636000},
    25    {"year": 2011, "efficiency": 33.1, "sales": 6093000},
    26    {"year": 2012, "efficiency": 35.3, "sales": 7245000},
    27    {"year": 2013, "efficiency": 36.4, "sales": 7586000},
    28    {"year": 2014, "efficiency": 36.5, "sales": 7708000},
    29    {"year": 2015, "efficiency": 37.2, "sales": 7517000},
    30    {"year": 2016, "efficiency": 37.7, "sales": 6873000},
    31    {"year": 2017, "efficiency": 39.4, "sales": 6081000}
    32  ]

json

There is no built-in method for parsing JSON in R. However, you can install [jsonlite](https://cran.r-project.org/web/packages/jsonlite/index.html), a popular library for converting R data types to and from JSON.

The code below demonstrates how to install this package and use it to import a JSON file into your R environment.

    1install.packages('jsonlite')
    2
    3json <- jsonlite$fromJSON('data.json')
    4json

r

The output will be the same as the CSV sample, since the input data is the same.

Importing XML Data
------------------

Another common data format is XML. This can be more verbose and therefore lead to larger file sizes. However, if you are working with legacy systems, they may output XML and you will have no ability to change it.

Create the following xml file <span class="jsx-3120878690">`data.xml`</span>:

    1<?xml version="1.0" encoding="UTF-8"?>
    2<root>
    3   <element>
    4      <efficiency>24.3</efficiency>
    5      <sales>8949000</sales>
    6      <year>1980</year>
    7   </element>
    8   <element>
    9      <efficiency>27.6</efficiency>
    10      <sales>10979000</sales>
    11      <year>1985</year>
    12   </element>
    13   <element>
    14      <efficiency>28</efficiency>
    15      <sales>9303000</sales>
    16      <year>1990</year>
    17   </element>
    18   <element>
    19      <efficiency>28.4</efficiency>
    20      <sales>8185000</sales>
    21      <year>1991</year>
    22   </element>
    23   <element>
    24      <efficiency>27.9</efficiency>
    25      <sales>8213000</sales>
    26      <year>1992</year>
    27   </element>
    28   <element>
    29      <efficiency>28.4</efficiency>
    30      <sales>8518000</sales>
    31      <year>1993</year>
    32   </element>
    33   <element>
    34      <efficiency>28.3</efficiency>
    35      <sales>8991000</sales>
    36      <year>1994</year>
    37   </element>
    38   <element>
    39      <efficiency>28.6</efficiency>
    40      <sales>8620000</sales>
    41      <year>1995</year>
    42   </element>
    43   <element>
    44      <efficiency>28.5</efficiency>
    45      <sales>8479000</sales>
    46      <year>1996</year>
    47   </element>
    48   <element>
    49      <efficiency>28.7</efficiency>
    50      <sales>8217000</sales>
    51      <year>1997</year>
    52   </element>
    53   <element>
    54      <efficiency>28.8</efficiency>
    55      <sales>8085000</sales>
    56      <year>1998</year>
    57   </element>
    58   <element>
    59      <efficiency>28.3</efficiency>
    60      <sales>8638000</sales>
    61      <year>1999</year>
    62   </element>
    63   <element>
    64      <efficiency>28.5</efficiency>
    65      <sales>8778000</sales>
    66      <year>2000</year>
    67   </element>
    68   <element>
    69      <efficiency>28.8</efficiency>
    70      <sales>8352000</sales>
    71      <year>2001</year>
    72   </element>
    73   <element>
    74      <efficiency>29</efficiency>
    75      <sales>8042000</sales>
    76      <year>2002</year>
    77   </element>
    78   <element>
    79      <efficiency>29.5</efficiency>
    80      <sales>7556000</sales>
    81      <year>2003</year>
    82   </element>
    83   <element>
    84      <efficiency>29.5</efficiency>
    85      <sales>7483000</sales>
    86      <year>2004</year>
    87   </element>
    88   <element>
    89      <efficiency>30.3</efficiency>
    90      <sales>7660000</sales>
    91      <year>2005</year>
    92   </element>
    93   <element>
    94      <efficiency>30.1</efficiency>
    95      <sales>7762000</sales>
    96      <year>2006</year>
    97   </element>
    98   <element>
    99      <efficiency>31.2</efficiency>
    100      <sales>7562000</sales>
    101      <year>2007</year>
    102   </element>
    103   <element>
    104      <efficiency>31.5</efficiency>
    105      <sales>6769000</sales>
    106      <year>2008</year>
    107   </element>
    108   <element>
    109      <efficiency>32.9</efficiency>
    110      <sales>5402000</sales>
    111      <year>2009</year>
    112   </element>
    113   <element>
    114      <efficiency>33.9</efficiency>
    115      <sales>5636000</sales>
    116      <year>2010</year>
    117   </element>
    118   <element>
    119      <efficiency>33.1</efficiency>
    120      <sales>6093000</sales>
    121      <year>2011</year>
    122   </element>
    123   <element>
    124      <efficiency>35.3</efficiency>
    125      <sales>7245000</sales>
    126      <year>2012</year>
    127   </element>
    128   <element>
    129      <efficiency>36.4</efficiency>
    130      <sales>7586000</sales>
    131      <year>2013</year>
    132   </element>
    133   <element>
    134      <efficiency>36.5</efficiency>
    135      <sales>7708000</sales>
    136      <year>2014</year>
    137   </element>
    138   <element>
    139      <efficiency>37.2</efficiency>
    140      <sales>7517000</sales>
    141      <year>2015</year>
    142   </element>
    143   <element>
    144      <efficiency>37.7</efficiency>
    145      <sales>6873000</sales>
    146      <year>2016</year>
    147   </element>
    148   <element>
    149      <efficiency>39.4</efficiency>
    150      <sales>6081000</sales>
    151      <year>2017</year>
    152   </element>
    153</root>

xml

There are a few different ways to work with XML. The [XML package](https://cran.r-project.org/web/packages/XML/index.html) is built in, but some versions of R have memory leaks. Further, using this package can lead to quite verbose code.

A simpler solution is using [XML2](https://cran.r-project.org/web/packages/xml2/index.html), which is more focused on extracting values out of XML documents.

The code below demonstrates how to extract XML values using the XML2 package into a data structure we can analyze in R.

    1install.packages('xml2')
    2
    3parse_xml <- function (file) {
    4  doc <- xml2::read_xml(file)
    5  efficiency <- xml2::xml_double(xml2::xml_find_all(doc, "//root/element/efficiency"))
    6  sales <- xml2::xml_double(xml2::xml_find_all(doc, "//root/element/sales"))
    7  year <- xml2::xml_double(xml2::xml_find_all(doc, "//root/element/year"))
    8  cbind(efficiency, sales, year)
    9}
    10
    11data <- parse_xml('data.xml')
    12data

r

The code snippet above creates a function to extract the sales, efficiency, and year columns. Then <span class="jsx-3120878690">`cbind`</span> is used to combine all these columns together, producing a table. This code uses xpath queries to search for the given values. If your XML document is complex, it can take a bit of trial and error to query the values you want. For this reason, the XML data format is typically not the preferred way to share data.

This parsing logic is encapsulated in the <span class="jsx-3120878690">`parse_xml`</span> function. This is also helpful for keeping the global environment clean of temporary variables.

Conclusion
----------

Data analysts need to be comfortable importing different data formats to effectively undertake data modelling and analysis projects. This guide has shown you how to import three common formats: XML, JSON and CSV. To further build on these skills, you can watch this course on [Querying and Converting Data Types in R](https://app.pluralsight.com/library/courses/querying-converting-data-types-r/table-of-contents).

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

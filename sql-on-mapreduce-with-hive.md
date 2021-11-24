<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/98bf39ab-eb2b-4e8d-abe5-e48d02fba40c.jpg" alt="Author avatar" class="jsx-3841407315" />

Miguel Saavedra

SQL on MapReduce with Hive
==========================

### Miguel Saavedra

-   Oct 5, 2020
-   5 Min read
-   4,002 Views

-   Oct 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   4,002 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">MapReduce</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Big Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

16

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-hivearchitecture" class="menu-link">Hive Architecture</a>
-   <a href="#module-runningahivejob" class="menu-link">Running a Hive Job</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Hive is the most popular and the most prevalent member of the [Hadoop](https://app.pluralsight.com/guides/an-introduction-to-hadoop) ecosystem today.

With the increasing popularity of big data applications, [MapReduce](https://app.pluralsight.com/guides/getting-started-with-hadoop-mapreduce) has become the standard for performing batch processing on commodity hardware. However, MapReduce code can be quite challenging to write for developers, let alone data scientists and administrators.

Hive is a data warehousing framework that runs on top of Hadoop and provides an SQL abstraction for MapReduce apps. Data analysts and business intelligence officers need not learn another complex programming language for writing MapReduce apps. Hive will automatically interpret any SQL query into a series of MapReduce jobs.

Hive Architecture
-----------------

![hive architecture](../../cwiki.apache.org/confluence/download/attachments/27362072/system_architecture1c70.html?version=1&modificationDate=1414560669000&api=v2) Source: [Apache Software Foundation](https://cwiki.apache.org/confluence/display/Hive/Design)

The diagram above showcases the important components of the Hive architecture. An SQL query gets converted into a MapReduce app by going through the following process:

1.  The Hive client or **UI** submits a query to the **driver**.
2.  The driver then submits the query to the Hive **compiler**, which generates a query plan and converts the SQL into MapReduce tasks.
3.  The compiler communicates with the Hive **metastore** which contains the schema for the data. Any DDL tasks are also performed by connecting to the metastore.
4.  The **execution engine** then submits the job to Hadoop for processing.
5.  Hadoop uses a Hive **SerDe**, or serializer/deserializer, to covert the input format to and from Hive row objects.
6.  Finally, the results are retrieved by the UI.

Running a Hive Job
------------------

Running a Hive query requires some SQL experience as HiveQL queries are almost indistinguishable from SQL queries.

To connect to a Hive session, run the following command:

    1beeline -u jdbc:hive2://<ip>:10000/ -n <username>

bash

The default Hive CLI client is called <span class="jsx-3120878690">`beeline`</span>. It connects to a JDBC URL using a specific user that uses the users defined in HDFS and in the operating system to manage permissions.

From the beeline session, you can then run SQL scripts that connect to HDFS locations, or any other location supported by Hive. The following code block is an example of a DDL statement taken from the [Amazon Customer Reviews Open Dataset](https://s3.amazonaws.com/amazon-reviews-pds/readme.html), which connects to Amazon S3.

    1CREATE EXTERNAL TABLE amazon_reviews_parquet(
    2  marketplace string, 
    3  customer_id string, 
    4  review_id string, 
    5  product_id string, 
    6  product_parent string, 
    7  product_title string, 
    8  star_rating int, 
    9  helpful_votes int, 
    10  total_votes int, 
    11  vine string, 
    12  verified_purchase string, 
    13  review_headline string, 
    14  review_body string, 
    15  review_date bigint, 
    16  year int)
    17PARTITIONED BY (product_category string)
    18ROW FORMAT SERDE 
    19  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe' 
    20STORED AS INPUTFORMAT 
    21  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat' 
    22OUTPUTFORMAT 
    23  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'
    24LOCATION
    25  's3://amazon-reviews-pds/parquet/'

sql

The <span class="jsx-3120878690">`EXTERNAL TABLE`</span> keyword specifies that the table will not be managed by the built-in HDFS <span class="jsx-3120878690">`hive`</span> user. An external table is necessary when storing data outside of the cluster Hive is running on, or even on a directory not owned by the <span class="jsx-3120878690">`hive`</span> user.

Although there is a schema definition written, writes to the location will not be checked by Hive. This is because Hive follows the *schema on read* principle. The schema is applied as Hive reads the data from the source, and not while data is being inserted. This allows for the reading of more complex file types such as the Parquet file type used in this example. Hive can also be used to read CSV files through the CSV SerDe, complex text files through the RegEx SerDe, and even binary files through custom SerDes and <span class="jsx-3120878690">`InputFormats`</span>.

Conclusion
----------

Simple SQL aggregations, joins, and windowing functions can give invaluable insights when run in a larger scale. Hive is one of many members of the Hadoop ecosystem. It is a very simple yet powerful tool to run analytics on petabytes of data using a familiar language. Since Hive is one of the most commonly deployed members of the Hadoop ecosystem, it is essential for data engineers and data analysts to understand these basic concepts.

16

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

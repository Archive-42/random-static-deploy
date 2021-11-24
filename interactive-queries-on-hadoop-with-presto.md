<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/98bf39ab-eb2b-4e8d-abe5-e48d02fba40c.jpg" alt="Author avatar" class="jsx-3841407315" />

Miguel Saavedra

Interactive Queries on Hadoop with Presto
=========================================

### Miguel Saavedra

-   Oct 5, 2020
-   4 Min read
-   1,639 Views

-   Oct 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   1,639 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Presto</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Big Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

11

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-prestoarchitecture" class="menu-link">Presto Architecture</a>
-   <a href="#module-runningqueriesinpresto" class="menu-link">Running Queries in Presto</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Batch processing has been the go-to use case for big data for decades. However, recent years have seen the rise of and need for interactive queries and analytics. Both traditional and modern batch processing frameworks fail to address the need for low-latency queries through a familiar yet useful interface.

Presto is an interactive in-memory query engine with an ANSI SQL interface. This guide will explore the benefits of the Presto query engine and how to run distributed in-memory queries in a Hadoop environment. The contents assume prior knowledge of the Hadoop ecosystem and the Hive Metastore.

Presto Architecture
-------------------

![presto architecture](../../images2.imgbox.com/00/d0/ic7qWsPX_o.html) Source [Presto Documentation](https://prestodb.io/docs/current/overview/concepts.html)

Like most big data frameworks, Presto has a coordinator server that manages worker nodes. The Presto Coordinator needs to connect to a data catalog, normally <span class="jsx-3120878690">`HCatalog`</span>, built on top of the Hive Metastore. The Hive Metastore will contain the data schema information.

The workers will take care of reading data to and from the data store, whether it's S3, HDFS, or other compatible data stores. The operations are all executed in memory, and if the cluster runs out of memory then the job will fail by default with an <span class="jsx-3120878690">`Out of memory`</span> error. The in-memory execution will allow the queries to run and return the results incredibly quickly. The general rule of thumb is that the whole dataset you are analyzing should fit into memory.

Running Queries in Presto
-------------------------

To run queries using presto, you first need to create a Hive table. The following snippets are taken from the SQL on MapReduce with Hive guide.

### Create the Hive Table

Start a <span class="jsx-3120878690">`beeline`</span> session to connect to Hive.

    1beeline -u jdbc:hive2://<ip>:10000/ -n <username>

bash

Afterwards, create a table that points to your data source.

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

Finally, have Hive automatically identify the data partitions.

### Start and Interactive Presto Session

To connect presto to Hive, all you need to do is run the CLI client and specify that you are using the <span class="jsx-3120878690">`hive`</span> data catalog.

    1presto-cli --catalog hive --schema default

bash

Afterwards, you can run your query in an interactive shell prompt. To showcase the difference in query latency, this image shows the following query <span class="jsx-3120878690">`SELECT product_category, COUNT(*) FROM                                       amazon_reviews_parquet GROUP BY                                       product_category;`</span> run on Hive. The query takes approximately 30 minutes to complete using the Hive execution engine.

![Hive Query](../../images2.imgbox.com/21/94/prtocVEk_o.html)

This is the benchmark for the query run on Presto. The query takes less than a minute to obtain the same results.

![Presto Query](../../images2.imgbox.com/72/bd/OgEksQ5g_o.html)

Conclusion
----------

Presto enables interactive querying on a large dataset. You write a query and get a result far more quickly than with other tools. However, speed comes at a price. The requirement that your entire data set fits in memory can make Presto an expensive tool to deploy. Most users therefore use Presto in managed service environments such as [Amazon Athena](https://app.pluralsight.com/library/courses/introduction-amazon-athena) or [Azure Starburst Presto](https://www.starburstdata.com/presto-azure/).

11

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

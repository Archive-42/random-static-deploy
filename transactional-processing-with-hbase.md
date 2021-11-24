<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/98bf39ab-eb2b-4e8d-abe5-e48d02fba40c.jpg" alt="Author avatar" class="jsx-3841407315" />

Miguel Saavedra

Transactional Processing with HBase
===================================

### Miguel Saavedra

-   Oct 7, 2020
-   7 Min read
-   822 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   822 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Big Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Apache HBase</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-hbaseschema" class="menu-link">HBase Schema</a>
-   <a href="#module-hbasearchitecture" class="menu-link">HBase Architecture</a>
-   <a href="#module-insertingdataintohbase" class="menu-link">Inserting Data into HBase</a>
-   <a href="#module-readingdatafromhbase" class="menu-link">Reading Data from HBase</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Hadoop and the members of the Hadoop ecosystem have been known as primarily tools for big data analytics and durable storage. Although they can analyze Terrabytes and even Petabytes of data efficiently, the original Hadoop applications were not meant to efficiently handle transactions, particularly writes to HDFS.

HBase (Hadoop Database) is an open source project that attempts to give Hadoop the ability to make fast, transactional writes to its filesystem. It takes advantage of Hadoop's distributed computing environment to build a durable, consistent, yet high-performing database.

HBase Schema
------------

HBase is a wide column key-value store adapted from Google's [Big Table](https://www.usenix.org/legacy/event/osdi06/tech/chang/chang.pdf). Each row has a specific key known as a *rowkey*. The data in your HBase cluster is stored lexicographically by that rowkey. The data in the row are represented by *columns*, which are grouped together into *column families*. Columns within a column family are stored physically close to each other to take advantage of data locality and minimize communication across nodes.

The following is an example of a table schema in HBase. ![HBase Schema](../../images2.imgbox.com/1d/04/OqU6rhts_o.html) Schema adapted from [AWS Blog Post](https://aws.amazon.com/blogs/big-data/combine-nosql-and-massively-parallel-analytics-using-apache-hbase-and-apache-hive-on-amazon-emr/)

The key in this case is a concatenation of last name, first name, and customer identification number (e.g., <span class="jsx-3120878690">`armstrong_alice_8570365786`</span>). There are three column families: <span class="jsx-3120878690">`address`</span>, <span class="jsx-3120878690">`cc`</span>, and <span class="jsx-3120878690">`contact`</span>. This means that all of a specific customer's address information is stored together on the same physical machine. Their credit card information, since it all belongs to one column family, is also stored together on the same machine, though it may not be on the same machine as the other column families.

Assuming you have Hadoop and HBase installed in your cluster, you can create a table by first running an HBase shell:

    1hbase shell

bash

Then run the <span class="jsx-3120878690">`create`</span> command. The general syntax of the create command is:

    1create '<table_name>', '<column_family_1>', '<column_family_2>', '<column_family_3>', . . . '<column_family_n>'

bash

To create the table illustrated by the schema above, run the following command:

    1create 'customer', 'address', 'cc', 'contact'

bash

HBase Architecture
------------------

![HBase Architecture](../../images2.imgbox.com/6b/0e/12LaVA2W_o.html) Source: [HBase Architecture](https://hbase.apache.org/book.html#arch.overview)

### Overview

HBase consist of several services that coordinate with each other through *Zookeeper*, a distributed service discovery and configuration management server. A certain range of rows is stored in <span class="jsx-3120878690">`HRegions`</span> and served by an <span class="jsx-3120878690">`HRegionServer`</span>. An <span class="jsx-3120878690">`HRegionServer`</span> may serve one or many <span class="jsx-3120878690">`HRegions`</span>. The <span class="jsx-3120878690">`HMaster`</span> determines what <span class="jsx-3120878690">`HRegion`</span> each row is stored in, assigns the <span class="jsx-3120878690">`store`</span> each column family is stored in, and updates the state of the cluster on Zookeeper.

The HBase *client* communicates with the <span class="jsx-3120878690">`HMaster`</span> for DDL statements, but mostly interfaces with the <span class="jsx-3120878690">`HRegionServer`</span> directly to query table data. The client relies on Zookeeper to identify what rows are stored in a particualr region.

### Stores

Each store on HBase consists of a <span class="jsx-3120878690">`MemStore`</span> and zero or more <span class="jsx-3120878690">`StoreFiles`</span>. The <span class="jsx-3120878690">`MemStore`</span> stores all recent writes to HBase in memory for faster data retreival. When the <span class="jsx-3120878690">`MemStore`</span> reaches the limit specified in the <span class="jsx-3120878690">`hbase.hregion.memstore.flush.size`</span> configuration property, the data in the <span class="jsx-3120878690">`MemStore`</span> is flushed to [HDFS](https://app.pluralsight.com/guides/understanding-hadoop's-distributed-file-system) in the form of <span class="jsx-3120878690">`StoreFiles`</span>. A <span class="jsx-3120878690">`StoreFile`</span> contains an <span class="jsx-3120878690">`HFile`</span> where the HBase data actually resides. Technically speaking, <span class="jsx-3120878690">`HFiles`</span> and <span class="jsx-3120878690">`StoreFiles`</span> are separate entities, but they are used interchangeably in practice.

High availability may be an issue if data is not flushed to HDFS. If there is some sort of cluster failure, all data stored in memory, and therefore all the data in the <span class="jsx-3120878690">`MemStore`</span>, is erased. To recover from such failures, HBase maintains a Write Ahead Log, or *WAL*, to store all recent changes made to the table on HDFS. This allows HBase to replay these changes should there be any node failure in the cluster.

Inserting Data into HBase
-------------------------

Now that you understand the basic schema and architecture of HBase, you can begin inserting data into HBase. The general syntax for data inserts using the HBase shell is as follows:

    1put '<table_name>','<rowkey>','<column_family>:<column>','<value>'

hbase

You can insert only one value in one column per <span class="jsx-3120878690">`put`</span> command. The following code block inserts information for two customers in your customer table.

    1put 'customer','armstrong_alice_8570365786','address:city','Claraport'
    2put 'customer','armstrong_alice_8570365786','address:state','NH'
    3put 'customer','armstrong_alice_8570365786','address:street','Melany Gateway'
    4put 'customer','armstrong_alice_8570365786','address:zip','53522'
    5put 'customer','armstrong_alice_8570365786','cc:number','1212-1221-1121-1234'
    6put 'customer','armstrong_alice_8570365786','cc:expire','2024-04-12'
    7put 'customer','armstrong_alice_8570365786','cc:type','visa'
    8put 'customer','armstrong_alice_8570365786','contact:phone','1-871-480-5984'
    9
    10put 'customer','bailey_bob_7073092045','address:city','Graysonfurt'
    11put 'customer','bailey_bob_7073092045','address:state','NV'
    12put 'customer','bailey_bob_7073092045','address:street','Hodkiewicz Glens'
    13put 'customer','bailey_bob_7073092045','address:zip','45250'
    14put 'customer','bailey_bob_7073092045','cc:number','1228-1221-1221-1431'
    15put 'customer','bailey_bob_7073092045','cc:expire','2024-06-12'
    16put 'customer','bailey_bob_7073092045','cc:type','mastercard'
    17put 'customer','bailey_bob_7073092045','contact:phone','1-828-193-0549'

hbase

Reading Data from HBase
-----------------------

There are two operations you can perform to read data from HBase: <span class="jsx-3120878690">`get`</span> and <span class="jsx-3120878690">`scan`</span>.

The <span class="jsx-3120878690">`get`</span> operation allows you to get information from a specific <span class="jsx-3120878690">`rowkey`</span>. The general syntax of a <span class="jsx-3120878690">`get`</span> operation is as follows:

    1get ‘<table_name’>, ‘<rowkey>’, ‘<information>’

hbase

For example, the following query returns the credit card type of Alice Armstrong.

    1get 'customer', 'armstrong_alice_8570365786', 'cc:type'

hbase

You can also get all the information in a given column family.

    1get 'customer', 'armstrong_alice_8570365786', {COLUMN => 'address'}

hbase

If you omit the information field, you can also get all the information of a specific key across all column families.

    1get 'customer', 'armstrong_alice_8570365786'

hbase

It is important to note, however, that the get operation only returns information about a single rowkey. To look for information across row keys, you will need to perform a scan operation. For example, the following query looks for all cities whose rowkey begins with <span class="jsx-3120878690">`armstrong`</span>.

    1scan 'customer', {STARTROW => 'armstrong_', ENDROW => 'armstronh', COLUMN => 'address:city'}

hbase

Conclusion
----------

HBase is a fast and durable database based on Google Big Table and built on top of the Hadoop ecosystem. It gives users full control over where their data is stored and how the system stores and groups together that data. The architecture takes advantage of HDFS' durable and fault-tolerant file system while also utilizing cluster memory to speed up queries.

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

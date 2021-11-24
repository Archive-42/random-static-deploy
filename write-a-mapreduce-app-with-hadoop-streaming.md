<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/98bf39ab-eb2b-4e8d-abe5-e48d02fba40c.jpg" alt="Author avatar" class="jsx-3841407315" />

Miguel Saavedra

Write a MapReduce App with Hadoop Streaming
===========================================

### Miguel Saavedra

-   Oct 8, 2020
-   4 Min read
-   1,018 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   1,018 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Hadoop</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Big Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

2

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-reviewofmapreduce" class="menu-link">Review of MapReduce</a>
-   <a href="#module-mapreducecode" class="menu-link">MapReduce Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Hadoop Common (originally Hadoop Core) is a collection of the core components of any Hadoop ecosystem. These common libraries and services support other members of the Hadoop ecosystem. There are two components that make up basic Hadoop functionality: a distributed storage known as HDFS and a distributed compute known as MapReduce.

This guide will show you how to utilize Hadoop's core MapReduce functionality using the Hadoop streaming tool. This will allow you to write a MapReduce application in any programming language, so long as it has a mapper and reducer function.

Review of MapReduce
-------------------

The [MapReduce](https://app.pluralsight.com/guides/getting-started-with-hadoop-mapreduce) framework is the basis for the majority of data-intensive frameworks today. The following diagram illustrates a basic MapReduce wordcount process.

![MapReduce Wordcount](../../pluralsight2.imgix.net/guides/d554b590-3337-4f1f-9a0d-d42be91eaad8_BtZ5H4kC_o.html)

The corpus of text is first separated into the initial <span class="jsx-3120878690">`<key,value>`</span> pair. With text as the input, the initial <span class="jsx-3120878690">`<key,value>`</span> pair is the line and the contents of the line. Afterwards, the mapper function divides those initial <span class="jsx-3120878690">`<key,value>`</span> pairs into intermediate key value pairs. In this case, each instance of a word is mapped to the value 1. The shuffle phase then sorts each of the <span class="jsx-3120878690">`<key,value>`</span> pairs by key, so that the <span class="jsx-3120878690">`reducer`</span> can take care of aggregating the pairs for the final result.

MapReduce Code
--------------

The [Hadoop Streaming](https://hadoop.apache.org/docs/r1.2.1/streaming.html) utility allows you to submit an executable in any language, so long as it follows the MapReduce standard. This will allow you to write raw MapReduce code without an abstraction layer.

The following is an example of a mapper function called <span class="jsx-3120878690">`wordSplitter.py`</span>, which separates each word in a line into a <span class="jsx-3120878690">`<key,value>`</span> pair. The code loops through every word in a given line and returns a tab-separated word and number pair. The keyword <span class="jsx-3120878690">`LongValueSum`</span> signals to Hadoop's built-in <span class="jsx-3120878690">`aggregate`</span> reducer that the values in the pair need to be totaled.

    1#!/usr/bin/python
    2import sys 
    3import re 
    4
    5def main(argv): 
    6    pattern = re.compile("[a-zA-Z][a-zA-Z0-9]*") 
    7    for line in sys.stdin: 
    8        for word in pattern.findall(line): 
    9            print("LongValueSum:" + word.lower() + "\t" + "1" )
    10
    11if __name__ == "__main__": 
    12    main(sys.argv) 

python

Below is an example of a <span class="jsx-3120878690">`reducer.py`</span> function. What this function does is maintain a running total per key. Since all the data is sorted by key, the aggregation is considered complete once the function reaches the last instance of a particular key. After it reaches that last key, Hadoop Streaming can then call the reducer function for the next key, and so on.

    1#!/usr/bin/env python
    2 
    3import sys
    4 
    5last_key = None
    6running_total = 0
    7 
    8for input_line in sys.stdin:
    9   input_line = input_line.strip()
    10   this_key, value = input_line.split("\t", 1)
    11   value = int(value)
    12 
    13   if last_key == this_key:
    14       running_total += value
    15   else:
    16       if last_key:
    17           print( "%s\t%d" % (last_key, running_total) )
    18       running_total = value
    19       last_key = this_key
    20 
    21if last_key == this_key:
    22   print( "%s\t%d" % (last_key, running_total) )

python

However, for simple aggregations like <span class="jsx-3120878690">`wordcount`</span> or simply totalling values, Hadoop has a built-in reducer called <span class="jsx-3120878690">`aggregate`</span>. The following is an example of a script that runs a Hadoop Streaming job using a custom mapper but built-in aggregate reducer.

    1hadoop-streaming -mapper wordSplitter.py \
    2-reducer aggregate \
    3-input <input location> \
    4-output <output location> \
    5-file myPythonScript.py # Location of the script in HDFS, S3, or other storage

bash

The <span class="jsx-3120878690">`wordSplitter.py`</span> file should be stored in your distributed storage, normally HDFS or Amazon S3. The location of the file should then be passed as an argument to <span class="jsx-3120878690">`hadoop-streamin`</span>. If you're using a custom reducer, you will also need to pass in the custom reducer script.

Conclusion
----------

Hadoop Streaming is one of the first things aspiring Hadoop developers learn. It provides a simple interface to write MapReduce code, however, it takes away the abstraction layer of Hive or Pig by forcing the developer to write raw MapReduce code. It is one of Hadoop's core components and should be present in any and all Hadoop deployments and distributions.

2

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

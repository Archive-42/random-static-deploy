<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Named Entity Recognition with Azure Machine Learning Studio
===========================================================

### Deepika Singh

-   Oct 1, 2020
-   7 Min read
-   830 Views

-   Oct 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   830 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-namedentityrecognition" class="menu-link">Named Entity Recognition</a>
-   <a href="#module-understandtheoutput" class="menu-link">Understand the Output</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Named entity recognition (NER) is a natural language processing task used to identify important named entities in text such as people, places, organizations, date, or any other category. It can be used alone or alongside topic identification and adds a lot of semantic knowledge to the content, enabling us to understand the subject of any given text.

Named entity recognition is an import area in research and text mining. Some use cases are to identify places or people mentioned in a tweet, extract key parts from customer feedback, and compliment or assist in sentiment analysis. In this guide, you will learn how to perform named entity recognition in Azure Machine Learning Studio.

Data
----

In this guide, you will use a dataset containing a column with two sets of text. The first set of text is about the movie *Avengers* and the second is about Pluralsight.

First text: *Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. The movie features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, and others.* (Source: Wikipedia).

Second text: *Pluralsight, Inc. is an American publicly held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website. Founded in 2004 by Aaron Skonnard, Keith Brown, Fritz Onion, and Bill Williams, the company has its headquarters in Farmington, Utah. As of July 2018, it uses more than 1,400 subject-matter experts as authors, and offers more than 7,000 courses in its catalog.Since first moving its courses online in 2007, the company has expanded, developing a full enterprise platform, and adding skills assessment modules.* (Source: Wikipedia).

Start by loading the data into the workspace.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option listed on the left sidebar, followed by the **NEW** button.

![n0](../../pluralsight2.imgix.net/guides/f0015949-3bb8-44c3-a772-e636a667a3ab_r1.html)

Next, click on the blank experiment and a new workspace will open. Give the name <span class="jsx-3120878690">`Named Entity Recognition`</span> to the workspace.

![n1](../../pluralsight2.imgix.net/guides/6e267676-3d05-4384-8beb-0a25393cb588_n1.html)

Next, you will load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![n2](../../pluralsight2.imgix.net/guides/00afbd63-578d-4ee4-b5c7-47001c6f67ea_n2.html)

The selection above will open a window shown below, which can be used to upload the dataset from the local system.

![n3](../../pluralsight2.imgix.net/guides/a63068f7-c0bf-4979-8d3a-4f688f42d58e_n3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is <span class="jsx-3120878690">`ner.csv`</span>. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option as shown below.

![n4](../../pluralsight2.imgix.net/guides/a48eb08a-8a06-4508-901c-0495773205f2_n4.html)

You can see there is a single column with rows containing the two texts highlighted above.

![n4vis](../../pluralsight2.imgix.net/guides/a9206f3b-ed05-4ed6-8c69-3e8ed9b853c5_n4visualnew.html)

Named Entity Recognition
------------------------

The **Named Entity Recognition** module is used to identify things such as names, organizational entities, places, etc. Start by typing "named entity" in the search bar to find the module, and then drag it into the workspace.

![n6](../../pluralsight2.imgix.net/guides/7519ad32-d50c-490a-80e9-da21ed3b90c9_n6.html)

In the output above, you can see the **Story** port. This is the port to which you need to connect the text data, and from which to extract entities. Connect the data to this port as shown below. Run the experiment.

![n7](../../pluralsight2.imgix.net/guides/e18483c3-cf99-4656-bb0a-b0a4b2f80a31_n7.html)

Understand the Output
---------------------

Once the module run is complete, you can right click and select the **Visualize** option to look at the results.

![n8](../../pluralsight2.imgix.net/guides/e788410e-96a6-4573-9434-7f4bb81aa0d1_n8.html)

The output below shows the result from the processing done in the **Named Entity Recognition** module. The output contains 14 rows and five columns. The <span class="jsx-3120878690">`Article`</span> variable represents the text rows, one each for Avengers and Pluralsight text. The <span class="jsx-3120878690">`Mention`</span> variable indicates the part of the sentence identified.

Finally, the <span class="jsx-3120878690">`Type`</span> variable contains the result of the entity. For example, **Marvel Studios** is recognized as **ORG**, which stands for organization. Similarly, **Chris Evans** is recognized as a person, donated as **PER**.

![n9](../../pluralsight2.imgix.net/guides/4c61e20e-0c85-465e-a491-5aa659de666b_n9result1.html)

Scroll down to look at the output for second text corpus on Pluralsight. **Pluralsight, Inc** is recognized as **ORG**, while **Aaron Skonnard** is correctly identified as **PER**. Also, you'll notice that the module has correctly recognized **Farmington** and **Utah** as locations, denoted as **LOC**.

![n10](../../pluralsight2.imgix.net/guides/2285033c-77ab-4250-9a12-8ef2cc6d15b1_n10result2.html)

This simple data gave insight to the power of the **Named Entity Recognition** module to identify names, locations, and entities.

Conclusion
----------

Named entity recognition is an advanced area of natural language processing, and businesses are using it to extract information about named entities from text data. Content recommendation, improvement in website interactivity, concept extraction, and text classification are some common applications of named entity recognition. You can learn more with [this guide on Python](https://app.pluralsight.com/guides/natural-language-processing-named-entity-recognition).

To learn more about data science and machine learning using Azure Machine Learning Studio, please refer to the following guides:

1.  [Getting Started with Azure ML Studio](getting-started-with-azure-ml-studio/index.html)

2.  [Cleaning Data with Azure ML Studio](cleaning-data-with-azure-ml-studio/index.html)

3.  [Data Preprocessing with Azure ML Studio](data-preprocessing-with-azure-ml-studio/index.html)

4.  [Classification Modeling with Azure ML Studio](classification-modeling-with-azure-ml-studio/index.html)

5.  [Regression Modeling with Azure Machine Learning Studio](regression-modeling-with-azure-ml-studio/index.html)

6.  [Model Validation in Azure ML Studio](model-validation-in-azure-ml-studio/index.html)

7.  [R and Python Scripts in Azure ML Studio](r-and-python-scripts-in-azure-ml-studio/index.html)

8.  [Advanced Machine Learning Modeling in Azure ML Studio](advanced-machine-learning-modeling-in-azure-ml-studio/index.html)

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

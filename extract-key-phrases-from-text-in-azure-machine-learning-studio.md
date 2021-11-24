<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Extract Key Phrases from Text in Azure Machine Learning Studio
==============================================================

### Deepika Singh

-   Oct 8, 2020
-   8 Min read
-   1,479 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   1,479 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-problemstatementanddata" class="menu-link">Problem Statement and Data</a>
-   <a href="#module-loaddata" class="menu-link">Load Data</a>
-   <a href="#module-preparetext" class="menu-link">Prepare Text</a>
-   <a href="#module-extractkeyphrases" class="menu-link">Extract Key Phrases</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

One of the key areas of natural language processing (NLP) is extracting one or more meaningful phrases from a corpus of text. There are several situations, mostly in the consumer space, where key phrase extraction is imperative. In this guide, you will learn how to use the module in Azure Machine Learning Studio to extract the key phrases from a text corpus.

Problem Statement and Data
--------------------------

In this guide, you will take up the task of automating reviews in medicine. Medical literature is voluminous and rapidly changing, which increases the need for reviews. Often such reviews are done manually, which is tedious and time-consuming. You will try to extract key phrases from the input variable, <span class="jsx-3120878690">`abstract`</span>.

The dataset you will use comes from a [PubMed](https://pubmed.ncbi.nlm.nih.gov/) search, and contains 1,748 observations and four variables, as described below.

1.  <span class="jsx-3120878690">`title`</span>: Variable that consists of the titles of papers retrieved

2.  <span class="jsx-3120878690">`abstract`</span>: Variable that contains the abstracts of papers retrieved

3.  <span class="jsx-3120878690">`trial`</span>: Variable indicating whether the paper is a clinical trial testing a drug therapy for cancer

4.  <span class="jsx-3120878690">`class`</span>: Target variable which indicates whether the paper is a clinical trial (Yes) or not (No)

Start by loading the data into the workspace.

Load Data
---------

Once you have logged into your Azure Machine Learning Studio account, click the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button.

![k0](../../pluralsight2.imgix.net/guides/8bcf6ad3-ae87-49bf-a3ce-b6ffdc7138df_k0.html)

Next, click the blank experiment and a new workspace will open. Give the name **Azure ML Experiment** to the workspace.

![k1](../../pluralsight2.imgix.net/guides/76161d01-ee78-47be-bdc6-72ff97402108_k1.html)

Next, load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![k2](../../pluralsight2.imgix.net/guides/bde04ae3-621a-40bd-ae41-3f75e5f91605_k2.html)

The selection above will open a window, as shown below, which can be used to upload the dataset from the local system.

![k3](../../pluralsight2.imgix.net/guides/766ecf96-3e6d-4612-a4cb-6e5f4209dbb4_k3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is **nlpdata2.csv**. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option, as shown below.

![k4](../../pluralsight2.imgix.net/guides/4dcc0a8e-060c-4974-82f4-ed59bfdc34e0_k4.html)

You can see there are 1748 rows and four columns.

![k5](../../pluralsight2.imgix.net/guides/959ab02c-2842-4728-887f-9b5383663428_k5.html)

Prepare Text
------------

It is important to pre-process text before you run the module to extract key phrases from the corpus. Common pre-processing steps include:

1.  Remove punctuation: The rule of thumb is to remove everything that is not in the form x,y,z.

<!-- -->

1.  Remove stop words: These are unhelpful words such as 'the', 'is', or 'at'. These are not helpful because the frequency of such stop words is high in the corpus, but they don't help in differentiating the target classes. The removal of stop words also reduces the data size.

<!-- -->

1.  Conversion to lowercase: Words like 'Clinical' and 'clinical' need to be considered as one word. Hence, words with a capital letter are converted to lowercase.

<!-- -->

1.  Stemming: The goal of stemming is to reduce the number of inflectional forms of words appearing in the text. This causes words such as “argue,” "argued," "arguing," and "argues" to be reduced to their common stem, “argu”. This helps in decreasing the size of the vocabulary space.

The **Preprocess Text** module is used to perform these steps as well as other text cleaning steps. Search and drag the module into the workspace. Connect it to the data as shown below.

![k6](../../pluralsight2.imgix.net/guides/ff5075a1-d19a-409e-aaf4-6545b8711080_k6.html)

You must specify the text variable to be preprocessed. To do this, click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`abstract`</span> variable.

![k7](../../pluralsight2.imgix.net/guides/9f998bc4-be04-41ec-b144-d3384c1b887a_k7.html)

Run the experiment and click on **Visualize** to see the result.

![k8](../../pluralsight2.imgix.net/guides/d73d29a8-fc50-45df-b46e-29eed073c89e_k8.html)

You can look at the result below. The <span class="jsx-3120878690">`Preprocessed abstract`</span> variable contains the processed text. If you compare it with the <span class="jsx-3120878690">`abstract`</span> variable, you can see the difference between pre- and post-text preprocessing.

![k9](../../pluralsight2.imgix.net/guides/059e2b37-0ef8-43df-830b-0341b491449d_k9.html)

Extract Key Phrases
-------------------

You have performed the pre-processing step, and the corpus is ready to extract key phrases. In Azure Machine Learning Studio, the **Extract Key Phrases from Text** module performs this task. Search and drag the module into the workspace.

![k10](../../pluralsight2.imgix.net/guides/5d627b59-b687-41bc-bb31-841689399c5c_k10.html)

This module builds upon the natural language processing APIs for key phrase extraction. The module captures the context of the sentence in form of phrases. To specify the text variable, click the module. Next, click the **Launch column selector** option, and select the <span class="jsx-3120878690">`Preprocessed abstract`</span> variable.

![k11](../../pluralsight2.imgix.net/guides/b5623f05-fbde-499b-b811-d48cc14c68e9_k11.html)

Run the module and once the run is completed, right-click and select the **Visualize** option.

![k12](../../pluralsight2.imgix.net/guides/0f8fc5fc-cdc9-491c-a00a-4bae8215874c_k12.html)

The above command will produce the following output. You can see how a long text corpus is converted into more meaningful key phrases or words. The key phrases from the first records are *day day*, *patient tetracosactrin*, and *mg tetracosactrin*, and so on.

![k13](../../pluralsight2.imgix.net/guides/479bbd9b-ca9c-4dc0-b584-46f3aa3e4b2e_k13.html)

Conclusion
----------

In this guide, you learned how to perform key phrase extraction with Azure Machine Learning Studio. There are several application areas, such as monitoring social media and brand sentiment analysis. Some media houses use keyword extraction to understand trending topics, which they use in content production. Research companies use keyword extraction to identify the most representative words in survey responses. Another prominent application is in Search Engine Optimization (SEO), where the main objective is to extract strategic keywords for targeted marketing. You can learn more about this concept [here](http://ceur-ws.org/Vol-706/poster13.pdf).

To learn more about data science and machine learning using Azure Machine Learning Studio, please refer to the following guides:

1.  [Getting Started with Azure ML Studio](getting-started-with-azure-ml-studio/index.html)

2.  [Cleaning Data with Azure ML Studio](cleaning-data-with-azure-ml-studio/index.html)

3.  [Data Preprocessing with Azure ML Studio](data-preprocessing-with-azure-ml-studio/index.html)

4.  [Classification Modeling with Azure ML Studio](classification-modeling-with-azure-ml-studio/index.html)

5.  [Regression Modeling with Azure Machine Learning Studio](regression-modeling-with-azure-ml-studio/index.html)

6.  [Model Validation in Azure ML Studio](model-validation-in-azure-ml-studio/index.html)

7.  [R and Python Scripts in Azure ML Studio](r-and-python-scripts-in-azure-ml-studio/index.html)

8.  [Advanced Machine Learning Modeling in Azure ML Studio](advanced-machine-learning-modeling-in-azure-ml-studio/index.html)

9.  [Named Entity Recognition with Azure Machine Learning Studio](named-entity-recognition-with-azure-machine-learning-studio/index.html)

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

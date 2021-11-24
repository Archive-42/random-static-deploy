<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Text Preprocessing in Azure Machine Learning Studio
===================================================

### Deepika Singh

-   Oct 17, 2020
-   11 Min read
-   847 Views

-   Oct 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   847 Views

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
-   <a href="#module-problemstatementanddata" class="menu-link">Problem Statement and Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-preparetext" class="menu-link">Prepare Text</a>
-   <a href="#module-preprocesstextmodule" class="menu-link">Preprocess Text Module</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Natural Language Processing (NLP) is ubiquitous and has multiple applications. For example, a few use cases include email classification into spam and ham, chatbots, AI agents, social media analysis, and classifying customer or employee feedback as positive, negative, or neutral.

Despite these many applications of NLP, implementation remains difficult because text data is different from tabular transactional data. Cleaning text data is also difficult because you deal with natural language. This is where text processing is helpful to clean the text corpus and make it ready for further operation. In this guide, you will learn how to preprocess text data in Azure Machine Learning Studio.

Problem Statement and Data
--------------------------

In this guide, you will take up the task of automating reviews in medicine. Medical literature is voluminous and rapidly changing, which increases the need for reviews. Often such reviews are done manually, which is tedious and time-consuming. You will try to address this problem by building a text classification model that will automate the process.

The dataset you will use comes from a [Pubmed](https://pubmed.ncbi.nlm.nih.gov/) search, and contains 1,748 observations and four variables, as described below.

1.  <span class="jsx-3120878690">`title`</span>: Variable that consists of the titles of papers retrieved.

2.  <span class="jsx-3120878690">`abstract`</span>: Variable that contains the abstracts of papers retrieved.

3.  <span class="jsx-3120878690">`trial`</span>: Variable indicating whether the paper is a clinical trial testing a drug therapy for cancer.

4.  <span class="jsx-3120878690">`class`</span>: Target variable that indicates whether the paper is a clinical trial (Yes) or not (No)

Start by loading the data into the workspace.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button.

![tp0](../../pluralsight2.imgix.net/guides/c0ba5d6c-1862-412a-b7ca-2ec5f87a7bfe_tp0.html)

Next, click on the blank experiment and a new workspace will open. Give the name **Text preprocessing** to the workspace.

![tp1](../../pluralsight2.imgix.net/guides/da0242cd-4fc0-4052-9961-f249edaed2f0_tp1.html)

Next, load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![tp2](../../pluralsight2.imgix.net/guides/b3522746-d051-4f78-bcf7-6ccbcf746a8a_tp2.html)

The selection above will open the window shown below, which can be used to upload the dataset from the local system.

![tp3](../../pluralsight2.imgix.net/guides/12e536f9-3ef0-4a97-9f60-1974c7ecf76b_tp3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is **nlpdata2.csv**. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option as shown below.

![tp4](../../pluralsight2.imgix.net/guides/5f964f12-2ead-4849-b816-3c6a80f8e71e_tp4.html)

You can see there are 1748 rows and four columns.

![tp5](../../pluralsight2.imgix.net/guides/c25d5eb0-dc19-49f0-b072-7a1f8437cfb1_tp5.html)

Prepare Text
------------

It is important to pre-process text before you run the module to extract key phrases from the corpus. The most common pre-processing steps are:

1.  Remove stop words: These are unhelpful words like 'the', 'is', 'at'. They are not helpful because the frequency of such stop words is high in the corpus, but they don't help in differentiating the target classes. The removal of stop words also reduces the data size.

<!-- -->

1.  Detect Sentences: This inserts a sentence boundary mark while performing analysis. The sentence terminator is represented by three pipe characters: **|||**.

<!-- -->

1.  Remove punctuation: The rule of thumb is to remove everything that is not in the form of x,y,z.

<!-- -->

1.  Normalize case to lowercase: Words like 'Clinical' and 'clinical' need to be considered as one word, so they are converted to lowercase.

<!-- -->

1.  Remove special characters: Non-alphanumeric special characters are replaced with the pipe **|** character.

<!-- -->

1.  Expand verb contractions: This is an important feature applied to verb contractions. For example, selecting this option will replace the phrase "wouldn't buy this product" with "would not buy this product".

<!-- -->

1.  Stemming: The goal of stemming is to reduce the number of inflectional forms of words appearing in the text. This causes words such as “argue,” "argued," "arguing," and "argues" to be reduced to their common stem, “argu”. This helps decrease the size of the vocabulary space.

The **Preprocess Text** module is used to perform the above as well as other text cleaning steps.

Preprocess Text Module
----------------------

Search and drag the module into the workspace. Connect it to the data as shown below.

![tpcopy](../../pluralsight2.imgix.net/guides/9e567510-27c9-4534-bbf2-3eefcd2b7397_tp6copy.html)

You must specify the text variable to be preprocessed. To do this, click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`abstract`</span> variable.

![tp7](../../pluralsight2.imgix.net/guides/20ed4c3e-5076-42e2-8de3-e713d9c41c0c_tp7.html)

After you have selected the column, you can create the preprocessing plan. Select the options you want to keep in the text preprocessing module. In this case, you can keep all the options, as shown below.

![tp8](../../pluralsight2.imgix.net/guides/3ff7a04f-fcc5-4662-8fbb-0e2181c0a6d5_tp8.html)

Run the experiment and click on **Visualize** to see the result.

![tp9](../../pluralsight2.imgix.net/guides/180d2860-4dd7-43c0-8da9-a9c89177fd05_tp9.html)

You can look at the result below. The <span class="jsx-3120878690">`Preprocessed abstract`</span> variable contains the processed text. If you compare it with the <span class="jsx-3120878690">`abstract`</span> variable, you can see the difference pre- and post-text preprocessing.

![tp10](../../pluralsight2.imgix.net/guides/9030ecff-fc0e-4087-ab91-c3884906f0e4_tp10.html)

Sometimes, it may be more convenient to download and explore the changes in detail. Search and drag the **Convert to CSV** module into the workspace.

![tp11](../../pluralsight2.imgix.net/guides/3c84317a-4388-4c98-bf9b-e12820e18be2_tp11.html)

Run the experiment and click the **Download** option.

![tp12](../../pluralsight2.imgix.net/guides/ccc48e94-23c5-48b9-97d7-25c3c1b2203e_tp12.html)

This will download the resulting data into your system. The file name is **Text preprocessing**. This is highlighted in the blue box below.

![tp13](../../pluralsight2.imgix.net/guides/533f4831-9a90-46cb-9375-6bb6288bf593_tp13copy.html)

Open the file and click on any cell in the original <span class="jsx-3120878690">`abstract`</span> variable. This is the text before running the preprocessing module.

![tp16](../../pluralsight2.imgix.net/guides/361de363-5f0b-42e2-b2cc-4393554f9cd3_tp16.html)

The text highlighted in the above image is given below for better visibility.

> 104 nonrandomized patients suffering from metastatic breast cancer were treated with monthly cycles of cyclophosphamide, methotrexate and 5-fluorouracil (CMF). One group (group A, 44 patients) received low-dose CMF and another one (group B, 60 patients) received standard doses. In both cases, therapy was cycled every 29 days. Group A patients had a response rate of 50.7%, including 5 complete remissions. The median duration of response was 8.2 months. For group B patients, the response rate was of 68.1%, including 10 complete remissions. The median duration of response was 10.6 months. Toxicity was greater in group B patients, the main side effects being nausea, vomiting, leukopenia, thrombocytopenia, alopecia and stomatitis.

Now, click on the corresponding cell of the new <span class="jsx-3120878690">`Preprocessed abstract`</span> variable.

![tp17](../../pluralsight2.imgix.net/guides/d79c27ef-b7b2-470e-a40e-bd5c6f971dcf_tp17copy.html)

Again, the text highlighted in the above image is given below for better visibility.

> nonrandomized patient suffer metastatic breast cancer treat monthly cycle cyclophosphamide | methotrexate | fluorouracil | cmf ||| group | group | patient | receive low | dose cmf | group b | patient | receive standard dose ||| case | therapy cycle day ||| group patient response rate | include complete remission ||| median duration response month ||| group b patient | response rate | include complete remission ||| median duration response month ||| toxicity great group b patient ||| main effect nausea | vomit | leukopenia | thrombocytopenia | alopecia stomatitis.

You can see the difference between the <span class="jsx-3120878690">`abstract`</span> and <span class="jsx-3120878690">`Preprocessed abstract`</span> variables. The new variable is more compact, concise, has sentence boundaries, and is more comprehensible.

Conclusion
----------

Text cleaning is one of the most challenging areas of natural language processing. In every application of text analytics, such as email classification, sentiment analysis, key phrase extraction, or visualizing text data, you will be required to perform text cleaning.

In this guide, you learned how to perform text preprocessing in Azure Machine Learning Studio. You can learn more on this concept with guides on other technologies like [Python](nlp-machine-learning-text-data/index.html) and [R](machine-learning-text-data-using-r/index.html).

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

10. [Text Analytics with Azure Machine Learning Studio](text-analytics-with-azure-machine-learning-studio/index.html)

11. [Extract Key Phrases from Text in Azure Machine Learning Studio](extract-key-phrases-from-text-in-azure-machine-learning-studio/index.html)

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

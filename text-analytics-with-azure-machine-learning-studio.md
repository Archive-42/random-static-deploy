<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Text Analytics with Azure Machine Learning Studio
=================================================

### Deepika Singh

-   Sep 25, 2020
-   14 Min read
-   2,629 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">14 Min</span> read
-   2,629 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

10

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-convertdatatype" class="menu-link">Convert Data Type</a>
-   <a href="#module-preprocesstext" class="menu-link">Preprocess Text</a>
-   <a href="#module-featuregeneration" class="menu-link">Feature Generation</a>
-   <a href="#module-selectcolumnsofinterest" class="menu-link">Select Columns of Interest</a>
-   <a href="#module-modelbuilding" class="menu-link">Model Building</a>
-   <a href="#module-crossvalidation" class="menu-link">Cross Validation</a>
-   <a href="#module-modelevaluation" class="menu-link">Model Evaluation</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Natural Language Processing (or NLP) is ubiquitous and has multiple applications. A few use cases include email classification into spam and ham, chatbots, AI agents, social media analysis, and classifying customer or employee feedback into positive, negative, or neutral. This guide will demonstrate how to build a supervised machine learning model on text data with Azure Machine Learning Studio.

Data
----

In this guide, you will take up the task of automating reviews in medicine. Medical literature is voluminous and rapidly changing, which increases the need for reviews. Often such reviews are done manually, which is tedious and time-consuming. You will try to address this problem by building a text classification model that will automate the process.

The dataset you will use comes from a [PubMed](https://pubmed.ncbi.nlm.nih.gov/) search, and contains 1,748 observations and four variables, as described below.

1.  <span class="jsx-3120878690">`title`</span>: Variable that consists of the titles of papers retrieved

2.  <span class="jsx-3120878690">`abstract`</span>: Variable that contains the abstracts of papers retrieved

3.  <span class="jsx-3120878690">`trial`</span>: Variable indicating whether the paper is a clinical trial testing a drug therapy for cancer

4.  <span class="jsx-3120878690">`class`</span>: Target variable which indicates whether the paper is a clinical trial (Yes) or not (No)

You will start by loading the data.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button.

![t0](../../pluralsight2.imgix.net/guides/9b08f555-3746-4f03-82e1-660a074bdd73_r1.html)

Next, click on the blank experiment and a new workspace will open. Give the name "Text Analytics" to the workspace.

![t1](../../pluralsight2.imgix.net/guides/abb7fe02-75a8-4a41-abe9-92bcd72905de_t1.html)

Next you will load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![t2 ](../../pluralsight2.imgix.net/guides/7e4a24c5-f763-4a45-9199-f9208d104f9c_t2.html)

The selection above will open a window shown below, which can be used to upload the dataset from the local system.

![t3](../../pluralsight2.imgix.net/guides/badc6094-927e-4c4d-8bc8-673de89c9920_t3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is **nlpdata2.csv**. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option as shown below.

![t4](../../pluralsight2.imgix.net/guides/6a0ae7ab-ccd4-462b-887a-e2f98b8a6c31_t4.html)

Select the different variables to examine the basic statistics. For example, the image below displays the details for the target variable <span class="jsx-3120878690">`class`</span>.

![t5](../../pluralsight2.imgix.net/guides/34e46b4b-1dcd-4004-8f27-9263b60929d0_t5.html)

You will notice that the target variable takes two unique values. Also, it is displayed as string feature, which needs to be converted to a categorical feature.

Convert Data Type
-----------------

Start by typing "edit metadata" in the search bar to find the **Edit Metadata** module, and then drag it into the workspace.

![t7](../../pluralsight2.imgix.net/guides/f92a6d65-47fa-47db-bdb1-0aa23bf736c4_t7.html)

The next step is to click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`class`</span> variable.

![t8](../../pluralsight2.imgix.net/guides/3bbe0720-92b5-4653-9f94-a435d4017e52_t8.html)

Once you have made this selection, the selected column will be displayed in the workspace. Next, from the dropdown options under **Categorical**, select the **Make categorical** option. Next, run the experiment.

![t9](../../pluralsight2.imgix.net/guides/a51231c2-2ef7-4cab-8166-e7c55f31655e_t9.html)

Preprocess Text
---------------

Now you are ready to build the text classifier. However, this is where things begin to get trickier in NLP. The data is in raw text format, which cannot be used as features. So, this requires text pre-processing.

The common pre-processing steps are given below.

1.  Remove punctuation: The rule of thumb is to remove everything that is not in the form x,y,z.

<!-- -->

1.  Remove stop words: These are unhelpful words like 'the', 'is', 'at'. These are not helpful because the frequency of such stop words is high in the corpus, but they don't help in differentiating the target classes. The removal of stop words also reduces the data size.

<!-- -->

1.  Conversion to lowercase: Words like 'Clinical' and 'clinical' need to be considered as one word. Hence, these are converted to lowercase.

<!-- -->

1.  Stemming: The goal of stemming is to reduce the number of inflectional forms of words appearing in the text. This causes words such as “argue,” "argued," "arguing," and "argues" to be reduced to their common stem, “argu”. This helps in decreasing the size of the vocabulary space.

The **Preprocess Text** module is used to perform the above as well as other text cleaning steps. Search and drag the module into the workspace. Connect it to the output port of **Edit Metadata** module.  
![t13](../../pluralsight2.imgix.net/guides/f7c47631-c4fd-41f0-a69e-a90f5239d16a_t13.html)

You must specify the text variable to be preprocessed. To do this, click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`abstract`</span> variable.

![t14](../../pluralsight2.imgix.net/guides/ebf60f08-340b-4a85-b3bc-79965737d47a_t14.html)

There are several text cleaning options, and because this is clinical research data that may have a complex structure, you will select all the options. Run the experiment.

![t15](../../pluralsight2.imgix.net/guides/380ec50a-f30c-41a6-976e-93edb704857d_t15.html)

The next step is to explore the resulting pre-processed data. Right click and select **Visualize** option.

![t16](../../pluralsight2.imgix.net/guides/dfa03b63-0ccf-4201-bbaa-cd6b1bdfefcc_t16.html)

The output below shows that one more variable, <span class="jsx-3120878690">`Preprocessed abstract`</span>, is added, which contains the changes made in the **Preprocess Text** module.

![t17](../../pluralsight2.imgix.net/guides/abc452bf-89c9-434a-8e33-b97b7d8ff9d8_t17.html)

Run the experiment.

Feature Generation
------------------

You have preprocessed the text, and the next step is to generate a set of features. This is done with the **Feature Hashing** module. How this works is that it takes the text variable and converts it into set of features represented as integers. Search and drag the **Feature Hashing** module into the workspace.

![t24](../../pluralsight2.imgix.net/guides/756acddf-af77-4220-a480-8b5ed60ad061_t24.html)

Click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`Preprocessed abstract`</span> variable.

![t25](../../pluralsight2.imgix.net/guides/cea603cf-cca8-4732-9c2d-ef95a16f080f_t25.html)

Next, use the **Hashing bitsize** parameter to specify the number of bits to use when creating the hash table. Keep the default option of ten. The next step is to provide the value to **N-grams** parameter. Set the value to two. This argument defines the length of the word sequence. Keeping the value to two will result in creation of two word sequences, along with unigrams. Run the experiment.

![t26](../../pluralsight2.imgix.net/guides/df9ccc8b-a85d-4b13-8e7f-1b1f311830d2_t26.html)

Once the experiment run is complete, right click and select the **Visualize** option.

![t27](../../pluralsight2.imgix.net/guides/355175c3-38f6-4a97-9f7e-eeb3755ff25c_t27.html)

Completing the above step will result in the output below. You can see that new features have been added to the data, which now has 1748 observations and 37 columns.

![t28](../../pluralsight2.imgix.net/guides/df6c42ba-c71e-493f-a52c-66524e9daf0a_t28.html)

Select Columns of Interest
--------------------------

You have created new features, and the next step is to select the variables of interest. The **Select Columns in Dataset** module performs this task. Drag it to the workspace.

![t32](../../pluralsight2.imgix.net/guides/a796b635-4417-4b6f-b374-2c104b676655_t32.html)

Select the variables of interest with **Launch column selector**. The target variable, <span class="jsx-3120878690">`class`</span>, and the preprocessed hashed features will be included in model building.

![t33](../../pluralsight2.imgix.net/guides/2dc1906a-37a7-4f7c-a42e-6b983bc2815c_t33.html)

Run the experiment.

Model Building
--------------

You have converted the text data into a format of independent variables, and a target variable. The next step is to build the machine learning model. You will build the classifier with the **Two Class Boosted Decision Tree** module. Search and drag it in the workspace.

![t35](../../pluralsight2.imgix.net/guides/06f45467-6cff-4f89-9cb8-2be324fdb9b8_t35.html)

This module creates a binary classifier using boosted decision tree. This is based on the ensemble machine learning model, in which every tree builds upon the previous tree by correcting its error. For the data used in this guide, every single tree will make predictions on the target class of the dependent variable, <span class="jsx-3120878690">`class`</span>. The final predictions are based on the entire ensemble of trees taken together.

### Configure the Model

The next step is to specify the parameters of the **Two-Class Boosted Decision Tree** module. To do this, click on the module and you will see several training parameters. For **Create trainer mode**, select the **Single Parameter** option that is used when you know how you want to configure the algorithm. The second parameter is **Maximum number of leaves per tree**, which indicates the maximum number of terminal nodes to be created in any tree. Set this value to 20. Fill the other options as shown below.

![t35](../../pluralsight2.imgix.net/guides/06f45467-6cff-4f89-9cb8-2be324fdb9b8_t35.html)

Cross Validation
----------------

Model validation plays an integral part in building powerful and robust machine learning models. Model validation helps ensure that the model performs well on new data, and helps in selecting the best model, the parameters, and the accuracy metrics. The **Cross Validate Model** module performs this task in Azure Machine Learning Studio. Search and drag the **Cross Validate Model** module into the workspace, and create the connections as shown below.

![t36](../../pluralsight2.imgix.net/guides/1d324011-a7ab-433b-8116-3d6d63f3c238_t36.html)

You can see the red flag in the **Cross Validate Model**, which needs to be corrected. Click on the **Launch column selector** option, and select the target variable, <span class="jsx-3120878690">`class`</span>, as shown below.

![t37](../../pluralsight2.imgix.net/guides/cf08ad6a-feb1-4e50-a80f-bff42c501757_t37.html)

Run the experiment.

![t38](../../pluralsight2.imgix.net/guides/a92b8a0f-653f-4ccd-8660-2eee7aaf1ea6_t38.html)

Model Evaluation
----------------

You have built the predictive model on text data, and the next step is to evaluate the model performance. The right output port contains the evaluation results by fold. Right click and select the **Visualize** option.

![t41](../../pluralsight2.imgix.net/guides/23ebf302-c85e-435b-90f8-1eb27a5722bb_t41eval.html)

The following output will be displayed to show the evaluation results by folds. There are ten folds, zero through nine, and for every fold you have results across several metrics such as accuracy, precision, recall, and so on.

![t43](../../pluralsight2.imgix.net/guides/e49be971-848f-46e4-97b3-1cd734c3d319_t43eval2.html)

If you scroll downwards, you will see the mean results across the ten folds.

![t44](../../pluralsight2.imgix.net/guides/7dbfcc20-dad3-4a05-98f0-f1ee4feed7d3_t44eval3.html)

From the above output, you can infer that the mean accuracy, F-score, and AUC value for boosted tree model is 0.70, 0.64 and 0.75, respectively. These results indicate satisfactory model performance.

Conclusion
----------

Natural language processing is an emerging area of data science and artificial intelligence. You can see the application areas of text classification when you open your Gmail account, where the emails are often classified into **Primary**, **Social**, and **Promotions**. Facebook and chatbots are another common application areas. Even traditional industries like banks and manufacturing have adopted text classification.

In this guide, you learned how to build a supervised machine learning classification model on text data using Azure Machine Learning Studio. You can learn more on text classification with guides on other technologies like [Python](https://app.pluralsight.com/guides/nlp-machine-learning-text-data) and [R](https://app.pluralsight.com/guides/machine-learning-text-data-using-r).

To learn more about data science and machine learning using Azure Machine Learning Studio, please refer to the following guides:

1.  [Getting Started with Azure ML Studio](getting-started-with-azure-ml-studio/index.html)

2.  [Cleaning Data with Azure ML Studio](cleaning-data-with-azure-ml-studio/index.html)

3.  [Data Preprocessing with Azure ML Studio](data-preprocessing-with-azure-ml-studio/index.html)

4.  [Classification Modeling with Azure ML Studio](classification-modeling-with-azure-ml-studio/index.html)

5.  [Regression Modeling with Azure Machine Learning Studio](regression-modeling-with-azure-ml-studio/index.html)

6.  [Model Validation in Azure ML Studio](model-validation-in-azure-ml-studio/index.html)

7.  [R and Python Scripts in Azure ML Studio](r-and-python-scripts-in-azure-ml-studio/index.html)

8.  [Advanced Machine Learning Modeling in Azure ML Studio](advanced-machine-learning-modeling-in-azure-ml-studio/index.html)

10

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

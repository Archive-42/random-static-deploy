<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/ce501f54-fed2-4c77-a499-71e5d2c571d4.jpg" alt="Author avatar" class="jsx-3841407315" />

Chhaya Wagmi

Getting Started with BigML
==========================

### Chhaya Wagmi

-   Oct 16, 2020
-   7 Min read
-   696 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   696 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning</span>

Introduction

3

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-importingthetimeseriesdataset" class="menu-link">Importing the Time Series Dataset</a>
-   <a href="#module-datapreprocessing" class="menu-link">Data Preprocessing</a>
-   <a href="#module-buildingamachinelearningmodel" class="menu-link">Building a Machine Learning Model</a>
-   <a href="#module-applyingthemodelonthetestdataset" class="menu-link">Applying the Model on the Test Dataset</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

BigML is a machine learning software hosted on [BigML.com](https://bigml.com/). You can use this platform to perform basic data preprocessing and visualization, and build machine learning models even without coding experience. Both supervised models (linear regression, logistic regression, deepnets, etc.) and unsupervised models (clusters, anomalies, associations, etc.) can be trained and tested on this platform.

For beginners, BigML provides flexibility to build models on a dataset with a maximum size of 10KB free of cost. This guide will demonstrate how to create an end-to-end project on time series data forecasting to give you a clear idea of how you can initiate your own BigML project. The major steps involved in this project are:

-   Importing the time series dataset
-   Data preprocessing
-   Building a machine learning model
-   Applying the model on the test dataset

Importing the Time Series Dataset
---------------------------------

Export the AirPassengers dataset from R or download it from [Kaggle](https://www.kaggle.com/limkongkong/airpassengers) as a CSV file. This dataset has two columns, **Month** and **\#Passengers** . None of the features have any missing or invalid value. The data format of the **Month** column is <span class="jsx-3120878690">`YYYY-MM`</span>. Here's a sneak peek of the data:

<table><thead><tr class="header"><th>Month</th><th>#Passengers</th></tr></thead><tbody><tr class="odd"><td>1949-01</td><td>112</td></tr><tr class="even"><td>1949-02</td><td>118</td></tr><tr class="odd"><td>1949-03</td><td>132</td></tr><tr class="even"><td>1949-04</td><td>129</td></tr><tr class="odd"><td>1949-05</td><td>121</td></tr></tbody></table>

To upload the dataset in your BigML dashboard, start by creating a new project and name it <span class="jsx-3120878690">`Time Series Forecast`</span>.

![Creating a new project](../../pluralsight2.imgix.net/guides/9c83564f-8910-4b56-9914-45a4fbccd196_1.html)

As you can observe in the above image, there are currently no available sources in your project. To bring the dataset inside **Sources**, click on the extreme right icon and upload the <span class="jsx-3120878690">`Airpassengers.csv`</span> file. This will open a green bar pop-up.

![Data uploaded](../../pluralsight2.imgix.net/guides/15daef9d-7794-4a01-bc1b-983cfa462cc3_4.html)

The dataset has a size of only 1.7KB and therefore you can proceed ahead for data preprocessing.

Data Preprocessing
------------------

Click on the dataset and you should see the following screen, which consists of four features:

![First view of the dataset](../../pluralsight2.imgix.net/guides/8aa1ed90-3e9a-4632-82ac-9087ec5b606f_5.html)

You only had two features at the start but now BigML has broken the first feature, **Month**, into **Month.year** and **Month.month**. To keep only the first two features, click on the **Configure source** button and change the data type of **Month** from **Datetime** to **Numeric**. Once the data type is set, click **Update**.

![Changing the data type of Month](../../pluralsight2.imgix.net/guides/e3f409f8-d45c-4ccf-9026-50c4180295a5_6.html)

Have you noticed that you are still working in **Sources**? To create a dataset of the given two features, click on **1-CLICK DATASET** button.

![Creating a BigML dataset](../../pluralsight2.imgix.net/guides/1208596b-96c3-41b3-8261-4e64894c023c_7.html)

This will migrate you from **Sources** to **Datasets** tab. Next, you need to split the complete dataset into two separate datasets, one for training the model and another for testing the model. Since you are currently working on a time series dataset, you should only perform a linear split (strict no to random split). To do so, click on the **LINEAR SPLIT** button, which will initiate the splitting process. After the split, the training data receives 80% of the total observations (115 out of 144).

![Splitting data linearly](../../pluralsight2.imgix.net/guides/4598699f-1f1f-46ab-baed-b4d5677bbe47_8.html)

Building a Machine Learning Model
---------------------------------

If you have ever worked on forecasting a time series data in R then you must be familiar with the <span class="jsx-3120878690">`auto.arima()`</span> function, which presents the best fit model out of various models. BigML also creates multiple forecasting models on a dataset and initially chooses the one that has the best metrics. You can also compare the best fit model with the rest of the models based on metrics like AIC, AICc, BIC, and R squared. Apart from presenting the best fit model, you can also visualize the decomposed model with its level, trend, and seasonality.

To start building the forecasting models on your dataset, click the **TIME SERIES** button.

![Building forecasting models](../../pluralsight2.imgix.net/guides/60934762-6302-403e-bb7e-66328512e21a_10.html)

This will present you with a dashboard with all the information about the best model, other models, and the decomposed model.

**Best Model** ![Best model](../../pluralsight2.imgix.net/guides/f6b67666-87be-40b9-bbed-ead35c58d4e2_11.html)

**Comparison of Models** ![Comparison of Models](../../pluralsight2.imgix.net/guides/254f3925-d004-41f2-96d4-d96814e35e6b_12.html)

**Decomposed Model** ![Decomposed model](../../pluralsight2.imgix.net/guides/c14f729c-924d-4e21-a0f4-da99eaaff467_13.html)

Applying the Model on the Test Dataset
--------------------------------------

So far you have built the model on your training dataset. Now, you need to apply this model on the remaining 20% of data that is inside the testing dataset. To do so, click on the **EVALUATE** button, select the testing dataset, and then click the green **Evaluate** button.

![Evaluating the model on the testing dataset](../../pluralsight2.imgix.net/guides/a9e18c88-ebd2-4eec-976e-be2df6740fe6_14.html)

After the evaluation, you will receive a dashboard with the original training, testing, and forecasting data. Given below is the forecast for the first three best models. The testing data is differentiated in the highlighted area.

![Forecasting on the testing dataset](../../pluralsight2.imgix.net/guides/fc328a5b-c450-4ce0-a5db-b5d2745502ee_15.html)

You can forecast the original data based on any of the available models and, if needed, export the chart in a PNG image with or without legends.

Conclusion
----------

BigML has an efficient, state-of-the-art infrastructure to support data processing, visualizations, and building supervised/unsupervised machine learning models. Currently, it has nine built-in datasets and even gives you the flexibility to upload your own datasets (maximum size 10KB) for your practice, free of cost. This guide presented an end-to-end project (importing/configuring a dataset and building/evaluating models) to get you started with BigML. The Pluralsight course [Leveraging Online Resources for Python Analytics](https://www.pluralsight.com/courses/leveraging-online-resources-python-analytics) also covers BigML for building and sharing analytics. For a more detailed study, you can always refer to [BigML documentation](https://bigml.com/documentation/).

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

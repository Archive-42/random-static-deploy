<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/ce501f54-fed2-4c77-a499-71e5d2c571d4.jpg" alt="Author avatar" class="jsx-3841407315" />

Chhaya Wagmi

Machine Learning with RapidMiner
================================

### Chhaya Wagmi

-   Oct 1, 2020
-   8 Min read
-   907 Views

-   Oct 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   907 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupthedata" class="menu-link">Setting Up the Data</a>
-   <a href="#module-buildingyourfirstregressionmodel" class="menu-link">Building Your First Regression Model</a>
-   <a href="#module-buildingyourfirstclassificationmodel" class="menu-link">Building Your First Classification Model</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

RapidMiner is one of the finest tools for building machine learning models, including deep learning models. According to a [KDnuggets 2018 poll](https://www.kdnuggets.com/2018/05/poll-tools-analytics-data-science-machine-learning-results.html/2), RapidMiner stands at second place, beating R, Excel, and many other known software packages in frequency of use in real projects.

In this guide, you will learn how to build your first regression and classification model using RapidMiner.

Setting Up the Data
-------------------

To start, download the [House Prices: Advanced Regression Techniques](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data?select=train.csv) training dataset from Kaggle. The dataset has 81 attributes and 1460 records. To focus on machine learning and not data cleaning, create a dataset consisting of only five attributes: **OverallQual**, **LotArea**, **Street**, **GarageArea**, and **SalePrice** . These five attributes will be used in building both regression and classification models.

### Loading Data in RapidMiner

Download [RapidMiner Studio](https://my.rapidminer.com/nexus/account/index.html#downloads), install it on your device, and register yourself. Once you are registered, open the software, which will give you the following dialog box:

![Auto Model](../../pluralsight2.imgix.net/guides/cf8e31cb-e102-4bae-a9a6-59441f1a1275_1.html)

Select **Auto Model**, which will take you to the following screen:

![Data window](../../pluralsight2.imgix.net/guides/fabfda43-9bbb-4190-9fc4-6bd4beac1ffb_2.html)

Click the **IMPORT NEW DATA** button, which will open a new dialog box. Select the location of the dataset, and click **Next** a few times without changing the data. As the last step, select the current **data** folder or create a new folder to upload the data into RapidMiner. This will bring you to the first step of building a machine learning model:

![Select Task](../../pluralsight2.imgix.net/guides/e0450a28-92be-4065-82e6-83a7622de093_3.html)

Building Your First Regression Model
------------------------------------

To build the regression model, start by clicking on the **Predict** button, which will ask you to choose a target column by showing the following pop-up:

![Target Column](../../pluralsight2.imgix.net/guides/5bdb4f17-2d8e-47a1-93c8-0e6ca704183e_4.html)

Choose the **SalePrice** column as the target column and click **Next**. This will bring you to the next page, **Prepare Target**:

![Prepare Target](../../pluralsight2.imgix.net/guides/3cf5e792-6b58-40d2-8e61-ee35d134b662_5.html)

This page provides you the histogram of the target column. Click **Next** and you will land on the **Select Input** page. This page provides important information about each independent feature of the dataset.

![Select Input](../../pluralsight2.imgix.net/guides/ccce888b-a33d-49ad-b902-ad9de1c9c98d_6.html)

In the above image, notice that RapidMiner has already discarded the **Street** attribute and given a positive response for the **LotArea** and **GarageArea** attributes and a neutral response for the **OverQual** attribute. You can discard the attributes that are highlighted with a yellow dot, too. In this case, all three attributes (marked with green and yellow dots) are considered inputs. Click **Next** to arrive at the next page, **Model Types**.

![Regression models](../../pluralsight2.imgix.net/guides/6b8cd173-c605-41c9-89e1-3588cf8c0eb5_7.html)

If you are aware of other machine learning tools, you may notice in the above image how convenient RapidMiner has made building machine learning models by providing options to build all the models at once. All you need to do is select the ones necessary for your project. In this case, all the models are selected.

Additionally, on the same page, you have a few options related to data preparation. You can apply those functions as needed. Once everything is set, click **Run**. After all the models are built, you will observe a page similar to this:

![Model Outputs](../../pluralsight2.imgix.net/guides/4d4df31d-dfe0-4dd2-b5ae-dd8ab05530f6_8.html)

This page provides an overview of a selected metric (available metrics are root mean squared error, absolute error, relative error, squared error, and correlation), runtimes in milliseconds, and indicates which model has the best performance (orange badge), fastest total time (running stick figure in blue), and fastest scoring time (running stick figure in purple).

For this dataset, the deep learning model provided the best performance. You can review the complete model details, data prediction, and much more under the **Deep Learning** drop-down menu available on the left-hand side of the overview page. These two figures show the importance of attributes and the prediction chart for this data set:

![Important Factors](../../pluralsight2.imgix.net/guides/87331db1-2f1d-4100-8a65-3c5972894d6d_9.html)

![Predictions Chart](../../pluralsight2.imgix.net/guides/3c22775f-f71f-4b27-8310-5b9a9aadcb15_10.html)

Finally, you can deploy the deep learning model and export it for future use.

Building Your First Classification Model
----------------------------------------

To build a classification model, most of the steps will be similar to building a regression model. To begin with, select the same dataset with five attributes and click **Next**. Click **Predict** and select **OverallQual** attribute as your target attribute.

On the **Prepare Target** page, you will notice that the **OverQual** attribute has only 10 classes spread across integers 1 to 10. By default, RapidMiner builds a regression model. To switch to the classification side, toggle the button underneath the histogram **Turn into Classification** and change the **Number of Classes** from 2 to 10.

![Selecting classes ](../../pluralsight2.imgix.net/guides/befc2b3c-fdc9-4388-ae57-4b66c3441e9b_11.html)

When all the above changes are completed, click **Next**. On the **Select Inputs** page, you have three supportive attributes and only one non-supportive attribute.

![Inputs](../../pluralsight2.imgix.net/guides/627349fa-a879-4250-92cb-f03dbad9daf5_12.html)

Click **Next** to arrive at the **Model Types** page. Since you are building a classification model, you will receive a new list of models as shown below:

![Classification models](../../pluralsight2.imgix.net/guides/b392d886-4f3a-474a-8805-237c4b2ebc9d_13.html)

You can select any number of models from this list. For now, all of the models are selected. You also have a data preparation column, similar to the regression scenario. Click **Run**, and once all the models are built, you will see this overview page:

![Classification models result](../../pluralsight2.imgix.net/guides/2ed8d423-85e8-4603-a4ef-bda8ced9745e_15.html)

For this dataset, the **deep learning** model is again the best performer and also provides the best gain (orange dollar sign icon). The weights associated with each attribute are shown below:

![Weights](../../pluralsight2.imgix.net/guides/1a62c967-3be9-4ea1-bac4-9abecc774b87_16.html)

You can further optimize this or other models as needed and export them for future use.

Conclusion
----------

RapidMiner helps you build multiple predictive models with just a few clicks and thus has an edge over other machine learning languages like Python and R. You can use RapidMiner to quickly test commonly known models on your dataset and later customize the best performing model. To learn more about RapidMiner, go through the [RapidMiner: Getting Started](https://pluralsight.com/library/courses/rapidminer-getting-started/table-of-contents) course on Pluralsight.

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

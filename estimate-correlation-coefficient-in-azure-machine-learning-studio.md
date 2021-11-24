<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Estimate Correlation Coefficient in Azure Machine Learning Studio
=================================================================

### Deepika Singh

-   Oct 16, 2020
-   8 Min read
-   1,518 Views

-   Oct 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   1,518 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-selectcolumns" class="menu-link">Select Columns</a>
-   <a href="#module-correlationmatrix" class="menu-link">Correlation Matrix</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Many machine learning algorithms require that the continuous variables are not correlated with each other, a phenomenon called *multicollinearity*. This is because multicollinearity adversely impacts the model training process. Estimating relationships between the numerical variables is a common step to detect and treat multicollinearity. For numerical features, finding a correlation coefficient is a common statistical technique used to estimate the presence or absence of a linear relationship between variables. This guide will demonstrate how to compute a Pearson linear correlation coefficient in Azure Machine Learning Studio.

Data
----

In this guide, you will work with the Pima Indian diabetes dataset available in Azure Machine Learning Studio. This data originally comes from the National Institute of Diabetes and Digestive and Kidney Diseases. The dataset consists of several variables, such as the number of pregnancies the patient has had, their BMI, insulin level, age, and so on. You can have a look at this data [here](https://www.kaggle.com/uciml/pima-indians-diabetes-database/).

The next step is to load and explore the data.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button. Next, click on the blank experiment and give the name <span class="jsx-3120878690">`Correlation coefficient`</span> to the workspace. The following screen will be displayed.

![lc1](../../pluralsight2.imgix.net/guides/a38c6fc9-546f-45e3-ba14-70d8e5bd260c_lc1.html)

Under the **Saved Datasets** option, drag the **Pima Indians Diabetes** dataset into the workspace. Right-click and select the **Visualize** option to explore the data.

![lc2](../../pluralsight2.imgix.net/guides/4d20568c-ffec-46c1-b542-a8eecafafcfb_lc2.html)

The data contains 768 rows and 9 columns. Select the different variables to examine their basic statistics. For example, the image below displays the details for the <span class="jsx-3120878690">`Body mass index`</span> variable.

![lc3](../../pluralsight2.imgix.net/guides/f682a934-66d6-49fa-b810-e9a7ecf7b894_lc3.html)

Select Columns
--------------

Multicollinearity, the presence of a linear relationship, is tested only for numerical variables. The correlation matrix is a technique to identify multicollinearity among numerical variables. To select the required variables in data, search and drag the **Select Columns in Dataset** module.

![lc4](../../pluralsight2.imgix.net/guides/ba9732c6-8386-4f91-a21a-fdc8183a63c2_lc4.html)

The next step is to click **Launch column selector** and place the numerical variables you want to test for multicollinearity, into the selected columns box, as shown below.

![lc5](../../pluralsight2.imgix.net/guides/6a2692eb-857e-4171-9653-d8504a62e895_lc5.html)

Run the experiment and **Visualize** the resulting output.

![lc6](../../pluralsight2.imgix.net/guides/dce9d99b-c5e9-4f7e-9c16-467503095304_lc6.html)

The output below shows that the resulting data has 768 rows and 4 numerical variables.

![lc7](../../pluralsight2.imgix.net/guides/a43535e5-1e21-4a98-987e-11d08051c2cc_lc7.html)

You will compute linear correlation coefficients on these four variables.

Correlation Matrix
------------------

The **Compute Linear Correlation** module is used in Azure Machine Learning Studio to compute and create the correlation matrix. This module is used to compute a set of Pearson correlation coefficients for each possible pair of numerical variables. The coefficient indicate the direction and extent of linear relationship between the variables of interest.

Search and drag the module into the workspace, and **Run** the experiment.

![lc8](../../pluralsight2.imgix.net/guides/c3cd075b-6d98-41c4-813c-03b962b9d117_lc8.html)

Once the module run is completed, right-click and select **Visualize**.

![lc9](../../pluralsight2.imgix.net/guides/e1b34331-44b9-4d60-9b39-d95503295827_lc9.html)

Completing the steps above will generate the following correlation matrix as output.

![lc10](../../pluralsight2.imgix.net/guides/91e9a167-11af-417a-90b7-27a697f9e8f5_l10.html)

### Interpreting the Correlation Matrix

The output shows the correlation between four numerical variables: <span class="jsx-3120878690">`Diastolic blood pressure`</span>, <span class="jsx-3120878690">`Triceps skin fold thickness`</span>, <span class="jsx-3120878690">`Body mass index`</span>, and <span class="jsx-3120878690">`Age`</span>.

The linear correlation coefficient between <span class="jsx-3120878690">`Diastolic blood pressure`</span> to itself is one, which is obvious, but that does not make any sense from a modeling perspective.

The correlation coefficient between <span class="jsx-3120878690">`Diastolic blood pressure`</span> and <span class="jsx-3120878690">`Triceps skin fold thickness`</span> is 0.207371. This is not a significant correlation, so multicollinearity is ruled out between these two variables.

Similarly, the linear correlation coefficient of <span class="jsx-3120878690">`Diastolic blood pressure`</span> with <span class="jsx-3120878690">`Body mass index`</span> and <span class="jsx-3120878690">`Age`</span> is 0.281805 and 0.239528, respectively.

You can similarly interpret the correlation coefficient between the four variables. For correlation to be significant, the rule of thumb is that the absolute value of the coefficient should be greater than 0.6. You can conclude that these four variables are not correlated with each other because the linear correlation coefficient is not significant.

Conclusion
----------

Estimating a correlation coefficient is useful to treat multicollinearity. This often improves machine learning performance for both classification and regression tasks, which are widely used across applications such as marketing analytics, house price prediction, diabetes prediction, equipment failure breakdown, and many more.

Linear correlation coefficient also finds application in inferential statistics, where you can use it to understand the relationship between explanatory and dependent variables.

This guide covered how to compute a linear correlation coefficient and create correlation matrix in Azure Machine Learning Studio. You can learn more on this concept with guides on other technologies like [Python](finding-relationships-data-with-python/index.html) and [R](finding-relationships-data-with-r/index.html).

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
12. [Visualizing Text Data using Word Cloud in Azure Machine Learning Studio](visualizing-text-data-using-word-cloud-in-azure-machine-learning-studio/index.html)

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Descriptive Statistics with Azure Machine Learning Studio
=========================================================

### Deepika Singh

-   Oct 19, 2020
-   11 Min read
-   803 Views

-   Oct 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   803 Views

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
-   <a href="#module-loadingthedata" class="menu-link">Loading the Data</a>
-   <a href="#module-descriptivestatistics" class="menu-link">Descriptive Statistics</a>
-   <a href="#module-editingmetadata" class="menu-link">Editing Metadata</a>
-   <a href="#module-summarizingdata" class="menu-link">Summarizing Data</a>
-   <a href="#module-basicstatisticswithrmodule" class="menu-link">Basic Statistics with R Module</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

*Descriptive statistics* is a field in statistics that describes data. It's useful in data understanding and exploration, an extremely important task in machine learning. It's also used to identify data errors and anomalies, an important data modelling task in machine learning. In this guide, you will learn how to generate descriptive statistics for the variables in data using Azure Machine Learning Studio.

Data
----

In this guide, you will work with the Adult Census Income Binary Classification dataset available in Azure Machine Learning Studio. This is a subset of the 1994 census database using working adults over the age of 16 with an adjusted income index of greater than 100. The data is used as a classification machine learning problem where the objective is to classify people using demographics to predict whether a person earns over US$50,000 a year. The data comes from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).

Loading the Data
----------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button. Next, click on the blank experiment and give the name **Descriptive Statistics** to the workspace. The following screen will be displayed.

![ds1](../../pluralsight2.imgix.net/guides/dc454961-70de-40ee-bb94-99e84d3cfe45_ds1.html)

Under the **Saved Datasets** option, drag **Adult census Income Binary** dataset into the workspace. Right-click and select the **Visualize** option to explore the data.

![ds2](../../pluralsight2.imgix.net/guides/db3e6b3a-97e8-4f90-b312-4e1a0074452c_ds2.html)

The data contains 32561 rows and 15 columns. Selecting any variable will display its Statistics as shown below.

![ds3](../../pluralsight2.imgix.net/guides/e2c7b799-3bf6-446b-9ee1-3b4fe0540307_ds3.html)

The output above shows that <span class="jsx-3120878690">`Income`</span> is a string feature type. This and similar features will be converted to categorical.

Descriptive Statistics
----------------------

The most popular measures used in descriptive statistics are highlighted below.

1.  Mean: Mean represents the arithmetic average of the data. It is calculated by taking the sum of the values and dividing by the number of observations.

<!-- -->

1.  Median: The middle-most value of a variable in a data, when arranged in an ascending or descending order, is its median value.

<!-- -->

1.  Mode: Mode represents the most frequent value of a variable in the data and is the only central tendency measure that can be used with both numeric and categorical variables.

<!-- -->

1.  IQR: The Interquartile Range (IQR) is calculated as the difference between the third quartile (75th percentile) and the first quartile (25th percentile).

2.  Range: The difference between the maximum and minimum values of a variable gives its range.

The following sections outline the implementation in Azure Machine Learning Studio.

Editing Metadata
----------------

The first step is to convert the variables to the right data type. Search and drag the **Edit Metadata** module into the workspace.

![ds6](../../pluralsight2.imgix.net/guides/5138f294-dfc6-4760-8bcb-6aef74867c30_ds6.html)

Click on the **Launch column selector** option in the righthand side of the workspace and select the string variables from the available columns.

![ds7](../../pluralsight2.imgix.net/guides/55f6c5a2-e2e4-446b-9d8d-5a167f402f45_ds7.html)

Once you have made selections, the selected columns will be displayed in the workspace. Next, from the dropdown options under **Categorical**, select the **Make categorical** option.

![ds8](../../pluralsight2.imgix.net/guides/02af5e02-9bc4-4df2-b9e0-5e4ec6e96448_ds8.html)

Next, click on the **Run** button at the bottom of the workspace, and right-click to **Visualize** the output.

![ds9](../../pluralsight2.imgix.net/guides/c827663d-cba6-4745-9ad5-c21f0fdfcadd_ds9.html)

The above output shows that the variable <span class="jsx-3120878690">`workclass`</span> is converted to **Categorical Feature**.

Summarizing Data
----------------

The **Summarize Data** module is used to generate descriptive statistics for the variables in the dataset. This module is in the **Statistical Functions** category. Search and drag it in the workspace.

![ds10](../../pluralsight2.imgix.net/guides/ae6dcdb7-4f2e-4c03-814f-535cca8fa55e_ds10.html)

Run the experiment, and right-click to select **Visualize** to look at the output.

![ds11](../../pluralsight2.imgix.net/guides/671094fc-c813-4a09-8503-54b67da15720_ds11.html)

The following output is generated. You can look at the range of statistical measures such as count, missing value count, mean, median, and mode of each variable.

![ds12](../../pluralsight2.imgix.net/guides/ba304cf5-63b5-4a5f-806a-4d10fab75296_ds12.html)

### Interpretation of the Output

The variable <span class="jsx-3120878690">`age`</span> has no missing values, and the mean, median, and mode values are 38.6 years, 37 years, and 36 years, respectively. The minimum age value is 17 years, while the maximum age is 90 years. This means the range of the <span class="jsx-3120878690">`age`</span> variable is 73 years. The interquartile range can be calculated by computing the difference between the first quartile (28 years) and third quartile (48 years). This gives the IQR value of 20 years.

In the same manner, the descriptive statistics of numerical variables can be computed. The above output also shows the presence of missing values. It is advisable to clean missing values and look again at the summary statistics.

### Missing Value Treatment

Search and drag the **Clean Missing Data** module into the experiment workspace. Connect the **Edit Metadata** module with the input port of the **Clean Missing Data** module.

On the right-hand side of the workspace, there are different options to perform the **Clean Missing Data** operation. There are several methods of dealing with missing values. One of the advanced techniques is using the *MICE* technique. MICE stands for multivariate imputation by chained equations, and it works by creating multiple imputations (replacement values) for multivariate missing data. Under the **Cleaning mode** tab, select the **Replace using MICE** option. Keep all the other options as default.

![ds16](../../pluralsight2.imgix.net/guides/fc405c86-8fec-4d90-9b5f-265756d9e322_ds16.html)

Run the experiment, and once the experiment run is completed, right-click and select **Visualize**. The following output is generated.

![ds17](../../pluralsight2.imgix.net/guides/cf109fb7-227a-4921-a1d3-f88932d81227_ds17.html)

Now selecting any variable will display zero missing values. You will next summarize the data again with the **Summarize Data** module. Drag and connect the module with the **Clean Missing Data** module, and run the module.

![ds18](../../pluralsight2.imgix.net/guides/bc356c23-4f96-416f-b9ea-1fa7b4928931_ds18.html)

Once the module run is completed, right-click and select the **Visualize** option.

![ds19](../../pluralsight2.imgix.net/guides/f7463a4c-c395-4965-b669-a07802b54a66_ds19.html)

The output below shows that the missing values have been treated.

![ds20](../../pluralsight2.imgix.net/guides/e332095e-101d-4527-886d-b3746e0c8dcd_ds20.html)

Basic Statistics with R Module
------------------------------

You can use the <span class="jsx-3120878690">`summary()`</span> function in R to print the summary statistics of all the variables. The **Execute R Script** module can be used to execute R codes in the machine learning experiment.

To begin, search and add the **Execute R Script** module to your experiment. Next, connect the data to the first input port (left-most) of the **Execute R Script** module.

![ds23](../../pluralsight2.imgix.net/guides/0630558b-4142-48a0-bae5-0cdcfe7750de_ds23.html)

Click on the module and under the **Properties** pane, you will see the option of writing your R script. Enter the code as shown below.

![ds24](../../pluralsight2.imgix.net/guides/12ffee4b-84f7-4d4e-b753-1e6055de43e9_ds24.html)

You can also copy the code from below.

    1dataset1 = mam1.mapInputPort(1)
    2summary(dataset1)
    3mam1.mapOutputPort(“dataset1”); 

{r}

Run the experiment and on successful completion, right-click and select **Visualize** to look at the data again.

![ds26](../../pluralsight2.imgix.net/guides/2c913fd8-1c55-4979-8889-6212398fcc93_ds26.html)

Completing the above steps will generate the following output.

![ds27](../../pluralsight2.imgix.net/guides/58af175f-27e3-486e-86ad-eb470ba18ec0_ds27.html)

The output above prints the summary statistics of both numerical and categorical variables. For example, the variable <span class="jsx-3120878690">`workclass`</span> has the highest frequency of 24,482 for the label **Private**. This is the mode for the variable.

Conclusion
----------

Descriptive statistics have multiple applications. They are used in descriptive analytics, business intelligence, and preparing MIS reports. They are also used in the six sigma quality assurance domain, where control limits are defined using summary statistical measures. Descriptive statistics are also used in exploratory data analysis, an important task of machine learning.

In this guide, you learned how to generate descriptive statistics for a dataset in Azure Machine Learning Studio. You can learn more about this concept with guides on other technologies like [Python](interpreting-data-using-descriptive-statistics-python/index.html) and [R](interpreting-data-using-descriptive-statistics-r/index.html).

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

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

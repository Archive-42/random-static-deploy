<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Hypothesis Testing using T-test in Azure Machine Learning Studio
================================================================

### Deepika Singh

-   Oct 21, 2020
-   11 Min read
-   789 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   789 Views

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
-   <a href="#module-keyterms" class="menu-link">Key Terms</a>
-   <a href="#module-onesamplettest" class="menu-link">One-Sample T-test</a>
-   <a href="#module-pairedsamplettest" class="menu-link">Paired-Sample T-test</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Data science and machine learning often require formulating hypotheses and testing them with statistical tests. One such common hypothesis testing process is performing a t-test to compare whether two groups have different means. In this guide, you will learn how to compute and analyze t-test statistics with Azure Machine Learning Studio.

Data
----

In this guide, you will work with a fictitious dataset of loan applicants that includes 600 observations and nine variables, as described below.

1.  <span class="jsx-3120878690">`Is_graduate`</span>: Whether the applicant is a graduate or not.

2.  <span class="jsx-3120878690">`Income`</span>: Annual Income of the applicant (in US dollars).

3.  <span class="jsx-3120878690">`Loan_amount`</span>: Loan amount (in US dollars) for which the application was submitted.

4.  <span class="jsx-3120878690">`Credit_score`</span>: Whether the applicant's credit score was good ("Satisfactory") or not ("Not\_satisfactory").

5.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.

6.  <span class="jsx-3120878690">`approval_status`</span>: Whether the loan application was approved ("Yes") or not ("No"). This is the dependent variable.

7.  <span class="jsx-3120878690">`Sex`</span>: Gender of the applicant.

8.  <span class="jsx-3120878690">`Investment`</span>: Investment amount (in US dollars) in stocks and mutual funds, as declared by the applicant.

9.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for applying for the loan.

Start by loading the data.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click on the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button. Next, click on the blank experiment and give the name **T-test** to the workspace. The following screen will be displayed.

![t1](../../pluralsight2.imgix.net/guides/fe760fde-92dd-4e8a-8b5a-92a11d8615a3_t1.html)

Next, load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![t2](../../pluralsight2.imgix.net/guides/9c2cad76-9206-4082-b8e7-99f23cca3945_t2.html)

The selection above will open a window, shown below, which can be used to upload the dataset from the local system.

![t3](../../pluralsight2.imgix.net/guides/8d8f4f69-6212-416f-848f-8c883e250e5a_t3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is **ttestdata.csv**. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option as shown below.

![t4](../../pluralsight2.imgix.net/guides/168c2420-b0d6-40e5-84fb-758b54bb5b26_t4.html)

The data contains 600 rows and nine columns. Selecting any variable will display its statistics, as shown below.

![t6](../../pluralsight2.imgix.net/guides/07e5ad9e-1ed5-4a60-9907-ad6fc0a61455_t6.html)

The data is loaded into the workspace and ready for statistical tests.

Key Terms
---------

Before moving ahead to the statistical tests, you should understand a few important terms.

1.  Mean: Mean represents the arithmetic average of the data. It is calculated by taking the sum of the values and dividing by the number of observations.

<!-- -->

1.  Null and Alternative Hypotheses : The statistical tests rely on testing a null hypothesis, which is specific for each case. The null hypothesis assumes the absence of a relationship between two or more variables. For example, for two groups, the null hypothesis assumes that there is no correlation or association between the two variables. The alternative hypothesis is simply the opposite of the null hypothesis.

<!-- -->

1.  t-test: In general, a t-test helps you compare whether two groups have the same or different means. It is also used to test if a single group mean is comparable to a hypothesized mean.

<!-- -->

1.  P-value: For any statistical test, the p-value is a statistic used to decide whether to reject or fail to reject the null hypothesis. The decision rule is that if the p-value for the test is less than 0.05, we reject the null hypothesis. If the p-value is greater than or equal to 0.05, we fail to reject the null hypothesis.

The following sections outline the implementation of a t-test in Azure Machine Learning Studio.

One-Sample T-test
-----------------

The idea behind the one-sample t-test is to compare the mean of a vector against a theoretical mean. In our data, you will consider the <span class="jsx-3120878690">`Income`</span> variable and test the null hypothesis that the mean income of the applicants is USD $72,500. This can be any number based on your research.

Drag and drop the **Test Hypothesis using t-Test** module into the workspace.

![t7](../../pluralsight2.imgix.net/guides/946d22fc-9c2b-46d4-9153-dd9349a59596_t7.html)

Click on the **Launch column selector** option and select the <span class="jsx-3120878690">`Income`</span> variable.

![t8](../../pluralsight2.imgix.net/guides/a24e9129-e1f6-4d9f-83d9-2931da957b21_t8.html)

Next, complete the other arguments to configure the module. For **t-Test type**, select **SingleSampleSet** because you are considering one variable. For the option **Null hypothesized µ**, type the value of 72500. This specifies the expected mean income value against which the variable mean will be tested. Next, under **Hypothesis type**, select the default option of **TwoTail**. This is the most common type of test that assumes the distribution to be symmetric around zero. Alpha value, denoted by **α**, specifies the confidence factor. Set this value to 0.95.

![t9](../../pluralsight2.imgix.net/guides/1d2c6ffb-c2ef-4744-b032-6eb46805f4ee_t9.html)

Run the experiment. Once the module run is complete, the left output port of **Test Hypothesis using t-Test** module gives the probability score.

![t10](../../pluralsight2.imgix.net/guides/30742078-7a1a-433a-a381-81ac6ecc7bd8_t10.html)

Right-click and select **Visualize**.

![t12](../../pluralsight2.imgix.net/guides/57ae691c-baaf-4efe-b898-57ff158eeef3_t12.html)

The output shows that the p-value is lower than 0.05, which means that the null hypothesis is rejected.

![t13](../../pluralsight2.imgix.net/guides/647a3dba-ab1b-49fb-b9e7-40ede29fb61d_t13.html)

You can confirm this with the right output port of **Test Hypothesis using t-Test** module. Right-click and select **Visualize**.

![t14](../../pluralsight2.imgix.net/guides/1f710784-53f7-4b31-9ae2-36b6633d32c4_t14.html)

The output below shows that null hypothesis is to be rejected.

![t15](../../pluralsight2.imgix.net/guides/4788d536-3a1b-4092-b4c6-1dc3c4c01fd6_t15.html)

Based on the results of t-Test, you reject the null hypothesis that the mean income of the applicants is USD $72,500.

Paired-Sample T-test
--------------------

The idea behind the paired-sample t-test is to compare the mean of two sets of samples from the same population. In this data, you will consider the variables <span class="jsx-3120878690">`Income`</span> and <span class="jsx-3120878690">`Loan_amount`</span>. The null hypothesis to be tested is that the difference between the expected means of the two variables is zero.

Drag and drop the **Test Hypothesis using t-Test** module into the workspace. To configure the module, click on the **Launch column selector** option and select the <span class="jsx-3120878690">`Income`</span> and <span class="jsx-3120878690">`Loan_amount`</span> variables.

Next, complete the other arguments. For **t-Test type**, select **PairedSamples** because you are considering two variables. For the option, **Null hypothesized µ**, type the value of zero. This specifies that the expected difference in the means of the two variables is zero. Set the other option as shown below.

![t18](../../pluralsight2.imgix.net/guides/a24d7e96-c3b8-4d1b-bbbf-92d19ed3bf03_t18.html)

Run the experiment, and right-click on the left-input port to select **Visualize**.

![t19](../../pluralsight2.imgix.net/guides/33f6cf98-b1c4-48a1-b3bb-26d39ebfdf80_t19.html)

The output shows that the p-value is lower than 0.05, which means that the null hypothesis is rejected.

![t20](../../pluralsight2.imgix.net/guides/7d3e1ac8-be46-4c31-80c6-0b287e7f8909_t20.html)

Next, right-click on the right-input port of the **Test Hypothesis using t-Test** module, and select **Visualize**. The output shows that the null hypothesis is to be rejected.

![t21](../../pluralsight2.imgix.net/guides/df7937ad-111f-4a13-9419-f9e11e99ef2e_t21.html)

Based on the results of the t-test, you can reject the null hypothesis that the difference between the expected means of the variables <span class="jsx-3120878690">`Income`</span> and <span class="jsx-3120878690">`Loan_amount`</span> is zero.

Conclusion
----------

Hypothesis testing has several applications in the areas of market research, quality testing, and inferential statistics. It is used in the pharmaceutical industry in new drug discovery. It is also used in the manufacturing industry to compare two processes or machines. Hypothesis testing using t-tests is also used in diagnostic analytics, an important area of machine learning.

In this guide, you learned how to perform hypothesis testing using t-tests in Azure Machine Learning Studio. You can learn more about this concept with [this guide on R](hypothesis-testing-interpreting-data-statistical-models/index.html).

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

13. [Text Preprocessing in Azure Machine Learning Studio](text-preprocessing-in-azure-machine-learning-studio/index.html)

14. [Estimate Correlation Coefficient in Azure Machine Learning Studio](estimate-correlation-coefficient-in-azure-machine-learning-studio/index.html)

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

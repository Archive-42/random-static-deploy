<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/ce501f54-fed2-4c77-a499-71e5d2c571d4.jpg" alt="Author avatar" class="jsx-3841407315" />

Chhaya Wagmi

Analyzing Data with Qlik Sense
==============================

### Chhaya Wagmi

-   Nov 9, 2020
-   7 Min read
-   1,092 Views

-   Nov 9, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,092 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Qlik Sense</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Visualization</span>

Introduction

20

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-gettingyourappanddataready" class="menu-link">Getting Your App and Data Ready</a>
-   <a href="#module-oneclickinsights" class="menu-link">One-Click Insights</a>
-   <a href="#module-applyingnlptothedatatogenerateinsights" class="menu-link">Applying NLP to the Data to Generate Insights</a>
-   <a href="#module-selectingfeaturesmanually" class="menu-link">Selecting Features Manually</a>
-   <a href="#module-derivinginsightsfromthesheet" class="menu-link">Deriving Insights from the Sheet</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Qlik Sense is a product offered by the company Qlik. You can use it to perform faster data analytics compared with other analytics packages available in Python, R, and Julia. Qlik Sense generates insights automatically based on all important features. Plus, you can also rely on its NLP search engine to create custom visualizations.

In this guide, you will learn how to create a new app, upload your data, analyze it, and finally present your insights.

Getting Your App and Data Ready
-------------------------------

Download the [adult](https://archive.ics.uci.edu/ml/datasets/Adult) dataset from the UCI Machine Learning Repository, add headers to the data, and save the complete file with the name **income.csv**.

Next, head to your Qlik Sense account and click on the **New analytics app** button to initiate the creation of a new app:

![Creating a new app](../../pluralsight2.imgix.net/guides/0acb18a5-4f40-4b7b-99d5-d7bd03c6efa2_1.html)

After giving a name to your app, click the **Create** button and open the app. Once the app is opened, you will be asked to upload the dataset. Click the **Add data from files and other sources** tab and upload the **income.csv** file. Once the file is uploaded, note that each column has a header beginning with the **@** sign. To replace the custom headers with the original ones, select **Embedded filed names** from the **Field names** drop-down list and click the **Add data** button. ![Providing the correct header names](../../pluralsight2.imgix.net/guides/4a2ed0b9-6637-4294-979e-9e6bda189c38_2.html)

The above action will take you to a blank sheet, but you need to reach for the Insights dashboard to create visualizations. To do so, click **Insights** under the **Analyze** tab available at the top and center of the webpage.

One-Click Insights
------------------

On the Insights dashboard, you will see a search box and a **Generate insights** button. ![Generate insights](../../pluralsight2.imgix.net/guides/d81c2c2c-c7e2-49e0-ab55-31f496ede43c_3.html)

Qlik Sense will automatically produce visualizations by analyzing the important features after you click on the **Generate insights** button. For this dataset, it revealed the following nine insights: ![Automatic Insights](../../pluralsight2.imgix.net/guides/2cec5f7b-0126-4832-99a1-3e5faa32c512_9e1d7077-b7ee-4ab8-9c8c-9869ac3535eb_4.html)

You can add any or all of these insights into your sheet for future storytelling. Right now, only the first result, **avg(age)**, and the ninth result, **countDistinct(native-country)**, will be added to the sheet. You can check the results added to your sheet by clicking the **Sheet** button from the **Analyze** tab. ![Results added to the sheet](../../pluralsight2.imgix.net/guides/d2b9bc4c-b13d-4e43-b939-7d495332d8c9_1.html)

Applying NLP to the Data to Generate Insights
---------------------------------------------

SQL is considered a higher-level language because you can write codes that are almost like writing a sentence in the English language. However, Qlik Sense goes to the next level by giving you the freedom to write an actual English sentence, and it uses natural language processing (NLP) to generate requested custom visualizations.

For instance, input the following sentence in the search box in the center of the Insights dashboard: "Show me the income by education, and capital gain." This will result in an exact matching result. ![Result of NLP query](../../pluralsight2.imgix.net/guides/c519185a-1b38-42f9-bd9d-3ce3fb9d5a08_3.html)

The bar chart shows a wonderful relationship among the three features. You can select this chart and add it to the sheet with the two other previously added charts. Notice that the dataset already has **income** and **education** column names, so filtering out those two columns is easy based on the passed query. However, the dataset is using the term **capital-gain** not **capital gain**, and yet Qlik Sense's NLP algorithms are able to correlate these two terms.

The updated sheet has now three charts, as shown: ![Updated sheet with three charts](../../pluralsight2.imgix.net/guides/eccfdd79-5ed2-4668-9b80-30db032b0350_4.html)

Selecting Features Manually
---------------------------

If you don't want to rely on the automatically generated insights or the NLP search engine's insights, you can always pick up features manually to build custom visualizations. To do so, check the boxes in front of the desired fields.

Consider a case where you want to find out the hierarchy of occupation roles based on the number of hours worked per week and the working class (private, local government, self-employed, etc) they belong to.

To create the relationship among these three fields or features, select **hours-per-week**, **workclass**, and **occupation** from the **Fields** section on the left-hand side of the Insights dashboard. This will result in a treemap along with four other results. Add the treemap as the fourth chart to your sheet. ![Sum(hours-per-week) by workclass and occupation](../../pluralsight2.imgix.net/guides/6bd7afae-9ea1-48b0-9eda-8284316928ba_5.html)

Deriving Insights from the Sheet
--------------------------------

Your current sheet has four charts, as shown: ![The complete sheet](../../pluralsight2.imgix.net/guides/7f8e2712-d76f-421b-b4e7-d7b51b55436c_6.html)

Here are the main insights you can deliver using these charts:

-   Chart 1: The average age of the employees is 38.58 years (approximately 39 years).
-   Chart 2: The total number of distinct native countries is 42.
-   Chart 3: People with bachelor's degrees have the highest capital gain, earning more than USD $50,000, followed by high-school graduates.
-   Chart 4: Here's the list of job roles that have the highest number of working hours:

<table><thead><tr class="header"><th>Workclass</th><th>Job Role</th></tr></thead><tbody><tr class="odd"><td>Private</td><td>Craft-repairmen</td></tr><tr class="even"><td>Unincorporated self-employed</td><td>Craft-repairmen</td></tr><tr class="odd"><td>Incorporated self-employed</td><td>Executive manager</td></tr><tr class="even"><td>Federal government</td><td>Administration clerk</td></tr><tr class="odd"><td>State government</td><td>Professional specialty</td></tr><tr class="even"><td>Local government</td><td>Professional specialty</td></tr></tbody></table>

Conclusion
----------

Qlik Sense provides you an advanced visualization platform just like Tableau. You can generate quick insights with a click of a button as well as use its NLP-powered search engine to interpret the meaning of an English query. You can publish multiple sheets and stories for storytelling. For further learning, you can refer to the [Qlik Sense for Analysts](https://pluralsight.com/paths/skills/qlik-sense-for-analysts) learning path provided by Pluralsight, which consists of multiple courses to teach you the ins and outs of Qlik Sense.

20

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

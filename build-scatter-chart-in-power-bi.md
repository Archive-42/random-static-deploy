<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Build Scatter Chart in Power BI
===============================

### Deepika Singh

-   Nov 24, 2020
-   7 Min read
-   4,381 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   4,381 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-creatingscatterplot" class="menu-link">Creating Scatter Plot</a>
-   <a href="#module-addinganalyticstothescatterplot" class="menu-link">Adding Analytics to the Scatter Plot</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

A scatter plot is a very useful chart to visualize the relationship between two numerical variables. It is used in inferential statistics to visually examine correlation between two variables. This guide will demonstrate how to build a scatter plot, format it, and add dimensions to the chart with the analytics pane of Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
3.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.
4.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
5.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was taken.
6.  <span class="jsx-3120878690">`Weeknum`</span>: Week number of the year.

Start by loading the data.

Loading Data
------------

Once you open your Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Creating Scatter Plot
---------------------

To begin, click on the **Scatter chart** option located in the **Visualizations** pane. This creates a chart box in the canvas. Nothing is displayed because you are yet to add the required visualization arguments.

![sp1](../../pluralsight2.imgix.net/guides/5b24d2a7-994d-40e3-8808-a80f61d9bd2e_sp1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Age`</span> into the **X Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Y Axis** field. Next, fill the **Details** field with the <span class="jsx-3120878690">`Weeknum`</span> variable.

![sp2](../../pluralsight2.imgix.net/guides/3aafd6f7-8de0-463c-952f-a75e5f5b7e18_sp2.html)

The output above shows the scatterplot of **Age and Loan\_disbursed by Weeknum**. But there is a mistake in the chart. The variables <span class="jsx-3120878690">`Age`</span> and <span class="jsx-3120878690">`Loan_disbursed`</span> are getting added, instead of being an average. To make this correction, click on **X Axis** field and select **Average**.

![sp4](../../pluralsight2.imgix.net/guides/6ae7712e-c381-406c-8466-25c7eff68f67_sp4.html)

Repeat the same for <span class="jsx-3120878690">`Loan_disbursed`</span> variable placed in the **Y Axis**.

![sp5](../../pluralsight2.imgix.net/guides/0da0568b-aaf4-4ff3-9eeb-9b15e9eb577a_sp5.html)

This will create the scatterplot. There are options to format the plot under the **Format** tab.

![sp6](../../pluralsight2.imgix.net/guides/14854f4a-223f-4d85-8f9e-400c4be5905b_sp6.html)

If you want to change the title formatting, you can go to the **Format** tab, and change the **Alignment**. You can also set the **Text size** to 16.

![sp7](../../pluralsight2.imgix.net/guides/0e3680e7-6e62-4c5c-aa8e-a9371fdf1e0e_sp7.html)

You have the desired scatter plot where each point represents the average age of the applicant, and the average loan disbursed, for a week number.

![SP8](../../pluralsight2.imgix.net/guides/c2b761de-f0d6-41dd-8908-572facbfa237_sp8.html)

Adding Analytics to the Scatter Plot
------------------------------------

Power BI also provides the option to add analytics to the scatter chart with the **Analytics** pane.

![SP9](../../pluralsight2.imgix.net/guides/203c0511-364d-4ac3-b593-e586629a1c18_sp9.html)

To begin, you can add **Trend line** to the chart. Click on **Add**.

![SP10](../../pluralsight2.imgix.net/guides/e789c8da-53dc-484b-ad29-6e2ff87792da_sp10.html)

Select the **Color**, **Transparency** level, and **Style** options as shown in the chart below, or as per your preference. This will create the following output.

![SP11](../../pluralsight2.imgix.net/guides/24680c1e-7fcd-436b-83d6-2f724f1b23e4_sp11.html)

If you look at the scatter plot, you can examine that most of the applicants are of the average age between 44 and 53 years. If you want to add a fixed line around X axis, you can select the **X Axis Constant Line** option.

![SP12](../../pluralsight2.imgix.net/guides/d3c02654-558e-4186-8db5-68a82710be4c_sp12.html)

Click on **Add** and set **Value** to 44. Also, keep the **Color** and **Transparency** options as shown below.

![SP13](../../pluralsight2.imgix.net/guides/14a46598-f024-412a-9320-74c37301e152_sp13.html)

You can repeat the above process to add the **X Axis Constant Line 2** and set the **Value** to 53.

![SP14](../../pluralsight2.imgix.net/guides/49c48e53-e289-4e86-b4c1-832520bb1a1b_sp14.html)

The output above shows the scatter plot enriched with the analytics of a trend line and two fixed X axis lines.

Conclusion
----------

Scatter plot is an important visualization chart in business intelligence and analytics. It is used in inferential statistics to visually examine the extent of linear relationship between two numerical variables. It is also used to identify and treat outliers which is a data pre-processing element in data science. In business intelligence, you will be required to build these charts for a variety of areas, such as market research, causal inference, business statistics, machine learning, exploratory data analysis, time series analysis and many more. This is a great skill set to add because you will be using it regularly across sectors and organizational functions.

To learn more about building powerful visualization in Power BI Desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in Power BI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

7.  [Adding Slicers to a Power BI Report](https://app.pluralsight.com/guides/adding-slicers-to-a-power-bi-report)

8.  [Explore the Analytics Pane in Power BI](https://app.pluralsight.com/guides/explore-the-analytics-pane-in-power-bi)

9.  [Waterfall Charts in Power BI](https://app.pluralsight.com/guides/waterfall-charts-in-power-bi)

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

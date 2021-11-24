<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Building Line Charts in Power BI
================================

### Deepika Singh

-   Nov 24, 2020
-   6 Min read
-   2,246 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   2,246 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

11

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addinglinechart" class="menu-link">Adding Line Chart</a>
-   <a href="#module-formatlinecharts" class="menu-link">Format Line Charts</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

A line chart is a popular visualization chart used to represent a series of data points connected by a straight line. It is used to represent continuous data sets. Time series forecasting and stock market trend analysis are common applications of line charts. This guide will demonstrate how to build line charts in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Income`</span>: Annual income of the applicant (in US dollars).
3.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
4.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
5.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.

Start by loading the data.

Loading Data
------------

Once you open Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Adding Line Chart
-----------------

The first step is to add a **Line chart** from the **Visualizations** pane.

![l1](../../pluralsight2.imgix.net/guides/cf15169c-a3cb-4968-b89a-711e38419400_l1.html)

Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Interest_rate`</span> in the **Values** field.

![l2](../../pluralsight2.imgix.net/guides/58c1b0cb-0d5c-4916-ae71-c460e4c23219_l2.html)

The above line chart is incorrect as it adds the interest rate values. To make the correction, right click and select **Average**.

![lthr](../../pluralsight2.imgix.net/guides/249a2624-4e3f-4d6e-9dcc-7d783b4b9893_l3.html)

The above step will produce the correct line chart that displays the average interest rate.

![l4](../../pluralsight2.imgix.net/guides/e4e97aa9-1cef-484a-b9da-dd0a5a52e784_l4.html)

Format Line Charts
------------------

The **Format** field in Power BI Desktop provides several options to format the chart. To begin, turn on the **Data labels** as shown below.

![l5](../../pluralsight2.imgix.net/guides/1e453c7b-59de-4081-890f-a671e17302c3_l5.html)

You can see the data labels plotted in the line chart, but the text size is small. Set the **Text size** to twelve.

![l6](../../pluralsight2.imgix.net/guides/1f26334d-0129-46f5-a997-a79ab49505e9_l6.html)

You can also add new dimensions to the chart. For example, drag the <span class="jsx-3120878690">`Gender`</span> variable into the **Legend** option. This creates two line charts corresponding to gender.

![l7](../../pluralsight2.imgix.net/guides/065b212d-0cd1-465d-b126-a9c06014b13f_l7.html)

If you want to change the color of either of the line chart, that is also possible. Go to **Data colors** and you will see the default color for both gender.

![l8](../../pluralsight2.imgix.net/guides/732c6dcc-fb81-404d-84f3-681c6e0dc1c5_l8.html)

Click on the default color for **F** and several color options will be displayed.

![l9](../../pluralsight2.imgix.net/guides/f9ec081f-0def-4cf6-8858-7d4bd4c56756_l9.html)

Pick the color of your choice or as shown in the chart below to generate the following output.

![l10](../../pluralsight2.imgix.net/guides/0854070a-0f02-4d21-8d88-b91fa1cd4968_l10.html)

You can also format the title of the chart. Go to the **Title** option under **Format**.

![l11](../../pluralsight2.imgix.net/guides/6c9e6a91-3034-49b2-abec-25543d655489_l11.html)

Change the **Font color**, **Alignment**, and **Text size** of the title. This will generate the resulting output.

![L12](../../pluralsight2.imgix.net/guides/78085d10-cc19-4c2f-aa83-e095fd9841ba_l12.html)

Conclusion
----------

Line charts are used across industries because of their power to represent changes across time. They are used for time series forecasting and in various financial reporting tasks. Another advantage is that you can represent changes in multiple variables across time. Line charts are used across sectors and knowledge of building line charts is a useful skill set to enhance your business intelligence capabilities.

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

11

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

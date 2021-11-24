<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Forecasting in Power BI
=======================

### Deepika Singh

-   Nov 24, 2020
-   5 Min read
-   4,919 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   4,919 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

47

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-creatinglinechart" class="menu-link">Creating Line Chart</a>
-   <a href="#module-forecastinginpowerbi" class="menu-link">Forecasting in Power BI</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Forecasting is one of the most important areas for any business. You can forecast any metric like revenues, expenses, unit sales, demand, prices, and many more. This guide will demonstrate the important skill of forecasting using inbuilt capabilities in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variables to be used are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

Start by loading the data.

Loading Data
------------

Once you open the Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Creating Line Chart
-------------------

Time series forecasting is visually represented with a line chart. So, to begin, you will add a line chart to the canvas. You can locate it in the **Visualizations** pane. Click on the **Line chart** and it will create a chart box in the canvas. Nothing is displayed because you are yet to add the required visualization arguments.

![ff1](../../pluralsight2.imgix.net/guides/b2f8b6e4-9611-424f-bf65-3a8363ed2922_ff1.html)

You can resize the chart on the canvas, and the next step is to fill the visualization arguments. Drag the <span class="jsx-3120878690">`Date`</span> variable to the **Axis** field, and the <span class="jsx-3120878690">`Loan_disbursed`</span> variable into the **Values** field. This will create the following chart.

![ff2](../../pluralsight2.imgix.net/guides/85e014ae-14ca-4861-86bb-21bd36584998_ff2.html)

You have created the time series chart named **Loan\_disbursed by Year**. The next step is to generate the forecast of future loan disbursal.

Forecasting in Power BI
-----------------------

The **Forecast** capability in Power BI is in the **Analytics** tab.

![ff3](../../pluralsight2.imgix.net/guides/a5df91ac-055c-4134-919a-d9c53c2f8b61_ff3.html)

To add a forecast to the data, click on **Add** under **Forecast**

![ff4](../../pluralsight2.imgix.net/guides/0555157b-4e1e-49a3-afe3-78da2b9937fc_ff4.html)

You are required to enter the arguments. **Forecast length** specifies the length of the forecasting horizon. The **Confidence interval** specifies the confidence level that the forecast value will fall under the lower and upper bound. The following chart is generated, where the shaded grey region indicates the forecast.

![ff6](../../pluralsight2.imgix.net/guides/8954cce5-68d1-4b7b-a955-43927b375202_ff6.html)

Hover around the shaded region to see the forecasted value. In the chart below, you can see the forecast value for the year 2021, and the lower and upper bound of the forecast at 95 percent confidence interval.

![ff7](../../pluralsight2.imgix.net/guides/e797a58c-56ed-4127-9bcb-c6c7ef3f0ab8_ff7.html)

Conclusion
----------

Forecasting is a ubiquitous requirement for every organization, small or big. Business activities require forecasting ranging from sales forecasting to generating price forecasts. It is used in time series forecasting, stock price prediction, inventory forecasting, manpower planning, budgeting, and financial valuation areas. The knowledge of using the forecast capabilities in Power BI will add lots of strength to your analytics and business intelligence capabilities.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in Power BI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

7.  [Adding Slicers to a Power BI Report](https://app.pluralsight.com/guides/adding-slicers-to-a-power-bi-report)

8.  [Explore the Analytics Pane in Power BI](https://app.pluralsight.com/guides/explore-the-analytics-pane-in-power-bi)

9.  [Waterfall Charts in Power BI](https://app.pluralsight.com/guides/waterfall-charts-in-power-bi)

47

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Utilize the Focus Mode of a Chart in Power BI
=============================================

### Deepika Singh

-   Nov 24, 2020
-   6 Min read
-   1,534 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,534 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualizationtothecanvas" class="menu-link">Adding Visualization to the Canvas</a>
-   <a href="#module-explorethefocusmode" class="menu-link">Explore the Focus Mode</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

While looking at a visualization dashboard, you might want to look at more details of the report. This is where the focus mode in Power BI is useful. This guide will demonstrate how to utilize the focus mode of a chart in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
3.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).

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

Adding Visualization to the Canvas
----------------------------------

To begin, click on the **Clustered column chart** option located in the **Visualizations** pane. This creates a chart box in the canvas. Nothing is displayed because haven't yet added the required visualization arguments.

![fm1](../../pluralsight2.imgix.net/guides/0851e82e-6fa8-48ab-ae93-f78a59e627b7_fm1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![fm2](../../pluralsight2.imgix.net/guides/bd948d40-0945-4f4e-af14-628c67a15c5f_fm2.html)

The output above shows the **Loan\_disbursed by Year** chart. You are now ready to explore the focus mode.

Explore the Focus Mode
----------------------

The focus mode is a little icon at the bottom of the chart as shown below.

![fm3](../../pluralsight2.imgix.net/guides/402e63d7-0acf-48a0-9bf2-8b4b1a308a83_fm3.html)

Click on the focus mode option as shown above, and what it does is that the visual takes over the entire space in the report canvas, as shown below.

![FM4](../../pluralsight2.imgix.net/guides/c9defe04-bd20-4145-98d7-c07f94421462_fm4.html)

You also get access to a few other options with the three dots **…** symbols as shown below.

![FM5](../../pluralsight2.imgix.net/guides/b294ec3a-ccc5-4194-af83-ccf09d9eb255_fm5.html)

Click on the **Show as a table** option shown in the chart above, and it results in a table view along with the visual.

![FM6](../../pluralsight2.imgix.net/guides/bb9b43db-7557-4842-a613-93adde0ac858_fm6.html)

The layout can be changed with the **Switch to vertical layout** option.

![FM7](../../pluralsight2.imgix.net/guides/ad5a0dd9-5fc7-4f90-9195-fa2b38676bfb_fm7.html)

Selecting the option above will align the table vertically alongside the visual.

![FM8](../../pluralsight2.imgix.net/guides/eaa42468-de40-4470-8bbb-21d45f426ac2_fm8.html)

You can also export data with the option available.

![fm9](../../pluralsight2.imgix.net/guides/ba1374af-3f3c-4df2-a4b8-e79662041591_fm9.html)

The other advantage of focus mode is that you can add variables into the chart. Drag the <span class="jsx-3120878690">`Gender`</span> variable into the **Legend** option as shown below.

![fm10](../../pluralsight2.imgix.net/guides/08e09836-8c12-4d20-8974-a8971d298d8b_fm10.html)

The output above shows that the variable <span class="jsx-3120878690">`Gender`</span> is added to both the column chart as well as the table.

Conclusion
----------

Focus mode is an important feature in Power BI as it enables deeper exploratory analysis of the visual. This helps in understanding underlying patterns that would have been difficult to identify otherwise. This is a great feature to use for treating outliers, exploratory data analysis, and to enrich your visual charts.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)
6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

7.  [Adding Slicers to a Power BI report](https://app.pluralsight.com/guides/adding-slicers-to-a-power-bi-report)

8.  [Explore the Analytics Pane in Power BI](https://app.pluralsight.com/guides/explore-the-analytics-pane-in-power-bi)

9.  [Waterfall Charts in Power BI](https://app.pluralsight.com/guides/waterfall-charts-in-power-bi)

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

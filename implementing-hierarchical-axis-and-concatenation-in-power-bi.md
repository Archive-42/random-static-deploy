<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Implementing Hierarchical Axis and Concatenation in Power BI
============================================================

### Deepika Singh

-   Nov 19, 2020
-   6 Min read
-   4,712 Views

-   Nov 19, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   4,712 Views

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
-   <a href="#module-addingvisualization" class="menu-link">Adding Visualization</a>
-   <a href="#module-concatenation" class="menu-link">Concatenation</a>
-   <a href="#module-hierarchicalaxis" class="menu-link">Hierarchical Axis</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When you are working with data that has hierarchy, you will be required to add the hierarchical dimension to your business intelligence reports. For example, time series data will have hierarchy of year, quarter, month, day etc. In such cases, you will either concatenate the *x-axis* or drill down at different hierarchical levels, depending on the business requirement and visualization impact. This is also required in exploratory data analysis. This guide will demonstrate how to implement hierarchical axis and concatenation in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset from [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

2.  <span class="jsx-3120878690">`Date`</span>: Date of loan disbursal.

Start by loading the data.

Loading Data
------------

Once you open the Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

Once you have loaded the file, you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Adding Visualization
--------------------

To begin, you will need a chart, table, or matrix. You will create a *clustered column chart* in this guide. You can locate it in the **Visualizations** pane.

![c1](../../pluralsight2.imgix.net/guides/ff92da18-9bd9-4af0-ae18-c9cafb2e25cb_c1.html)

Click on the chart shown above, and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![c2](../../pluralsight2.imgix.net/guides/e1082cbf-548c-410d-b69b-70c0c09dc3f8_c2.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![c3](../../pluralsight2.imgix.net/guides/eac97fca-8693-42b8-994d-609a690f7797_c3.html)

The output above shows that the required chart is created, and the next step is to explore the concatenation and hierarchical axis options in Power BI.

Concatenation
-------------

Once you have a chart selected, start drilling down using the **Expand all down one level..** option present at top of the chart, as shown below. If you click it once, the visual that was displayed in years will now be displayed in a quarter/year combination.

![c4](../../pluralsight2.imgix.net/guides/e11a1143-4cc4-4397-a405-a69286a1fea5_c4.html)

You can see that the title of the chart is automatically updated to **Loan\_disbursed by Year and Quarter**. You can drill down further to the month level.

![c5](../../pluralsight2.imgix.net/guides/1049e89f-41b7-47c9-95e4-1c52ccbbd988_c5.html)

The output above represents the column chart of **Loan\_disbursed by Year, Quarter and Month**. It becomes difficult to interpret the chart as you start to drill down and concatenate the levels together. To overcome this limitation, you can access the hierarchy view to your chart instead of this concatenation effect .

Hierarchical Axis
-----------------

To begin, go into the **Format** pane, and then to the **X axis** option.

![c6](../../pluralsight2.imgix.net/guides/ff3a7ac5-50dc-43b5-9070-f28e19483642_c6.html)

Under the **X axis** option, you will see the option called **Concatenate labels**.

![c7](../../pluralsight2.imgix.net/guides/25921bc8-c4b7-450a-b9bc-f31ba22cb49a_c7.html)

Turn off the **Concatenate labels** option. Once you complete this step, you will see a nice hierarchy that is created. The year, quarter, and month are now properly arranged.

![c8](../../pluralsight2.imgix.net/guides/0d2cc9d0-173e-4809-bc18-6f90d063984b_c8.html)

You can improve the view further by increasing the **Text size**. Set the value to 12.

![C9](../../pluralsight2.imgix.net/guides/596d4e3d-cf88-4e8d-a3fd-c50a816f1d2c_c9.html)

The output is now more interpretable than before. You can use the hover tool as shown below to scroll from left to right.

![C10](../../pluralsight2.imgix.net/guides/187c96f2-081c-4f6a-912a-6acd8a9ca876_c10.html)

Conclusion
----------

Business intelligence reporting often deals with hierarchical data. It can be a date-level hierarchy as you saw in this data or it can be a location, product, or inventory-level hierarchy. In such circumstances, concatenated labels and hierarchical axis representation becomes useful to drill down at the desired hierarchy. This also helps in descriptive and diagnostic analytics. This a common task in sectors like retail and domain like time series where you have hierarchies across category and time stamps. This skill will improve your analytics and business intelligence capabilities.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Building Gauge Charts in Power BI
=================================

### Deepika Singh

-   Nov 23, 2020
-   6 Min read
-   6,128 Views

-   Nov 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   6,128 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualization" class="menu-link">Adding Visualization</a>
-   <a href="#module-formattingthechart" class="menu-link">Formatting the Chart</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Gauge charts are used to show progress towards a particular goal. It helps understand to what extent a goal has been completed. Gauge charts are often used to represent key performance indicators (KPIs) such as sales, revenue, manpower productivity, or profits. This guide will demonstrate how to build gauge charts in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variable used in this guide is the <span class="jsx-3120878690">`Loan_disbursed`</span> variable, which indicates the loan amount (in US dollars) disbursed by the bank.

Start by loading the data.

Loading Data
------------

Once you open the Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is the **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Adding Visualization
--------------------

To begin, you will need a chart, table, or matrix. You will create a **Gauge** chart in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![g1](../../pluralsight2.imgix.net/guides/a6bfcfe6-63d4-4d08-a6ed-d7730fbcbe62_g1.html)

You can resize the chart on the canvas, and the next step is to fill the visualization arguments. Drag the <span class="jsx-3120878690">`Loan_disbursed`</span> variable into the **Value** field, which will create the following chart.

![g2](../../pluralsight2.imgix.net/guides/3ec23834-399a-4827-a3a6-110fdcdb8acb_g2.html)

The output above shows that Power BI gauge chart automatically creates a target value. The default value is twice the total value of the measure, which is <span class="jsx-3120878690">`Loan_disbursed`</span> in this case.

Formatting the Chart
--------------------

Under the **Format** pane, you will see various options of formatting the chart.

![g3](../../pluralsight2.imgix.net/guides/54ec3b45-2eb4-4199-877a-bf5804c06189_g3.html)

The first thing you can do is to set the target value in the gauge chart. Go to **Gauge axis** under **Format**, and set the **Target** value to $600 million.

![g4](../../pluralsight2.imgix.net/guides/11c478f9-195c-45e6-8a8d-cece749c7252_g4.html)

You can also change the **Data colors** to add contrasting color to the target value.

![g5](../../pluralsight2.imgix.net/guides/8b8818f9-d60c-4213-8721-e82d7c500f90_g5.html)

You might want to change the title of the chart. This can be done with the **Title** option.

![g6](../../pluralsight2.imgix.net/guides/bfb61e2f-0f0f-415f-884f-bb8cbeea1e56_g6.html)

Finally, you can change the **Font color**, **Alignment**, and **Text size** of the chart.

![g7](../../pluralsight2.imgix.net/guides/97a31ebf-7a47-457e-9816-0377993df3fd_g7.html)

The above output represents the resulting gauge chart, in which the loan disbursed by the bank is tracked against the target value.

Conclusion
----------

A gauge chart is an important visualization chart in business intelligence and performance management. The gauge chart shows the minimum, maximum, and current value against the target value. This allows business leaders and managers understand the gap between the current and the target state, which allows them to do course correction, if required. This is an important chart type and the knowledge of building this chart in Power BI Desktop will improve your analytics and business intelligence capabilities.

To learn more about building powerful visualizations in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

7.  [Adding Slicers to a Power BI Report](https://app.pluralsight.com/guides/adding-slicers-to-a-power-bi-report)

8.  [Explore the Analytics Pane in Power BI](https://app.pluralsight.com/guides/explore-the-analytics-pane-in-power-bi)

9.  [Waterfall Charts in Power BI](https://app.pluralsight.com/guides/waterfall-charts-in-power-bi)

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

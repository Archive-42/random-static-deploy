<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Explore the Analytics Pane in Power BI
======================================

### Deepika Singh

-   Nov 20, 2020
-   7 Min read
-   694 Views

-   Nov 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   694 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualization" class="menu-link">Adding Visualization</a>
-   <a href="#module-analyticspane" class="menu-link">Analytics Pane</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In visualization and BI, once you've got your report and visuals ready, you might still want to do some further analysis. For example, you might want to highlight a line indicating the minimum, mean or maximum values in the chart. In Power BI, the analytics pane captures all the analytical options available for any selected chart at your disposal. In this guide, you will learn how to explore and implement the analytics pane in Power BI desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

2.  <span class="jsx-3120878690">`Month`</span>: Month of loan disbursal.

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

Adding Visualization
--------------------

To begin, you will need a chart, table, or matrix. You will create a *clustered column chart* in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![a1](../../pluralsight2.imgix.net/guides/12b36123-a15d-4d5f-8236-b968dd6c16f2_a1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Month`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![a2](../../pluralsight2.imgix.net/guides/f3a8d737-34eb-4ef7-96e6-36cd64ec4b9d_a2.html)

The output above shows the **Loan\_disbursed by Month** chart. You can perform some formatting options. For example, you can turn on the **Data labels** option as shown below.

![a3](../../pluralsight2.imgix.net/guides/33a3908c-0785-425c-81ec-f30b6bd4d8c4_a3.html)

You can also increase the size of the labels. Set the **Text size** to 12.

![a4](../../pluralsight2.imgix.net/guides/38b5ac30-194a-4820-bd5f-bae395d35e85_a4.html)

The desired chart is created, and you can now explore the analytics pane.

Analytics Pane
--------------

Once you have a chart selected, you might want to perform several analytical operations on it. To look at the options available, select the chart, and look at the **Analytics** option. This looks like a little magnifying glass.

![a5](../../pluralsight2.imgix.net/guides/fcf8a917-6eac-41ac-9a80-18858b85bc7f_a5.html)

You can see all the analytical options available for this chart.

### Plotting Minimum and Maximum Lines to the Chart.

Click on the **Min line** option as shown above and click **Add**. You can change the **Color** and **Transparency** as shown below. This will create the resulting output.

![a6](../../pluralsight2.imgix.net/guides/1d686d14-0884-4926-9283-cf2d856c74cb_a6.html)

Repeat the process for **Max line** option and you can keep a different color for contrast.

![a7n](../../pluralsight2.imgix.net/guides/ab45231d-6dd1-4152-a81a-23081bcf26f2_a7new.html)

The above output shows that the minimum and maximum values are $24 million and $49 million, respectively.

### Adding Average Line to the Chart

The minimum and maximum lines are good, but often as analysts you want to look at the average line. Click on the **Average line** and click **Add**. You can change the **Color** and **Transparency** as shown below. This will create the resulting output.

![a8](../../pluralsight2.imgix.net/guides/8e7e0d7e-39a1-4e22-8872-dd2a40a71f6b_a8.html)

The average monthly loan disbursed stands at $37 million.

### Adding Percentile Lines to the Chart

Outlier detection is an important task in business intelligence and machine learning. One of the common techniques of doing this is to cap the outlier points with certain percentile values. In this case, you will select the tenth and ninetieth percentile point for outlier detection.

Start by removing the lines by clicking on the **x** sign. This is not necessary, but you can do it to understand the percentile line better.

![a9](../../pluralsight2.imgix.net/guides/bc04fc44-1a75-4fa4-a72e-bd4ab4d78b5a_a9.html)

Once you have removed the lines, it will result in the following output.

![a10](../../pluralsight2.imgix.net/guides/1dbbf86c-6423-493b-9947-4a4fad13baaf_a10.html)

Click on the **Percentile line** and click **Add**. Set the percentile value to 90.

![a11](../../pluralsight2.imgix.net/guides/cc2e5602-c637-411c-af88-b6139ba166cf_a11.html)

The output shows that the line around the ninetieth percentile value is plotted in the chart.

![a12](../../pluralsight2.imgix.net/guides/30cd54ed-a4e9-40dc-8114-b1341ba57a8a_a12.html)

To add the tenth percentile value, click again on **Add** as shown above, and set the percentile value to 10.

![a13](../../pluralsight2.imgix.net/guides/a6b24e0f-4505-4401-9196-837a7e7aff19_a13.html)

Now you have the chart with required percentile values. The values outside these two percentile lines will be considered outliers. In this case, the values $24 million, $48 million, and $49 million are outliers.

Conclusion
----------

Analytical skills are one of the most sought after and in-demand skillsets of this decade. It is a sector agnostic skill and is used in every organization across sectors. Power BI Desktop provides many useful analytical features in the analytics pane, and this knowledge will help you strengthen your analytics and business intelligence capabilities.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

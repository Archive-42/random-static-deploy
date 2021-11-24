<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Adding Slicers to a Power BI Report
===================================

### Deepika Singh

-   Nov 20, 2020
-   7 Min read
-   1,860 Views

-   Nov 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,860 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

14

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualization" class="menu-link">Adding Visualization</a>
-   <a href="#module-addingslicertothechart" class="menu-link">Adding Slicer to the Chart</a>
-   <a href="#module-formattingtheslicer" class="menu-link">Formatting the Slicer</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In Power BI, the filters option is used to drill down on a particular chart. But sometimes you want a selection to be applied to all the visuals in the report. Slicers are the on-canvas filters that get applied to all reports or charts in the page. This helps in interacting dynamically with the Power BI report. This guide will demonstrate how to utilize the slicer option in Power BI desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

2.  <span class="jsx-3120878690">`Date`</span>: Date of loan disbursal.

3.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was disbursed.

4.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate charged on the disbursed loan.

5.  <span class="jsx-3120878690">`Weeknum`</span>: Week number when the loan was disbursed.

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

To begin, you will need a chart, table, or matrix. You will create a **line and stacked column chart** in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you are yet to add the required visualization arguments.

![s1](../../pluralsight2.imgix.net/guides/59895bb6-1460-4723-89e5-8ae149e2fa24_s1.html)

You can resize the chart on the canvas, and the next step is to fill the visualization arguments. Drag the <span class="jsx-3120878690">`Date`</span> variable into the **Shared axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Column values** field.

![s2](../../pluralsight2.imgix.net/guides/45e59477-2327-477c-b287-aa2922449c7c_s2.html)

Drag the <span class="jsx-3120878690">`Interest_rate`</span> variable into the **Line values** field.

![s3](../../pluralsight2.imgix.net/guides/0fd20b3a-6b0d-458d-af46-11c67d384a95_s3.html)

You can see that the interest rate values are adding up, which is incorrect. To change it to average, right click and select the **Average** option.

![s4](../../pluralsight2.imgix.net/guides/451388fc-40bb-40e5-83a8-aa333d6fe11a_s4.html)

The above steps will create the desired chart.

![s5](../../pluralsight2.imgix.net/guides/8722f1de-6746-4927-ab96-4050ccad6d79_s5.html)

You can format the chart and turn on **Data labels** as shown below. This displays the values in the chart.

![s6](../../pluralsight2.imgix.net/guides/089640e8-f1f4-4c00-9c29-81697e801524_s6.html)

To understand the functionality of slicers better, you can add one more chart. This time you will create a tree map chart. Start by clicking on the **Treemap** option under **Visualizations**.

![s7](../../pluralsight2.imgix.net/guides/491c468b-c822-4dce-8ae3-31053d920895_s7.html)

Drag the variable **Weeknum** into **Group** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> into the **Values** field.

![s8](../../pluralsight2.imgix.net/guides/340fce27-e61a-44de-babc-cd061f3ccec1_s8.html)

You have the desired charts into the canvas, and you are now ready to explore the functionality of slicers.

Adding Slicer to the Chart
--------------------------

To begin, click on the **Slicer** option that creates a slicer box in the canvas.

![s9](../../pluralsight2.imgix.net/guides/e7f6c76c-fdfd-42bf-a0a4-fc45de60dced_s9.html)

The slicer you will build is on the <span class="jsx-3120878690">`Purpose`</span> variable. The objective is to look at loan disbursal, interest rate and week number with respect to the <span class="jsx-3120878690">`Purpose`</span> variable. Drag the variable into the **Field** option as shown below.

![s10](../../pluralsight2.imgix.net/guides/4ac84039-77b6-43de-9f6c-7587fcba5e4b_s10.html)

You can see the slicer box with different categories of <span class="jsx-3120878690">`Purpose`</span> variable.

Formatting the Slicer
---------------------

Under the **Format** pane, you will see various options for formatting the slicer. The **Selection controls** option details how you can control the slicer display.

![s11](../../pluralsight2.imgix.net/guides/c74edfdb-19ce-49d3-a1ea-f7e8ff5cc9b0_s11.html)

Turn on the **Show “Select all” option** , and turn off the **Multi-select with CTRL** opton.

![s12](../../pluralsight2.imgix.net/guides/fa123c91-9de4-4930-9de4-2374169becab_s12.html)

If you want to display the charts on the canvas, only for the **Education** label of the <span class="jsx-3120878690">`Purpose`</span> variable, click on the label as shown below. This will change both the visuals in the canvas, which are now sliced to display only the **Education** category.

![s13](../../pluralsight2.imgix.net/guides/cc7035e3-f30f-4b4a-b8f5-25aeca4c7279_s13.html)

You can perform multiple selections of categories as shown below, which displays the visuals for categories, *Education*, *Home*, and *Personal*.

![s14](../../pluralsight2.imgix.net/guides/ee405c02-f510-4238-84cc-04967381ad05_s14.html)

Now the charts titled **Loan\_disbursed and Average of Interest\_rate by Year** and **Loan\_disbursed by Weeknum** will slice the data and display the result for categories, *Education*, *Home*, and *Personal*.

Conclusion
----------

Slicing the data is an integral component of data manipulation and exploratory data analysis. To be able to visualize the different charts at the same time, with single or multiple slicers, is an important skill in descriptive and diagnostic analytics. This a common task and is sector agnostic in nature, which means it has applications across industries such as banking and financial services, manufacturing, utilities, ecommerce, retail, etc. This skill will improve your analytics and business intelligence capabilities.

To learn more about building powerful visualizations in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

14

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

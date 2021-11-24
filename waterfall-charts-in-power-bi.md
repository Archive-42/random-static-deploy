<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Waterfall Charts in Power BI
============================

### Deepika Singh

-   Nov 20, 2020
-   5 Min read
-   1,089 Views

-   Nov 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,089 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

12

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualization" class="menu-link">Adding Visualization</a>
-   <a href="#module-formattingthechart" class="menu-link">Formatting the Chart</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Waterfall charts are an extension to normal visualization charts. They show the incremental journey of the values of a variable, and are useful to track changes in data over time. The waterfall chart is useful to understand how an initial value such as sales is affected by a sequence of positive and negative changes. This guide will demonstrate how to implement waterfall charts in Power BI desktop.

Data
----

In this guide, you will work with a fictitious sales data of ten years. The data contains ten observations and three variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/waterfalldata.csv). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Last day of every year.

2.  <span class="jsx-3120878690">`Sales`</span>: Annual Sales (in $ million) of the year.

3.  <span class="jsx-3120878690">`SalesVar`</span>: Incremental sales (in $ million) every year with respect to the previous year.

Start by loading the data.

Loading Data
------------

To begin, open a new Power BI Desktop canvas and save it as **PowerBI Visualization**.

![wf1](../../pluralsight2.imgix.net/guides/f4cfb057-404a-445e-999d-b0f2175b5e9d_wf1.html)

The next step is to load the data. Click on **Get data** option and select **Text/CSV** from the options.

![wf2](../../pluralsight2.imgix.net/guides/d7e7c2fe-9a96-465b-b7dd-9901fee8d428_wf2.html)

Browse to the location of the file and select it. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![wf3](../../pluralsight2.imgix.net/guides/b06e46ff-b3ce-48f7-9396-0286bab46b77_wf3.html)

You have loaded the file, and the **Fields** pane contains the variables of the data.

![wf4](../../pluralsight2.imgix.net/guides/096ebbe5-4aea-4619-8fc4-d612bfbb18a7_wf4.html)

Adding Visualization
--------------------

You can locate the **Waterfall chart** in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![wf5](../../pluralsight2.imgix.net/guides/e6bbd93c-5f13-41df-8fed-557a43531b90_wf5.html)

You can resize the chart on the canvas, and the next step is to fill the visualization arguments. Drag the <span class="jsx-3120878690">`Date`</span> variable into the **Category** field, and <span class="jsx-3120878690">`SalesVar`</span> variable in the **Values** field. You will see that the chart is created in the canvas.

![wf6](../../pluralsight2.imgix.net/guides/d572d7b4-16a4-40ee-b7de-74f468d70ad7_wf6.html)

From the chart you can infer that the sales growth was negative in the years 2014, 2015, and 2020. Further diagnostic analysis can be done on the data to understand the reasons behind the degrowth. For example, sales degrowth in 2020 could be because of COVID. This will help you decipher the data.

Formatting the Chart
--------------------

There are several formatting options available. To begin, you can go to the **Format** field, and turn on **Data labels** as shown below. This will display the values in the chart.

![wf7](../../pluralsight2.imgix.net/guides/1dc2e882-6abd-465d-9f5e-0256ed74012e_wf7.html)

You can see that now the incremental value is displayed in the chart. This allows you to understand better the years when the sales growth was positive or negative.

The other formatting option you can do is to change the **Sentiment colors** of the chart. Click on the option and you will see different colors to depict **Increase**, **Decrease**, and **Total**. You can change these colors as per your preference.

![wf8](../../pluralsight2.imgix.net/guides/f8fcd4ef-93d8-45fa-9688-06e1b711d0a4_wf8.html)

Conclusion
----------

Waterfall charts can be a powerful tool to use if you want to track changes over a measure across time dimension. This will be useful for time series analysis across sectors such as retail, ecommerce, shipping and logistics, which applies time series forecasting to its operations. It can also be used across domains such as human resources to audit the headcount change across a time period. This is a common task and is sector agnostic in nature, which means it has applications across industries such as banking and financial services, manufacturing, utilities, ecommerce, retail, etc. This skill will improve your descriptive analytics and business intelligence capabilities.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

12

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

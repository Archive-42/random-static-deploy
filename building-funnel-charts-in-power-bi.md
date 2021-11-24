<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Building Funnel Charts in Power BI
==================================

### Deepika Singh

-   Nov 23, 2020
-   6 Min read
-   1,777 Views

-   Nov 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,777 Views

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
-   <a href="#module-formattingthechart" class="menu-link">Formatting the Chart</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Funnel charts are typically used to show changes over a sequential process that leads into a result. In marketing, the funnel chart will show the stages or steps that transform a lead into a customer. This type of chart is also used to identify weak links in the marketing or sales processes. In this guide, you will learn how to build funnel charts in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious sales conversion data of two variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/funnelchartdata.csv). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Stage`</span>: Represents the various stages of a sales process leading to conversion.

2.  <span class="jsx-3120878690">`Details`</span>: Represents the details corresponding to the various stages in a quarter.

Start by loading the data.

Loading Data
------------

To begin, open a new Power BI Desktop canvas and save it as **PowerBI Visualization**.

![fc1](../../pluralsight2.imgix.net/guides/04cabd40-b16b-47be-8d55-2a7f32ecdc92_wf1.html)

The next step is to load the data. Click on **Get data** option and select **Text/CSV** from the options.

![fc2](../../pluralsight2.imgix.net/guides/d51493f8-2c70-434d-a951-61620f9ea621_wf2.html)

Browse to the location of the file and select it. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![fc3](../../pluralsight2.imgix.net/guides/0d823267-c740-4341-9530-7529d5db9b8d_fc3.html)

You have loaded the file, and the **Fields** pane contains the variables of the data.

![fc5](../../pluralsight2.imgix.net/guides/afc5cd41-6156-46e3-80a2-ce8ac7d2c5c3_fc5.html)

Adding Visualization
--------------------

You can locate the **Funnel** chart in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![fc6](../../pluralsight2.imgix.net/guides/fee9674c-632a-431e-8a59-b90fbefae6e9_fc6.html)

You can resize the chart on the canvas, and the next step is to fill the visualization arguments. Drag the <span class="jsx-3120878690">`Stage`</span> variable into the **Group** field, and <span class="jsx-3120878690">`Details`</span> variable in the **Values** field. You will see that the chart is created in the canvas.

![fc7](../../pluralsight2.imgix.net/guides/db77abbe-26e6-4a01-92c1-c3d2d95edbb0_fc7.html)

### Interpreting the Funnel Chart

A typical customer conversion process starts with inquiry from the customer. There were 350 inquiries made in the time period considered in the example in this guide. Out of these 350 inquiries, the sales team reached out to them and classified 160 as qualified leads. This means the other inquiries were not worth pursuing. Out of these 160 qualified leads, the sales team had meetings with 120 leads. 90 of these leads went on to fill the proposal form, out of which 60 eventually ended up becoming customers. This meant a 17.1 percent conversion rate with respect to total number of inquiries.

Formatting the Chart
--------------------

There are several formatting options available. To begin, you can go to the format field, and change the color and text size of the chart. This is shown below.

![fc8](../../pluralsight2.imgix.net/guides/d4541124-b995-4355-9bc3-fbb675308535_fc8.html)

The other formatting option you can do is to change the **Data colors** of the chart. Click on the option and you will see different colors to depict the various stages.

![fc9](../../pluralsight2.imgix.net/guides/5b759e14-1c5a-441c-a126-1ae9a0751a00_fc9.html)

Select the color as shown below or as per your preference.

![fc10](../../pluralsight2.imgix.net/guides/cc61e7e4-90bc-4174-bf22-a583f848e941_fc10.html)

The other formatting you can do is change the color and text size of conversion parameter. This can be done by turning on the **Conversion** option, and changing the **Color** and **Text size**.

![fc11](../../pluralsight2.imgix.net/guides/9d900f29-26b3-436f-a8b1-4fee11193953_fc11.html)

You now have the funnel chart that is well formatted and gives you the picture of different stages of sales cycle.

Conclusion
----------

Funnel charts are a simple but extremely powerful tool to use if the data is sequential and moves through various stages. This is extensively used in sales and marketing companies. It is also used in e-commerce websites to identify abandonment rate. Creating funnel charts is a common task for any organization that has a sales or marketing function. This skill will improve your marketing analytics capabilities.

To learn more about building powerful visualization in Power BI Desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in PowerBI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

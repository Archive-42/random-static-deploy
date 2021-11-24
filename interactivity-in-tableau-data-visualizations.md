<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/ce501f54-fed2-4c77-a499-71e5d2c571d4.jpg" alt="Author avatar" class="jsx-3841407315" />

Chhaya Wagmi

Interactivity in Tableau Data Visualizations
============================================

### Chhaya Wagmi

-   Nov 1, 2020
-   6 Min read
-   1,177 Views

-   Nov 1, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,177 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">General Visualization Principles</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Visualization</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-displayingoneoutofmanyfeatures" class="menu-link">Displaying One Out of Many Features</a>
-   <a href="#module-displayingmultiplechartsdynamicallyinadashboard" class="menu-link">Displaying Multiple Charts Dynamically in a Dashboard</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

A picture is worth 1,000 words, but a one-minute, 30-FPS video is worth 1,800 pictures—which means as you increase the dimension, you get more information at the cost of increased complexity.

When you are up for a presentation, it is important to understand what kind of media you put on your slides. When you present results to stakeholders and clients, you need to precisely and concisely convey important information. You can fill your Powerpoint slides with text and some images, but is that the most efficient way to present your insights? Maybe, maybe not! If you convert your images from static to dynamic, they can convey a lot more information while also hiding unnecessary information.

In this guide, you will learn how to create dynamic charts in Tableau that contain additional information and yet display only what is asked for.

Displaying One Out of Many Features
-----------------------------------

Consider a bar chart that consists of hundreds of bars. All of these bars can be adjusted in a single view, but nobody can recognize the labels associated with them due to overlapping text. Instead, when you have a lot of bars, a better option is to visualize only each bar and the data associated with it one at a time.

To try this in Tableau, start with the **Sample - Superstore** dataset. In your worksheet, drag and drop the **Profit** and **Sales** measures to columns and the **Sub-Category** dimension to rows. These actions will result in the following chart: ![First view of Bar charts](../../pluralsight2.imgix.net/guides/187a5c11-d900-41eb-b2af-af08e3b1ef5b_1.html)

The chart displays the profit and sales of each product sub-category. To visualize only one product's profit and sales, right-click on **Sub-Category** from the data pane and select **Show Filter**. This will open up a new card on the right side of the sheet: ![Displaying Sub-Category Filter Card](../../pluralsight2.imgix.net/guides/23e648f9-6660-44ef-b520-ebbf1e379d5e_2.html)

To display details of only one product at a time, first, click on **(All)**, which will deselect all the sub-categories. Next, select the name of any category, here, **Phones**. ![Displaying details of only one sub-category](../../pluralsight2.imgix.net/guides/61db5f13-a767-44f5-953e-53cdd0d893a8_3.html)

When you have hundreds of product names inside the card and you find it difficult to search for a specific product name, you can always use the **Find Values** option. This option lets you type the name of the product instead of manually searching for it.

Displaying Multiple Charts Dynamically in a Dashboard
-----------------------------------------------------

How can you present information from multiple charts in the same area? Maybe you can use dual-axis charts that combine data of multiple time-series into one chart, or maybe you can go for sub-plotting! Most people find the dual-axis plot a little difficult to understand due to multiple magnitudes sharing the same space. As far as sub-plotting is concerned, four to nine sub-plots work in a chart, but increasing the number to 20, 40, and so on only diminishes the size of each sub-plot.

A better solution to visualize multiple plots in a single chart is to place a drop-down list next to the chart and let users select which plot they want to visualize. This way you get a properly sized chart without the confusion of multiple magnitudes mixing together.

To create a dynamic dashboard, load the **Sample - Superstore** dataset in Tableau. You will be creating three charts, each representing one of the following relationships:

-   Chart 1: Profit in each state
-   Chart 2: Profit in each city
-   Chart 3: Profit in each postal code zone

Drag and drop **Profit** to the **Columns** shelf followed by **State**, **City**, or **Postal Code** to the **Rows** shelf, one in each of the three sheets. If you wish, you can rename the charts in each sheet.

![Profit in each State](../../pluralsight2.imgix.net/guides/e1d69a42-8602-4abc-a752-76d180d9543a_4.html)

![Profit in each City](../../pluralsight2.imgix.net/guides/d4107465-4ccc-4ded-a0ba-3e80f22cbe05_5.html)

![Profit in each Postal Code zones](../../pluralsight2.imgix.net/guides/4008e77d-5d71-41de-8fde-3b3b524dfc5c_6.html)

Next, create a new string parameter, **Specify a Location**, with a list of three values (**State**, **City**, **Postal Code**). Remember that the names of the **Value** and **Display As** columns are same, as shown: ![Creating a parameter](../../pluralsight2.imgix.net/guides/eb3bbcff-d917-4f2c-a370-922d1b39d1fc_7.html)

With the parameter in its place, create a new calculated field with the same name as the parameter: ![Creating the Calculated Field](../../pluralsight2.imgix.net/guides/1bb7cf1d-5102-40a3-812d-8be7a162b198_8.html)

Now, go to each of the three sheets and perform these steps:

1.  Right-click on the created parameter and click **Show Parameter Control**. This opens up a card on the extreme right of the chart. Select a value associated with the chart. For example, if you are on a chart that displays profit in each city, select **City**.
2.  Drag and drop the created calculated field in the **Filters** card, which opens up a dialog box. Select the value within the dialog box, as shown below for the city chart: ![City Filter](../../pluralsight2.imgix.net/guides/11f22345-9f60-4a70-a29d-8737eb185fdd_9.html)

With the above operations complete, you can move ahead to create a dashboard. Once on the dashboard, drag and drop the horizontal layout object in the blank white space. Next, drag and drop each of the three sheets in the dashboard working area and hide the title of each sheet, if needed. This completes the creation of a dynamic chart in Tableau.

To visualize the chart, open the dashboard in a presentation view and let the user select an option. Below is a preview of the "Profit in each State" chart: ![A dynamic chart in Tableau](../../pluralsight2.imgix.net/guides/8feb104b-437b-4b77-9600-24f90ef5e2c1_10.html)

Conclusion
----------

Tableau has a built-in labeling feature that lets you view the details of your chart just by hovering the mouse. You can further increase the productivity of your charts by either providing a filter to display only one out of many features or toggling between charts using a drop-down menu. This guide has explained both of these methods. You can learn more about creating dynamic Tableau charts from [this](https://www.tableau.com/about/blog/2016/1/how-create-dynamic-tableau-dashboard-layouts-sliding-containers-48269) blog.

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

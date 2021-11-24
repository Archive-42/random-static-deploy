<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Building a Time Series Chart in Tableau
=======================================

### Deepika Singh

-   Oct 30, 2020
-   6 Min read
-   21,323 Views

-   Oct 30, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   21,323 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Tableau</span>

Introduction

27

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-steps" class="menu-link">Steps</a>
-   <a href="#module-addingcategoriestotimeseries" class="menu-link">Adding Categories to Time Series</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Time series forecasting is a critical requirement for many organizations. The starting point of forecasting is a time series visualization, which provides the flexibility to reflect on historical data and analyze trends and seasonal components. It also helps to compare multiple dimensions over time, spot trends, and identify seasonal patterns in the data. A few examples include stock market analysis, population trend analysis using a census, or sales and profit trends over time.

### Definition of Time Series

Time series analysis is a statistical technique used to record and analyze data points over a period of time, such as daily, monthly, yearly, etc. A time series chart is the graphical representation of the time series data across the interval period.

In this guide, you will learn how to build a time series chart in Tableau.

Steps
-----

Tableau provides convenient options for building time series charts. The built-in date and time functions allow you to use the drag-and-drop option to create and analyze time trends, drill down with a click, and easily perform trend analysis comparisons.

To build a time series chart in Tableau, we will use the built-in Sample Superstore data that comes with the Tableau installation. Please follow the steps outlined below to create a time series chart.

1.  Drag the **Order Date** field to the **Columns** shelf and the **Sales** variable to the **Rows** shelf. The default chart will give us a yearly trend line chart. The **Marks** shelf automatically selects a line graph for the chart.

![ts1](../../pluralsight2.imgix.net/guides/33efc0d6-bf1d-4103-b7a9-31bb8811773d_Fig2.0.html)

1.  In the chart above, we see that the display is in years. To further drill down to quarter and month levels, we can simply click on the **plus icon** on the order date in the **Columns** shelf. This will generate the following output, which now displays the data broken down to the month and quarter level.

![ts2](../../pluralsight2.imgix.net/guides/18f07f87-98cf-4563-9739-c0021329abb1_Fig2.1.html)

1.  The above chart is useful, but it is displayed in a discrete format. It will be more beneficial if the data is displayed in continuous form. To convert the chart into a continuous format time series chart, the first step is to roll up the **YEAR (Order Date)** back to year level, and then the second step is to right-click on it and select the **Year** and **Continuous** options. This is illustrated in the chart below.

![ts3](../../pluralsight2.imgix.net/guides/4446c6f9-1bc0-4f02-bebd-215d29cfb8f9_fig_2.3.html)

1.  Another option in Tableau to build the continuous chart is to directly select the line chart type in the **Show Me** card, as shown in the chart below.

![ts4](../../pluralsight2.imgix.net/guides/8bc4d2c1-20ba-44d9-a8b3-33dfe6662254_Fig_2.4.html)

The above chart shows the trend of annual sales during the period 2016 through 2019. There is a continuous trend of increase in sales volume. However, it is better to analyze the time series data by breaking it down to a monthly level.

1.  It is easy to change the chart breakdown from annual to monthly. This can be done by simply changing the **Columns** shelf from **YEAR (Order Date)** to **MONTH (Order Date)**. This will generate a monthly time series chart. From an analytics perspective, this chart is more insightful as it allows us to see the sales fluctuations across months and years. This is also useful for decomposing the seasonality and trend components of the time series data.

![ts5](../../pluralsight2.imgix.net/guides/511cfc9f-7007-4822-83e2-559ca88c5958_Fig_2.5.html)

1.  Tableau also provides the ability to change the path property as well as the chart type.

### Change the Path Property

We can change the path property by going into the **Marks** shelf and clicking on the **Path** option. There are three options for the type of line graph for the view, and selecting the second option will produce the following chart. The output is like the previous chart, but the trend shifts are more pronounced now.

![ts6](../../pluralsight2.imgix.net/guides/043ce8c4-902a-4f08-9017-0fc706e1866f_Fig_2.6.html)

### Change the Chart Type

We can change the chart type to options such as a bar or an area chart, either from the **Marks** shelf or from the **Show Me** option. However, for time series data, this is not suggested as the line chart is the best option.

![ts7](../../pluralsight2.imgix.net/guides/89221260-3037-4f17-b95d-bdeb2f6c68f5_Figure2.7.html)

Adding Categories to Time Series
--------------------------------

In the previous sections, we have learned how to build a time series chart with two variables, <span class="jsx-3120878690">`sales`</span> and <span class="jsx-3120878690">`time`</span>. However, sometimes it is important to add more variables to a chart to understand and analyze it better. For instance, it could be useful to visualize sales by segment across time. This can be done easily in two ways. First, simply drag the **Segment** field to the **Color** pane in the **Marks** shelf. The second method is to move the category to the **Rows** shelf to show it separately.

![ts8](../../pluralsight2.imgix.net/guides/01a123a6-35bd-48bb-b912-268abc2be230_Fig2.8.html)

Conclusion
----------

In this guide, you learned about building a time series chart in Tableau and the different options available. You also learned about adding an additional category to a time series chart. This will help you in not just creating and analyzing time series data, but also in forecasting.

27

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

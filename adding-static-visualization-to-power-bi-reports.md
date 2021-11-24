<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Adding Static Visualization to Power BI Reports
===============================================

### Deepika Singh

-   Nov 23, 2020
-   8 Min read
-   2,039 Views

-   Nov 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   2,039 Views

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
-   <a href="#module-addingvisualizations" class="menu-link">Adding Visualizations</a>
-   <a href="#module-addingstaticvisualization" class="menu-link">Adding Static Visualization</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Visualization charts like bar charts, scatter plot, line charts, and gauge charts are powerful. However, sometimes you will want to add static visualization elements like text boxes, shapes, or images to a Power BI report. These static elements help the layout and the flow of your report. This guide will demonstrate how to add static visualization elements in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
3.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.

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

Adding Visualizations
---------------------

To begin, you will need a chart, table or a matrix. You will create a *clustered column chart* in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![sv1](../../pluralsight2.imgix.net/guides/28650184-ee51-4b6f-a836-ba8a942d50ff_sv1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![sv2](../../pluralsight2.imgix.net/guides/a59d4cbc-f1d9-44a2-8395-b2303c34c081_sv2.html)

The output above shows the **Loan\_disbursed by Year** chart. Next, you will add a **Line chart**.

![sv3](../../pluralsight2.imgix.net/guides/2a6fe757-8507-473f-8693-60832c8a2e04_sv3.html)

Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Interest_rate`</span> in the **Values** field.

![sv4](../../pluralsight2.imgix.net/guides/092cd773-61f5-4301-b3bf-08248827bdd6_sv4.html)

The above line chart is incorrect as it adds the interest rate values. To make the correction, right click and select **Average**.

![sv5](../../pluralsight2.imgix.net/guides/1ce48f63-d0db-4aff-bbda-4ab8a0beb6f8_sv5.html)

You have the baseline charts ready, and you can add static elements to the report.

Adding Static Visualization
---------------------------

You can find the static visualization elements under the **Insert** option. You can see the various options available.

![sv6](../../pluralsight2.imgix.net/guides/80303f6c-8f0d-4018-b91a-8b7366b4b46a_sv6.html)

### Adding Text Box

Click on the **Text box** ribbon as shown above. It will create a text box in the canvas.

![sv7](../../pluralsight2.imgix.net/guides/775581a8-f8ed-48bd-9dd9-faca3fcdfffe_sv7.html)

Click on the text box in the canvas and you can add the relevant text in the box. In this case, you will add *This is a visualization on Trend of Loan disbursal and Interest Rate across years*. You can set the font size to 24.

![sv8](../../pluralsight2.imgix.net/guides/560db6e6-6519-4519-91a4-fdcb38880408_sv8.html)

You can also add a hyperlink. In this case, you will add the link to the data.

![sv10](../../pluralsight2.imgix.net/guides/7b2bfcf0-0ef3-4a09-befe-44b91b36aa1a_sv10.html)

To format the text box, you can look at the several options. In this case, turn on the **Border**.

![sv11](../../pluralsight2.imgix.net/guides/a169659e-8efd-4856-8e3b-0128f7d44253_sv11.html)

### Adding Images

At times, you might want to include an image in the dashboard, for example, a logo or a picture. To do this, click on the **Image** option as shown below.

![sv12](../../pluralsight2.imgix.net/guides/97ce446f-0dbb-493c-8a0a-4aed442b4add_sv12.html)

Once you click on **Image** you will have the option to browse for the image in your laptop, and load it. In this case, you will insert the image of **Pluralsight**.

![sv13](../../pluralsight2.imgix.net/guides/1a913e4d-af90-4d7f-aeeb-91212dc29730_sv13.html)

### Adding Shapes

Power BI provides the user option to add several shapes into the canvas.

![sv14](../../pluralsight2.imgix.net/guides/63dea03a-64b9-4a77-a2f6-3b3467ff5e79_sv14.html)

Click on **Rectangle** and a rectangular box gets added into the canvas.

![sv15](../../pluralsight2.imgix.net/guides/8d5c7438-59a8-4758-be38-d0e327495b54_sv15.html)

You can extend the rectangle to include both the top images, **Loan\_disbursed by Year** and **Average of Interest\_rate by Year**. Both these charts are related to loans sanctioned by the bank across time, and therefore it makes sense to include a shape that covers both these chart types. Turn off the **Fill** option as shown below.

![sv16](../../pluralsight2.imgix.net/guides/07fc5643-219b-4803-a2a9-289d42383b7b_sv16.html)

Completing the above steps will generate the final chart shown below.

![sv17](../../pluralsight2.imgix.net/guides/ea4f8888-1247-4dc8-b26f-b01632358fcb_sv17final.html)

Conclusion
----------

Static elements provide an aesthetic appeal to visualization. They also help in binding together charts that are related to an underlying concept. A lot of power can be added to visualization dashboards across industries, with the knowledge of how to add static elements to the Power BI report.

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

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

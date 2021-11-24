

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Aligning Charts with Gridlines in Power BI
==========================================

### Deepika Singh

-   Nov 23, 2020
-   7 Min read
-   1,016 Views

-   Nov 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,016 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-addingvisualizations" class="menu-link">Adding Visualizations</a>
-   <a href="#module-gridlinesandsnaptogrid" class="menu-link">Gridlines and Snap to Grid</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Building powerful visualization is good, but it is important to make sure that all the charts are aligned properly. This increases the appeal of the visualization and makes it easier to comprehend. In this guide, you will learn how to align charts with gridlines in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Income`</span>: Annual Income of the applicant (in US dollars).
3.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
4.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.
5.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
6.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.
7.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was taken.
8.  <span class="jsx-3120878690">`Weeknum`</span>: Week number of the year.

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

To begin, you will need a chart, table or a matrix. You will create a *Clustered column chart* in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![sv1](../../pluralsight2.imgix.net/guides/28650184-ee51-4b6f-a836-ba8a942d50ff_sv1.html) You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![sv2](../../pluralsight2.imgix.net/guides/a59d4cbc-f1d9-44a2-8395-b2303c34c081_sv2.html)

The output above shows the **Loan\_disbursed by Year** chart. Next, you will add a **Line chart**.

![sv3](../../pluralsight2.imgix.net/guides/2a6fe757-8507-473f-8693-60832c8a2e04_sv3.html)

Drag the variable <span class="jsx-3120878690">`Date`</span> into the **Axis** field, and <span class="jsx-3120878690">`Interest_rate`</span> in the **Values** field.

![sv4](../../pluralsight2.imgix.net/guides/092cd773-61f5-4301-b3bf-08248827bdd6_sv4.html)

The above line chart is incorrect as it adds the interest rate values. To make the correction, right click and select **Average**.

![sv5](../../pluralsight2.imgix.net/guides/1ce48f63-d0db-4aff-bbda-4ab8a0beb6f8_sv5.html)

The above step will produce the following output.

![g6](../../pluralsight2.imgix.net/guides/64ba33fb-ed9a-45e1-875c-1c85ec035838_g6.html)

You have added two charts at the top of the visualization canvas. You will add two more charts to properly demonstrate the importance of gridlines.

You will add a **Gauge** chart for the variable, <span class="jsx-3120878690">`Loan_disbursed`</span>, as shown below.

![g7](../../pluralsight2.imgix.net/guides/7e1bdbb2-a9c1-4073-b343-0e5a4660b704_g7.html)

Next, click on the **Pie chart** visual.

![g8](../../pluralsight2.imgix.net/guides/9ee9f1b7-717d-4c19-bb47-0118f547f4ef_g8.html)

Drag <span class="jsx-3120878690">`Purpose`</span> in the **Legend** option, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![G9](../../pluralsight2.imgix.net/guides/dd38b06e-b274-4bcb-919e-f18290092c12_g9.html)

You now have your visualization report ready.

Gridlines and Snap to Grid
--------------------------

In order to align the charts properly, Power BI Desktop has a great feature called **Gridlines** and **Snap to grid**, which allows you to make your report look nice and properly aligned. Under the **View** tab you will see these two options.

![g10](../../pluralsight2.imgix.net/guides/17f2337f-78de-4882-8c90-05aa72957ea1_g10.html)

Turn on these two options and you can see gridlines existing for this dashboard.

![g11](../../pluralsight2.imgix.net/guides/a5670b07-2eea-46a2-86a9-824dc701c216_g11.html)

You can now ensure that all the charts are around the same size and evenly distributed across the report. In case of any discrepancy, you can correct the alignment. For example, the gauge chart is too big and out of the alignment.

![g12](../../pluralsight2.imgix.net/guides/ff46b0e6-9a5d-4191-a104-2c0139a6d4cb_g12.html)

It is easy to align this chart by dragging it within the gridlines.

![g13](../../pluralsight2.imgix.net/guides/ada60e6d-06d7-4c73-a626-28f46c7e68da_g13.html)

Once you have aligned the chart, you can turn off the **Gridlines** and **Snap to grid** option.

![g14](../../pluralsight2.imgix.net/guides/7f74549c-fd05-417c-9e24-fbada75147ae_g14.html)

Now you have all the charts aligned and you can share your well-aligned and formatted chart to your team.

Conclusion
----------

Proper formatting of a visualization chart is a must-have skill in analytics and business intelligence. It helps to increase the aesthetic appeal of your report and also makes it easy for others to comprehend. This is an essential skill requirement in consulting and auditing firms. It is also required when you present the findings to senior management. This skill set will strengthen your visualization and presentation skillsets.

To learn more about building powerful visualization in Power BI Desktop, please refer to the following guides:

1.  [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

2.  [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

3.  [Build a Tree Map and Pie Chart in Power BI](https://app.pluralsight.com/guides/build-a-treemap-and-pie-chart-in-power-bi)

4.  [Implement Clustering in Power BI](https://app.pluralsight.com/guides/implement-clustering-in-powerbi)

5.  [Filter Data in Power BI](https://app.pluralsight.com/guides/filter-data-in-power-bi)

6.  [Implementing Hierarchical Axis and Concatenation in Power BI](https://app.pluralsight.com/guides/implementing-hierarchical-axis-and-concatenation-in-power-bi)

7.  [Adding Slicers to a Power BI Report](https://app.pluralsight.com/guides/adding-slicers-to-a-power-bi-report)

8.  [Explore the Analytics Pane in Power BI](https://app.pluralsight.com/guides/explore-the-analytics-pane-in-power-bi)

9.  [Waterfall Charts in Power BI](https://app.pluralsight.com/guides/waterfall-charts-in-power-bi)

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

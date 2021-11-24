<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Coloring Charts in Power BI
===========================

### Deepika Singh

-   Nov 23, 2020
-   8 Min read
-   8,707 Views

-   Nov 23, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   8,707 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

7

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-coloringclusteredcolumnchart" class="menu-link">Coloring Clustered Column Chart</a>
-   <a href="#module-coloringscatterplot" class="menu-link">Coloring Scatter Plot</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

For building powerful and beautiful visualizations, it's important to understand and know how to control the color aspect of the charts, and how to format them according to requirements. This guide will demonstrate how to change the color of data points in the charts and other related formatting options in Power BI.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Income`</span>: Annual income of the applicant (in US dollars).
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

Coloring Clustered Column Chart
-------------------------------

To begin, you will need a chart, table or a matrix. You will create a *Clustered column chart* in this guide. You can locate it in the **Visualizations** pane. Click on the chart and it will create a chart box in the canvas. Nothing is displayed because you haven't yet added the required visualization arguments.

![cc1](../../pluralsight2.imgix.net/guides/ef341602-17d0-4f3b-8501-9ff26aa4c041_cc1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Purpose`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![cc2](../../pluralsight2.imgix.net/guides/29bb3767-eb13-41a5-bc94-710d664e8fad_cc2.html)

The output above shows the **Loan\_disbursed by Purpose** chart. You can format the chart under the **Format** tab. For example, if you want to change the color of the bars, go to **Data colors**, and you will see the default color type.

![cc3](../../pluralsight2.imgix.net/guides/b159ef28-2dbb-4da3-8bc5-07dc90f1f2e5_cc3.html)

The default color type is blue, and you can change it to the color of your choice.

![cc4](../../pluralsight2.imgix.net/guides/5678e157-a0c6-42eb-8b8e-157611eb8fe6_cc4.html)

To add the values to the chart, turn on the **Data labels**.

![cc5](../../pluralsight2.imgix.net/guides/eaed1fb5-54c4-4e1f-b6fd-e8a326335016_cc5.html)

You can also increase the size of the labels. Set the **Text size** to twelve and turn on the **Show background** option. This will add the background to the labels.

![cc6](../../pluralsight2.imgix.net/guides/0a8a8d8e-5ed9-4051-871e-f844ddfb3563_cc6.html)

The other thing you can do to change the color is add more dimensions to the chart. This can be done by adding new variable as a dimension. For example, drag the <span class="jsx-3120878690">`Gender`</span> variable to **Legend** option. This will change the chart as shown below.

![cc7](../../pluralsight2.imgix.net/guides/482dcfd7-da73-451c-bab0-2111629f3f7e_cc7.html)

The output above shows that the chart now displays **Loan\_disbursed by Purpose and Gender**, and has corresponding two colors for the <span class="jsx-3120878690">`Gender`</span> categories.

Coloring Scatter Plot
---------------------

You will now explore the Power BI coloring options with another chart. To begin, search and click on the **Scatter chart**, which is located in the **Visualizations** pane.

![cc8](../../pluralsight2.imgix.net/guides/872a4791-a865-4447-a0ec-383a0afb25e8_cc8.html)

The next step is to add the required visualization arguments. Drag the <span class="jsx-3120878690">`Weeknum`</span> variable into the **Details** option, <span class="jsx-3120878690">`Age`</span> in the **X Axis** field, and <span class="jsx-3120878690">`Income`</span> in the **Y Axis** field.

![cc9](../../pluralsight2.imgix.net/guides/3b830d1d-7e94-469b-a441-acf0f17e55d1_cc9.html)

In the output above, you can see that the values in the <span class="jsx-3120878690">`Age`</span> and <span class="jsx-3120878690">`Income`</span> variable are being added up. This is an incorrect comparison, and the correct comparison is to take average of both the variables. To make the correction, right click and select **Average** for both the variables.

![cc10](../../pluralsight2.imgix.net/guides/a6ada32e-cabe-4b3a-b5ff-4df77908f924_cc10.html)

Completing the above step will create the resulting chart with correct comparison between the two variables.

![cc11](../../pluralsight2.imgix.net/guides/eb3e19e6-d43d-4a11-88f8-78767942f717_cc11.html)

To make changes in the chart color, go to the **Format** pane and select **Data colors**. You will see that blue is the default color.

![cc13](../../pluralsight2.imgix.net/guides/91768ebf-2e7f-4316-b3ac-0f7a0620ff6f_cc13.html)

There are various options to change the color.

![cc14](../../pluralsight2.imgix.net/guides/41b9b455-56a4-4c75-b7f7-f76f5cfa54ab_cc14.html)

You can select from the options, or click on **Custom color** to select a custom color as shown below.

![cc15](../../pluralsight2.imgix.net/guides/8568d2b8-a628-4798-b6f0-4ceaf7d38648_cc15.html)

The output above shows that the custom color has been added to the chart.

Conclusion
----------

The importance of being able to control the color combination of the charts cannot be emphasized enough. The visualization dashboards, reports and business intelligence tasks require that you can utilize the color combinations in an intelligent manner, so that maximum business value and insights are derived from it. This is a great skill set to add because you will be using it regularly across sectors and organizational functions.

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

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

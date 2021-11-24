<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Bar and Column Charts in Power BI
=================================

### Deepika Singh

-   Nov 24, 2020
-   7 Min read
-   13,319 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   13,319 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-columnchart" class="menu-link">Column Chart</a>
-   <a href="#module-barchart" class="menu-link">Bar Chart</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Bar and column charts are some of the most widely used visualization charts in Power BI. They can be used for one or multiple categories. Both these chart types represent data with rectangular bars, where the size of the bar is proportional to the magnitude of data values.

The difference between the two is that if the rectangles are stacked horizontally, it is called a bar chart. If the rectangles are vertically aligned, it is called a column chart. This guide will demonstrate how to build bar and column charts in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
3.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
4.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was taken.

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

Column Chart
------------

To begin, click on the *Clustered column chart* located in the **Visualizations** pane. This creates a chart box in the canvas. Nothing is displayed because haven't yet added the required visualization arguments.

![bc1](../../pluralsight2.imgix.net/guides/a0c6e06e-a5d0-454a-aad6-15d739dcc1a8_bc1.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Purpose`</span> into the **Axis** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![bc2](../../pluralsight2.imgix.net/guides/4b019bb1-9699-4bcc-920a-5e73e3312e5e_bc2.html)

The output above shows the **Loan\_disbursed by Purpose** chart. You can format the chart under the **Format** tab. For example, if you want to add values to the chart, turn on the **Data labels**.

![bc3](../../pluralsight2.imgix.net/guides/f839687e-0e04-425a-b69f-8687cb70bf05_bc3.html)

You can also increase the size of the **X axis** labels. Set the **Text size** to 12.

![bc4](../../pluralsight2.imgix.net/guides/db9c2a5e-8894-46e1-a803-405e29faae6b_bc4.html)

You can also adjust the title of the chart. Go to **Title**, and change the **Font color**, **Alignment**, and **Text size** arguments as shown below or as per your preference.

![bc5](../../pluralsight2.imgix.net/guides/f96f26e4-4007-4175-8b70-caeac04bb957_bc5.html)

After making these changes, you will have the following column chart.

![bc6](../../pluralsight2.imgix.net/guides/453ea4b1-1a29-4824-bde9-c36e9a00b6eb_bc6.html)

### Clustered Column Chart

A clustered column charts is a type of column chart in which you compare two values side by side. In this case, you will compare the <span class="jsx-3120878690">`Loan_disbursed`</span> values against two categories, <span class="jsx-3120878690">`Purpose`</span> and <span class="jsx-3120878690">`Gender`</span>.

It is easy to make a clustered column chart by adding <span class="jsx-3120878690">`Gender`</span> in the **Legend** position of the previous column chart.

![bc7](../../pluralsight2.imgix.net/guides/61860090-84e8-408d-8319-56f3e03a204a_bc7variant1.html)

Bar Chart
---------

If you have the column chart in the canvas, it is easy to convert it into a bar chart. Below is the **Loan\_disbursed by Purpose** chart you created above.

![bc9](../../pluralsight2.imgix.net/guides/dac4eabe-a548-4329-af1e-dc10b1666a69_bc9.html)

Locate the **Clustered bar chart** option in the **Visualizations** pane as shown above, and click on it. This will convert the column chart into a bar chart.

![bc10](../../pluralsight2.imgix.net/guides/23e6154f-ddaa-4d78-8c26-0e7d9ea2fabb_bc10.html)

### Clustered Bar Chart

To create a clustered bar chart, drag the <span class="jsx-3120878690">`Gender`</span> variable into the **Legend** option.

![bc11](../../pluralsight2.imgix.net/guides/131ee59f-f821-4db2-992f-6a25f24f25a0_bc11variant1.html)

Conclusion
----------

Bar and column charts are used regularly in visualization to compare two or more values. In business intelligence, you will be required to build these charts for a variety of areas, such as finance, sales, marketing, production planning, geographical coverage, time series analysis, and many more. This is a great skill set to add because you will be using it regularly across sectors and organizational functions.

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

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

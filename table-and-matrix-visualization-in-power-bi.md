<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Table and Matrix Visualization in Power BI
==========================================

### Deepika Singh

-   Nov 10, 2020
-   10 Min read
-   10,005 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   10,005 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

22

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-tablevisualization" class="menu-link">Table Visualization</a>
-   <a href="#module-matrixvisualization" class="menu-link">Matrix Visualization</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Power BI has brilliant plotting capabilities, but it also provides lots of depth for tabular visualizations. This is especially important for a textural set of data or for analyzing a text category in your report. The table and matrix visualization charts in Power BI provide the option to display categorical variables with text labels in the report.

The main difference between table and matrix visualizations is that tables are two-dimensional. This means they display data only in two dimensions. On the other hand, matrix visualization gives you the option to specify multiple variables in rows and columns. It also gives you the opportunity to take advantage of Power BI's drill-down functionality.

In this guide, you will learn how to perform table and matrix visualization in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursals across years. The data contains 3000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Income`</span>: Annual Income of the applicant (in US dollars).
3.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
4.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.
5.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
6.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.
7.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was approved.

Start by loading the data.

Loading Data
------------

Once you open the Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Table Visualization
-------------------

You can locate the table chart in the **Visualizations** pane.

![t1](../../pluralsight2.imgix.net/guides/c1860602-599b-4100-a919-2dc8b8ed6e28_t1.html)

Click on the chart shown above, and it will create a default table in the canvas. Nothing is displayed yet because you have yet to add the required visualization arguments.

![t2](../../pluralsight2.imgix.net/guides/5174b088-8494-4656-9326-67de27846c37_t2.html)

The next step is to fill the arguments under the **Values** option. The variables to be used are <span class="jsx-3120878690">`Purpose`</span>, <span class="jsx-3120878690">`Interest_rate`</span>, <span class="jsx-3120878690">`Month`</span>, and <span class="jsx-3120878690">`Loan_disbursed`</span>. Drag these variables into **Values**, which will create a table as shown below.

![t3](../../pluralsight2.imgix.net/guides/b75ff0c9-0e05-4a2d-97e2-180ae913cf75_t3.html)

Two of the variables—<span class="jsx-3120878690">`Purpose`</span> and <span class="jsx-3120878690">`Month`</span>—are categorical variables that contain text labels. Table visualization becomes useful when you have many labels in a category as it is difficult to visualize them otherwise. You can see that total of the variable <span class="jsx-3120878690">`Interest_rate`</span> is displayed. This is because the default aggregation type is the sum. This is incorrect as you are interested in the average interest rate and not the sum of rates.

![t4](../../pluralsight2.imgix.net/guides/0fa31e95-f52b-449e-8e22-3046722d9299_t4.html)

To change this, right-click and select the **Average** option.

![t5](../../pluralsight2.imgix.net/guides/69a9c706-f535-4003-9e04-7231c3eb5209_t5.html)

The correct interest rate value is now displayed as an average.

![t6](../../pluralsight2.imgix.net/guides/979f535c-5383-45ae-8df0-60cb4781fbbe_t6.html)

### Formatting Options

The above table is ready, but it requires formatting. There are several formatting options in PowerBI, and you can explore some of these. Start with the **Column headers** under the **Format** pane.

![t7](../../pluralsight2.imgix.net/guides/72c27b1b-94ff-4bfe-bb84-b21d607164e8_t7.html)

Increase the font size of the table headers. You can do that by setting the **Text size** to 14. This will increase the text size of column headers in the table.

![t8](../../pluralsight2.imgix.net/guides/e3bcd33a-6a3e-4c8a-856d-5d0a6d134596_t8.html)

Next, change the size of the values in the table. You can find this below the **Column headers** option.

![t9](../../pluralsight2.imgix.net/guides/a7fc0dbc-458e-4611-82a0-010fe2de8815_t9.html)

Set the **Text size** of 12. This will increase the font size of values inside the table. Now you can see that the table is properly visible.

![t10](../../pluralsight2.imgix.net/guides/01d3c21c-9a84-4868-845c-d6fbe1fab05d_t10.html)

You can also scroll up and down the table with the hover tool, as shown below.

![t11](../../pluralsight2.imgix.net/guides/716d253d-45f2-4357-a260-cff25d461f89_t11.html)

Matrix Visualization
--------------------

Sometimes table visualization is not sufficient, and you want to add more granularity to your chart. This is where matrix chart visualization becomes helpful. You can find the **Matrix** chart under the **Visualizations** pane.

![m1](../../pluralsight2.imgix.net/guides/469fdd98-0985-4493-ad09-f981b1368c5e_m1.html)

Click on the **Matrix** chart shown above, and it will create a chart in the canvas. Nothing is displayed yet because you have yet to add the required visualization arguments.

![m2](../../pluralsight2.imgix.net/guides/47673237-9ce1-4986-966f-3aa6d3604ef6_m2.html)

Under the **Fields** pane, drag <span class="jsx-3120878690">`Purpose`</span> into **Rows** and <span class="jsx-3120878690">`Date`</span> into the **Columns** pane. For <span class="jsx-3120878690">`Date`</span>, you will see a hierarchy of **Year**, **Quarter**, **Month**, and **Day**. This gives you the flexibility to select the <span class="jsx-3120878690">`Date`</span> hierarchy of your choice. For this guide, keep it at the **Year** level. For **Values**, drag the <span class="jsx-3120878690">`Loan_disbursed`</span> variable.

![m3](../../pluralsight2.imgix.net/guides/38ca59c7-7326-4b0b-9ae5-b46019fba47b_m3.html)

### Formatting Options

The next step is to format the matrix chart. Start with the **Column headers** under the **Format** pane.

![m4](../../pluralsight2.imgix.net/guides/df131e0d-81f2-481d-925c-03578c1b687b_m4.html)

Increase the font size and alignment of the headers. Set **Text size** to 13 and **Alignment** to **Center**. This will increase the text size and alignment of column headers.

![m5](../../pluralsight2.imgix.net/guides/9b26288e-ee6a-410f-ae5a-568f6ba78f03_m5.html)

Next, change the size of the **Row headers**.

![m6](../../pluralsight2.imgix.net/guides/86dacd3d-770e-472c-8635-4c1ae5bf2135_m6.html)

Under **Row headers**, set the **Text size** to 13 and keep the **Alignment** at **Auto**.

![m7](../../pluralsight2.imgix.net/guides/867796bb-2ff1-4414-a053-43bc680be420_m7.html)

You have formatted the column and row headers, but the same also needs to be done for the values. Use the **Values** option to make this change.

![m8](../../pluralsight2.imgix.net/guides/520ba1ac-77cd-4231-a241-d2a5d8b8e8c6_m8.html)

Set the **Text size** to 12.

![m9](../../pluralsight2.imgix.net/guides/b2a29b6f-bde4-4089-9de4-1bb93126b7f9_m9.html)

The output above shows that you have made the formatting changes in the matrix chart.

### Adding More Variables to the Chart

You can also add an additional variable to the chart. Drag and place the <span class="jsx-3120878690">`Interest_rate`</span> variable below <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** pane.

![m10](../../pluralsight2.imgix.net/guides/bb34ca03-1d38-4e68-a7ee-256e5b580ade_m10.html)

The interest rate aggregation needs to be converted to **Average**. You can do this by right-clicking on the variable and selecting **Average**.

![m11](../../pluralsight2.imgix.net/guides/14674dd5-651e-4256-b28b-b3dd47ed1e8f_m11.html)

Completing the above step will create the desired chart. You can see that the total of loans disbursed was $10.8 million in 2011, and the average interest rate charged by the bank was 19.15 percent.

![m12](../../pluralsight2.imgix.net/guides/382bcf7f-9314-41b0-9da4-46d821af59b7_m12.html)

You can also scroll left and right in the matrix chart with by hovering, as shown below.

![m13](../../pluralsight2.imgix.net/guides/484c0ecd-2be0-4f48-ad88-beea19691c44_m13.html)

You can see that the total of loans disbursed was $57.3 million in 2019, and the average interest rate charged by the bank was 15.51 percent.

Conclusion
----------

Multivariate reporting is a common requirement in business intelligence. You will often be asked to present data from different dimensions. If the variables are textual in nature, table and matrix visualization is a good option to explore. This type of visualization is used across industries and is therefore a great skill to have.

In this guide, you learned how to implement table and matrix visualization in Power BI desktop. This will help you in descriptive and diagnostic analytics tasks, in addition to enriching your Power BI visualization capabilities.

To learn more about building powerful visualizations in Power BI Desktop, please refer to the following guide:

[Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

22

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

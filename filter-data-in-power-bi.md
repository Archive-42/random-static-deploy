<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Filter Data in Power BI
=======================

### Deepika Singh

-   Nov 18, 2020
-   8 Min read
-   1,275 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   1,275 Views

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
-   <a href="#module-addingchart" class="menu-link">Adding Chart</a>
-   <a href="#module-filteroperations" class="menu-link">Filter Operations</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

On many occasions, analysts are required to filter the data down to specific areas such as highest sales regions, or most expensive inventory items. This requires filtering down the data to specific points under consideration. Exploratory data analysis, which is used for both descriptive and diagnostics analytics, requires many filter operations on the data. You are also required to filter the visualization dashboards you prepare. This guide will demonstrate how to apply filters in Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The variables to be used in this guide are described below:

1.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

2.  <span class="jsx-3120878690">`Weeknum`</span>: Week number of the year.

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

Adding Chart
------------

To perform filter operations in Power BI, you will need a chart, table or a matrix. You will create a *treemap* chart in this guide. You can locate it in the **Visualizations** pane.

![f1](../../pluralsight2.imgix.net/guides/dd749941-18d4-4a31-9801-bf86535ac67b_f1.html)

Click on the chart shown above, and it will create a chart box in the canvas. Nothing is displayed because you are yet to add the required visualization arguments.

![f2](../../pluralsight2.imgix.net/guides/e625f887-7292-4b4e-b991-b018108110b2_f2.html)

You can resize the chart on the canvas. The next step is to fill the visualization arguments under the **Fields** option as shown below. The two variables to be used are <span class="jsx-3120878690">`Weeknum`</span> and <span class="jsx-3120878690">`Loan_disbursed`</span>. Drag the variable <span class="jsx-3120878690">`Weeknum`</span> into the **Group** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> in the **Values** field.

![f3](../../pluralsight2.imgix.net/guides/e707f6f7-3372-4133-8491-81b928830b78_f3.html)

The output above shows that the treemap visual is created, and the next step is to explore the filter options.

Filter Operations
-----------------

The filter operations are performed with the **Filters** pane. Once the visual is created, the **Filters** pane automatically displays the variables under **Filters on this visual** option.

![f4](../../pluralsight2.imgix.net/guides/658db878-3b59-4560-9215-8675d56442b3_f4.html)

### Filter on Numerical Variable

Numerical and qualitative variables require different filter operations. To begin, click on the <span class="jsx-3120878690">`Loan_disbursed`</span> variable under **Filters on this visual**. Next, you will see many options to filter under **Show items when the value** option.

![f5](../../pluralsight2.imgix.net/guides/086364aa-d529-4956-bb50-169175821af3_f5.html)

The filter operation to perform is to look at a week's numbers when the loan disbursed was less than $5 million. Type the value as shown below.

![f6](../../pluralsight2.imgix.net/guides/8022fe5a-09eb-4a79-83fd-738653ef66a8_f6new.html)

Click on **Apply filter** that gives the command to Power BI to perform this filter operation on the selected visual and display the resulting chart.

![f7](../../pluralsight2.imgix.net/guides/4be043c8-0704-4ecd-8127-1c26c347c38c_f7.html)

You can see from the output that there are five weeks of numbers that have less than $5 million loan disbursal.

To extend the example above, if you want to find the week's numbers when the loan disbursal was between $5 million and $10 million, you can select the **And** option during filter.

![ex1](../../pluralsight2.imgix.net/guides/b7baca3c-d934-44b6-a9f1-a2a19c4840fb_exloan1.html)

This will create the desired output.

![ex2](../../pluralsight2.imgix.net/guides/8e42a1c1-55f1-4b51-85ec-2b46a80bf023_extra2.html)

![ex3](../../pluralsight2.imgix.net/guides/a6ef1e8d-b998-4776-8c51-fd102608d9d7_extra3.html)

### Filter on Categorical Variable

Categorical variables are defined as features in which mathematical operations can’t be performed. In the chart, <span class="jsx-3120878690">`Weeknum`</span> is the categorical feature because even though it is represented as numbers, you cannot add two weeks.

For <span class="jsx-3120878690">`Weeknum`</span> variable, there are several options available under **Filter type**. There are three types of filter operations: **Basic filtering**, **Advanced filtering**, and **Top N**.

![f8](../../pluralsight2.imgix.net/guides/04989b6b-4c46-428d-a502-173373d3ccfc_f8.html)

You will begin with **Basic filtering**. If you want to look at <span class="jsx-3120878690">`Loan_disbursed`</span> in the last few weeks of the year, especially closer to Christmas, you can select the corresponding weeks' numbers.

![f9](../../pluralsight2.imgix.net/guides/1cf05aba-7f26-44b6-ae04-9f2dec588bb0_f9.html)

The other common filter operations performed on categorical features is to filter the categories of the variable against a measure. For example, if you want to use the top ten weeks in terms of <span class="jsx-3120878690">`Loan_disbursed`</span>, you can use the **Top N** filter.

Start by selecting **Top N** as **Filter type**. Under **Show items**, select **Top** and set the value to 10. Finally, drag the <span class="jsx-3120878690">`Loan_disbursed`</span> variable to the **By value** field.

![f10](../../pluralsight2.imgix.net/guides/6037553e-4e2c-41b3-bddb-ce1f3a8db368_f10new.html)

Click on **Apply filter** and the following output is displayed.

![f11](../../pluralsight2.imgix.net/guides/eb0cb9d8-9130-4488-bcbe-18c33c921af2_f11.html)

The above output shows that the week with the highest loan disbursal is week 42, followed by week 41 and so on.

It is easy to select the bottom ten weeks with lowest loan disbursal, which requires only one change to be made from the above selection. Under **Show items**, select **Bottom** and click on **Apply filter**. This will generate the following result.

![f12](../../pluralsight2.imgix.net/guides/a54c3fb3-e1fb-4734-b1c9-0e1b4838fbe9_f12.html)

Conclusion
----------

Exploratory data analysis is an integral part of machine learning and data science. To explore the data from different dimensions, it is required to perform several filter operations. This a common task and is sector agnostic in nature, which means it has applications across industries such as banking and financial services, manufacturing, utilities, ecommerce, retail, etc. This skill will improve your analytics and business intelligence capabilities.

To learn more about building powerful visualization in Power BI desktop, please refer to the following guides:

-   [Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

-   [Table and Matrix Visualization in Power BI](https://app.pluralsight.com/guides/table-and-matrix-visualization-in-power-bi)

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

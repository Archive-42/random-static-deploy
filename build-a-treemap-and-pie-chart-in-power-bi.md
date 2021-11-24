<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Build a Tree Map and Pie Chart in Power BI
==========================================

### Deepika Singh

-   Nov 10, 2020
-   7 Min read
-   1,506 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   1,506 Views

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
-   <a href="#module-piechart" class="menu-link">Pie Chart</a>
-   <a href="#module-treemap" class="menu-link">Tree Map</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In business intelligence, you are often required to create pie charts and tree maps. A pie chart is a circular graph divided into slices to show the composition of the whole data in parts. Each constituent of a pie chart is represented in percentages, and the sum of all the parts is equal to hundred.

Tree map is another technique used for displaying hierarchical data using nested figures, usually rectangles. The space in the visualization chart is divided into rectangles per the size and order of a numerical variable.

This guide will demonstrate how to create a pie chart and a tree map in Power BI desktop.

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

8.  <span class="jsx-3120878690">`Month`</span>: Month in which loan was disbursed.

You will start by loading the data.

Loading Data
------------

Once you open your Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is <span class="jsx-3120878690">`BIdata.xlsx`</span>, and the sheet you will load is the **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Pie Chart
---------

The **Visualization** pane located on the right side of the Power BI desktop contains the list of possible visualization charts. The chart you will use is **Pie chart**.

![pie1](../../pluralsight2.imgix.net/guides/8794ed99-b16b-4a27-b9a3-da06746a9f6d_pie1.html)

Click on the chart shown above, and it will create a chart box in the canvas. Nothing is displayed yet because you are yet to add the required visualization arguments. These are added in the options located under the **Visualizations** pane. Another thing you can do is collapse the **Filters** option in the pane with the arrow **&gt;** sign.

![pie2](../../pluralsight2.imgix.net/guides/59c21e17-2f92-4404-bc15-725970897617_pie2.html)

You will visualize the different categories of the <span class="jsx-3120878690">`Purpose`</span> variable, and its contribution to <span class="jsx-3120878690">`Loan_disbursed`</span>. Start by dragging the <span class="jsx-3120878690">`Loan_disbursed`</span> variable into the **Values** options, and the <span class="jsx-3120878690">`Purpose`</span> variable into the **Legend** field. This will generate the following plot.

![pie3](../../pluralsight2.imgix.net/guides/c4e52d98-a5c7-4649-90ed-02d551ae588e_pie3.html)

Resize the chart as per your convenience. Hovering to a section of the pie chart displays the value of the component and the contribution to the total value. In the output below, the <span class="jsx-3120878690">`Purpose`</span> category displayed is **Personal**. A total of $135.57 million was disbursed for this category, and it contributes 31.05 percent of total loan disbursed by the bank. In the same manner, you can examine the other components of the pie chart.

![pie4](../../pluralsight2.imgix.net/guides/17bacd0e-9164-46f4-be2c-8a3196e5f01a_pie4.html)

### Formatting Pie Chart

There are several options to perform formatting of choice. Click on the **Format** option displayed in the small box below, and you will see different options.

![pie5](../../pluralsight2.imgix.net/guides/137df3af-92ea-4d38-b9e2-4318df71c768_pie5.html)

You will format the color and alignment of the chart title as shown below.

![pie6](../../pluralsight2.imgix.net/guides/c3e2bb24-23df-4056-bc38-6b395c9a1621_pie6.html)

If you want to give border to the chart, you can select the **Border** option.

![pie7](../../pluralsight2.imgix.net/guides/7ecc653a-f900-4d11-92de-3f41d334aa2b_pie7.html)

Tree Map
--------

In Power BI, you can locate the tree map chart option in the **Visualizations** pane.

![tm1](../../pluralsight2.imgix.net/guides/9d0032d2-38dd-46d9-b0bd-9ac2011c2276_tm1.html)

Click on the tree map chart option and the following will be added to the canvas.

![tm2](../../pluralsight2.imgix.net/guides/cced067d-54fc-4962-84ac-4f4fda9a5d3c_tm2.html)

Select the chart and you will have different options to fill. In this guide, you will build a tree map to visualize average loan disbursed across months. The objective is to see if there is any seasonality at month level on loan disbursal. Drag the <span class="jsx-3120878690">`Month`</span> variable into the **Group** field, and <span class="jsx-3120878690">`Loan_disbursed`</span> variable into **Values** field.

![tm3](../../pluralsight2.imgix.net/guides/9669dfb0-92ab-40d3-b25c-1dfe0516e182_tm3.html)

From the above chart, you can infer that October, June and February are the months with highest loan disbursal. However, the plot is giving summary of loan disbursed by default, while what you're looking for in this example is the average loan disbursed per month. To make this change, click on the down arrow next to <span class="jsx-3120878690">`Loan_disbursed`</span> as shown below.

![tm4](../../pluralsight2.imgix.net/guides/5afd3912-5c8d-413a-9641-c302d489fb3e_tm4.html)

The above step will open the option where you can select the **Average** option.

![tm5](../../pluralsight2.imgix.net/guides/cda92885-5ff8-4eda-905d-e5e855c9301f_tm5.html)

Now you can see that the variable in the **Values** field is changed to <span class="jsx-3120878690">`Average of Loan_disbursed`</span>.

![tm6](../../pluralsight2.imgix.net/guides/380d6fd1-ad59-4245-86a5-ad4ba113aff7_tm6.html)

The output above shows some changes from the previous tree map. October has the highest loan disbursal across years, but the highest average loan disbursed is for June. To get the values displayed in the chart, you can go to the format option, and select **Data labels**.

![tm7](../../pluralsight2.imgix.net/guides/e66724fb-191f-4aab-a0da-a6bd20fd85a6_tm7.html)

From the above output, you can infer that the average loan disbursal was highest for month of June, while it was lowest for November.

Conclusion
----------

Both pie charts and tree maps are great tools for storytelling using visualization. When the qualitative variable has fewer labels, or categories, a pie chart is visually appealing. However, if the number of measures is large, such as twelve <span class="jsx-3120878690">`Months`</span>, a tree map is a better alternative. Both of these charts are used across industries including manufacturing, utilities, ecommerce, retail, etc.

These charts are also used in various functions of an organization. For example, the finance function may want to use a pie or tree map chart to understand the cost mix of its operating and fixed expenses.

7

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

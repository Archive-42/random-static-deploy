<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Create a Combination Chart in Power BI: Bar Chart with Line
===========================================================

### Deepika Singh

-   Nov 3, 2020
-   6 Min read
-   8,769 Views

-   Nov 3, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   8,769 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

28

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-lineandstackedchart" class="menu-link">Line and Stacked Chart</a>
-   <a href="#module-chartformatting" class="menu-link">Chart Formatting</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In business intelligence, you are often required to visualize two measures that have different scales, such as income and age. In such cases, a combination chart is useful as it visualizes the multiple variables using a line and a bar chart with different axes. In this guide, you will learn how to create a bar chart with a line plot in Microsoft Power BI Desktop.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3,000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.

2.  <span class="jsx-3120878690">`Income`</span>: Annual Income of the applicant (in US dollars).

3.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.

4.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.

5.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).

6.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.

Start by loading the data.

Loading Data
------------

Once you open Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/e2c3f5b7-55a8-4ab0-b226-a9fd7c80e5b5_b1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/82a3fac8-c4fe-4629-b412-f0115124dcf4_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/c7444f3a-f4b0-4046-a355-88c193beea3b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables in the data.

![b4](../../pluralsight2.imgix.net/guides/3a326164-6e41-4beb-b846-d1856d2242ed_b4.html)

Line and Stacked Chart
----------------------

The **Visualization** pane located on the right side of the Power BI desktop contains the list of possible visualization charts. The chart you will use for creating the combination chart is **Line and stacked column chart**.

![b5](../../pluralsight2.imgix.net/guides/8a9cde76-a074-4233-ab14-d44bc67a1197_b5.html)

Click on the chart shown above, and it will create a chart box in the canvas. Nothing is displayed yet because you are yet to add the required visualization arguments. These are added in the options located under the **Visualizations** pane.

![b6](../../pluralsight2.imgix.net/guides/7e12899b-4bf7-4ada-a001-dd59decc77cf_b6.html)

Visualize the <span class="jsx-3120878690">`Loan_disbursed`</span> variable and the average <span class="jsx-3120878690">`Interest_rate`</span> charged by the bank over the past several years. Start by dragging the <span class="jsx-3120878690">`Loan_disbursed`</span> variable into the **Column values** options and the <span class="jsx-3120878690">`Interest_rate`</span> variable into the **Line values** option. This selection will mean that the loan disbursement and the interest rate will be plotted as column and line charts, respectively.

![b7](../../pluralsight2.imgix.net/guides/8c6ee3ee-0d10-47e9-958c-caffaff9967a_b7.html)

The output above shows that the interest rate is not yet averaged. To correct this, click on the <span class="jsx-3120878690">`Interest_rate`</span> variable, and select **Average**.

![b8](../../pluralsight2.imgix.net/guides/389a22fc-a289-48db-8e18-d933fa96a2e5_b8.html)

Now you have the average interest rate displayed in the chart. You can stretch the chart to your desired size.

![b9](../../pluralsight2.imgix.net/guides/59ac2b14-b9f3-48ee-a290-980cb6fb93d1_b9.html)

The output above shows a single aggregated value for the measures. That is because we have not specified the shared axis. Drag the <span class="jsx-3120878690">`Date`</span> variable into the **Shared axis** field. This is a date variable, so the entire hierarchy is generated.

![b10](../../pluralsight2.imgix.net/guides/c4f931fa-5728-456c-a79b-95afa3b812bb_b10.html)

The output above shows the combination chart with loan disbursed across years displayed as bars, while the average interest charged across years displayed in line.

Chart Formatting
----------------

The chart produced above contains default colors for both bar and line charts. Power BI provides several options to perform formatting. Click on the format option displayed in the small box below, and you will see different options. In the image below, you can see the option **Data colors**. You can use this option to change the color under **Average of Interest\_rate**.

![b11](../../pluralsight2.imgix.net/guides/17950581-68e2-477c-b3ab-27b56f6cc4f7_b11.html)

The chart above does not display data values. In some cases, you will want to add these into your chart. For this, you need to select the option **Data labels** as shown below.

![b12](../../pluralsight2.imgix.net/guides/5e6c9972-5571-4cfe-b0ed-06ba0c25fefd_b12.html)

There are other formatting options that you can explore. Another thing you can do is collapse the **Filters** option in the pane with the arrow **&gt;** sign.

![b13](../../pluralsight2.imgix.net/guides/d52fb279-df6b-4b57-a114-a25794cedaa0_b13new.html)

Completing the above step generates the following output. Now you have a bigger area for understanding your visualization chart.

![b14](../../pluralsight2.imgix.net/guides/ddd9261b-c725-49de-9f8d-7ed2bc6fa2a4_b14newfinalchart.html)

Conclusion
----------

Combination charts are used across industries because of their power to represent multivariate insights. Another advantage of combination charts, such as bar charts with lines, is that you can use them to visualize measures that belong to different scales, like revenue in dollars and units sold. You can use the bar chart with line plot in manufacturing, utilities, ecommerce, retail, and almost every industry.

In this guide, you learned how to build a bar chart with line combination chart in Power BI for fictitious bank data. This will help you perform multivariate analysis and visualization and strengthen your descriptive analytics skill.

28

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

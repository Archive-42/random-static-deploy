<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Implement Clustering in Power BI
================================

### Deepika Singh

-   Nov 16, 2020
-   9 Min read
-   7,936 Views

-   Nov 16, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   7,936 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

35

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-bivariateclustering" class="menu-link">Bivariate Clustering</a>
-   <a href="#module-multivariateclustering" class="menu-link">Multivariate Clustering</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Clustering is an unsupervised machine learning algorithm that looks for patterns in data by dividing it into clusters. These clusters are created such that the points are homogenous within the cluster and heterogenous across clusters. Clustering is commonly used in market segmentation and several areas of marketing analytics.

In this guide, you will learn how to implement clustering in Power BI Desktop. You will implement two types of clustering: bivariate and multivariate.

Data
----

In this guide, you will work with a fictitious data set of bank loan disbursal across years. The data contains 3000 observations and 17 variables. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx). The major variables are described below:

1.  <span class="jsx-3120878690">`Date`</span>: Loan disbursal date.
2.  <span class="jsx-3120878690">`Income`</span>: Annual Income of the applicant (in US dollars).
3.  <span class="jsx-3120878690">`Loan_disbursed`</span>: Loan amount (in US dollars) disbursed by the bank.
4.  <span class="jsx-3120878690">`Age`</span>: The applicant’s age in years.
5.  <span class="jsx-3120878690">`Gender`</span>: Whether the applicant is female (F) or male (M).
6.  <span class="jsx-3120878690">`Interest_rate`</span>: Annual interest rate, in percentage, charged for the disbursed loan.
7.  <span class="jsx-3120878690">`Purpose`</span>: Purpose for which loan was taken.
8.  <span class="jsx-3120878690">`Weeknum`</span>: Week number of the year.
9.  <span class="jsx-3120878690">`Outstanding_debt`</span>: Outstanding debt (in US dollars) of the applicant prior to loan disbursal.

Start by loading the data.

Loading Data
------------

Once you open Power BI Desktop, the following output is displayed.

![b1](../../pluralsight2.imgix.net/guides/16c4cce1-5d1e-4c00-a4c0-34ee7dd58ccb_b1.html)

Click on **Get data** and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the file, and you can save the dashboard. It is named **PowerBI Visualization**. The **Fields** pane contains the variables of the data.

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Bivariate Clustering
--------------------

Bivariate clustering refers to the technique of finding clusters in the data when you have two quantitative variables. The two variables to be used for clustering are <span class="jsx-3120878690">`Income`</span> and <span class="jsx-3120878690">`Loan_disbursed`</span>. To implement bivariate clustering, a scatter chart is a powerful visualization plot. You can locate it in the **Visualizations** pane.

![C1](../../pluralsight2.imgix.net/guides/a7987813-674d-4b4e-bb45-ce6e2f2f5c4a_c1.html)

Click on the chart shown above, and it will create a chart box on the canvas. Nothing is displayed yet because you are yet to add the required visualization arguments. These are added in the options located under the **Visualizations** pane.

![C2](../../pluralsight2.imgix.net/guides/076912d1-4f54-46d5-81fb-d19e8ec87639_c2.html)

You can resize the chart on the canvas. Another thing you can do is collapse the **Filters** option in the pane with the arrow **&gt;** sign.

![C3](../../pluralsight2.imgix.net/guides/c35b8ac7-ef14-47f8-849b-f6e79bc91133_c3.html)

The next step is to fill the visualization arguments under the **Fields** option as shown below. Drag the variable <span class="jsx-3120878690">`Income`</span> into the **X Axis** field and <span class="jsx-3120878690">`Loan_disbursed`</span> into the **Y Axis** field. You also need to provide a variable in the **Details** field for displaying the scatter plot against that variable. Drag the <span class="jsx-3120878690">`Weeknum`</span> variable into the **Details** field.

![C9](../../pluralsight2.imgix.net/guides/dadf6073-3dde-4994-bb38-3f3d22665d35_c9splot.html)

The scatter chart is created and the next step is to create clusters. Right-click on the three dots **…** shown below, and you will have the option to **Automatically find clusters**.

![C10](../../pluralsight2.imgix.net/guides/d025c716-8ee2-48aa-8d8f-745e16f7f1f2_c10.html)

The step above will create an option to select the number of clusters. You also have the option of keeping it automatic, but in this case, you will set the number of clusters to four.

![C11](../../pluralsight2.imgix.net/guides/9a778c14-5d0b-4d4a-8d28-07ede9b4e9cc_c11.html)

Click on **OK**, and Power BI will work in the background to create and add the four clusters to the bivariate scatter chart. You can see the distinction of the cluster points through the different cluster colors.

![C12](../../pluralsight2.imgix.net/guides/1c54e903-e92f-48e4-b864-84d8435564cb_c12.html)

In the output above, you can see that Power BI has created a new variable, <span class="jsx-3120878690">`Weeknum (clusters)`</span>, and placed it in the **Legend** field. This gives you the flexibility to use this new variable in the same manner as any other variable in the original dataset.

Multivariate Clustering
-----------------------

In the above section, you implemented clustering on two variables. Quite often in business intelligence and analytics, you will want to consider multiple variables for clustering. In such cases, you can extend the above analysis and include multiple variables. To do this, start by resizing the scatter chart to make space for multivariate clustering, and click on **Table** under the **Visualizations** pane.

![C13](../../pluralsight2.imgix.net/guides/71743df7-7e98-411a-8bc2-d3e054a1ea8f_c13.html)

Click on the **Table** chart shown above, and it will create a table on the canvas. Nothing is displayed yet because you are yet to add the required visualization arguments.

![C14](../../pluralsight2.imgix.net/guides/8fbd1e43-ad7b-4ff2-9b09-528aca865242_c14.html)

Under the **Values** field, as shown below, drag the variables <span class="jsx-3120878690">`Weeknum`</span>, <span class="jsx-3120878690">`Income`</span>, <span class="jsx-3120878690">`Loan_disbursed`</span>, <span class="jsx-3120878690">`Interest_rate`</span>, <span class="jsx-3120878690">`Age`</span>, and <span class="jsx-3120878690">`Outstanding_debt`</span>. This will generate the following table.

![C177](../../pluralsight2.imgix.net/guides/a587e014-43f9-4eda-9a93-50655b35fec7_c177.html)

The next step is to create clusters. To do this, right-click on the three dots as before, and select **Automatically find clusters**.

![C178](../../pluralsight2.imgix.net/guides/c06c3620-dd0f-46b4-a11d-1c567e99a2dc_c178.html)

In the option pane that will be generated, give the name **Multivariate Clusters**. Set the **Number of clusters** value to **Auto**.

![C179](../../pluralsight2.imgix.net/guides/8980d752-0c43-41a6-8e63-66703a02e863_c179.html)

Clicking **OK** will create a <span class="jsx-3120878690">`Multivariate Clusters`</span> variable and add it to the table. It will also add it to the **Values** field.

![C180](../../pluralsight2.imgix.net/guides/0ef71cfd-8681-4bbc-9ce0-ecde42496689_c180.html)

You can analyze the clusters better in the same manner as any other variable of the original dataset. For example, you can click on the **Table** chart option, which will create a table in the canvas.

![C181](../../pluralsight2.imgix.net/guides/372f401f-1907-4ceb-85bb-6771f5c9df5b_c181.html)

Click on the chart, and under **Values**, drag the <span class="jsx-3120878690">`Multivariate Clusters`</span> variable twice.

![C182](../../pluralsight2.imgix.net/guides/e8472c6a-8396-49d9-a6c8-9a5591485fe1_c182.html)

Right-click on the second <span class="jsx-3120878690">`Multivariate Clusters`</span> variable and select **Count**.

![C183](../../pluralsight2.imgix.net/guides/795672a1-3fb1-49a4-8f7f-bd9a0f97020d_c183.html)

Completing the above step will generate the following output.

![C184](../../pluralsight2.imgix.net/guides/adf0533c-b789-4d56-b7aa-0a266c301d4d_c184.html)

The output above shows that three clusters were created. **Cluster1** has 905 records, while **Cluster2** and **Cluster3** have 72 and 2023 observations, respectively.

Conclusion
----------

Clustering is an unsupervised machine learning technique with several application areas. A financial services company might want to create customer segments using clustering to enable them serve and target these customers better. In this guide, we looked at one such example, where clustering was applied on bank data for disbursing loans. Clustering is also used for predictive modelling, where you can create clusters and then predict the target variable. Marketing budgets are allocated in many organizations based on statistical segmentation, referred to as clustering.

In this guide, you learned how to implement clustering in Power BI Desktop. This is a great skill set to add because clustering is a sector-agnostic discipline and is used across industries such as manufacturing, utilities, ecommerce, retail, and almost every other industry.

To learn more about building powerful visualization in Power BI Desktop, please refer to the following guide:

[Create a Combination Chart in Power BI: Bar Chart with Line](https://app.pluralsight.com/guides/create-a-combination-chart-in-power-bi:-bar-chart-with-line)

35

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

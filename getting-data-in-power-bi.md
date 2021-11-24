<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Getting Data in Power BI
========================

### Deepika Singh

-   Nov 24, 2020
-   6 Min read
-   2,866 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   2,866 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Microsoft Power BI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

45

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-loadexceldatatopowerbi" class="menu-link">Load Excel Data to Power BI</a>
-   <a href="#module-loadtextorcsvdatatopowerbi" class="menu-link">Load Text or CSV Data to Power BI</a>
-   <a href="#module-getdatafromtheweb" class="menu-link">Get Data from the Web</a>
-   <a href="#module-otheroptionstoloaddata" class="menu-link">Other Options to Load Data</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Power BI supports several visualization charts. However, before building these visualizations, you will be required to get the data. Organizations have data stored in different formats and in different places. This guide will demonstrate how to get and load data in Power BI Desktop from different sources.

Load Excel Data to Power BI
---------------------------

To start, open the Power BI Desktop and save it as **PowerBI Visualization**.

![gd1](../../pluralsight2.imgix.net/guides/07560e08-9b83-4311-81a3-5cedb701aa7e_gd1.html)

Click on **Get data** option and select **Excel** from the options.

![b2](../../pluralsight2.imgix.net/guides/044933be-9a35-4730-8384-d3c1eb1850cb_b2.html)

Browse to the location of the file and select it. The name of the file is **BIdata.xlsx**, and the sheet you will load is **BIData** sheet. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**.

![b3](../../pluralsight2.imgix.net/guides/0b295b3c-a9d4-4d8b-aea7-d84d9c14f75b_b3.html)

You have loaded the Excel file in the canvas, and the **Fields** pane contains the variables of the data. This is a fictitious data set of bank loan disbursal across years. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/BIData.xlsx).

![b4](../../pluralsight2.imgix.net/guides/7e56fe50-9d78-42b5-b82e-7ee3cdf26a86_b4.html)

Load Text or CSV Data to Power BI
---------------------------------

Comma separated or CSV files are a common file format in data science and machine learning. You can import this file type by clicking on **Get data** option and select **Text/CSV** from the options.

![gd5](../../pluralsight2.imgix.net/guides/a986942f-43f2-47f4-81fe-2ca3a96138ec_gd5.html)

Browse to the location of the file and select it. The preview of the data is shown, and once you are satisfied that you are loading the right file, click **Load**. The file name is **funnelchartdata**, which is a fictitious sales conversion data. You can download the dataset [here](https://github.com/decisionsciences300/Data/blob/main/funnelchartdata.csv).

![gd6](../../pluralsight2.imgix.net/guides/8a6d54b9-ab35-4acc-9e9b-726545b7bfe3_gd6.html)

You have loaded the file, and the data is now available in the canvas.

![gd7](../../pluralsight2.imgix.net/guides/21bfed48-9b55-4fd0-bf74-ff5bd5e9b773_gd7.html)

Get Data from the Web
---------------------

Sometimes you are required to load data directly from the web. Power BI provides the option to get data from the web. To begin, click on **Get data** option and select **Web** from the options.

![gd8](../../pluralsight2.imgix.net/guides/2736343b-aa11-4f1e-95ed-b459911ea315_gd8.html)

This will open a tab where you can enter the web link as shown below. The data comes from Wikipedia, and you can visit the link [here](https://en.wikipedia.org/wiki/COVID-19_pandemic_by_country_and_territory#Total_cases_and_death_rates_by_country).

![gd20](../../pluralsight2.imgix.net/guides/0faefaac-a4a2-47e7-be19-dbc53022880b_gd20.html)

Click **OK** to open a new window.

![gd21](../../pluralsight2.imgix.net/guides/9b8827f4-da79-46a0-9916-f8b10538376b_gd21.html)

Click **Connect** to open a page that previews the data. Click **Load** to load the data.

![gd22](../../pluralsight2.imgix.net/guides/8f542061-4ba1-4929-bdb7-89bcbe5f1931_gd22.html)

You have loaded the web file in the canvas, and the **Fields** pane contains the variables of the data.

![gd23](../../pluralsight2.imgix.net/guides/26692619-c437-4313-a546-f18263eb37a0_gd23.html)

Other Options to Load Data
--------------------------

Apart from the common options to get data in Power BI Desktop, there are a variety of other options also available in Power BI. To view these options, click on **Get data** option and select **More** from the options.

![gd12](../../pluralsight2.imgix.net/guides/a7df2465-0cdc-4e3c-b502-e86ed173d410_gd12.html)

A new window is opened, where on the left side it shows a category of all available data sources.

![gd13](../../pluralsight2.imgix.net/guides/20d74242-80ba-4923-a8eb-21b1df024e78_gd13.html)

If the data you want to load is in a database, select the **Database** option, and then you can import data from the relevant database.

![gd14](../../pluralsight2.imgix.net/guides/d775fc0d-2a61-433e-8473-46fb52fae591_gd14.html)

Many organizations are moving their data to cloud providers like Azure. You can click on **Azure** and **Connect** to the relevant storage path to get the required data.

![gd15](../../pluralsight2.imgix.net/guides/5e27004d-ae56-49af-a910-e7ba0a8b82ea_gd15.html)

You also have a lot of other options to load data from online services. You can have a look at these options with the **Online Services** option.

![gd16](../../pluralsight2.imgix.net/guides/d2c82535-3474-49d7-b87e-2ffbee971a19_gd16.html)

Conclusion
----------

Organizations are storing data in different avenues. As analytics and business intelligence professionals, you will be required to possess the skill to acquire data from different sources, and then translate it into dashboards and reports. Adding this knowledge into your tool kit will improve your business intelligence and reporting capabilities.

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

45

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

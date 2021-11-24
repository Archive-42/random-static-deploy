<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/a90da03f-c20c-41af-a9a3-c39cb62d7065.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Manipulating Data in Tableau Desktop
====================================

### Pavneet Singh

-   Nov 18, 2020
-   9 Min read
-   2,263 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   2,263 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Tableau</span>

Introduction

14

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-datapreviewpane" class="menu-link">Data Preview Pane</a>
-   <a href="#module-datainterpreter" class="menu-link">Data Interpreter</a>
-   <a href="#module-datamanipulation" class="menu-link">Data Manipulation</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Quite often, data that needs to be visualized is not in the correct format, shape, or type. To overcome such challenges, Tableau has a feature-rich data pane with multiple inbuilt options related to data manipulation, such as changing data types, splitting strings, pivoting or un-pivoting data, creating custom calculations, and so on. In this guide, you will learn some of the various features and functionalities provided by Tableau to manipulate your dataset and make it fit for visualization.

Data Preview Pane
-----------------

Once you have connected to your data source in Tableau and have chosen the appropriate data table, a set of sample rows from the chosen data table is shown in the **data preview pane** for initial exploration of the data.

![Data Preview Pane](../../pluralsight2.imgix.net/guides/ba5e793e-39fa-4bf4-befd-1c4dbb0aae27_Picture1.html)

For each column, the field name is displayed along with its inferred data type through a symbol on the top. Below the data type symbol, the name of the table to which it belongs is mentioned, which is quite useful for reference in case multiple tables are combined through joins in the data pane. There is a colored line at the top of each column that represents the data connection to which the table belongs. This is useful for reference in case cross-database joins are used.

![Column Header](../../pluralsight2.imgix.net/guides/acca44af-850c-4e17-9de2-040a8439fb53_Picture2.html)

You can also switch to the **manage metadata view** to get a list of the data field names as shown below. This vertical listing of columns is quite easy to use to rename them or hide multiple columns in one go.

![Manage Metadata](../../pluralsight2.imgix.net/guides/ce4cf24c-4739-4440-b9f8-38f39152c6b6_Picture3.html)

Data Interpreter
----------------

If your data source is Excel, CSV, PDF, or Google Sheets and you are facing data-related challenges like stacked headers, additional information in the adjoining header or footer, sub-tables etc., Tableau has a really useful in-built utility to do the cleaning and identification of the tables in your dataset.

For example, consider the Excel data sheet shown below.

![messy excel](../../pluralsight2.imgix.net/guides/526202cf-74be-4ea1-a3fc-b0b0528cedaf_Picture4.html)

Once you connect it in Tableau, the data preview shows up with the wrong column headers and incorrect interpretation of the data table, rendering it useless for visualization.

![data preview messy](../../pluralsight2.imgix.net/guides/e3f2832b-469a-48ba-858e-3dcff0a4dd08_Picture5.html)

After enabling the data interpreter through the checkbox, we get the following result.

![cleaned ](../../pluralsight2.imgix.net/guides/493085f4-feb9-454c-8cdf-b9c8001d2b6e_Picture6.html)

The data interpreter identified the data table, identified the correct headers along with their data types, unmerged the column values, and ignored the additional information.

Data Manipulation
-----------------

Multiple data manipulation operations can be carried out to make data fit for visualization in the **data preview pane** or the **data pane** in the worksheet view. The data manipulation options vary by the data type of the columns. For example, the **split** option only comes up for string datatype columns, the **create bins** option only comes up for numeric datatype columns, etc.

> **Note:** All data manipulation is done at the metadata level, which is limited to Tableau only. The changes are not reflected in the original data file or data source.

### Change Data Type

If Tableau has inferred a wrong data type for a column, the data type can be changed by clicking on the data type symbol in the column header, as shown below.

![data type change](../../pluralsight2.imgix.net/guides/5bf08d5b-2ef7-4d60-9ddf-570434a51647_Picture7.html)

### Hide

Right-click on the column header and select **hide** to hide an unwanted column from the data view. It is best practice to hide unwanted columns before extract creation in order to reduce the data extract size and reduce latency in load time. Unwanted columns can also be hidden just to prevent any unwanted clutter in the data pane.

> **Note:** Multiple columns can be selected by holding the control key and left-clicking on the column header. If multiple columns are to be selected in a continuous sequence, hold the shift key and left-click on the first and last column of the sequence. Next, right-click and choose **hide** to hide them collectively.

### Aliases

If certain string data values are to be aliased for visuals to make them more intuitive, right-click on the header or the small downward arrow of the column in which data values are to be aliases and choose **alias**.

![alias](../../pluralsight2.imgix.net/guides/e155866f-015f-4892-b72b-29146f17a99b_Picture8.html)

An **edit alias** window pops up showing the distinct values in the Member column, as shown above. You can add an alias for each member to the corresponding values column.

### Group

Groups can be created in Tableau for string datatype column values in order to assign the same alias for multiple values or reduce the granularity of values for a column. To create a group for a column, right click on its header and choose **create group**. Next, a **create group** window pops up in which you can select multiple values. Then click on **Group**. This results in grouping those values with a common group name, which can be edited. Once you've finished creating the groups, click **ok**.

![group](../../pluralsight2.imgix.net/guides/58f4204b-df7d-475f-a502-b73a8e1e11a5_Picture9.html)

As shown above, a new column gets created with the datatype **group**. This new column with grouped values can be used in the visualization instead of the original column.

### Split

Columns consisting of string values can be easily split into multiple columns using the **split** or **custom split** options. For example, the name field can be split into two columns consisting of the first name and last name using split. Split automatically determines the space delimiter in the string value and splits the strings accordingly.

![split](../../pluralsight2.imgix.net/guides/983d1a91-4d3b-480c-9813-fc6c43af5da2_Picture10.html)

If only a certain part of the string is required after splitting or a custom delimiter has been used in the string value, the **custom split** option can be used. For example, if the last part of the Order ID is required, right-click on the column header and select **custom split**. A custom split window pops up in which you can select the separator or delimiter and how many strings to split off from the beginning, end, or all positions.

![custom split](../../pluralsight2.imgix.net/guides/8d9b3674-e8aa-435d-80d6-4b769f2210a3_Picture11.html)

### Bins

The values of a numeric column can be grouped into bins. Bins are used to convert continuous numeric values into discrete sequences of range values. The bins are then used to visualize the trends in histograms. For example, consider the sales column, which can be converted into bins for plotting a histogram.

![Bins](../../pluralsight2.imgix.net/guides/06947f0e-c3e7-4b7f-84fe-a11c64df0d41_Picture12.html)

### Calculated Fields

Calculated fields can be used if you need to create customized logic for manipulating certain data types or data values. There are a large-range of functions available in Tableau that can used individually or collectively for data manipulation. For example, if you want the date format to include the weekday and month in separate columns, a calculated field will need to be created using the formula shown below.

![calculated field](../../pluralsight2.imgix.net/guides/d6557896-91d7-4fb9-bb26-cdcb8a1e3fec_Picture13.html)

### Pivot

Consider the pivoted dataset shown below. Since the dimension values for the year are the column headers, a chart based on years cannot be plotted. In order to convert this dataset from the pivoted, or wide, shape to the narrow shape, which is preferred for visualization, use the pivot option, as shown below.

![pivot](../../pluralsight2.imgix.net/guides/5e146efa-c9a3-4c44-98dc-921737a5e439_Picture14.html)

Conclusion
----------

In this guide, you learned about the essential features and functionality provided by Tableau to deal with challenges related to your dataset and its manipulation to make it fit for building visualizations. To learn more about data manipulation in Tableau, check out these amazing courses:

-   [Collecting and Preparing Data for Tableau Desktop](https://pluralsight.pxf.io/ZodJR)
-   [Manipulating Data in Tableau Desktop](https://pluralsight.pxf.io/Xgxo5)

To get more familiar with data literacy concepts, refer to [this guide](https://pluralsight.pxf.io/Qo5Xa).

14

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/a90da03f-c20c-41af-a9a3-c39cb62d7065.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Build Filled Maps in Tableau
============================

### Pavneet Singh

-   Oct 8, 2020
-   5 Min read
-   1,679 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,679 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Tableau</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-assigninggeographicalroles" class="menu-link">Assigning Geographical Roles</a>
-   <a href="#module-creatingafilledmap" class="menu-link">Creating a Filled Map</a>
-   <a href="#module-troubleshootingtips" class="menu-link">Troubleshooting Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Tableau has extensive mapping capabilities with multiple configurations to represent your data geographically. *Filled map* is a chart type in which different geographic territories can be represented on the map with areas colored based on a measure or dimension. In this guide, you will learn how to create filled maps in Tableau along with the relevant use cases.

Assigning Geographical Roles
----------------------------

To plot a geographical dimension like country or state on a map, the text field in the dataset must be assigned a corresponding geographical role. Right-click the dimension in the side bar and choose a geographical role, as shown below.

![Choose Geographical Role](../../pluralsight2.imgix.net/guides/e1c9668d-583a-45ec-a2ff-502c656a788d_1.html)

The **abc** symbol beside the dimension is changed to a globe once the geographical role is assigned, as shown below. The corresponding latitude and longitude coordinates are generated automatically by Tableau's built-in map server once the geographical role is assigned to the selected field.

![Geo Role Assigning](../../pluralsight2.imgix.net/guides/7a5b540e-f3ed-40cb-b981-4c124ee820e9_2.html)

> **Note:** This is an essential prerequisite step. Without assigning the correct geographical role and generated geo-coordinates, Tableau cannot plot the field on a map.

Creating a Filled Map
---------------------

There are several ways to create filled maps.

### Using the Marks Card

When you double-click on the dimension with an assigned geographical role, the map is plotted with the dimension on the details card, and the latitude and longitude pills are placed on the rows and columns.

![map](../../pluralsight2.imgix.net/guides/9c04ed9d-8c4f-434b-a087-e6e241c9591f_3.html)

Next, click on the dropdown menu in the marks card and choose the map option, as shown below.

![marks card](../../pluralsight2.imgix.net/guides/205bfe97-8719-45ae-82dc-2da124f0a79d_4.html)

This results in a filled map, as shown below.

![Filled Map](../../pluralsight2.imgix.net/guides/2d8d92c5-de65-4b10-b38c-d1b593a3270c_5.html)

To display the state names and any other measures on the map, drag and drop them onto the labels marks card. In order to leverage the color property for displaying insights on the map, drag and drop a measure or dimension onto the color marks card.

![Filled Map Final](../../pluralsight2.imgix.net/guides/23d031a5-c730-488d-bd3d-aa39b035ab4b_6.html)

As shown above, the filled map intuitively reflects the sales across various US states geographically by leveraging the color attribute in the visual.

### Using the Show Me Menu

Another technique for creating a filled map is to click on the dimension with an assigned geographical role to select it and then click on the filled map icon in the Show Me menu, as shown below.

![Show Me Menu](../../pluralsight2.imgix.net/guides/4000948f-a79e-47d6-a663-41ba19f5cd1b_7.html)

This results in the filled map, as shown below.

![Filled Map](../../pluralsight2.imgix.net/guides/984efaec-9d37-4a2e-90cf-07e3f41be14f_8.html)

Now, drag and drop the **region** dimension onto the **color** marks card and **state** onto the **labels** mark card. The resulting filled map is as shown below.

![Filled Map](../../pluralsight2.imgix.net/guides/54144811-b863-4b79-a744-1df707fb0341_9.html)

Such filled maps can be used to show dimension-based geographical distributions and enable the user to use the map to filter or highlight the data in other visuals based on the dimension.

Troubleshooting Tips
--------------------

-   If a blank map comes up with an unknown locations indicator, select the appropriate country name or match the state names manually using the **Edit Locations** dialogue box, as shown below.

![Edit Locations](../../pluralsight2.imgix.net/guides/0138b4ab-cc72-4673-8337-9d6c41935f04_10.html)

-   If the country name is present in the dataset, that dimension can be selected by clicking the **from field** radio button.

![From field](../../pluralsight2.imgix.net/guides/8c1b47b0-fef4-4c32-987e-1a7f71f39d31_12.html)

-   Otherwise, choose the correct country name for the states from the dropdown manually by clicking on the **fixed** radio button.

![Edit Locations](../../pluralsight2.imgix.net/guides/9fb7450c-fdce-46c8-8c97-96b99c37d723_11.html)

-   If any of the states are unrecognized, which could be due to spelling differences in the dataset, the state names in the data can be matched with the standardized state names in the Tableau map server backend by using the matching location column, as shown below.

![Matching Locations](../../pluralsight2.imgix.net/guides/8afa5b39-fa81-40d1-a4cb-43ec47f6632d_13.html)

> **Note:** The same steps can be followed if you face issues using fields with another geographical role, such as ZIP code or city, but remember that even though many geographical roles are international, [some are limited to the U.S. only](https://help.tableau.com/current/pro/desktop/en-us/maps_geographicroles.htm).

Conclusion
----------

This guide covered how to create a filled map in Tableau and discussed use cases and troubleshooting tips. Apart from filled maps, symbol maps can also be created in Tableau with in-built or custom shapes as well. To learn more about mapping capabilities in Tableau, [check out this amazing course](https://pluralsight.pxf.io/4Qkqo). To learn about zooming and panning in Tableau maps, [refer to this guide](https://pluralsight.pxf.io/NdvYb).

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/a90da03f-c20c-41af-a9a3-c39cb62d7065.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Tableau Essentials: Build Symbol Maps
=====================================

### Pavneet Singh

-   Oct 21, 2020
-   8 Min read
-   1,284 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   1,284 Views

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
-   <a href="#module-assigninggeographicroles" class="menu-link">Assigning Geographic Roles</a>
-   <a href="#module-creatingasymbolmap" class="menu-link">Creating a Symbol Map</a>
-   <a href="#module-troubleshootingtips" class="menu-link">Troubleshooting Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Tableau has extensive mapping capabilities with multiple configurations to represent data geographically. A *symbol map* is a chart type in which quantitative values can be represented for various locations on a map utilizing built-in or custom symbols. To make the visual intuitive for the user, the size, color, and shape properties of the symbols can be leveraged. In this guide, you will learn how to create symbol maps in Tableau along with some relevant use cases.

Assigning Geographic Roles
--------------------------

To plot a geographic dimension like country or state on a map, the text field in the dataset must be assigned a corresponding geographic role. Right-click the dimension in the sidebar and choose a geographic role, as shown below. ![Choose Geographical Role](../../pluralsight2.imgix.net/guides/f8bae45e-f994-46af-bbd5-554cd64c5389_1.html)

The **abc** symbol beside the dimension is changed to a globe once the geographic role is assigned, as shown below. The corresponding latitude and longitude coordinates are generated automatically by Tableau's built-in map server once the geographic role is assigned to the selected field.

![Geo Role Assigning](../../pluralsight2.imgix.net/guides/7a5b540e-f3ed-40cb-b981-4c124ee820e9_2.html)

> **Note:** This is an essential prerequisite step. Without the correct geographic role and generated geo-coordinates, Tableau cannot plot the field on a map.

Creating a Symbol Map
---------------------

There are a couple of ways to create symbol maps.

### Using the Marks Card

When you double-click on a dimension with an assigned geographical role, the map is plotted with the dimension on the details card, and the latitude and longitude pills are placed on the rows and columns. As shown below, each state in the dataset is represented by a circle symbol on the map by default. ![map](../../pluralsight2.imgix.net/guides/9c04ed9d-8c4f-434b-a087-e6e241c9591f_3.html)

Next, in order to leverage the size attribute for the visualization, drag and drop the sales pill onto the size marks card and increase the size as shown below.

![Symbol Map Size](../../pluralsight2.imgix.net/guides/70967baa-c649-4fea-ae3f-8d757130f44d_2.html)

The color attribute for the symbols can be leveraged using the color marks card. Drag and drop the profit pill onto the color marks card.

![Symbol Color](../../pluralsight2.imgix.net/guides/77d62ff8-9253-427a-9a8e-326a615cd5eb_3.html)

Three insights are reflected in this symbol map:

-   Geographic locations of the various states
-   Sales in comparison to other states, which are represented by the size of the circular symbol
-   Profit in comparison to other states, which is represented by the color of the circular symbol

It can be observed that Texas has a substantial number of sales, but they've resulted in an overall loss for the state.

#### Changing the Symbol Shape

You can also change the shape of the symbol to either a built-in shape or your own custom shape.

In order to use a different shape, click on the drop-down menu in marks and choose shape as shown below.

![shapes](../../pluralsight2.imgix.net/guides/1c2d6c6a-6ba7-4ba0-9043-8d6dc1c68661_4.html)

Next, click on the shape marks card to select a shape from the default ones as desired. The selected shape gets reflected immediately on the map as shown below.

![change shape](../../pluralsight2.imgix.net/guides/b0e09163-5de5-460c-90c4-106472f57cf8_5.html)

In order to add your own custom symbols, copy the image files into a new or existing folder in the shapes directory of your local Tableau repository, which can be found at the following path in Windows OS: <span class="jsx-3120878690">`C:\Users\<Your                                       Username>\Documents\My Tableau                                       Repository\Shapes`</span>. Next, click on the **shape marks card** followed by **more shapes** and then on **reload shapes** as shown below.

![custom shape](../../pluralsight2.imgix.net/guides/83aecd41-69d0-4eec-a3d0-282ea64f003a_6.html)

Since the custom shape was added in a folder named "My Custom Shape", it gets reflected in the dropdown menu and you can choose shapes from within that folder for your symbol map.

![select custom shape](../../pluralsight2.imgix.net/guides/57cfa747-07eb-44cc-8b41-ec08a3660c68_7.html)

Upon clicking **OK**, the default circular symbol gets replaced by the chosen custom shape in the symbol map.

![custom symbol map](../../pluralsight2.imgix.net/guides/087433c5-7a0b-463c-b24b-6183f741c7a3_8.html)

### Using the Show Me Menu

Another technique for creating a symbol map is to click on a dimension with an assigned geographic role, hold the control key, click on a measure, and release the control key. Next, click on the symbol map icon in the **Show Me** menu, as shown below.

![symbol map show me](../../pluralsight2.imgix.net/guides/5a4ea061-4ffe-4025-87ca-319b8ae493d7_9.html)

This results in the symbol map shown below with the chosen measure reflected per the symbol size in the map.

![show me symbol map](../../pluralsight2.imgix.net/guides/dd3ad47a-b7e8-40c7-ae47-f9b1eb57052f_10.html)

#### Using Multiple Symbols Based on a Dimension

In a symbol map, the shape marks card can also be used to allocate different shapes based on a chosen dimension or measure.

In order to reflect the state shape by region, select the shape option from the drop-down menu in the marks card. Next, drag and drop the region dimension onto the shapes marks card.

![region symbol](../../pluralsight2.imgix.net/guides/feb3500e-21b1-41a4-90bf-ab245fa9f60c_11.html)

This symbol map intuitively reflects which state had the most sales in either of the regions.

Troubleshooting Tips
--------------------

-   If a blank map comes up with an unknown location indicator, select the appropriate country name or match the state names manually using the **Edit Locations** dialogue box, as shown below.

![Edit Locations](../../pluralsight2.imgix.net/guides/0138b4ab-cc72-4673-8337-9d6c41935f04_10.html)

If the country name is present in the dataset, that dimension can be selected by clicking the **from field** radio button.

![From field](../../pluralsight2.imgix.net/guides/8c1b47b0-fef4-4c32-987e-1a7f71f39d31_12.html)

Otherwise, choose the correct country name for the states from the drop-down manually by clicking on the **fixed** radio button.

![Edit Locations](../../pluralsight2.imgix.net/guides/9fb7450c-fdce-46c8-8c97-96b99c37d723_11.html)

If any of the states are unrecognized, which could be due to spelling differences in the dataset, the state names in the data can be matched with the standardized state names in the Tableau map server backend by using the matching location column, as shown below.

![Matching Locations](../../pluralsight2.imgix.net/guides/8afa5b39-fa81-40d1-a4cb-43ec47f6632d_13.html)

> **Note:** The same steps can be followed if you face issues using fields with another geographic role, such as ZIP code or city, but remember that even though many geographic roles are international, [some are limited to the U.S. only](https://help.tableau.com/current/pro/desktop/en-us/maps_geographicroles.htm).

Conclusion
----------

This guide covered how to create a symbol map in Tableau with default and custom shapes, different use cases, and troubleshooting tips. Apart from symbol maps, filled maps can also be created in Tableau and are used to represent different geographic territories on a map with areas colored based on a measure or dimension.

To learn more about mapping capabilities in Tableau, [check out this amazing course](https://pluralsight.pxf.io/4Qkqo).

And here are a few other guides that can help you learn more about Tableau maps:

-   [Build Filled Maps in Tableau](https://pluralsight.pxf.io/9NLrQ)
-   [Zooming and Panning in Tableau Maps](https://pluralsight.pxf.io/NdvYb)
-   [Using Selection Methods in Tableau Maps](https://pluralsight.pxf.io/rVaBB)

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Make D3.js Charts Responsive in React Apps
==========================================

### Benney Au

-   Oct 8, 2020
-   6 Min read
-   3,419 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   3,419 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-theviewboxsvgproperty" class="menu-link">The ViewBox SVG Property</a>
-   <a href="#module-updatebarcharttouseviewbox" class="menu-link">Update Bar Chart to Use ViewBox</a>
-   <a href="#module-testtheresponsiveness" class="menu-link">Test the Responsiveness</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Responsive web design is an approach that suggests that design and development should cater to the user experience of accessing a webpage on different screen sizes and orientations. Normally, you would achieve this with [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). However, when using D3.js with SVG, there are some additional considerations.

In this guide, you will learn how to use ViewBox to scale SVG to be responsive to different screen layouts. This guide builds on a previous guide, [Using D3.js Inside a React App](https://app.pluralsight.com/guides/using-d3.js-inside-a-react-app), that covered how to set up a simple bar chart in D3.js using static in-memory data. Here you will extend that bar chart to change its size and layout based on screen size.

The ViewBox SVG Property
------------------------

In the previous guide, [Using D3.js Inside a React App](https://app.pluralsight.com/guides/using-d3.js-inside-a-react-app), you manually defined the height and width and of the bar chart to 500 pixels. When you resize the screen, the size of the chart doesn't change.

SVG was designed to render images in a scalable, resizable way. To achieve this, it offers a property called [ViewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) to facilitate defining "user space," and all child elements are positioned relative inside this <span class="jsx-3120878690">`ViewBox`</span>. The <span class="jsx-3120878690">`ViewBox`</span> property has four properties, but the last two are the most relevant for charts—width and height. When you specify the <span class="jsx-3120878690">`ViewBox`</span> it causes the SVG element to fill the size of its parent.

Update Bar Chart to Use ViewBox
-------------------------------

There are very few changes required to make your <span class="jsx-3120878690">`<BarChart />`</span> component use <span class="jsx-3120878690">`ViewBox`</span>. The code to do this is demonstrated below:

    1import { useD3 } from "./hooks/useD3";
    2import React from "react";
    3import * as d3 from "d3";
    4
    5const height = 500;
    6const width = 500;
    7function BarChart({ data }) {
    8  const ref = useD3(
    9    (svg) => {
    10      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    11
    12      const x = d3
    13        .scaleBand()
    14        .domain(data.map((d) => d.year))
    15        .rangeRound([margin.left, width - margin.right])
    16        .padding(0.1);
    17
    18      const y1 = d3
    19        .scaleLinear()
    20        .domain([0, d3.max(data, (d) => d.sales)])
    21        .rangeRound([height - margin.bottom, margin.top]);
    22
    23      const xAxis = (g) =>
    24        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
    25          d3
    26            .axisBottom(x)
    27            .tickValues(
    28              d3
    29                .ticks(...d3.extent(x.domain()), width / 40)
    30                .filter((v) => x(v) !== undefined)
    31            )
    32            .tickSizeOuter(0)
    33        );
    34
    35      const y1Axis = (g) =>
    36        g
    37          .attr("transform", `translate(${margin.left},0)`)
    38          .style("color", "steelblue")
    39          .call(d3.axisLeft(y1).ticks(null, "s"))
    40          .call((g) => g.select(".domain").remove())
    41          .call((g) =>
    42            g
    43              .append("text")
    44              .attr("x", -margin.left)
    45              .attr("y", 10)
    46              .attr("fill", "currentColor")
    47              .attr("text-anchor", "start")
    48              .text(data.y1)
    49          );
    50
    51      svg.select(".x-axis").call(xAxis);
    52      svg.select(".y-axis").call(y1Axis);
    53
    54      var tooltip = d3.select('.tooltip-area')
    55        .style('opacity', 0);
    56
    57      svg
    58        .select(".plot-area")
    59        .attr("fill", "steelblue")
    60        .selectAll(".bar")
    61        .data(data)
    62        .join("rect")
    63        .attr("class", "bar")
    64        .attr("x", (d) => x(d.year))
    65        .attr("width", x.bandwidth())
    66        .attr("y", (d) => y1(d.sales))
    67        .attr("height", (d) => y1(0) - y1(d.sales))
    68        .append('title')
    69        .text((d) => `Sales were ${d.sales} in ${d.year}`);
    70    },
    71    [data.length]
    72  );
    73
    74  return (
    75    <>
    76      <svg
    77        ref={ref}
    78        viewBox={`0 0 ${height} ${width}`}
    79        style={{
    80          height: "100%",
    81          marginRight: "0px",
    82          marginLeft: "0px",
    83        }}
    84      >
    85        <g className="plot-area" />
    86        <g className="x-axis" />
    87        <g className="y-axis" />
    88        <g className="tooltip-area">
    89          <text className="tooltip-area__text">aas</text>
    90        </g>
    91      </svg>
    92    </>
    93  );
    94}
    95
    96export default BarChart;

javascript

The width and heigh property has been removed from the <span class="jsx-3120878690">`<svg />`</span>. It has been replaced with <span class="jsx-3120878690">`ViewBox="0 0 500 500"`</span>. This means we have set the user space height and width to 500. Note that these values do not represent pixels. If something is drawn at coordinates 250, 250, it will be drawn in the middle of the <span class="jsx-3120878690">`<svg />`</span>, which is dependent on its parent.

Test the Responsiveness
-----------------------

To change the layout of your chart, you can experiment by creating multiple charts and repositioning with Flexbox.

To do this, update <span class="jsx-3120878690">`App.js`</span> to create several charts and reposition them with CSS based on screen size.

    1<div className="App">
    2      <header className="App-header">
    3        <button onClick={() => setData([...data, {year: 2011, sales: 1, efficiency: 100}])}>test</button>
    4        {loading && <div>loading</div>}
    5        <div className="chart-container">
    6          {!loading && <BarChart data={data} />}
    7          {!loading && <BarChart data={data} />}
    8        </div>
    9      </header>
    10    </div>

jsx

The snippet above creates two <span class="jsx-3120878690">`<BarChart />`</span> components to make it easier to understand how they can be positioned in different screen layouts.

On mobile, you may want to stack them on top of each other. However, on a desktop, you may want to place them side by side.

    1.chart-container {
    2  display: flex;
    3  flex-direction: column;
    4}
    5
    6@media (min-width: 900px) {
    7  .chart-container {
    8    flex-direction: row;
    9  }
    10}

css

The CSS above uses a media query to change the <span class="jsx-3120878690">`flex-direction`</span>, allowing you to position the charts.

Conclusion
----------

D3.js provides a rich set of capabilities for visualizing data. Combining these skills with CSS is essential for building an experience that caters to different platforms and screen sizes. You can learn more about building responsive web apps by reading this article: [Why Mobile First](https://medium.com/prospa-engineering/why-mobile-first-8141d8103443).

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)

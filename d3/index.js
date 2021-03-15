/**
 * Add Document Elements with D3
 */
/*
d3.select("body").append("h2").text("Data Driven Documents are awesome!");
*/

/**
 * Select a Group of Elements with D3
 */
// d3.selectAll("li").text("list item");

/**
 * Work with Data in D3
 */
/*
const dataset = ["a", "b", "c", "d", "e"];
d3.select("body")
    .selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text("This is h2 title");
*/

/**
 * Work with Dynamic Data in D3
 */
/*const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
    .selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => `${d} USD`);
*/

/**
 * Add Inline Styling to Elements
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
    .selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => `${d} USD`)
    .style("color", "blue");
*/

/**
 * Change Styles Based on Data
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
    .selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => `${d} USD`)
    .style("color", (col) => {
        if (col < 20) return "red";
        else return "green";
    });
*/

/**
 * Add Classes with D3
 */
// d3.select("body").append("div").attr("class", "container");

/**
 * Update the Height of an Element Dynamically
 */
/*const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
    .selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (h) => {
        return `${h}px`;
    });
*/

/**
 * Change the Presentation of a Bar Chart
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
    .selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (h) => `${h * 10}px`);
*/

/**
 * Learn About SVG in D3
 */
/*
const w = 500;
const h = 100;
d3.select("body").append("svg").style("width", w).style("height", h);
*/

/**
 * Display Shapes with SVG
 */
/*
const w = 500,
  h = 100;
d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);
*/

/**
 * Create a Bar for Each Data Point in the Set
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);
*/

/**
 * Dynamically Set the Coordinates for Each Bar
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * 30;
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);
*/

/**
 * Dynamically Change the Height of Each Bar
 */
/*const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * 30;
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3);
*/

/**
 * Invert SVG Elements
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3);
*/

/**
 * Change the Color of an SVG Element
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy");
*/

/**
 * Add Labels to D3 Elements
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d, i) => d);
*/

/**
 * Style D3 Labels
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d, i) => d)
  .style("font-size", "12px")
  .attr("fill", "red");
*/

/**
 * Add a Hover Effect to a D3 Element
 */
/*
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("fill", "navy")
  .attr("class", "hovereffect");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d, i) => d)
  .style("font-size", "12px")
  .attr("fill", "red");
*/

/**
 * Add a Tooltip to a D3 Element
 */
/*const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500,
  h = 100;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("fill", "navy")
  .attr("class", "hovereffect")
  .append("title")
  .text((d, i) => d);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d, i) => d)
  .style("font-size", "12px")
  .attr("fill", "red");
*/

/**
 * Create a Scatterplot with SVG Circles
 */
/*
const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123],
];

const w = 500,
    h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("circle").data(dataset).enter().append("circle");
*/

/**
 * Add Attributes to the Circle Elements
 */
/*const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123],
];

const w = 500,
    h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => d[0])
    .attr("cy", (d, i) => h - d[1])
    .attr("r", 5);
*/

/**
 * Add Labels to Scatter Plot Circles
 */
const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123],
];

const w = 500,
    h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => d[0])
    .attr("cy", (d, i) => h - d[1])
    .attr("r", 5);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", (d, i) => d[0] + 5)
    .attr("y", (d, i) => h - d[1])
    .text((d) => d[0] + ", " + d[1]);

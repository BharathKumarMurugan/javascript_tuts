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

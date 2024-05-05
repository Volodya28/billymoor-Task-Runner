// data-visualization-components.js

// Import any necessary libraries
const d3 = require('d3');

// Define a function to create a bar chart
function createBarChart(data, options) {
    // Extract options or provide defaults
    const width = options.width || 400;
    const height = options.height || 300;
    const margin = options.margin || { top: 20, right: 30, bottom: 30, left: 40 };

    // Calculate inner width and height
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3.create('svg')
        .attr('width', width)
        .attr('height', height);

    // Create scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, innerWidth])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([innerHeight, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Create main group element
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw bars
    g.selectAll('rect')
        .data(data)
        .enter().append('rect')
        .attr('x', d => xScale(d.label))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => innerHeight - yScale(d.value))
        .attr('fill', 'steelblue');

    // Draw x-axis
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);

    // Draw y-axis
    g.append('g')
        .call(yAxis);

    // Return the SVG element as a string
    return svg.node().outerHTML;
}

// Export the function
module.exports = {
    createBarChart
};

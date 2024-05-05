# Data Visualization Components

This package provides a simple data visualization component for creating bar charts using D3.js.

## Installation

You can install this package via npm:

```bash
npm install data-visualization-components
```

## Usage

To use the `createBarChart` function provided by this package, you need to import it into your JavaScript file:

```javascript
const { createBarChart } = require('data-visualization-components');
```

Then, you can use the `createBarChart` function to generate a bar chart by providing it with data and options:

```javascript
const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 15 },
  // Add more data points as needed
];

const options = {
  width: 600,
  height: 400,
  margin: { top: 20, right: 30, bottom: 30, left: 40 }
};

const chartSvg = createBarChart(data, options);
```

The `createBarChart` function returns an SVG element as a string representing the generated bar chart.

## Example

Here's a basic example of using this package to create a bar chart:

```javascript
const { createBarChart } = require('data-visualization-components');

const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 15 }
];

const options = {
  width: 600,
  height: 400,
  margin: { top: 20, right: 30, bottom: 30, left: 40 }
};

const chartSvg = createBarChart(data, options);

console.log(chartSvg);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

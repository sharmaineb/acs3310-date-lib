# Date Lib - Simple Date Manipulation Class

[<img src="https://img.shields.io/badge/ESLint-Passed-brightgreen" alt="ESLint">](https://www.npmjs.com/package/@sharshar/date-lib)

[<img src="https://img.shields.io/badge/npm-v1.1.1-blue" alt="ESLint">](https://www.npmjs.com/package/@sharshar/date-lib)

[<img src="https://img.shields.io/badge/license-ISC-blue" alt="ESLint">](https://www.npmjs.com/package/@sharshar/date-lib)

[npm package link](https://www.npmjs.com/package/@sharshar/date-lib)

The `D` class is a simple date manipulation class. It provides a set of methods and properties to retrieve various date-related information and format dates according to different masks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Methods](#methods)
- [Examples](#examples)
- [License](#license)

## Installation

You can use the `D` class in your JavaScript project by including the `index.js` file in your project's source code or by installing it as a Node.js module.

**Node.js Module Installation:**

To use `D` as a Node.js module, you can install it using npm (Node Package Manager). Open your terminal and run the following command:

```bash
npm install @sharmaineb/acs3310-date-lib

## Usage

After including or installing the `D` class, you can create instances of it to work with dates and times.

Here's how you can use the `D` class:

```javascript
// Import the D class
const D = require('d');

// Create a new D instance with the current date and time
const currentDate = new D();

// Access properties to retrieve date-related information
console.log(`Full year: ${currentDate.year}`);
console.log(`Short year: ${currentDate.yr}`);
console.log(`Full month: ${currentDate.month}`);
console.log(`Short month: ${currentDate.mon}`);
console.log(`Full day: ${currentDate.day}`);
console.log(`Short day: ${currentDate.dy}`);
console.log(`Date: ${currentDate.date}`);
console.log(`Hour: ${currentDate.hours}`);
console.log(`Minutes: ${currentDate.mins}`);
console.log(`Seconds: ${currentDate.seconds}`);

// Format dates using custom masks
console.log(`Formatted Date: ${currentDate.format('Y-M-D H:I:S')}`);

// Get a description of how long ago or in the future a date is
console.log(`Time Difference: ${currentDate.when()}`);
```

## Properties

The `D` class provides the following properties:

- `year`: Gets the full year (e.g., 2023).
- `yr`: Gets the short year (e.g., 23).
- `month`: Gets the full month name (e.g., January).
- `mon`: Gets the abbreviated month name (e.g., Jan).
- `day`: Gets the full day name (e.g., Sunday).
- `dy`: Gets the abbreviated day name (e.g., Sun).
- `date`: Gets the day of the month.
- `hours`: Gets the hour of the day.
- `mins`: Gets the minutes.
- `seconds`: Gets the seconds.

## Methods

The `D` class provides the following methods:

- `format(mask)`: Formats the date according to the specified mask.
- `when()`: Returns a description of how long ago or in the future the date is.

## Examples

Here are some example usages of the `D` class:

```javascript
// Create a new D instance with a specific date and time
const customDate = new D(2023, 0, 1, 12, 0, 0);

// Format the custom date
console.log(`Custom Date: ${customDate.format('Full day, M D, Y')}`);

// Calculate the time difference
console.log(`Time Difference: ${customDate.when()}`);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
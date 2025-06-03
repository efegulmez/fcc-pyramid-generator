/**
 * Character used to build the pyramid.
 * @type {string}
 */
const character = "!"; // You can change this to any character you like, e.g., "*", "#", etc.

/**
 * The height of the pyramid (number of rows).
 * @type {number}
 */
const count = 25; // Change this to the desired height of the pyramid

/**
 * Array to store each row of the pyramid as a string.
 * @type {string[]}
 */
const rows = [];

/**
 * Determines if the pyramid should be inverted (upside down).
 * @type {boolean}
 */
let inverted = true; // Set to true if you want an inverted pyramid

/**
 * Generates a single row of the pyramid, properly padded with spaces.
 *
 * @param {number} rowNumber - The current row number (1-based).
 * @param {number} rowCount - The total number of rows in the pyramid.
 * @returns {string} The padded row string for the pyramid.
 */
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/**
 * Builds the pyramid rows, either in normal or inverted order.
 */
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/**
 * The final string representation of the pyramid.
 * @type {string}
 */
let result = ""

/**
 * Concatenates all rows into a single string with line breaks.
 */
for (const row of rows) {
  result = result + row + "\n";
}

/**
 * Outputs the generated pyramid to the console.
 */
console.log(result);
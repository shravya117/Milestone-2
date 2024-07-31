// utils/helpers.js
exports.calculateAverage = (numbers) => {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  };
  
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should perform SUM operation', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should perform SUBTRACT operation', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should perform DIVIDE operation', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should handle DIVIDE operation with roundedB equal to 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for invalid type', function () {
    assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), { message: 'Invalid type. Use SUM, SUBTRACT, or DIVIDE.' });
  });

  // You can add more test cases for edge cases or other scenarios
});

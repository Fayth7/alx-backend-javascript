const { expect } = require('chai');
const calculateNumber = require('./2-calcul');

describe('calculateNumber', function () {
  it('should perform SUM operation', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should handle DIVIDE operation with roundedB equal to 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid type', function () {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type. Use SUM, SUBTRACT, or DIVIDE.');
  });

});


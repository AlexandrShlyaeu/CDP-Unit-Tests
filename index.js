'use strict';

class Calculator {
  add(...args) {
    let result = 0;
    args.forEach(el => {
      return (
        result += el);
    });
    return result;
  }

  multiply(...args) {
    let result = 1;
    args.forEach(el => {
      return (
        result *= el);
    });
    return result;
  }
}

module.exports = Calculator;
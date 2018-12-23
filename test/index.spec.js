
'use strict';

let Calculator = require('../index');

describe('Calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new Calculator();
    });

    it('should allow to call add() for instance of class', () => {
        expect(instance.add).toBeDefined();
        expect(typeof instance.add).toBe('function');
        expect(instance.add(1, 2, 3, 4)).toBe(10);
    });

    it('should allow to call multiply() for instance of class', () => {
        expect(instance.multiply).toBeDefined();
        expect(typeof instance.multiply).toBe('function');
        expect(instance.multiply(1, 2, 3, 4)).toBe(24);
    });
});

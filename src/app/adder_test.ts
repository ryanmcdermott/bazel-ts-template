import { add } from './adder';

describe('Adder Test', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});
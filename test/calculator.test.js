import { expect } from 'chai';
import { add } from '../src/calculator.js';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).to.equal(0);
  });

  it('should return the number for a single number', () => {
    expect(add('1')).to.equal(1);
  });

  it('should return sum of two comma-separated numbers', () => {
   expect(add('1,5')).to.equal(6);
  });

  it('should handle multiple comma-separated numbers', () => {
   expect(add('1,2,3,4')).to.equal(10);
  });

  it('should handle invalid numbers gracefully', () => {
   expect(add('1,invalid,3')).to.equal(4);
  });

  it('should handle new lines as delimiters', () => {
   expect(add('1\n2,3')).to.equal(6);
  });

  it('should support custom delimiters', () => {
   expect(add('//;\n1;2')).to.equal(3);
  });

  it('should throw exception for negative numbers', () => {
   expect(() => add('1,-2,-3')).to.throw('negative numbers not allowed -2,-3');
  });

  it('should ignore numbers greater than 1000', () => {
    expect(add('2,1001')).to.equal(2);
  });

  it('should handle multiple delimiters', () => {
   expect(add('//[*][%]\n1*2%3')).to.equal(6);
  });

});
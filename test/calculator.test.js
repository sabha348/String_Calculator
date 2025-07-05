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
 
});
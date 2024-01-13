// Write your tests here!

const expect = require('chai').expect;
const caesar = require('../src/caesar').caesar;

describe('caesar', () => {
  it('should return false if shift is less than -25, greater than 25, or equal to 0', () => {
    const input = 'hello';
    const shift = -30;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it('should encode a message with a positive shift value', () => {
    const input = 'hello';
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = 'khoor';
    expect(actual).to.equal(expected);
  });

  it('should decode a message with a negative shift value', () => {
    const input = 'khoor';
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = 'hello';
    expect(actual).to.equal(expected);
  });

  it('should handle shifts that go beyond the alphabet', () => {
    const input = 'xyz';
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = 'abc';
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces and non-alphabetic characters', () => {
    const input = 'hello, world!';
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = 'khoor, zruog!';
    expect(actual).to.equal(expected);
  });
});



  
  


// Write your tests here!

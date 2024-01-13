// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius').polybius;

describe('polybius', () => {{
  it('should encode a message', () => {{
    const input = 'hello world';
    const actual = polybius(input);
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  }});

  it('should decode a message', () => {{
    const input = '3251131343 2543241341';
    const actual = polybius(input, false);
    const expected = 'hello world';
    expect(actual).to.equal(expected);
  }});

  it('should return false if decoding an odd number of digits', () => {{
    const input = '3251131343 254324134';
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  }});

  it('should encode "i" and "j" as 42', () => {{
    const input = 'ij';
    const actual = polybius(input);
    const expected = '4242';
    expect(actual).to.equal(expected);
  }});

  it('should maintain spaces in the input string', () => {{
    const input = 'hello world';
    const actual = polybius(input);
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  }});

  it('should encode a message with the "i/j" shared space', () => {{
    const input = 'ij';
    const actual = polybius(input);
    const expected = '4242';
    expect(actual).to.equal(expected);
  }});
}});
// Write your tests here!

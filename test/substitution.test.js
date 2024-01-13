// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution').substitution;

describe('substitution', () => {{
  it('should encode a message', () => {{
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const actual = substitution(input, alphabet);
    const expected = 'svool dliow';
    expect(actual).to.equal(expected);
  }});

  it('should decode a message', () => {{
    const input = 'svool dliow';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const actual = substitution(input, alphabet, false);
    const expected = 'hello world';
    expect(actual).to.equal(expected);
  }});

  it('should maintain spaces in the input string', () => {{
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const actual = substitution(input, alphabet);
    const expected = 'svool dliow';
    expect(actual).to.equal(expected);
  }});

  it('should ignore non-alphabetic characters in the input string', () => {{
    const input = 'hello, world!';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const actual = substitution(input, alphabet);
    const expected = 'svool, dliow!';
    expect(actual).to.equal(expected);
  }});

  it('should handle an alphabet with repeated characters', () => {{
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcbaa';
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  }});
}});
// Write your tests here!

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const uniqueChars = new Set(alphabet);
    if (uniqueChars.size !== 26) {
      return false;
    }
    if (encode) {
      console.log(input)
      console.log(alphabet)
      let output = "";
      for (let i = 0; i < input.length; i++) {
        let character = input[i];
        if (character.match(/[a-z]/i)) {
          //the i makes the match case insensitive
          let index = character.charCodeAt(0) - 97;
          output += alphabet[index];
        } else {
          output += character;
        }
      }
      console.log(output)
      return output;
    } else {
      console.log(input)
      console.log(alphabet)
      // Decoding: replace each letter in the input with the corresponding letter in the original alphabet
      let output = "";
      for (let i = 0; i < input.length; i++) {
        let character = input[i];
        if (alphabet.includes(input[i])) {
          let index = alphabet.indexOf(character.toLowerCase());
          output += String.fromCharCode(index + 97);
          console.log(character, index, String.fromCharCode(index + 97))
        } else {
          output += character;
        }
      }
      console.log(output)
      return output;
    }
  }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
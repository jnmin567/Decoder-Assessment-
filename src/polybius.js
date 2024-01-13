// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function countIntegers(input) {
  const inputArray = input.split(" ");
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let integer = parseInt(inputArray[i]);
    if (!isNaN(integer) && integer % 2 === 0) {
      count++;
    }
  }
  return count;
}

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i/j', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];

    let output = "";
    if (encode) {
      // Encoding: replace each pair letter with a pair of numbers from the Polybius square
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === "i") {
          output += 42;
        } else if (char === "j") {
          output += 42;
        }
        if (char.match(/[a-z]/i)) {
          for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
              if (polybiusSquare[row][col] === char) {
                output += (col + 1).toString() + (row + 1).toString();
              }
            }
          }
        } else if (char === " ") {
          output += " "; 
        }
      }
    } else {
      if (countIntegers(input) % 2 !== 0) {
        return false; 
      }
      // Decoding: replace each pair of digits with the corresponding letter from the Polybius square
      for (let i = 0; i < input.length; i += 2) {
        if (input[i]===" "){
          output += " ";
          i += 1
        }
        let row = parseInt(input[i]) - 1;
        let col = parseInt(input[i + 1]) - 1;
        if (row >= 0 && row < 5 && col >= 0 && col < 5) {
          let char = polybiusSquare[col][row];
          if (char === "i") {
            // Use "I" for the first occurrence of the shared space
            output += "i";
          } else if (char === "j" && i < input.length - 1 && input[i + 1] === "2") {
            // Use "J" for the second occurrence of the shared space
            output += "j";
          } else {
            output += char;
          }
        } 
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
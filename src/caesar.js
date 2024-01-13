// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0){
      return false; 
    }

    if (!encode) {
      shift = -shift;
    }
    
    let inputList = input.toLowerCase().split("");
    const outputArray=inputList.map((character)=>{
      const code =character.charCodeAt();
      if (code < 97 || code > 122) {
        return character;
      }
      let shiftedCode=code + shift;

      if (shiftedCode < 97) {
        shiftedCode += 26;
      } else if (shiftedCode > 122) {
        shiftedCode -= 26;
      }

      return String.fromCharCode(shiftedCode);
    })
    return outputArray.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

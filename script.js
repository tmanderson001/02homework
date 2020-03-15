// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbmol,
};


  // function to generate password

  function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    // Doesn't have a selected type
    if(typesCount === 0) {
      return '';
    }
    
    // create a loop
    for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    
    const finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.round() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbmol() {
 var symbols = '!@#$%^&*()[],./{}|:<>?';
 return symbols[Math.floor(Math.round() * symbols.length)];
}

//user prompts for generator functions

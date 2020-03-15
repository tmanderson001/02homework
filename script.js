// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

console.log(getRandomSymbmol());

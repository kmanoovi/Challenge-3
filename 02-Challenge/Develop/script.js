// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("");
var specialCharacters = "!@#$%^&*?".split("");
var masterSet = [];
var builtPassword = "";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {

  var characterQuantity = window.prompt("How many characters do you want your password to be?")

  var userChoiceOne = window.confirm("Do you want Upper Case letters in your password?");
  console.log(userChoiceOne)

  var userChoiceTwo = window.confirm("Do you want to use Lower Case letters in your password?")

  var userChoiceThree = window.confirm("Do you want Numbers in your password?");

  var userChoiceFour = window.confirm("Do you want Special Characters in your password?");

  if (userChoiceOne == true) {
    masterSet = masterSet.concat(upperCase)
    console.log(masterSet)
  }
  
  if (userChoiceTwo == true) {
    masterSet = masterSet.concat(lowerCase)
    console.log(masterSet)
  }

  if (userChoiceThree == true) {
    masterSet = masterSet.concat(number)
    console.log(masterSet)
  }

  if (userChoiceFour == true) {
    masterSet = masterSet.concat(specialCharacters)
    console.log(masterSet)
  }

  for (var i = 1; i < parseInt(characterQuantity); i++) {
    let randomIndex = getRandomNumber(0, masterSet.length -1);
    let randomChar = masterSet[randomIndex];
    builtPassword += randomChar;
  
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






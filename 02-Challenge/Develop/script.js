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

var userChoiceOne = window.prompt ("Do you want Upper Case letters in your password?")
// userChoice = userChoiceOne.toUpperCase();

var userChoiceTwo = window.prompt ("Do you want to use Lower Case letters in your password?")
// userChoice = userChoiceTwo.toLowerCase();

var userChoiceThree = window.prompt ("Do you want Numbers in your password?")
// var options = [Math.floor(Math.random() * options.length)];
// userChoice = userChoiceThree.Math.options

var userChoiceFour = window.prompt ("Do you want Special Characters in your password?")


// var userChoiceOne = window.prompt ("");
// var upperCase = window.prompt ();

// var userChoiceTwo
// var lowerCase = window.prompt ();

// var userChoiceThree
// var specialCharacters = window.prompt ();

// var userChoiceFour = window.prompt ("Do you want to have numbers in your password?")

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// if (userChoiceFour == true) {
//   Math.floor(Math.random() * 11)
// } else if (userChoiceFour !== true) {
//   DO_NOTHING
// };


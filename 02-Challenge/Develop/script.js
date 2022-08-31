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

var userYes = true;
var userNo = false;

var userChoiceOne = window.prompt ("Do you want Upper Case letters in your password?");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// userChoice = userChoiceOne.toUpperCase();

var userChoiceTwo = window.prompt ("Do you want to use Lower Case letters in your password?");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// userChoice = userChoiceTwo.toLowerCase();

var userChoiceThree = window.prompt ("Do you want Numbers in your password?");
// var options = [Math.floor(Math.random() * options.length)];
// userChoice = userChoiceThree.Math.options

var userChoiceFour = window.prompt ("Do you want Special Characters in your password?");
var specialCharacters = "!@#$%^&*?";
// userChoice = userChoiceFour.specialCharacters

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// Trying to figure out how to get between 8 and 128 characters.
// for (var i = 8; i < 128)

if (userChoiceOne == userYes) {
  upperCase()
} else if (userChoiceOne !== userYes) {
  DO_NOTHING
};

if (userChoiceTwo == userYes) {
  lowerCase()
} else if (userChoiceTwo !== userYes) {
  DO_NOTHING
};

if (userChoiceThree == userYes) {
  optios()
} else if (userChoiceThree !== userYes) {
  DO_NOTHING
};

if (userChoiceFour == userYes) {
  specialCharacters()
} else if (userChoiceFour !== userYes) {
  DO_NOTHING
};


// if (userChoiceFour == true) {
//   Math.floor(Math.random() * 11)
// } else if (userChoiceFour !== true) {
//   DO_NOTHING
// };


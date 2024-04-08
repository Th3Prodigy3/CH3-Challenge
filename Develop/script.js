// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("  ");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = parseInt(prompt("what is the length of your password"))

  if (isNaN(passwordLength)) {
    alert("please type a number");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Keep password between 8 and 128 characters")
    return null;
  }

  var isLowerCase = confirm("does the password inlcude lowercase letters")
  var isUpperCase = confirm("does the password inlcude uppercase letters")
  var isNumber = confirm("does the password include a number")
  var isSpecialCharacter = confirm("does the password inlcude a special character")
  var password = ""
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var Numbers = "0123456789"
  var specialCharacter = "!@?#$%&*."

  for (let i = 0; i < passwordLength; i++) {
console.log(i)
    if (isLowerCase && password.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * lowerCase.length)
      password = password + lowerCase[randomIndex]
    }

    if (isUpperCase && password.length < passwordLength) {
      randomIndex = Math.floor(Math.random() * upperCase.length)
      password = password + upperCase[randomIndex]
    }

    if (isNumber && password.length < passwordLength) {
      randomIndex = Math.floor(Math.random() * Numbers.length)
      password = password + Numbers[randomIndex]
    }

    if (isSpecialCharacter && password.length < passwordLength) {
      randomIndex = Math.floor(Math.random() * specialCharacter.length)
      password = password + specialCharacter[randomIndex]
    }
    console.log(password)
  }



  return password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

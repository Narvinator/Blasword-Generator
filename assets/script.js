
function generatePassword(){

var specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
var numbers = '0123456789';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var upperCase = confirm('Add Uppercase Letters?')
var numbers = confirm('Add numbers?')
var specials = confirm('Add Special Characers?')

const length = parseInt(document.getElementById('passwordLength').value);

var password = '';

if (upperCase) {
  lowercaseLetters += uppercaseLetters;
}

if (numbers) {
  lowercaseLetters += uppercaseLetters;
}
if (specials) {
  lowercaseLetters += specialCharacters
}



for (let i = 0; i < length; i++) {
  var passGen = Math.floor(Math.random() * lowercaseLetters.length);
  password += lowercaseLetters.charAt(passGen);
}


document.getElementById ('password')
}
// Add event listener to generate button
generate.addEventListener("click", generatePassword);


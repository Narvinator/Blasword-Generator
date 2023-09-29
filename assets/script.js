
// The brain of this whole project is in this function up top

function generatePassword(){

//Below are the criteria chracracters for the projects passwords

var specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
var numbers = '0123456789';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//These confirmation boxes will reflect when the application is used, and they ask the yser if they which of the criteria characters
//They would like to use 

var upperCase = confirm('Add Uppercase Letters?')
var numbers = confirm('Add numbers?')
var specials = confirm('Add Special Characers?')

// below length is declared as the DOC that calls the password length # mentioned in the characer counter in the HTMl

const length = (document.getElementById('passwordLength').value);

//this var eill give password the value of a blank to be used further down the code

var password = '';

// Conditions are set for use in the for loop to include every single characer in the password generator

if (upperCase) {
  lowercaseLetters += uppercaseLetters;
}

if (numbers) {
  lowercaseLetters += uppercaseLetters;
}
if (specials) {
  lowercaseLetters += specialCharacters
}

//Length in this loop is will corespond with the desired password length. Hence, the incremented I value.
//On the second line however, is is being used as a property to call all of the lowercase letters for use.

for (let i = 0; i < length; i++) {
  var passGen = Math.floor(Math.random() * lowercaseLetters.length);
  password += lowercaseLetters.charAt(passGen);
}

//Pulling from the doc the .value will return everything generated for the password

document.getElementById ('password').value = password;
}


// below are used for the page to count the clicks on the password generator
generate.addEventListener("click", generatePassword);


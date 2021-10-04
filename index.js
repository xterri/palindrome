const { palindrome } = require('./helpers/palindrome');
const prompt = require('prompt-sync')();

const nbr = prompt('Enter a number: ');
const closestPalindrome = palindrome(nbr);

if (!closestPalindrome || closestPalindrome.includes('Error'))
    console.log(`Looks like there was an issue: "${closestPalindrome || 'null returned'}"\n`);
else 
    console.log(`The next closest palindrome is ${palindrome(nbr)}\n`);

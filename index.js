const { palindrome } = require('./helpers/palindrome');
const prompt = require('prompt-sync')();

try {
    const nbr = prompt('Enter a number: ');
    const closestPalindrome = palindrome(nbr);

    if (!closestPalindrome || closestPalindrome.includes('Error'))
        console.log(`Looks like there was an issue: "${closestPalindrome || 'null returned'}"\n`);
    else 
        console.log(`The next closest palindrome is ${closestPalindrome}\n`);
} catch (error) {
    console.error(error);
}
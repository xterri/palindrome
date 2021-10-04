const { palindrome } = require('../helpers/palindrome');

const prompt = require('prompt-sync')();

const nbr = prompt('Enter a number: ');


let i = 10;
console.log(`Palindrome 1 Results: ${palindrome(nbr)}`);
console.log(`Palindrome 2 Results: ${palindrome(nbr, 'b')}\n`);

while (i--) {
    console.time('1. palindrome1');
    palindrome(nbr);
    console.timeEnd('1. palindrome1');

    console.time('2. palindrome2');
    palindrome(nbr, 'b');
    console.timeEnd('2. palindrome2');
    console.log('\n')
}
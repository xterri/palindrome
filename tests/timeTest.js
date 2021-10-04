const { palindrome } = require('../helpers/palindrome');

const prompt = require('prompt-sync')();

const nbr = prompt('Enter a number: ');

try {
    let i = 10;
    console.log(`Palindrome A Results: ${palindrome(nbr)}`);
    console.log(`Palindrome B Results: ${palindrome(nbr, 'b')}\n`);
    
    while (i--) {
        console.time('A. Palindrome A');
        palindrome(nbr);
        console.timeEnd('A. Palindrome A');
    
        console.time('B. Palindrome B');
        palindrome(nbr, 'b');
        console.timeEnd('B. Palindrome B');
        console.log('\n')
    }
} catch (error) {
    console.error(error);
}

const { palindrome } = require('./palindrome.js');

let i = 10;
console.log(palindrome(1234567890123456));

while (i--) {
    console.time('palindrome test');
    palindrome(1234567890123456);
    console.timeEnd('palindrome test');

}

// new method +/-1 
/*
palindrome test: 0.436ms
palindrome test: 0.13ms
palindrome test: 0.055ms
palindrome test: 0.641ms
palindrome test: 0.05ms
palindrome test: 0.053ms
palindrome test: 0.051ms
palindrome test: 0.049ms
palindrome test: 0.057ms
palindrome test: 0.051ms
---
Time Average = 0.1573ms
*/


// old method +/- 10 ** mid
/*
palindrome test: 0.443ms
palindrome test: 0.134ms
palindrome test: 0.056ms
palindrome test: 0.052ms
palindrome test: 0.618ms
palindrome test: 0.059ms
palindrome test: 0.053ms
palindrome test: 0.061ms
palindrome test: 0.05ms
palindrome test: 0.049ms
---
Time Average = 0.1575ms
*/
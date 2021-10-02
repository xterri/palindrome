const { checkIsNumber } = require('./helpers/checkIsNumber');

function palindrome(n) {
    if (!checkIsNumber) return "Error"
// Check if the value is a palindrome
    // If n <= 10
        // return (n - 1).toString()
    // If n <= 16
        // return "9"
    // Apply palindrome check algorithm
        // If n is already a palindrome (first check)
            // Get # of decimal points and add and minus 1 to mid point; create 2 new variables to check
                // n += 10 ** (n.length / 2)
                // n -= 10 ** (n.length / 2)
        // Apply recursive function for a forward and backward count to find next high and low palindrome
            // Work outwards in, compare if they match
                // if it matches, move to next digits
                // if it doesn't...
                    // TODO / Solve
        // compare high and low palindrome to n
        // return whichever palindrome has less 
    return n
}

function palindromeTest(n) {
    let end, temp, final = 0;
    let number = n;

    temp = number;
    while (number > 0) {
        end = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + end;
    }

    if (final === temp) {
        console.log("The inputed number is Palindrome");
        return true;
    } 

    console.log("The inputted number is not palindrome");
    return false;
}
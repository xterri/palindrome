/*
** Check the string n is a valid number
*/

function checkIsNumber(n) {
    // Check that string n is an integer
    if (n.includes('.')) return "Error: Value entered is not an integer";
    if (n[0].match(/[\+\-]/)) n = n.substring(1);
    n = n.replace(/,/g,'').trim();
    // Handle/remove "special" cases ('+ / -' only for beginning, whitespaces, ',')
        // Handle negatives; if n < 0 - return '0' or null; n must be >= 0
    // Run n.match(/^\d+$/) to determine if string contains only digits
        // if returns null = string contains other values; return error - n is not an integer
}

module.exports = {
    checkIsNumber
}
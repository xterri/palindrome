/*
** Check the string n is a valid number
*/

// Check that string n is an integer
function checkIsNumber(n) {
    // Check if there is a decimal point    
    if (n.includes('.')) return "Error1: Value entered is not an integer";
    // Check for '+' at n[0]; if so, remove '+'
    if (n[0].match(/[\+]/)) n = n.substring(1);
    // Remove ',' and whitespaces
    n = n.replace(/[\s\,]/g,'').trim();

    if (parseInt(n) < 0) return '0';
    // Check if only digits are left in the string, returns null if characters found
    if (!n.match(/^\d+$/)) return "Error2: Value entered is not an integer"; 

    // Convert to Number to remove any '0' at n[0] then convert back to string
    return parseInt(n).toString();
}

module.exports = {
    checkIsNumber
}
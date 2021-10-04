// Check that string n is an integer
function checkIsNumber(n) {
    // Account for negative values here
    if (n < 0) return null;
    // account for max/min safe integer, return error
    if (n > Number.MAX_SAFE_INTEGER) return "Error: Value exceeds MAX/MIN integer";
    // Convert to string if number is entered
    if (typeof n === 'number') n = n.toString();
    // Check if there is a decimal point    
    if (n.includes('.')) return "Error: Value contains a decimal point";
    // Check for '+' at n[0]; if so, remove '+'
    if (n[0] === '+') n = n.substring(1);
    // Remove ',' and whitespaces
    n = n.replace(/[\s\,]/g,'');

    // Check if only digits are left in the string, returns null if characters found
    if (!n.match(/^\d+$/)) return "Error: Value contains characters / symbols"; 

    return n;
}
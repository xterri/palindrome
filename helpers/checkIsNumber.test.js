it("should return 'error' when given the number 1.23", () => {
    expect(checkIsNumber("1.23")).toEqual("Error: Value contains a decimal point")
});

it("should return null when given the number -123", () => {
    expect(checkIsNumber("-123")).toEqual(null)
});

it("should return '123' when given the number +123", () => {
    expect(checkIsNumber("+123")).toEqual("123")
});

it("should return '123456789' when given the number 123,456,789", () => {
    expect(checkIsNumber("123,456,789")).toEqual("123456789")
});

it("should return '123456789' when given the number 12,34567,89", () => {
    expect(checkIsNumber("12,34567,89")).toEqual("123456789")
});

it("should return '123456789' when given the number 123 456 789", () => {
    expect(checkIsNumber("123 456 789")).toEqual("123456789")
});

it("should return 'error' when given the number 12a34b56c89", () => {
    expect(checkIsNumber("12a34b56c89")).toEqual("Error: Value contains characters / symbols")
});

it("should return 'error' when given the number 123456e89", () => {
    expect(checkIsNumber("123456e89")).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return '123' when given the number 123", () => {
    expect(checkIsNumber(123)).toEqual("123")
});

it("should return 'error' when given the number Number.MAX_VALUE", () => {
    expect(checkIsNumber(Number.MAX_VALUE)).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return 'error' when given the number Number.MIN_VALUE", () => {
    expect(checkIsNumber(Number.MIN_VALUE)).toEqual("Error: Value contains characters / symbols")
});

it("should return 'null' when given the number Number.MIN_SAFE_INTEGER", () => {
    expect(checkIsNumber(Number.MIN_SAFE_INTEGER)).toEqual(null)
});

it("should return 'error' when given the number Number.MAX_SAFE_INTEGER + 1", () => {
    expect(checkIsNumber(Number.MAX_SAFE_INTEGER + 1)).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return '9007199254740991' when given the number Number.MAX_SAFE_INTEGER", () => {
    expect(checkIsNumber(Number.MAX_SAFE_INTEGER)).toEqual("9007199254740991")
});

it("should return 'null' when given the number Number.MIN_SAFE_INTEGER + 1", () => {
    expect(checkIsNumber(Number.MIN_SAFE_INTEGER + 1)).toEqual(null)
});

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
it("should return 'error' when given the number 1.23", () => {
    expect(palindrome("1.23")).toEqual("Error: Value entered is not an integer")
});

it("should return '123' when given the number -123", () => {
    expect(palindrome("-123")).toEqual("123")
});

it("should return '123' when given the number +123", () => {
    expect(palindrome("+123")).toEqual("123")
});

it("should return '123456789' when given the number 123,456,789", () => {
    expect(palindrome("123,456,789")).toEqual("123456789")
});

it("should return 'error' when given the number 12,34567,89", () => {
    expect(palindrome("12,34567,89")).toEqual("Error: Not a valid integer")
});

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
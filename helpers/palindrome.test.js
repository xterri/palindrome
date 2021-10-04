const { palindrome } = require('./palindrome.js');

// Tests for Invalid Inputs (characters, symbols, decimals, negatives)
it("should return error when given the number 1.23", () => {
    expect(palindrome("1.23")).toEqual("Error: Value contains a decimal point")
});

it("should return error when given the number 1a2e3b4", () => {
    expect(palindrome("1a2e3b4")).toEqual("Error: Value contains characters / symbols")
});

it("should return null when given the number -123", () => {
    expect(palindrome("-123")).toEqual(null)
});

it("should return error when given Number.MIN_VALUE", () => {
    expect(palindrome(Number.MIN_VALUE)).toEqual("Error: Value contains characters / symbols")
});

it("should return error when given Number.MAX_VALUE", () => {
    expect(palindrome(Number.MAX_VALUE)).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return '9007199229917009' when given the number Number.MAX_SAFE_INTEGER - 1", () => {
    expect(palindrome(Number.MAX_SAFE_INTEGER - 1)).toEqual("9007199229917009")
});

it("should return '9007199229917009' when given the number Number.MAX_SAFE_INTEGER", () => {
    expect(palindrome(Number.MAX_SAFE_INTEGER)).toEqual("9007199229917009")
});



// Tests for single digits, 10 & 11

it("should return 1 when given the number 0", () => {
    expect(palindrome("0")).toEqual("1")
});

it("should return 0 when given the number 1", () => {
    expect(palindrome("1")).toEqual("0")
});

it("should return 4 when given the number 5", () => {
    expect(palindrome("5")).toEqual("4")
});

it("should return 9 when given the number 10", () => {
    expect(palindrome("10")).toEqual("9")
});

it("should return 9 when given the number 11", () => {
    expect(palindrome("11")).toEqual("9")
});



// Tests for special cases / exemptions (whitespaces, '+' '0', ',')
it("should return '121' when given the number 0123", () => {
    expect(palindrome("0123")).toEqual("121")
});

it("should return '121' when given the number +0123", () => {
    expect(palindrome("+0123")).toEqual("121")
});

it("should return '121' when given the number +123", () => {
    expect(palindrome("+123")).toEqual("121")
});

it("should return 123454321 when given the number 12 34567 89", () => {
    expect(palindrome("12 34567 89")).toEqual('123454321')
});

it("should return 123454321 when given the number 123 456 789", () => {
    expect(palindrome("123 456 789")).toEqual('123454321')
});

it("should return 123454321 when given the number 123,456,789", () => {
    expect(palindrome("123,456,789")).toEqual('123454321')
});



// Tests for palindrome function
it("should return 11 when given the number 16", () => {
    expect(palindrome("16")).toEqual('11')
});

it("should return 22 when given the number 19", () => {
    expect(palindrome("19")).toEqual('22')
});

it("should return 11 when given the number 22", () => {
    expect(palindrome("22")).toEqual('11')
});

it("should return 77 when given the number 88", () => {
    expect(palindrome("88")).toEqual('77')
});

it("should return 99 when given the number 100", () => {
    expect(palindrome("100")).toEqual('99')
});

it("should return 121 when given the number 118", () => {
    expect(palindrome("118")).toEqual('121')
});

it("should return 121 when given the number 123", () => {
    expect(palindrome("123")).toEqual('121')
});

it("should return 212 when given the number 222", () => {
    expect(palindrome("222")).toEqual('212')
});

it("should return 333 when given the number 343", () => {
    expect(palindrome("343")).toEqual('333')
});

it("should return 1111 when given the number 1166", () => {
    expect(palindrome("1166")).toEqual('1111')
});

it("should return 1221 when given the number 1167", () => {
    expect(palindrome("1167")).toEqual('1221')
});

it("should return 8338 when given the number 8393", () => {
    expect(palindrome("8393")).toEqual('8338')
});

it("should return 8448 when given the number 8394", () => {
    expect(palindrome("8394")).toEqual('8448')
});

it("should return 1234554321 when given the number 1234567890", () => {
    expect(palindrome("1234567890")).toEqual('1234554321')
});

it("should return 101 when given the number 99", () => {
    expect(palindrome("99")).toEqual('101')
}); 

it("should return 1001 when given the number 999", () => {
    expect(palindrome("999")).toEqual('1001')
}); 

it("should return 900009 when given the number 899 998", () => {
    expect(palindrome("899 998")).toEqual('900009')
}); 

it("should return 799997 when given the number 800008", () => {
    expect(palindrome("800008")).toEqual('799997')
}); 

it("should return 1 when given the number 000", () => {
    expect(palindrome("000")).toEqual('1')
}); 

it("should return 898 when given the number 900", () => {
    expect(palindrome("900")).toEqual('898')
}); 

it("should return 999 when given the number 1001", () => {
    expect(palindrome("1001")).toEqual('999')
}); 

it("should return 9999 when given the number 10001", () => {
    expect(palindrome("10001")).toEqual('9999')
}); 
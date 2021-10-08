const { checkPalindrome } = require('../checkPalindrome')
const { findUpperPalindromeA, findLowerPalindromeA } = require('../findPalindromeA');

// addPalindrome Tests
it("should return next highest palindrome, '131' when given 123", () => {
    expect(findUpperPalindromeA("123")).toEqual("131")
});

it("should return next highest palindrome, '101' when given 100", () => {
    expect(findUpperPalindromeA("100")).toEqual("101")
});


// minusPalindrome Tests
it("should return next lowest palindrome '121' when given 123", () => {
    expect(findLowerPalindromeA("123")).toEqual("121")
});

it("should return next lowest palindrome '88' when given 98", () => {
    expect(findLowerPalindromeA("98")).toEqual("88")
});


// checkPalindrome Tests
it("should return true when given the number 1221", () => {
    expect(checkPalindrome("1221")).toEqual(true)
});

it("should return false when given the number 1321", () => {
    expect(checkPalindrome("1321")).toEqual(false)
});

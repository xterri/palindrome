it("should return '123,456' when given the number 123,456", () => {
    expect(palindrome('0123456')).toEqual('0123 456')
});

function palindrome(n) {
    // Check that string n is an integer
        // Before isNaN() / parseInt(), handle "special" cases ('+', whitespaces, ',')
    console.log(parseInt(n));
    console.log(isNaN(n));
    return n
}
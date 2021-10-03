# Palindrome Coding Challenge

### The Problem
A palindrome is a sequence that reads the same backward as forward. (ie: racecar, 112211)

Given a _string n_ representing an integer, return the closest integer (not including itself), which is a palindrome. 
<br/>If there is a tie, return the smaller one.

example:
<br/>Input: n = "123"
<br/>Output: "121"


### Assumptions
- If `n = "1.23"` the function should `return error` as the value is not an integer
- If `n = "1a2e3b4"` the function should `return error` as the value is not an integer
- If `n < 0` the function should `return null` because we cannot make negatives a true palindrome without a following minus symbol (ex. "-121" if it is a true palindrome should be "-121-")
- If `n = MIN_VALUE / MAX_VALUE` the function should `return error` because it will contain a characters and symbols
- If `n = "0123"` the function should `return "121"`; '0' will be omitted 
- If `n = "+123"`, the function should `return "121"`; '+' will be removed from the string as it's unncessary to express positive integers
- If `n = "12 34567 89"` the function should `return "123454321"`, omitting the whitespaces, take as a regular number
- If `n = "123 456 789"` the function should `return "123454321"`, omitting the whitespaces
- If `n = "123,456,789"` the function should `return "123454321"`, omitting the commas
- If `n = "0"` the function should `return "1"` because we cannot include the value itself and 1 is the next closest integer that is a palindrome
- If `n = "<any single digit>"` the function should `return "n - 1"` because it is the smaller integer closest to the value given
- If `n = "10"` the function should `return "9"` 
- If `n = "11"` the function should `return "9"` 
- If `n = "16"` the function should `return "11"`; tie in distance between 11 and 22, return smaller value
- If `n = "19"` the function should `return "22"`; 22 is closer to the value than 11
- If `n = "22"` the function should `return "11"`
- If `n = "118"` the function should `return "121"`
- If `n = "123"` the function should `return "121"`
- If `n = "222"` the function should `return "212"`
- If `n = "343"` the function should `return "333"`
- If `n = "1166"` the function should `return "1111"`
- If `n = "1167"` the function should `return "1221"`
- If `n = "8393"` the function should `return "8338"`
- If `n = "8394"` the function should `return "8448"`
- If `n = "1234567890"` the function should `return "1234554321"`

### Process / TODO
- Solve distance between closest and furthest palindrome to _n_
- Combine addPalindrome and minusPalindrome into one function for recursion?

### Issues
- How to handle commas if _n_ is using them in a non-standard way (ex. "12,34567,89") or if user is using commas as a decimal separator (ex. 1,23)?

### Failed Tests
- If `n = "99"` the function should `return "101"` (returned _88_)
- If `n = "999"` the function should `return "1001"` (returned _989_)
- If `n = "899 998"` the function should `return "900009"` (returned _898898_)
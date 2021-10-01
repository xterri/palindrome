# Palindrome Coding Challenge

### The Problem
A palindrome is a sequence that reads the same backward as forward. (ie: racecar, 112211)

Given a _string n_ representing an integer, return the closest integer (not including itself), which is a palindrome. 
If there is a tie, return the smaller one.

example:
Input: n = "123"
Output: "121"


### Assumptions
- If `n = "1.23"` the function should `return error` as the value is not an integer
- If `n = "1a2e3b4"` the function should `return error` as the value is not an integer
- If `n < 0` the function should `return "0" / null` because we cannot make negatives a true palindrome without a following minus symbol (ex. "-121" if it is a true palindrome should be "-121-")
- If `n = "0"` the function should `return "1"` because we cannot include the value itself and 1 is the next closest integer that is a palindrome
- If `n = "<any single digit>"` the function should `return "n - 1"` because it is the smaller integer closest to the value given
- If `n = "11"` the function should `return "9"` 
- If `n = "22"` the function should `return "11"`
- If `n = "123"` the function should `return "121"`
- If `n = "222"` the function should `return "212"`
- If `n = "343"` the function should `return "333"`
- If `n = "1234"` the function should `return "1221"`
- If `n = "1234567890"` the function should `return "1234554321"`
- If `n = "123 456 789"` the function should `return "123454321"`, omitting the whitespaces
- If `n = "123,456,789"` the function should `return "123454321"`, omitting the commas
- If `n = "0123"` the function should `return "121"`; '0' will be omitted 
-*- If `n = "+123"`, the function should `return "121"`; '+' will be removed from the string as it's unncessary to express positive integers
-*- If `n = MIN_IN / MAX_INT` the function should `return null` because it will contain a characters and symbols?


### Process / TODO
- Use `isNaN()` to determine if value is a number
- Use `parseInt()` to determine if a value is an integer
*Will need to handle any characters provided after a digit
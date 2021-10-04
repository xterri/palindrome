# Palindrome Coding Challenge

### The Problem
A palindrome is a sequence that reads the same backward as forward. (ie: racecar, 112211)

Given a _string n_ representing an integer, return the closest integer (not including itself), which is a palindrome. 
<br/>If there is a tie, return the smaller one.

Example:
<br/>Input: n = "123"
<br/>Output: "121"


### Documentation
This code is primarily written in Javascript and uses NodeJS.
To run the code, please do the following: 
1. Download and Install [NodeJS](https://nodejs.org/en/)
2. Clone this repository and open it
3. Run `npm install` to download dependencies for this code


### Description
Two methods developed to find the most optimized and accurate search for the next highest and lowest palindrome _string n_
- **Palindrome A**: Finds the next highest by adding, `n = n + (10 ** x)`, and the next lowest by subtracting, `n = n - (10 ** x)`
- **Palindrome B**: Finds the next highest/lowest by adding `(n[head] - n[tail]) * (10 ** x)` 
    - Next highest condition, `if (n[head] < n[tail]) { n[head] += 10 }`; We want `n[head]` to be a higher value so we can add and count upwards from _n_
    - Next lowest condition, `if (n[tail] < n[head]) { n[tail] += 10 }`; We want `n[tail]` to be a higher value, so we can get a negative number and count downards from _n_


### Scripts & Tests
- `npm test` Run unit tests provided in repository
- `npm start` Try 'Palindrome A'
- `npm run time-test` Compare run speed of 'Palindrome A' with 'Palindrome B'


### Assumptions / Test Cases
- If `n = "1.23"` the function should `return error` as the value is not an integer
- If `n = "1a2e3b4"` the function should `return error` as the value is not an integer
- If `n < 0` the function should `return null` because we cannot make negatives a true palindrome without a following minus symbol (ex. "-121" should be "-121-")
- If `n = MIN_VALUE / MAX_VALUE` the function should `return error` because it will contain a decimal point and/or characters/symbols
- If `n = "0123"` the function should `return "121"`; '0' will be omitted when used with parseInt()
- If `n = "+123"`, the function should `return "121"`; '+' will be removed from the string as it's unncessary to express positive integers
- If `n = "12 34567 89"` the function should `return "123454321"`, omitting the whitespaces, take as a regular number
- If `n = "123 456 789"` the function should `return "123454321"`, omitting the whitespaces
- If `n = "123,456,789"` the function should `return "123454321"`, omitting the commas
- If `n = "0"` the function should `return "1"` because we cannot return negatives or the value itself
- If `n = "<any single digit>"` the function should `return "n - 1"` because it is the smaller integer closest to the value given
- If `n = "16"` the function should `return "11"`; tie in distance between 11 and 22, return smaller value
- If `n = "19"` the function should `return "22"`; 22 is closer to the value than 11
- If `n = "22"` the function should `return "11"`
- If `n = "123"` the function should `return "121"`


### Process / TODO
- Combine findUpperPalindrome and findLowerPalindrome into one function for recursion?
- ~Find distance between next highest and lowest palindrome to _n_~
- ~Apply try/catch clauses~
- ~Fix failed tests, adjusted values exceeding other palindromes~


### Issues
- How to handle commas if _n_ is using them in a non-standard way (ex. "12,34567,89") or if user is using commas as a decimal separator (ex. 1,23)?
- ~What should happen if a positive value produces an 'exponent' as it's number? (ex. 10e5)~
- 'Palindrome B' proves to be faster but is inaccurate for some tests (ex. `n = 11`)
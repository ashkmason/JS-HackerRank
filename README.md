# HackerRank Challenges in JavaScript

## Day 0: Data Types
### Task
Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. You must use the + operator to perform the following sequence of operations:
1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
2. Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
3. Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.
#### Techniques used
- parseInt()
- parseFloat()
- string concatination

## Day 1: Arithmetic Operators
### Task
Complete the following functions in the editor below:
1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.
#### Techniques used
- arithmetic operators

## Day 1: Functions
### Task
Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e.,  factorial).
#### Techniques used
- for loop

## Day 1: Let and Const
### Task
1. Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, r, denoting the radius of a circle from stdin.
3. Use PI and r to calculate the area and perimeter of a circle having radius r.
4. Print area as the first line of output and print perimeter as the second line of output.
#### Techniques used
- Math.PI
- readLine()
- arithmetic operators

## Day 2: Conditional Statements: If-Else
### Task
Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:
- if 25 < score <= 30, then grade = A
- if 20 < score <= 25, then grade = B
- if 15 < score <= 20, then grade = C
- if 10 < score <= 15, then grade = D
- if 5 < score <= 10, then grade = E
- if 0 < score <= 5, then grade = F
#### Techniques used
- If-Else statement
- Logical Operators
- Relational Operators

## Day 2: Conditional Statements: Switch
### Task
Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
- If the first character in string s is in the set {a, e, i, o, u}, then return A.
- If the first character in string s is in the set {b, c, d, f, g}, then return B.
- If the first character in string s is in the set {h, j, k, l, m}, then return C.
- If the first character in string s is in the set {n, p, q, r, s, t v, w, x, y, z}, then return D.
#### Techniques used
- Switch Statement
- Relational Operators

## Day 2: Loops
### Task
Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
### Techniques used
- For Loop
- If-Else Statement
- String Concatination
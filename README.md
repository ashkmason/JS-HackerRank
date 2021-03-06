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

## Day 3: Arrays
### Task
Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.
### Techniques used
- For Loop
- If Statement
- Iterate over an array
- Array indexing
- Array sorting
- Array splicing

## Day 3: Try, Catch, and Finally
### Task
Complete the reverseString function; it has one parameter, . You must perform the following actions:
1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
### Techniques used
- String split method
- Array reverse method
- Array join method in to string
- Error message catch
- Try and Catch

## Day 3. Throw
### Task
Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
1. If a is 0, throw an Error with message = Zero Error.
2. If a is negative, throw an Error with message = Negative Error.
### Techniques used
- If-Else Statement
- Comparison Operators
- Throw New Error Function

## Day 4: Create a Rectangle Object
### Task
Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
- length: This value is equal to a.
- width: This value is equal to b.
- perimeter: This value is equal to 2 * (a+b)
- area: This value is equal to a * b
### Techniques used
- Created an Object
- Used this keyword

## Day 4: Count Objects
### Task
Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x == x.y.
### Techniques used
- Iterate over an array
- Object Key and Value
- For loop
- If statement

## Day 4: Classes
### Task
Create a Polygon class that has the following properties:
- A constructor that takes an array of integer values describing the lengths of the polygon's sides.
- A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.
### Techniques used
- Class Constructor
- Class Method

## Day 5: Inheritance
### Task
We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
1. Add an area method to Rectangle's prototype.
2. Create a Square class that satisfies the following:
  - It is a subclass of Rectangle.
  - It contains a constructor and no other methods.
  - It can use the Rectangle class' area method to print the area of a Square object.
### Techniques used
- Class Prototype
- Class inheritance using extends and super

## Day 5: Template Literals
### Task
The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
Complete the function in the editor so that it does the following:
1. Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula: s = (P +/- sqrt(P^2 - 16 * A)) / 4
where A is the rectangle's area and P is its perimeter.
2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
3. Returns the sorted array.
### Techniques used
- Math

## Day 5: Arrow Functions
### Task
Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:
- If the element is even, multiply the element by 2.
- If the element is odd, multiply the element by 3.
The function must then return the modified array.
### Techniques used
- Arrow Function
- array.map()


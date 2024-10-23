# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Answer

At each recursive call to fib(n, arr), arr contains exactly the first k Fibonacci numbers where k is the number of previous completed recursive calls.

1. For the first call:
   
   Our array starts empty, which is correct for the "previous" (non-existent) call.

4. For the base cases:
   
   When $n = 0$, the array is initially empty, and the function adds the first Fibonacci number (0).
     
   When $n = 1$, the array is initially empty, and the function adds the first two Fibonacci numbers (0, 1).

3. For $n > 1$:
   
   The recursive call $fib(n-1, arr)$ ensures that $arr$ will contain the first $n-1$ Fibonacci numbers before calculating and adding the nth number.
   
   This maintains the invariant for the next recursive call, as it will start with $arr$ containing $n$ numbers for the input $n+1$.

4. The invariant holds true for all recursive calls because each call either:

   Terminates at a base case, **or**
   
   Reduces the $n$ value by 1 and ensures $arr$ contains the appropriate number of Fibonacci numbers before the next recursive call.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.

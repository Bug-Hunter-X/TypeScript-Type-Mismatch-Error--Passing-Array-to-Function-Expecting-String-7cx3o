# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string.  The `greeter` function is designed to accept a single string and return a greeting. However, an array is passed to it, resulting in a type error.

The `bug.ts` file contains the erroneous code.  The `bugSolution.ts` file shows how to correctly handle this situation, either by modifying the function to accept arrays, or by accessing individual elements of the array.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Compile and run `bug.ts` using the TypeScript compiler (tsc) and Node.js (node). You'll see a compilation error if you strictly enforce types, or a runtime error if you don't.

## Solution

The solution involves changing the function signature or handling the array input differently. Refer to the `bugSolution.ts` file for examples.
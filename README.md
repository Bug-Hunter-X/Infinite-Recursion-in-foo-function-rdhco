# Infinite Recursion Bug in JavaScript
This repository demonstrates a common error in JavaScript: infinite recursion. The `foo` function is recursively defined, but it lacks proper base cases to handle all scenarios, leading to stack overflow errors when both arguments are positive integers.
The solution demonstrates how to fix this issue by adding appropriate base cases to the recursion.
function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a > 0 && b > 0){
    return foo(a - 1, b - 1);
  } else {
    return a + b;
  }
}
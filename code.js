function fib(n, arr = []) {
  if (n === 0) {
    arr.push(0);
    return arr;
  }
  if (n === 1) {
    arr.push(0, 1);
    return arr;
  }

  fib(n - 1, arr);
  let val = arr[n - 1] + arr[n - 2];
  arr.push(val);
  return arr;
}

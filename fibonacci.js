
// function(n) = function(n-1) + function(n-2)
// given that f(0) = 1, f(1) = 1

function getFibonacciNumberRecursively(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return getFibonacciNumberRecursively(n - 1) + getFibonacciNumberRecursively(n - 2);
}

function getFibonacciNumber(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  var prevPrevNumber = 0;
  var prevNumber = 1;
  for (var i = 2; i < n; i++) {
    var temp = prevNumber + prevPrevNumber;
    prevPrevNumber = prevNumber;
    prevNumber = temp;
  }
  return prevNumber + prevPrevNumber;
}

// test out the first ten in the fib sequence
for (var n = 0; n < 10; n++) {
  console.log(getFibonacciNumberRecursively(n), getFibonacciNumber(n));
}

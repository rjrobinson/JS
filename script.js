// arrays.

var calc = {
  calculate: function(x, y, fn) {
    return fn(x, y);
  }
}

var sum = function (x, y) {
  return x + y;
}, diff = function (x, y) {
  return x - y;
}

var sumResult = calc.calculate(1,2, sum),
  diffResult = calc.calculate(1, 2, diff);

alert(sumResult);
alert(diffResult)
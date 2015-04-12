var calculate = function() {
    var fn = Array.prototype.pop.apply(arguments);

    return fn.apply(null, arguments)
}

var sum = function() {
    var total = 0;

    for (var i = 0, l = arguments.length; i < l; i++) {
        total += arguments[i]
    };
    return total
}

var diff = function() {
    var total = Array.prototype.shift.apply(arguments);

    for (var i = 1, l = arguments.length; i < l; i++) {
        total = total - arguments[i];
    };
    return total;
}

var sumResult = calculate(1, 2, 3, 4, 5, sum)
var diffResult = calculate(1, 2, 3, 4, 5, diff)

alert(sumResult)
alert(diffResult)

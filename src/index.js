exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  } else return Math.min(...array);
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  } else return Math.max(...array);
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;

  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length;
}
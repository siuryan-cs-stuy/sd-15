var fibonacci = function(n) {
  var i = 0;
  var j = 1;

  while (n > 1) {
    var temp = j;
    j = i + j;
    i = temp;
    n--;
  }

  return i;
}

var gcd = function(a, b) {
  if (a == b) {
    return a;
  } else if (a > b) {
    return gcd(a-b, b);
  } else {
    return gcd(a, b-a);
  }
}

var l = ['a', '3', 5, 'g', ';', 10]
var randomStudent = function() {
  var index = Math.floor(Math.random()*l.length);
  return l[index];
}

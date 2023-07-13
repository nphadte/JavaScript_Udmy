/*
 *  a function with its arguments as a  function  and an array as arguments and
 *  and it executes this function on every element of the array
 *  its return type as an array
 */

function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

var f = function(x) {
    return x * x * x;
}

var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);

console.log(cube);

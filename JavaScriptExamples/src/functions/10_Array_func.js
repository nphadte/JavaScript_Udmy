/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections

var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];

The above way of creating Arrays in Javascript are equivalent

var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;


var arr = [42];      // Creates an array with only one element:
                     // the number 42.
var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
var arr = [];
arr.length = 42;



*/
var arr = ['one', 'two', 'three'];
console.log(arr[2]);
console.log(arr['length']);


var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
    console.log(color);
});

var colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
console.log("The concatenated array is :" + myArray);

var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
console.log("The joined  array is :" + myArray);

var myArray = new Array('1', '2');
myArray.push('3'); // myArray is now ["1", "2", "3"]
console.log("The final  array is :" + myArray);

var myArray = new Array('1', '2', '3');
var last = myArray.pop();
// myArray is now ["1", "2"], last = "3"

//shift() removes the first element from an array and returns that element.
var myArray = new Array('1', '2', '3');
var first = myArray.shift();
// myArray is now ["2", "3"], first is "1"


var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort();
console.log("The sorted  array is :" + myArray);
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

/*
sort() can also take a callback function to determine how array elements are compared.

The sort method and other methods below that take a callback are known as iterative methods, because they iterate over the entire array in some fashion. Each one takes an optional second argument called thisObject. If provided, thisObject becomes the value of the this keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, this will refer to the global object (window) when using arrow function as callback, or undefined when using normal function as callback.
*/

var sortFn = function(a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
console.log("The sorted  array as per the sortFn function is :" + myArray);



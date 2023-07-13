/*
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

function  myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar  =  { make: 'Honda' , model: 'Accord', year: 1998 };
var  x, y;

x = mycar.make;
console.log( x);

myFunc(mycar);

y = mycar.make;

console.log( y);
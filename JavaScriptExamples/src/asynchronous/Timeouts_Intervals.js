/*
setTimeout()
    Execute a specified block of code once after a specified time has elapsed.
setInterval()
    Execute a specified block of code repeatedly with a fixed time delay between each call.
 */

let myGreeting1 = setTimeout(function() {
    console.log('Hello, Mr. Universe!');
}, 2000)


// With a named function
let myGreeting2 = setTimeout(function sayHi() {
    console.log('Hello, Mr. Universe!');
}, 2000)

// With a function defined separately
function sayHi() {
    console.log('Hello Mr. Universe!');
}

let myGreeting4 = setTimeout(sayHi, 2000);
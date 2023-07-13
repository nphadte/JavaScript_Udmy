/*
  You can nest a function within a function. The nested (inner) function is private to its containing (outer) function.
   It also forms a closure. A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

   To summarize:
    Blow  addSquares is the outer function and  square is the inner function

    The inner function can be accessed only from statements in the outer function.
    The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
 */

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

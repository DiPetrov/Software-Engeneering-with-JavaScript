/* Arrow Functions */
/* They have special shorthand syntax for declaration */
/* They operate in the context of their enclosing scope */
/* They are very useful in functional programming */

// Example:
let increment = x => x + 1;
console.log(increment(5));

// The one above is the same as:
let increment = function(x) {
    return x + 1;
}

// Another example:
let sum = (a, b) => a + b;
console.log(sum(5, 6));

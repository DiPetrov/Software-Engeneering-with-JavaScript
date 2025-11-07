// Закръгляне на числа //
//developer.mozilla.org - мястото за учене на JavaScript//

/* Math.round - закръгля съответно надолу или нагоре в зависимост от стойността на числото */
let number = 5.433;
console.log(Math.round(number));

let secondNumber = 5.539;
console.log(Math.round(secondNumber));

/* Math.floor - закръгля дадено число но винаги надолу! */
let nubmersToFloor = 5.99;
console.log(Math.floor(nubmersToFloor));

/* Math.ceil - закръгля дадено чисоло но винаги нагоре! */
let numberToCeil = 5.13;
console.log(Math.ceil(numberToCeil));

/* Math.trunc - премахва дробното число */
let numberToTrunc = 2.63;
console.log(Math.trunc(numberToTrunc));

/*.toFixed() - закръгля число след десетичната запетая */
let num = 5.53453;
let n = num.toFixed(2);

/* Math.pow - returns the value of x to the power of y изплозва се за степенуване*/
let num5 = 2;
console.log(Math.pow(num5, 3));

/* charAt(index) принтира определен индекс от даден стринг. Идентичен е с .length*/
let text = 'SoftUni';
let letter = text.charAt(4);

/* Винаги взима положителната стойност на числото */
let num2 = -13;
let newNumber = Math.abs(num2);
console.log(newNumber);

/* Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments: */
Math.min(0, 150, 30, 20, -8, -200); // returns -200
Math.max(0, 150, 30, 20, -8, -200); // returns 150

/* Math.random() returns a random float between 0 and 1 */
Math.random() // Returns randomized float number

/* Math.log(x) returns the natural logarithm of x. */
Math.log(x)

/* Math.log2(x) returns the base 2 logarithm of x. */
Math.log2(x)

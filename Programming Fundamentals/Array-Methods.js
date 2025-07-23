/* All the required information about Methods is presented here. Everything must be learned! 

Arrays are special objects!
They have build in properties and methods line .length
Methods are written with a .dot at the end

Examples: */
let arr = [1, 2, 3];

/* Adds new value at the end of the array */
arr.push[4]; /* it will add the value 4 at the end of the array */
console.log(arr);

/* Check wether particular value is contained within an array */

let isHere = arr.includes(1);

if (isHere) {
  console.log('It is here');
} else {
  console.log('It is not here');
}

/* Combines different Array elements together but as a string! */
console.log(arr.join('#')); //it will add the symbol '#' between the elements */

/* Makes copy of the current array values and stores them but I have to set beginning and end parameters. End parameter can be skipped!*/
let arrNew = [6, 111, 222];
let arr2 = arrNew.slice();

arrNew.pop();

console.log(arrNew);
console.log(arr2);

/* This methods takes the array and prints it as a string. It is identical like the .join() methods BUT it always separates the values with a ',' comma. */

arrNew.toString();
console.log(typeof arrNew);

/* */

let arr3 = [1, 2, 3, 4, 5, 6];
arr3.split();

console.log(arr3)
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
let isHere = arr.includes(1, 3); // looks for the element 1 after the element 3!

if (isHere) {
  console.log('It is here');
} else {
  console.log('It is not here');
}

/* Combines different Array elements together but as a string! */
console.log(arr.join('#')); //it will add the symbol '#' between the elements */

/* Makes copy of the current array values and stores them but I have to set beginning and end parameters. End parameter can be skipped!*/
let arrNew = [6, 111, 222];
let arr2 = arrNew.slice(); // Creates the new array
let arr3 = arrNew.slice(2); // Creates new Array but after the second element
let arr3 = arrNew.slice(2, 4); // Creates new Array starting after second element up to 4th (not included) element


arrNew.pop()
console.log(arrNew);
console.log(arr2);

/* This methods takes the array and prints it as a string. It is identical like the .join() methods BUT it always separates the values
with a ',' comma. */
arrNew.toString();
console.log(typeof arrNew);

/* The split() method of String values takes a pattern and divides this
string into an ordered list of substrings by searching for the pattern,
puts these substrings into an array, and returns the array.*/
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.split();

console.log(arr3)

/* Adds a particular element at the beginning of the array */
numbers.unshift(0);
numbers.unshift(-1);

/* Removes the first element of the array and changes teh array! */
numbers.shift();

/* Turns string elements into Number element within the array */
// The map() methods creates a new array applying a function to every element of the array
arr.map(Number)

/* It searches for a particular element within the array and returns
its index! */
console.log(number.indexOf(3));
console.log(number.indexOf(3, 5)); // Searches for number 3 after index 5!

/* It adds/removes items to/from an array, and returns the removed items. It changes the array */
let newArray10 = [5, 10, 59, 30, 40, 100];
let newArrayNums = newArray10.splice(2, 3); // start, delete count
let deleted = newArray10.splice(1,2, 'Borislav', 'Ivaylo');

/* The .filter() method creates a new array from elements matching predicate - returning a boolean value. */
/* It allows us to run functions on arrays with elements based on certain rules */
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);
console.log(longWords);

/* The sort() method sort the array by default but it's not very useful */
/* Thats why we need 1 or even better 2 parameters and comparing logic*/
let randomNumbers = [1, 101, 4, 567, 123, 10, 245, 900, 1001];
randomNumbers.sort();
console.log(randomNumbers)

/*.localeCompare is a special method that... */
let randomNames = ['Borislav', 'Ivan', 'Ivaylo', 'Maria', 'Peter', 'Ana'];
let someTextsSorted = randomNames.sort((a, b) => a.localeCompare(b));

console.log(someTextsSorted);
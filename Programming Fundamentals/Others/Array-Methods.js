/* All the required information about Methods is presented here. Everything must be learned! 

Arrays are special objects!
They have build in properties and methods like .length
Methods are written with a .dot at the end

Examples: */
let arr = [1, 2, 3];

/* Adds new value at the end of the array */
arr.push[4]; /* it will add the value 4 at the end of the array */
console.log(arr);

/* Check whether particular value is contained within an array */
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

/* This method deletes the last element of the array */
arrNew.pop()
console.log(arrNew);
console.log(arr2);

/* This method takes the array and prints it as a string. It is identical like the .join() method BUT it always separates the values
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

/* Removes the first element of the array and changes the array! */
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


/* The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
 keeping the original array unchanged, while the old method altered the original array. */
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);


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


/*
╔════════════╦═════════════════════════════════════════════════════════════════╦═══════╦══════════════════════════════════════════════════════╗
║   Method   ║ What & How (Fundamentals level)                                 ║ Mut.? ║ Example (before  → after)                             ║
╠════════════╬═════════════════════════════════════════════════════════════════╬═══════╬══════════════════════════════════════════════════════╣
║ map(fn)    ║ New array = fn applied to each element                          ║  No   ║ [1,'2','3'] → [1,2,3] (map(Number))                  ║
║ indexOf(v) ║ First index of v (or -1); 2nd arg = start index                 ║  No   ║ [3,9,3], indexOf(3,1) → 2                            ║
║ includes(v)║ True/false: does array contain v (2nd arg = start)              ║  No   ║ [5,7].includes(7) → true                             ║
║ splice()   ║ Remove/insert; returns removed; **changes array**               ║ Yes   ║ [5,10,59,30] splice(2,1) → [59]; arr → [5,10,30]     ║
║ filter(fn) ║ Keep elements where fn returns true → new array                 ║  No   ║ ['one','two','three'] len>3 → ['three']               ║
║ sort(cmp)  ║ In-place sort; cmp needed for numbers                           ║ Yes   ║ [101,4].sort((a,b)=>a-b) → [4,101]                   ║
║ localeComp ║ Use inside sort: a.localeCompare(b) for strings                 ║  -    ║ names.sort((a,b)=>a.localeCompare(b))                 ║
║ slice()    ║ Copy part/all; end not included                                 ║  No   ║ [6,111,222].slice(1,2) → [111]                       ║
╚════════════╩═════════════════════════════════════════════════════════════════╩═══════╩══════════════════════════════════════════════════════╝
*/


/* Keep doing while there is at least one that do not fulfill the requirement
   The some() method checks if some array values pass a test. */
arr.some();
let allOver18 = numbers.some((x) => x > 18);


/*The every() method checks if all array values pass a test.*/
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every((x) => x > 18);

/* The copyWithin() method copies array elements to another position in an array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array.
* */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // Copy to index 2, all elements from index 0:
fruits.copyWithin(2, 0, 2); // Copy to index 2, the elements from index 0 to 2:


/*The reduce() method does not reduce the original array. */
const numbers = [45, 4, 9, 16, 25];
let max = numbers.reduce((max, value) => value > max ? value : max); // Finding the biggest number
let sum = numbers.reduce((total, value) => total + value); // Summ all numbers


/*The Array.from() method returns an Array object from: */
let text = "ABCDEFG";
Array.from(text);
// Array.from() has an optional parameter which allows you to execute a function on each element of the new array:
const myNumbers = [1,2,3,4];
const myArr = Array.from(myNumbers, (x) => x * 2); // Returns all elements multiplied by 2


/*The Array.keys() method returns an Array Iterator object with the keys of an array. */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.entries(); // Create an Array Iterator, and then iterate over the key/value pairs:
const keys = fruits.keys(); //Create an Array Iterator object, containing the keys of the array:


/* the Array with() method as a safe way to update elements in an array without altering the original array. */
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March"); // New arr has "March" instead of "Mar" at index 2


/* The ... operator expands an array into individual elements. */
// It can also be used to copy an array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// The spread operator (...) can be used to pass arguments to a function:
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);


// The rest operator (...) allows us to destruct an array and collect the leftovers:
let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];
[a, b, ...rest] = arr1;
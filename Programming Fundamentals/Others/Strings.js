// .indexOf(substr) and .lastIndexOf - returns the first meeting of the given index
let str = "I am JavaScript Developer";
console.log(str.lastIndexOf('a'));

// .concat() the method concatenates strings together
let firstName = 'Ivan';
let lastName = 'Petrov';
let middleName = 'Dimitrov';
firstName = firstName.concat(' ' + middleName + ' ' + lastName);

console.log(firstName)

// .substring(num1, num2) - it prints the values of the index from num1 to num2(not inclusive)
let partOfStr = str.substring(10, 15);
console.log(partOfStr);

// .replace('value1', 'value2') - it replaces value1 with value 2
let newStr = str.replace('JavaScript', 'C#');
let newStr2 = str.replaceAall();
console.log(newStr);
console.log(newStr2)

// .split() - it splits the string the same way it splits the strings in the arrays. It can also split per a particular letter/symbol.
// This method .split() turns the string into an array.
let parts = firstName.split('t');
console.log(parts)

// .includes(value) - check if a given part is included within the particular string
let stringCheck = firstName.includes('Petrov');
console.log(stringCheck);

// .repeat(value) - we use it to make the program repeat something N times.
let testRepeat = 'a'.repeat(10);
console.log(testRepeat);

// .trim() .trimEnd() .trimStart() - it deletes white spaces within the string in certain areas
let trimmedText = '       Dimitar       Petrov       ';
trimmedText = trimmedText.trimEnd(); // var.trim();, var.trimStart();
console.log(trimmedText)

// .endsWith()  .startsWith() - check whether a string begins/ends with the characters of a specified substring
let text = 'My name is John';
console.log(text.endsWith('Dimitar'));  // var.endsWith();

// .pad(value1, value2) .padStart(value1, value2) .padEnd(value1, value2) - we fill a given Text with symbols of particular length
let someText = 'Ivaylo';
let padText = someText.padStart(20, '.'); // var.padEnd();
console.log(padText);

// .charAt() - returns a particular value of the string
let str2 = "Hello, JS"
let char = str2.charAt(2); // Expected output: l

// .at() - returns a particular value of the string
let char2 = str2.at(2) // Expected output: l

// The repeat() method returns a string with a number of copies of a string. The repeat() method returns a new string.
let text10 = "Hello world!";
let results = text10.repeat(2);

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).


/* Принтира ASCI кода на буквата 'а'*/
let char1 = 'a';
let asciCode1 = char1.charCodeAt();
console.log(asciCode1);

/* */
let newVariable = 'Total';
newVarialbe.replace();



/* It deletes properties and values from an object */
let person = {
    name: 'Ivan',
    age: 25,
    email: 'ivan@vankata.com'
};
// Objects properties and values can be defined differently!

/* Deleting items from an object */
delete person['name']; // It will delete the key name from the object.


/* With the Object. method we can call all they keys of the object */
let allKeys = Object.keys(person); // Print all the keys of the object
console.log(allKeys);

let allValues = Object.values(person); // Print all values of the object
console.log(allValues);

let allEntries = Object.entries(person); // Array with all properties
console.log(allEntries);

// Using the hasOwnProperty command - it checks whether the object already has a particular property //
let store = {
    product: 'Coca Cola'
};
store.hasOwnProperty(product) // we need to run a loop or if/else statement

/*   < JSON - JavaScript Object Notation >      */
/* File format that transfers data objects - used by all languages
JSON is language independent
JSON is self describing, and exchange data between browser and server.
JSON is much lighter than XML format.
JavaScript has built-in functions to parse JSON so it's easy to use.
JSON uses human-readable text to transmit data
 */

let dataJson = JSON.stringify(someData);
let parsedData = JSON.parse(dataJson);

// Functions are not allowed in JSON!

/*   < Classes - Templates for creating objects > */
// Classes define structure and behaviour


/* All the following loops basically do the same thing */
function solve(city) {

    /* Variant 1 */
    let keys = Object.keys(city);

    for (let key of keys) {
        console.log(key, '->', city[key]);
    }

    /* Variant 2 */
    for (let key in city) {
        console.log(key, '->', city[key]);
    }

    /* Variant 3 */
    for (let entry of Object.entries(city)) {
        console.log(entry[0], '->', entry[1]);
    }

    /* Variant 4 */
    for (let [key, value] of Object.entries(city)) {
        console.log(key, '->', value);
    }
};

solve({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000" });
/* End */


/* Cloning objects - there are 2 ways to do that! */
let personOne = {
    name: 'Ivo',
    age: 34,
    dogs: [{name: 'Valeka', age: 1}, {name: 'Lasi', age: 2}]
};

// Variant 1 - Deep Copy (the better one):
let secondPerson = JSON.parse(JSON.stringify(person));

// Variant 2 - Shadow Copy:
let thirdPerson = Object.assign({}, person);

person.dogs[0].name = 'Karma';

console.log(person.dogs[0].name);
console.log(secondPerson.dogs[0].name);
/* End */


/* A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. The values can be of any
 type, primitive values or objects.
 1. Passing an array to new Set()
 2. Create an empty set and use add() to add values
 */
// Create a Set
const letters = new Set(["a","b","c"]);


/* A Map object holds key-value pairs where the keys can be any datatype. A Map also remembers the original insertion
 order of the keys.
 1. Passing an Array to new Map()
 2. Create a Map and use Map.set()
 */
// Create a Set
const letters = new Set(["a","b","c"]);



















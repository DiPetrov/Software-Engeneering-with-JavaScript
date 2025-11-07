/* */
// Object.fromEntries()

/* Store unique values of any type, whether primitive values or object references. Set objects are collections of values. */
// Set can be iterated with a for of loop!
let set = new Set([1, 2, 3, 4, 5]);
console.log(set)
set.add(7); // Adds one new value at the end of the set.
console.log(set)
console.log(set.has(1)); // Returns "true".
console.log(set.size); // Checks the size of the set.
set.delete(3) // Permanently delete the value "3".
console.log(set)
console.log(set.delete(2)) // Alternative way to delete a value - it returns a boolean, if true - value will be deleted.
console.log(set)
set.clear(); // Deletes all the elements.


/* Object as associative array */
let objMap = {};
objMap['Ivaylo'] = '088888888';


/* Map holds elements with keys and values like the object, but it has some tiny differences. */
/* Map is iterated through for of loop like the set */
/* Map can use all kind of type of data as keys, while objects use only strings! */
/* Map was introduced with the goal to implement a real associative array in JS. Originally JS has no associative array
build in! Up to ES2015 classic Objects were used as associative arrays - led to bad practices. */
let map = new Map();

map.set('Ivaylo', '08888888'); // Adds a  Key and a Value in the Map.
map.set('Maria', '08888999');
map.set('Nikolay', '08888777');

let mapValue = map.get('Ivaylo'); // Returns the value that is attached to the Key.
console.log(mapValue)
console.log(map)
console.log(map.has('Maria')); // Checks whether the Map holds the key 'Maria'.
console.log(map.keys()); // Returns an iterator.
console.log(map.entries()); // Returns an iterator.
console.log(map.size); // Print the numbers of entries of the map.
console.log(map.delete('Ivaylo')); // Returns a boolean, if true - the key/value pair is deleted.
map.clear(); // Delete all the elements
let result = Map.groupBy(fruits, myCallback); // The Map.groupBy() method groups elements of an object according to
                                              // string values returned from a callback function.


/* Transforming an object into an array */
let grades = {
    'Ivan': 3.5,
    'Dimitar': 6,
    'Penka': 5
}

let arr = Object.entries(grades); // Returns array
let newArr2 = Array.from(grades); // Returns an array from the map


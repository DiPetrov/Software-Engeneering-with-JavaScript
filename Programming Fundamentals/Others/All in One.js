/**
 * JAVASCRIPT MASTER CHEAT SHEET
 * Prepared for: Dimitar
 * Author: Senior Software Engineer (Gemini)
 * Usage: Copy specific sections into separate .js files in WebStorm.
 */

/* ==========================================================================
   SECTION 1: ARRAY METHODS (The Powerhouse)
   Filename suggestion: arrays.js
   ========================================================================== */

const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
const numbers = [10, 20, 30, 40, 50];

// --- MUTATING METHODS (These CHANGE the original array) ---

/**
 * .push(item1, item2, ...)
 * Adds items to the END.
 * Returns: The new length of the array.
 */
let count = users.push("Frank", "Grace");
console.log(users); // ["Alice", ..., "Frank", "Grace"]

/**
 * .pop()
 * Removes the LAST item.
 * Returns: The removed item.
 */
let lastUser = users.pop();

/**
 * .unshift(item1, item2, ...)
 * Adds items to the BEGINNING.
 * Returns: The new length.
 */
numbers.unshift(0, 5); // [0, 5, 10, 20...]

/**
 * .shift()
 * Removes the FIRST item.
 * Returns: The removed item.
 */
let firstNum = numbers.shift();

/**
 * .splice(start, deleteCount, item1, item2...)
 * The Swiss Army Knife. It removes elements and/or adds new ones.
 * Param 1: Start index.
 * Param 2: How many to delete (optional).
 * Param 3+: Items to insert (optional).
 */
const colors = ["Red", "Green", "Blue"];
// Go to index 1, delete 0 items, insert "Yellow"
colors.splice(1, 0, "Yellow");
console.log(colors); // ["Red", "Yellow", "Green", "Blue"]

/**
 * .sort(compareFunction)
 * Sorts in place.
 * ⚠️ Crucial: By default converts to string! For numbers, you MUST provide a function.
 */
const randomNums = [100, 5, 25];
// Compare function: if (a-b) is negative, a comes first.
randomNums.sort((a, b) => a - b);
console.log(randomNums); // [5, 25, 100]

/**
 * .copyWithin(target, start, end)
 * Copies part of an array to another location in the same array.
 */
const letters = ["a", "b", "c", "d", "e"];
// Copy to index 0, take elements starting from index 3
letters.copyWithin(0, 3);
console.log(letters); // ["d", "e", "c", "d", "e"]


// --- ACCESSOR / ITERATION METHODS (Do NOT change original) ---

/**
 * .slice(start, end)
 * returns a shallow copy of a portion of an array.
 * Param 2 (end) is NOT inclusive.
 */
const topThree = users.slice(0, 3); // Indices 0, 1, 2

/**
 * .map(callback)
 * Transforms every element. Returns a NEW array of same length.
 */
const prices = [10, 20, 30];
const taxed = prices.map(price => price * 1.2);

/**
 * .filter(callback)
 * Returns a NEW array with only elements that pass the test.
 */
const expensive = prices.filter(price => price > 15);

/**
 * .reduce(callback, initialValue)
 * ⚠️ MOST IMPORTANT METHOD.
 * Collapses an array into a single value (number, object, string).
 * Param 1: Callback (accumulator, currentValue)
 * Param 2: Initial Value (Start the accumulation here)
 */
const sum = numbers.reduce((total, current) => {
    return total + current;
}, 0); // <--- 0 is the initialValue parameter

// Advanced Reduce Example: Counting occurrences
const votes = ["Yes", "No", "Yes", "Yes", "No"];
const voteCount = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {}); // <--- {} (Empty object) is initial value
console.log(voteCount); // { Yes: 3, No: 2 }

/**
 * .indexOf(item, startFrom)
 * Returns index or -1.
 * Param 2: Index to start searching from (Optional).
 */
const glossary = ["SEO", "SEM", "PPC", "SEO"];
console.log(glossary.indexOf("SEO", 1)); // 3 (Skips the first one)

/**
 * .includes(item, startFrom)
 * Returns true/false.
 * Param 2: Index to start searching from.
 */
console.log(glossary.includes("PPC", 2)); // true

/**
 * .find(callback)
 * Returns the FIRST element that matches (or undefined).
 */
const found = numbers.find(n => n > 25); // 30


/* ==========================================================================
   SECTION 2: STRING METHODS
   Filename suggestion: strings.js
   ========================================================================== */

let text = "  Digital Marketing Specialist  ";

/**
 * .split(separator, limit)
 * Turns string to array.
 * Param 2: Limit (Optional) - max number of splits.
 */
const words = text.trim().split(" ", 2); // ["Digital", "Marketing"]

/**
 * .substring(start, end) vs .slice(start, end)
 * Very similar. Slice is generally preferred as it handles negative numbers (counting from end) better.
 */
let str = "JavaScript";
console.log(str.slice(-6)); // "Script" (Last 6 chars)
console.log(str.substring(0, 4)); // "Java"

/**
 * .replace(searchValue, newValue)
 * Only replaces the FIRST occurrence unless regex is used.
 */
let message = "Visit Microsoft. Microsoft is big.";
let newMsg = message.replace("Microsoft", "Google"); // Only first changes
let allMsg = message.replaceAll("Microsoft", "Google"); // All change (ES2021)

/**
 * .padStart(targetLength, padString) / .padEnd()
 * Great for formatting IDs or dates.
 */
let id = "5";
console.log(id.padStart(3, "0")); // "005"

/**
 * .localeCompare(compareString)
 * Essential for sorting strings correctly (handling accents, etc).
 * Returns: -1, 1, or 0.
 */
let names = ["Änne", "Anne", "Bert"];
names.sort((a, b) => a.localeCompare(b));


/* ==========================================================================
   SECTION 3: OBJECTS & JSON
   Filename suggestion: objects.js
   ========================================================================== */

const person = {
    name: "Dimi",
    role: "Expert",
    stats: { xp: 30 }
};

/**
 * Object.keys(obj) -> Array of keys
 * Object.values(obj) -> Array of values
 * Object.entries(obj) -> Array of [key, value] pairs
 */
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

/**
 * JSON.stringify(value, replacer, space)
 * Param 2: Replacer (function to filter properties - optional)
 * Param 3: Space (indentation for pretty printing)
 */
const jsonString = JSON.stringify(person, null, 2);

/**
 * Object.assign(target, source1, source2)
 * Copies properties.
 */
const target = { a: 1 };
const source = { b: 2 };
const combined = Object.assign(target, source); // {a:1, b:2}
// Note: Spread syntax {...source} is often preferred nowadays.


/* ==========================================================================
   SECTION 4: SETS AND MAPS (Collections)
   Filename suggestion: collections.js
   ========================================================================== */

// --- SETS (Unique Values only) ---
let mySet = new Set([1, 2, 2, 3]); // Stores {1, 2, 3}
mySet.add(4);
mySet.delete(1);
console.log(mySet.has(2)); // true
// Convert back to array:
let uniqueArray = [...mySet];

// --- MAPS (Key-Value pairs, but Keys can be ANYTHING) ---
let myMap = new Map();
const keyObj = { id: 1 };

// .set(key, value)
myMap.set("name", "Dimi");
myMap.set(keyObj, "Object as Key!");

// .get(key)
console.log(myMap.get(keyObj)); // "Object as Key!"

// .has(key) / .delete(key) / .size
console.log(myMap.size); // 2


/* ==========================================================================
   SECTION 5: MATH
   Filename suggestion: math.js
   ========================================================================== */

/**
 * Rounding methods
 */
Math.round(4.5); // 5 (Nearest)
Math.ceil(4.1);  // 5 (Always Up)
Math.floor(4.9); // 4 (Always Down)
Math.trunc(4.9); // 4 (Cuts off decimal)

/**
 * Math.random()
 * Returns float between 0 and 1.
 * Standard formula for random integer between min and max:
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Math.max / Math.min
 * Accepts a list of arguments. Use spread operator for arrays.
 */
const nums = [5, 10, 1];
console.log(Math.max(...nums)); // 10


/* ==========================================================================
   SECTION 6: REGEX (Regular Expressions)
   Filename suggestion: regex.js
   ========================================================================== */

// Pattern: 4 digits, hyphen, 2 digits, hyphen, 2 digits
const datePattern = /\d{4}-\d{2}-\d{2}/g;
const textData = "Event on 2025-11-19 and 2025-12-01";

/**
 * .test(string) -> Boolean
 * Belongs to the Regex Object. Fastest check.
 */
console.log(datePattern.test(textData)); // true (Note: advances cursor if global flag is on)

/**
 * .match(regex) -> Array
 * Belongs to the String Object.
 */
const matches = textData.match(datePattern);
console.log(matches); // ['2025-11-19', '2025-12-01']

/**
 * .exec(string) -> Detailed Array (one by one)
 * useful for capturing groups.
 */
const groupPattern = /(\d{4})-(\d{2})/; // Capture Year and Month
const result = groupPattern.exec("2025-11");
console.log(result[0]); // "2025-11" (Full match)
console.log(result[1]); // "2025" (Group 1)
console.log(result[2]); // "11" (Group 2)
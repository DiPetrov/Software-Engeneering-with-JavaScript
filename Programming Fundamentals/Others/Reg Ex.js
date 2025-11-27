/* --- Predefined Classes --- */
'\w' - /* looks for all capital/small letter and numbers */
'\W' - /* Matches any non word characters */
'\s'   /* Matches any whitespace - all kind of white space */
'\S' - /* Matches anything but whitespace - all kind of data */
'\d' - /* Matches all digits */
'\D' /* Matches anything but digits */

/* ---Basic Quantifiers --- */
// The '+' symbol to the fron \+ is optional!

'\+\d+' '+' /* matches the previous element one or more times */
'\+\d*' '*' /* matches the previous element zero or more times */
'\+\d?' '?' /* matches the previous element zero or one times */
'\+\d{3}'  '{3, 5}' '{}' /* matches the exact amount of elements (length of the integer/word) that needs to be catched */

/* Importants */
^ /* Means a negation */

/* Other useful RexEx patterns */
'[0-9]+' // matches non-empty sequence of digits
'[A-Z][a-z]*' // matches a capital + small letters

/* Grouping Constructs */
'() (subexpression)' /* Captures the matched subexpression as a group */
'?: (?:subexpression)' /* Defines a non-capturing group */
'?<> (?<name>subexpression)' // Defines a named capturing group - give the group a name
'|' /* equals to || in Programming

/* ---Backreferrences--- */
'\number' – matches the value of a numbered capture group

/* --- RexEx in JavaScript --- */
// In JS you construct a regular expression in one of two ways:
// ▪ Regular Expression Literal
// ▪ The constructor function RegExp

/* --- Method for RegEx in JavaScript --- */

/* The method .test(variable) */

'test(string)' // Determines whether there is a match
let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regexp.test(text);

/* The method variable.match(regexp) */
'(regexp)' // Returns an array of all matches (strings)
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regexp);

/* The method .match(regexp) */
'match(regexp)' // Returns an array of all matches (strings)
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regexp);

/* The method regexp.exec(variable) */
'exec(string, text)' // Works with a pointer and returns the groups
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regexp.exec(text);
let secondMatch = regexp.exec(text);

/* The method .matchAll(regexp) */
'matchAll(regexp)' // Returns an iterator of all results matching a string against a regular expression, including capturing groups
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];

/* The method .split(regexp) */
'(regexp)' // Splits the text by the pattern, Returns an array of strings
let text = '1 2 3 4';
let regexp = /\s+/g;
let result = text.split(regexp);

const regexTable = `
===========================================
| Class | Matches                         |
===========================================
| \\w    | word character                  |
| \\W    | non-word char                   |
| \\s    | whitespace char                 |
| \\S    | non-whitespace char             |
| \\d    | digit [0-9]                     |
| \\D    | non-digit character             |
| \\b    | border between words            |
| ^     | start of text                   |
| $     | end of text                     |
===========================================

===========================================
| Pattern        | Matches                 |
===========================================
| \\w+           | 1 or more word chars     |
| \\W*           | 0 or more non-word chars |
| \\w{2,5}       | 2...5 word chars         |
| \\s+           | 1 or more whitespaces    |
| \\d{1,3}       | 1, 2 or 3 digits         |
| [A-Z][a-z]*    | word w/ capital first ch |
| [a-zA-Z0-9]+   | alpha-numeric sequence   |
| ^[A-Za-z]+$    | only letters, non-empty  |
| ^[0-9]+$       | only digits, non-empty   |
===========================================
`;

/*
/i – ignore character casing
/g – global search (find all matches)
/m – multi-line matching
*/

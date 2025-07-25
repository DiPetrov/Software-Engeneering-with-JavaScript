function sortNumbers(a, b, c) {
    if (a < b) { let temp = a; a = b; b = temp; }
    if (a < c) { let temp = a; a = c; c = temp; }
    if (b < c) { let temp = b; b = c; c = temp; }
    console.log(a);
    console.log(b);
    console.log(c);
}

// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);
// sortNumbers(7, 6, 5);
sortNumbers(2, 2, 3);
sortNumbers(3,2,2)
sortNumbers(2,3,2);
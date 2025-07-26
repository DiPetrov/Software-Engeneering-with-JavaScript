function smallestNumber(a, b, c) {

    function findSmallestNumber(x, y) {
        if (x <= y) {
            return x;
        } else {
            return y;
        }
    }

    /* Variant 1 */
    let temp_result = findSmallestNumber(a, b);
    let result = findSmallestNumber(temp_result, c);

    /* Variant 2 */
    // let result = findSmallestNumber(findSmallestNumber(a, b), c);

    console.log(result)
}

smallestNumber(9, 8, 7);


// smallestNumber(600, 342, 123);
// smallestNumber(25, 21, 4);
// smallestNumber(2, 2, 2);


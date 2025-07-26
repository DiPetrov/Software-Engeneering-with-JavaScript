function smallestNumber(a, b, c) {

    function findSmallestNumber(x ,y) {

        if (x < y) {
            return x;
        } else {
            return y;
        }
    }

    let temp_result = findSmallestNumber(a, b);
    let finalResult = findSmallestNumber(temp_result, c);
    return finalResult;
}

smallestNumber(2, 5, 3);
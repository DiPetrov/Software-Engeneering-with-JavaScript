function addAndSubtract(a, b, c) {
    function sum (x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    let sumResult = sum(a, b);
    let finalResult = substract(sumResult, c);
    console.log(finalResult);

    // let result = substract(sum(a, b), c);
    // console.log(result)
}

addAndSubtract(23, 6, 10);
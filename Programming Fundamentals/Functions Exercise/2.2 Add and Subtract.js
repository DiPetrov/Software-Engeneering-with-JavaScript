function addAndSubtract(a, b, c) {

    function sum(x, y) {
        return x + y;
    }

    let sumResult = sum(a, b);

    function subtract(x, y) {
        return x - y;
    }

    let finalResult = subtract(sumResult, c);
    return finalResult;

}
addAndSubtract(23, 6, 10);
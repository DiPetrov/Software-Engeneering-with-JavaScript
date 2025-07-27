function factorialDivision(a, b) {
    function calculateFactorial(x) {
        let factor = x;
        for (let i = x -1 ; i > 0; i--) {
             factor *= i;
        }
        return factor;
    }

    function division(x, y) {
        return x / y;
    }
    let temp_result1 = calculateFactorial(a);
    let temp_result2 = calculateFactorial(b);
    let finalResult = division(temp_result1, temp_result2);

    console.log(finalResult);
}

factorialDivision(5, 2);



















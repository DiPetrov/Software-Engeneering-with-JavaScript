function factorialDivision(a, b) {
    function calculateFactorial(x) {
        let factor = x;
        for (let i = x -1 ; i > 0; i--) {
             factor *= i;
        }
        return factor;
    }

    // function division(x, y) {
    //     let result = x / y;
    //     return result;
    // }
    let temp_result1 = calculateFactorial(a);
    let temp_result2 = calculateFactorial(b);
    let finalResult = temp_result1 / temp_result2;

    console.log(finalResult.toFixed(2));

}

factorialDivision(5, 2);
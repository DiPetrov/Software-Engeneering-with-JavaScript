function oddAndEvenSum(a) {

    function sumEvenNumbers(x) {
        let sumEven = 0;
        let numberToString = String(x);
        for (let i = 0; i < numberToString.length; i++) {
            let even = Number(numberToString[i]);
            if (even % 2 === 0) {
                sumEven += even;
            }
        }
        return sumEven;
    }

    function sumOddNumbers(x) {
        let sumOdd = 0;
        let numberToString = String(x);
        for (let i = 0; i < numberToString.length; i++) {
            let odd = Number(numberToString[i]);
            if (odd % 2 !== 0) {
                sumOdd += odd;
            }
        }
        return sumOdd;
    }

    let evenResult = sumEvenNumbers(a);
    let oddResult = sumOddNumbers(a);

    console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
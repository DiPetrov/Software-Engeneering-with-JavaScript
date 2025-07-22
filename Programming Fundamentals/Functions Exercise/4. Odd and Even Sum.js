function oddAndEven(n) {
    function extractEven(num) {
        let result = [];
        do {
            let lastNumber = num % 10;
            if (lastNumber % 2 === 0) {
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        } while (num > 0);
        return result;

    }

    function extractOdd(num) {
        let result = [];
        do {
            let lastNumber = num % 10;
            if (lastNumber % 2 > 0) {
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        } while (num > 0);
        return result;
    }

    function sumArray(arr) {
        let result = [0];
        for (let i = 0; i <arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    let odd = extractOdd(n);
    let even = extractOdd(n);
    let oddSum = sumArray(odd);
    let evenSum = sumArray(even);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum} `)

}

oddAndEven(1000435);
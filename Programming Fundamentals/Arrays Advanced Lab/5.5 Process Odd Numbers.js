function processOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (i % 2 !== 0) {
            currentNumber *= 2;
            result.push(currentNumber);
        }
    }

    console.log(result.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
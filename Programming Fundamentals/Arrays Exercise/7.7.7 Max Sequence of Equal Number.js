function solve(arr) {

    let currentLength = 1;
    let currentIndex = 0;

    let maxLength = 1;
    let maxStartIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i];
        let previousNumber = arr[i - 1];

        if (currentNumber === previousNumber) {
            currentLength++;
            maxStartIndex = i;
        } else {
            currentLength = 1;
            currentIndex = i;
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStartIndex = currentIndex;
        }
    }

    let result = [];
    for (let i = 0; i < maxLength; i++) {
        result.push(arr[maxStartIndex]);
    }
    console.log(result.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
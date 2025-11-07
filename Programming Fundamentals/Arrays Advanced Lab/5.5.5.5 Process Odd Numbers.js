function solve(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i]
        if (i % 2 !== 0) {
            currentNumber *= 2;
            newArr.push(currentNumber);
        }
    }

    for (let j = 0; j < newArr.length / 2; j++) {
        let reversedIndex = newArr.length - 1 - j;
        let tempVar = newArr[j];
        newArr[j] = newArr[reversedIndex];
        newArr[reversedIndex] = tempVar;
    }
    console.log(newArr.join(' '));
}

solve([10, 15, 20, 25]);
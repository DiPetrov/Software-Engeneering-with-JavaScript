function solve(input) {

    let result = 0;
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let topInteger = false;

        if (i === input.length - 1) {
            topInteger = true;
        }

        for (let j = i + 1; j < input.length; j++) {
            let rightNumber = input[j]
            if (currentNumber > rightNumber) {
                topInteger = true;
            } else {
                topInteger = false;
                break;
            }
        }

        if (topInteger) {
            result = currentNumber;
            newArr.push(currentNumber);
        }
    }
    console.log(newArr.join(' '));
}

solve([27, 19, 42, 2, 13, 45, 48]);
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
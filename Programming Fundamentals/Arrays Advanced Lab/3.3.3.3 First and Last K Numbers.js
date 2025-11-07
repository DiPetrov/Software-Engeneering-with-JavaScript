function solve(arr) {

let numberK = arr.shift();
let firstKArr = [];
let lastKArr = [];

    for (let i = 0; i < numberK; i++) {
        let currentNumber = arr[i];
        firstKArr.push(currentNumber);

        let lastNumber = arr[arr.length - numberK + i];
        lastKArr.push(lastNumber);
    }

    console.log(firstKArr.join(' '));
    console.log(lastKArr.join(' '));
}

// solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
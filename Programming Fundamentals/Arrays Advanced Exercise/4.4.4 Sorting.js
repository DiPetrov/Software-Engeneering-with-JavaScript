function solve(arr) {

    arr = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let currentSmallNumber = arr[i];
        let currentBigNumber = arr[arr.length - 1 - i];

        result.push(currentBigNumber, currentSmallNumber);
    }

    if (arr.length % 2 !== 0) {
        result.push(arr[Math.floor(arr.length / 2)]);
    }
    console.log(result.join(' '))

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 900]);
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47,]);

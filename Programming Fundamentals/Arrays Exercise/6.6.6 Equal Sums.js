function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let equalSums = false;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        for (let j = i - 1; j >= 0; j--) {
            let leftNumber = arr[j];
            leftSum += leftNumber;
        }

        for (let k = i + 1; k < arr.length; k++) {
            let rightNumber = arr[k];
            rightSum += rightNumber;
        }

        if (i - 1 < 0) {
            leftSum = 0;
        }

        if (i + 1 >= arr.length) {
            rightSum = 0;
        }

        if (leftSum === 0 && rightSum === 0) {
            console.log(0)
            return;
        }

        if (leftSum === rightSum) {
            console.log(i)
            equalSums = true;
        }

        leftSum = 0;
        rightSum = 0;
    }

    if (equalSums === false) {
        console.log("no");
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
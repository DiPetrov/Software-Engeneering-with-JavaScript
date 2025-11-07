function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let duplicateNumber = arr[j];

            if (currentNumber === duplicateNumber) {
                let currentIndex = arr.indexOf(duplicateNumber, i + 1);
                arr.splice(currentIndex, 1);
                j--;
            }
        }
    }
    console.log(arr.join(' '));
}


solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);
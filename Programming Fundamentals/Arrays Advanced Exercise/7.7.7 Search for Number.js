function solve(arr1, arr2) {

    let numbersToTake = arr2[0];
    let numberToDelete = arr2[1];
    let numberAfterManipulations = arr2[2];

    let newArr = arr1.slice(0, numbersToTake);
    newArr.splice(0, numberToDelete);

    let counter = 0;
    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] === numberAfterManipulations) {
            counter++;
        }
    }

        console.log(`Number ${numberAfterManipulations} occurs ${counter} times.`);

}

solve([5, 2, 3, 4, 1, 6],
      [5, 2, 3]);

solve([7, 1, 5, 8, 2, 7],
      [3, 1, 5]);
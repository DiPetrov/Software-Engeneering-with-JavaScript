function firstAndLastKNumbers(arr) {

    let firstKArr = [];
    let lastKArr = [];
    let kNumber = arr.shift();

    for (let i = 0; i < kNumber; i++) {
        let currentElement = arr[i];
        firstKArr.push(currentElement);
    }

    console.log(firstKArr.join(' '));

    for (let i = 0; i < kNumber; i++) {
        let currentElement = arr[arr.length - kNumber + i];
        lastKArr.push(currentElement);
    }

    console.log(lastKArr.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
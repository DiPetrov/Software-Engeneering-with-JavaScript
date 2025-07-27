// let numbers = [1, 2, 3, 4, 5];
//
// numbers.push(6);
// numbers.push(7);
//
// console.log(numbers)
//
// let lastNumber = numbers.pop();
// console.log(lastNumber)
// console.log(numbers)
//
// numbers.unshift(0);
// numbers.unshift(-1);
// console.log(numbers)
//
// numbers.shift();
// console.log(numbers)

// number = [10, 2, 3, 4, 5, 6, 10];

// let newNumber = number.includes(111);
// console.log(newNumber)

// console.log(number.indexOf(3));
// console.log(number)
// let newNumber = number.splice(1, 2);
// console.log(number)
// console.log(newNumber)

function solve(arr) {

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

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
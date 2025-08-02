let manipulatedArr = arr
    .shift()
    .split(' ')
    .map(Number);

for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let currentCommand = currentElement.split(' ')[0];
    let currentNumber = Number(currentElement.split(' ')[1]);
    let currentIndex = Number(currentElement.split(' ')[2]);

    switch(currentCommand) {
        case 'Add':
            manipulatedArr.push(currentNumber);
            break;
        case 'Remove':
            while(manipulatedArr.includes(currentNumber) !== false) {
                let currentNumberIndex = manipulatedArr.indexOf(currentNumber, 0);
                manipulatedArr.splice(currentNumberIndex, 1);
            }
            break;
        case 'RemoveAt':
            manipulatedArr.splice(currentNumber, 1);
            break;
        case 'Insert':
            manipulatedArr.splice(currentIndex, 0, currentNumber);
            break;
        default:
            console.log(`Invalid command!`)
    }
}

console.log(manipulatedArr.join(' '));
}

smallestTwoNumbers(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

smallestTwoNumbers(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);
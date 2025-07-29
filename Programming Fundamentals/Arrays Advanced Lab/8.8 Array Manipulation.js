function arrayManipulation(arr) {
let newArr = arr
    .shift()
    .split(' ')
    .map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum]
            = arr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch(command) {
            case "Add":
                newArr.push(firstNum);
                break;
            case "Remove":
                newArr = newArr.filter(x => x !== firstNum);
                break;
            case "RemoveAt":
                newArr.splice(firstNum, 1);
                break;
            case "Insert":
                newArr.splice(secondNum, 0, firstNum)
                break;
            default:
                console.log(`Not a valid command!`)
        }
    }

    console.log(newArr.join(' '));
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

arrayManipulation(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2'])
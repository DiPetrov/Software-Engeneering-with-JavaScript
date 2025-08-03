function arrayModifier(arr) {

    let integerArr = arr[0].split(' ').map(Number);
    arr.shift();
    let index = 0;
    let command = arr[index];

    while (command !== 'end') {
        let [currentCommand, indexOne, indexTwo] = command.split(' ');
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        if (currentCommand === 'swap') {
            // let positionIndexOne = indexOne;
            // let positionIndexTwo = indexTwo;
            // let secondNumberSaved = integerArr[indexOne];
            // integerArr.splice(positionIndexOne, 1, integerArr[indexTwo]);
            // integerArr.splice(positionIndexTwo, 1, secondNumberSaved);
            //                             Alternative Solution
            [integerArr[indexOne], integerArr[indexTwo]] = [integerArr[indexTwo], integerArr[indexOne]];
        } else if (currentCommand === 'multiply') {
            integerArr[indexOne] *= integerArr[indexTwo];

        } else if (currentCommand === 'decrease') {
            // integerArr = integerArr.map(x => x - 1);
            //                                 Alternative solution
            for (let i = 0; i < integerArr.length; i++) {
                integerArr[i] = integerArr[i] - 1;
        }
        }
        index++;
        command = arr[index];
    }

    console.log(integerArr.join(', '));
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);

arrayModifier(['1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);
function arrayManipulator(arrIntegers, arrCommands) {

    for (let i = 0; i < arrCommands.length; i++) {
        let currentCommand = arrCommands[i];
        let currentNumber = Number(currentCommand.split(' ')[2]);
        let currentIndex = Number(currentCommand.split(' ')[1]);
        let cmd = currentCommand.split(' ');
        let numbersToInsert = cmd.slice(2).map(Number);
        let command = currentCommand.split(' ')[0];

        if (command === 'add') {
            arrIntegers.splice(currentIndex, 0, currentNumber);

        } else if (command === 'addMany') {
            arrIntegers.splice(currentIndex, 0, ...numbersToInsert);

        } else if (command === 'contains') {
            console.log(arrIntegers.indexOf(currentIndex));

        } else if (command === 'remove') {
            arrIntegers.splice(currentIndex, 1);

        } else if (command === 'shift') {
            for (let j = 0; j < currentIndex; j++) {
                let currentShift = arrIntegers.shift();
                arrIntegers.push(currentShift);
            }

        } else if (command === 'sumPairs') {

            let tempArr = [];
            for (let k = 0; k < arrIntegers.length; k+=2) {
                let firstNumber = arrIntegers[k];
                let secondNumber = arrIntegers[k+1] !== undefined ? arrIntegers[k + 1] : 0;
                tempArr.push(firstNumber + secondNumber);
            }
            arrIntegers = tempArr;

        } else if (currentCommand.includes('print')) {
            console.log('[ ' + arrIntegers.join(', ') + ' ]');
            return;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3","print"]);
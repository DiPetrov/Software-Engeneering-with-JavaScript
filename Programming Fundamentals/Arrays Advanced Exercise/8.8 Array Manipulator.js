function solve(elements, commands) {

    for (let i = 0; i < commands.length; i++) {
       let command = commands[i].toString().split(' ')[0];
       let index = Number(commands[i].toString().split(' ')[1]);
       let element = Number(commands[i].toString().split(' ')[2]);

        switch(command) {
            case 'add':
            elements.splice(index, 0, element)
                break;
            case 'addMany':
            let many = commands[i].split(' ');
            many.shift();
            many = many.map(Number);

            for (let j = many.length - 1; j > 0; j--) {
                elements.splice(index, 0, many[j]);
            }
                break;
            case 'contains':
                if (elements.includes(index)) {
                    console.log(elements.indexOf(index));
                } else {
                    console.log(-1);
                }
                break;
            case 'remove':
                if (index >= 0 && index < elements.length) {
                    elements.splice(index, 1);
                }
                break;
            case 'shift':
            for (let j = 0; j < index; j++) {
                let tempElement = elements.shift();
                elements.push(tempElement);
            }
                break;
            case 'sumPairs':
                let tempArr = [];

            for (let j = 0; j < elements.length - 1; j+=2) {

                tempArr.push(elements[j] + elements[j + 1]);

            }
                if (elements.length % 2 !== 0) {
                    tempArr.push(elements[elements.length - 1]);
                }

                elements = tempArr;
                break;
            case 'print':
                console.log('[ ' + elements.join(', ') + ' ]');
                return;
            default:
                console.log('Invalid command!');
        }
    }
}

solve([1, 2, 4, 5, 6, 7],
      ['add 1 8', 'contains 1', 'contains 3', 'print']);

solve([1, 2, 3, 4, 5],
      ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

solve([2, 2, 4, 2, 4],
      ["add 1 4", "sumPairs", "print"]);

solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
      ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
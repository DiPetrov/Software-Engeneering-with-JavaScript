function wordDeveloping(data) {

    let idx = 0;
    let command = data[idx];
    let newString = '';

    while (command !== 'End') {
        let currentCommand = command.split(' ')[0];
        let valueOne = command.split(' ')[1];

        switch (currentCommand) {
            case 'Add':
                let temp_Value = command.substring(4);
                newString += temp_Value;
                break;

            case 'Upgrade':
                if (valueOne && valueOne.length === 1) {
                    let target = valueOne;
                    let nextChar = String.fromCharCode(target.charCodeAt(0) + 1);
                    let built = '';
                    for (let i = 0; i < newString.length; i++) {
                        let char = newString[i];
                        if (char === target) {
                            built += nextChar;
                        } else {
                            built += char;
                        }
                    }
                    newString = built;
                }
                break;
            case 'Print':
                console.log(newString);
                break;

            case 'Index':
                let lookForIndex = valueOne;
                let result = [];
                for (let i = 0; i < newString.length; i++) {
                    if (newString[i] === lookForIndex) {
                        result.push(i);
                    }
                }
                if (result.length === 0) {
                    console.log('None');
                } else {
                    console.log(result.join(' '));
                }
                break;

            case 'Remove':
                let subStr = command.substring(7);
                if (subStr !== '') {
                    while (newString.indexOf(subStr) !== -1) {
                        let position = newString.indexOf(subStr);
                        newString = newString.slice(0, position) + newString.slice(position + subStr.length);
                        if (position != newString) {

                        }
                    }
                }
                break;

            default:
                console.log('Error');
         }

        idx++;
        command = data[idx];
    }

}

wordDeveloping(["Add University", "Print", "Upgrade n", "Print", "Index i", "Remove sity", "Print", "End"]);

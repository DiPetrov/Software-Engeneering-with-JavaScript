function booksWorld(input) {

    let oldGenresArr = input[0].split(' | ');
    let index = 1;
    let command = input[index];

    while(command !== 'Stop!') {
        let currentCommand = command.split(' ')[0];
        let firstValue = command.split(' ')[1];
        let secondValue = command.split(' ')[2];

        switch (currentCommand) {
            case 'Join':
                if (!oldGenresArr.includes(firstValue)) {
                    oldGenresArr.push(firstValue);
                }
                break;
            case 'Drop':
                if (oldGenresArr.includes(firstValue)) {
                    oldGenresArr.splice(oldGenresArr.indexOf(firstValue), 1);
                }
                break;
            case 'Replace':
                if (oldGenresArr.includes(firstValue)) {
                    if (!oldGenresArr.includes(secondValue)) {
                        oldGenresArr.splice(oldGenresArr.indexOf(firstValue), 1, secondValue);
                    }
                }
                break;
            case 'Prefer':
                firstValue = Number(firstValue);
                secondValue = Number(secondValue);
                if ((firstValue >= 0 && firstValue < oldGenresArr.length) && (secondValue >= 0 && secondValue < oldGenresArr.length)) {
                    let tempIndex = oldGenresArr[firstValue];
                    let tempIndex2 = oldGenresArr[secondValue];
                    oldGenresArr[firstValue] = tempIndex2;
                    oldGenresArr[secondValue] = tempIndex;
                }
                break;
            default:
                console.log(`Error`);
        }

        index++;
        command = input[index];
    }

    console.log(oldGenresArr.join(' '));

}

booksWorld(["Romance | Fiction | Horror | Mystery",
            "Drop Romance",
            "Join Fantasy",
            "Prefer 1 2",
            "Stop!"]);
booksWorld(["Poetry | Romance",
            "Drop Children",
            "Replace Fantasy Crime",
            "Stop!"]);
booksWorld(["Thriller | Young | Crime",
            "Join Political",
            "Replace Young Fairytale",
            "Prefer 6 2",
            "Stop!"]);
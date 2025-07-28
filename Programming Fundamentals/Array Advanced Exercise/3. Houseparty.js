function solve(arr) {
    let guestList = [];

    for (let command of arr) {
        let name = command.split(' ')[0];
        // let realName = name[0];

        if (command.includes('is going!')) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guestList.push(name);
            }
        } else if (command.includes('is not going!')) {
            if (guestList.includes(name)) {
                let idx = guestList.indexOf(name);
                guestList.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(guestList.join('\n'));
}

solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
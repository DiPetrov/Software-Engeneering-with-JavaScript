function solve(input) {

    let minersTask = new Map();

    for (let i = 0; i < input.length; i+=2) {
        let currentItem = input[i];
        let currentQuantity = Number(input[i + 1]);

        if (minersTask.has(currentItem)) {
            minersTask.set(currentItem, minersTask.get(currentItem) + currentQuantity);
        } else {
            minersTask.set(currentItem, currentQuantity);
        }
    }

    for (let element of minersTask) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

solve(['Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17']);

solve(['gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15']);
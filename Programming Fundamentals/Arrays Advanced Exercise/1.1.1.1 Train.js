function solve(input) {

    let wagons = input[0].split(' ').map(Number);
    let wagonMaxCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ')[0];
        let passengers = Number(input[i].split(' ')[1]);

        if (command === 'Add') {
            wagons.push(passengers);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = wagons[j];
                command = Number(command);

                if (command + currentWagon <= wagonMaxCapacity) {
                    wagons[j] = command + currentWagon;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

solve(['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']);

solve(['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']);
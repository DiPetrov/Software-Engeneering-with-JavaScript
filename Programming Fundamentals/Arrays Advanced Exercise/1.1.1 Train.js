function solve(arr) {

    let wagons = arr[0].split(' ').map(Number)
    let wagonsCapacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let currentElement = arr[i].split(' ');
        let currentCommand = currentElement[0];
        let newWagon = Number(currentElement[1]);
        let newPassengers = Number(currentElement);

        if (currentCommand.includes('Add')) {
            wagons.push(newWagon);
        } else {
            for (let j = 0; j < wagons.length; j++) {

                if (wagons[j] + newPassengers <= wagonsCapacity) {
                    wagons[j] += newPassengers;
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
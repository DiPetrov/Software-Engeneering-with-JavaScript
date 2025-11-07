function train(arr) {

    // First element is a string containing wagons - each number represents the passengers that are currently in the wagon
    // Second element 75 is the max capacity of each wagon
    // The rest of the elements are command in the format:
           /* 1. Add a wagon to the end with the given number of passengers
              2. Number of passengers - find an existing wagon to fit all the passengers (starting from the first wagon)*/
    // At the end print all wagon with the amount of passengers separated with a space.

    let wagonsWithPassengers = arr
        .shift()
        .split(' ')
        .map(Number);

    let wagonMaxCapacity = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentPassengers = 0;

        if (currentElement.includes('Add')) {
            currentElement.split();
            currentPassengers = Number(currentElement.split(' ')[1]);
            wagonsWithPassengers.push(currentPassengers);
        } else {
            currentPassengers = Number(currentElement);
            for (let i = 0; i < wagonsWithPassengers.length; i++) {
                let currentWagon = wagonsWithPassengers[i];
                if (currentWagon + currentPassengers <= Number(wagonMaxCapacity)) {
                    wagonsWithPassengers[i] += currentPassengers;
                    break;
                }
            }
        }
    }

    console.log(wagonsWithPassengers.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);

train(['0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6']);
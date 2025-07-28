function train(arr) {
    let inputArray = arr.slice();
    let wagons = inputArray
        .shift()
        .split(' ')
        .map(x => Number(x));

    let maxCapacity = Number(inputArray.shift());

    function checkElementFit(arr, val, maxValue) {
        for (let el of arr) {
            if (el + val <= maxCapacity) {
                return arr.indexOf(el);
            }
        }
        return undefined;
    }

    for (let el of inputArray) {
        if (el.includes('Add')) {
            [_, passengers] = el.split(' ');
            wagons.push(Number(passengers))
        } else {
            let passengersToFit = Number(el);
            let freeWagon = checkElementFit(wagons, passengersToFit, maxCapacity);
            if (freeWagon !== undefined) {
                wagons[freeWagon] += passengersToFit;
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
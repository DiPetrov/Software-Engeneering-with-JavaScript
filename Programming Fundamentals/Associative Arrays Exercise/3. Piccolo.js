function solve(input) {

    let parkingLot = new Set();

    for (let i = 0; i < input.length; i++) {
        let direction = input[i].split(', ')[0];
        let carNumber = input[i].split(' ')[1];

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));

        for (let number of sorted) {
            console.log(number)
        }
    }
}

solve(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
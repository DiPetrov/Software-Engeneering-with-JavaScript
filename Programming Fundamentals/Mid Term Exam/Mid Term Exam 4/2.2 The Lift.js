function theLift(arr) {
    let peopleWaiting = Number(arr[0]);
    let liftWagons = arr[1].split(' ').map(Number);

    for (let i = 0; i < liftWagons.length; i++) {
        let space = 4 - liftWagons[i];

        if (peopleWaiting >= space) {
            liftWagons[i] += space;
            peopleWaiting -= space;
        } else {
            liftWagons[i] += peopleWaiting;
            peopleWaiting = 0;
        }
    }

    let hasEmptySpots = false;
    for (let i = 0; i < liftWagons.length; i++) {
        if (liftWagons[i] < 4) {
            hasEmptySpots = true;
            break;
        }
    }

    if (peopleWaiting === 0 && hasEmptySpots) {
        console.log(`The lift has empty spots!\n${liftWagons.join(' ')}`);
    } else if (peopleWaiting > 0 && !hasEmptySpots) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!\n${liftWagons.join(' ')}`);
    } else {
        console.log(`liftWagons.join(' ')`);
    }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
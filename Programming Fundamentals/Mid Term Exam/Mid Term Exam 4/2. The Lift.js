function theLift(arr) {

               /* 70% solution */
    // let peopleWaiting = Number(arr[0]);
    // let liftWagons = arr[1].split(' ').map(Number);
    //
    //
    //
    //     for (let i = 0; i < liftWagons.length; i++) {
    //
    //         for (let j = 0; j <= 4; j++) {
    //             if (liftWagons[i] + 1 <= 4 && peopleWaiting > 0) {
    //                     peopleWaiting -= 1;
    //                     liftWagons[i] += 1;
    //                 }
    //             }
    //
    //     if (peopleWaiting > 0) {
    //         break;
    //
    //     }
    // }
    //
    // let emptySpots = true;
    //
    // for (let wagon of liftWagons) {
    //     if (wagon === 4) {
    //         emptySpots = false;
    //     } else {
    //         emptySpots = true;
    //     }
    // }
    //
    // if (peopleWaiting === 0 && emptySpots === true) {
    //     for (let i = 0; i < liftWagons.length; i++) {
    //         if (liftWagons[i] === 0) {
    //             liftWagons.splice(i, 1);
    //         }
    //      }
    //     console.log(`The lift has empty spots!\n${liftWagons.join(' ')}`);
    // } else if (peopleWaiting > 0 && emptySpots === false) {
    //     console.log(`There isn't enough space! ${peopleWaiting} people in a queue!\n${liftWagons.join(' ')}`);
    // } else if (peopleWaiting === 0 && emptySpots === false) {
    //     console.log(liftWagons.join(' '));
    // }

    let peopleWaiting = Number(arr[0]);
    let liftWagons = arr[1].split(' ').map(Number);

    for (let i = 0; i < liftWagons.length; i++) {
        let space = 4 - liftWagons[i];
        let peopleToLoad = Math.min(space, peopleWaiting);
        liftWagons[i] += peopleToLoad;
        peopleWaiting -= peopleToLoad;
    }

    let emptySpots = liftWagons.some(wagon => wagon < 4);

    if (peopleWaiting === 0 && emptySpots) {
        console.log(`The lift has empty spots!\n${liftWagons.join(' ')}`);
    } else if (peopleWaiting > 0 && !emptySpots) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!\n${liftWagons.join(' ')}`);
    } else {
        console.log(liftWagons.join(' '));
    }

}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);

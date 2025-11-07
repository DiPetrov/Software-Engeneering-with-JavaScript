function solve(input) {

    let neighbourHouses = input[0].split('@').map(Number);


    for (let i = 0; i < neighbourHouses.length; i++) {
        let currentJump =
        if (jumpValue >= 0 && jumpValue < neighbourHouses.length) {
            if (neighbourHouses[jumpValue] === 0) {
                console.log(`Place ${neighbourHouses[jumpValue]} already had Valentine's day.`);
            } else {
                neighbourHouses[jumpValue] -= 2;
                if (neighbourHouses[jumpValue] === 0) {
                    console.log(`Place ${neighbourHouses[jumpValue]} has Valentine's day.`);
                }
            }
        } else {
            if (neighbourHouses[jumpValue] === 0) {
                console.log(`Place ${neighbourHouses[jumpValue]} already had Valentine's day.`);
            } else {
                neighbourHouses[jumpValue] -= 2;
                if (neighbourHouses[jumpValue] === 0) {
                    console.log(`Place ${neighbourHouses[jumpValue]} has Valentine's day.`);
                }
            }
        }
    }


}

solve(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);

// solve(["10@10@10@2",
//         "Jump 1",
//         "Jump 2",
//         "Love!"]);
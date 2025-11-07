function solve(arr) {

    let people = Number(arr.shift());
    let newArr= arr.toString().split(' ').map(Number);
    let liftEmpty = true;

    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] < 4 && people > 0) {

            while (newArr[i] < 4 && people > 0) {
                newArr[i] += 1;
                people -= 1;
            }
        }

        if (newArr[i] === 4) {
            liftEmpty = false;
        } else {
            liftEmpty = true;
        }
    }

    if (people === 0 && liftEmpty) {
        console.log("The lift has empty spots!");
        console.log(newArr.join(' '));
    } else if (people > 0 && !liftEmpty) {
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(newArr.join(' '));
    } else {
        console.log(newArr.join(' '));
    }
}

solve(["15", "0 0 0 0 0"]);
solve(["20", "0 2 0"]);
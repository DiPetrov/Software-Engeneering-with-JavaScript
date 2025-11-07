function solve(arr) {
    let elements = arr.shift().split(' ');

    let index = 0;
    let command = arr[index];
    let moves = 0;

    while(command != "end") {
        moves++;
        let cheat = false;

        let [elementOne, elementTwo] = command.split(' ');
        elementOne = Number(elementOne);
        elementTwo = Number(elementTwo);

        if (elementOne === elementTwo) {
            cheat = true;
        } else if (elementOne < 0 || elementOne >= elements.length) {
            cheat = true;
        } else if (elementTwo < 0 || elementTwo >= elements.length) {
            cheat = true;
        }

        if (cheat) {

            for (let i = 0; i < 2; i++) {
                elements.splice(elements.length / 2, 0, '-' + moves + 'a');
            }

            console.log("Invalid input! Adding additional elements to the board");
            index++;
            command = arr[index];
            continue;
        }

        if (elements[elementOne] === elements[elementTwo]) {
            console.log(`Congrats! You have found matching elements - ${elements[elementOne]}!`)
            elements.splice(elementOne, 1);

            if (elementTwo === 0) {
                elements.splice(elementTwo, 1);
            } else {
                elements.splice(elementTwo - 1, 1);
            }

        } else if (elementOne != elements[0] || elementTwo != elements[1]) {
            console.log("Try again!");
        }

        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`)
            return;
        }

        index++;
        command = arr[index];
    }

    console.log(`Sorry you lose :(\n${elements.join(' ')}`);
}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);

solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"]);

solve(["a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"]);
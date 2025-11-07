function memoryGame(input) {

    let sequenceArr = input[0].split(' ').map(Number);
    let index = 1;
    let command = input[index];
    let moves = 0;

    while(command !== 'end') {
        let currentElement = command.split(' ');
        let indexOne = Number(currentElement[0]);
        let indexTwo = Number(currentElement[1]);

        moves++;

        if (indexOne === indexTwo) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequenceArr.splice(sequenceArr.length / 2 - 1, 0, moves);
        }

        if (indexOne < 0 || indexTwo > sequenceArr.length) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequenceArr.splice(sequenceArr.length / 2 - 1, 0, moves);
        }

        if (sequenceArr[indexOne] === sequenceArr[indexTwo]) {
            console.log(`Congrats! You have found matching elements - {element}!`);
            sequenceArr.splice(indexOne, 1);
            sequenceArr.splice(indexTwo, 1);
        } else {
            console.log(`Try again!`);
        }


        if (sequenceArr.length === 0) {
            console.log(`You have won in {number of moves until now} turns!`);
        }

        index++;
        command = input[index];
    }

    console.log(`Sorry you loose :(`);
    console.log(sequenceArr.join(' '));
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
 memoryGame([
         "a 2 4 a 2 4",
         "0 3",
         "0 2",
         "0 1",
         "0 1",
         "end"]);
 memoryGame([
         "a 2 4 a 2 4",
         "4 0",
         "0 2",
         "0 1",
         "0 1",
         "end"]);
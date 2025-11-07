function bombNumbers(sequence, bombData) {
    let [bombNum, power] = bombData;

    while(sequence.includes(bombNum)) {
        let index = sequence.indexOf(bombNum);
        let start = index - power;

        if (start < 0) {
            start = 0
        }

        let end = index + power;

        if (end > sequence.length - 1) {
            end = sequence.length - 1
        }

        sequence.splice(start, end - start + 1);
    }

    function sumArray(arr) {
        let result = 0;
        for (let el of arr) {
            result += el;
        }
        return result;
    }

    console.log(sumArray(sequence));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
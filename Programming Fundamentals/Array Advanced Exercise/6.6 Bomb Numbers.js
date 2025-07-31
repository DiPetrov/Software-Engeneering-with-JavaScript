function bombNumbers(sequence, bombData) {
    const [bomb, power] = bombData;          // e.g. bomb = 2, power = 1

    /* one-direction scan — no while-includes */
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb) {
            const start       = Math.max(i - power, 0);              // left edge
            const deleteCount = power * 2 + 1;                       // bomb + both sides

            sequence.splice(start, deleteCount);                     // detonate once
            i = start - 1;                                           // rewind so we don't skip
        }
    }

    /* Fundamentals-style sum helper */
    let sum = 0;
    for (const n of sequence) sum += n;
    console.log(sum);
}


// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
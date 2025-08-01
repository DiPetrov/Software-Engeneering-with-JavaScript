function pyramid(base, increment) {

    // 1. Write a program that calculates resources needed for the construction of a pyramid.
    // 2. The pyramid is made of stone, marble, lapis lazuli and gold.
    // 3. I receive 2 integers - the base width and length of the pyramid  and an increment - the height of each step.
    // 4. The pyramid must be constructed the following order:
                                /* 1. The bulk is made out of STONE.
                                   2. The outer layer is MADE OUT of marble.
                                   3. Every fifth step's out layer is mde out of LAPIS LAZULI.
                                   4. The final step is made out of GOLD.
                                 */
    // 5. The pyramid is built with 1x1 blocks with a height equal to the given increment.
    // 6. The first step has a width and length equal to the base and every next step is reduced by 2 blocks.
    // 7. The height of each step equals the given incremenet.

    let sumStones = 0;
    let sumMarbles = 0;
    let sumLapisLazuli = 0;
    let steps = 0;
    let sumGold = 0;

    for (let i = base; i > 0; i-=2) {
        steps++;

        if (i > 2) {
            let stonesNeededPerStep = ((i - 2) * (i - 2)) * increment;
            sumStones += stonesNeededPerStep;
        } else {
            sumGold += i * i * increment;
        }

        let marblesNeededPerStep = 0;
        let lapisLazuliNeededPerFifthStep = 0;

        if (steps % 5 == 0 && i > 2) {
            lapisLazuliNeededPerFifthStep = (4 * (i - 1)) * increment;
            sumLapisLazuli += lapisLazuliNeededPerFifthStep;
        } else {
            if (i > 2) {
                marblesNeededPerStep = (4 * (i - 1)) * increment;
                sumMarbles += marblesNeededPerStep;
            }
        }
    }

    let finalPyramidHeight = Math.floor(steps * increment);
    console.log(`Stone required: ${Math.ceil(sumStones)}`);
    console.log(`Marble required: ${Math.ceil(sumMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(sumLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(sumGold)}`)
    console.log(`Final pyramid height: ${finalPyramidHeight}`);
}

pyramid(11, 1);
// pyramid(11, 0.75);
// pyramid(12, 1);
// pyramid(23, 0.5);
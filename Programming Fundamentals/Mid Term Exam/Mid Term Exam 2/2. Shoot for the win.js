function shootFoTheWin(inputArr) {

    // 1. Input - two lines of integers - first the targets and the second - the indexes of the target + 'End'.
    // 2. Every new index given, I have to "shoot" the target corresponding to the particular index (if it is possible).
    // 3. Target shot - it's value set to -1; Additionally I have to:
                    // 1. Reduce the value of all targets, that are smaller, with the value of the shot target.
                    // 2. Increase the value of all other targets, which have less than or equal value of the target.
                    // ! Targets that have already been shot, can not get shot again.
                    // ! The Values of the targets which are considered a shot, can not get increased or decreased

    let targets = inputArr.shift().split(' ').map(Number);
    let targetsShot = 0;
    let command = inputArr.shift();

    while(command !== 'End') {
        let index = Number(command);

        if (index >= 0 && index < targets.length) {
            let targetValue = targets[index];

            if (targetValue !== - 1) {
                targetsShot++;
            }
            targets[index] = - 1;
            // targets = targets.map(x => {
            //
            //     if (x === -1) {
            //         return x;
            //     }
            //
            //     if (x > targetValue) {
            //         return x - targetValue;
            //     } else {
            //         return x + targetValue;
            //     }
            // });

            // Solution 2
            for (let i = 0; i < targets.length; i++) {
                // Skip the target we just shot (and any other already-shot ones)
                if (targets[i] === -1) {
                    continue;
                }

                // Increase or decrease depending on how it compares to targetValue
                if (targets[i] > targetValue) {
                    targets[i] -= targetValue;   // make larger values smaller
                } else {
                    targets[i] += targetValue;   // make smaller-or-equal values larger
                }
            }
        }
        command = inputArr.shift();
    }

    let arrayString = targets.join(' ');
    console.log(`Shot targets: ${targetsShot} -> ${arrayString}`);
}

shootFoTheWin(["24 50 36 70", "0", "4", "3", "1","End"]);
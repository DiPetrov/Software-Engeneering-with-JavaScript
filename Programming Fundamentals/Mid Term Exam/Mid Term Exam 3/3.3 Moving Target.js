function solve(input) {

    // First line = integers representing targets and their values.
    // Second line = indices of targets to be shot until the "End" command.
    // Every time I receive and index, I have to shoot the target, if possible!
    // Every time a target has been shot, its target becomes - 1.
    // Reduce all other targets, which habe greater values than my current target, with its value.
    // Increase all other targets, which have less than or equal value to the shot target, with its value.
    // By command "End" print all the targets in their current state and the count of shot targets.

    let targets = input.shift()
                       .split(' ')
                       .map(Number);
    let index = 0;
    let command = input[index];
    let counter = 0;

    while(command !== 'End') {
        let targetIndexShot = Number(command);

        if (targetIndexShot >= 0 && targetIndexShot < targets.length) {

            if (targets[targetIndexShot] !== -1) {

                for (let i = 0; i < targets.length; i++) {

                    if (targets[i] > targets[targetIndexShot] && i !== targetIndexShot) {
                        if (targets[i] !== -1) {
                            targets[i] -= targets[targetIndexShot];
                        }
                    } else if (targets[i] <= targets[targetIndexShot] && i !== targetIndexShot){
                        if (targets[i] !== -1) {
                            targets[i] += targets[targetIndexShot];
                        }
                    }
                }
                counter++;
                targets[targetIndexShot] = -1;
            }
        }
        index++;
        command = input[index];
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}

solve((["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"]));

solve(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);
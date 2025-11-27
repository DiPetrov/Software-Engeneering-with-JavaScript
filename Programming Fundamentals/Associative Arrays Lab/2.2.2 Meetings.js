function solve(input) {
    let meetings = new Map;
    for (let i = 0; i < input.length; i++) {
        let [day, person] = input[i].split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let entries of Object.entries(meetings)) {
        console.log(`${entries[0]} -> ${entries[1]}`);
    }
}

// solve(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']);

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);
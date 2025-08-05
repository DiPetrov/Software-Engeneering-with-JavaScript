function blackFlag(input) {

    input = input.map(Number);
    let daysPlunder = input.shift();
    let piratesPlunderPerDay = input.shift();
    let expectedPlunder = input.shift();

    let plunderGathered = 0;
    let days = 0;

    while(days < daysPlunder) {

        days++;
        plunderGathered += piratesPlunderPerDay;

        if (days % 3 === 0) {
            plunderGathered += piratesPlunderPerDay * 0.5;

        }

        if (days % 5 === 0) {
            plunderGathered *= 0.7;

        }
    }

    if (plunderGathered >= expectedPlunder) {
        console.log(`Ahoy! ${plunderGathered.toFixed(2)} plunder gained.`);
    } else if (plunderGathered < expectedPlunder) {
        console.log(`Collected only ${(plunderGathered / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
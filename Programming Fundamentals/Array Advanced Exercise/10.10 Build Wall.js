function buildAWall(input) {
    // 1) parse starting heights
    let wall = input.map(Number);          // e.g. [21, 25, 28]

    const CONCRETE_PER_FOOT = 195;
    const PRICE_PER_YARD    = 1900;
    const TARGET_HEIGHT     = 30;

    let dailyConcrete = [];

    // 2) work day-by-day until every section hits 30 ft
    let unfinished = true;                 // assume we still have work
    while (unfinished) {
        unfinished = false;                // will stay false if nobody is < 30
        let crewsToday = 0;

        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < TARGET_HEIGHT) { // crew still active
                wall[i]++;                 // add 1 foot
                crewsToday++;
            }
            if (wall[i] < TARGET_HEIGHT) { // after increment, is it still < 30?
                unfinished = true;         // yes → at least one section left
            }
        }

        if (crewsToday > 0) {              // push today’s concrete only if we worked
            dailyConcrete.push(crewsToday * CONCRETE_PER_FOOT);
        }
    }

    // 3) total cost
    let totalYards = 0;
    for (const yards of dailyConcrete) totalYards += yards;
    let totalCost = totalYards * PRICE_PER_YARD;

    // 4) output
    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);
}

/* --- sample run --- */
buildAWall(['21', '25', '28']);
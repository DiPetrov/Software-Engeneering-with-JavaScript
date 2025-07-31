function buildWall(input) {

    // 1. Write program that keeps track of a construction of a 30-foot tall wall.
    // 2. The input consists of the height of every of the 3 sections of the wall, each section mile long.
    // 3. Each section has 1 crew of workers adding 1 foot height per day using 195 cubic yards of concrete.
    // 4. When a section is complete (reached 30 foot long) the crew is released, the rest of the crews keep working.
    // 5. Program must track how much concrete is used daily until the wall is complete. At the end print on 2 lines:
                    /* 1. The amount of concrete used every day.
                       2. The final cost of the wall (one cubic yard concrete = 1900 pesos
                     */

    let wall = input.map(Number);          // e.g. [21, 25, 28]

    let concretePerFoot = 195;         // cubic yards a single crew pours per day
    let pricePerYard  = 1900;         // pesos
    let targetHight    = 30;           // feet

    let dailyConcrete = [];                // will keep the yards poured each day

    // 2) work day by day until every section hits the target
    while (wall.some(h => h < targetHight)) {

        // count how many crews are still active today
        let crewsToday = 0;

        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < targetHight) {
                wall[i]++;                 // crew adds 1 foot
                crewsToday++;              // track active crews
            }
        }

        // each active crew used 195 yd³ today
        let todayYards = crewsToday * concretePerFoot;
        dailyConcrete.push(todayYards);
    }

    // 3) total cost
    let totalYards = 0;
    for (let yards of dailyConcrete) {
        totalYards += yards;
    }
    let totalCost = totalYards * pricePerYard;

    // 4) print results
    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);


}


buildWall([21, 25, 28]);

function buildWall(input) {

    let wall = input.map(Number);

    let concretePerFoot = 195;
    let pricePerYard  = 1900;
    let targetHight    = 30;

    let dailyConcrete = [];

    while (wall.some(h => h < targetHight)) {

        let crewsToday = 0;

        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < targetHight) {
                wall[i]++;
                crewsToday++;
            }
        }

        let todayYards = crewsToday * concretePerFoot;
        dailyConcrete.push(todayYards);
    }

    let totalYards = 0;
    for (let yards of dailyConcrete) {
        totalYards += yards;
    }

    let totalCost = totalYards * pricePerYard;

    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);

}

buildWall([21, 25, 28]);

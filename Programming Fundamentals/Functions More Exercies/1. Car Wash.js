function carWash(arr) {
    function cleanedPercentage(x) {
        let carClean = 0;

        for (let i = 0; i < x.length; i++) {
            let command = x[i];

            switch(command) {
                case 'soap':
                    carClean += 10;
                    break;
                case 'water':
                    carClean *= 1.2;
                    break;
                case 'vacuum cleaner':
                    carClean *= 1.25;
                    break;
                case 'mud':
                    carClean *= 0.9;
                    break;
                default:
                    console.log(`Not a valid operation!`)
            }
        }
        return carClean;
    }

    let result = cleanedPercentage(arr);
    console.log(`The car is ${result.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
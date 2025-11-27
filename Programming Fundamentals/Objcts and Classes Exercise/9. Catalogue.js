function solve(input) {

    let catalogue = new Map();

    for (let i = 0; i < input.length; i++) {
        let [currentProduct, currentPrice] = input[i].split(' : ');
        currentPrice = Number(currentPrice);

        catalogue.set(currentProduct, currentPrice);
    }

    let sorted = Array.from(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < sorted.length; i++) {
        let currentCapitalLetter = sorted[i][0];
        let previousCapitalLetter = ''

        if (i > 0) {
            previousCapitalLetter = sorted[i - 1][0];
        }

        if (i === 0) {
            console.log(currentCapitalLetter[0]);
            console.log(` ${sorted[i][0]}: ${sorted[i][1]}`);
        }

        while(currentCapitalLetter[0] === previousCapitalLetter[0] && i !== 0) {
            console.log(` ${sorted[i][0]}: ${sorted[i][1]}`);
            break;
        }
    }
}

solve(['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']);

// solve(['Omlet : 5.4',
//         'Shirt : 15',
//         'Cake : 59']);
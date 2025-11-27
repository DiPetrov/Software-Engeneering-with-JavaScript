function solve(input) {

    function solve(input) {

        let storage = new Map();

        for (let i = 0; i < input.length; i++) {
            let [product, quantity] = input[i].split(' ');
            quantity = Number(quantity);

            if (product in storage) {
                storage[product] += quantity;
            } else {
                storage[product] = quantity;
            }
        }

        for (let [key, value] of Object.entries(storage)) {
            console.log(`${key} -> ${value}`);
        }
    }


}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
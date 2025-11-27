function solve(arr1, arr2) {
    let storeProvisions = {};

    for (let i = 0; i < arr1.length; i+=2) {
        let currentProduct = arr1[i]
        let currentQuantity = Number(arr1[i + 1]);
        storeProvisions[currentProduct] = currentQuantity;

        for (let j = 0; j < arr2.length; j+=2) {
            let newProduct = arr2[j];
            let newQuantity = Number(arr2[j + 1]);

            if (currentProduct === newProduct) {
                storeProvisions[currentProduct] += newQuantity;
            }
        }
    }

    for (let i = 0; i < arr2.length; i+=2) {
        let currentProduct = arr2[i];
        let currentQuantity = Number(arr2[i + 1]);

        if (!storeProvisions.hasOwnProperty(currentProduct)) {
            storeProvisions[currentProduct] = currentQuantity;
        }
    }

    for (let [key, value] of Object.entries(storeProvisions)) {
        console.log(`${key} -> ${value}`);
    }
}

// solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//       ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
      ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);
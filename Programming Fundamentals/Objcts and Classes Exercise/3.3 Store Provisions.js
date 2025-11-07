function storeProvisions(currentStock, newStock) {

    let store = {};

    for (let i = 0; i < currentStock.length; i+=2) {
        let currentProduct = currentStock[i];
        let currentQuantity = Number(currentStock[i+1]);
        store[currentProduct] = currentQuantity;
    }

    for (let i = 0; i < newStock.length; i+=2) {
        let newProduct = newStock[i];
        let currentQuantity = Number(newStock[i+1]);

        if (store.hasOwnProperty(newProduct)) {
            store[newProduct] += currentQuantity;
        } else {
            store[newProduct] = currentQuantity;
        }
    }

    for (let [key, value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvisions([
                'Chips', '5', 'CocaCola', '9', 'Bananas',
                '14', 'Pasta', '4', 'Beer', '2'],
                ['Flour', '44', 'Oil', '12', 'Pasta', '7',
                    'Tomatoes', '70', 'Bananas', '30']);
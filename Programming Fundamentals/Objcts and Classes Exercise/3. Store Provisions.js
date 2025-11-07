function storeProvisions(currentStock, deliveryStock) {
    let store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        store[product] = quantity;

    }

    for (let i = 0; i < deliveryStock.length; i += 2) {
        let product = deliveryStock[i];
        let quantity = Number(deliveryStock[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

storeProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas',
                 '14', 'Pasta', '4', 'Beer', '2'],
                ['Flour', '44', 'Oil', '12', 'Pasta', '7',
                'Tomatoes', '70', 'Bananas', '30']);
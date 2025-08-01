function computerStore(input) {
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let finalPrice = 0;

    let index = 0;
    let command = input[index];

    while(command !== 'special' && command !== 'regular') {
        let currentPrice = Number(command);

        if (currentPrice < 0) {
            console.log("Invalid price!");
            index++;
            command = input[index];
            continue;
        }

        priceWithoutTaxes += currentPrice;

        index++;
        command = input[index];
    }

    if (priceWithoutTaxes === 0) {
        console.log("Invalid order!" );
        return;

    }

    taxes = priceWithoutTaxes * 0.2;
    finalPrice = priceWithoutTaxes + taxes;

    if (command === 'special') {
        finalPrice *= 0.9;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}

// computerStore([1050, 200, 450, 2, 18.50, 16.86, 'special']);
computerStore([1023, 15, -20, -5.50, 450, 20, 17.66, 19.30, 'regular']);
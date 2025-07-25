function spiceMustFlow(input) {
    let day = 0;
    let currentSpice = input;
    let totalSpice = 0;

    while (currentSpice >= 100) {
        day++
        totalSpice += currentSpice;
        totalSpice -= 26;
        currentSpice -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(day);
    console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
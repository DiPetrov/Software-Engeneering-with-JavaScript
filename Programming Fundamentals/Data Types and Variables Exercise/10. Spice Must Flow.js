function spiceMustFlow(input) {

    let extract = true;
    let day = 0;
    let currentSpice = input;
    let totalSpice = 0;

    while(extract) {
        totalSpice += currentSpice;
        currentSpice -= 10;
        day++;

        if (totalSpice >= 26) {
            totalSpice -= 26;
        } else {
            break;
        }

        if (currentSpice < 100) {
            break;
        }


    }

    totalSpice -= 26;

    console.log(day);
    console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
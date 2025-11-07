function muOnline(input) {

    let arr = input.slice().split('|');
    let health = 100;
    let bitcoins = 0;
    let room = 0;
    let win = true;

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(' ')[0];
        let currentValue = Number(arr[i].split(' ')[1]);
        room++;

        if (currentCommand == 'potion') {
            let oldHealth = health;
            health = Math.min(health + currentValue, 100);
            let healed = health - oldHealth;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
            if (currentCommand === 'chest') {
                console.log(`You found ${currentValue} bitcoins.`);
                bitcoins += currentValue;
            } else {
                health -= currentValue;
                if (health > 0) {
                    console.log(`You slayed ${currentCommand}.`);
                } else {
                    console.log(`You died! Killed by ${currentCommand}.`);
                    console.log(`Best room: ${room}`);
                    win = false;
                    break;
                }
            }
        }
    }

    if (win) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
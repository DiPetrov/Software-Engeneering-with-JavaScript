function solve(input) {

    let newArr = input.split('|');
    let health = 100;
    let coins = 0;
    let room = 0;

    for (let i = 0; i < newArr.length; i++) {
        let [command, value] = newArr[i].split(' ');
        value = Number(value);
        room++;

        if (command === 'potion') {

            let healed = Math.min(100 - health , value);
            health += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (command === 'chest') {
            console.log(`You found ${value} coins.`);
            coins += value;
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
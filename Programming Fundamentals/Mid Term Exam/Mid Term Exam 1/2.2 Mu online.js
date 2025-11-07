function solve(input) {

    input = input.split('|');
    let health = 100;
    let bitcoin = 0;
    let room = 0;

    for (let i = 0; i < input.length; i++) {
        let [command, points] = input[i].split(' ');
        points = Number(points);
        room++;
        if (command === 'potion') {
            let oldHealth = health;
            health = Math.min(health + points, 100);
            let healed = health - oldHealth

            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            bitcoin += points;
            console.log(`You found ${points} bitcoins.`);
        } else {
            health -= points;
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
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
}



// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

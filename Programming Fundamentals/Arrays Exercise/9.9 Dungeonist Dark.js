function dungeonistDark(input) {

    // 1. I have initial health 100 and initial coins 0
    // 2. I have a string with rooms, each room contains an item, or a monster; and a number
    // If the item is:
    /*          1. Potion - I got healed but not over 100 points - print `You healed for ${healing-number} hp.`
                2. Chest - I have found coins - print `You have found ${coins}.`
                3. Monster - monster name and attack - attack has to be removed from my health
                      1. If health > attack - i have slain the mosnter: `You slayed ${monster-name}.`
                      2. If death print `You died killed by ${monster-name}.` Print the best room I have reached.
                4. If I managed to go through all the room - print on the next three lines (see Text).
    */

    let arr = input.split('|')
    let health = 100;
    let coins = 0;
    let win = true;

   for (let i = 0; i < arr.length; i++) {
       let currentElement = arr[i].split(' ');
       let currentCommand = currentElement[0];
       let currentValue = Number(currentElement[1]);

       if (currentCommand === 'potion') {
           if (health < 100) {
               let oldHealth = health;
               health = Math.min(health + currentValue, 100);
               let healed = health - oldHealth;
               console.log(`You healed for ${healed} hp.`);
               console.log(`Current health: ${health} hp.`);
           }
       } else if (currentCommand === 'chest') {
           console.log(`You found ${currentValue} coins.`)
           coins += currentValue;
       } else {

           if (health - currentValue > 0) {
               console.log(`You slayed ${currentCommand}.`)
               health -= currentValue;
           } else {
               console.log(`You died! Killed by ${currentCommand}.`)
               console.log(`Best room: ${i+1}`);
               win = false;
               return;
           }
       }
   }

   if (win) {
       console.log(`You've made it!`);
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
   }
}
// dungeonistDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonistDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i].split(' / ');
        let heroObj = {};


        heroObj.Hero = currentElement[0];
        heroObj.level = currentElement[1];

        let itemsArr  = [];

        for (let j = 2; j < currentElement.length; j++) {
            let currentItem = currentElement[j].split(' , ');
            itemsArr.push(currentItem);
        }
        heroObj.items = itemsArr;
        result.push(heroObj);
        result = result.sort((a, b) => a.level - b.level)
    }

    for (let hero of result) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

// solve(['Batman / 2 / Banana, Gun',
//        'Superman / 18 / Sword',
//        'Poppy / 28 / Sentinel, Antara']);


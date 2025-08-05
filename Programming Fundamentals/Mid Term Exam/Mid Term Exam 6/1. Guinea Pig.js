function guineaPig(input) {

    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let pigWeight = Number(input[3]);

    let pigFoodInGrams = food * 1000;
    let pigHayInGrams = hay * 1000;
    let pigCoverInGrams = cover * 1000;
    let pigWeightInGrams = pigWeight * 1000;

    for (let i = 1; i <= 30; i++) {
        pigFoodInGrams -= 300;

        if (i % 2 === 0) {

            if (pigFoodInGrams < 300) {
                console.log(`Merry must go to the pet store!`);
                return;
            }

            pigHayInGrams -= pigFoodInGrams * 0.05;

            if (pigHayInGrams < pigFoodInGrams * 0.05) {
                console.log(`Merry must go to the pet store!`);
                return;
            }
        }

        if (i % 3 === 0) {
            pigCoverInGrams -= pigWeightInGrams * (1 / 3);
            if (pigCoverInGrams < pigWeightInGrams * (1 / 3)) {
                console.log(`Merry must go to the pet store!`);
                return;
            }
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(pigFoodInGrams / 1000).toFixed(2)}, Hay: ${(pigHayInGrams / 1000).toFixed(2)}, Cover: ${(pigCoverInGrams / 1000).toFixed(2)}.`)
}

guineaPig(['10', '5', '5.2', '1']);
// guineaPig('1', '1.5', '3', '1.5');
// guineaPig('9', '5', '5.2', '1');
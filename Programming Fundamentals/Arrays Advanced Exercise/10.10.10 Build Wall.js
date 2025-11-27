function solve(input) {

    // Track the construction of a 30-foot wall.
    // The input contains the amount of mile long sections of the wall.
    // Each section gets 1 foot of height per day by using 195 cubic yards of concrete.
    // All sections that aren`t completed (less than 30 feet high) grow by 1 foot every day.
    // Track how much concrete has been used every single day until the completion of the entire wall.
    // At the end print on the first line the  amount of concrete used every day and on the second line the total cost of the wall in pesos.
    // One cubic yard of concrete = 1900 pesos.
    // The wall may contain up to 2000 sections and starting height of each sections is between 0 and 30.

    let costPerOneFoot = 195 * 1900;
    input = input.map(Number);
    let totalCosts = 0;
    let dailyConcrete = [];

    while(input.length > 0) {
    let costsPerDay = 0;
    let concretePerDay = 0;

        for (let i = 0; i < input.length; i++) {
            let currentSection = input[i];

            if (currentSection < 30) {
                input[i] += 1;
                costsPerDay += costPerOneFoot;
                concretePerDay += 195;
            } else {
                input.splice(input.indexOf(currentSection), 1);
                i--;
            }
        }

        if (concretePerDay !== 0) {
            dailyConcrete.push(concretePerDay);
            totalCosts += costsPerDay;
        }
    }

    console.log(dailyConcrete.join(', '));
    console.log(`${totalCosts} pesos`);
}

solve([21, 25, 28]);
solve([17]);
solve([17, 22, 17, 19, 17]);
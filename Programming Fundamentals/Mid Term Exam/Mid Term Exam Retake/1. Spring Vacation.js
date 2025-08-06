function springVacation(input) {

    // Create a program that calculates traveling expenses by entering the following information:
    // Days of the vacation
    // Budget for the whole group
    // The number of people
    // Price for fuel per kilometer - it's the price for fuel that their car consumes per kilometer
    // Food expenses per person for a day
    // Hotel room (accommodation) price for one night per person

    let tripDays = Number(input[0]);
    let budget = Number(input[1]);
    let numberPeople = Number(input[2]);
    let priceFuelPerKilometer = Number(input[3]);
    let foodPricePerPersonPerDay = Number(input[4]);
    let roomPriceForNightPerPerson = Number(input[5]);

    let totalFoodPrice = (numberPeople * foodPricePerPersonPerDay) * tripDays;
    let totalAccommodationPrice = (numberPeople * roomPriceForNightPerPerson) * tripDays;

    if (numberPeople > 10) {
        totalAccommodationPrice *= 0.75;
    }

    let foodAndAccommodationExpanses = totalFoodPrice + totalAccommodationPrice;

    let currentExpanses = foodAndAccommodationExpanses;
    let currentFuelPrice = 0;
    let days = 0;

    for (let i = 6; i < input.length; i++) {
        let currentDistance = Number(input[i]);
        currentFuelPrice = currentDistance * priceFuelPerKilometer;
        currentExpanses += currentFuelPrice;
        days++;

        if (days % 3 === 0) {
            currentExpanses *= 1.4;
        } else if (days % 5 === 0) {
            currentExpanses *= 1.4;
        }

        if (days % 7 === 0) {
            currentExpanses -= currentExpanses / numberPeople;
        }

        if (currentExpanses > budget) {
            console.log(`Not enough money to continue the trip. You need ${Math.abs(budget - currentExpanses).toFixed(2)}$ more.`);
            return;
        }
    }

    if (budget >= currentExpanses) {
        console.log(`You have reached the destination. You have ${(budget - currentExpanses).toFixed(2)}$ budget left.`);
    }
}

springVacation(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"]);

springVacation(["10",
        "20500",
        "11",
        "1.2",
        "8",
        "13",
        "100",
        "150",
        "500",
        "400",
        "600",
        "130",
        "300",
        "350",
        "200",
        "300"]);
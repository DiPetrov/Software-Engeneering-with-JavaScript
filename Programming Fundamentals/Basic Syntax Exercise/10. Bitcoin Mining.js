function bitcoinMining(arr) {

    let bitcoins = 0;
    let dayFirstBitcoinPurchase = 0;
    let sumTotalMoney = 0;
    let oneBitcoinCost = 11949.16;
    let days = 0;

    for (let i = 0; i < arr.length; i++) {
        days++;
        let currentGold = arr[i];

        if (days % 3 === 0) {
            currentGold *= 0.7;
        }

        let currentMoneyPerGold = currentGold * 67.51;
        sumTotalMoney += currentMoneyPerGold;

        if (sumTotalMoney >= oneBitcoinCost) {
            sumTotalMoney -= oneBitcoinCost;
            bitcoins++;

            while(sumTotalMoney >= oneBitcoinCost) {
                sumTotalMoney -= oneBitcoinCost;
                bitcoins++;
            }

            if (dayFirstBitcoinPurchase === 0) {
                dayFirstBitcoinPurchase += days;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoinPurchase}`);
    }
    console.log(`Left money: ${sumTotalMoney.toFixed(2)} lv.`)
}

// bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);
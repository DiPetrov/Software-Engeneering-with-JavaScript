function coins(change) {

let changeInCoins = Math.round(change * 100);
let coinsUsed = 0;

while (changeInCoins !== 0) {

 if (changeInCoins >= 200) {
   changeInCoins -= 200;
 } else if (changeInCoins >= 100) {
   changeInCoins -= 100;
 } else if (changeInCoins >= 50) {
   changeInCoins -= 50;
 } else if (changeInCoins >= 20) {
   changeInCoins -= 20;
 } else if (changeInCoins >= 10) {
   changeInCoins -= 10;
 } else if (changeInCoins >= 5)  {
   changeInCoins -= 5;
 } else if (changeInCoins >= 2) {
   changeInCoins -= 2;
 } else if (changeInCoins >= 1) {
   changeInCoins -= 1;
 }

coinsUsed++;

}

console.log(coinsUsed);

}

coins(1.23);
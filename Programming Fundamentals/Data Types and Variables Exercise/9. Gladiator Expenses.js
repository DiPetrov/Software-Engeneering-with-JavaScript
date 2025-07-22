function gladiatorExpanses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;
  let brokenShieldCount = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
   let currentLostFight = i;

    if (currentLostFight % 2 === 0) {
      totalExpenses += helmetPrice;
    }

    if (currentLostFight % 3 === 0) {
      totalExpenses += swordPrice;
    }

    if (currentLostFight % 6 === 0) {
      totalExpenses += shieldPrice;
      brokenShieldCount++;
    }

    if (brokenShieldCount === 2) {
      totalExpenses += armorPrice;
      brokenShieldCount = 0;
    }
  }

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpanses(
  7,

  2,

  3,

  4,

  5
);

gladiatorExpanses(
  23,

  12.5,

  21.5,

  40,

  200
);

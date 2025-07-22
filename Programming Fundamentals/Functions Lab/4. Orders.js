function orders(product, quantity) {
  let coffeePrice = 1.5;
  let waterPrice = 1.0;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;

  switch (product) {
    case 'water':
      console.log((quantity * waterPrice).toFixed(2));
      break;
    case 'coffee':
      console.log((quantity * coffeePrice).toFixed(2));
      break;
    case 'coke':
      console.log((quantity * cokePrice).toFixed(2));
      break;
    case 'snacks':
      console.log((quantity * snacksPrice).toFixed(2));
      break;
    default:
      console.log(`Invalid`);
  }
}

orders('water', 5);

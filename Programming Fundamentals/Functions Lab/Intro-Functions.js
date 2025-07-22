function Fullname() {
  firstName();
  lastName();
}

function firstName() {
  console.log(`Dimitar`);
}

function lastName() {
  console.log(`Petrov`);
}

Fullname();

/* Arrow Function - shorter way to write Functions */
let sumTwoNumbers = (x, y) => x + y;
console.log(sumTwoNumbers(1, 2));

// The top one is equal to //


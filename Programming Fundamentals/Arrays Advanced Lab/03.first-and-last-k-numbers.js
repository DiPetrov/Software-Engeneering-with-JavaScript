function solve(input) {
  let k = input.shift();

  let firstKNumbers = input.slice(0, k);
  let lastKNumbers = input.slice(input.length - k);

  console.log(firstKNumbers.join(' '));
  console.log(lastKNumbers.join(' '));
}

solve([
  2,

  7, 8, 9,
]);

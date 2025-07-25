function sumOfOddNumbers(arg1) {
  let sumOddNumbers = 0;
  let oddNumbersCounter = 0;

  for (let i = 1; i <= 100; i++) {

    if (oddNumbersCounter < arg1) {
      if (i % 2 != 0) {
        oddNumbersCounter++;
        sumOddNumbers += i;
        console.log(i);
      }
    }
  }

  console.log(`Sum: ${sumOddNumbers}`);
}
sumOfOddNumbers(3);

function sumEvenNumber(arr) {
  let sum = 0;

  for (let number of arr) {
    let currentNumber = Number(number);
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  console.log(sum);
}

sumEvenNumber(['1', '2', '3', '4', '5', '6']);

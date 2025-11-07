function equalArray(arr1, arr2) {
  let isIdentical = true;
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    let currentNumber = Number(arr1[i]);
    let currentNumber2 = Number(arr2[i]);

    if (currentNumber === currentNumber2) {
      sum += currentNumber;
    } else {
      isIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }

  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArray(
  ['10', '20', '30'],

  ['10', '20', '30']
);

equalArray(
  ['1', '2', '3', '4', '5'],

  ['1', '2', '4', '4', '5']
);

equalArray(['1'], ['10']);

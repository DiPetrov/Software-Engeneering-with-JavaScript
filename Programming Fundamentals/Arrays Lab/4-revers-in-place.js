function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let reversedIndex = arr.length - 1 - i;
    // console.log(reversedIndex);

    let value = arr[i];
    // console.log(value);
    let secondValue = arr[reversedIndex];
    // console.log(secondValue);

    arr[i] = secondValue;

    arr[reversedIndex] = value;
  }

  console.log(arr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);

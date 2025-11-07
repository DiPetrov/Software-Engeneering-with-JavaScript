function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let reversedIndex = arr.length - 1 - i;
    let value = arr[i];
    let secondValue = arr[reversedIndex];
    arr[i] = secondValue;
    arr[reversedIndex] = value;
  }

  console.log(arr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);

function reverseArrayNumbers(num, arr) {
  let newArray = [];
  let reversedArray = [];

  for (i = 0; i < num; i++) {
    newArray.push(arr[i]);
  }

  for (let j = num - 1; j >= 0; j--) {
    let currentElement = newArray[j];
    reversedArray.push(currentElement);
  }

  console.log(reversedArray.join(' '));
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);

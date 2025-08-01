function arrayRotation(arr, rotations) {
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];

    if (i < rotations) {
      arr.push(currElement);
    }
  }

  for (let k = 1; k <= rotations; k++) {
    arr.shift();
  }

  console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

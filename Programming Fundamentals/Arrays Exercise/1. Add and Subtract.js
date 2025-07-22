function addAndSubtract(arr) {
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    oldSum += currNum;

    if (currNum % 2 === 0) {
      arr[i] += i;
      newSum += arr[i];
    } else {
      arr[i] -= i;
      newSum += arr[i];
    }
  }

  console.log(arr);
  console.log(oldSum);
  console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);

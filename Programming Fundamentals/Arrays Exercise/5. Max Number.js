function maxNumber(arr) {
  let topInteger = [];

  for (let i = 0; i < arr.length; i++) {
    let leftNumber = arr[i];
    isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let rightNumber = arr[j];

      if (leftNumber <= rightNumber) {
        isTop = false;
        break;
      }
    }

    if (isTop) {
      topInteger.push(leftNumber);
    }
  }

  console.log(topInteger.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

function solve(elements, bombNumber) {

  let specialBombNumber = bombNumber[0];
  let bombNumberPower = bombNumber[1];
  let sum = 0;

  for (let i = 0; i < elements.length; i++) {
      let currentNumber = elements[i];

      if (currentNumber === specialBombNumber) {
          let startIndex = i - bombNumberPower;
          let endIndex = i + bombNumberPower;

          if (startIndex < 0) {
              startIndex = 0;
          }

          if (endIndex > elements.length - 1) {
              endIndex = elements.length - 1;
          }

          elements.splice(startIndex, endIndex - startIndex + 1);
          i--
      }

  }

    for (let num of elements) {

        sum += num;
    }

    console.log(sum)
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
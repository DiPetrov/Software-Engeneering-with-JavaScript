function sumDigits(num1) {
  let newNum = String(num1);

  let sum = 0;
  for (let i = 0; i < newNum.length; i++) {
    let currentNum = Number(newNum[i]);
    sum += currentNum;
  }

  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

function numbersStep(input) {
  let n = Number(input[0]);
  let min = Number.POSITIVE_INFINITY

  for (var i = 1; i <= n; i++) {
    let num = Number(input[i])

    if (num < min) {
     min = num;
    }
  }
  console.log("min = " + min);
}
numbersStep(["6677"]);

function solve(arg1, arg2, arg3) {


  let first = arg1.charCodeAt(0);
  let second = arg2.charCodeAt(0);
  let skiped = arg3;

  let array = [];
  let count = 0;
  let g = '';
  for (let i = first; i <= second; i++) {
    for (let j = first; j <= second; j++) {
      for (let k = first; k <= second; k++) {
        let firstLetter = String.fromCharCode(i);
        let secondLetter = String.fromCharCode(j);
        let thirdLetter = String.fromCharCode(k);

        if (
          firstLetter !== skiped &&
          secondLetter !== skiped &&
          thirdLetter !== skiped
        ) {
          count++;
          g += firstLetter + secondLetter + thirdLetter + ' ';
          array.push(firstLetter + secondLetter + thirdLetter);
        }
      }
    }
  }
  
  array.push(count);
  console.log(array.join(' '));
}
solve(['a', 'b', 'c'])
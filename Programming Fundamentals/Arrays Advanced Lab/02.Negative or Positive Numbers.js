function solve(arr) {

 arr = arr.map(Number);

 let result = [];

 for (let number of arr) {
  if (number < 0 ) {
   result.unshift(number);
  } else {
   result.push(number);
  }
 }

 for (let number of result) {
  console.log(number);
  
 }
}
solve(['7', '-2', '8', '9']);
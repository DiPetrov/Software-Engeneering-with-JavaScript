function mergeArrays(arr1, arr2) {
let resultArray = [];

for (let i = 0; i < arr1.length; i++) {
 if (i % 2 === 0) {
  let firstNumber = Number(arr1[i]);
  let secondNumber = Number(arr2[i]);
  resultArray.push(firstNumber + secondNumber);

 } else {
  let firstString = arr1[i];
  let secondString = arr2[i];
  resultArray.push(firstString + secondString);
 }
}

console.log(resultArray.join(' - '));

}

mergeArrays(
  ['5', '15', '23', '56', '35'],
  ['17', '22', '87', '36', '11']
);
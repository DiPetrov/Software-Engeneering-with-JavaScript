function commonElements(arr1, arr2) {
for (let firstArrElement of arr1) {
 for (let secondArrElement of arr2) {
  if (firstArrElement  === secondArrElement) {
   console.log(firstArrElement);
   
  }
 }
}


}

commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],

  ['Petar', 10, 'hey', 4, 'hello', '2']
);
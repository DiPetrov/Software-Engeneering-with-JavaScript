function printNthElement(arr) {
  let nStep = Number(arr[arr.length - 1]);
  let collections = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currentElement = arr[i];

    if (i % nStep === 0) {
      collections.push(currentElement);
    }
  }

  console.log(collections.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);

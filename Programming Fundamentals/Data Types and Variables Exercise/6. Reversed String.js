function reversedString(input) {
  let newString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    let currentLetter = input[i];
    newString += currentLetter;
  }

  console.log(newString);
}

reversedString('Information');
reversedString('star');
reversedString('racecar');

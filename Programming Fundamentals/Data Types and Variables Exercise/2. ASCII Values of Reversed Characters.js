function asciiValuesOfReversedCharacters(char1, char2, char3) {
  console.log(`${char3}${char2}${char1}`);
  
  console.log(
    char3.charCodeAt() + ' ' + char2.charCodeAt() + ' ' + char1.charCodeAt()
  );
 
  
}

asciiValuesOfReversedCharacters(
  'a',

  'b',

  'c'
);

function repeatString(str, repeat) {

 let result = '';

 for (let i = 0; i < repeat; i++) {
  result += str;

  
 }

return result;

 
}

let result = repeatString('abc', 3);

console.log(result);

function houseParty(arr) {

   let result = [];

   for (let command of arr) {
       let name = command.split(' ')[0];

       if (command.includes('is going')) {
           if (result.includes(name)) {
               console.log(`${name} is already in the list!`)
           } else {
               result.push(name);
           }
       } else if (command.includes('is not going')) {
           if (result.includes(name)) {
               let idx = result.indexOf(name);
               result.splice(idx, 1);
           } else {
               console.log(`${name} is not in the list!`)
           }
       }
   }

    console.log(result.join('\n'));

}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);






let person = {
  name: 'Ivan',
  age: 25,
  email: 'ivan@vankata.com',
};

let name = person.name;
let age = person.age;

person.age = 26;
delete person.age;
person.password = 'randomPassword';
console.log(person.name);
console.log(age);

person['name'] = 'Gosho';

console.log(person);



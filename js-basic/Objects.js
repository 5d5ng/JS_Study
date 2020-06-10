let name = 'Mosh'
let age = 30;

let person = {
    name: 'Dave',
    age:25
};
//Dot Notation
person.name = 'John';

//Bracket Notaion
person['name'] = 'Mary';

let selection = 'name';
person[selection] = 'MMMM' //Bracket Notation이 편한 경우
console.log(person.name);

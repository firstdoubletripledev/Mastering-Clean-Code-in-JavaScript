const Person = require('./person');
const { greet, printPerson } = require('./utilities');

let p = new Person("John", "Smith", 42);
printPerson(p);
greet(p);

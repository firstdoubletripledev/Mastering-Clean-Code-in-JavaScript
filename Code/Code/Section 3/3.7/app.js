import { Person } from './person';
import { checkIfAdult, greet } from './utilities';

let p = new Person("John", "Smith", 29);

checkIfAdult(p);
greet(p);
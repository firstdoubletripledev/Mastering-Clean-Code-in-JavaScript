export function greet(person) {
    console.log(`Hello ${person.firstName}`);
}

export function checkIfAdult(person) {
    if(person.age >= 18) {
        console.log(`${person.firstName} is an adult`);
    }
    else {
        console.log(`${person.firstName} is not an adult`);
    }
}

export function printPerson(person) {
    console.log(person);
}
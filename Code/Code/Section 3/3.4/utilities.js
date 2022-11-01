function printPerson(p) {
    console.log(`${p.firstName} ${p.lastName} - ${p.age}`);
}

function greet(p) {
    console.log(`Hello, I'm ${p.firstName}`);
}

module.exports = {
    printPerson: printPerson,
    greet: greet
}
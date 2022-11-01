let todos = [
    { task: 'Buy eggs', completed: false },
    { task: 'Feed the dog', completed: true },
    { task: 'Study for the exam', completed: true },
    { task: 'Cook dinner', completed: false }
];

function makePending(todos) {
    // for(let i=0; i<todos.length; i++) {
    //     todos[i].completed = false;
    // }
    todos.forEach((todo, index) => {
        todo.completed = false
    });
}

console.log(todos);
console.log();
makePending(todos);
console.log(todos);

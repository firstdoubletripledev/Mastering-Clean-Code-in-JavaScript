let todos = [
    { task: 'Buy eggs', completed: false },
    { task: 'Feed the dog', completed: true },
    { task: 'Study for the exam', completed: true },
    { task: 'Cook dinner', completed: false }
];

function identify(todos) {
    // for(let i = 0; i<todos.length; i++) {
    //     todos[i].id = i+1;
    // }
    return todos.map((todo, index) => {
        return {
            ...todo,
            id: index + 1
        }
    });
}

console.log("Todos before: ", todos);
let identified = identify(todos);
console.log("Todos after: ", identified);
let numbers = [
    6, 8, 3, 14, 1, 9, 10
];

//Task: Get the even numbers
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 == 0);
}
// function getEvenNumbers(numbers) {
//     let even = [];
//     for(let num of numbers) {
//         if(num % 2 == 0) {
//             even.push(num);
//         }
//     }
//     return even;
// }

console.log(getEvenNumbers(numbers));
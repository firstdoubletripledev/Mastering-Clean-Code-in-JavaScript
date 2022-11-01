let numbers = [
    2, 9, 8, 7, 6
];

//Task: Iterate all numbers
//If a number is even -> take its half and sum it
//If a number is odd -> sum it
function numbersSum(numbers) {
    return numbers.reduce((accumulator, current) => {
        if(isEven(current)) {
            return accumulator + current / 2;
        }
        else {
            return accumulator + current;
        }
    }, 0);
}

// function numbersSum(numbers) {
//     let sum = 0;
//     for(let num of numbers) {
//         if(num % 2 == 0) {
//             sum += num/2;
//         }
//         else {
//             sum += num;
//         }
//     }
//     return sum; //should be 24
// }

function isEven(num) {
    return (num % 2 == 0);
}

console.log(numbersSum(numbers));


export function calculateAvg(numbers) {
    if(!numbers) {
        throw new Error("Invalid input");
    }
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return (sum / numbers.length);
}

var myForm = document.getElementById('myForm');
var numbersInput = document.getElementById('numbers');
var avgSpan = document.getElementById('avgSpan');
myForm.onsubmit = function(e) {
    e.preventDefault();
    let numbers = numbersInput.value.split(',').map(num => parseFloat(num));
    let avg = calculateAvg(numbers);
    avgSpan.textContent = avg;
}
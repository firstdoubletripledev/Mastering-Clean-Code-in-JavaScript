const { calculateAvg } = require('./avg-calculator');

let testNumbers = [4, 5, 3];
let avg = calculateAvg(testNumbers);
if(avg == 4) {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed");
}

try {
    avg = calculateAvg(null);
}
catch(err) {
    if(err == "Error: Invalid Input") {
        console.log("Test 2 Passed");
    }
    else {
        console.log("Test 2 Failed");
    }
}
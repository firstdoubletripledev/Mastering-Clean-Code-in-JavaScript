try {
    var myFunc = {};
    // function myFunc() {
    //     console.log("This is my function");
    // }
    myFunc();
}
catch(err) {
    console.log("Oops! Something went wrong...");
}
finally {
    console.log("Runs everytime...");
}
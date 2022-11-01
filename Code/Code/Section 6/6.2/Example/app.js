function getProfile() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve({
                firstName: 'John',
                lastName: 'Smith',
                age: 43
            });
        }, 3000);
    })
}

getProfile().then(profile => {
    console.log("Profile fetched: ", profile);
    var myFunc = {};
    myFunc();
}).catch(err => {
    console.log("An error has occurred: ", err);
})
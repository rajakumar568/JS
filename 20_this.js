// // Value of this in Node environment is {} (empty) and value of this (global object) in browser is window object.

// const user = {
// userName: "Raja",
// age:22,

// WelcomeMessage: function()
// {
//     console.log(`Welcome ${this.userName}, hope you are doing well.`);

//     // console.log(this);

// }
// }

// user.WelcomeMessage()
// user.userName="Binod";
// user.WelcomeMessage()
// user.userName="Pulkit";
// user.WelcomeMessage()


// console.log(this);


// // --- Arrow Funciton -=  --

// function ThisCheck()
// {
//     let userName="Raja"
//     console.log(this.userName);
// }

// // // this can be only used in object not in function
// ThisCheck()


// const thisCheck = function () {
//     let userName = "Raja"
//     console.log(this.userName);
// }

// const thisCheck = () => {
//     let userName = "Raja"
//     console.log(this);
// }

// thisCheck()
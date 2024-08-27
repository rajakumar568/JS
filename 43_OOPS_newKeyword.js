// const user = {
//     username: "Raja Kumar",
//     language: "Hindi",

//     getUserDetails: function () {
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
        
//     }

// }

// console.log(user.username);
// console.log(user.getUserDetails());
// // user.getUserDetails();


// new is a constructor function. It create a new context(instance).
// const promiseOne=new Promise()
// const date= new Date()



function User(username,language) {
    this.username=username;
    this.language=language;

    this.greetings=function () {
        console.log(`Welcome dear ${this.username}`);
        
    }
    // By default it  returns the value implicitly. If we will not return this still it will return the value of the function.

    // return this;
}

const userOne=new User("raja","hindi");

//This will override the username and hindi to binod and hindi.
// new keyword will create new instance evertime and will deny the value override
const userTwo=new User("binod","hindi");

// console.log(userOne);
// console.log(userTwo);


// 4 Step process after using new keyword

// New alwasy create empty instance called object
// A new constructor function is called after that.
// All arguments are inject in this keyword.
// We get the function as output.

console.log(userOne.constructor);




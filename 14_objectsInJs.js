// Singleton Object
// This is constructor method to create a object. 
// Object.create

const mySymbol=Symbol("first Key")
const JsUser={
    name:"Raja",
    "full name":"Raja Kumar",
    age:22,
    location:"Bihar",
    email:"rajakumarsah@gmail.com",
    isLoggenIn:false,
    lastLoggenIn:["Monday","Saturday"],
    [mySymbol]:"newSymbol"
}


// console.log(JsUser["email"]);
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof[mySymbol]);

JsUser.email="rajakumar@outlook.com"
// //This will freeze the object, which will not allow to do change in object.
// Object.freeze(JsUser)
JsUser.email="raja@gmail.com"
// console.log(JsUser);


//Functino is JS
// JsUser.greetings=function()
// {
//     console.log("Hello learner, keep learning.");
// }
// JsUser.greetings();


// JsUser.greetingTwo=function()
// {
//     console.log(`Hello Mr. ${this["full name"]}`);
// }
// JsUser.greetingTwo();



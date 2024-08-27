// let myName="  Raja Kumar    "
// console.log(`Length of string ${myName.length}`);

// // trim removes the empty space from the start and end of the string.


// console.log(`Length after removing space from front and end ${myName.trim().length}`);

// trueLength

let myHeros = ["thor", "spiderMan"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidePower: function () {
        console.log(`Spidy power is ${this.spiderman}`);

    }
}


// This method will add a new function in the universal object. Here we have reached the high level hierarchy and added a function to the root level.
Object.prototype.forAllObject = function () {
    console.log(`Present in all object.`);

}

// This will be only available for array
Array.prototype.greetings = function () {
    console.log("Hello there");

}

// heroPower.forAllObject();
// heroPower.getSpidePower();



// myHeros.forAllObject();
// myHeros.greetings();



// Inheritance 

const User = {
    name: "Raja",
    email: "raja@example.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const technicalSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    // This will access the properties of TeachingSuport in technicalSupport
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// New approach for inheritance

// Here TeachingSupport will access the properties of Teacher. Eventually all the properties of Teacher will be injected to TeachignSupport.
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="ChaiAurCode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

// Here anotherUsername is calling the function  trueLength so it will give output 11.
anotherUsername.trueLength()

// Here string Adarsh will call the trueLength so it should return 6.
// It will always give output regarding the current context.
"Adarsh".trueLength();
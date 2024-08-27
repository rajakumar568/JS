function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


// In JavaScript everything is a object. Function is a function and object as well.
// JS work on the concept of inheritance. 


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`Username is ${this.username}`);
    console.log(`Score is ${this.score}`);

}

const raja = new createUser("Raja", 251);
const binod = new createUser("binod", 251);


raja.printMe();

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
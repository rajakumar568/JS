// console.log('John');

// Now we will learn to define function 

// let sayHello = function (name) {
// // this Symbol is used to print like a fstring
//     console.log(`Greeting message for you,dear ${user}`);
//     console.log(`Hey ${name}`);
// }

// // Here we have called the function 
// sayHello('KING')

// let fullNameMaker = function (firstName,lastName) {
//     console.log('Welcome to Kingdom'); 
//     console.log(`Happy to have you,${firstName} ${lastName}`);

// }
// // when we pass parameter to the function, we should keep mind of the datatype which we want  
// fullNameMaker('Raja','Kumar')



let myAdder=function (num1,num2) {
    let added=num1+num2;
    return added
}
// myAdder(1,2)
// above method will not return the value 
// down method is to print value when you directly return the value 
console.log(myAdder(3,5));
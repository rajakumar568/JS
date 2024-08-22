// // By default it is explicit return type

// const SumOfTwoNumber=(num1,num2)=>
// {
//     return num1+num2;
// }

// // Here we have concept of implicit return.

// const SumOfTwoNumber=(num1,num2)=> (num1+num2)

// console.log(SumOfTwoNumber(2,3));

// // Here by using parenthesis over curly breaces we have made this explicit function and return the object.
const SumOfTwoNumber = (num1, num2) => ({ username: "Raja Kumar" })
console.log(SumOfTwoNumber(2, 3));

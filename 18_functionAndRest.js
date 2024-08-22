// //Triple dot is considered as rest and spread operator. It's use is completly depend on the need.

// //Here we are using it as a rest.
// //It will return all the value passed into the function.

// function calculateTotalPrice(...num1 ) {
//     return num1;
// }

// console.log(calculateTotalPrice(100,200,300,400));



// //Here ...num1 will return [300, 400,500] only as temp1 and temp2 will store 100 and 200.

// function calculateTotalPrice(temp1,temp2,...num1 ) {
//     return num1;
// }

// console.log(calculateTotalPrice(100,200,300,400,500));



// //Dealing with object in function.

const user = {
    username: "Raja Kumar",
    age: 22
}

function handleObject(inputObect) {
    console.log(`User name is ${inputObect.username} and his/her age is ${inputObect.age}`);
}

// handleObject(user)

// //We can pass object directly.
handleObject({
    username:"Raja Kumar",
    age:22
})

const tempArray=[200,300,400]

function ReturnSecondValue(tempArr)
{
return tempArr[1]
}

console.log(ReturnSecondValue(tempArray));

// //We can pass array directly.

console.log(ReturnSecondValue([1,2,2,4]))

// console.log(Math.round(Math.PI));
// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// This is the output of this console log where we can see that it has already defined that it cannot be writable or enumerable and ocnfigurable. In similar way when we will write our program later on we can make such type of object where the user will not be able to modify the values.
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }



const chai = {
    name: 'adark wali chai',
    price: 10,
    isAvailable: true,
    print: function () {
        console.log("Okay sir,thik hai ! ");

    }
}
// Here we can see that the properites of name are writable, enumerable and configurable.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    // configurable: false
})

// Object can be iterated or not it depends upon the situation. 

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// const chaii = {
//     name: "adark wali",
//     price: 10,
//     print: function () {
//         console.log("Okay sir,thik hai ! ");

//     }
// }

for (const [key, value] of Object.entries(chai)) {

    //Here we can see that the function is also get printed so we will add a check condition.

    if (typeof value !== 'function') {
        console.log(`${key} : -  ${value}`);
    }


}


// function PrintName() {
//     console.log("Hello There, how are you ?");
// }
// PrintName()

// //This will not return any value since we are not returning anything.
// function PrintSum(num1,num2) {
//     console.log("Sum is : ",num1+num2);
// }
// PrintSum(1,2)

// //This will return some value
// function ReturnSum(num1,num2)
// {
//     return (num1+num2)
// }

// let sum=ReturnSum(1,2)
// console.log("Sum of given number is : ",sum);



// //Print user login details.
// //Here we can define default value of the user
function PrintLoggedinUser(user = "Mr.X") {
    // //Here we can add some check that what if the entered value is empty or null. 
    // /If we don't pass value it is considered as undefined.
    if (!user) {
        return "Kindly enter value dear user."
    }
    return `Welcome dear ${user}, you just logged in.`
}

console.log(PrintLoggedinUser("Raja"))
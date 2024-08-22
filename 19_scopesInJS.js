// // var doesnot maintain the boundary of scope.
//  var temp=30;

// let temp=1;
// if (true) {
//     let temp=100;
//     // var temp=100;
//     let tt=200;

//     console.log(temp);

// }

// console.log(temp);

// console.log(temp);

// //Here we will get error because let and const doest cross the scope boundary.
// console.log(tt);



// //*** Scopes are different in browser and running program in PC using Node. ***

// //Child can access the value of Parent but Parent can not access the value of Child.
// function Parent() {
//     let temp = 100;
//     function Child() {
//         let temp2 = 200;
//         console.log(temp);
//     }
//     Child();

//     // // We can not access the temp2 value because it is in Child scope.
//     // // console.log(temp2);
// }
// Parent();

// // This is function but sometimes is also considered as expresion.

// // In this we can not call the function before the declaration because we are storing the value somewhere. Executing the next line will give error.
// // PrintName("Raja")
const PrintName =function(name)
{
    console.log("User name is : ",name);
    
}

PrintName("Raja")

PrintName2("Raja")


function PrintName2(num1) {
    console.log("User is : ",num1);
    
}
// const promiseOne=new Promise(function(resolve,reject)
// {
//     //DO an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete.');
//         // This will link the resolve with then.
//         resolve()        
//     }, 1000);
// })

// // // Async task will always complete first then it will print promised consumed
// promiseOne.then(function(){
//     console.log("Promisde consumed");

// })




// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("Async task 2. ");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved. ");

// })




// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function() {
//         // // We can pass data by resolve in form of object
//       resolve({username:"Raja ",email:"rajakumar@gmail.com"})  
//     }, 1000);
// }) 

// promiseThree.then(function(user){
//     console.log(user);

// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "king", password: "king" })
//         }
//         else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// const userName = promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username

//     })
//     .then((username) => { 
//         console.log(username);

//     })
//     .catch(function (error) {
//         console.log(error);

//     })
//     .finally(()=>console.log("The promise has been called or rejected. "))



// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "JS", password: "123" })
//         }
//         else {
//             reject('Error: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }

// }

// consumePromiseFive()


// async function getAllUsers(){
//   try {
//     const response = await fetch( 'https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E : ",error); 
//   }
// }
// getAllUsers()

fetch('https://api.github.com/users/rajakumar568')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=>console.log(error))
.finally(()=>{
    console.log('Program executed');
    
})
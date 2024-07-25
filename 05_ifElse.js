// var num=10
// if (num>5) {
//     console.log("good");    
// } else {
//     console.log("not bad");
// }


// var whoIsHere="teacher"
// if (whoIsHere==="user") {
//     console.log("You are allowed to watch lecture");
// } 
// else if(whoIsHere=="teacher"){
//     console.log("You are allowed to record lecture");
// }else {
//     console.log("Not authorized");
    
// }


// with the help of this stuff we can control the acces of user to the content of the website 

let isVerified=true
let isLoggedIn=true
let hasPaymentToken=true
let isGuest=true

if (isVerified&&isLoggedIn&&hasPaymentToken) {
    console.log("Greeting for user");
    console.log("Grant acces to paid course");
}
else if(isVerified||isGuest){
    console.log("Allow free previews");
}
else{
    console.log("Better luck next time");
}
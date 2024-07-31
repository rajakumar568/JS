//this is non singleton object.
// const instaUser2={}

//this is singleton object.
const instaUser=new Object()

instaUser.id="01251"
instaUser.name="Raja Kumar"
instaUser.isloggedIn=false

// console.log(instaUser);

const regularUser={
    email:"raja@gmail.com",
    fullName:{
        userFullName:{
            firsName:"Raja",
            lastName:"Kumar"
        }
    }
}
// //this is nesting
// //? is used whenever we fetch value from API. If the value will not be fetched then what to do.

// console.log(regularUser.fullName.userFullName.firsName);

const object1={1:"a",2:"b"}
const object2={2:"d",3:"d"}
const object3={4:"e",5:"f"}

// const ob3={object1,object2}
// //In this first object considered as a target all value will be copied in first object.
// //If we put object1 at first rather then empty object all value will be copied to object1.

// const ob3=Object.assign({},object1,object2,object3)
// console.log(ob3);


// //Again we will be using sprea operator here.
const obj3={...object1,...object2,...object3}
// console.log(obj3);


console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
 
console.log(instaUser.hasOwnProperty('name'));


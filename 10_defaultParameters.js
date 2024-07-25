// let myMultiplier=function (n1,n2) {
//     // let m=n1*n2
//     // return m
//     return n1*n2 
// }
// console.log(myMultiplier(4,5));


// here in function we have given default parameter so that in case of function execution if we will not pass parameter it will not generate error, after passing parameter it will print passed value 
let guestUser = function (name='unName',courseCount=0) {
    return 'HElllo  '+ name +' and your course count is ' + courseCount
    
}
// console.log(guestUser('king',1000));
console.log(guestUser());
let name=null
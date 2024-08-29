// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const raja = new User("raja", "raja@ex.com", "thikhai")

// console.log(raja.encryptPassword());
// console.log(raja.changeUsername());


// Without class how it would be done

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
     return `${this.username.toUpperCase()}`
}


const binod = new User("raja", "raja@ex.com", "thikhai")

console.log(binod.encryptPassword());
console.log(binod.changeUsername());

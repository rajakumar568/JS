class User {
    constructor(username) {
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    // It stop the access of instance 
    static createId(){
        return `123`
    }
}

const hitesh=new User("Hitesh")
// This property can not be acces because it is declared static in the class 
// console.log(hitesh.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email=email;
    }
}

const Iphone=new Teacher("Iphone8","Iphone@ex.com")
Iphone.logMe();

//Even we have extended the class we will not be able to access the value.
console.log(Iphone.createId());

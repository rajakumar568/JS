class User{
    constructor(username)
    {
        this.username=username
    }

    logMe(){
        console.log(`Welcome dear ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        //this will automatically call the User class and access the username and get the value
        super(username)
        // this.username=username;
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
        
    }
}

const raja=new Teacher("Raja","raja@ex.com","thikhai")

raja.logMe();
raja.addCourse();
const chai=new User("Adarsh");
chai.logMe()


console.log(chai instanceof User);
console.log(chai instanceof Teacher);

console.log(raja instanceof Teacher);
console.log(raja instanceof User);


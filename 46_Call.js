function SetUsername(username) {
    this.username=username;

    console.log("Function is working properly. ");
    
}

function createUser(username,email,password) {
    // // Here it is passing only ref so value will not be updated. We have another method to overcome this.
    // SetUsername.username;
    
   // // this will call the function but it will not update the value. 
    // SetUsername.call(username)

    SetUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const chai=new createUser("Chai","Chai@ex.com","123")

console.log(chai);

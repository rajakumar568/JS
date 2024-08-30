class User {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }

    // get pass(){
    //     return this._pass.toUpperCase();

    // }

    // Here the password set to the datbase is different but anybody want to access the password they will get the value which we have defined here.
    get pass() {
        return `${this._pass}chintapakdamdam`;

    }

    // Bascially it will create a new value and update the password. If we will not use underscore it will generate an error of call stack and program will not be able to executed.
    set pass(value) {
        // this._pass=value.toUpperCase();

        // The password in database will be set in small alphabet but if anybody will access the password they will get it in capital letters.

        this._pass = value;
    }
}

const raja = new User("Raja", "thikhai")
// console.log(raja.pass);





// --------- getter and setter using funciton ----------

function Usser(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email.toUpperCase()
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this.__password.toUpperCase()
        }
    })
}

const Raja=new Usser("raja@ex.com","abc");

// console.log(Raja.email);


// ------ getter and setter using object --------


const USER={
    _email:'thikhai@ok.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea=Object.create(USER)

console.log(tea.email);

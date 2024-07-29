// Dates

let tempDate = new Date()
// console.log(tempDate.toString());
// console.log(tempDate.toDateString());
// console.log(tempDate.toLocaleString());
// console.log(typeof tempDate);

// let createDate = new Date(2023, 0, 23)
// let createDate = new Date(2023, 0, 23, 5, 3)
// let createDate = new Date("2023-01-14")
let createDate = new Date("01-14-2023")
// console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


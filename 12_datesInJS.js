let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//Month counting starts from0
// 0 - January
// 1 -  February 
let declareDefaulDate = new Date(2024,6,28);
// Format is year-month-date, it can be changed according to need.
console.log(declareDefaulDate.toDateString());

let declareDateTime  = new Date(2024,6,24,1,9,20)
console.log(declareDateTime.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate =  new Date();
console.log(newDate);
//It will return value less by 1 as the month counting starts from 0.
console.log(newDate.getMonth()+1);
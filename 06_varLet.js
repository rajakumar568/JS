let iAmGlobal='someValue'

if (true) {
    let iamLocal='someMoreValue'
    // value can be modified in in local scope 
    let iAmGlobal='superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
}

// we can not use iamLocal outside of the scope since it is a local variable

// var is used to make varibale global and let is used to declare variable in scope 


// if we change let to var in scope it can be printed 
// console.log(iamLocal);

console.log(iAmGlobal);

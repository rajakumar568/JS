// Nullish Coalescing Operator (??) : null undefined.
// Basically it is used when we work with the datbase. Sometime we get two value and before considering output we check which value is not null or defined.


let val1;

// val1=5??09;
// val1=null??10;
// val1=undefined ?? 11;
val1=undefined ?? 11 ?? 12;


console.log(val1);


// // Terniary operator

// // condition ? true : false


const age=22;

age>=18 ? console.log("You can vote. "): console.log("you can not vote.");
;

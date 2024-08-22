// // *** To avoid global scope polution and execute function immediately we use IIFE. ***


// // Sytac is atfirst we write function and the output in first parenthesis and just after that put another parenthesis that will execute the function instantly

// /// This is named IIFE and downward using arrow function is unnamed IIFe
(function PrintName()
{
console.log("Jai Shree Ram");
})();
// // Sometime we need to use semicolon to maintain the boundaries of the program.
// // We can write this using arrow function as well.
( ()=>{
console.log("Har Har Mahadev");
})();


( (name)=>{
console.log(`Author name is ${name}`);
})("Raja")
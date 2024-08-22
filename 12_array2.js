const MCU=["IronMan","Wanda","Captain America"];

const DC=["Wonder Woman","BatMan","Flash"];

// //Here you can see that once we are pushing DC in MCU, DC is considered as single element in MCU.
// MCU.push(DC);
// console.log(MCU);
// //In this way we can access the second array element.
// console.log(MCU[3][1]);


// //Cocat basically add the given two array and store it in new array. 
// const allElementOfArray=MCU.concat(DC);
// console.log(allElementOfArray);

// // Concat can add upto two array at once. To overcome this we have spread operator.
// // Spread basically stores all array value in once.
// const mainArray=[...MCU,...DC];
// console.log(mainArray);

// // Now we have "flat" method. 
// // It copies all the array element in one single array in case of nested array. 

// const flatArrayRawvalue=[1,2,[3,4,],[5,[6,7,8]]];
// const flatArray=flatArrayRawvalue.flat(Infinity);
// console.log(flatArray);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Raja Kumar"));

// let n1=101;
// let n2=102;
// let n3=103;

// console.log(Array.of(n1,n2,n3));
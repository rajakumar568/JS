// These are two different way in which we can declare a array 

// const Arr=[1,2,3];
// console.log(Arr[0]);

const Arr2=new Array("LPU","CU","DU");

// console.log(Arr2);
// Arr2.push(1);
// console.log(Arr2);
// Arr2.pop();
// console.log(Arr2);

//This operation will add value at the begining of the array but it will consume a lot of time because it will have to shift all the elements by 1.
Arr2.unshift("Inserting at first Index");
// console.log(Arr2);

//It will remove value from the starting index. 
Arr2.shift();
// console.log(Arr2);

//This check whether the value is present in the array or not and return it in boolean form.
// console.log(Arr2.includes('LPU'));

// console.log(Arr2.indexOf('LPU'));


//It binds and change to string.
const newArr=Arr2.join();  
// console.log(newArr);


const arrr=[0,1,2,3,4,5,6];
console.log("A",arrr);
//This print the value in between the range (exclusive ).
const temp1=arrr.slice(2,4);
console.log(temp1);
console.log("B",arrr);
//This is basically used to delete the item of array. Ex:- splice(2,4) it will delete 4 items from index.
//It modifies the original array while slice is used for extraction only.
const temp2=arrr.splice(2,4);
console.log(temp2);
console.log("C",arrr);

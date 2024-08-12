// for (let temp = 0; temp < 10; temp++) {
//     // const element = temp;   
//     console.log(temp);

// }

// const arr=[0,11,25,53,25,53]
// for (let index = 0; index < arr.length; index++) {
//     // const element = arr[index];
//     // console.log(element);
//     console.log(index);

// }


// // break and continue

// for (let i = 1; i < 5; i++) {
//     if (i==3) {
//         console.log(`3 has been detected, loop will be terminated.`);
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 5; i++) {
//     if (i==2) {
//         console.log(`2 has been detected, 2 will be skipped.`);
//         continue;
//     }
//     console.log(i);
// }



// for of loop

// const arr = [1, 2, 3, "raja" ,"binod",true,false,"Loop End"]
// for (const num of arr) {
//     console.log(num);
// }


// // Map :- For of loop on Map.
// // Map hold key pair value. It holds unique values.
// // Map can be not be iterated using forin loop.
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);

// // [key,value] it will hold different value of map.  

// for(const [key,value]  of map)
// {
//     console.log(value);
// }


// // FOR IN loop for object.

const myObject = {
    name: "Raja Kumar",
    age: 22,
    education: "B. Tech"
};
for (const key in myObject) {
//    console.log(`${key} is mapped with ${myObject[key]}`)
}

const tempArr=[1,2,3,4,5]
for (const key in tempArr) {
   console.log(tempArr[key]);
   
}
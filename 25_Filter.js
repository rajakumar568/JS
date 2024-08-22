const tempNums=[1,2,3,4,5,6,7,8]

// const newNums=tempNums.filter((num)=>{
//     return num>4;
// })
// console.log(newNums);

const newNums=[]
tempNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
}) 

console.log(newNums);

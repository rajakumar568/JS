const num = [1, 2, 3, 4, 5, 6, 7, 8,]

const temp = num.map((numm) => { return numm + 10 })

// console.log(temp);
let tempAns = []
num.forEach((numm) => {
    tempAns.push(numm + 10);
})

// console.log(tempAns);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num < 40)
console.log(newNums);

const myNums=[1,2,3,4]

const totalValue=myNums.reduce(function(accumulator,currentValue){
    // console.log(`accumulator :- ${accumulator} and currentValue is :- ${currentValue}`);
    
    return accumulator+currentValue;
},0)

// // 0 -> is accumulator value

// console.log(totalValue);


const total =myNums.reduce((acc,curr)=>acc+curr,0)

// console.log(total);

const books=[
    {
        name: "king",
        price:500
    },
    {
        name:"binod",
        price:150
    },
    {
        name:"gope",
        price:120
    },
]

const finalPrice=books.reduce((acc,item)=>acc+item.price,0)
console.log(finalPrice);





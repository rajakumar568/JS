// Array
 

// const superHeroes=['Iron Man','Spider Man','Captain America','Ant Man']
// console.log(superHeroes);
// console.log(superHeroes.length);
// console.log(superHeroes[0]); //iron man will be printed
// console.log(superHeroes[superHeroes.length-1]);


// for (let i = 0; i < superHeroes.length; i++) {
//     // const element = superHeroes[i];
//     console.log(superHeroes[i]);
// }

// // this is basically used as fstring 

// console.log(`We have ${3+4} super heroes`);


const numbers=['one','two','three','four','five']

numbers[0]='beingAdded'

//how we can deal with first
//  numberShift:- first element ki maa chud gyi
// numbers.shift()
console.log(numbers.shift());

// it add new value at begining
numbers.unshift('something')
console.log(numbers);

//how we can deal with the end part

// this will delete last Element
console.log("Element to be deleted is"+numbers.pop());
console.log(numbers);

numbers.push('Five')
console.log(numbers);


// middle
// atfrst it takes starting value than how much than add 
numbers.splice(2,2,'middleAdded')
console.log(numbers);
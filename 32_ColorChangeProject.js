// const buttons=document.querySelectorAll('.box')
// // console.log(buttons);
// const body=document.querySelector('body')

// buttons.forEach(function(button){
//     // console.log(button);
//     button.addEventListener('click',function(e){
//         // console.log(e);
//         // console.log(e.target);  
//         if (e.target.id==='grey') {
//             body.style.backgroundColor=e.target.id
//         }
//         if (e.target.id==='red') {
//             body.style.backgroundColor=e.target.id
//         }
//         if (e.target.id==='green') {
//             body.style.backgroundColor=e.target.id
//         }
//         if (e.target.id==='blue') {
//             body.style.backgroundColor=e.target.id
//         }
//         if (e.target.id==='aqua') {
//             body.style.backgroundColor=e.target.id
//         }
//     })
    
// })


const buttons=document.querySelectorAll('.box')
const text=document.querySelector('.heading')
const body=document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target.id=='grey') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='red') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='blue') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='green') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='aqua') {
            body.style.backgroundColor=e.target.id
            text.style.color='orange'
        }
    })

})



// Here we are doing some changes for future ref.
console.log("Hello brother")
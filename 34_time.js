const clock = document.getElementById('clock')
// const clock=document.querySelector('#clock')


// setInterval(() => {

// }, 100);

// This keep refreshing the page in the particular interval of given time.


setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
 
const form=document.querySelector('form');

form.addEventListener('submit',function (e) {
    e.preventDefault()

    const name=(document.querySelector('#name').value)

    const height=parseInt(document.querySelector('#height').value)

    const weight=parseInt(document.querySelector('#weight').value)

    const result=document.querySelector('#result')


    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0 || typeof name !=='string' || name ===' ') {
        result.innerHTML=`Please enter valid input.`;
    }
    else{
        const bmi = (weight / ((height / 100) ** 2))
        result.innerHTML=`Dear ${name}, your BMI is ${bmi}`
    }

})


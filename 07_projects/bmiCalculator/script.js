const form = document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results')
    const type = document.querySelector('#type')


    if(height=='' || height<=0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }

    else if(weight=='' || weight<=0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        if(bmi>24.9){
            let msg = "Overweight"
        }
        else if(bmi<18.6){
            msg = "Underweight"
        }
        else{
            msg = "Normal"
        }
        results.innerHTML = `<span>${bmi}</span>`
        type.innerHTML = `<span>${msg}</span>`
    }
})
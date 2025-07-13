const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault(); //stop the default action. i.e: do not submit any action, stop for now.

    const height=parseInt(document.querySelector('#height').value);
    // console.log(`Weight is: ${height}`);

    const weight=parseInt(document.querySelector('#weight').value);
    // console.log(`Weight is: ${weight}`);

    const results=document.querySelector('#results'); //dint add .value as it is not in the input text. its a separate div container.

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML=`Please give a valid height ${height}`
    }

    else if(weight === ''|| height<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        //show the result
        //results.innerHTML=`<span>${bmi}</span>`;

        if (bmi < 18.6) {
        results.innerHTML=`You're BMI is: <span>${bmi}</span> <br> You're Under Weight!`
        }
        else if (bmi >= 18.6 || bmi == 24.9 ) {
            results.innerHTML=`You're BMI is: <span>${bmi}</span> <br> You're in Normal Range!`
        }
        else {
            results.innerHTML=results.innerHTML=`You're BMI is: <span>${bmi}</span> <br> You're OverWeight!`
        }
    }
    
})

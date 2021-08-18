const pinGenerator = document.getElementById('pin-generator-btn');
const showPin = document.getElementById('showPin')
const calculator =  document.getElementById('calculatorNumber')
const showCalcNumber =  document.getElementById('showCalcNumber')
const pinChecker = document.getElementById('checkPinBtn')
const failedMessage = document.getElementById('notify-failed')
const successMessage = document.getElementById('notify-success')

 // Generate random Pin
function getPin(){
    const randomPin = Math.round(Math.random()*10000)
    const pinDigit = randomPin + '';
    if(pinDigit.length == 4 ){
        return randomPin;  
    }
    else{
        return getPin();
    }
    
}


pinGenerator.addEventListener('click', function(){
//    console.log( getPin());
   showPin.value = getPin();
})


// Input the pin to match the number with generate pin 


calculator.addEventListener('click', function(e){
    const number = e.target.innerText;
    if(isNaN(number)){
        // console.log("not number");

    }
    else{
        const previousNumber = showCalcNumber.value;
    
        const newNumber = previousNumber + number;
        showCalcNumber.value = newNumber
    }
  

})



pinChecker.addEventListener('click', function(){
    if(showPin.value == showCalcNumber.value){
        console.log("Hi ");
        successMessage.style.display='block'
        failedMessage.style.display = 'none'
    }
    else{
        failedMessage.style.display = 'block'
        successMessage.style.display='none'
    }
    showCalcNumber.value = '';
})


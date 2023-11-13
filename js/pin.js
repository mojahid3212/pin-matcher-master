function getPin(){
    const pin=generatePin();
    const pinStr= pin+'';
     if(pinStr.length===4){
        return pin;
     }
     else{
        // console.log(' the pin is ',pin)
        return getPin();
     }
}
function generatePin(){
    const random= Math.round(Math.random()*10000);
    return random;
     
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const displayPin=document.getElementById('display-pin')
    displayPin.value=getPin();
})

document.getElementById('calculator').addEventListener('click',function(event){
    
      const number= event.target.innerText;
      const typedField=document.getElementById('typed-field');
    const previousTypedNumber= typedField.value;
      if(isNaN(number)){
           if(number==='C'){
            typedField.value= '';
           }
           else if(number==='<'){
            const digits=previousTypedNumber.split('');
            digits.pop();
            const remainingDigits= digits.join('');
            typedField.value= remainingDigits;
           }
      }
      else{
        const newTypedNumber= previousTypedNumber+number;
        typedField.value=newTypedNumber;
        
      }
})
const displaySuccessMessege= document.getElementById('display-success');
const displayErrorMessege= document.getElementById('display-error');
document.getElementById('verify-pin').addEventListener('click',function(){
    const randomPin=document.getElementById('display-pin').value;
    const typedPin=document.getElementById('typed-field').value;
    if(randomPin===typedPin){
        displayErrorMessege.style.display='none';
         displaySuccessMessege.style.display='block';
        
    }
    else{
        displaySuccessMessege.style.display='none';
        displayErrorMessege.style.display='block';
       
    }
    
})

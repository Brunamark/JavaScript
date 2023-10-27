const form = document.querySelector('#forms');
form.addEventListener('submit', function(e){
    e.preventDefault(); //this is necessary to show the higher number on this page
    const inputFirstNumber = e.target.querySelector('#input01');
    const inputSecondNumber = e.target.querySelector('#input02');

    let higherNumber = 0;

    const firstNumber = Number(inputFirstNumber.value);
    const secondNumber = Number(inputSecondNumber.value);


    if(!firstNumber){//if is NaN
        setResultado('You have to fullfil the first box with a number!', false);
        return;
    }
    if(!secondNumber){
        setResultado('You have to fullfil the second box with a number!', false);
        return;
    }

    higherNumber = getHigherNumber(firstNumber,secondNumber);
    const msg = `The higher number is ${higherNumber}`;
    setResultado(msg, true);

   

});
function getHigherNumber(number1, number2){
    var number = number1 > number2? number1 : number2;
    return number;
}
function paragraph(){
    const p = document.createElement('p'); //create a paragraph
    p.classList.add('paragraph-result'); //add a class list in this paragraph
    return p;
}
function setResultado (msg, isValid){
    const result = document.querySelector('#results');
    result.innerHTML = '';
    const p = paragraph();
    if(isValid) {
        p.classList.add('paragraph-result');
    }
    else{
        p.classList.add('bad');
    }
    p.innerHTML = `${msg}`;
    result.appendChild(p);
  
}

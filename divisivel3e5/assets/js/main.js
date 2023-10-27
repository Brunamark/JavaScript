const form = document.querySelector('#forms');
form.addEventListener('submit', function(e){
    e.preventDefault(); //this is necessary to show the higher number on this page
    const inputFirstNumber = e.target.querySelector('#input01');

    let msg;

    const firstNumber = Number(inputFirstNumber.value);


    if(!firstNumber){//if is NaN
        setResultado('You have to fullfil the first box with a number!', false);
        return;
    }
    

    msg = divisible(firstNumber);
    setResultado(msg, true);

   

});
function divisible(number1){
    if(number1 % 3 == 0){
        let number = number1 % 5 == 0 ? `This number is divisible for 3 and 5!` : `This number is divisble for 3!`;
        return number;
    }
    else if(number1 % 5 == 0){
        return `This number is divisble for 5!`;
    }
    else{
        return `This number isn't divisible for 3 and 5!`;
    }
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

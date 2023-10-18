/*
function main(){
    const form = document.querySelector('#forms'); //deixa o codigo organizado
    const result = document.querySelector('.result'); //manipular a DOM 

    let imc;
    //const result = document.querySelector('');
    function recebeEventoForm(evento){
        evento.preventDefault();
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        imc = calculoIMC(Number(weight.value), Number(height.value)); //necessária a conversão pq tudo que vem da DOM é string

        result.innerHTML =`<p>O seu IMC é ${imc.toFixed(2)}</p>`;
    }
    function calculoIMC(weight, height){
        return weight/((height/100)**2);
       
    }
    

    form.addEventListener('submit', recebeEventoForm);


}
main();
*/
const form = document.querySelector('#forms');

form.addEventListener('submit', function(e){ // e is equal to event
    e.preventDefault(); //this is necessary to show the imc message on the page
    const inputweight = e.target.querySelector('.weight');
    const inputheight = e.target.querySelector('.height');

    const weight = Number(inputheight.value);
    const height = Number(inputweight.value);

    if(!weight){//if is NaN
        setResultado('Peso invalido', false);
        return;
    }
    
});
function paragraph(){
    const p = document.createElement('p'); //create a paragraph
    p.classList.add('paragraph-result'); //add a class list in this paragraph
    return p;
}
function setResultado (msg, isValid){
    const result = document.querySelector('#results');
    result.innerHTML = '';
    const p = paragraph();
    p.innerHTML = `O seu IMC é ${msg.toFixed(2)}`;

    result.appendChild(p);
}
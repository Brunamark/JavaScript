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

    const weight = Number(inputweight.value);
    const height = Number(inputheight.value);

    if(!weight){//if is NaN
        setResultado('Peso invalido', false);
        return;
    }
    if(!height){
        setResultado('Altura invalida', false);
        return;
    }
    const imc = getImc(weight, height);
    const imcLvl = getImcLevel(imc);
    const msg = `Seu imc eh ${imc} (${imcLvl})`;
    setResultado(msg, true);
    
});
function getImcLevel(imc){
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if(imc>=39.9) return level[5];
    if(imc>=34.9) return level[4];
    if(imc>=29.9) return level[3];
    if(imc>=24.9) return level[2];
    if(imc>=18.5) return level[1];
    if(imc<18.5) return level[0];
}
function getImc(weight, height){
    return (weight/height**2).toFixed(2);
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
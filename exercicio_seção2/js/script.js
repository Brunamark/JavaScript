function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

  //  form.onsubmit = function (evento) {
  //      evento.preventDefault();
  //      alert(1);
   //     console.log('Foi enviado.');
  //  };

  function recebeEventoForm (evento){
    evento.preventDefault();
    const nome = form.querySelector('.name');
    const sobrenome = form.querySelector('.surname');
    const peso = form.querySelector('.weigth');
    const altura = form.querySelector('.heigth');

 
    pessoa.push({
        nome: nome.nodeValue,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value

    });
    console.log(pessoa);

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
   
  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
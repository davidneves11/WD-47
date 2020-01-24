const botao = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

//verifica se o conteúdo de texto do botão e altera
function mudaTexto() {

  if (botao.textContent == 'Blocos') {
    botao.textContent = 'Linhas';
  } else {
    botao.textContent = 'Blocos';
  }
}

function mudaLayout() {
  //Adiciona e remove a classe
  mural.classList.toggle('mural--linha');
}

//Outra forma de fazer
// function mudalayout(){
//   if(mural.classList.contains('mural--linha')){
//     mural.classList.remove('mural--linha')
//   }else{
//     mural.classList.add('mural--linha')
//   }
// }

botao.addEventListener('click', mudaTexto);
botao.addEventListener('click', mudaLayout);
botao.classList.remove('no-js');

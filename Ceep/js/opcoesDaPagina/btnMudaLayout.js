const botao = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

function mudaTexto() {

  if (botao.textContent == 'Blocos') {
    botao.textContent = 'Linhas';
  } else {
    botao.textContent = 'Blocos';
  }
}

function mudaLayout() {

  mural.classList.toggle('mural--linha');

}

botao.addEventListener('click', mudaTexto);
botao.addEventListener('click', mudaLayout);
botao.classList.remove('no-js');

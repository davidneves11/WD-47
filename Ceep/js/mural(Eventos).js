 ;(function () {
  "use strict"

    // ************** Otimizando o Projeto Delegando os EventListeners ao mural **************
    
    const mural = document.querySelector(".mural");

    mural.addEventListener('focusin', function (event) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--focado')
      })
  
    mural.addEventListener('focusout', function (event) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.remove('cartao--focado')
      })

    mural.addEventListener("click",function(event){
        const elementoSelecionado = event.target;
        if(elementoSelecionado.classList.contains("opcoesDoCartao-remove")){
            const cartao = elementoSelecionado.closest('.cartao');
            cartao.classList.add('cartao--some');
            cartao.addEventListener("transitionend", function(){
                cartao.remove();
            })
        }            
    })

    mural.addEventListener('change', function mudaCor(event) {
        const elementoSelecionado = event.target
        const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
        if (isRadioTipo) {
          const cartao = elementoSelecionado.closest('.cartao');  
          cartao.style.backgroundColor = elementoSelecionado.value;
        }
      });

    mural.addEventListener('keydown', function deixaClicarComEnter(event) {
        if (event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter' || event.key === ' ')) {
  
          event.target.click();
        }
    })  
    


let numeroDoCartao = 0

window.adicionaCartaoNoMural = function(cartaoObj){
    numeroDoCartao++
            const conteudoDoCartao = cartaoObj.conteudo;
            const cartao = $(`<article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0" style="background-color:${cartaoObj.cor}">
            <div class="opcoesDoCartao">
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg>
                  <use xlink:href="#iconeRemover"></use>
                </svg>
              </button>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo"
                checked>
              <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
                tabindex="0">
                Padrão
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}"
                class="opcoesDoCartao-radioTipo">
              <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
                tabindex="0">
                Importante
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
              <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
                tabindex="0">
                Tarefa
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}"
                class="opcoesDoCartao-radioTipo">
              <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
                tabindex="0">
                Inspiração
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
          </article>`)
         
          $(".mural").append(cartao);
        }
        $.ajax({
          url: 'https://ceep.herokuapp.com/cartoes/carregar'
          ,method: 'GET'
          ,data: {usuario: "seuemail@email.com.br"}
          ,dataType: "jsonp"
          ,success: function(objeto){
            const cartoes = objeto.cartoes
            cartoes.forEach(function (cartao){
                adicionaCartaoNoMural(cartao);
            })
          }
        })
})()
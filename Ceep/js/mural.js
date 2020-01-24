(function(){
    "use strict"

let numeroDoCartao = 0

//Função que cria o cartão e adiciona no mural
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
            //Focar no cartão com o teclado
             cartao.on("focusin",function(){
                cartao.addClass("cartao--focado");
            })
            //Desfocar no cartão com o teclado
            cartao.on("focusout",function(){
                cartao.removeClass("cartao--focado");
            }) 
            //Mudança das cores no cartão
             cartao.on("change", ".opcoesDoCartao-radioTipo", function(event){
                cartao.css("background-color", event.target.value);
            })
            //Utilizar as teclas Enter e espaço para trocar a cor do cartão
            cartao.on("keydown", function(event){
                const elementoSelecionado = event.target;
                if( $(elementoSelecionado).hasClass("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")){
                    elementoSelecionado.click();
                }
            }) 
            //Remoção do cartão
           cartao.on("click", function(event){
                const elementoSelecionado = event.target;
                if(elementoSelecionado.classList.contains("opcoesDoCartao-remove")){
                    cartao.addClass('cartao--some');
                    cartao.on("transitionend", function(){
                        cartao.remove();
                    })
                }
            }) 
          //Adiciona o cartão no mural
          $(".mural").append(cartao);
        }
        // ************** Exercício Capítulo 27 **************
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
})();
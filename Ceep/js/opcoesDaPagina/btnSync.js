(function(){
    const btnSync = $('#btnSync');
    btnSync.click(function(){
        btnSync.addClass("botaoSync--esperando");
        btnSync.removeClass("botaoSync--sincronizado");

        const xhr = new XMLHttpRequest();
        xhr.open('POST','https://ceep.herokuapp.com/cartoes/salvar');
        xhr.setRequestHeader("Content-Type","application/json");

        const cartoes = document.querySelectorAll(".cartao");
        const infosDoMural = {
            usuario: "seuemail@email.com.br"
            ,cartoes: Array.from($(".cartao")).map(function(cartao){
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent,
                    cor: getComputedStyle(cartao).getPropertyValue("background-color")
                }
            })
        }

        xhr.send(JSON.stringify(infosDoMural))

        xhr.addEventListener('load',function(){
            const response = JSON.parse(xhr.response);
            console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);

            btnSync.removeClass("botaoSync--esperando")
            btnSync.addClass("botaoSync--sincronizado")
        })

        xhr.addEventListener("error", function(){
            btnSync.removeClass("botaoSync--esperando")
            btnSync.addClass("botaoSync--deuRuim")

        })
    })

    btnSync.removeClass("no-js");
})();

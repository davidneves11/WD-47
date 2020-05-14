(function() {
    const $btnSync = $('#btnSync');
    $btnSync.click(function() {
        $btnSync.addClass("botaoSync--esperando");
        $btnSync.removeClass("botaoSync--sincronizado");

        //Configura a requisição ao servidor
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        // xhr.setRequestHeader("Content-Type", "application/json");

        const infosDoMural = {
            usuario: "David Neves",
            cartoes: Array.from($(".cartao")).map(function(cartao) {
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").innerHTML,
                    cor: getComputedStyle(cartao).getPropertyValue("background-color")
                }
            })
        }

        // Outra forma de fazer
        // const cartoes = $('.cartao').toArray().map(function(cartao){
        //     return {
        //         conteudo: cartao.querySelector('.cartao-conteudo').textContent,
        //         cor: getComputedStyle(cartao).getPropertyValue('background-color')
        //     }
        // })

        // const infosDoMural = {
        //     usuario: "seuemail@email.com.br",
        //     cartoes: cartoes
        // }

        //Forma antiga
        // xhr.send(JSON.stringify(infosDoMural));

        // //Sucesso
        // xhr.addEventListener('load', function() {
        //     const response = JSON.parse(xhr.response);
        //     console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);

        //     $btnSync.removeClass("botaoSync--esperando");
        //     $btnSync.addClass("botaoSync--sincronizado");
        // })

        // //Erro!!!
        // xhr.addEventListener("error", function() {
        //     $btnSync.removeClass("botaoSync--esperando");
        //     $btnSync.addClass("botaoSync--deuRuim");

        // })

        fetch('https://ceep.herokuapp.com/cartoes/salvar', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(infosDoMural)
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);

                $btnSync.removeClass("botaoSync--esperando");
                $btnSync.addClass("botaoSync--sincronizado");
            })
            .catch(function(err) {
                console.log(err);
                $btnSync.removeClass("botaoSync--esperando");
                $btnSync.addClass("botaoSync--deuRuim");
            })
    })

    $btnSync.removeClass("no-js");
})();
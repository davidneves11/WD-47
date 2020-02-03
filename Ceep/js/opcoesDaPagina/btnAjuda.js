; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.addEventListener('click', function () {

        // ************** Exercício Capítulo 21  **************
        /* const ajudas = [
            "Bem vindo ao Ceep",
            "Clique no btn Linhas para mudar o layout"
        ] */

        // ************** Exercício Capítulo 22 **************

        /* const ajudas = [
             {conteudo: "Bem vindo ao Ceep", cor: "#F05450"}
            ,{conteudo: "Clique no btn Linhas para mudar o layout", cor: "#92C4EC"}
        ] */

        // ************** Exercício Capítulo 25 **************

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.responseType = 'json'
        xhr.send();
        xhr.addEventListener('load', function () {
            const objeto = xhr.response;
            const ajudas = objeto.instrucoes;

            ajudas.forEach(function (ajuda) {
                /* alert(ajuda); */
                adicionaCartaoNoMural(ajuda);
            })
        })
    })
    btnAjuda.classList.remove("no-js");
})()
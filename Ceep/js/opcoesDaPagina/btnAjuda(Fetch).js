;(function(){
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.addEventListener('click',function(){

        // ************** Utilizando Fetch API **************
        fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                const ajudas = response.instrucoes
                ajudas.forEach(function (ajuda){
                    adicionaCartaoNoMural(ajuda);
                })
            })
                
            .catch(erro => console.log('Algo errado: ' + erro));

        // ************** Utilizando Fetch API com arrow function **************
        // fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
        //     .then(response => response.json()) // return implicito.
        //     .then(response => {
        //         const ajudas = response.instrucoes;
                
        //         ajudas.forEach(ajuda => adicionaCartaoNoMural(ajuda));
        //     })
        //     .catch(erro => console.log('Algo errado: ' + erro));  
        
        })
    btnAjuda.classList.remove("no-js");
})()
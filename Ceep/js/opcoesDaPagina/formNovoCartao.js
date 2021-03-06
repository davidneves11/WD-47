; (function () {
    const form = document.querySelector(".formNovoCartao");
    let numeroDoCartao = 0;
    form.addEventListener("submit", function (event) {
        //Evita o recarregamento automático da página ao clicar no input do tipo submit
        event.preventDefault();
        const textarea = form.querySelector(".formNovoCartao-conteudo");
        const isTextAreaVazio = textarea.value.trim().length === 0;

        //Verifica se tem algo escrito no textarea antes de criar o cartão
        if (isTextAreaVazio) {
            const msgErro = document.createElement("div");
            msgErro.classList.add("formNovoCartao-msg");
            msgErro.textContent = "Formulário inválido. Não digite vários nada!";

            const btnSubmit = form.querySelector(".formNovoCartao-salvar");
            form.addEventListener("animationend", function (event) {
                event.target.remove();
            })

            form.insertBefore(msgErro, btnSubmit);
        } else {
            // adicionaCartaoNoMural({conteudo: textarea.value});   

            // Capítulo 29.4 - Quebra de Linha
            // adicionaCartaoNoMural({conteudo: textarea.value.trim().replace(/\n/g,"<br>")});

            // Capítulo 29.4 (Opcional)- Fica em negrito
            // function negrito (){
            //     const bold = /\*\*(\S(.*?\S)?)\*\*/gm;
            //     const html = textarea.value.replace(bold, '<strong>$1</strong>');            
            //     return html;    
            //  }
            //  adicionaCartaoNoMural({conteudo: negrito()});

            // Capítulo 29.4 (Desafio)- Fica em itálico
            // function italico (){
            //     const italic = /\*(\S(.*?\S)?)\*/gm;
            //     const html = textarea.value.replace(italic, '<em>$1</em>');            
            //     return html;   
            //  }
            //  adicionaCartaoNoMural({conteudo: italico()});

            // Utilizando as três RegEx
            function tratarConteudoCartao() {
                const bold = /\*\*(.*?)\*\*/gm;
                const italic = /\*(.*?)\*/gm;
                const html = textarea.value.replace(bold, '<strong>$1</strong>').replace(italic, '<em>$1</em>').trim().replace(/\n/g, "<br>");
                return html;
            }

            adicionaCartaoNoMural({ conteudo: tratarConteudoCartao() });
        }
        //Limpa o textarea
        textarea.value = "";
    })

    form.classList.remove("no-js");
})()
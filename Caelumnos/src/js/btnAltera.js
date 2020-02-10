(function () {

    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    
    // Muda o texto do botão de alterar
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-warning')) {
            if (event.target.textContent == "Alterando...") {
                event.target.textContent = "Alterar Nome"
            } else {
                event.target.textContent = "Alterando..."
            }
        }
    })

    // Adiciona e remove o atributo contentEditable para o nome do aluno e foca no campo nome
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-warning')) {
            if (event.target.textContent == "Alterando...") {
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.setAttribute("contentEditable", "true");
                nomeAluno.focus();
            } else {
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.removeAttribute("contentEditable");
            }
        }
    })

    // Salva o conteúdo de texto antes da alteração
    tabelaDeAlunos.addEventListener('focusin', function (event) {
        if (event.target.classList.contains('nomeAluno')) {
            window.conteudoSalvo = event.target.textContent;
        }
    })

    // Alterar o conteudo de texto do botão "Alterar Nome" ao desfocar do campo nome
    tabelaDeAlunos.addEventListener('focusout', function (event) {
        if (event.target.classList.contains('nomeAluno')) {
            if (event.target.textContent.trim().length == 0) {
                alert("O aluno precisa de um nome!!!");
                event.target.textContent = conteudoSalvo;
                event.target.focus();
            } else {
                const btnAltera = event.target.closest('.aluno').querySelector('.btn-warning');
                btnAltera.textContent = "Alterar Nome";
            }
        }
    })
})();
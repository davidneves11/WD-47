;(function () {
    
    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    
    // Muda o texto do botão de alterar
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('edita')) {
            if (event.target.textContent == "Alterando...") {
                event.target.textContent = "Alterar Nome"
            } else {
                event.target.textContent = "Alterando..."
            }
        }
    })

    // Adiciona e remove o atributo contentEditable para o nome do aluno e foca no campo nome
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('edita')) {
                event.target.textContent = "Alterando..."
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.setAttribute("contentEditable", "true");
                nomeAluno.focus();
            
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
                const btnAltera = event.target.closest('.aluno').querySelector('.edita');
                btnAltera.innerHTML = "<svg class='bi bi-pencil-square edita' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor xmlns='http://www.w3.org/2000/svg'><path d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'/><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z' clip-rule='evenodd'/></svg>" 
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.removeAttribute("contentEditable");
            }
        }
    })
})()
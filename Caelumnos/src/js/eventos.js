(function () {

    // Exclusão do aluno
    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains("removeAluno") && confirm("Tem certeza que deseja excluir?")) {
            event.target.remove();
        }
    })

    // Muda o texto do botão de alterar
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-warning')) {
            if (event.target.textContent == "Alterando") {
                event.target.textContent = "Alterar Nome"
            } else {
                event.target.textContent = "Alterando"
            }
        }
    })

    // Coloca e tira o atributo contentEditable para o nome do aluno
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-warning')) {
            if (event.target.textContent == "Alterando") {
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.setAttribute("contentEditable", "true");
            } else {
                const nomeAluno = event.target.closest('.aluno').querySelector('.nomeAluno');
                nomeAluno.removeAttribute("contentEditable");
            }
        }
    })

    // Campo de pesquisa
    const $campoBusca = $('#busca');
    $campoBusca.on('input', function () {
        const $textoCampoBusca = $(this).val().trim();

        if ($textoCampoBusca.length > 0) {
            $('.aluno').hide().filter(function () {
                return $(this).find(".pesquisa").text().match(new RegExp($textoCampoBusca, "i"));
            }).show();
        } else {
            $('.aluno').show();
        }
    })


})();


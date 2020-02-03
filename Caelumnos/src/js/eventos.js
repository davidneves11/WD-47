(function () {
    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    tabelaDeAlunos.addEventListener('click', function (event) {
        if (event.target.classList.contains("removeAluno") && confirm("Tem certeza que deseja excluir?")) {
            const linhaAluno = event.target.closest('tr');
            linhaAluno.classList.add('linha--some');
            linhaAluno.addEventListener("transitionend", function () {
                linhaAluno.remove();
            })
        }
    })
})();


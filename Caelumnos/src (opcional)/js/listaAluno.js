(function () {
    const $formNovoAluno = $('#formNovoAluno');
    $formNovoAluno.on('novoAluno', function (evento) {
        const novoAluno = evento.detail.novoAluno;

        const $tabelaListagemDeAlunos = $('#listagemDeAlunos');
        const $elementoNovoAluno = $(`
            <tr>
                <td>${novoAluno.matricula}</td>
                <td id="nome" contentEditable="false">${novoAluno.nome}</td>
                <td><button data-type="delete" class="btn btn-danger removeAluno">Excluir</td>
            </tr>
        `);
        $tabelaListagemDeAlunos.append($elementoNovoAluno);
    });

    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    tabelaDeAlunos.addEventListener('click', function(event){
        if(event.target.classList.contains("removeAluno") && confirm("Tem certeza que deseja excluir?")){
            event.target.closest("tr").remove();
        }    
    })
})();
(function () {
    const form = document.querySelector("#formNovoAluno");

    form.addEventListener("submit",function(event){
        event.preventDefault();
        const matricula = form.querySelector("#matriculaAluno").value;
        const nome = form.querySelector("#nomeAluno").value;

        const tabelaListagemDeAlunos = $('#listagemDeAlunos');
        const elementoNovoAluno = $(`
            <tr>
                <td>${matricula}</td>
                <td id="nome" contenteditable>${nome}</td>
                <td><button data-type="delete" class="btn btn-danger removeAluno">Excluir</td>
            </tr>
        `);
        tabelaListagemDeAlunos.append(elementoNovoAluno);
    })
})();
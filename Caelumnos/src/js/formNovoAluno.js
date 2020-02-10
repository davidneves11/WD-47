(function () {
   
    const form = document.querySelector("#formNovoAluno");
    let numeroMatricula = 0;
   
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        numeroMatricula++

        const nomeCurso = form.querySelector("#nomeCurso").value;
        const nome = form.querySelector("#nomeAluno").value;

        const tabelaListagemDeAlunos = $('#listagemDeAlunos');
        const elementoNovoAluno = $(`
                <tr class="aluno">
                    <td class="pesquisa linha--formata">${numeroMatricula}</td>
                    <td class="pesquisa linha--formata nomeAluno">${nome}</td>
                    <td class="pesquisa linha--formata">${nomeCurso}</td>
                    <td>
                        <button type="button" class="btn btn-warning">Alterar Nome</button>
                        <button data-type="delete" class="btn btn-danger removeAluno">Excluir</button>
                    </td>
                </tr>
            `);

        tabelaListagemDeAlunos.append(elementoNovoAluno);

        form.nomeCurso.value = '';
        form.nomeAluno.value = '';

    })
})();
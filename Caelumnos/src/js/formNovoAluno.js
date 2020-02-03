(function () {
    const form = document.querySelector("#formNovoAluno");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (form.matriculaAluno.value.trim().length === 0 && form.nomeAluno.value.trim().length === 0) {
            alert('Digite o número da matrícula e o nome do aluno');
        } else if (form.matriculaAluno.value.trim().length === 0) {
            alert('Digite o número da matrícula do aluno');
        } else if (form.nomeAluno.value.trim().length === 0) {
            alert('Digite o nome do aluno')
        } else {
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

            form.matriculaAluno.value = '';
            form.nomeAluno.value = '';
        }

    })
})();
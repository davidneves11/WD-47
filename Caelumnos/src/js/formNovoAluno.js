
const form = document.querySelector("#formNovoAluno");
const formModal = document.querySelector("#btnSubmit");
let numeroMatricula = 0;

formModal.addEventListener("click", function (event) {

    if (event.target.classList.contains("btnModal")) {
        numeroMatricula++

        const nomeCurso = form.querySelector("#nomeCurso").value;
        const nome = form.querySelector("#nomeAluno").value;
        const cpf = form.querySelector("#cpf").value;


        if (nome == "") {
            alert("Insira o Nome");
            return false;
        }
        if (nomeCurso == " -- Escolha uma opção -- ") {
            alert("Insira o Nome");
            return false;
        }
        if (validarCPF(cpf) == false) {
            alert("CPF invalido!");
            return false;
        }

        const tabelaListagemDeAlunos = $('#listagemDeAlunos');
        const elementoNovoAluno = $(`
                <tr class="aluno">
                    <td class="pesquisa linha--formata">${numeroMatricula}</td>
                    <td class="pesquisa linha--formata nomeAluno">${nome}</td>
                    <td class="pesquisa linha--formata">${nomeCurso}</td>
                    <td class="pesquisa linha--formata">${cpf}</td>
                    <td>
                        <button type="button" class="btn btn-warning">Alterar Nome</button>
                        <button data-type="delete" class="btn btn-danger removeAluno">Excluir</button>
                    </td>
                </tr>
            `);

        tabelaListagemDeAlunos.append(elementoNovoAluno);

        form.nomeCurso.value = '';
        form.nomeAluno.value = '';
        form.cpf.value = '';
    }

})
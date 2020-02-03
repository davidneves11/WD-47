(function () {
    const formNovoAluno = document.querySelector('#formNovoAluno');
    formNovoAluno.addEventListener('submit', function (event) {
        event.preventDefault();

        const aluno = {
            matricula: formNovoAluno.matriculaAluno.value,
            nome: formNovoAluno.nomeAluno.value
        };

        const eventoCustomizado = new CustomEvent('novoAluno', { detail: { novoAluno: aluno } });
        formNovoAluno.dispatchEvent(eventoCustomizado);

        limpaCampos(formNovoAluno);
    });

    function limpaCampos(form) {
        formNovoAluno.matriculaAluno.value = '';
        formNovoAluno.nomeAluno.value = '';
    }
})();
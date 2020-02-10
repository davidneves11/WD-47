(function () {

    // Campo de pesquisa
    const $campoBusca = $('#busca');
    
    $campoBusca.on('input', function () {
        const $textoCampoBusca = $(this).val().trim();

        if ($textoCampoBusca.length > 0) {
            $('.aluno').hide().filter(function () {
                return $(this).find(".pesquisa").text().match(new RegExp($textoCampoBusca, "i"))
            }).show();
        } else {
            $('.aluno').show();
        }
    })
})();


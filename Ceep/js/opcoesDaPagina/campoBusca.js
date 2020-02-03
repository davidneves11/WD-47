(function () {
    // Capítulo 29.11
    const $campoBusca = $('#busca');

    $campoBusca.on('input', function () {
        const $textoCampoBusca = $(this).val().trim();

        if ($textoCampoBusca.length > 0) {
            $('.cartao').hide().filter(function () {
                return $(this).find(".cartao-conteudo").text().match(new RegExp($textoCampoBusca, "i"));
            }).show();
        } else {
            $('.cartao').show();
        }
    })
    $campoBusca.removeClass('no-js');
})();
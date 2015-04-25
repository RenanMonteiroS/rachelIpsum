// Mostrar/Esconder parágrafos
$(".gerador-paragrafos .btn").on("click", function() {
    $(".texto").show();
    $(".copiar-texto").show();
    paragrafos = $(this).val();

    $(".texto p").hide();
    $(".texto p").slice(0, paragrafos).show();
});

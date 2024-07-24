$(document).ready(function () {
    // Alert de enviar correo
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    // Cambiar el color de titulo de ingrediente (Profe si lee esto podria explicarme por que cuando paso a mobil no funciona el "dblclick")
    $("#cambio-rojo_1").on("dblclick", function () {
        $("#cambio-rojo_1").css("color", "red");
    });

    $("#cambio-rojo_2").on("dblclick", function () {
        $("#cambio-rojo_2").css("color", "red");
    });

    // Esconter texto de recetas recomendadas
    $(".titulo-comida").click(function () {
        $(".texto-comida").toggle();
    });

    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
});

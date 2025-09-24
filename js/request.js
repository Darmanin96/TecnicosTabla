function getAllDatos() {
    $.ajax({
        url: "http://localhost/Api-Tecnicos/gastos.php",
        type: "GET",
        dataType: "json",
        success: function(datos) {
            console.log(datos);
        },
        error: function(xhr, status, error) {
            console.error("Error en la solicitud:", status, error);
        }
    });
}


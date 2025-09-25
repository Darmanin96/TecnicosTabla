function getAllDatos() {
    $.ajax({
        url: "http://localhost/Api-Tecnicos/gastos",
        type: "GET",
        dataType: "json",
        success: function(datos) {
            console.log(datos);
            crearTabla(datos.data);
        },
        error: function(xhr, status, error) {
            console.error("Error en la solicitud:", status, error);
        }
    });
}


getAllDatos();

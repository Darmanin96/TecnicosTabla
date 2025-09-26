let todosLosDatos = [];

function crearTabla(datos){
    const tbody = document.querySelector("#tabla-gastos tbody");
    tbody.innerHTML = ""; 

    datos.forEach(dato => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${dato.nombreTecnico}</td>
            <td>${dato.codigoEmpleado}</td>
            <td>${dato.delegacion}</td>
            <td>${dato.importe}</td>
            <td>${dato.fecha}</td>
            <td>
                ${dato.imagenAlimento 
                    ? `<img src="data:image/jpeg;base64,${dato.imagenAlimento}" alt="Alimento" width="100">`
                    : ''}
            </td>
            <td>
                ${dato.imagenTicket 
                    ? `<img src="data:image/jpeg;base64,${dato.imagenTicket}" alt="Ticket" width="100">`
                    : ''}
            </td>
        `;
        tbody.appendChild(fila);
    });
}

function ordenarCodigo(){
    
}
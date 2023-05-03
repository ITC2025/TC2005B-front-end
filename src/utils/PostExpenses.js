export async function postEstimatedExpenses(
  concepto,
  monto,
  ID_solicitud_viatico
) {
  let expense = {
    concepto: concepto,
    monto: monto,
    ID_solicitud_viatico: ID_solicitud_viatico,
  };
  const url = "http://localhost:3001/viaticos";
  const options = {
    method: "POST",
    body: JSON.stringify(expense),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  console.log(JSON.stringify(response));
}

export async function submitSV(
  totalGastos,
  proyecto,
  ID_status_solicitud_viaticos,
  destino,
  fechaInicio,
  fechaTermino
) {
  let solicitud = {
    monto: totalGastos,
    ID_empleado: 1, // CAMBIAR AL OBTENER EL ID DEL EMPLEADO ACTIVO
    ID_proyecto: parseInt(proyecto),
    ID_status_solicitud_viaticos: ID_status_solicitud_viaticos,
    descripcion: "No hay campo",
    destino: destino,
    fechaInicio: fechaInicio,
    fechaTermino: fechaTermino,
  };
  const url = "http://localhost:3001/viatico_request/";
  const options = {
    method: "POST",
    body: JSON.stringify(solicitud),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  console.log(
    "Solicitud de viaticos num",
    response.payload.ID_solicitud_viatico,
    "creada"
  );
  return response.payload.ID_solicitud_viatico;
}

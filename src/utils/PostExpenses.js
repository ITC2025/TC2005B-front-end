import { tokenID } from "../apis/getApiData";

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
  // console.log(JSON.stringify(response));
}

export async function submitSV(
  totalGastos,
  proyecto,
  ID_status_solicitud_viaticos,
  destino,
  fechaInicio,
  fechaTermino,
  descripcion
) {
  let idEmpleado = await tokenID();
  let solicitud = {
    monto: totalGastos,
    ID_empleado: idEmpleado.id, // CAMBIAR AL OBTENER EL ID DEL EMPLEADO ACTIVO
    ID_proyecto: proyecto,
    ID_status_solicitud_viaticos: ID_status_solicitud_viaticos,
    descripcion: descripcion,
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
    "Solicitud de viáticos num",
    response.payload.ID_solicitud_viatico,
    "creada"
  );
  return response.payload.ID_solicitud_viatico;
}

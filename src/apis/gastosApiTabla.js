//Exportacion y declaracion del api
const host = "http://localhost:3001";

export async function gastosApi(v_id) {

    //Se tiene el url de la ruta del servidor hacia donde se hace el request
    //Esta ruta del back esta conectada a un controlador designado
    const url = host + '/expenses_table/user/' + v_id;
    //En options se ponen cosas como el metodo que se realizara
    const options = {
        method: "GET"
        //tambien en caso de que se mande info por parte del front, se agrega el header
    }
    //try para ver si encuentra errores
    try {
        //aqui se usa una variable para llamar a traves del fetch al servidor
        const response = await fetch(url, options);
        //da un error en caso de que no responda bien
        if (!response.ok) {
          throw new Error("La respuesta de la API no fue exitosa.");
        }
        const data = await response.json();
        //console.log(JSON.stringify(data));
        return data;
      } catch (error) {
        //console.error("Ocurrió un error al intentar obtener los gastos:", error);
      }
    }

export async function proyecto_info(v_id) {
  const url = host + "/expenses_table/" + v_id;

  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };

  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    const data = await response.json();
    //console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    //console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_user(v_id) {
  const url = host + "/expenses_table/sumuser/" + v_id;

  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };

  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    const data = await response.json();
    //console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    //console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_pm(v_id) {
  const url = host + "/expenses_table/sumpm/" + v_id;

  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };

  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    const data = await response.json();
    //console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    //console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_admin(v_id) {
  const url = host + "/expenses_table/sumadmin/" + v_id;

  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };

  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    const data = await response.json();
    //console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    //console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function imagen_gastos(g_id) {
  const url = host + "/expense_reports/" + g_id;

  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };

  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }

    const data = await response.json();
    return  {imagen: data.imagen, factura: data.factura};
  } catch (error) {
    //console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function smart_delete_expenses(id) {
  const url = host + "/expense_reports/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 5,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function approve_expenses(id) {
  const url =
    host + "/expense_reports/choice/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 3,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function reject_expenses(id, comRechazo) {
  // Modify expense report status
  const statusUrl = host + "/expense_reports/choice/" + JSON.stringify(id);
  const statusOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 4,
    }),
  };

  const statusRawResponse = await fetch(statusUrl, statusOptions);
  const statusResponse = await statusRawResponse.json();

  // Modify viatico request comment
  const commentUrl = "http://localhost:3001/viatico_request/" + JSON.stringify(id);
  const commentOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      motivoRechazoGastos: comRechazo
    }),
  };

  const commentRawResponse = await fetch(commentUrl, commentOptions);
  const commentResponse = await commentRawResponse.json();
  return statusResponse;
}

export async function send_expenses(id) {
  const url =
    host + "/expense_reports/choice/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 2,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function send_viatico(id) {
  const url =
    host + "/viatico_request/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_solicitud_viaticos: 2,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function accept_viatico(id) {
  const url =
    host + "/viatico_request/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_solicitud_viaticos: 3,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function reject_viatico(id, comRechazo) {
  const url = host + "/viatico_request/" + JSON.stringify(id);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_solicitud_viaticos: 6,
      motivoRechazoSolicitud: comRechazo
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function paid_viatico(id, refBank){
  const url = host + "/viatico_request/" + JSON.stringify(id);
  const options = {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ID_status_solicitud_viaticos: 4,
        referenciaBancariaSolicitud: refBank
      }),
  }
  const rawResponse = await fetch(url, options)
  const response = await rawResponse.json();
  return response;
}

export async function paid_expenses(id, comRechazo) {
  // Modify expense report status
  const statusUrl = "http://localhost:3001/expense_reports/choice/" + JSON.stringify(id);
  const statusOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 6,
    }),
  };

  const statusRawResponse = await fetch(statusUrl, statusOptions);
  const statusResponse = await statusRawResponse.json();

  // Modify viatico request comment
  const commentUrl = "http://localhost:3001/viatico_request/" + JSON.stringify(id);
  const commentOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      referenciaBancariaGastos: comRechazo
    }),
  };

  const commentRawResponse = await fetch(commentUrl, commentOptions);
  const commentResponse = await commentRawResponse.json();
  return statusResponse;
}

export async function comentarioRechazo(id){
  const url = host + '/viatico_request/comentario/' + JSON.stringify(id);
  const options = {
      method: "GET",
      credentials:"include",
      headers: {
          'Content-Type': 'application/json',
      }
  }
  const rawResponse = await fetch(url, options)
  const response = await rawResponse.json();
  return response;
}

export async function refBancaria(id){
  const url = host + '/viatico_request/refBancaria/' + JSON.stringify(id);
  const options = {
      method: "GET",
      credentials:"include",
      headers: {
          'Content-Type': 'application/json',
      }
  }
  const rawResponse = await fetch(url, options)
  const response = await rawResponse.json();
  return response;
}

export async function updateSolicitud(id, ID_p, status, fI, fT, dest, desc){
  const url = 'http://localhost:3001/viatico_request/' + id;
  console.log(url);
  const options = {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ID_proyecto: ID_p,
        ID_status_solicitud_viaticos: status,
        fechaInicio: fI,
        fechaTermino: fT,
        destino: dest,
        descripcion: desc
      }),
  }
  const rawResponse = await fetch(url, options)
  const response = await rawResponse.json();
  return response;
}

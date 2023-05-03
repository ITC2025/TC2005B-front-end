//Exportacion y declaracion del api
export async function gastosApi(v_id) {
  //Se tiene el url de la ruta del servidor hacia donde se hace el request
  //Esta ruta del back esta conectada a un controlador designado
  const url = "http://localhost:3001/expenses_table/vi/" + v_id;
  //En options se ponen cosas como el metodo que se realizara
  const options = {
    method: "GET",
    //tambien en caso de que se mande info por parte del front, se agrega el header
  };
  //try para ver si encuentra errores
  try {
    //aqui se usa una variable para llamar a traves del fetch al servidor
    const response = await fetch(url, options);
    //da un error en caso de que no responda bien
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_info(v_id) {
  const url = "http://localhost:3001/expenses_table/" + v_id;

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
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_user(v_id) {
  const url = "http://localhost:3001/expenses_table/sumuser/" + v_id;

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
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_pm(v_id) {
  const url = "http://localhost:3001/expenses_table/sumpm/" + v_id;

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
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function proyecto_sum_admin(v_id) {
  const url = "http://localhost:3001/expenses_table/sumadmin/" + v_id;

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
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function imagen_gastos(g_id) {
  const url = "http://localhost:3001/expenses_table/img/" + g_id;

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
    const data = await response.blob();
    console.log(data);
    console.log("api jala");
    return data;
  } catch (error) {
    console.error("Ocurrió un error al intentar obtener los gastos:", error);
  }
}

export async function smart_delete_expenses(id) {
  const url = "http://localhost:3001/expense_reports/" + JSON.stringify(id);
  console.log(url);
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
    "http://localhost:3001/expense_reports/choice/" + JSON.stringify(id);
  console.log(url);
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

export async function reject_expenses(id) {
  const url =
    "http://localhost:3001/expense_reports/choice/" + JSON.stringify(id);
  console.log(url);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_reporte_gasto: 4,
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function send_expenses(id) {
  const url =
    "http://localhost:3001/expense_reports/choice/" + JSON.stringify(id);
  console.log(url);
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
    "http://localhost:3001/viatico_request/" + JSON.stringify(id);
  console.log(url);
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
    "http://localhost:3001/viatico_request/" + JSON.stringify(id);
  console.log(url);
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
  const url = "http://localhost:3001/viatico_request/" + JSON.stringify(id);
  console.log(url);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID_status_solicitud_viaticos: 6,
      motivoRechazo: comRechazo
    }),
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
}

export async function paid_viatico(id, refBank){
  const url = 'http://localhost:3001/viatico_request/' + JSON.stringify(id);
  console.log(url);
  const options = {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ID_status_solicitud_viaticos: 4,
        referenciaBancaria: refBank
      }),
  }
  const rawResponse = await fetch(url, options)
  const response = await rawResponse.json();
  return response;
}

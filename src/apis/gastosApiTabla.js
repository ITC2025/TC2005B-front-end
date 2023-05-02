//Exportacion y declaracion del api
export async function gastosApi(v_id) {

    //Se tiene el url de la ruta del servidor hacia donde se hace el request
    //Esta ruta del back esta conectada a un controlador designado
    const url = 'http://localhost:3001/expenses_table/vi/' + v_id;
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
        console.log(JSON.stringify(data));
        return data;
      } catch (error) {
        console.error("Ocurrió un error al intentar obtener los gastos:", error);
      }
    }

export async function proyecto_info(v_id) {

  const url = 'http://localhost:3001/expenses_table/' + v_id;

  const options = {
    method: "GET"
    //tambien en caso de que se mande info por parte del front, se agrega el header
  }

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

  export async function proyecto_sum(v_id) {

    const url = 'http://localhost:3001/expenses_table/vis/' + v_id;
  
    const options = {
      method: "GET"
      //tambien en caso de que se mande info por parte del front, se agrega el header
    }
  
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

  const url = 'http://localhost:3001/expenses_table/img/' + g_id;

  const options = {
    method: "GET"
    //tambien en caso de que se mande info por parte del front, se agrega el header
  }

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
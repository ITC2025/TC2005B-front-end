const host = 'http://localhost:3001';

export async function getAuthenticationData(name, password) {
    let data = {
        correoElectronico: name,
        password: password
    }

    const url = host + '/login';
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function tokenValidation(){
    const url = host + '/auth/rol';
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

export async function tokenID(){
    const url = host + '/auth/id';
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

export async function sessionDelete() {
    const url = host + '/logout';
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    window.location.replace('/');
    return response;
}

export async function userViaticos(){
    const id_user = await tokenID();
    const url = host + '/viatico_request/user/' + JSON.stringify(id_user.id);
    //console.log(url);
    const options = {
        method: "GET",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(response);  
    return response;
}

export async function userSaldo(){
    const id_user = await tokenID();
    const url = host + '/users/saldo/' + JSON.stringify(id_user.id);
    //console.log(url);
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

export async function projectsPM(){
    const id_user = await tokenID();
    const url = host + '/projects/' + JSON.stringify(id_user.id);
    //console.log(url);
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

export async function postProject(nombre, codigo , desc) {
    let data = {
        nombre: nombre,
        codigoProyecto: codigo,
        descripcion: desc
    }

    const id_user = await tokenID();
    const url = host + '/projects/' + JSON.stringify(id_user.id);
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function postSolicitarViatico(montoViatico,descripcionSolicitud, destinoViatico, fechaI, fechaF, codProyecto, descStatus){
    let data = {
        monto: montoViatico,
        descripcion: descripcionSolicitud,
        destino: destinoViatico,
        fechaInicio: fechaI,
        fechaTermino: fechaF,
        ID_empleado: tokenID(),
        codigo_proyecto: codProyecto,
        status_descripcion: descStatus
    }

    const url = host + '/viatico_request/solicitar';
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function postCrearReporteGastos(data){
    const url = host + '/expense_reports';
    const options = {
        method: "POST",
        credentials:"include",
        body: data
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function getGastos(viaticoID) {
    const url = host + '/expense_reports/' + viaticoID;
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    return response;
  }
  
  export async function updateGasto(data, viaticoID) {
    const url = host + `/expense_reports/` + viaticoID;
    const options = {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    return response;
  }
  
export async function adminSol(){
    const url = host + '/viatico_request';
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

export async function SolInd(id){
    const url = host + '/viatico_request/'+id;
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

export async function solicitudViaticosPM(){
    const usuario = await tokenID()
    const url = host + '/viatico_request/pm/' + JSON.stringify(usuario.id);
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

export async function eliminarSolicitud(ID) {
    const url = host + `/viatico_request/` + ID;
    const options = {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ID_status_solicitud_viaticos: 7
      }),
    };
  
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    return response;
  }
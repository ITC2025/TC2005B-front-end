export async function getAuthenticationData(name, password) {
    let data = {
        correoElectronico: name,
        password: password
    }

    const url = 'http://localhost:3000/login';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    sessionStorage.setItem("data", JSON.stringify(response))
    console.log(JSON.stringify(response))
}


export function tokenID(){
    const data = sessionStorage.getItem("data")
    //Checa si no habia nada en los datos
    if (data === null) return -1
    if (data.length === 2) return -1

    const parsedJson=JSON.parse(data)
    const bToken=parsedJson.token

    const parts = bToken.split('.');
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const payload = JSON.parse(decodedPayload);

    return(payload.id)
}

export function tokenValidation(){
    const data = sessionStorage.getItem("data")
    //Checa si no habia nada en los datos
    if (data === null) return -1
    if (data.length === 2) return -1

    const parsedJson=JSON.parse(data)
    const bToken=parsedJson.token

    const parts = bToken.split('.');
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const payload = JSON.parse(decodedPayload);

    if(Date.now() >= payload.exp * 1000) {
        sessionStorage.clear()
        return -1
    }

    return(payload.rol)
}

export async function sumaTablaGastos(id){
    const url = 'http://localhost:3001/expenses_table/vis/' + JSON.stringify(id);
    console.log(url);
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
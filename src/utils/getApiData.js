export async function getAuthenticationData(name, password) {
    let data = {
        correoElectronico: name,
        password: password
    }

    const url = 'http://localhost:3000/login';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    sessionStorage.setItem("data", JSON.stringify(response))
    console.log(JSON.stringify(response))
}

export function tokenValidation(){
    const data = sessionStorage.getItem("data")
    //Checa si no habia nada en los datos
    if (data === null) return -1
    if (data.length === 2) return 1

    const parsedJson=JSON.parse(data)
    const bToken=parsedJson.token

    const parts = bToken.split('.');
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const payload = JSON.parse(decodedPayload);
  
    return(payload.rol)

}

export function deleteSession () {
    sessionStorage.clear();
}

export async function getFormData(product, type, amount, image, xml, date) {

    let data = {/*Esta funcion es para crear un Objeto Json y se enviara al backend*/
        concepto: product,
        ID_tipo_gasto: type,
        monto: amount,
        imagen: image,
        xml: xml,
        fecha: date
    }


    console.log(data)



    // const url = 'http://localhost:3000/login';
    // const options = {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // }
    // const rawResponse = await fetch(url, options)
    // const response = await rawResponse.json();
    // sessionStorage.setItem("data", JSON.stringify(response))
    // console.log(JSON.stringify(response))
}

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

export function tokenValidation() {
    const data = sessionStorage.getItem("data")
    //Checa si no habia nada en los datos
    if (data === null) return -1
    if (data.length === 2) return -1

    const parsedJson = JSON.parse(data)
    const bToken = parsedJson.token

    const parts = bToken.split('.');
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const payload = JSON.parse(decodedPayload);

    if (Date.now() >= payload.exp * 1000) {
        sessionStorage.clear()
        return -1
    }

    return (payload.rol)
}

export function sessionDelete() {
    sessionStorage.clear();
    window.location.replace('/');
}

export async function postEstimatedExpenses(concepto, monto) {
    let expense = {
        concepto: concepto,
        monto: monto,
        ID_solicitud_viatico: 1,
    };
    const url = "http://localhost:3001/viaticos/";
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


import { tokenValidation, tokenID } from "./getApiData";
//////////////////////////////////////////////////////

/*
    Aqui se debe de mandar un json con todos los objetos
*/

export async function sendFact(data){

    const url = 'http://localhost:3000' + JSON.stringify(tokenID);
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

///////////////////////////////////////////////////////

/*
    Aqui se le debe de mandar dos json, una de la informacion
    de viaje y la otra que sean un json de todos los objetos 
    de los gastos contemplados
    ejem:

    ejemplo = {
        infoV,
        data = {
            info1,
            info2
        }
    }

*/

export async function sendSolViaticos(infoV, data){
    
    let sendData = Object.assign(infoV, data);

    const url = 'http://localhost:3000';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

///////////////////////////////////////////////////////

export async function viaticosUser(){

    const url = 'http://localhost:3000/' +  JSON.stringify(tokenID);
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

//////////////////////////////////////////////////////

export async function UserReporteGasto(ID){
    const url = 'http://localhost:3000/viatico/' +  JSON.stringify(tokenID()) + '/factura/' + ID;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

///////////////////////////////////////////////////////

export async function UserGasto(ID, Gasto){
    const url = 'http://localhost:3000/factura/' + ID + '/gasto/' + Gasto;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

///////////////////////////////////////////////////////

export async function getImage(ID, Gasto){
    const url = 'http://localhost:3000/imagen/factura/' + ID + '/gasto/' + Gasto;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

///////////////////////////////////////////////////////
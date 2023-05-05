import { tokenValidation, tokenID } from "./getApiData";

export async function solViaticos(){
    const url = 'http://localhost:3000/solViaticos/' + tokenID();
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

export async function viaticoInd(ID_sol){
    const url = 'http://localhost:3000/solInd/' + ID_sol;
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

export async function comentario(comentario) {
    const url = 'http://localhost:3000/comentarioPM';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comentario)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    //console.log(JSON.stringify(response))
}

export async function proyectos(){
    const url = 'http://localhost:3000/projects/' + JSON.stringify(tokenID());
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

export async function addProyecto(name, Codigo, Responsable, Descripcion) {
    let data = {
        nombre:name,
        codigo:Codigo,
        responsable:Responsable,
        descripcion:Descripcion
    }

    const url = 'http://localhost:3000/projects/' + JSON.stringify(tokenID());
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
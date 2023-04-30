export async function  postProject(nombre, codigoProyecto, descripcion) {
    let newProjectData = {
        nombre: nombre,
        descripcion: descripcion,
        codigoProyecto: codigoProyecto,
    }
    const url = "http://localhost:3001/projects/2"
    const options= {
        method: "POST",
        body: JSON.stringify(newProjectData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },  
    };
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    console.log(JSON.stringify(response));
}

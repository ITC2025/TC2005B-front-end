export async function getProjectManagers() {
    const url = 'http://localhost:3001/users/rol/2';
    const options = {
        method: "GET",
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error("La respuesta de la API no fue exitosa.")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Occurió un error al intentar obtener los project managers")
    }
}
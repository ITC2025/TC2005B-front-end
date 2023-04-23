export async function gastosApi() {

    const url = 'http://localhost:3001/projects';
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await fetch(url, options);
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



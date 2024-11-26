export async function BuscarGasto() {
    const URL = "http://localhost:8000/gasto";
    const peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const respuestaInicial = await fetch(URL, peticion);
        if (!respuestaInicial.ok) {
            throw new Error(`Error ${respuestaInicial.status}: ${respuestaInicial.statusText}`);
        }
        const respuestaFinal = await respuestaInicial.json();
        return respuestaFinal;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}



export async function RegistrarGasto(datosDelGasto) {
    const URL = "http://localhost:8000/gasto";
    const peticion = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosDelGasto)
    };
    try {
        const respuestaInicial = await fetch(URL, peticion);
        if (!respuestaInicial.ok) {
            throw new Error(`Error ${respuestaInicial.status}: ${respuestaInicial.statusText}`);
        }
        const respuestaFinal = await respuestaInicial.json();
        return respuestaFinal;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}



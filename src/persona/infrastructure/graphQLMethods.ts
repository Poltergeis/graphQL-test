import { getPersonasController } from "./dependencies";
import { addPersonaController } from "./dependencies";
import { getPersonaByNameController } from "./dependencies";

export const personaQuery = {
    getPersonas: () => getPersonasController.run(),
    getPersonasByName: (nombre:string) => getPersonaByNameController.run(nombre)
}

export const personaMutation = {
    addPersona:(
        nombre: string,
        edad: number,
        trabajo: string,
        ciudad: string
    ) => addPersonaController.run(nombre,edad,trabajo,ciudad)
}
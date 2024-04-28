import { Persona } from "./Persona"

export interface PersonaRepository{
    getPersonas():Promise<Persona[] | null>;
    getPersonasByName(nombre: string):Promise<Persona[] | null>;
    addPersona(
        nombre: string,
        edad: number,
        trabajo: string,
        mayorDeEdad: boolean,
        ciudad: string): Promise<Persona | null>;
}
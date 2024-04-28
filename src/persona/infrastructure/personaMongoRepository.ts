import { Persona } from "../domain/Persona";
import { PersonaRepository } from "../domain/PersonaRepository";
import { personaModel } from "./models/personaModel";

export class PersonaMongoRepository implements PersonaRepository{
    async addPersona(nombre: string, edad: number, trabajo: string, mayorDeEdad: boolean, ciudad: string): Promise<Persona | null> {
        try{
            const persona = await personaModel.create({
                nombre: nombre,
                edad: edad,
                trabajo: trabajo,
                mayorDeEdad: mayorDeEdad,
                ciudad: ciudad
            });
            await persona.save();
            return new Persona(
                persona.nombre,
                persona.edad,
                persona.trabajo,
                persona.mayorDeEdad,
                persona.ciudad
            );
        }catch(error){
            console.log('aqui esta el error');
            return null;
        }
    }
    async getPersonas(): Promise<Persona[] | null> {
        try{
            const personas = await personaModel.find();
            return personas;
        }catch(error){
            return null;
        }
    }
    async getPersonasByName(nombre: string): Promise<Persona[] | null> {
        try{
            const personas = await personaModel.find({ nombre: nombre });
            return personas;
        }catch(error){
            return null;
        }
    }

}
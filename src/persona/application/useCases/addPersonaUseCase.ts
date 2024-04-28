import { PersonaRepository } from "../../domain/PersonaRepository";
import { Persona } from "../../domain/Persona";

export class AddPersonaUseCase{
    constructor(readonly personaRepository: PersonaRepository){}

    async run(
        nombre: string,
        edad: number,
        trabajo: string,
        mayorDeEdad: boolean,
        ciudad: string):Promise<Persona | null>{
            try{
                const persona = await this.personaRepository.addPersona(nombre,edad,trabajo,mayorDeEdad,ciudad);
                return persona;
            }catch(error){
                console.log(`error en el caso de uso de addPersona ERROR:${error}`);
                return null;
            }
        }
}
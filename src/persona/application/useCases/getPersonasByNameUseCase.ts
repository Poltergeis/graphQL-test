import { Persona } from "../../domain/Persona";
import { PersonaRepository } from "../../domain/PersonaRepository";

export class GetPersonasByNameUseCase{
    constructor(readonly personaRepository: PersonaRepository){}

    async run(nombre: string):Promise<Persona[] | null>{
        try{
            const personas = await this.personaRepository.getPersonasByName(nombre);
            return personas;
        }catch(error){
            console.log(`error en el caso de uso de getPersonasByName. ERROR:${error}`);
            return null;
        }
    }
}
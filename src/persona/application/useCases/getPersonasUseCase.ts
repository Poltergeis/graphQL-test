import { PersonaRepository } from "../../domain/PersonaRepository";
import { Persona } from "../../domain/Persona";

export class GetPersonasUseCase{
    constructor(readonly personaRepository: PersonaRepository){}

    async run():Promise<Persona[] | null>{
        try{
            const personas = await this.personaRepository.getPersonas();
            return personas;
        }catch(error){
            console.log(`error en el caso de uso de getPersonas ERROR:${error}`);
            return null;
        }
    }
}
import { Persona } from "../../domain/Persona";
import { GetPersonasUseCase } from "../../application/useCases/getPersonasUseCase";

export class GetPersonasController{
    constructor(readonly getPersonasUseCase: GetPersonasUseCase){}

    async run(){
        try{
            const personas = await this.getPersonasUseCase.run();
            if(!personas){
                console.log('no se han encontrado personas');
                return null;
            }
            return personas;
        }catch(error){
            console.log(`error en el controlador de getPersonas. ERROR:${error}`);
            return null;
        }
    }
}
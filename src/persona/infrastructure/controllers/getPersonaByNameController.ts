import { GetPersonasByNameUseCase } from "../../application/useCases/getPersonasByNameUseCase";

export class GetPersonasByNameController{
    constructor(readonly getPersonasByNameUseCase: GetPersonasByNameUseCase){}

    async run(nombre: string){
        try{
            if(!nombre){
                console.log('se ha proporcionado un nombre vacio o dañado');
                return null;
            }
            const persona = await this.getPersonasByNameUseCase.run(nombre);
            if(!persona){
                console.log('no se ha encontrado a la persona');
                return null;
            }
            return persona;
        }catch(error){
            console.log(`error en el controlador de getPersonas. ERROR:${error}`);
            return null;
        }
    }
}
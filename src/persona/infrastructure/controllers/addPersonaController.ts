import { AddPersonaUseCase } from "../../application/useCases/addPersonaUseCase";

export class AddPersonaController{
    constructor(readonly addPersonaUseCase: AddPersonaUseCase){}

    async run(
        nombre: string,
        edad: number,
        trabajo: string,
        ciudad: string){
            try{
                if((!nombre) || (isNaN(edad) || (!trabajo || !ciudad))){
                    console.log(`la peticion ha recibido datos incompletos o dañados`);
                    return null;
                }
                const persona = await this.addPersonaUseCase.run(nombre,edad,trabajo,(edad >= 18),ciudad);
                if(!persona){
                    console.log('no se ha podido añadir a la persona');
                    return null;
                };
                return persona;
            }catch(error){
                console.log(`error en el controlador de AddPersona. ERROR: ${error}`);
                return null;
            }
        }
}
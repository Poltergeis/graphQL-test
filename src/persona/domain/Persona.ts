import { IPersona } from "./IPersona";

export class Persona implements IPersona{
    constructor(
    readonly nombre: string,
    readonly edad: number,
    readonly trabajo: string,
    readonly mayorDeEdad: boolean,
    readonly ciudad: string){}
}
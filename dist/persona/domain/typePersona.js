"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typePersonaMutation = exports.typePersonaQuery = exports.typePersona = void 0;
exports.typePersona = `type Persona{
    nombre: String!
    edad: Int!
    trabajo: String!
    mayorDeEdad: Boolean!
    ciudad: String!
}`;
exports.typePersonaQuery = `   
getPersonas: [Persona]    
getPersonasByName(nombre:String!): [Persona]
`;
exports.typePersonaMutation = `
addPersona(
    nombre: String!
    edad: Int!
    trabajo: String!
    ciudad: String!
): Persona
`;
//# sourceMappingURL=typePersona.js.map
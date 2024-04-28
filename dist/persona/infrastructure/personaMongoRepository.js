"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaMongoRepository = void 0;
const Persona_1 = require("../domain/Persona");
const personaModel_1 = require("./models/personaModel");
class PersonaMongoRepository {
    addPersona(nombre, edad, trabajo, mayorDeEdad, ciudad) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persona = yield personaModel_1.personaModel.create({
                    nombre: nombre,
                    edad: edad,
                    trabajo: trabajo,
                    mayorDeEdad: mayorDeEdad,
                    ciudad: ciudad
                });
                yield persona.save();
                return new Persona_1.Persona(persona.nombre, persona.edad, persona.trabajo, persona.mayorDeEdad, persona.ciudad);
            }
            catch (error) {
                console.log('aqui esta el error');
                return null;
            }
        });
    }
    getPersonas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield personaModel_1.personaModel.find();
                return personas;
            }
            catch (error) {
                return null;
            }
        });
    }
    getPersonasByName(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield personaModel_1.personaModel.find({ nombre: nombre });
                return personas;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.PersonaMongoRepository = PersonaMongoRepository;
//# sourceMappingURL=personaMongoRepository.js.map
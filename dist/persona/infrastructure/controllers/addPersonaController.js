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
exports.AddPersonaController = void 0;
class AddPersonaController {
    constructor(addPersonaUseCase) {
        this.addPersonaUseCase = addPersonaUseCase;
    }
    run(nombre, edad, trabajo, ciudad) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if ((!nombre) || (isNaN(edad) || (!trabajo || !ciudad))) {
                    console.log(`la peticion ha recibido datos incompletos o dañados`);
                    return null;
                }
                const persona = yield this.addPersonaUseCase.run(nombre, edad, trabajo, (edad >= 18), ciudad);
                if (!persona) {
                    console.log('no se ha podido añadir a la persona');
                    return null;
                }
                ;
                return persona;
            }
            catch (error) {
                console.log(`error en el controlador de AddPersona. ERROR: ${error}`);
                return null;
            }
        });
    }
}
exports.AddPersonaController = AddPersonaController;
//# sourceMappingURL=addPersonaController.js.map
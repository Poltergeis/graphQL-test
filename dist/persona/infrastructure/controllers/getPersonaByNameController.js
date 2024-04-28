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
exports.GetPersonasByNameController = void 0;
class GetPersonasByNameController {
    constructor(getPersonasByNameUseCase) {
        this.getPersonasByNameUseCase = getPersonasByNameUseCase;
    }
    run(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!nombre) {
                    console.log('se ha proporcionado un nombre vacio o dañado');
                    return null;
                }
                const persona = yield this.getPersonasByNameUseCase.run(nombre);
                if (!persona) {
                    console.log('no se ha encontrado a la persona');
                    return null;
                }
                return persona;
            }
            catch (error) {
                console.log(`error en el controlador de getPersonas. ERROR:${error}`);
                return null;
            }
        });
    }
}
exports.GetPersonasByNameController = GetPersonasByNameController;
//# sourceMappingURL=getPersonaByNameController.js.map
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
exports.GetPersonasByNameUseCase = void 0;
class GetPersonasByNameUseCase {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    run(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield this.personaRepository.getPersonasByName(nombre);
                return personas;
            }
            catch (error) {
                console.log(`error en el caso de uso de getPersonasByName. ERROR:${error}`);
                return null;
            }
        });
    }
}
exports.GetPersonasByNameUseCase = GetPersonasByNameUseCase;
//# sourceMappingURL=getPersonasByNameUseCase.js.map
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
exports.GetPersonasController = void 0;
class GetPersonasController {
    constructor(getPersonasUseCase) {
        this.getPersonasUseCase = getPersonasUseCase;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield this.getPersonasUseCase.run();
                if (!personas) {
                    console.log('no se han encontrado personas');
                    return null;
                }
                return personas;
            }
            catch (error) {
                console.log(`error en el controlador de getPersonas. ERROR:${error}`);
                return null;
            }
        });
    }
}
exports.GetPersonasController = GetPersonasController;
//# sourceMappingURL=getPersonasController.js.map
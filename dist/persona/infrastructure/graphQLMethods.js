"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaMutation = exports.personaQuery = void 0;
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
exports.personaQuery = {
    getPersonas: () => dependencies_1.getPersonasController.run(),
    getPersonasByName: (nombre) => dependencies_3.getPersonaByNameController.run(nombre)
};
exports.personaMutation = {
    addPersona: (nombre, edad, trabajo, ciudad) => dependencies_2.addPersonaController.run(nombre, edad, trabajo, ciudad)
};
//# sourceMappingURL=graphQLMethods.js.map
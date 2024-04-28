"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonasController = exports.getPersonaByNameController = exports.addPersonaController = void 0;
const personaMongoRepository_1 = require("./personaMongoRepository");
const addPersonaUseCase_1 = require("../application/useCases/addPersonaUseCase");
const getPersonasUseCase_1 = require("../application/useCases/getPersonasUseCase");
const getPersonasByNameUseCase_1 = require("../application/useCases/getPersonasByNameUseCase");
const addPersonaController_1 = require("./controllers/addPersonaController");
const getPersonasController_1 = require("./controllers/getPersonasController");
const getPersonaByNameController_1 = require("./controllers/getPersonaByNameController");
const personaMongoRepository = new personaMongoRepository_1.PersonaMongoRepository();
const addPersonaUseCase = new addPersonaUseCase_1.AddPersonaUseCase(personaMongoRepository);
const getPersonasUseCase = new getPersonasUseCase_1.GetPersonasUseCase(personaMongoRepository);
const getPersonasByNameUseCase = new getPersonasByNameUseCase_1.GetPersonasByNameUseCase(personaMongoRepository);
exports.addPersonaController = new addPersonaController_1.AddPersonaController(addPersonaUseCase);
exports.getPersonaByNameController = new getPersonaByNameController_1.GetPersonasByNameController(getPersonasByNameUseCase);
exports.getPersonasController = new getPersonasController_1.GetPersonasController(getPersonasUseCase);
//# sourceMappingURL=dependencies.js.map
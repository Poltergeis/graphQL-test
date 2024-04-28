import { PersonaMongoRepository } from "./personaMongoRepository";

import { AddPersonaUseCase } from "../application/useCases/addPersonaUseCase";
import { GetPersonasUseCase } from "../application/useCases/getPersonasUseCase";
import { GetPersonasByNameUseCase } from "../application/useCases/getPersonasByNameUseCase";

import { AddPersonaController } from "./controllers/addPersonaController";
import { GetPersonasController } from "./controllers/getPersonasController";
import { GetPersonasByNameController } from "./controllers/getPersonaByNameController";

const personaMongoRepository = new PersonaMongoRepository();

const addPersonaUseCase = new AddPersonaUseCase(personaMongoRepository);
const getPersonasUseCase = new GetPersonasUseCase(personaMongoRepository);
const getPersonasByNameUseCase = new GetPersonasByNameUseCase(personaMongoRepository);

export const addPersonaController = new AddPersonaController(addPersonaUseCase);
export const getPersonaByNameController = new GetPersonasByNameController(getPersonasByNameUseCase);
export const getPersonasController = new GetPersonasController(getPersonasUseCase);
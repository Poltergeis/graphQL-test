"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personaSchema = new mongoose_1.default.Schema({
    nombre: {
        required: true,
        type: mongoose_1.default.Schema.Types.String
    },
    edad: {
        required: true,
        type: mongoose_1.default.Schema.Types.Number
    },
    trabajo: {
        required: true,
        type: mongoose_1.default.Schema.Types.String
    },
    mayorDeEdad: {
        required: true,
        type: mongoose_1.default.Schema.Types.Boolean
    },
    ciudad: {
        required: true,
        type: mongoose_1.default.Schema.Types.String
    }
}, { versionKey: false });
exports.personaModel = mongoose_1.default.model('persona', personaSchema, 'personas');
//# sourceMappingURL=personaModel.js.map
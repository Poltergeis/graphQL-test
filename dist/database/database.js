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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const signale_1 = __importDefault(require("signale"));
function connectToServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/Personas');
        }
        catch (error) {
            signale_1.default.info('la conexion a mongo ha fallado desde su lanzamiento');
        }
    });
}
exports.default = connectToServer;
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    signale_1.default.info('la conexion a la base de datos en mongo ha sido lanzada');
});
conn.on('error', () => {
    signale_1.default.error('la conexion a mongo a sufrido un fallo y se ha cerrado forzosamente');
});
//# sourceMappingURL=database.js.map
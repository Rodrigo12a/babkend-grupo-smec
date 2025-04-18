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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const landing_1 = __importDefault(require("../routes/landing"));
const user_1 = __importDefault(require("../routes/user"));
const dashboard_1 = __importDefault(require("../routes/dashboard"));
const connection_1 = __importDefault(require("../db/connection"));
const user_2 = __importDefault(require("../routes/user"));
const cotizacion_1 = __importDefault(require("../routes/cotizacion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "10000");
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
        //console.log(process.env.PORT)
    }
    listen() {
        this.app.listen(this.port, "0.0.0.0", () => {
            console.log('Aplicación corriendo en el puerto: ' + this.port);
        });
    }
    midlewares() {
        // parseo body
        this.app.use(express_1.default.json());
        console.log("Iniciando servidor...");
        console.log("Entorno:", process.env.NODE_ENV);
        console.log("Puerto asignado:", process.env.PORT);
        //cors
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api/landing', landing_1.default);
        this.app.use('/api/auth', user_1.default);
        this.app.use('/api/auth', dashboard_1.default);
        //CRUD USUARIOS
        this.app.use('/api/user', user_2.default);
        //CRUD COTIZACIONES
        this.app.use('/api/cotizaciones', cotizacion_1.default);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.error('Error en la conexión:', error);
            }
        });
    }
}
exports.default = Server;

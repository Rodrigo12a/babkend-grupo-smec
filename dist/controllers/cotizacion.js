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
exports.postCotizacion = exports.deleteCotizacion = exports.updateCotizacion = exports.getCotizacion = exports.getCotizaciones = void 0;
const cotizacion_1 = __importDefault(require("../models/cotizacion"));
//obtener todas las cotizaciones
const getCotizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaCotizaciones = yield cotizacion_1.default.findAll();
    res.json({
        msg: "Obtener cotizaciones",
        listaCotizaciones
    });
});
exports.getCotizaciones = getCotizaciones;
//obtener una cotizacion
const getCotizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cotizacion = yield cotizacion_1.default.findByPk(id);
    if (cotizacion) {
        res.json({
            msg: "obtener cotizacion",
            cotizacion
        });
    }
    else {
        res.status(404).json({
            msg: "cotizacion no encontrada",
            id
        });
    }
});
exports.getCotizacion = getCotizacion;
const updateCotizacion = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update cotizacion",
        id,
        body
    });
};
exports.updateCotizacion = updateCotizacion;
//eliminar una cotizacion
const deleteCotizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cotizacion = yield cotizacion_1.default.findByPk(id);
    if (!cotizacion) {
        res.status(404).json({
            msg: "cotizacion no encontrada",
        });
    }
    else {
        yield cotizacion.destroy();
        res.json({
            msg: "cotizacion eliminada de manera exitosa"
        });
    }
});
exports.deleteCotizacion = deleteCotizacion;
//enviar una cotizacion
const postCotizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const Cotizacion = yield cotizacion_1.default.create(body);
        res.json({
            msg: "La cotizacion fue creada con exito"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "error al crear cotizacion"
        });
    }
});
exports.postCotizacion = postCotizacion;

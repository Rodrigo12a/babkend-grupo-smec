"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cotizacion_1 = require("../controllers/cotizacion");
const router = (0, express_1.Router)();
router.get('/', cotizacion_1.getCotizaciones); //ruta de todas las cotizaciones
router.get('/:id', cotizacion_1.getCotizacion); //ruta de una cotizacion
router.post('/', cotizacion_1.postCotizacion); //ruta para enviar una cotizacion
router.put('/:id', cotizacion_1.updateCotizacion); //ruta para actualizar una cotizacion
router.delete('/:id', cotizacion_1.deleteCotizacion); //ruta para eliminar una cotizacion
exports.default = router;

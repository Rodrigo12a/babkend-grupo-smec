"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = exports.newCotizacion = exports.login = exports.newUser = void 0;
const usuario_1 = __importStar(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cotizacion_1 = require("../models/cotizacion");
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { estatus_usuario, nombre_usuario, ap_usuario, am_usuario, sexo_usuario, email_usuario, password_usuario, imagen_usuario, id_rol, } = req.body;
        // Crear usuario directamente sin validar existencia
        const nuevoUsuario = yield usuario_1.Usuario.create({
            estatus_usuario,
            nombre_usuario,
            ap_usuario,
            am_usuario,
            sexo_usuario,
            email_usuario,
            password_usuario, // Contraseña sin hashear
            imagen_usuario,
            id_rol
        });
        res.status(201).json({
            msg: `Usuario ${email_usuario} creado exitosamente`,
            usuario: nuevoUsuario
        });
    }
    catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
});
exports.newUser = newUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_usuario, password_usuario } = req.body;
        const usuario = yield usuario_1.Usuario.findOne({
            where: { email_usuario: email_usuario },
            attributes: ['nombre_usuario', 'password_usuario'] // Eliminé 'id'
        });
        if (!usuario) {
            res.status(400).json({ msg: "Credenciales incorrectas" });
            return;
        }
        // Validación simple de contraseña sin bcrypt
        if (password_usuario !== usuario.password_usuario) {
            res.status(400).json({ msg: "Credenciales incorrectas" });
            return;
        }
        // Respuesta exitosa sin incluir el id
        res.json({
            msg: "Acceso concedido",
            usuario: {
                nombre: usuario.nombre_usuario,
                email: email_usuario
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
});
exports.login = login;
const newCotizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mensaje_adicional, id_tipo_cotizacion, id_usuario } = req.body;
        // Validación básica de campos obligatorios
        if (!id_tipo_cotizacion || !id_usuario) {
            res.status(400).json({
                msg: "Los campos id_tipo_cotizacion e id_usuario son obligatorios"
            });
        }
        // Crear cotización en la base de datos
        const nuevaCotizacion = yield cotizacion_1.cotizacion.create({
            mensaje_adicional,
            id_tipo_cotizacion,
            id_usuario
        });
        res.status(201).json({
            msg: "Cotización creada exitosamente",
            data: nuevaCotizacion // Opcional: devolver los datos creados
        });
    }
    catch (error) {
        console.error("Error al crear cotización:", error);
        res.status(500).json({
            msg: "Error interno del servidor",
            error: error instanceof Error ? error.message : "Unknown error" // Detalle del error
        });
    }
});
exports.newCotizacion = newCotizacion;
//CRUD USUARIOS
//obtener lista usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaUsuarios = yield usuario_1.default.findAll();
    res.json({
        msg: "obtener usuario",
        listaUsuarios
    });
});
exports.getUsuarios = getUsuarios;
//obtener un usuario
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({
            msg: "obtener usuario",
            usuario
        });
    }
    else {
        res.status(404).json({
            msg: "usuario no encontrado",
            id
        });
    }
});
exports.getUsuario = getUsuario;
//eliminar un usuario
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Usuario = yield usuario_1.default.findByPk(id);
    if (!Usuario) {
        res.status(404).json({
            msg: "usuario no encontrado",
        });
    }
    else {
        yield Usuario.destroy();
        res.json({
            msg: "usuario eliminado de manera exitosa"
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//enviar un usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const Usuario = yield usuario_1.default.create(body);
        res.json({
            msg: "El usuario fue creado con exito"
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postUsuario = postUsuario;
//actualizar un usuario
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { estatus_usuario, nombre_usuario, ap_usuario, am_usuario, sexo_usuario, email_usuario, password_usuario, imagen_usuario, id_rol, } = req.body;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }
        // Verificar si se está intentando actualizar el email a uno que ya exista
        if (email_usuario && email_usuario !== usuario.get('email_usuario')) {
            const emailExistente = yield usuario_1.default.findOne({ where: { email_usuario } });
            if (emailExistente) {
                res.status(400).json({ msg: "El email ya está en uso" });
                return;
            }
        }
        // Construir los datos a actualizar
        const updatedData = {
            estatus_usuario,
            nombre_usuario,
            ap_usuario,
            am_usuario,
            sexo_usuario,
            email_usuario,
            imagen_usuario,
            id_rol,
        };
        // Si se proporciona una nueva contraseña, la hashea antes de actualizar
        if (password_usuario) {
            updatedData.password_usuario = yield bcrypt_1.default.hash(password_usuario, 10);
        }
        yield usuario.update(updatedData);
        res.json({ msg: "El usuario fue actualizado con éxito!" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar usuario", error });
    }
});
exports.updateUsuario = updateUsuario;

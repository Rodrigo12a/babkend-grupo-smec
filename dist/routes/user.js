"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/register', (0, express_async_handler_1.default)(user_1.newUser));
router.post('/login', user_1.login);
//router.post('/cotizacion', asyncHandler(newCotizacion));
//CRUD USUARIOS
router.get('/profile', user_1.getUsuarios);
router.get('/profile/:id', user_1.getUsuario);
router.delete('/profile/:id', user_1.deleteUsuario);
router.post('/profile', user_1.postUsuario);
router.put('/profile/:id', user_1.updateUsuario);
exports.default = router;

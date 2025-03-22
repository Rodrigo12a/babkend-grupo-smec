"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.DB_HOST = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.DB_HOST = process.env.DB_HOST || 'shinkansen.proxy.rlwy.net';
exports.DB_USER = process.env.DB_USER || 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'gMimNidewoBuTtAyDodFxEIRQMfhKFwr';
exports.DB_NAME = process.env.DB_NAME || 'railway';
exports.DB_PORT = Number(process.env.DB_PORT) || 25181;

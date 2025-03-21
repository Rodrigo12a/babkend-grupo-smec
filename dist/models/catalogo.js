"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogo = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.catalogo = connection_1.default.define('catalogo', {
    id_catalogo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_producto: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'catalogo',
    timestamps: false
});

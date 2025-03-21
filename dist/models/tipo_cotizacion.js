"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_cotizacion = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const catalogo_1 = require("./catalogo"); // Importación para relación
exports.tipo_cotizacion = connection_1.default.define('tipo_cotizacion', {
    id_tipo_cotizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_cotizacion: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    id_catalogo: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: catalogo_1.catalogo,
            key: 'id_catalogo'
        }
    }
}, {
    tableName: 'tipo_cotizacion',
    timestamps: false
});
// Relación con catálogo
exports.tipo_cotizacion.belongsTo(catalogo_1.catalogo, { foreignKey: 'id_catalogo' });

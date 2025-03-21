"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacion = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tipo_cotizacion_1 = require("./tipo_cotizacion");
const usuario_1 = require("./usuario");
const connection_2 = __importDefault(require("../db/connection"));
exports.cotizacion = connection_1.default.define('cotizacion', {
    id_cotizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje_adicional: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    id_tipo_cotizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: tipo_cotizacion_1.tipo_cotizacion,
            key: 'id_tipo_cotizacion'
        }
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.Usuario,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'cotizacion',
    timestamps: false
});
// Relaciones
exports.cotizacion.belongsTo(tipo_cotizacion_1.tipo_cotizacion, { foreignKey: 'id_tipo_cotizacion' });
exports.cotizacion.belongsTo(usuario_1.Usuario, { foreignKey: 'id_usuario' });
const quote = connection_2.default.define('cotizacion', {
    id_cotizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje_adicional: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    id_tipo_cotizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: tipo_cotizacion_1.tipo_cotizacion,
            key: 'id_tipo_cotizacion'
        }
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.Usuario,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'cotizacion',
    timestamps: false
});
exports.default = quote;

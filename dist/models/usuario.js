"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const roles_1 = require("./roles");
const connection_2 = __importDefault(require("../db/connection"));
exports.Usuario = connection_1.default.define('Usuario', {
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    estatus_usuario: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    nombre_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    ap_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    am_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    sexo_usuario: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: true
    },
    email_usuario: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password_usuario: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    imagen_usuario: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null
    },
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'roles', // nombre de la tabla referenciada
            key: 'id_rol'
        }
    }
}, {
    tableName: 'usuarios', // para que coincida con el nombre de la tabla SQL
    timestamps: false // deshabilita los campos createdAt y updatedAt si no se requieren
});
exports.Usuario.belongsTo(roles_1.roles, { foreignKey: 'id_rol' });
const user = connection_2.default.define('Usuario', {
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    estatus_usuario: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    nombre_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    ap_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    am_usuario: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    sexo_usuario: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: true
    },
    email_usuario: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password_usuario: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    imagen_usuario: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null
    },
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'roles', // nombre de la tabla referenciada
            key: 'id_rol'
        }
    }
}, {
    tableName: 'usuarios', // para que coincida con el nombre de la tabla SQL
    timestamps: false // deshabilita los campos createdAt y updatedAt si no se requieren  
});
exports.default = user;

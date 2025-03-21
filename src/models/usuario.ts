import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { roles } from './roles';
import db from '../db/connection';

export const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  estatus_usuario: {
    type: DataTypes.TINYINT, 
    allowNull: false
  },
  nombre_usuario: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  ap_usuario: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  am_usuario: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  sexo_usuario: {
    type: DataTypes.TINYINT, 
    allowNull: true
  },
  email_usuario: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  password_usuario: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  imagen_usuario: { 
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null
  },
  id_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: 'roles', // nombre de la tabla referenciada
      key: 'id_rol'
    }
  }
}, {
  tableName: 'usuarios', // para que coincida con el nombre de la tabla SQL
  timestamps: false // deshabilita los campos createdAt y updatedAt si no se requieren
});
Usuario.belongsTo(roles, { foreignKey: 'id_rol' });


const user = db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    estatus_usuario: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    nombre_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ap_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    am_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    sexo_usuario: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    email_usuario: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password_usuario: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    imagen_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles', // nombre de la tabla referenciada
            key: 'id_rol'
        }
    }
}, {
    tableName: 'usuarios', // para que coincida con el nombre de la tabla SQL
    timestamps: false // deshabilita los campos createdAt y updatedAt si no se requieren  
})
export default user;
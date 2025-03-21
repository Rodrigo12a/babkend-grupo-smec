import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { tipo_cotizacion } from "./tipo_cotizacion";
import { Usuario } from "./usuario";
import db from '../db/connection';

export const cotizacion = sequelize.define('cotizacion', {
  id_cotizacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mensaje_adicional: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  id_tipo_cotizacion: { // Clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: tipo_cotizacion,
      key: 'id_tipo_cotizacion'
    }
  },
  id_usuario: { // Clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  }
}, {
  tableName: 'cotizacion',
  timestamps: false
});

// Relaciones
cotizacion.belongsTo(tipo_cotizacion, { foreignKey: 'id_tipo_cotizacion' });
cotizacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });



const quote = db.define('cotizacion', {
    id_cotizacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje_adicional: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_tipo_cotizacion: { // Clave foránea
        type: DataTypes.INTEGER,
        references: {
            model: tipo_cotizacion,
            key: 'id_tipo_cotizacion'
        }
    },
    id_usuario: { // Clave foránea
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'cotizacion',
    timestamps: false
});
export default quote;
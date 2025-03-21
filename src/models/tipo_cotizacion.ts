import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { catalogo } from "./catalogo"; // Importación para relación

export const tipo_cotizacion = sequelize.define('tipo_cotizacion', {
  id_tipo_cotizacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_cotizacion: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_catalogo: { // Clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: catalogo,
      key: 'id_catalogo'
    }
  }
}, {
  tableName: 'tipo_cotizacion',
  timestamps: false
});

// Relación con catálogo
tipo_cotizacion.belongsTo(catalogo, { foreignKey: 'id_catalogo' });
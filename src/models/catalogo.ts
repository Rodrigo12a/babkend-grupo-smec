import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const catalogo = sequelize.define('catalogo', {
  id_catalogo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_producto: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'catalogo',
  timestamps: false
});
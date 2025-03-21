import { DataTypes,} from "sequelize";
import sequelize from "../db/connection";
export const roles = sequelize.define('role',{ 
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_rol: {
        type: DataTypes.STRING
    }
})
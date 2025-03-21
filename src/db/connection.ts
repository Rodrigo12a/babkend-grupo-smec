"use strict";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('smec', 'AdministradorSmec','Administrador',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;
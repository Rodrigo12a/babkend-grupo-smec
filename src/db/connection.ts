"use strict";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "railway", // Nombre de la base de datos
  "root", // Usuario
  "vshDTGJHsbNopQPWHEsgwHORnhAgBChs", // Contraseña
  {
    host: "shortline.proxy.rlwy.net", // Host
    port: 48394, // Puerto
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true, // Puede ser necesario si Railway lo exige
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;

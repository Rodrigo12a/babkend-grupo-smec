"use strict";
import { Sequelize } from "sequelize";
//mysql://root:vshDTGJHsbNopQPWHEsgwHORnhAgBChs@shortline.proxy.rlwy.net:48394/railway
const sequelize = new Sequelize(
  "smec", // Nombre de la base de datos
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

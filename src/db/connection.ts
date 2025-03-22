"use strict";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

mysql://root:vshDTGJHsbNopQPWHEsgwHORnhAgBChs@shortline.proxy.rlwy.net:48394/railway
dotenv.config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize(
    process.env.DB_NAME || "smec",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "vshDTGJHsbNopQPWHEsgwHORnhAgBChs",
    {
      host: process.env.DB_HOST || "shortline.proxy.rlwy.net",
      port: Number(process.env.DB_PORT) || 48394,
      dialect: "mysql",
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );
  

export default sequelize;

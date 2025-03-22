"use strict";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config(); // Cargar variables de entorno desde .env

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL no está definida en las variables de entorno");
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para Railway
    },
  },
});
  

export default sequelize;

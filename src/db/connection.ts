import { Sequelize } from "sequelize";

const databaseUrl = process.env.DATABASE_URL!; // Usamos "!" para indicar que nunca será undefined

const sequelize = new Sequelize(databaseUrl, {
    dialect: "mysql",
    logging: false,
    dialectOptions: {
        ssl: { 
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export default sequelize;
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const connect = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres'
});

const sequelize = async () => {
    try {
        await connect.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

sequelize();

module.exports = sequelize;
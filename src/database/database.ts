import { Sequelize } from "sequelize-typescript";
import Budget from "../models/Budget";
import Expense from "../models/Expense";

process.loadEnvFile();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env as {
  [key: string]: string;
};

const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "postgres",
  logging: false,
  models: [Budget, Expense],
});

export default database;

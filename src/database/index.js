import { Sequelize } from "sequelize"
import "dotenv/config"

const { USERNAME, DATABASE, PASSWORD } = process.env

export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql"
})

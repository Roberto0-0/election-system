import { DataTypes } from "sequelize"
import { sequelize } from "../../database/index.js"

export const Details = sequelize.define("details", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  wishes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

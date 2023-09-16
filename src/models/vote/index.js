import { DataTypes } from "sequelize"
import { sequelize } from "../../database/index.js"

export const Vote = sequelize.define("voters", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  candidate: {
    type: DataTypes.STRING,
    allowNull: false
  },

  electoralParty: {
    type: DataTypes.STRING,
    allowNull: false
  },

  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

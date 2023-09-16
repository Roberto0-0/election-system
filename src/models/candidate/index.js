import { DataTypes } from "sequelize"
import { sequelize } from "../../database/index.js"

export const Candidate = sequelize.define("candidates", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    electoralParty: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    number: {
        type: DataTypes.INTEGER,
        unique: true
    },

    wishes: {
        type: DataTypes.INTEGER,
        unique: true,
        defaultValue: 0
    }
})

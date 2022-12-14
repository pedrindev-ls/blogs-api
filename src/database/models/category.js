const sequelize = require('sequelize');

const CreateCategories = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  })
  return Category;
}

module.exports = CreateCategories
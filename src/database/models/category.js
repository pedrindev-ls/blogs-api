const sequelize = require('sequelize');

const CreateCategories = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timeStamp: false,
  })
  return Category;
}

module.exports = CreateCategories
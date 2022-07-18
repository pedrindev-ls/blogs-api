const sequelize = require('sequelize');

const CreateBlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
    },
    updated:{
      type: DataTypes.DATE,
    }
  }, {
    timestamps: false,
  });

  BlogPosts.associate = (db) => {
    BlogPosts.belongsTo(db.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }
  return BlogPosts;
}

module.exports = CreateBlogPosts
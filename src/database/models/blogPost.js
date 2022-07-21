const sequelize = require('sequelize');

const CreateBlogPosts = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
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
    createdAt: 'published',
    updatedAt: 'updated'
  });

  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }
  return BlogPost;
}

module.exports = CreateBlogPosts
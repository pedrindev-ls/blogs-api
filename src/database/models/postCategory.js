const sequelize = require('sequelize');

const CreatePostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',{
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  })

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      ForeignKey: 'postId',
      through: 'PostCategory',
      otherKey: 'categoryId'
    })
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      through: 'PostCategory',
      otherKey: 'postId'
    })
  }
  return PostCategory;
}

module.exports =  CreatePostCategory

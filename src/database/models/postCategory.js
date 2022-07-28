const sequelize = require('sequelize');
const db = require('.');

const CreatePostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',{
    postId: {
      type: DataTypes.INTEGER,
      references:{ 
        model: 'BlogPosts',
        key: 'id',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references:{ 
        model: 'Categories',
        key: 'id',
      }
    }
  }, {
    timestamps: false,
  })

  PostCategory.associate = ({ BlogPost, Categories }) => {
    BlogPost.belongsToMany(Categories, {
      as: 'categories',
      foreignKey: 'postId',
      through: 'PostCategory',
      otherKey: 'categoryId'
    })
    Categories.belongsToMany(BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      through: 'PostCategory',
      otherKey: 'postId'
    })
  }
  return PostCategory;
}

module.exports =  CreatePostCategory

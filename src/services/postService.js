const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../middlewares/joiTester');

const postService = {
  validatePost: runSchema(Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  })),
  add: async ({ title, content, userId }) => {
    const item = await db.BlogPost.create({ title, content, userId });
    return item;
  },
  getAll: async () => {
    const item = await db.BlogPost.findAll({
      include: [
        { model: db.User,
        as: 'user',
        attributes: { 
          exclude: ['password'], 
        }, 
      },
      {
        model: db.Categories,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
    ],
  });
    return item;
  },
};

module.exports = postService;

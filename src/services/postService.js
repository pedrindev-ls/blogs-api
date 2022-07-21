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
};

module.exports = postService;

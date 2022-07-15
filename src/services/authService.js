const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../middlewares/joiTester');

const authService = {
  validateBody: runSchema(Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  })),
  login: async (email, password) => {
    const user = await db.User.findOne({
      where: { email },
    });
    if (!user || user.password !== password) {
      throw new Error('Invalid fields');
    }
    return user;
  },
};

module.exports = authService;
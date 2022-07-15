const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../middlewares/joiTester');

const usersService = {
  validateRegister: runSchema(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.required(),
    password: Joi.string().min(6).required(),
    image: Joi.required(),
  })),
  addUser: async (data) => {
    const { displayName, email, password, image } = data;
    const EMAILREGEX = /\w+@\w+\.\S+/g;

    if (!EMAILREGEX.test(email)) {
      throw new Error('"email" must be a valid email');
    }

    const checkUser = await db.User.findOne({
      where: { email },
    });
    if (checkUser) {
      throw new Error('User already registered');
    }

    const user = await db.User.create({ displayName, email, password, image });
    return user;
  },
};

module.exports = usersService;
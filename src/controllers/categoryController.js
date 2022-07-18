const categoryService = require('../services/categoryService');
const jwtService = require('../services/jwtService');

const categoryController = {
  add: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const { name } = req.body;

      jwtService.validateToken(authorization);
  
      const item = await categoryService.addCategory(name);
  
      res.status(201).json(item);
    } catch (error) {
      if (error.message === '"name" is required') {
      return res.status(400).json({ message: error.message });
      }
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = categoryController;
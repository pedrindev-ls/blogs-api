const db = require('../database/models');

const categoryService = {
  addCategory: async (name) => {
    if (!name) {
      throw new Error('"name" is required');
    }
    const item = db.Category.create({ name });
    
    return item;
  },
};

module.exports = categoryService;
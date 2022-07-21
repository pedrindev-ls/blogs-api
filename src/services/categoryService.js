const db = require('../database/models');

const categoryService = {
  addCategory: async (name) => {
    if (!name) {
      throw new Error('"name" is required');
    }
    const item = db.Category.create({ name });
    
    return item;
  },
  get: async () => {
    const items = await db.Category.findAll();
    return items;
  },
};

module.exports = categoryService;
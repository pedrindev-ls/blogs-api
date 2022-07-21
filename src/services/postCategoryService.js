const db = require('../database/models');

const postCategory = {
  add: async (categoryId, postId) => {
    const categoryCheck = await db.Category.findByPk(categoryId);

    if (!categoryCheck) {
      throw new Error('"categoryIds" not found');
    }

    const item = await db.PostCategory.create({ categoryId, postId });
    return item;
  },
};

module.exports = postCategory;

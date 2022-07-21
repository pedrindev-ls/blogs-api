const jwtService = require('../services/jwtService');
const postCategory = require('../services/postCategoryService');
const postService = require('../services/postService');
const usersService = require('../services/usersService');

const postController = {
  addPost: async (req, res) => {
    try {
      const { title, content, categoryIds } = postService.validatePost(req.body);
      const { authorization } = req.headers;
  
      const { data } = jwtService.validateToken(authorization);

      const { id: userId } = await usersService.getWithKey(data);
  
      const post = await postService.add({ title, content, userId });

      const categoriesAdd = categoryIds.map((category) => postCategory.add(category, post.id));

      await Promise.all(categoriesAdd);
  
      res.status(201).json(post);
    } catch (error) {
      if (error.message.includes('allowed')) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }
      if (error.message === '"categoryIds" not found') {
        return res.status(400).json({ message: error.message });
      }

      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = postController;

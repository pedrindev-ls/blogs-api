const { Router } = require('express');

const postsController = require('../controllers/postsController');

const postsRouter = Router();

postsRouter.post('/', postsController.addPost);
postsRouter.get('/', postsController.getPosts);

module.exports = postsRouter;
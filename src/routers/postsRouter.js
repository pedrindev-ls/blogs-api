const { Router } = require('express');

const postsController = require('../controllers/postsController');

const postsRouter = Router();

postsRouter.post('/', postsController.addPost);

module.exports = postsRouter;
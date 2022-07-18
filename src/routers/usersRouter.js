const { Router } = require('express');

const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/:id', usersController.getUserId);
usersRouter.post('/', usersController.add);
usersRouter.get('/', usersController.getUser);

module.exports = usersRouter;
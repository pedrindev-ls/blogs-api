const { Router } = require('express');

const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.post('/', usersController.add);

module.exports = usersRouter;
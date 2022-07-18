const { Router } = require('express');

const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.post('/', categoryController.add);

module.exports = categoryRouter;
const { Router } = require('express');

const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.post('/', categoryController.add);
categoryRouter.get('/', categoryController.getAll);

module.exports = categoryRouter;
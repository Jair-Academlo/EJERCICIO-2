const express = require('express');
const { crearTarea } = require('../controllers/task.controller');
const { createTaskValidator } = require('../middlewares/validator.middleware');

const router = express.Router();

router.post('/', createTaskValidator, crearTarea);

module.exports = { taskRouter: router };

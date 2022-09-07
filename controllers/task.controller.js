const { Task } = require('../models/taks.model');

const crearTarea = async (req, res) => {
  try {
    const { title, userId, limitDate } = req.body;
    const nuevaTarea = await Task.create({ title, userId, limitDate });
    res.status(201).json({
      message: 'Tarea creada con exito',
      status: 'operacion exitosa',
      nuevaTarea,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { crearTarea };

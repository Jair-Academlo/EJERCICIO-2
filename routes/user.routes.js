const express = require('express');

const {
  createUser,
  AllUsers,
  userById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUser);
router.get('/', AllUsers);
router.get('/:id', userById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = { userRouter: router };

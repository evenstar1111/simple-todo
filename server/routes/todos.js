const router = require('express').Router();
const {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} = require('../controllers/todos');

router.post('/todos', createTodo);
router.get('/todos', getAllTodos);
router.put('/todos', updateTodo);
router.delete('/todos', deleteTodo);

module.exports = router;

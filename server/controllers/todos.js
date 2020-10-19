const Todos = require('../model/todos');

exports.createTodo = async (req, res) => {
  const { title, description, status } = req.body;
  await Todos.findOne({ title }).exec((error, note) => {
    if (error) {
      return res.json({ error: error });
    }
    if (note) {
      return res.json({ error: 'titles have to be unique' });
    }

    let newTodo = new Todos({ title, description, status });

    newTodo.save((err, success) => {
      if (err) {
        return res.json({ error: err });
      }

      res.json({ message: 'new document inserted' });
    });
  });
};

exports.deleteTodo = async (req, res) => {
  const { title } = req.body;
  await Todos.deleteOne({ title }).exec((err, result) => {
    if (err) {
      return res.json({ error: err });
    }

    res.json({ message: 'item deleted successfully' });
  });
};

exports.getAllTodos = async (req, res) => {
  await Todos.find().exec((err, todos) => {
    if (err) {
      return res.json({ error: err });
    }

    res.json(todos);
  });
};

exports.updateTodo = async (req, res) => {
  const { title, description, status } = req.body;

  const find = { title };
  const update = { description, status };
  await Todos.findOneAndUpdate(find, update).exec((err, success) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ message: 'updated successfully' });
  });
};

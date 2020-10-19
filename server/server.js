require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;

//routers
const todosRouter = require('./routes/todos');

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false,
  })
  .then(() => console.log('connected to db'))
  .catch((e) => console.log(e));

const app = express();

app.use(bodyParser.json({ extends: false }));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use('/api', todosRouter);

app.listen(port, () => console.log(`listeningt to port: ${port}`));

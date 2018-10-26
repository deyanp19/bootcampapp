const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).send({ message: 'Hello World!'}));

app.listen(port, () => console.log(`Listening on ${port}`))

module.exports = app;

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

//   // SQLite only
//   storage: 'path/to/database.sqlite'
// });

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
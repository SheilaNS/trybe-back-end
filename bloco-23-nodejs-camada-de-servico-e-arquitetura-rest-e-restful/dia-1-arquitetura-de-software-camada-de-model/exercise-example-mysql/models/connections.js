const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Trybe@123',
  database: 'db',
});

module.exports = connection;